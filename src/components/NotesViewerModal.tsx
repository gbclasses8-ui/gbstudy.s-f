import React, { useState } from 'react';
import { 
  X, Download, FileText, Send, ZoomIn, ZoomOut, 
  ExternalLink, Sparkles, BookOpen
} from 'lucide-react';
import { NoteDoc, BRAND_ASSETS } from '../data/batchesData';
import { getProxyPdfUrl } from '../services/api';

interface NotesViewerModalProps {
  note?: NoteDoc | null;
  pdfUrl?: string | null;
  title?: string;
  onClose: () => void;
}

export const NotesViewerModal: React.FC<NotesViewerModalProps> = ({ 
  note, 
  pdfUrl: directPdfUrl, 
  title: directTitle, 
  onClose 
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(100);

  const effectivePdfUrl = directPdfUrl || note?.pdfUrl;
  const displayTitle = directTitle || note?.title || 'Lecture Notes PDF';
  const subtitle = note ? `${note.className} · ${note.subjectName}` : 'GB STUDY Digital Notes & Chapter Solutions';

  if (!note && !directPdfUrl) return null;

  const downloadUrl = effectivePdfUrl ? getProxyPdfUrl(effectivePdfUrl) : BRAND_ASSETS.telegramUrl;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-black/95 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="w-full max-w-5xl bg-[#140822] border-0 sm:border border-pink-500/40 rounded-none sm:rounded-3xl shadow-2xl shadow-pink-900/60 overflow-hidden flex flex-col my-auto max-h-[100dvh] sm:max-h-[95vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#1b0b2e] border-b border-pink-500/25">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded-xl bg-pink-600/20 text-pink-400 flex items-center justify-center border border-pink-500/30 shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm font-black text-white truncate">{displayTitle}</h3>
              <p className="text-[11px] text-pink-300/80 truncate">
                {subtitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {effectivePdfUrl && (
              <a
                href={downloadUrl}
                download={`${displayTitle}.pdf`}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-bold text-xs shadow-md shadow-pink-600/30 transition-all hover:scale-[1.02]"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
            )}

            {effectivePdfUrl && (
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-[#250f3b] hover:bg-pink-900/40 text-pink-300 hover:text-white border border-pink-500/30 transition-colors"
                title="Open in new window"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-pink-600 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Close Viewer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* PDF Viewer Body */}
        <div className="flex-1 bg-[#0b0312] overflow-hidden flex flex-col p-2 sm:p-4 min-h-[500px]">
          {effectivePdfUrl ? (
            <div className="w-full flex-1 rounded-xl sm:rounded-2xl overflow-hidden border border-pink-500/30 bg-[#12051d] shadow-inner relative flex flex-col">
              <iframe
                src={getProxyPdfUrl(effectivePdfUrl)}
                title={displayTitle}
                className="w-full flex-1 border-0 min-h-[550px]"
              />
            </div>
          ) : (
            /* Fallback structured notes viewer */
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 max-w-3xl mx-auto text-slate-200">
              <div className="p-4 rounded-xl bg-pink-600/10 border border-pink-500/30 flex items-center justify-between">
                <div>
                  <h4 className="text-white font-bold text-sm">Download Full PDF on Telegram</h4>
                  <p className="text-xs text-pink-300">Join our official channel to download complete chapterwise PDF bundles.</p>
                </div>
                <a
                  href={BRAND_ASSETS.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-bold text-xs shrink-0 flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Join Telegram</span>
                </a>
              </div>

              {note?.previewPoints && (
                <div className="bg-[#170a24] p-5 rounded-2xl border border-pink-500/20 space-y-3">
                  <h4 className="text-xs font-black text-pink-400 uppercase tracking-widest flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Key Concepts & Formulas</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {note.previewPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Bottom Banner */}
        <div className="px-4 sm:px-6 py-3 bg-[#19092c] border-t border-pink-500/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-400 text-[11px] sm:text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>GB STUDY 100% Free Educational Material · Ad-Free</span>
          </div>

          <div className="flex items-center gap-2">
            {effectivePdfUrl && (
              <a
                href={downloadUrl}
                download={`${displayTitle}.pdf`}
                className="px-3.5 py-1.5 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-extrabold text-xs flex items-center gap-1.5 shadow-md shadow-pink-600/30 transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save to Device</span>
              </a>
            )}

            <a
              href={BRAND_ASSETS.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-xl bg-[#250f3b] hover:bg-pink-900/40 text-pink-300 hover:text-white border border-pink-500/30 font-bold text-xs flex items-center gap-1.5 transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Telegram Group</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
