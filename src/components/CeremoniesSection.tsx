import React, { useState } from 'react';
import { CEREMONIES } from '../data/festivalContent';
import { Clock, Calendar, CheckCircle2 } from 'lucide-react';

export const CeremoniesSection: React.FC = () => {
  const [activeCeremonyId, setActiveCeremonyId] = useState<string>('boat-racing');

  const activeCeremony = CEREMONIES.find((c) => c.id === activeCeremonyId) || CEREMONIES[0];

  return (
    <section id="ceremonies" className="py-24 bg-[#0a101d] border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="font-khmer text-amber-400 text-base mb-1">ពិធីទាំងបីនៃបុណ្យអុំទូក</p>
          <div className="text-xs uppercase tracking-widest text-stone-400 font-sans mb-3">
            <span>Core Celebrations</span>
            <span aria-hidden="true" className="mx-2">·</span>
            <span>Three Sacred Pillars</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-4 text-balance">
            The Three Sacred Rites of the Festival
          </h2>
          <p className="text-stone-300 font-light leading-relaxed">
            Bon Om Touk is not merely a sport regatta; it is an ancient triad of water warfare commemoration, royal illumination, and agrarian lunar gratitude woven together across three historic days.
          </p>
        </div>

        {/* Interactive Segmented Switcher */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-[#0e1626] border border-stone-800 rounded-xl mb-10 max-w-2xl">
          {CEREMONIES.map((ceremony) => {
            const isSelected = ceremony.id === activeCeremonyId;
            return (
              <button
                key={ceremony.id}
                onClick={() => setActiveCeremonyId(ceremony.id)}
                className={`flex-1 min-w-[180px] py-3 px-4 rounded-lg text-xs font-semibold tracking-wider transition-all cursor-pointer text-left whitespace-nowrap ${
                  isSelected
                    ? 'bg-amber-400 text-stone-950 shadow-md'
                    : 'text-stone-300 hover:text-white hover:bg-stone-800/50'
                }`}
              >
                <span className="block font-khmer text-xs opacity-90">{ceremony.khmerTitle}</span>
                <span className="block truncate">{ceremony.englishTitle.split(' ')[1] || ceremony.englishTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Ceremony Deep Dive Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-[#0e1626]/80 border border-stone-800 rounded-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-sm">
          {/* Visual Showcase (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="relative rounded-xl overflow-hidden aspect-video bg-stone-900 border border-stone-800/80">
              <img
                src={activeCeremony.image}
                alt={activeCeremony.englishTitle}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-1.5 text-[11px] sm:text-xs text-stone-200">
                <span className="font-serif italic">{activeCeremony.phoneticTitle}</span>
                <span className="bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded text-amber-300 font-khmer">
                  {activeCeremony.khmerTitle}
                </span>
              </div>
            </div>

            {/* Time & Scheduling Metadata */}
            <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-[#080d16] border border-stone-800/80 text-xs text-stone-300">
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <span className="text-stone-400 block">Ceremonial Schedule</span>
                  <span className="font-medium text-white">{activeCeremony.day}</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <span className="text-stone-400 block">Peak Hours</span>
                  <span className="font-medium text-white">{activeCeremony.timeOfDay}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative & Rituals (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="font-khmer text-amber-400 text-sm mb-1">{activeCeremony.khmerTitle}</p>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
                {activeCeremony.englishTitle}
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed mb-6 font-light">
                {activeCeremony.summary}
              </p>

              <div className="mb-6 p-4 rounded-xl bg-amber-950/20 border border-amber-500/20">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-300 block mb-1">
                  Spiritual & Cultural Meaning
                </span>
                <p className="text-xs text-amber-100/90 leading-relaxed">
                  {activeCeremony.significance}
                </p>
              </div>

              {/* Ritual Checklist */}
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-stone-400 block mb-3">
                  Essential Customs & Rituals
                </span>
                <ul className="space-y-2.5">
                  {activeCeremony.keyRituals.map((ritual, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-stone-200">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{ritual}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
