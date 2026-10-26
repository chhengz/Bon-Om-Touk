export interface FestivalCeremony {
  id: string;
  khmerTitle: string;
  phoneticTitle: string;
  englishTitle: string;
  day: string;
  timeOfDay: string;
  summary: string;
  significance: string;
  keyRituals: string[];
  image: string;
}

export interface BoatPart {
  id: string;
  khmerName: string;
  phoneticName: string;
  englishName: string;
  role: string;
  culturalNote: string;
}

export interface CommunityLantern {
  id: string;
  senderName: string;
  origin: string;
  wish: string;
  lanternStyle: 'lotus' | 'naga' | 'temple' | 'candle';
  timestamp: string;
  color: string;
}

export interface HistoricalEvent {
  year: string;
  khmerEra: string;
  title: string;
  description: string;
  archaeologicalProof: string;
}

export interface VantagePoint {
  name: string;
  khmerName: string;
  location: string;
  bestFor: string;
  tips: string;
}
