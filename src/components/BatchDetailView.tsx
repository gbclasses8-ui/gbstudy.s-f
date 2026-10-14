import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, Video, FileText, Send, CheckCircle2, 
  ChevronRight, Play, Download, Sparkles, Folder, 
  Search, RefreshCw, AlertTriangle, Layers, Calendar, Clock,
  ExternalLink
} from 'lucide-react';
import { 
  fetchFolderContents, 
  FolderContentItem, 
  formatDuration, 
  formatDateTime, 
  getProxyPdfUrl,
  EnhancedBatch
} from '../services/api';
import { BRAND_ASSETS } from '../data/batchesData';

interface Crumb {
  id: string;
  title: string;
}

interface BatchDetailViewProps {
  batch: EnhancedBatch | {
    id: string;
    numericId: number;
    title: string;
    thumbnail: string;
    category?: string;
    year?: string;
    mode?: string;
    description?: string;
  };
  onBack: () => void;
  onPlayVideo: (courseId: string, videoId: string, title: string, duration?: string, thumb?: string) => void;
  onOpenPdf: (pdfUrl: string, title: string) => void;
}

export const BatchDetailView: React.FC<BatchDetailViewProps> = ({
  batch,
  onBack,
  onPlayVideo,
  onOpenPdf,
}) => {
  const [navStack, setNavStack] = useState<Crumb[]>([{ id: '-1', title: 'Batch Home' }]);
  const [items, setItems] = useState<FolderContentItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const currentFolder = navStack[navStack.length - 1];

  // Reset state when switching batches
  useEffect(() => {
    setNavStack([{ id: '-1', title: 'Batch Home' }]);
    setSearchQuery('');
  }, [batch.id]);

  // Load folder contents whenever current folder changes
  useEffect(() => {
    let isCancelled = false;

    async function loadContents() {
      setLoading(true);
      setError(null);

      try {
        const folderIdToFetch = currentFolder.id;
        const data = await fetchFolderContents(batch.id, folderIdToFetch);
        if (!isCancelled) {
          setItems(data);
          setLoading(false);
        }
      } catch (err: any) {
        if (!isCancelled) {
          setError(err?.message || 'Could not load folder contents. Please check your network.');
          setLoading(false);
        }
      }
    }

    loadContents();

    return () => {
      isCancelled = true;
    };
  }, [batch.id, currentFolder.id]);

  const handleNavigateToFolder = (folderId: string, folderTitle: string) => {
    setSearchQuery('');
    setNavStack(prev => [...prev, { id: folderId, title: folderTitle }]);
  };

  const handleJumpToCrumb = (index: number) => {
    setSearchQuery('');
    setNavStack(prev => prev.slice(0, index + 1));
  };

  const handleGoBack = () => {
    if (navStack.length > 1) {
      setNavStack(prev => prev.slice(0, prev.length - 1));
    } else {
      onBack();
    }
  };

  // Filter items by local search query
  const filteredItems = items.filter(item => {
    if (!searchQuery.trim()) return true;
    const title = (item.Title || item.title || '').toLowerCase();
    return title.includes(searchQuery.toLowerCase());
  });

  // Calculate folder item counts
  const folderCount = items.filter(i => (i.material_type || i.type) === 'FOLDER').length;
  const videoCount = items.filter(i => (i.material_type || i.type) === 'VIDEO').length;
  const pdfCount = items.filter(i => {
    const t = (i.material_type || i.type || '').toUpperCase();
    return t === 'PDF' || t === 'NOTES' || t === 'DOCUMENT';
  }).length;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 pb-24">
      {/* Top Bar with Back and Telegram CTA */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <button
          onClick={handleGoBack}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#1b0e2b] hover:bg-pink-900/30 text-pink-300 hover:text-white border border-pink-500/30 transition-all font-semibold text-xs sm:text-sm cursor-pointer shadow-sm group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>{navStack.length > 1 ? 'Previous Folder' : 'All Batches'}</span>
        </button>

        <a
          href={BRAND_ASSETS.telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-pink-600/30 transition-all hover:scale-[1.02]"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Join GB STUDY Telegram</span>
        </a>
      </div>

      {/* Batch Hero Banner */}
      <div className="rounded-2xl sm:rounded-3xl border border-pink-500/30 bg-gradient-to-br from-[#1b0b2b] via-[#12071f] to-[#090310] p-4 sm:p-6 mb-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-pink-600/10 blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-6 relative z-10">
          {/* Batch Thumbnail */}
          <div className="w-full md:w-64 aspect-video rounded-xl sm:rounded-2xl overflow-hidden border border-pink-500/30 shadow-lg bg-[#0a0412] shrink-0">
            <img
              src={batch.thumbnail}
              alt={batch.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>

          {/* Batch Info */}
          <div className="flex-1 min-w-0 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-md bg-pink-600 text-white font-extrabold text-[10px] sm:text-xs tracking-wider uppercase shadow-sm">
                {batch.category || 'Science & Boards'}
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-[#2a113a] text-pink-300 font-semibold text-[10px] sm:text-xs border border-pink-500/30">
                {batch.year || '2025-26'}
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-emerald-950/60 text-emerald-400 font-bold text-[10px] sm:text-xs border border-emerald-500/30">
                100% Free Access
              </span>
            </div>

            <h1 className="text-lg sm:text-2xl md:text-3xl font-black text-white font-syne tracking-tight mb-2 leading-snug">
              {batch.title}
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 mb-4 leading-relaxed">
              {batch.description}
            </p>

            {/* Quick Stats Bar */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-semibold text-slate-300 pt-1 border-t border-pink-500/15">
              <span className="flex items-center gap-1.5 text-pink-400">
                <Folder className="w-3.5 h-3.5" />
                <span>{folderCount} Subjects/Chapters</span>
              </span>
              <span className="flex items-center gap-1.5 text-rose-400">
                <Video className="w-3.5 h-3.5" />
                <span>{videoCount} Lectures</span>
              </span>
              <span className="flex items-center gap-1.5 text-fuchsia-400">
                <FileText className="w-3.5 h-3.5" />
                <span>{pdfCount} Notes / PDFs</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Breadcrumb Bar */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-4 text-xs sm:text-sm font-bold text-slate-400 whitespace-nowrap scrollbar-none">
        {navStack.map((crumb, idx) => {
          const isLast = idx === navStack.length - 1;
          return (
            <React.Fragment key={crumb.id + idx}>
              <button
                onClick={() => handleJumpToCrumb(idx)}
                className={`transition-colors cursor-pointer px-2 py-1 rounded-lg ${
                  isLast 
                    ? 'text-pink-400 bg-pink-500/10 font-black border border-pink-500/20' 
                    : 'hover:text-white hover:bg-white/5'
                }`}
              >
                {crumb.title}
              </button>
              {!isLast && (
                <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Folder Search & Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6 bg-[#160a22] p-3 rounded-2xl border border-pink-500/20">
        <div className="relative w-full sm:max-w-md">
          <Search className="w-4 h-4 text-pink-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search lectures, chapters, or notes..."
            className="w-full bg-[#0d0514] border border-pink-500/25 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-pink-500 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
            >
              Clear
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto text-xs text-slate-400">
          <span>Showing <strong className="text-pink-400">{filteredItems.length}</strong> items</span>
        </div>
      </div>

      {/* Loading Skeletons */}
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="h-28 rounded-2xl bg-[#170a24]/80 border border-pink-500/15 animate-pulse flex items-center p-4 gap-4"
            >
              <div className="w-16 h-16 rounded-xl bg-pink-500/10 shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-pink-500/10 rounded w-3/4" />
                <div className="h-3 bg-pink-500/10 rounded w-1/2" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center rounded-2xl bg-[#170a24] border border-red-500/30 my-4">
          <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center mb-3 text-red-400 border border-red-500/20">
            <AlertTriangle className="w-7 h-7" />
          </div>
          <h3 className="text-white font-bold text-base mb-1">Could not load contents</h3>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md mb-4">{error}</p>
          <button
            onClick={() => {
              setNavStack([{ id: '-1', title: 'Batch Home' }]);
            }}
            className="px-5 py-2.5 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-pink-600/30 flex items-center gap-2 cursor-pointer transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Retry Loading</span>
          </button>
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && filteredItems.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 px-4 text-center rounded-2xl bg-[#140820] border border-pink-500/20 my-4">
          <div className="w-16 h-16 rounded-full bg-pink-600/10 flex items-center justify-center mb-3 text-pink-400 border border-pink-500/20">
            <Folder className="w-8 h-8" />
          </div>
          <h3 className="text-white font-bold text-base sm:text-lg mb-1">No items found</h3>
          <p className="text-slate-400 text-xs sm:text-sm max-w-sm">
            {searchQuery ? 'No lectures or chapters match your search.' : 'This folder is currently empty.'}
          </p>
        </div>
      )}

      {/* Content Grid */}
      {!loading && !error && filteredItems.length > 0 && (
        <div className="space-y-4">
          {/* Folders Section */}
          {filteredItems.some(i => (i.material_type || i.type) === 'FOLDER') && (
            <div className="mb-6">
              <h2 className="text-xs font-black text-pink-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <Folder className="w-3.5 h-3.5" />
                <span>Chapters & Folders</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {filteredItems
                  .filter(i => (i.material_type || i.type) === 'FOLDER')
                  .map((item) => {
                    const title = item.Title || item.title || 'Untitled Folder';
                    const hasThumb = item.thumbnail && item.thumbnail.trim() !== '';
                    const vCount = parseInt(item.videos_count || '0', 10);
                    const fCount = parseInt(item.files_count || '0', 10);
                    const counts: string[] = [];
                    if (vCount > 0) counts.push(`${vCount} Video${vCount > 1 ? 's' : ''}`);
                    if (fCount > 0) counts.push(`${fCount} PDF${fCount > 1 ? 's' : ''}`);
                    const countLabel = counts.length > 0 ? counts.join(' · ') : 'Open to view contents';

                    return (
                      <div
                        key={item.id}
                        onClick={() => handleNavigateToFolder(item.id, title)}
                        className="group p-3.5 rounded-2xl bg-[#150921] hover:bg-[#200e33] border border-pink-500/20 hover:border-pink-500/50 transition-all cursor-pointer flex items-center gap-3.5 shadow-md hover:shadow-pink-900/20"
                      >
                        {/* Folder Thumb or Icon */}
                        <div className="w-14 h-14 rounded-xl overflow-hidden bg-[#0c0413] border border-pink-500/30 flex items-center justify-center shrink-0">
                          {hasThumb ? (
                            <img
                              src={item.thumbnail}
                              alt=""
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                              onError={(e) => {
                                (e.target as HTMLElement).style.display = 'none';
                              }}
                            />
                          ) : (
                            <Folder className="w-6 h-6 text-pink-400 group-hover:text-pink-300 transition-colors" />
                          )}
                        </div>

                        {/* Title & Count */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-bold text-white group-hover:text-pink-300 transition-colors truncate">
                            {title}
                          </h3>
                          <p className="text-[11px] font-semibold text-pink-400/90 mt-0.5">
                            {countLabel}
                          </p>
                        </div>

                        {/* Arrow */}
                        <div className="w-7 h-7 rounded-full bg-white/5 group-hover:bg-pink-600 flex items-center justify-center shrink-0 transition-colors">
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-white" />
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          )}

          {/* Videos / Lectures Section */}
          {filteredItems.some(i => (i.material_type || i.type) === 'VIDEO') && (
            <div className="mb-6">
              <h2 className="text-xs font-black text-rose-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <Video className="w-3.5 h-3.5" />
                <span>Video Lectures</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredItems
                  .filter(i => (i.material_type || i.type) === 'VIDEO')
                  .map((item) => {
                    const title = item.Title || item.title || 'Lecture Video';
                    const published = formatDateTime(item.date_and_time || item.event_date);
                    const durationStr = formatDuration(item.duration, item.duration_in_secs);
                    const hasThumb = item.thumbnail && item.thumbnail.trim() !== '';
                    const pdfUrl = item.pdf_link || null;
                    const courseId = item.course_id || batch.id;
                    const videoId = item.id;

                    return (
                      <div
                        key={item.id}
                        className="rounded-2xl bg-[#150921] border border-pink-500/20 hover:border-pink-500/50 p-3.5 flex flex-col sm:flex-row gap-3.5 transition-all shadow-md group hover:shadow-pink-900/30"
                      >
                        {/* Thumbnail with duration */}
                        <div 
                          onClick={() => onPlayVideo(String(courseId), String(videoId), title, durationStr, item.thumbnail)}
                          className="w-full sm:w-44 aspect-video rounded-xl bg-[#0b0312] border border-pink-500/25 relative overflow-hidden shrink-0 cursor-pointer"
                        >
                          {hasThumb ? (
                            <img
                              src={item.thumbnail}
                              alt=""
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              onError={(e) => {
                                (e.target as HTMLElement).style.display = 'none';
                              }}
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-black/40 text-pink-400">
                              <Play className="w-8 h-8 fill-pink-500/20" />
                            </div>
                          )}

                          {durationStr && (
                            <div className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 rounded bg-black/85 text-[10px] font-bold text-white border border-white/10 flex items-center gap-1">
                              <Clock className="w-2.5 h-2.5 text-pink-400" />
                              <span>{durationStr}</span>
                            </div>
                          )}
                        </div>

                        {/* Details & Actions */}
                        <div className="flex-1 flex flex-col justify-between min-w-0">
                          <div>
                            <h3 
                              onClick={() => onPlayVideo(String(courseId), String(videoId), title, durationStr, item.thumbnail)}
                              className="text-sm font-bold text-white hover:text-pink-300 transition-colors line-clamp-2 leading-snug cursor-pointer"
                            >
                              {title}
                            </h3>
                            <p className="text-[11px] text-slate-400 mt-1 flex items-center gap-1.5">
                              <Calendar className="w-3 h-3 text-pink-400" />
                              <span>{published}</span>
                            </p>
                          </div>

                          <div className="flex flex-wrap items-center gap-2 mt-3 pt-2 border-t border-pink-500/15">
                            <button
                              onClick={() => onPlayVideo(String(courseId), String(videoId), title, durationStr, item.thumbnail)}
                              className="px-3.5 py-1.5 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-extrabold text-xs flex items-center gap-1.5 shadow-md shadow-pink-600/30 cursor-pointer transition-all hover:scale-[1.02]"
                            >
                              <Play className="w-3 h-3 fill-white" />
                              <span>Watch Lecture</span>
                            </button>

                            {pdfUrl && (
                              <button
                                onClick={() => onOpenPdf(pdfUrl, `${title} - Notes`)}
                                className="px-3 py-1.5 rounded-xl bg-pink-600/20 hover:bg-pink-600/30 text-pink-300 hover:text-white border border-pink-500/30 font-bold text-xs flex items-center gap-1.5 cursor-pointer transition-all"
                              >
                                <FileText className="w-3 h-3" />
                                <span>Notes PDF</span>
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          )}

          {/* PDFs / Notes Section */}
          {filteredItems.some(i => {
            const t = (i.material_type || i.type || '').toUpperCase();
            return t === 'PDF' || t === 'NOTES' || t === 'DOCUMENT';
          }) && (
            <div className="mb-6">
              <h2 className="text-xs font-black text-fuchsia-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <FileText className="w-3.5 h-3.5" />
                <span>PDF Notes & Documents</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {filteredItems
                  .filter(i => {
                    const t = (i.material_type || i.type || '').toUpperCase();
                    return t === 'PDF' || t === 'NOTES' || t === 'DOCUMENT';
                  })
                  .map((item) => {
                    const title = item.Title || item.title || 'Chapter Notes PDF';
                    const pdfUrl = item.file_link || item.pdf_link || item.download_link || '';
                    const published = formatDateTime(item.event_date);

                    return (
                      <div
                        key={item.id}
                        className="p-3.5 rounded-2xl bg-[#150921] border border-pink-500/20 hover:border-pink-500/50 flex items-center justify-between gap-3 transition-all shadow-md group"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-10 h-10 rounded-xl bg-pink-600/20 border border-pink-500/30 flex items-center justify-center text-pink-400 shrink-0 group-hover:bg-pink-600/30 transition-colors">
                            <FileText className="w-5 h-5" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-sm font-bold text-white truncate group-hover:text-pink-300 transition-colors">
                              {title}
                            </h3>
                            <p className="text-[11px] text-slate-400 mt-0.5">
                              {published}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            onClick={() => onOpenPdf(pdfUrl, title)}
                            className="px-3 py-1.5 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-extrabold text-xs flex items-center gap-1 shadow-md shadow-pink-600/30 cursor-pointer transition-all"
                          >
                            <span>Open</span>
                            <ExternalLink className="w-3 h-3" />
                          </button>

                          {pdfUrl && (
                            <a
                              href={getProxyPdfUrl(pdfUrl)}
                              download={`${title}.pdf`}
                              className="p-1.5 rounded-xl bg-[#251239] hover:bg-pink-900/40 text-pink-300 hover:text-white border border-pink-500/30 transition-colors"
                              title="Download PDF"
                            >
                              <Download className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
