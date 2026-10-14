import React from 'react';
import { Home, Layers, FileText, Search, Send } from 'lucide-react';
import { BRAND_ASSETS } from '../data/batchesData';

interface MobileBottomNavProps {
  activeTab: 'home' | 'batches' | 'notes';
  onSelectTab: (tab: 'home' | 'batches' | 'notes') => void;
  onOpenSearch: () => void;
  onOpenTelegram: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeTab,
  onSelectTab,
  onOpenSearch,
  onOpenTelegram,
}) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0d0715]/95 backdrop-blur-lg border-t border-pink-500/25 px-2 py-1.5 shadow-2xl">
      <div className="flex items-center justify-around">
        <button
          onClick={() => onSelectTab('home')}
          className={`flex flex-col items-center gap-1 py-1 px-3 rounded-lg text-[10px] font-medium transition-colors ${
            activeTab === 'home' ? 'text-pink-400 font-bold' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Home className="w-4 h-4" />
          <span>Home</span>
        </button>

        <button
          onClick={() => onSelectTab('batches')}
          className={`flex flex-col items-center gap-1 py-1 px-3 rounded-lg text-[10px] font-medium transition-colors ${
            activeTab === 'batches' ? 'text-pink-400 font-bold' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Batches</span>
        </button>

        <button
          onClick={() => onSelectTab('notes')}
          className={`flex flex-col items-center gap-1 py-1 px-3 rounded-lg text-[10px] font-medium transition-colors ${
            activeTab === 'notes' ? 'text-pink-400 font-bold' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Notes/PDF</span>
        </button>

        <button
          onClick={onOpenSearch}
          className="flex flex-col items-center gap-1 py-1 px-3 rounded-lg text-[10px] font-medium text-slate-400 hover:text-slate-200 transition-colors"
        >
          <Search className="w-4 h-4 text-pink-400" />
          <span>Search</span>
        </button>

        <button
          onClick={onOpenTelegram}
          className="flex flex-col items-center gap-1 py-1 px-3 rounded-lg text-[10px] font-bold text-pink-400 hover:text-pink-300 transition-colors"
        >
          <Send className="w-4 h-4" />
          <span>Telegram</span>
        </button>
      </div>
    </div>
  );
};
