import React, { useState } from 'react';
import { VANTAGE_POINTS, FESTIVAL_CUISINE } from '../data/festivalContent';
import { MapPin, Utensils, CalendarDays, Compass, Check } from 'lucide-react';

export const VisitorGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vantage' | 'itinerary' | 'cuisine' | 'etiquette'>('vantage');

  const itinerary = [
    {
      day: 'Day 1 — Inaugural Regattas & Royal Opening',
      khmer: 'ថ្ងៃទីមួយ — បើកការប្រណាំងទូក និងបណ្តែតប្រទីប',
      highlights: [
        '07:30 AM: Consecration of boats and arrival of monks along Sisowath Quay',
        '08:30 AM: Official Royal Opening Ceremony by His Majesty King Norodom Sihamoni',
        '09:00 AM - 04:30 PM: Preliminary heats (Touk Ngor pairs sprint the 1.7km course)',
        '06:30 PM: First evening parade of the illuminated flotillas (Loy Pratip)',
        '08:00 PM: Opening night fireworks display over the Mekong-Tonle Sap junction',
      ],
    },
    {
      day: 'Day 2 — Elimination Rounds & Midnight Full Moon Rites',
      khmer: 'ថ្ងៃទីពីរ — វគ្គជម្រុះ និងសំពះព្រះខែ អកអំបុក',
      highlights: [
        '08:00 AM - 04:30 PM: Second-round knockout regattas; rowers push peak cadence',
        '06:30 PM: Glowing flotillas cruise with royal brass fanfares',
        '08:00 PM: Traditional Khmer folk dance and classical Pinpeat concerts at riverside stages',
        '11:00 PM - 01:00 AM: Nationwide Sampeas Preah Khe salutation to the full moon',
        '12:00 Midnight: Sacred Auk Ambok ritual—eating pounded new rice with bananas',
      ],
    },
    {
      day: 'Day 3 — Grand Finals & Royal Trophy Bestowal',
      khmer: 'ថ្ងៃទីបី — វគ្គផ្តាច់ព្រ័ត្រ និងព្រះរាជទានពានរង្វាន់',
      highlights: [
        '08:30 AM - 01:00 PM: Quarter-final and semi-final sprints',
        '02:00 PM - 04:30 PM: The Grand Finals (Touk Ngor Champions race for supreme honor)',
        '05:00 PM: His Majesty the King presents royal flags, trophies, and awards to victorious pagoda crews',
        '07:00 PM: Grand finale Loy Pratip flotilla cruise',
        '08:30 PM: Spectacular 30-minute pyrotechnic fireworks extravaganza lighting the skies',
      ],
    },
  ];

  const etiquetteRules = [
    {
      rule: 'Dress Modestly Near Royal Precincts',
      detail: 'Keep shoulders and knees covered when watching races near the Royal Palace and Moonlight Pavilion.',
    },
    {
      rule: 'Protect Preah Mae Kongkea (Clean Rivers)',
      detail: 'Only release organic, biodegradable lanterns made of banana leaves and flowers. Dispose of waste in festival bins.',
    },
    {
      rule: 'Arrive Early for Riverside Railings',
      detail: 'Sisowath Quay draws millions; arriving before 08:00 AM guarantees prime sightlines for the morning heats.',
    },
    {
      rule: 'Hydrate & Shield from Tropical Sun',
      detail: 'November days are warm; carry a refillable water canteen, wide-brim hat, and natural sunscreen.',
    },
  ];

  return (
    <section id="visitor-guide" className="py-24 bg-[#0a101d] border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="font-khmer text-amber-400 text-base mb-1">មគ្គុទ្ទេសក៍ទេសចរណ៍ និងបទពិសោធន៍មាត់ទន្លេ</p>
          <div className="text-xs uppercase tracking-widest text-stone-400 font-sans mb-3">
            <span>Visitor Companion</span>
            <span aria-hidden="true" className="mx-2">·</span>
            <span>Sisowath Quay & Beyond</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-4 text-balance">
            Experiencing the Water Festival in Phnom Penh
          </h2>
          <p className="text-stone-300 font-light leading-relaxed">
            Everything you need to immerse yourself in the joyous energy of Bon Om Touk: vantage points, the official 3-day ceremonial program, traditional delicacies, and festival etiquette.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-[#0e1626] border border-stone-800 rounded-xl mb-10 max-w-2xl">
          <button
            onClick={() => setActiveTab('vantage')}
            className={`flex-1 py-2.5 px-4 rounded-lg text-xs font-semibold tracking-wider transition-all cursor-pointer whitespace-nowrap text-center ${
              activeTab === 'vantage'
                ? 'bg-amber-400 text-stone-950 shadow-md'
                : 'text-stone-300 hover:text-white hover:bg-stone-800/50'
            }`}
          >
            Vantage Points
          </button>
          <button
            onClick={() => setActiveTab('itinerary')}
            className={`flex-1 py-2.5 px-4 rounded-lg text-xs font-semibold tracking-wider transition-all cursor-pointer whitespace-nowrap text-center ${
              activeTab === 'itinerary'
                ? 'bg-amber-400 text-stone-950 shadow-md'
                : 'text-stone-300 hover:text-white hover:bg-stone-800/50'
            }`}
          >
            3-Day Program
          </button>
          <button
            onClick={() => setActiveTab('cuisine')}
            className={`flex-1 py-2.5 px-4 rounded-lg text-xs font-semibold tracking-wider transition-all cursor-pointer whitespace-nowrap text-center ${
              activeTab === 'cuisine'
                ? 'bg-amber-400 text-stone-950 shadow-md'
                : 'text-stone-300 hover:text-white hover:bg-stone-800/50'
            }`}
          >
            Festival Street Food
          </button>
          <button
            onClick={() => setActiveTab('etiquette')}
            className={`flex-1 py-2.5 px-4 rounded-lg text-xs font-semibold tracking-wider transition-all cursor-pointer whitespace-nowrap text-center ${
              activeTab === 'etiquette'
                ? 'bg-amber-400 text-stone-950 shadow-md'
                : 'text-stone-300 hover:text-white hover:bg-stone-800/50'
            }`}
          >
            Visitor Etiquette
          </button>
        </div>

        {/* Tab Content Display */}
        {activeTab === 'vantage' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VANTAGE_POINTS.map((vp, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0e1626] border border-stone-800 hover:border-amber-500/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-amber-400 text-xs mb-2">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>{vp.location}</span>
                  </div>
                  <span className="font-khmer text-amber-300 text-sm block mb-1">{vp.khmerName}</span>
                  <h4 className="text-xl font-serif font-bold text-white mb-2">{vp.name}</h4>
                  <p className="text-xs text-stone-300 leading-relaxed font-light mb-4">
                    <strong className="text-white font-medium">Best For: </strong>{vp.bestFor}
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-[#080d16] border border-stone-800/80 text-xs text-stone-400">
                  <span className="text-amber-300 font-semibold block mb-0.5">Insider Tip:</span>
                  {vp.tips}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'itinerary' && (
          <div className="space-y-6">
            {itinerary.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0e1626] border border-stone-800"
              >
                <span className="font-khmer text-amber-400 text-xs block mb-1">{item.khmer}</span>
                <h4 className="text-xl font-serif font-bold text-white mb-4">{item.day}</h4>
                <ul className="space-y-2.5">
                  {item.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5 text-xs text-stone-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'cuisine' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FESTIVAL_CUISINE.map((food, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0e1626] border border-stone-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-khmer text-amber-400 text-base">{food.khmer}</span>
                    <Utensils className="w-3.5 h-3.5 text-stone-500" />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-white mb-2">{food.name}</h4>
                  <p className="text-xs text-stone-300 leading-relaxed font-light mb-4">
                    {food.description}
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-[#080d16] border border-stone-800/80 text-xs text-amber-200/90">
                  <span className="text-stone-400 block font-medium mb-0.5">Traditional Pairing:</span>
                  {food.pairing}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'etiquette' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {etiquetteRules.map((e, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0e1626] border border-stone-800"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <h4 className="text-base font-serif font-bold text-white">{e.rule}</h4>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed font-light">
                  {e.detail}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
