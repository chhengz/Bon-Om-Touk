import React, { useState } from 'react';
import { getTonleSapHydrology } from '../utils/festivalLogic';
import { ArrowLeftRight, Waves, Droplets, Info } from 'lucide-react';

export const HydrologySimulator: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<number>(11); // Defaults to November (Festival Reversal)

  const hydrology = getTonleSapHydrology(selectedMonth);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November (Festival)', 'December'
  ];

  return (
    <section id="hydrology" className="py-24 bg-[#080d16] border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="font-khmer text-amber-400 text-base mb-1">បាតុភូតធម្មជាតិប្លែកនៃទន្លេសាប</p>
          <div className="text-xs uppercase tracking-widest text-stone-400 font-sans mb-3">
            <span>Hydrological Marvel</span>
            <span aria-hidden="true" className="mx-2">·</span>
            <span>The Heartbeat of Cambodia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-4 text-balance">
            The Flow Reversal of the Tonle Sap
          </h2>
          <p className="text-stone-300 font-light leading-relaxed">
            The Tonle Sap is the only river system on Earth whose flow completely reverses course twice a year. Bon Om Touk marks the exact moment the river reverses back toward the Mekong Delta, releasing fertile waters, billions of freshwater fish, and initiating the rice harvest season.
          </p>
        </div>

        {/* Interactive Simulator Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0d1424] border border-stone-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
          {/* Interactive SVG Diagram (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="relative bg-[#060a12] border border-stone-800/80 rounded-xl p-6 overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-widest text-stone-400 font-mono">
                  River Basin Telemetry
                </span>
                <span className={`text-xs px-2.5 py-1 rounded-md font-medium ${
                  selectedMonth === 11
                    ? 'bg-amber-400/20 text-amber-300 border border-amber-500/30'
                    : hydrology.isMonsoon
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                }`}>
                  {hydrology.flowDirection === 'upstream_to_lake'
                    ? 'Flowing Upstream (Filling Lake)'
                    : 'Flowing Downstream (Draining to Mekong)'}
                </span>
              </div>

              {/* Dynamic SVG Map representing Tonle Sap Lake & River to Mekong Confluence */}
              <div className="relative w-full aspect-[16/9] flex items-center justify-center">
                <svg viewBox="0 0 600 320" className="w-full h-full">
                  <defs>
                    <linearGradient id="waterGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1e3a8a" />
                      <stop offset="50%" stopColor="#0284c7" />
                      <stop offset="100%" stopColor="#38bdf8" />
                    </linearGradient>
                    <radialGradient id="lakeGradient" cx="40%" cy="40%" r="60%">
                      <stop offset="0%" stopColor={hydrology.isMonsoon ? '#0284c7' : '#0369a1'} />
                      <stop offset="100%" stopColor="#082f49" />
                    </radialGradient>
                  </defs>

                  {/* Topographic Background contours */}
                  <path d="M 20 50 Q 150 20 300 40 T 580 30" fill="none" stroke="#1f2937" strokeWidth="1" strokeDasharray="4 4" />
                  <path d="M 20 280 Q 200 300 400 290 T 580 310" fill="none" stroke="#1f2937" strokeWidth="1" strokeDasharray="4 4" />

                  {/* Tonle Sap Lake (Expands/Contracts dynamically with lakeAreaSqKm) */}
                  <g className="transition-all duration-700">
                    <ellipse
                      cx="140"
                      cy="150"
                      rx={Math.max(50, (hydrology.lakeAreaSqKm / 16000) * 115)}
                      ry={Math.max(35, (hydrology.lakeAreaSqKm / 16000) * 85)}
                      fill="url(#lakeGradient)"
                      stroke="#38bdf8"
                      strokeWidth="1.5"
                      opacity="0.85"
                    />
                    <text x="140" y="145" textAnchor="middle" fill="#f8fafc" fontSize="13" fontWeight="bold">
                      Tonle Sap Lake
                    </text>
                    <text x="140" y="165" textAnchor="middle" fill="#93c5fd" fontSize="11" fontFamily="monospace">
                      {hydrology.lakeAreaSqKm.toLocaleString()} km²
                    </text>
                  </g>

                  {/* Tonle Sap River Channel connecting Lake to Chaktomuk */}
                  <path
                    d="M 240 150 C 310 150, 360 170, 420 190"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth={hydrology.isMonsoon ? '18' : '12'}
                    strokeLinecap="round"
                    className="transition-all duration-500"
                  />

                  {/* Mekong River Flow crossing at Phnom Penh (Chaktomuk Junction) */}
                  <path
                    d="M 400 40 Q 420 120 420 190 T 450 300"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="16"
                    strokeLinecap="round"
                  />

                  {/* Bassac River branching south */}
                  <path
                    d="M 420 190 Q 400 240 390 300"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="12"
                    strokeLinecap="round"
                  />

                  {/* Phnom Penh / Royal Palace Marker */}
                  <circle cx="420" cy="190" r="7" fill="#fbbf24" stroke="#ffffff" strokeWidth="2" />
                  <text x="435" y="185" fill="#fef08a" fontSize="11" fontWeight="600">
                    Phnom Penh
                  </text>
                  <text x="435" y="200" fill="#cbd5e1" fontSize="9">
                    (Chaktomuk Confluence)
                  </text>

                  {/* Current flow vector indicator arrows */}
                  {hydrology.flowDirection === 'upstream_to_lake' ? (
                    <g className="animate-pulse">
                      <path d="M 370 175 L 320 160" stroke="#facc15" strokeWidth="3" markerEnd="url(#arrow)" />
                      <polygon points="315,158 328,154 326,165" fill="#facc15" />
                      <text x="340" y="145" fill="#facc15" fontSize="10" fontWeight="bold">
                        ◄ Upstream to Lake
                      </text>
                    </g>
                  ) : (
                    <g className="animate-pulse">
                      <path d="M 280 155 L 340 170" stroke="#facc15" strokeWidth="3" />
                      <polygon points="345,171 332,165 335,177" fill="#facc15" />
                      <text x="300" y="145" fill="#facc15" fontSize="10" fontWeight="bold">
                        Downstream to Mekong ►
                      </text>
                    </g>
                  )}
                </svg>
              </div>

              {/* Explanatory Caption */}
              <div className="flex items-center gap-2 mt-3 text-xs text-stone-300">
                <Info className="w-4 h-4 text-amber-400 shrink-0" />
                <span>
                  {hydrology.significance}
                </span>
              </div>
            </div>

            {/* Month Slider & Quick Selectors */}
            <div className="p-4 bg-[#0a101d] border border-stone-800 rounded-xl">
              <div className="flex items-center justify-between text-xs text-stone-400 mb-2">
                <span>Month of the Year</span>
                <span className="font-semibold text-amber-300">{monthNames[selectedMonth - 1]}</span>
              </div>
              <input
                type="range"
                min="1"
                max="12"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(Number(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer h-2 bg-stone-800 rounded-lg appearance-none"
              />

              {/* Quick Jump Buttons */}
              <div className="grid grid-cols-3 gap-2 mt-3">
                <button
                  onClick={() => setSelectedMonth(8)}
                  className={`py-2 px-2 text-xs rounded-md font-medium transition-colors cursor-pointer text-center ${
                    selectedMonth === 8
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50'
                      : 'bg-stone-800/60 text-stone-300 hover:bg-stone-800'
                  }`}
                >
                  August (Monsoon Inflow)
                </button>
                <button
                  onClick={() => setSelectedMonth(11)}
                  className={`py-2 px-2 text-xs rounded-md font-semibold transition-colors cursor-pointer text-center ${
                    selectedMonth === 11
                      ? 'bg-amber-400 text-stone-950 shadow-sm'
                      : 'bg-stone-800/60 text-amber-300 hover:bg-stone-800 border border-amber-500/30'
                  }`}
                >
                  November (Bon Om Touk)
                </button>
                <button
                  onClick={() => setSelectedMonth(4)}
                  className={`py-2 px-2 text-xs rounded-md font-medium transition-colors cursor-pointer text-center ${
                    selectedMonth === 4
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50'
                      : 'bg-stone-800/60 text-stone-300 hover:bg-stone-800'
                  }`}
                >
                  April (Dry Season Low)
                </button>
              </div>
            </div>
          </div>

          {/* Hydrological Metrics & Cultural Impact (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-sans mb-1">
                <Waves className="w-3.5 h-3.5" />
                <span>Ecological Vitality</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-2">
                Why the Water Reversal Matters
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light mb-4">
                During the South Asian monsoon, snowmelt from the Himalayas and heavy rains swell the Mekong River so intensely that its tributary, the Tonle Sap, is literally pushed backwards into the Great Lake. The lake surface area explodes from ~2,700 km² to over 16,000 km².
              </p>
            </div>

            {/* Live Metrics Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-[#080d16] border border-stone-800/80">
                <span className="text-xs text-stone-400 block mb-1">Lake Surface Area</span>
                <span className="text-2xl font-mono tabular-nums font-bold text-white">
                  {hydrology.lakeAreaSqKm.toLocaleString()}
                </span>
                <span className="text-xs text-stone-500 ml-1">km²</span>
                <span className="block text-[11px] text-stone-400 mt-1">
                  {hydrology.lakeAreaSqKm > 10000 ? '5x Dry Footprint' : 'Base Footprint'}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#080d16] border border-stone-800/80">
                <span className="text-xs text-stone-400 block mb-1">Water Storage</span>
                <span className="text-2xl font-mono tabular-nums font-bold text-white">
                  {hydrology.waterVolumeKm3}
                </span>
                <span className="text-xs text-stone-500 ml-1">km³</span>
                <span className="block text-[11px] text-stone-400 mt-1">
                  {hydrology.isMonsoon ? 'High Silt Reservoir' : 'Harvest Drainage'}
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/20 text-xs text-amber-100/90 leading-relaxed">
              <span className="font-semibold text-amber-300 block mb-1">The Breadbasket of Angkor</span>
              When the river turns back in November, millions of fish migrate back into the river channels, producing one of the densest freshwater fishery catches on the planet. The nutrient silt left behind allows Cambodian farmers to harvest multiple rice cycles per year.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
