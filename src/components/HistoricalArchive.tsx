import React from 'react';
import { FESTIVAL_IMAGES, HISTORICAL_CHRONOLOGY } from '../data/festivalContent';
import { Landmark, Scroll, ShieldCheck } from 'lucide-react';

export const HistoricalArchive: React.FC = () => {
  return (
    <section id="history" className="py-24 bg-[#080d16] border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="font-khmer text-amber-400 text-base mb-1">ប្រវត្តិសាស្ត្រ និងចម្លាក់ប្រាសាទបាយ័ន</p>
          <div className="text-xs uppercase tracking-widest text-stone-400 font-sans mb-3">
            <span>Angkorian Naval Genesis</span>
            <span aria-hidden="true" className="mx-2">·</span>
            <span>800+ Years of History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-4 text-balance">
            Carved in Stone: The Ancient Regattas of Angkor
          </h2>
          <p className="text-stone-300 font-light leading-relaxed">
            Long before modern stadiums, the Khmer Empire under King Jayavarman VII trained its mighty riverine navy through annual racing regattas. The same longboat profiles, cadence drummers, and dragon figureheads racing in Phnom Penh today are immortalized on the sandstone galleries of the Bayon.
          </p>
        </div>

        {/* Archaeological Showcase & Relief Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Bas-Relief Image Showcase (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-stone-800 shadow-2xl bg-stone-900 group">
              <img
                src={FESTIVAL_IMAGES.angkorRelief}
                alt="Ancient Khmer sandstone bas-relief at Bayon temple showing 12th century naval war boats"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-1.5 text-[11px] sm:text-xs text-stone-200">
                <span className="font-serif italic">Bayon Temple · 12th Century CE</span>
                <span className="text-amber-300 font-khmer bg-black/60 px-2 py-0.5 rounded">ចម្លាក់កងទ័ពជើងទឹកខ្មែរ</span>
              </div>
            </div>
            <p className="text-xs text-stone-400 font-serif italic">
              Fig. 1 — Bas-relief detail from the Southern Gallery of the Bayon (Angkor Thom), depicting King Jayavarman VII's naval battle on the Tonle Sap lake against Cham warships.
            </p>
          </div>

          {/* Iconography Breakdown (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-6 rounded-2xl bg-[#0e1626] border border-stone-800">
              <div className="flex items-center gap-2 mb-3 text-amber-400">
                <ShieldCheck className="w-4 h-4" />
                <h4 className="text-lg font-serif font-bold text-white">
                  Deciphering the Bayon Reliefs
                </h4>
              </div>

              <ul className="space-y-4 text-xs text-stone-300 leading-relaxed font-light">
                <li className="pb-3 border-b border-stone-800/60">
                  <span className="font-semibold text-white block mb-0.5">The Mythical Prow Standards</span>
                  Notice the towering Garuda and multi-headed Naga sculpted at the bow, gripping celestial standards to intimidate enemy vessels and channel divine speed.
                </li>
                <li className="pb-3 border-b border-stone-800/60">
                  <span className="font-semibold text-white block mb-0.5">Synchronized Double-Tier Crews</span>
                  Beneath the warrior commanders standing with shields and lances, rows of disciplined rowers dig their short-blade paddles into the churning water in exact harmony.
                </li>
                <li>
                  <span className="font-semibold text-white block mb-0.5">The Flora and Fauna of Tonle Sap</span>
                  Below the hull, ancient sculptors etched crocodiles, gigantic catfish, water snakes, and lotus leaves—capturing the biodiverse waters of the Great Lake.
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-500/20 text-xs text-amber-100/90 leading-relaxed">
              <span className="font-semibold text-amber-300 block mb-1">A Rite of Royal Naval Readiness</span>
              In the 12th and 13th centuries, the end of the rainy season signaled military maneuvers. King Jayavarman VII gathered the imperial fleet at the lakeshore to inspect troops, test rowers’ stamina, and bestow royal awards upon victorious crews.
            </div>
          </div>
        </div>

        {/* Historical Timeline */}
        <div className="border-t border-stone-800/80 pt-12">
          <div className="flex items-center gap-2 mb-8">
            <Scroll className="w-4 h-4 text-amber-400" />
            <h3 className="text-2xl font-serif font-bold text-white">
              Chronology of Bon Om Touk
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HISTORICAL_CHRONOLOGY.map((event, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0e1626] border border-stone-800 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-amber-400 block mb-1">
                    {event.year}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-stone-400 block mb-2 font-sans">
                    {event.khmerEra}
                  </span>
                  <h4 className="text-lg font-serif font-bold text-white mb-3">
                    {event.title}
                  </h4>
                  <p className="text-xs text-stone-300 leading-relaxed font-light mb-4">
                    {event.description}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#080d16] border border-stone-800/80 text-[11px] text-amber-200/80">
                  <span className="font-semibold text-stone-400 block mb-0.5 font-sans">Archival Record:</span>
                  {event.archaeologicalProof}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
