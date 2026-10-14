import React from 'react';
import { Send, X, CheckCircle, Bell, Sparkles } from 'lucide-react';
import { BRAND_ASSETS } from '../data/batchesData';

interface TelegramModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TelegramModal: React.FC<TelegramModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleJoinTelegram = () => {
    window.open(BRAND_ASSETS.telegramUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#140b1e] border-2 border-pink-500/40 rounded-2xl shadow-2xl shadow-pink-600/30 overflow-hidden transform transition-all"
        role="dialog"
        aria-modal="true"
        aria-labelledby="telegram-modal-title"
      >
        {/* Pink Glow Accent Top Banner */}
        <div className="h-2 w-full bg-gradient-to-r from-pink-600 via-rose-500 to-pink-500" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-900/60 hover:bg-pink-600/30 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 md:p-8 text-center">
          {/* Logo Badge */}
          <div className="relative mx-auto w-20 h-20 mb-5">
            <div className="absolute inset-0 rounded-full bg-pink-500/30 blur-lg animate-pulse" />
            <img
              src={BRAND_ASSETS.logo}
              alt="GB STUDY"
              className="relative w-20 h-20 rounded-full border-2 border-pink-500 object-cover shadow-lg mx-auto"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-1 -right-1 bg-pink-600 rounded-full p-1.5 text-white shadow-md">
              <Send className="w-4 h-4" />
            </div>
          </div>

          {/* Heading requested: 'Join GB STUDY Telegram Channel' */}
          <h2 id="telegram-modal-title" className="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-tight">
            Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">GB STUDY</span> Telegram Channel
          </h2>

          <p className="text-slate-300 text-sm md:text-base mb-6 leading-relaxed">
            Get instant free access to new batch lectures, handwritten topper notes, formula cheat sheets, daily DPPs and official study announcements.
          </p>

          {/* Benefit bullets */}
          <div className="bg-[#1f102e] border border-pink-500/20 rounded-xl p-4 mb-6 text-left space-y-2.5">
            <div className="flex items-center gap-2.5 text-xs md:text-sm text-slate-200">
              <CheckCircle className="w-4 h-4 text-pink-400 shrink-0" />
              <span>Direct lecture notifications & daily class schedules</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs md:text-sm text-slate-200">
              <CheckCircle className="w-4 h-4 text-pink-400 shrink-0" />
              <span>Full chapter handwritten notes & formula PDF downloads</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs md:text-sm text-slate-200">
              <CheckCircle className="w-4 h-4 text-pink-400 shrink-0" />
              <span>100% Free study materials for Class 9th, 10th, 11th & 12th</span>
            </div>
          </div>

          {/* Buttons: Join Telegram & Close */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleJoinTelegram}
              className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-pink-600 via-rose-500 to-pink-500 hover:from-pink-500 hover:to-rose-600 text-white font-bold rounded-xl shadow-lg shadow-pink-600/40 hover:shadow-pink-500/60 transform hover:-translate-y-0.5 transition-all text-sm md:text-base cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Join Telegram</span>
            </button>
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3.5 bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white font-medium rounded-xl border border-slate-700 hover:border-pink-500/40 transition-colors text-sm md:text-base cursor-pointer"
            >
              Close
            </button>
          </div>

          <p className="mt-4 text-xs text-slate-400 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>Official Channel: @GBFreestudy</span>
          </p>
        </div>
      </div>
    </div>
  );
};
