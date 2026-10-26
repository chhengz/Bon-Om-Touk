import React from 'react';
import { FESTIVAL_OVERVIEW, FESTIVAL_IMAGES } from '../data/festivalContent';
import { Anchor, Compass, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Background Hero Image with Fallback and Measured Scrim */}
      <div className="absolute inset-0 z-0 bg-[#0a101d]">
        <img
          src={FESTIVAL_IMAGES.hero}
          alt="Bon Om Touk Dragon Boat racing in front of the Royal Palace Phnom Penh"
          className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.08] scale-[1.02] transition-transform duration-1000"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080d16] via-[#080d16]/65 to-black/35 pointer-events-none" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#080d16]/40 to-[#080d16]/90 pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center flex flex-col items-center">
        {/* Khmer Traditional Title */}
        <p className="font-khmer text-amber-300/90 text-lg md:text-xl font-medium tracking-wide mb-3">
          {FESTIVAL_OVERVIEW.khmerTitle}
        </p>

        {/* Clean Unboxed Editorial Metadata with Typographic Separators */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs uppercase tracking-widest text-stone-300 mb-6 font-sans">
          <span>Khmer Lunar Kadeuk</span>
          <span aria-hidden="true" className="text-amber-400">·</span>
          <span>Phnom Penh, Cambodia</span>
          <span aria-hidden="true" className="text-amber-400">·</span>
          <span className="text-amber-200">Next: {FESTIVAL_OVERVIEW.nextOccurrence}</span>
        </div>

        {/* Primary Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.12] mb-6 max-w-4xl text-balance">
          Bon Om Touk
          <span className="block text-2xl sm:text-3xl md:text-4xl font-display font-light text-amber-200/90 mt-2">
            The Cambodian Water & Moon Festival
          </span>
        </h1>

        {/* Lead Narrative */}
        <p className="text-base sm:text-lg md:text-xl text-stone-200/90 font-light max-w-2xl leading-relaxed mb-10 font-sans">
          Every year as the monsoon recedes, Cambodia gathers at the legendary confluence of the Mekong and Tonle Sap rivers. Over three luminous days, we celebrate the world’s only reversing river, honor ancient Angkorian naval fleets, and release glowing flotillas under the sacred full moon.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('ceremonies')}
            className="flex items-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-wide uppercase bg-amber-400 text-stone-950 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer shadow-lg shadow-amber-950/50"
          >
            <Compass className="w-4 h-4 text-stone-950" />
            <span>The Three Sacred Rites</span>
          </button>

          <button
            onClick={() => onNavigate('hydrology')}
            className="flex items-center gap-2 px-6 py-3.5 text-sm font-medium tracking-wide uppercase bg-stone-900/80 hover:bg-stone-800 text-stone-200 border border-stone-700/80 rounded-lg backdrop-blur-sm transition-colors cursor-pointer"
          >
            <Anchor className="w-4 h-4 text-amber-400" />
            <span>The River Reversal Phenomenon</span>
          </button>

          <button
            onClick={() => onNavigate('flotilla')}
            className="flex items-center gap-2 px-6 py-3.5 text-sm font-medium tracking-wide uppercase bg-stone-900/80 hover:bg-stone-800 text-amber-200 border border-amber-500/40 rounded-lg backdrop-blur-sm transition-colors cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Float a Loy Pratip Lantern</span>
          </button>
        </div>

        {/* Subdued Editorial Key Statistics Ribbon */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-stone-800/80 text-left">
          <div>
            <span className="block text-2xl md:text-3xl font-serif font-bold text-amber-200 tabular-nums">400+</span>
            <span className="text-xs uppercase tracking-wider text-stone-400">Dragon Boats (Touk Ngor)</span>
          </div>
          <div>
            <span className="block text-2xl md:text-3xl font-serif font-bold text-amber-200 tabular-nums">25,000+</span>
            <span className="text-xs uppercase tracking-wider text-stone-400">Village Rowers</span>
          </div>
          <div>
            <span className="block text-2xl md:text-3xl font-serif font-bold text-amber-200 tabular-nums">1.7 km</span>
            <span className="text-xs uppercase tracking-wider text-stone-400">Royal Regatta Course</span>
          </div>
          <div>
            <span className="block text-2xl md:text-3xl font-serif font-bold text-amber-200 tabular-nums">800+ Yrs</span>
            <span className="text-xs uppercase tracking-wider text-stone-400">Angkorian Naval Heritage</span>
          </div>
        </div>
      </div>
    </section>
  );
};
