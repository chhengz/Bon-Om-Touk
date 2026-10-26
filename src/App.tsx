/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CeremoniesSection } from './components/CeremoniesSection';
import { HydrologySimulator } from './components/HydrologySimulator';
import { BoatAnatomySimulator } from './components/BoatAnatomySimulator';
import { HistoricalArchive } from './components/HistoricalArchive';
import { LoyPratipCeremony } from './components/LoyPratipCeremony';
import { AmbokCeremony } from './components/AmbokCeremony';
import { VisitorGuide } from './components/VisitorGuide';
import { Footer } from './components/Footer';
import { soundscape } from './utils/audioSynthesizer';

export default function App() {
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  const handleToggleAudio = () => {
    if (isPlayingAudio) {
      soundscape.stopAmbiance();
      setIsPlayingAudio(false);
    } else {
      soundscape.startAmbiance(52);
      setIsPlayingAudio(true);
    }
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    return () => {
      soundscape.stopAmbiance();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#080d16] text-[#ede7de] flex flex-col font-sans selection:bg-amber-500 selection:text-stone-950">
      <Header
        isPlayingAudio={isPlayingAudio}
        onToggleAudio={handleToggleAudio}
        onNavigate={handleNavigate}
      />

      <main className="flex-1">
        <HeroSection onNavigate={handleNavigate} />
        <CeremoniesSection />
        <HydrologySimulator />
        <BoatAnatomySimulator />
        <HistoricalArchive />
        <LoyPratipCeremony />
        <AmbokCeremony />
        <VisitorGuide />
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
