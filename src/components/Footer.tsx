import React from 'react';
import { Send, Heart, BookOpen, Layers, ShieldCheck, Sparkles } from 'lucide-react';
import { BRAND_ASSETS } from '../data/batchesData';

interface FooterProps {
  onSelectTab: (tab: 'home' | 'batches' | 'notes') => void;
  onSelectClassFilter?: (cls: string) => void;
  onOpenTelegram: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectTab,
  onSelectClassFilter,
  onOpenTelegram,
}) => {
  const handleClassClick = (cls: string) => {
    onSelectTab('batches');
    if (onSelectClassFilter) onSelectClassFilter(cls);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-16 bg-[#09040e] border-t border-pink-500/25 pb-20 md:pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src={BRAND_ASSETS.logo}
                alt="GB STUDY"
                className="w-10 h-10 rounded-full border-2 border-pink-500 object-cover shadow-md shadow-pink-500/30"
                referrerPolicy="no-referrer"
              />
              <span className="text-xl font-extrabold text-white tracking-tight">
                GB <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400">STUDY</span>
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Your free online learning ecosystem for Class 9th, 10th, 11th, and 12th science and board exams. Live & recorded lectures, topper handwritten notes, and formula books.
            </p>
            <div className="flex items-center gap-2 text-xs text-pink-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Free · No Login Required</span>
            </div>
          </div>

          {/* Quick Batches */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Classes & Batches
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleClassClick('Class 12th')}
                  className="hover:text-pink-400 transition-colors cursor-pointer text-left"
                >
                  Class 12th - Ranker 3.0 & 2.0 Batches
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleClassClick('Class 11th')}
                  className="hover:text-pink-400 transition-colors cursor-pointer text-left"
                >
                  Class 11th - Topper & Prarambh Batches
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleClassClick('Class 10th')}
                  className="hover:text-pink-400 transition-colors cursor-pointer text-left"
                >
                  Class 10th - Kamyab & Shaurya Batches
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleClassClick('Class 9th')}
                  className="hover:text-pink-400 transition-colors cursor-pointer text-left"
                >
                  Class 9th - Aarambh & Udaan Batches
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleClassClick('Special')}
                  className="hover:text-pink-400 transition-colors cursor-pointer text-left"
                >
                  Science SPL Arjun & Safalta VOD
                </button>
              </li>
            </ul>
          </div>

          {/* Free Notes & PDFs */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Study Materials
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => { onSelectTab('notes'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-pink-400 transition-colors cursor-pointer text-left"
                >
                  Handwritten Chapter Notes
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onSelectTab('notes'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-pink-400 transition-colors cursor-pointer text-left"
                >
                  Formula & Derivation Cheat Sheets
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onSelectTab('notes'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-pink-400 transition-colors cursor-pointer text-left"
                >
                  NCERT Line by Line Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onSelectTab('notes'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-pink-400 transition-colors cursor-pointer text-left"
                >
                  Previous 10 Years Board Papers
                </button>
              </li>
            </ul>
          </div>

          {/* Telegram Channel Community */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Telegram Community
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Join thousands of students on our official Telegram channel for direct daily lecture links, instant PDF notes, and test alerts.
            </p>
            <a
              href={BRAND_ASSETS.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-pink-600 via-rose-500 to-pink-500 hover:from-pink-500 hover:to-rose-600 text-white font-bold rounded-xl text-xs shadow-md shadow-pink-600/30 transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Join @GBFreestudy</span>
            </a>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p>© {new Date().getFullYear()} GB STUDY. Dedicated to quality, accessible education.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenTelegram}
              className="hover:text-pink-400 transition-colors cursor-pointer"
            >
              Join Official Channel
            </button>
            <span aria-hidden="true">·</span>
            <span>StudyBee & Science Batches</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
