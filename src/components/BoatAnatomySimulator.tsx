import React, { useState } from 'react';
import { BOAT_PARTS } from '../data/festivalContent';
import { calculateRaceMetrics } from '../utils/festivalLogic';
import { soundscape } from '../utils/audioSynthesizer';
import { Eye, Shield, Users, Compass, Music, Play } from 'lucide-react';

export const BoatAnatomySimulator: React.FC = () => {
  const [selectedPartId, setSelectedPartId] = useState<string>('kbal');
  const [rowerCount, setRowerCount] = useState<number>(64);
  const [strokeCadence, setStrokeCadence] = useState<number>(54);

  const selectedPart = BOAT_PARTS.find((p) => p.id === selectedPartId) || BOAT_PARTS[0];
  const metrics = calculateRaceMetrics(rowerCount, strokeCadence);

  const handleTestDrum = () => {
    soundscape.playDrumBeat(95);
  };

  return (
    <section id="boat-anatomy" className="py-24 bg-[#0a101d] border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="font-khmer text-amber-400 text-base mb-1">រចនាសម្ព័ន្ធទូកងខ្មែរ</p>
          <div className="text-xs uppercase tracking-widest text-stone-400 font-sans mb-3">
            <span>Maritime Engineering</span>
            <span aria-hidden="true" className="mx-2">·</span>
            <span>Touk Ngor Anatomy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-4 text-balance">
            Anatomy of the Sacred Touk Ngor Longboat
          </h2>
          <p className="text-stone-300 font-light leading-relaxed">
            Measuring up to 30 meters long and carved from ancient teak and ironwood trunks, the traditional Cambodian Touk Ngor is both a hydro-dynamically refined racing craft and a sacred vessel embodying guardian spirits.
          </p>
        </div>

        {/* Part Inspector & Hotspot Bar */}
        <div className="bg-[#0e1626] border border-stone-800 rounded-2xl p-6 sm:p-8 mb-8 backdrop-blur-sm">
          {/* Visual Schematic Representation */}
          <div className="relative w-full aspect-[21/6] bg-[#070b13] rounded-xl p-4 border border-stone-800/80 flex items-center justify-center overflow-hidden mb-6">
            <svg viewBox="0 0 900 180" className="w-full h-full max-h-48">
              {/* Water surface ripples */}
              <path d="M 0 135 C 150 140, 300 130, 450 135 C 600 140, 750 130, 900 135" fill="none" stroke="#0284c7" strokeWidth="2" opacity="0.4" />
              <path d="M 0 145 C 100 140, 350 150, 500 145 C 700 140, 850 150, 900 145" fill="none" stroke="#0369a1" strokeWidth="1.5" opacity="0.3" />

              {/* Boat Hull Profile */}
              <path
                d="M 50 80 C 120 120, 250 125, 450 125 C 650 125, 780 120, 850 70 L 840 85 C 770 135, 640 140, 450 140 C 260 140, 130 135, 60 95 Z"
                fill="#78350f"
                stroke="#d97706"
                strokeWidth="2"
              />

              {/* Dragon Prow (Kbal Touk) at Bow (Left) */}
              <path
                d="M 50 80 C 40 60, 20 40, 25 25 C 32 20, 45 35, 45 45 C 55 35, 65 30, 70 35 C 75 42, 60 65, 60 95"
                fill="#b45309"
                stroke="#f59e0b"
                strokeWidth="2"
              />
              {/* Naga crest flame */}
              <circle cx="28" cy="28" r="4" fill="#ef4444" />

              {/* Phnek Touk (Eye of the Boat) */}
              <circle cx="65" cy="72" r="5" fill="#f8fafc" stroke="#0f172a" strokeWidth="1.5" />
              <circle cx="65" cy="72" r="2.5" fill="#0f172a" />

              {/* Drum Master Podium (Center-Bow) */}
              <rect x="230" y="98" width="16" height="24" fill="#fbbf24" opacity="0.9" rx="2" />
              <circle cx="238" cy="92" r="5" fill="#fde047" />

              {/* Rowers Ranks (Komlang Om) along the hull */}
              {Array.from({ length: 18 }).map((_, i) => (
                <g key={i} transform={`translate(${270 + i * 28}, 100)`}>
                  <circle cx="0" cy="-6" r="4" fill="#fef08a" opacity="0.9" />
                  <line x1="0" y1="-2" x2="0" y2="15" stroke="#fef08a" strokeWidth="2" />
                  {/* Oars dipping into water */}
                  <line x1="0" y1="5" x2="10" y2="35" stroke="#fed7aa" strokeWidth="2.5" strokeLinecap="round" />
                </g>
              ))}

              {/* Helmsman (Neak Changkout) at Stern (Right) */}
              <g transform="translate(805, 75)">
                <circle cx="0" cy="-6" r="5" fill="#fde047" />
                <line x1="0" y1="-1" x2="0" y2="18" stroke="#fde047" strokeWidth="2.5" />
                {/* Long Steer Oar */}
                <line x1="0" y1="8" x2="35" y2="55" stroke="#d97706" strokeWidth="3" strokeLinecap="round" />
              </g>

              {/* Interactive Hotspot Buttons in SVG coordinates */}
              <g
                className="cursor-pointer"
                onClick={() => setSelectedPartId('kbal')}
              >
                <circle cx="45" cy="45" r="14" fill="#fbbf24" opacity="0.3" className="animate-ping" />
                <circle cx="45" cy="45" r="10" fill="#fbbf24" stroke="#000" strokeWidth="1.5" />
                <text x="45" y="49" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#000">1</text>
              </g>

              <g
                className="cursor-pointer"
                onClick={() => setSelectedPartId('phnek')}
              >
                <circle cx="85" cy="72" r="14" fill="#38bdf8" opacity="0.3" className="animate-ping" />
                <circle cx="85" cy="72" r="10" fill="#38bdf8" stroke="#000" strokeWidth="1.5" />
                <text x="85" y="76" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#000">2</text>
              </g>

              <g
                className="cursor-pointer"
                onClick={() => setSelectedPartId('vey-skor')}
              >
                <circle cx="238" cy="80" r="14" fill="#ec4899" opacity="0.3" className="animate-ping" />
                <circle cx="238" cy="80" r="10" fill="#ec4899" stroke="#000" strokeWidth="1.5" />
                <text x="238" y="84" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#000">3</text>
              </g>

              <g
                className="cursor-pointer"
                onClick={() => setSelectedPartId('rowers')}
              >
                <circle cx="510" cy="85" r="14" fill="#22c55e" opacity="0.3" className="animate-ping" />
                <circle cx="510" cy="85" r="10" fill="#22c55e" stroke="#000" strokeWidth="1.5" />
                <text x="510" y="89" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#000">4</text>
              </g>

              <g
                className="cursor-pointer"
                onClick={() => setSelectedPartId('chamlong')}
              >
                <circle cx="805" cy="65" r="14" fill="#a855f7" opacity="0.3" className="animate-ping" />
                <circle cx="805" cy="65" r="10" fill="#a855f7" stroke="#000" strokeWidth="1.5" />
                <text x="805" y="69" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#000">5</text>
              </g>
            </svg>
          </div>

          {/* Part Selection Buttons */}
          <div className="flex flex-wrap gap-2 mb-6">
            {BOAT_PARTS.map((part) => {
              const isSelected = part.id === selectedPartId;
              return (
                <button
                  key={part.id}
                  onClick={() => setSelectedPartId(part.id)}
                  className={`py-2 px-3 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-amber-400 text-stone-950 font-semibold'
                      : 'bg-stone-900 text-stone-300 hover:bg-stone-800'
                  }`}
                >
                  <span className="font-khmer mr-1.5 opacity-80">{part.khmerName}</span>
                  <span>{part.englishName}</span>
                </button>
              );
            })}
          </div>

          {/* Active Part Detail Card */}
          <div className="p-5 rounded-xl bg-[#080d16] border border-stone-800/80">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <div>
                <span className="font-khmer text-amber-400 text-sm block">{selectedPart.khmerName}</span>
                <h4 className="text-xl font-serif font-bold text-white">
                  {selectedPart.englishName} ({selectedPart.phoneticName})
                </h4>
              </div>
              <span className="text-xs uppercase tracking-wider px-2.5 py-1 rounded bg-stone-800 text-stone-300">
                {selectedPart.role}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
              {selectedPart.culturalNote}
            </p>
          </div>
        </div>

        {/* Interactive Crew Cadence & Race Velocity Physics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0e1626] border border-stone-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
          {/* Controls (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-400 font-sans block mb-1">
                Rower Hydrodynamics
              </span>
              <h3 className="text-2xl font-serif font-bold text-white mb-2">
                Tune Crew Cadence & Power
              </h3>
              <p className="text-xs text-stone-300 font-light leading-relaxed">
                A standard Touk Ngor requires flawless synchronization. The drummer sets the pulse, while rowers dip oars in exact unison to prevent hydrodynamic cavitation.
              </p>
            </div>

            {/* Rower Count Slider */}
            <div>
              <div className="flex justify-between text-xs text-stone-300 mb-1.5">
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-amber-400" />
                  Rower Complement
                </span>
                <span className="font-mono font-bold text-amber-300 tabular-nums">{rowerCount} Rowers</span>
              </div>
              <input
                type="range"
                min="30"
                max="80"
                step="2"
                value={rowerCount}
                onChange={(e) => setRowerCount(Number(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer h-2 bg-stone-800 rounded-lg appearance-none"
              />
              <div className="flex justify-between text-[10px] text-stone-500 mt-1">
                <span>30 (Light Class)</span>
                <span>60 (Standard Touk Ngor)</span>
                <span>80 (Heavy Flagship)</span>
              </div>
            </div>

            {/* Stroke Cadence Slider */}
            <div>
              <div className="flex justify-between text-xs text-stone-300 mb-1.5">
                <span className="flex items-center gap-1.5">
                  <Music className="w-3.5 h-3.5 text-amber-400" />
                  Stroke Rate (Cadence)
                </span>
                <span className="font-mono font-bold text-amber-300 tabular-nums">{strokeCadence} Strokes / Min</span>
              </div>
              <input
                type="range"
                min="35"
                max="70"
                value={strokeCadence}
                onChange={(e) => setStrokeCadence(Number(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer h-2 bg-stone-800 rounded-lg appearance-none"
              />
              <div className="flex justify-between text-[10px] text-stone-500 mt-1">
                <span>35 SPM (Endurance Cruise)</span>
                <span>54 SPM (Mid-Course Pace)</span>
                <span>70 SPM (Finish Line Sprint)</span>
              </div>
            </div>

            {/* Test Drum Strike Trigger */}
            <button
              onClick={handleTestDrum}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer border border-stone-700/80"
            >
              <Play className="w-3.5 h-3.5 text-amber-400" />
              <span>Strike Drum Pulse (Skor Thom)</span>
            </button>
          </div>

          {/* Velocity & Sprint Telemetry (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-[#080d16] border border-stone-800/80">
              <span className="text-xs uppercase tracking-wider text-stone-400 block mb-1">
                Calculated Velocity
              </span>
              <span className="text-3xl font-mono tabular-nums font-bold text-amber-300">
                {metrics.speedKmh}
              </span>
              <span className="text-xs text-stone-400 ml-1.5">km/h</span>
              <span className="block text-[11px] text-stone-500 mt-2 font-mono">
                ({metrics.speedMps} meters / sec)
              </span>
            </div>

            <div className="p-5 rounded-xl bg-[#080d16] border border-stone-800/80">
              <span className="text-xs uppercase tracking-wider text-stone-400 block mb-1">
                1.7 km Sprint Time
              </span>
              <span className="text-3xl font-mono tabular-nums font-bold text-white">
                {metrics.formattedTime}
              </span>
              <span className="block text-[11px] text-stone-500 mt-2 font-mono">
                ({metrics.finishTimeSeconds} seconds)
              </span>
            </div>

            <div className="col-span-2 p-4 rounded-xl bg-amber-950/20 border border-amber-500/20 text-xs text-amber-100/90 leading-relaxed">
              <span className="font-semibold text-amber-300 block mb-1">The Spirit of the Village Crew</span>
              Rowers represent their ancestral pagoda (Wat) with ferocious pride. Before the final sprint past the Royal Moonlight Pavilion, the helmsman shouts the final battle chant and the cadence peaks at over 65 strokes per minute, turning the river into a roaring spray of white water.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
