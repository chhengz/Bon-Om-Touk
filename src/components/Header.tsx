import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface HeaderProps {
  isPlayingAudio: boolean;
  onToggleAudio: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  isPlayingAudio,
  onToggleAudio,
  onNavigate,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-[#080d16]/90 backdrop-blur-md border-b border-stone-800/80 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => onNavigate('hero')}
          className="text-left group cursor-pointer focus-visible:outline-none"
        >
          <span className="text-xl font-display font-bold tracking-tight text-amber-100 group-hover:text-amber-300 transition-colors whitespace-nowrap shrink-0">
            Bon Om Touk
          </span>
        </button>

        {/* Zone 2: 4-5 concise single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-xs uppercase tracking-widest font-medium text-stone-300">
          <button
            onClick={() => onNavigate('ceremonies')}
            className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Sacred Rites
          </button>
          <button
            onClick={() => onNavigate('hydrology')}
            className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Tonle Sap
          </button>
          <button
            onClick={() => onNavigate('boat-anatomy')}
            className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Dragon Boat
          </button>
          <button
            onClick={() => onNavigate('history')}
            className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Heritage
          </button>
          <button
            onClick={() => onNavigate('flotilla')}
            className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Loy Pratip
          </button>
          <button
            onClick={() => onNavigate('visitor-guide')}
            className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Visitor Guide
          </button>
        </nav>

        {/* Zone 3: 1 primary action (or audio toggle + primary action) */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onToggleAudio}
            aria-label={isPlayingAudio ? 'Mute river and drum atmosphere' : 'Play traditional cadence audio'}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md border border-amber-500/30 text-amber-200/90 hover:bg-amber-950/40 hover:text-amber-200 transition-colors cursor-pointer"
          >
            {isPlayingAudio ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">Cadence On</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-stone-400" />
                <span className="hidden sm:inline">Play Soundscape</span>
              </>
            )}
          </button>

          <button
            onClick={() => onNavigate('flotilla')}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-stone-900 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-sm"
          >
            Release Lantern
          </button>
        </div>
      </div>
    </header>
  );
};
