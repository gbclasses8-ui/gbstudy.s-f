import React, { useState, useMemo } from 'react';
import { FileText, Search, Download, Filter, BookOpen, Layers, CheckCircle2 } from 'lucide-react';
import { getAllNotes, NoteDoc, BRAND_ASSETS } from '../data/batchesData';

interface DedicatedNotesHubProps {
  onSelectNote: (note: NoteDoc) => void;
}

export const DedicatedNotesHub: React.FC<DedicatedNotesHubProps> = ({ onSelectNote }) => {
  const [selectedClass, setSelectedClass] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const allNotes = useMemo(() => getAllNotes(), []);

  const filteredNotes = useMemo(() => {
    return allNotes.filter(note => {
      const matchClass = selectedClass === 'All' || note.className === selectedClass;
      const matchType = selectedType === 'All' || note.type === selectedType;
      const q = searchQuery.toLowerCase().trim();
      const matchQuery =
        !q ||
        note.title.toLowerCase().includes(q) ||
        note.chapterTitle.toLowerCase().includes(q) ||
        note.subjectName.toLowerCase().includes(q) ||
        note.previewPoints.some(p => p.toLowerCase().includes(q));

      return matchClass && matchType && matchQuery;
    });
  }, [allNotes, selectedClass, selectedType, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-r from-[#1d0e2c] via-[#160a22] to-[#0e0716] border border-pink-500/30 overflow-hidden shadow-2xl">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-pink-600/20 text-pink-400 text-xs font-bold border border-pink-500/30">
            <FileText className="w-3.5 h-3.5" />
            <span>GB STUDY DIGITAL NOTES ARCHIVE</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Handwritten Notes & <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">Formula Sheets</span>
          </h1>

          <p className="text-sm text-slate-300 leading-relaxed">
            Directly browse and read complete chapter notes, quick formula cheat sheets, NCERT summaries, and past board question banks prepared by top educators.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Class Filters */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {['All', 'Class 12th', 'Class 11th', 'Class 10th', 'Class 9th', 'Special'].map(cls => (
              <button
                key={cls}
                onClick={() => setSelectedClass(cls)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedClass === cls
                    ? 'bg-pink-600 text-white shadow-md shadow-pink-600/30'
                    : 'bg-[#1a0f28] text-slate-300 hover:bg-[#27143c] border border-pink-500/20'
                }`}
              >
                {cls}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-pink-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search in notes, formulas..."
              className="w-full pl-10 pr-4 py-2 bg-[#170e24] border border-pink-500/25 rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 outline-none focus:border-pink-500 transition-colors"
            />
          </div>
        </div>

        {/* Note Type Filter */}
        <div className="flex items-center gap-2 overflow-x-auto text-xs text-slate-400 pb-1">
          <span className="font-semibold text-pink-400 mr-1">Type:</span>
          {['All', 'Handwritten Notes', 'Formula Sheet', 'Question Bank'].map(t => (
            <button
              key={t}
              onClick={() => setSelectedType(t)}
              className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                selectedType === t
                  ? 'bg-pink-600/30 text-pink-300 border border-pink-500/40 font-semibold'
                  : 'bg-[#180e25] text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {t}
            </button>
          ))}
          <span className="ml-auto text-slate-400 hidden sm:inline tabular-nums">
            Showing {filteredNotes.length} documents
          </span>
        </div>
      </div>

      {/* Notes Grid */}
      {filteredNotes.length === 0 ? (
        <div className="text-center py-16 bg-[#160c23] rounded-2xl border border-pink-500/20 p-8">
          <FileText className="w-12 h-12 text-pink-400 mx-auto mb-3 opacity-60" />
          <h3 className="text-base font-bold text-white mb-1">No notes match your filter</h3>
          <p className="text-xs text-slate-400 mb-4">Try clearing the search query or changing class selection.</p>
          <button
            onClick={() => { setSelectedClass('All'); setSelectedType('All'); setSearchQuery(''); }}
            className="px-4 py-2 bg-pink-600 text-white text-xs font-semibold rounded-lg shadow-md"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredNotes.map(note => (
            <div
              key={note.id}
              className="glass-card glass-card-hover rounded-2xl p-5 flex flex-col justify-between border border-pink-500/20 hover:border-pink-500/50"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between gap-2 text-xs mb-2.5">
                  <span className="font-bold text-pink-400">{note.className}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-rose-950/80 text-rose-300 border border-rose-500/30">
                    {note.type}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white line-clamp-1 mb-1 group-hover:text-pink-300">
                  {note.title}
                </h3>
                <p className="text-xs text-slate-400 mb-3">
                  {note.subjectName} · {note.chapterTitle}
                </p>

                {/* Key Points snippet */}
                <div className="space-y-1 bg-[#13071e] p-3 rounded-xl border border-pink-500/10 mb-4 text-xs text-slate-300">
                  <span className="text-pink-400 font-medium text-[11px] block mb-1">Topics covered:</span>
                  {note.previewPoints.slice(0, 2).map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 line-clamp-1">
                      <span className="text-pink-500">✓</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <span className="text-xs font-mono text-slate-400">
                  {note.pages} Pages · {note.fileSize}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectNote(note)}
                    className="px-3.5 py-1.5 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white font-bold rounded-lg text-xs shadow-md shadow-pink-600/30 cursor-pointer"
                  >
                    View PDF
                  </button>
                  <a
                    href={BRAND_ASSETS.telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 bg-[#251239] hover:bg-[#341850] text-pink-300 hover:text-white rounded-lg border border-pink-500/20"
                    title="Download on Telegram"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
