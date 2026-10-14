import React, { useState, useMemo, useEffect } from 'react';
import { Search, X, Video, FileText, Layers, ChevronRight, Sparkles } from 'lucide-react';
import { BATCHES_DATA, Batch, Lecture, NoteDoc } from '../data/batchesData';
import { EnhancedBatch } from '../services/api';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  realBatches?: EnhancedBatch[];
  onSelectRealBatch?: (batch: EnhancedBatch) => void;
  onSelectBatch: (batch: Batch) => void;
  onSelectLecture: (batch: Batch, lecture: Lecture) => void;
  onSelectNote: (note: NoteDoc) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  realBatches = [],
  onSelectRealBatch,
  onSelectBatch,
  onSelectLecture,
  onSelectNote,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const searchResults = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return { realBatches: [], batches: [], lectures: [], notes: [] };

    const matchedRealBatches: EnhancedBatch[] = [];
    const matchingBatches: Batch[] = [];
    const matchingLectures: Array<{ batch: Batch; lecture: Lecture; chapterName: string; subjectName: string }> = [];
    const matchingNotes: NoteDoc[] = [];

    // Search real batches (all 46 batches)
    realBatches.forEach(b => {
      if (
        b.title.toLowerCase().includes(q) ||
        b.category.toLowerCase().includes(q) ||
        b.description.toLowerCase().includes(q) ||
        b.id.includes(q)
      ) {
        matchedRealBatches.push(b);
      }
    });

    // Search categorized detailed batches
    BATCHES_DATA.forEach(batch => {
      const matchBatch = 
        batch.title.toLowerCase().includes(q) ||
        batch.classCategory.toLowerCase().includes(q) ||
        batch.subtitle.toLowerCase().includes(q) ||
        batch.description.toLowerCase().includes(q);

      if (matchBatch) {
        matchingBatches.push(batch);
      }

      batch.subjects.forEach(subject => {
        const matchSubject = subject.name.toLowerCase().includes(q);

        subject.chapters.forEach(chapter => {
          const matchChapter = chapter.title.toLowerCase().includes(q);

          chapter.lectures.forEach(lecture => {
            if (
              matchSubject ||
              matchChapter ||
              lecture.title.toLowerCase().includes(q) ||
              lecture.teacher.toLowerCase().includes(q) ||
              lecture.description.toLowerCase().includes(q)
            ) {
              matchingLectures.push({
                batch,
                lecture,
                chapterName: chapter.title,
                subjectName: subject.name,
              });
            }
          });

          chapter.notes.forEach(note => {
            if (
              matchSubject ||
              matchChapter ||
              note.title.toLowerCase().includes(q) ||
              note.previewPoints.some(p => p.toLowerCase().includes(q))
            ) {
              matchingNotes.push(note);
            }
          });
        });
      });
    });

    return {
      realBatches: matchedRealBatches.slice(0, 8),
      batches: matchingBatches.slice(0, 4),
      lectures: matchingLectures.slice(0, 8),
      notes: matchingNotes.slice(0, 6),
    };
  }, [searchTerm, realBatches]);

  if (!isOpen) return null;

  const totalResults = 
    searchResults.realBatches.length + 
    searchResults.batches.length + 
    searchResults.lectures.length + 
    searchResults.notes.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-20 p-3 sm:p-4 bg-black/92 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-[#150a24] border border-pink-500/40 rounded-2xl sm:rounded-3xl shadow-2xl shadow-pink-900/50 overflow-hidden flex flex-col max-h-[82vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Search Header */}
        <div className="p-4 sm:p-5 border-b border-pink-500/25 bg-[#1a0c2e] flex items-center gap-3">
          <Search className="w-5 h-5 text-pink-400 shrink-0" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search all 46 batches, chapters, lectures, notes..."
            className="w-full bg-transparent text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none"
            autoFocus
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-xs text-slate-400 hover:text-white px-2 py-1 rounded bg-white/10 shrink-0 cursor-pointer"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 shrink-0 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Results Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-5">
          {!searchTerm.trim() ? (
            <div className="py-8 text-center text-slate-400">
              <Sparkles className="w-8 h-8 text-pink-400 mx-auto mb-2 opacity-80" />
              <p className="text-sm font-semibold text-white">Quick Search across all GB STUDY resources</p>
              <p className="text-xs text-slate-500 mt-1">
                Try searching: <span className="text-pink-400 cursor-pointer" onClick={() => setSearchTerm('Ranker')}>"Ranker"</span>, <span className="text-pink-400 cursor-pointer" onClick={() => setSearchTerm('Physics')}>"Physics"</span>, <span className="text-pink-400 cursor-pointer" onClick={() => setSearchTerm('Chemistry')}>"Chemistry"</span>, <span className="text-pink-400 cursor-pointer" onClick={() => setSearchTerm('10th')}>"10th"</span>
              </p>
            </div>
          ) : totalResults === 0 ? (
            <div className="py-12 text-center text-slate-400">
              <p className="text-sm font-bold text-white mb-1">No results for "{searchTerm}"</p>
              <p className="text-xs text-slate-500">Check spelling or search by class or subject name</p>
            </div>
          ) : (
            <>
              {/* Real Batches */}
              {searchResults.realBatches.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-pink-400 mb-2 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Real Batches ({searchResults.realBatches.length})</span>
                  </h4>
                  <div className="space-y-1.5">
                    {searchResults.realBatches.map((b) => (
                      <div
                        key={b.id}
                        onClick={() => {
                          if (onSelectRealBatch) onSelectRealBatch(b);
                          onClose();
                        }}
                        className="p-2.5 rounded-xl bg-[#1b0b2e] hover:bg-[#281042] border border-pink-500/20 hover:border-pink-500/50 flex items-center justify-between cursor-pointer transition-colors group"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <img
                            src={b.thumbnail}
                            alt=""
                            className="w-10 h-7 rounded object-cover border border-pink-500/30 shrink-0"
                            onError={(e) => {
                              (e.target as HTMLElement).style.display = 'none';
                            }}
                          />
                          <div className="min-w-0">
                            <span className="text-xs font-bold text-white group-hover:text-pink-300 transition-colors truncate block">
                              {b.title}
                            </span>
                            <span className="text-[10px] text-pink-400/90 font-medium">
                              {b.category} · {b.year} · {b.mode}
                            </span>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-pink-400 shrink-0 ml-2" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Video Lectures */}
              {searchResults.lectures.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-rose-400 mb-2 flex items-center gap-1.5">
                    <Video className="w-3.5 h-3.5" />
                    <span>Video Lectures ({searchResults.lectures.length})</span>
                  </h4>
                  <div className="space-y-1.5">
                    {searchResults.lectures.map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => {
                          onSelectLecture(item.batch, item.lecture);
                          onClose();
                        }}
                        className="p-2.5 rounded-xl bg-[#1b0b2e] hover:bg-[#281042] border border-pink-500/20 hover:border-pink-500/50 flex items-center justify-between cursor-pointer transition-colors group"
                      >
                        <div className="min-w-0">
                          <span className="text-xs font-bold text-white group-hover:text-rose-300 transition-colors truncate block">
                            {item.lecture.title}
                          </span>
                          <span className="text-[10px] text-slate-400">
                            {item.batch.title} · {item.subjectName} · {item.chapterName} · {item.lecture.duration}
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-pink-600 text-white shrink-0 ml-2">
                          Watch
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Notes & PDFs */}
              {searchResults.notes.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-fuchsia-400 mb-2 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" />
                    <span>Notes & PDFs ({searchResults.notes.length})</span>
                  </h4>
                  <div className="space-y-1.5">
                    {searchResults.notes.map((note) => (
                      <div
                        key={note.id}
                        onClick={() => {
                          onSelectNote(note);
                          onClose();
                        }}
                        className="p-2.5 rounded-xl bg-[#1b0b2e] hover:bg-[#281042] border border-pink-500/20 hover:border-pink-500/50 flex items-center justify-between cursor-pointer transition-colors group"
                      >
                        <div className="min-w-0">
                          <span className="text-xs font-bold text-white group-hover:text-fuchsia-300 transition-colors truncate block">
                            {note.title}
                          </span>
                          <span className="text-[10px] text-slate-400">
                            {note.className} · {note.subjectName} · {note.pages} Pages
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-fuchsia-600/30 text-fuchsia-300 border border-fuchsia-500/30 shrink-0 ml-2">
                          View PDF
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-[#190a29] border-t border-pink-500/20 text-center text-[11px] text-slate-400">
          Press <kbd className="px-1.5 py-0.5 rounded bg-black/50 border border-pink-500/30 text-pink-300 font-mono text-[10px]">Esc</kbd> to close
        </div>
      </div>
    </div>
  );
};
