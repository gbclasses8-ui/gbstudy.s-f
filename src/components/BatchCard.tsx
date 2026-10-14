import React, { useState } from 'react';
import { Video, FileText, ArrowRight, Plus, Check } from 'lucide-react';
import { Batch } from '../data/batchesData';

interface BatchCardProps {
  batch: Batch;
  isEnrolled?: boolean;
  onToggleEnroll?: (e: React.MouseEvent, batchId: string) => void;
  onSelect: (batch: Batch) => void;
}

export const BatchCard: React.FC<BatchCardProps> = ({
  batch,
  isEnrolled = false,
  onToggleEnroll,
  onSelect,
}) => {
  const [imgError, setImgError] = useState(false);

  // Calculate total lectures & notes
  let totalLectures = 0;
  let totalNotes = 0;
  batch.subjects.forEach(subject => {
    subject.chapters.forEach(chapter => {
      totalLectures += chapter.lectures.length;
      totalNotes += chapter.notes.length;
    });
  });

  const subjectNames = batch.subjects.map(s => s.name).join(', ');

  return (
    <div className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col group border border-pink-500/20 hover:border-pink-500/50">
      {/* Thumbnail with overlay gradient */}
      <div className="relative aspect-video w-full overflow-hidden bg-[#11081a]">
        {!imgError ? (
          <img
            src={batch.thumbnail}
            alt={batch.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#2a113a] to-[#14081e] flex flex-col items-center justify-center p-4 text-center">
            <span className="text-pink-400 font-extrabold text-xs uppercase tracking-wider mb-1">
              {batch.classCategory}
            </span>
            <span className="text-white font-bold text-sm line-clamp-2 px-2">
              {batch.title}
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0715] via-[#0d0715]/30 to-transparent" />
        
        {/* Floating Tag */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span className="px-2.5 py-1 text-[11px] font-bold text-white bg-pink-600/95 backdrop-blur-md rounded-md shadow-md">
            {batch.classCategory}
          </span>
          <span className="px-2 py-1 text-[11px] font-semibold text-pink-200 bg-black/60 backdrop-blur-md rounded-md border border-pink-500/30">
            {batch.academicYear}
          </span>
        </div>

        <div className="absolute top-3 right-3">
          <span className="px-2 py-1 text-[10px] font-extrabold uppercase tracking-wider text-rose-300 bg-rose-950/80 backdrop-blur-md rounded-md border border-rose-500/30">
            {batch.tag}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata clean unboxed text */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
            <span className="text-pink-400 font-medium">Batch #{batch.batchIdNumeric}</span>
            <span aria-hidden="true">·</span>
            <span>{batch.subjects.length} Subjects</span>
            <span aria-hidden="true">·</span>
            <span className="text-emerald-400 font-semibold">100% Free</span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-pink-300 transition-colors line-clamp-2 mb-2 leading-snug">
            {batch.title}
          </h3>

          {/* Subjects breakdown */}
          <div className="text-xs text-slate-400 mb-4 bg-[#140b1e] p-2.5 rounded-lg border border-pink-500/10">
            <span className="text-pink-400/90 font-medium">Subjects: </span>
            <span className="text-slate-300 line-clamp-1">{subjectNames}</span>
          </div>
        </div>

        {/* Card Footer: Metrics & Pink Buttons (Enroll + Let's Study) */}
        <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
          {/* Enroll / Enrolled Button in Pink */}
          {onToggleEnroll && (
            <button
              onClick={(e) => onToggleEnroll(e, batch.id)}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isEnrolled
                  ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40 shadow-sm'
                  : 'bg-[#251038] hover:bg-pink-900/40 text-pink-300 hover:text-white border border-pink-500/30'
              }`}
              title={isEnrolled ? 'Batch Enrolled' : 'Enroll in Batch'}
            >
              {isEnrolled ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>ENROLLED</span>
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5 text-pink-400" />
                  <span>ENROLL</span>
                </>
              )}
            </button>
          )}

          {/* User explicitly demanded: "bro app ka pura colour pink kar dena chahe vah lets study ya fir enroll ya kuchh aur ho" */}
          <button
            onClick={() => onSelect(batch)}
            className="flex items-center gap-1.5 px-4 py-2 text-xs md:text-sm font-bold text-white bg-gradient-to-r from-pink-600 via-rose-500 to-pink-500 hover:from-pink-500 hover:to-rose-600 rounded-xl shadow-md shadow-pink-600/30 hover:shadow-pink-500/50 group-hover:scale-102 transition-all cursor-pointer whitespace-nowrap ml-auto"
          >
            <span>Let's Study</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
