import React, { useState, useEffect, useMemo } from 'react';
import { 
  Send, Sparkles, BookOpen, Layers, FileText, Search, 
  CheckCircle, Video, ArrowRight, Shield, Award, Users, Download, Plus, Check, Play 
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BatchDetailView } from './components/BatchDetailView';
import { LecturePlayerModal } from './components/LecturePlayerModal';
import { NotesViewerModal } from './components/NotesViewerModal';
import { TelegramModal } from './components/TelegramModal';
import { SearchModal } from './components/SearchModal';
import { DedicatedNotesHub } from './components/DedicatedNotesHub';
import { MobileBottomNav } from './components/MobileBottomNav';
import { BATCHES_DATA, Batch, Lecture, NoteDoc, BRAND_ASSETS, getPlatformStats, getAllNotes } from './data/batchesData';
import { fetchAllBatches, EnhancedBatch, fetchAppMetadata } from './services/api';

interface VideoPlayerState {
  courseId: string;
  videoId: string;
  title: string;
  duration?: string;
  thumbnail?: string;
}

interface PdfViewerState {
  url: string;
  title: string;
}

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'batches' | 'notes'>('home');
  const [realBatches, setRealBatches] = useState<EnhancedBatch[]>([]);
  const [selectedRealBatch, setSelectedRealBatch] = useState<EnhancedBatch | null>(null);
  const [selectedBatch, setSelectedBatch] = useState<Batch | null>(null);
  
  // Player state
  const [activeVideoStream, setActiveVideoStream] = useState<VideoPlayerState | null>(null);
  const [activePdfViewer, setActivePdfViewer] = useState<PdfViewerState | null>(null);
  const [selectedLecture, setSelectedLecture] = useState<Lecture | null>(null);
  const [selectedNote, setSelectedNote] = useState<NoteDoc | null>(null);

  // Filters & Tabs
  const [selectedClassFilter, setSelectedClassFilter] = useState<string>('All');
  const [batchTab, setBatchTab] = useState<'all' | 'enrolled'>('all');
  const [batchSearchInput, setBatchSearchInput] = useState<string>('');
  
  // Enrolled Batches saved in localStorage
  const [enrolledBatchIds, setEnrolledBatchIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('gbstudy_enrolled_batches');
      return saved ? JSON.parse(saved) : ['141', '364', '140', '253'];
    } catch {
      return ['141', '364', '140', '253'];
    }
  });

  const toggleEnroll = (e: React.MouseEvent, batchId: string) => {
    e.stopPropagation();
    setEnrolledBatchIds(prev => {
      const updated = prev.includes(batchId)
        ? prev.filter(id => id !== batchId)
        : [...prev, batchId];
      try {
        localStorage.setItem('gbstudy_enrolled_batches', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  // Telegram popup on page open
  const [isTelegramModalOpen, setIsTelegramModalOpen] = useState<boolean>(true);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);

  // Load all 46 real batches and app metadata on mount
  useEffect(() => {
    let isMounted = true;
    fetchAllBatches()
      .then(batches => {
        if (isMounted) {
          setRealBatches(batches);
        }
      })
      .catch(err => console.error('Failed to load batches:', err));

    fetchAppMetadata().then(meta => {
      if (meta && meta.name) {
        // Keeps document title aligned with public/metadata.json
        document.title = meta.name;
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  const stats = getPlatformStats();
  const allNotes = getAllNotes();

  // Listen for keyboard '/' to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !isSearchModalOpen && (e.target as HTMLElement).tagName !== 'INPUT') {
        e.preventDefault();
        setIsSearchModalOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchModalOpen]);

  // Filtered Real Batches
  const filteredBatches = useMemo(() => {
    return realBatches.filter(batch => {
      // Class filter
      if (selectedClassFilter !== 'All') {
        if (batch.category !== selectedClassFilter) return false;
      }

      // Enrolled tab filter
      if (batchTab === 'enrolled' && !enrolledBatchIds.includes(batch.id)) {
        return false;
      }

      // Text search
      if (batchSearchInput.trim()) {
        const q = batchSearchInput.toLowerCase();
        return (
          batch.title.toLowerCase().includes(q) ||
          batch.category.toLowerCase().includes(q) ||
          batch.id.includes(q)
        );
      }

      return true;
    });
  }, [realBatches, selectedClassFilter, batchTab, enrolledBatchIds, batchSearchInput]);

  const handleOpenRealBatch = (batch: EnhancedBatch) => {
    setSelectedRealBatch(batch);
    setSelectedBatch(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePlayRealVideo = (courseId: string, videoId: string, title: string, duration?: string, thumb?: string) => {
    setActiveVideoStream({
      courseId,
      videoId,
      title,
      duration,
      thumbnail: thumb,
    });
  };

  const handleOpenRealPdf = (pdfUrl: string, title: string) => {
    setActivePdfViewer({
      url: pdfUrl,
      title,
    });
  };

  const handleSelectNavTab = (tab: 'home' | 'batches' | 'notes') => {
    setActiveTab(tab);
    setSelectedRealBatch(null);
    setSelectedBatch(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#08030d] text-slate-100 flex flex-col font-sans selection:bg-pink-600 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={handleSelectNavTab}
        onOpenSearch={() => setIsSearchModalOpen(true)}
        onOpenTelegram={() => setIsTelegramModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16 md:pb-6">
        {/* If a real batch is selected, show its full live folders & lectures */}
        {selectedRealBatch ? (
          <BatchDetailView
            batch={selectedRealBatch}
            onBack={() => setSelectedRealBatch(null)}
            onPlayVideo={handlePlayRealVideo}
            onOpenPdf={handleOpenRealPdf}
          />
        ) : activeTab === 'notes' ? (
          /* Notes Hub */
          <DedicatedNotesHub
            onSelectNote={(note) => setSelectedNote(note)}
          />
        ) : (
          /* Home & Batches Views */
          <div>
            {/* Hero Section (only on home tab) */}
            {activeTab === 'home' && (
              <section className="relative overflow-hidden pt-8 pb-14 sm:pt-14 sm:pb-20 border-b border-pink-500/15">
                {/* Glowing ambient backgrounds */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-pink-600/20 via-rose-600/15 to-purple-600/10 blur-[130px] rounded-full pointer-events-none" />
                <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500/10 blur-[100px] rounded-full pointer-events-none" />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
                  {/* Top Badge */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b0b2e] border border-pink-500/40 text-pink-300 text-xs sm:text-sm font-bold mb-6 shadow-md shadow-pink-900/40 animate-fade-in">
                    <img
                      src={BRAND_ASSETS.logo}
                      alt="GB STUDY"
                      className="w-4 h-4 rounded-full object-cover"
                    />
                    <span>100% Free Complete Educational Platform · No Login Needed</span>
                  </div>

                  {/* Main Headline */}
                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white font-syne tracking-tight max-w-4xl mx-auto leading-[1.15] mb-5">
                    Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-300 to-pink-500">GB STUDY</span>
                    <br />
                    <span className="text-xl sm:text-3xl md:text-4xl text-slate-200 font-extrabold block mt-2">
                      All Real Batches, HD Video Lectures & Topper Notes
                    </span>
                  </h1>

                  {/* Subtitle */}
                  <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                    Access all 46 live and recorded batches for <strong className="text-pink-400">Class 9th, 10th, 11th, 12th, Science & NDA</strong>. Smooth streaming video player with speed controls, quality switcher, and chapterwise PDF notes!
                  </p>

                  {/* Primary Action Buttons */}
                  <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mb-10">
                    <button
                      onClick={() => {
                        const el = document.getElementById('batches-section');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600 hover:from-pink-500 hover:to-rose-500 text-white font-black text-sm sm:text-base shadow-xl shadow-pink-600/40 hover:shadow-pink-600/60 transition-all hover:scale-[1.03] cursor-pointer flex items-center gap-2"
                    >
                      <span>Explore All 46 Batches</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <a
                      href={BRAND_ASSETS.telegramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 rounded-2xl bg-[#1d0d30] hover:bg-pink-900/40 text-pink-300 hover:text-white border border-pink-500/40 font-bold text-sm sm:text-base shadow-lg transition-all hover:scale-[1.03] flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Join Telegram Channel</span>
                    </a>
                  </div>

                  {/* Trust Stats Bar */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto pt-6 border-t border-pink-500/20 text-center">
                    <div className="p-3 rounded-xl bg-[#140822] border border-pink-500/20">
                      <div className="text-xl sm:text-2xl font-black text-pink-400">46+</div>
                      <div className="text-[11px] sm:text-xs text-slate-400 font-medium">Real Batches</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#140822] border border-pink-500/20">
                      <div className="text-xl sm:text-2xl font-black text-rose-400">1,200+</div>
                      <div className="text-[11px] sm:text-xs text-slate-400 font-medium">HD Lectures</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#140822] border border-pink-500/20">
                      <div className="text-xl sm:text-2xl font-black text-fuchsia-400">500+</div>
                      <div className="text-[11px] sm:text-xs text-slate-400 font-medium">Chapter PDFs</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#140822] border border-pink-500/20">
                      <div className="text-xl sm:text-2xl font-black text-emerald-400">100% Free</div>
                      <div className="text-[11px] sm:text-xs text-slate-400 font-medium">No Login Needed</div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Batches Section */}
            <section id="batches-section" className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
              {/* Section Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-600/15 border border-pink-500/30 text-pink-400 text-xs font-bold uppercase tracking-wider mb-2">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Real Batches & Courses</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white font-syne tracking-tight">
                    Choose Your Academic Batch
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Showing <strong className="text-pink-400">{filteredBatches.length}</strong> available batches. Click any batch to browse subjects, chapters, real lectures and notes.
                  </p>
                </div>

                {/* Search in Batches */}
                <div className="relative w-full md:w-72">
                  <Search className="w-4 h-4 text-pink-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={batchSearchInput}
                    onChange={(e) => setBatchSearchInput(e.target.value)}
                    placeholder="Search batch by name..."
                    className="w-full bg-[#150a24] border border-pink-500/30 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-pink-500"
                  />
                  {batchSearchInput && (
                    <button
                      onClick={() => setBatchSearchInput('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs cursor-pointer"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>

              {/* Class Filter Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
                {['All', 'Class 12th', 'Class 11th', 'Class 10th', 'Class 9th', 'NDA & Defence', 'Commerce & Other'].map((cat) => {
                  const isActive = selectedClassFilter === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedClassFilter(cat)}
                      className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                        isActive
                          ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-md shadow-pink-600/30 scale-[1.02]'
                          : 'bg-[#150a24] hover:bg-[#200e33] text-slate-300 hover:text-white border border-pink-500/20'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>

              {/* Batches Cards Grid */}
              {filteredBatches.length === 0 ? (
                <div className="py-16 text-center rounded-2xl bg-[#140822] border border-pink-500/20 my-4">
                  <Layers className="w-12 h-12 text-pink-400 mx-auto mb-2 opacity-60" />
                  <p className="text-white font-bold text-base mb-1">No batches found</p>
                  <p className="text-slate-400 text-xs">Try selecting a different class filter or clear your search term.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filteredBatches.map((batch) => {
                    const isEnrolled = enrolledBatchIds.includes(batch.id);

                    return (
                      <div
                        key={batch.id}
                        onClick={() => handleOpenRealBatch(batch)}
                        className="rounded-2xl bg-[#130720] border border-pink-500/25 hover:border-pink-500/60 overflow-hidden flex flex-col group shadow-lg hover:shadow-pink-900/30 transition-all cursor-pointer hover:-translate-y-1"
                      >
                        {/* Thumbnail */}
                        <div className="relative aspect-video w-full bg-[#0a0312] overflow-hidden">
                          <img
                            src={batch.thumbnail}
                            alt={batch.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            onError={(e) => {
                              (e.target as HTMLElement).style.display = 'none';
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#130720] via-transparent to-transparent opacity-80" />

                          {/* Floating Class & Year Badges */}
                          <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                            <span className="px-2 py-0.5 rounded-md bg-pink-600/95 text-white font-black text-[10px] tracking-wider uppercase shadow-md">
                              {batch.category}
                            </span>
                            <span className="px-2 py-0.5 rounded-md bg-black/80 text-pink-300 font-semibold text-[10px] border border-white/10 backdrop-blur-sm">
                              {batch.year}
                            </span>
                          </div>

                          {/* Mode Badge (Live & Recorded) */}
                          <div className="absolute bottom-2.5 right-2.5">
                            <span className="px-2 py-0.5 rounded-md bg-black/80 text-emerald-400 font-bold text-[10px] border border-emerald-500/30 backdrop-blur-sm">
                              {batch.mode}
                            </span>
                          </div>
                        </div>

                        {/* Batch Details */}
                        <div className="p-4 flex-1 flex flex-col justify-between">
                          <div>
                            <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-pink-300 transition-colors line-clamp-2 leading-snug mb-2">
                              {batch.title}
                            </h3>
                            <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                              {batch.description}
                            </p>
                          </div>

                          {/* Action Buttons: Let's Study (Pink) */}
                          <div className="flex items-center gap-2 pt-3 border-t border-pink-500/15">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleOpenRealBatch(batch);
                              }}
                              className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-md shadow-pink-600/30 transition-all hover:scale-[1.02] cursor-pointer"
                            >
                              <span>Let's Study</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>

                            <button
                              onClick={(e) => toggleEnroll(e, batch.id)}
                              className={`p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                                isEnrolled
                                  ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-400'
                                  : 'bg-[#220d35] hover:bg-pink-900/40 border-pink-500/30 text-pink-300 hover:text-white'
                              }`}
                              title={isEnrolled ? 'Enrolled' : 'Add to My Batches'}
                            >
                              {isEnrolled ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </section>
          </div>
        )}
      </main>

      {/* Video Player Modal */}
      {activeVideoStream && (
        <LecturePlayerModal
          courseId={activeVideoStream.courseId}
          videoId={activeVideoStream.videoId}
          title={activeVideoStream.title}
          duration={activeVideoStream.duration}
          thumbnail={activeVideoStream.thumbnail}
          onClose={() => setActiveVideoStream(null)}
          onOpenPdf={handleOpenRealPdf}
        />
      )}

      {/* Fallback Static Lecture Modal */}
      {selectedLecture && (
        <LecturePlayerModal
          lecture={selectedLecture}
          onClose={() => setSelectedLecture(null)}
          onOpenPdf={handleOpenRealPdf}
        />
      )}

      {/* PDF Viewer Modal */}
      {activePdfViewer && (
        <NotesViewerModal
          pdfUrl={activePdfViewer.url}
          title={activePdfViewer.title}
          onClose={() => setActivePdfViewer(null)}
        />
      )}

      {/* Fallback Static Note Modal */}
      {selectedNote && (
        <NotesViewerModal
          note={selectedNote}
          onClose={() => setSelectedNote(null)}
        />
      )}

      {/* Telegram Popup (Opens when website opens) */}
      <TelegramModal
        isOpen={isTelegramModalOpen}
        onClose={() => setIsTelegramModalOpen(false)}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        realBatches={realBatches}
        onSelectRealBatch={(batch) => {
          setSelectedRealBatch(batch);
          setActiveTab('batches');
        }}
        onSelectBatch={(batch) => {
          const matched = realBatches.find(b => b.id === String(batch.batchIdNumeric));
          if (matched) {
            setSelectedRealBatch(matched);
          } else {
            setSelectedBatch(batch);
          }
        }}
        onSelectLecture={(batch, lecture) => {
          setSelectedLecture(lecture);
        }}
        onSelectNote={(note) => {
          setSelectedNote(note);
        }}
      />

      {/* Mobile Bottom Navigation Bar */}
      <MobileBottomNav
        activeTab={activeTab}
        onSelectTab={handleSelectNavTab}
        onOpenSearch={() => setIsSearchModalOpen(true)}
        onOpenTelegram={() => setIsTelegramModalOpen(true)}
      />

      {/* Footer */}
      <Footer
        onSelectTab={handleSelectNavTab}
        onOpenTelegram={() => setIsTelegramModalOpen(true)}
      />
    </div>
  );
}
