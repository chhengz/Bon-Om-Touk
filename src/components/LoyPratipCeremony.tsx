import React, { useState } from 'react';
import { CommunityLantern } from '../types/festival';
import { SAMPLE_LANTERNS, FESTIVAL_IMAGES } from '../data/festivalContent';
import { validateWish } from '../utils/festivalLogic';
import { soundscape } from '../utils/audioSynthesizer';
import { Send, Sparkles, Heart, Moon } from 'lucide-react';

export const LoyPratipCeremony: React.FC = () => {
  const [lanterns, setLanterns] = useState<CommunityLantern[]>(SAMPLE_LANTERNS);
  const [senderName, setSenderName] = useState<string>('');
  const [origin, setOrigin] = useState<string>('');
  const [wishText, setWishText] = useState<string>('');
  const [selectedStyle, setSelectedStyle] = useState<'lotus' | 'naga' | 'temple' | 'candle'>('lotus');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [justReleased, setJustReleased] = useState<CommunityLantern | null>(null);

  const lanternStyles = [
    { id: 'lotus', name: 'Royal Lotus', khmer: 'ផ្កាឈូក', color: '#f59e0b', desc: 'Purity, spiritual awakening, and peace' },
    { id: 'naga', name: 'Golden Naga', khmer: 'នាគរាជ', color: '#10b981', desc: 'Water guardian, protection, and prosperity' },
    { id: 'temple', name: 'Sacred Spire', khmer: 'ប្រាសាទ', color: '#6366f1', desc: 'Devotion to the sacred lineage and ancestors' },
    { id: 'candle', name: 'Banana Leaf Hearth', khmer: 'ស្លឹកចេក', color: '#ec4899', desc: 'Humility, nature gratitude, and longevity' },
  ];

  const handleReleaseLantern = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateWish(wishText);
    if (!validation.valid) {
      setErrorMessage(validation.error || 'Please enter a valid wish.');
      return;
    }

    setErrorMessage(null);
    const newLantern: CommunityLantern = {
      id: `l-${Date.now()}`,
      senderName: senderName.trim() || 'A Devout Pilgrim',
      origin: origin.trim() || 'Phnom Penh, Cambodia',
      wish: validation.cleaned,
      lanternStyle: selectedStyle,
      timestamp: 'Just now',
      color: lanternStyles.find((s) => s.id === selectedStyle)?.color || '#f59e0b',
    };

    setLanterns([newLantern, ...lanterns]);
    setJustReleased(newLantern);
    setWishText('');
    setSenderName('');
    setOrigin('');

    // Play resonant bell gong tone via soundscape
    soundscape.playGongTone(260);

    setTimeout(() => {
      setJustReleased(null);
    }, 8000);
  };

  return (
    <section id="flotilla" className="py-24 bg-[#080d16] border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="font-khmer text-amber-400 text-base mb-1">ពិធីបណ្តែតប្រទីប និងសំពះព្រះខែ</p>
          <div className="text-xs uppercase tracking-widest text-stone-400 font-sans mb-3">
            <span>The Sacred Night Flotilla</span>
            <span aria-hidden="true" className="mx-2">·</span>
            <span>Loy Pratip</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-4 text-balance">
            Floating Lanterns upon the Tonle Sap
          </h2>
          <p className="text-stone-300 font-light leading-relaxed">
            As twilight descends over Phnom Penh, the river transforms into a sea of living starlight. Royal barges and millions of small candlelit lanterns drift gracefully on the water, releasing sorrows and carrying prayers of gratitude to Preah Mae Kongkea.
          </p>
        </div>

        {/* Featured Night Flotilla Image Showcase */}
        <div className="relative rounded-2xl overflow-hidden aspect-[21/9] max-h-[420px] mb-12 border border-stone-800 shadow-2xl">
          <img
            src={FESTIVAL_IMAGES.loyPratip}
            alt="Loy Pratip illuminated barges glowing under the full moon in Phnom Penh"
            className="w-full h-full object-cover object-center filter brightness-[0.85]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080d16] via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-stone-700 text-xs text-amber-200">
            <Moon className="w-3.5 h-3.5 text-amber-300" />
            <span>Kadeuk Full Moon Zenith</span>
          </div>
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="font-khmer text-amber-300 text-sm block">រស្មីប្រទីបភ្លឺត្រចះត្រចង់លើផ្ទៃគង្គា</span>
              <p className="text-white font-serif text-lg md:text-xl font-medium">
                The Sacred Footprints of Buddha & Water Homage
              </p>
            </div>
            <span className="text-xs text-stone-300 max-w-sm hidden sm:block">
              Tens of thousands of handmade flower lanterns and glowing multi-story palace barges float together down the reversed river currents.
            </span>
          </div>
        </div>

        {/* Interactive Floating Ceremony Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Release Lantern Form (5 cols) */}
          <div className="lg:col-span-5 bg-[#0e1626] border border-stone-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <h3 className="text-xl font-serif font-bold text-white">
                Release a Virtual Lantern
              </h3>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed font-light mb-6">
              Write a prayer, blessing, or resolution. Your lantern will join the glowing fleet on the Tonle Sap river.
            </p>

            <form onSubmit={handleReleaseLantern} className="space-y-4">
              {/* Choose Lantern Vessel Style */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-400 mb-2">
                  Choose Sacred Vessel
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {lanternStyles.map((style) => (
                    <button
                      type="button"
                      key={style.id}
                      onClick={() => setSelectedStyle(style.id as 'lotus' | 'naga' | 'temple' | 'candle')}
                      className={`p-2.5 rounded-lg text-left transition-all border cursor-pointer ${
                        selectedStyle === style.id
                          ? 'border-amber-400 bg-amber-950/30 text-white'
                          : 'border-stone-800 bg-[#080d16] text-stone-400 hover:border-stone-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold">{style.name}</span>
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: style.color }} />
                      </div>
                      <span className="font-khmer text-[11px] block text-amber-300/80">{style.khmer}</span>
                      <span className="text-[10px] text-stone-500 block leading-tight mt-0.5">{style.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Origin inputs */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="pilgrim-name" className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                    Your Name
                  </label>
                  <input
                    id="pilgrim-name"
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g., Sovann"
                    className="w-full px-3 py-2 text-xs bg-[#080d16] border border-stone-800 rounded-lg text-white placeholder-stone-600 focus:border-amber-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="pilgrim-origin" className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                    City / Country
                  </label>
                  <input
                    id="pilgrim-origin"
                    type="text"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    placeholder="e.g., Siem Reap"
                    className="w-full px-3 py-2 text-xs bg-[#080d16] border border-stone-800 rounded-lg text-white placeholder-stone-600 focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Wish text */}
              <div>
                <label htmlFor="pilgrim-wish" className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                  Your Prayer or Wish
                </label>
                <textarea
                  id="pilgrim-wish"
                  rows={3}
                  value={wishText}
                  onChange={(e) => setWishText(e.target.value)}
                  placeholder="May our family be blessed with peace, good health, and abundant joy this Kadeuk..."
                  className="w-full px-3 py-2 text-xs bg-[#080d16] border border-stone-800 rounded-lg text-white placeholder-stone-600 focus:border-amber-400 focus:outline-none resize-none"
                  maxLength={120}
                />
                <div className="flex justify-between text-[10px] text-stone-500 mt-0.5">
                  <span>{120 - wishText.length} characters remaining</span>
                  <span>Minimum 3 characters</span>
                </div>
              </div>

              {errorMessage && (
                <p className="text-xs text-rose-400 bg-rose-950/30 p-2 rounded border border-rose-800/40">
                  {errorMessage}
                </p>
              )}

              {/* Submit Release Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-amber-400 hover:bg-amber-300 text-stone-950 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-md"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Release Lantern onto the Waters</span>
              </button>
            </form>

            {justReleased && (
              <div className="mt-4 p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/30 text-xs text-emerald-200 animate-fadeIn">
                <span className="font-semibold block mb-0.5">Gong sounded! Lantern consecrated.</span>
                Your blessing is now floating toward the Chaktomuk confluence.
              </div>
            )}
          </div>

          {/* Floating River Fleet Stream (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-serif font-bold text-white">
                  The Tonle Sap Floating Stream
                </h4>
                <span className="text-xs text-stone-400">
                  Blessings & prayers floating on the water tonight
                </span>
              </div>
              <span className="text-xs font-mono text-amber-300 tabular-nums">
                {lanterns.length} Lanterns in Fleet
              </span>
            </div>

            {/* Lantern Cards Grid */}
            <div className="space-y-3 max-h-[520px] overflow-y-auto pr-1">
              {lanterns.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-xl bg-[#0e1626] border border-stone-800 hover:border-amber-500/40 transition-colors"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-3 h-3 rounded-full shrink-0 shadow-sm shadow-amber-400"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-xs font-semibold text-white">
                        {item.senderName}
                      </span>
                      <span className="text-stone-500 text-xs">·</span>
                      <span className="text-xs text-stone-400">{item.origin}</span>
                    </div>
                    <span className="text-[11px] text-stone-500 font-mono">{item.timestamp}</span>
                  </div>

                  <p className="text-xs text-stone-200 italic font-serif leading-relaxed mb-2">
                    "{item.wish}"
                  </p>

                  <div className="flex items-center justify-between text-[10px] text-stone-500 border-t border-stone-800/60 pt-2">
                    <span className="capitalize text-amber-300/80">
                      Vessel: {item.lanternStyle} Lantern
                    </span>
                    <span className="flex items-center gap-1 text-stone-400">
                      <Heart className="w-3 h-3 text-rose-400" />
                      Blessed by Preah Mae Kongkea
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
