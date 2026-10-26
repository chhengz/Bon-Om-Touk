import React, { useState } from 'react';
import { FESTIVAL_IMAGES } from '../data/festivalContent';
import { calculateAmbokServing } from '../utils/festivalLogic';
import { Utensils, Moon, Users } from 'lucide-react';

export const AmbokCeremony: React.FC = () => {
  const [guestCount, setGuestCount] = useState<number>(4);
  const [activeStep, setActiveStep] = useState<number>(0);

  const recipe = calculateAmbokServing(guestCount);

  const steps = [
    {
      title: 'Harvesting Young Fragrant Rice',
      khmer: 'ច្រូតស្រូវទុំទឹកដោះថ្មី',
      desc: 'Selected while the grain is still tender and milky (Srov Thmey), brimming with natural sweetness from the monsoon silt.',
    },
    {
      title: 'Dry Roasting in Earthen Pots',
      khmer: 'លីងស្រូវក្នុងឆ្នាំងដី',
      desc: 'Grains are constantly stirred over burning coconut husks in clay pots until the hulls pop like miniature crackers.',
    },
    {
      title: 'Pestle-Pounding in Wooden Mortars',
      khmer: 'បុកអំបុកក្នុងត្បាល់ឈើ',
      desc: 'Pairs of villagers rhythmically pound the hot roasted paddy with heavy wooden pestles into delicate, flat, paper-thin flakes.',
    },
    {
      title: 'Winnowing with Bamboo Trays',
      khmer: 'អុំរែងសម្អាតកន្ទក់',
      desc: 'Tossed into the evening breeze on flat woven bamboo trays (Kancheah) to separate the golden husks from the aromatic emerald flakes.',
    },
    {
      title: 'The Midnight Family Blessing',
      khmer: 'ពិធីអកអំបុកកណ្តាលអធ្រាត្រ',
      desc: 'As the full moon crowns the sky at midnight, elders feed youngsters ambok with ripe bananas while gently patting their stomachs to wish fullness and prosperity.',
    },
  ];

  return (
    <section id="ambok" className="py-24 bg-[#0a101d] border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="font-khmer text-amber-400 text-base mb-1">ពិធីសំពះព្រះខែ និងអកអំបុក</p>
          <div className="text-xs uppercase tracking-widest text-stone-400 font-sans mb-3">
            <span>Midnight Full Moon Banquet</span>
            <span aria-hidden="true" className="mx-2">·</span>
            <span>Auk Ambok Tradition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-4 text-balance">
            The Sacred Ritual of Auk Ambok
          </h2>
          <p className="text-stone-300 font-light leading-relaxed">
            At the stroke of midnight when the full moon of Kadeuk reaches its zenith, families gather across Cambodia to honor the selfless hare in the moon with incense, lotus blossoms, and sweet freshly pounded rice.
          </p>
        </div>

        {/* 2-Column Split: Visual & Legend (6 cols) + Culinary Guide & Calculator (6 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Visual Feast & Buddhist Legend (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-stone-800 shadow-xl bg-stone-900">
              <img
                src={FESTIVAL_IMAGES.aukAmbok}
                alt="Ambok feast offering with yellow bananas, grated coconut, and candles under the full moon"
                className="w-full h-full object-cover filter brightness-[0.9]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-1.5 text-[11px] sm:text-xs text-stone-200">
                <span className="font-serif italic">Banana Leaf Ambok Offering</span>
                <span className="text-amber-300 font-khmer bg-black/60 px-2 py-0.5 rounded">អំបុកចេកទុំ</span>
              </div>
            </div>

            {/* The Legend of the Hare in the Moon Box */}
            <div className="p-6 rounded-2xl bg-[#0e1626] border border-stone-800">
              <div className="flex items-center gap-2 mb-2 text-amber-400">
                <Moon className="w-4 h-4" />
                <h4 className="text-lg font-serif font-bold text-white">
                  The Legend of Sasa Pandita (The Selfless Hare)
                </h4>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed font-light mb-3">
                In Buddhist lore, the Bodhisattva once lived as a wise rabbit in the sacred forest. When the deity Indra disguised himself as a starving beggar asking for food, the rabbit had no fish or fruit to offer—so he heroically leaped into the fire so the traveler would not perish.
              </p>
              <p className="text-xs text-amber-200/90 leading-relaxed bg-amber-950/20 p-3 rounded-xl border border-amber-500/20">
                Deeply moved by this supreme sacrifice, Indra drew the outline of the rabbit onto the face of the moon, so humanity would forever remember compassion, generosity, and selflessness during the full moon of Kadeuk.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Making Steps & Serving Calculator (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Step-by-Step Interactive Guide */}
            <div className="p-6 rounded-2xl bg-[#0e1626] border border-stone-800">
              <h4 className="text-lg font-serif font-bold text-white mb-4">
                Five Steps of Traditional Ambok Crafting
              </h4>

              <div className="space-y-3">
                {steps.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                      activeStep === idx
                        ? 'border-amber-400 bg-amber-950/30'
                        : 'border-stone-800 bg-[#080d16] hover:border-stone-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-white">
                        0{idx + 1}. {s.title}
                      </span>
                      <span className="font-khmer text-xs text-amber-300">{s.khmer}</span>
                    </div>
                    {activeStep === idx && (
                      <p className="text-xs text-stone-300 font-light leading-relaxed mt-2 pt-2 border-t border-amber-500/20">
                        {s.desc}
                      </p>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Serving Calculator */}
            <div className="p-6 rounded-2xl bg-[#0e1626] border border-stone-800">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Utensils className="w-4 h-4 text-amber-400" />
                  <h4 className="text-sm font-semibold text-white">
                    Family Feast Proportion Calculator
                  </h4>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-stone-300">
                  <Users className="w-3.5 h-3.5 text-amber-400" />
                  <span className="font-mono font-bold text-amber-300 tabular-nums">
                    {guestCount} Guests
                  </span>
                </div>
              </div>

              <input
                type="range"
                min="1"
                max="16"
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer h-2 bg-stone-800 rounded-lg appearance-none mb-4"
              />

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3 rounded-xl bg-[#080d16] border border-stone-800">
                  <span className="text-lg font-mono font-bold text-amber-300 tabular-nums block">
                    {recipe.ambokGrams}g
                  </span>
                  <span className="text-[11px] text-stone-400">Green Ambok</span>
                </div>
                <div className="p-3 rounded-xl bg-[#080d16] border border-stone-800">
                  <span className="text-lg font-mono font-bold text-amber-300 tabular-nums block">
                    {recipe.bananas}
                  </span>
                  <span className="text-[11px] text-stone-400">Ripe Namva Bananas</span>
                </div>
                <div className="p-3 rounded-xl bg-[#080d16] border border-stone-800">
                  <span className="text-lg font-mono font-bold text-amber-300 tabular-nums block">
                    {recipe.gratedCoconutGrams}g
                  </span>
                  <span className="text-[11px] text-stone-400">Fresh Coconut</span>
                </div>
                <div className="p-3 rounded-xl bg-[#080d16] border border-stone-800">
                  <span className="text-lg font-mono font-bold text-amber-300 tabular-nums block">
                    {recipe.coconutWaterMl}ml
                  </span>
                  <span className="text-[11px] text-stone-400">Sweet Coconut Nectar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
