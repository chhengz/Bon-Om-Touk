import React from 'react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#05080f] border-t border-stone-800/80 py-16 text-stone-400 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-stone-800/80">
          {/* Brand & Cultural Homage (6 cols) */}
          <div className="md:col-span-6">
            <span className="text-2xl font-display font-bold text-white block mb-1">
              Bon Om Touk
            </span>
            <p className="font-khmer text-amber-400 text-sm mb-3">
              ព្រះរាជពិធីបុណ្យអុំទូក បណ្តែតប្រទីប និងសំពះព្រះខែ អកអំបុក
            </p>
            <p className="text-xs text-stone-400 leading-relaxed max-w-md font-light mb-4">
              Dedicated to preserving and celebrating the profound hydrological, spiritual, and historical traditions of the Cambodian Water Festival. Honoring the sacred Tonle Sap, the ancestral boat-builders of Angkor, and the timeless bond between the Khmer people and the river.
            </p>
            <p className="font-khmer text-xs text-amber-300/80">
              សូមព្រះមែកុង្គាប្រទានពរជ័យ សិរីសួស្តី ជ័យមង្គល និងសេចក្តីសុខសាន្តគ្រប់ប្រការ។
            </p>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-white block mb-4">
              Exhibition Chapters
            </span>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('ceremonies')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  The Three Sacred Rites
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('hydrology')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Tonle Sap Flow Reversal
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('boat-anatomy')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Touk Ngor Anatomy & Cadence
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('history')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Angkorian Naval Reliefs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('flotilla')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Virtual Loy Pratip Flotilla
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('ambok')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Auk Ambok Moon Banquet
                </button>
              </li>
            </ul>
          </div>

          {/* Cultural Heritage Reference (3 cols) */}
          <div className="md:col-span-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-white block mb-4">
              Sacred Rivers of Chaktomuk
            </span>
            <ul className="space-y-2 text-xs text-stone-400 font-light">
              <li><strong className="text-stone-300 font-medium">Upper Mekong:</strong> Tonle Thom (ទន្លេធំ)</li>
              <li><strong className="text-stone-300 font-medium">Lower Mekong:</strong> Tonle Mekong Kraom (ទន្លេមេគង្គក្រោម)</li>
              <li><strong className="text-stone-300 font-medium">Tonle Sap:</strong> The Reversing Arterial (ទន្លេសាប)</li>
              <li><strong className="text-stone-300 font-medium">Bassac River:</strong> Southern Distributary (ទន្លេបាសាក់)</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Quiet Copyright & Unboxed Metadata */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            <span>© 2026 Bon Om Touk Cultural Archive · Kingdom of Cambodia</span>
          </div>
          <div className="flex items-center gap-3">
            <span>Preserving Khmer Intangible Heritage</span>
            <span aria-hidden="true">·</span>
            <span>Sisowath Quay, Phnom Penh</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
