import React, { useState } from 'react';
import { Search, Send, Menu, X, BookOpen, Layers, FileText } from 'lucide-react';
import { BRAND_ASSETS } from '../data/batchesData';

interface NavbarProps {
  activeTab: 'home' | 'batches' | 'notes';
  onSelectTab: (tab: 'home' | 'batches' | 'notes') => void;
  onOpenSearch: () => void;
  onOpenTelegram: () => void;
  selectedClassFilter?: string;
  onSelectClassFilter?: (cls: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  onOpenSearch,
  onOpenTelegram,
  onSelectClassFilter,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: 'home' | 'batches' | 'notes', classFilter?: string) => {
    onSelectTab(tab);
    if (classFilter && onSelectClassFilter) {
      onSelectClassFilter(classFilter);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0d0715]/90 backdrop-blur-md border-b border-pink-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-18">
          
          {/* Zone 1: Brand Wordmark & Icon */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left cursor-pointer shrink-0"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-pink-500 shadow-md shadow-pink-500/30 group-hover:border-pink-400 group-hover:scale-105 transition-all">
              <img
                src={BRAND_ASSETS.logo}
                alt="GB STUDY Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-pink-400 transition-colors whitespace-nowrap">
                GB <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400">STUDY</span>
              </span>
              <span className="text-[10px] font-medium text-pink-300/80 -mt-1 tracking-wider uppercase">
                Free Education
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (Single-line, clean unboxed links) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            <button
              onClick={() => handleNavClick('home')}
              className={`transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'home'
                  ? 'text-pink-400 font-semibold border-b-2 border-pink-500 pb-0.5'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('batches')}
              className={`transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'batches'
                  ? 'text-pink-400 font-semibold border-b-2 border-pink-500 pb-0.5'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              All Batches
            </button>

            <button
              onClick={() => handleNavClick('notes')}
              className={`transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'notes'
                  ? 'text-pink-400 font-semibold border-b-2 border-pink-500 pb-0.5'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Notes & PDFs
            </button>

            <button
              onClick={() => handleNavClick('batches', 'Class 12th')}
              className="text-slate-300 hover:text-pink-300 transition-colors whitespace-nowrap cursor-pointer"
            >
              Class 12th
            </button>

            <button
              onClick={() => handleNavClick('batches', 'Class 10th')}
              className="text-slate-300 hover:text-pink-300 transition-colors whitespace-nowrap cursor-pointer"
            >
              Class 10th
            </button>
          </nav>

          {/* Zone 3: Search Action & Primary Telegram CTA Button */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white bg-[#1a0f26] hover:bg-[#251538] border border-pink-500/25 hover:border-pink-500/50 rounded-xl transition-all shadow-sm cursor-pointer"
              title="Search batches, lectures, notes"
            >
              <Search className="w-4 h-4 text-pink-400" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] bg-slate-800 text-slate-400 rounded border border-slate-700">
                /
              </kbd>
            </button>

            {/* Telegram Pink Glowing Button */}
            <button
              onClick={onOpenTelegram}
              className="flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-pink-600 via-rose-500 to-pink-500 hover:from-pink-500 hover:to-rose-600 rounded-xl shadow-md shadow-pink-600/30 hover:shadow-pink-500/50 transition-all cursor-pointer whitespace-nowrap"
            >
              <Send className="w-4 h-4" />
              <span>Join Telegram</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg bg-[#1a0f26] border border-pink-500/20"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#130b1e] border-b border-pink-500/30 px-4 pt-3 pb-5 space-y-2 animate-in slide-in-from-top-2 duration-150">
          <button
            onClick={() => handleNavClick('home')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ${
              activeTab === 'home' ? 'bg-pink-600/20 text-pink-300 font-semibold' : 'text-slate-300 hover:bg-white/5'
            }`}
          >
            <BookOpen className="w-4 h-4 text-pink-400" />
            <span>Home</span>
          </button>

          <button
            onClick={() => handleNavClick('batches')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ${
              activeTab === 'batches' ? 'bg-pink-600/20 text-pink-300 font-semibold' : 'text-slate-300 hover:bg-white/5'
            }`}
          >
            <Layers className="w-4 h-4 text-pink-400" />
            <span>All Batches (Class 9th - 12th)</span>
          </button>

          <button
            onClick={() => handleNavClick('notes')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ${
              activeTab === 'notes' ? 'bg-pink-600/20 text-pink-300 font-semibold' : 'text-slate-300 hover:bg-white/5'
            }`}
          >
            <FileText className="w-4 h-4 text-pink-400" />
            <span>Notes & PDFs Library</span>
          </button>

          <div className="pt-2 border-t border-slate-800 grid grid-cols-2 gap-2 text-xs">
            <button
              onClick={() => handleNavClick('batches', 'Class 12th')}
              className="p-2 rounded-lg bg-[#1a0f26] text-slate-300 hover:text-white border border-pink-500/20 text-center"
            >
              Class 12th Batches
            </button>
            <button
              onClick={() => handleNavClick('batches', 'Class 11th')}
              className="p-2 rounded-lg bg-[#1a0f26] text-slate-300 hover:text-white border border-pink-500/20 text-center"
            >
              Class 11th Batches
            </button>
            <button
              onClick={() => handleNavClick('batches', 'Class 10th')}
              className="p-2 rounded-lg bg-[#1a0f26] text-slate-300 hover:text-white border border-pink-500/20 text-center"
            >
              Class 10th Batches
            </button>
            <button
              onClick={() => handleNavClick('batches', 'Class 9th')}
              className="p-2 rounded-lg bg-[#1a0f26] text-slate-300 hover:text-white border border-pink-500/20 text-center"
            >
              Class 9th Batches
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
