import { FestivalCeremony, BoatPart, HistoricalEvent, CommunityLantern, VantagePoint } from '../types/festival';

export const FESTIVAL_IMAGES = {
  hero: '/src/assets/images/bon_om_touk_hero_1792977006701.jpg',
  loyPratip: '/src/assets/images/loy_pratip_night_1792977007812.jpg',
  angkorRelief: '/src/assets/images/angkor_naval_relief_1792977008876.jpg',
  aukAmbok: '/src/assets/images/auk_ambok_offering_1792977008527.jpg',
};

export const FESTIVAL_OVERVIEW = {
  khmerTitle: 'ព្រះរាជពិធីបុណ្យអុំទូក បណ្តែតប្រទីប និងសំពះព្រះខែ អកអំបុក',
  phoneticTitle: 'Preah Reach Pithi Bon Om Touk, Bandet Pratip, Sampeas Preah Khe ning Auk Ambok',
  englishTitle: 'The Royal Water, Illuminated Flotilla, Moon Salutation, and Ambok Festival',
  dates: 'Full Moon of Kadeuk (Khmer Lunar Calendar) · 3 National Celebration Days',
  nextOccurrence: 'November 23 – 25, 2026',
  location: 'Tonle Sap & Mekong River Confluence, Sisowath Quay, Phnom Penh, Cambodia',
  coreTheme: 'Reversal of the Great Tonle Sap River & Celebration of Khmer Naval Heritage',
};

export const CEREMONIES: FestivalCeremony[] = [
  {
    id: 'boat-racing',
    khmerTitle: 'ការប្រណាំងទូកង',
    phoneticTitle: 'Kar Pronang Touk Ngor',
    englishTitle: 'The Grand Touk Ngor Dragon Boat Regattas',
    day: 'Days 1, 2, & 3',
    timeOfDay: 'Morning & Afternoon (08:00 - 17:00)',
    summary: 'Over 300 to 400 ornate long-canoes representing pagodas and provinces compete across 1,700 meters in front of the Royal Pavilion under royal patronage.',
    significance: 'Commemorates the naval military prowess of the Khmer Empire under King Jayavarman VII and King Suryavarman II, honoring soldiers who defended the waters.',
    keyRituals: [
      'Blessing of the boat prow (Kbal Touk) with incense, floral garlands, and chanted prayers',
      'Painting of the sacred eyes (Phnek Touk) so the vessel can navigate treacherous currents',
      'Pairing heats (Touk Ngor vs Touk Ngor) along the 1.7km straight sprint to the Royal Pavilion',
      'Chanted rowing cadence led by the standing drum-master and prow dancers'
    ],
    image: FESTIVAL_IMAGES.hero,
  },
  {
    id: 'loy-pratip',
    khmerTitle: 'បណ្តែតប្រទីប',
    phoneticTitle: 'Bandet Pratip (Loy Pratip)',
    englishTitle: 'The Floating Illuminated Flotillas',
    day: 'Evenings of Days 1, 2, & 3',
    timeOfDay: 'Dusk till Midnight (18:30 - 23:00)',
    summary: 'Massive glowing illuminated barges shaped like Angkor Wat temples, golden nagas, and national emblems cruise majestically along the Tonle Sap river.',
    significance: 'Paying homage to Preah Mae Kongkea (Goddess of Water and Rivers) and the sacred footprints of the Buddha on the riverbed, offering gratitude for fertile waters.',
    keyRituals: [
      'Procession of grand institutional barges illuminated with tens of thousands of golden and emerald lights',
      'Citizens floating small handmade banana-trunk and lotus candle lanterns into the current with prayers',
      'Nightly firework spectacles cascading reflections across the Tonle Sap and Mekong confluence',
      'Soundscapes of traditional Pinpeat orchestras and riverside cheering crowds'
    ],
    image: FESTIVAL_IMAGES.loyPratip,
  },
  {
    id: 'sampeas-preah-khe',
    khmerTitle: 'សំពះព្រះខែ & អកអំបុក',
    phoneticTitle: 'Sampeas Preah Khe & Auk Ambok',
    englishTitle: 'Salutation to the Full Moon & The Ambok Feast',
    day: 'Night of Day 2 (Full Moon)',
    timeOfDay: 'Midnight (23:00 - 01:00)',
    summary: 'Cambodians assemble at pagodas and courtyards to offer fragrant bananas, young coconuts, and freshly pounded green rice (Ambok) to the glowing full moon.',
    significance: 'Recalls the Buddhist Jataka tale of the selfless Rabbit (Sasa Pandita) who offered his life for others, whose silhouette is immortalized on the surface of the moon.',
    keyRituals: [
      'Roasting and pestle-pounding of early-harvest sweet green paddy grains into delicate Ambok flakes',
      'Midnight salutation as the full moon reaches its celestial zenith over Cambodia',
      'The affectionate Auk Ambok ritual: elders gently feed mouthfuls of Ambok and banana to youngsters while patting their bellies to wish health and longevity',
      'Lighting of scented incense and burning beeswax candles in brass candelabras'
    ],
    image: FESTIVAL_IMAGES.aukAmbok,
  },
];

export const BOAT_PARTS: BoatPart[] = [
  {
    id: 'kbal',
    khmerName: 'ក្បាលទូក',
    phoneticName: 'Kbal Touk',
    englishName: 'The Carved Dragon Prow',
    role: 'Sacred figurehead',
    culturalNote: 'Sculpted from single sacred hardwood timbers into mythical Nagas or Garudas. Believed to house the guardian female spirit (Preah Neang Kmao or boat deity).',
  },
  {
    id: 'phnek',
    khmerName: 'ភ្នែកទូក',
    phoneticName: 'Phnek Touk',
    englishName: 'The Sacred Painted Eyes',
    role: 'Spiritual navigation',
    culturalNote: 'Ceremonially painted and blessed before launch. Rowers believe without consecrated eyes, the boat cannot "see" dangerous river whirlpools or sandbars.',
  },
  {
    id: 'chamlong',
    khmerName: 'នាយចង្កូត',
    phoneticName: 'Neak Changkout',
    englishName: 'The Master Helmsman',
    role: 'Steersman at the stern',
    culturalNote: 'Stands at the elevated curved stern holding a massive long oar (Changkout) to maintain a razor-straight vector against river currents and crosswinds.',
  },
  {
    id: 'vey-skor',
    khmerName: 'អ្នកវាយស្គរ',
    phoneticName: 'Neak Vey Skor',
    englishName: 'The Cadence Drum Master',
    role: 'Rhythm and morale caller',
    culturalNote: 'Perched in the center or bow, striking the double-headed drum and blowing whistles. Dictates stroke frequency from 40 to 65 powerful strokes per minute.',
  },
  {
    id: 'rowers',
    khmerName: 'កម្លាំងអុំ',
    phoneticName: 'Komlang Om',
    englishName: 'The Synchronized Crew',
    role: '40 to 80 elite rowers',
    culturalNote: 'Men and women monks, farmers, and athletes from local pagodas who train together for months in village canals before transporting the vessel to Phnom Penh.',
  },
];

export const HISTORICAL_CHRONOLOGY: HistoricalEvent[] = [
  {
    year: '1177 – 1181 CE',
    khmerEra: 'Angkorian Golden Age',
    title: 'The Great Naval Fleet of King Jayavarman VII',
    description: 'Following foreign invasions, King Jayavarman VII organized an invincible riverine fleet. Utilizing agile longboats carved with dragon prows, Khmer naval forces triumphed along the Tonle Sap and Mekong rivers.',
    archaeologicalProof: 'Immortalized on the stone walls of the Bayon and Banteay Chhmar temples, where intricate bas-reliefs reveal synchronized rowers, naval commanders, and warrior standards.',
  },
  {
    year: '1866 CE',
    khmerEra: 'Royal Capital in Phnom Penh',
    title: 'Codification of the Royal Water Regatta',
    description: 'When King Norodom relocated the royal capital to Phnom Penh at the Four Rivers confluence (Chaktomuk), the festival was formalized as a premier state ceremony held directly facing the Royal Palace.',
    archaeologicalProof: 'Royal chronicles document the construction of the Moonlight Pavilion (Preah Tineang Chan Chhaya) for the King to review the fleet.',
  },
  {
    year: 'Present Day',
    khmerEra: 'Living Cultural Heritage',
    title: 'Nationwide Unity and Global Spectacle',
    description: 'Today, Bon Om Touk brings over 3 million Cambodians and international travelers to the riverbank for three joyous days of community, sportsmanship, and ecological thanksgiving.',
    archaeologicalProof: 'Recognized as one of Southeast Asia\'s largest water-based sporting spectacles, drawing hundreds of competitive village teams.',
  },
];

export const SAMPLE_LANTERNS: CommunityLantern[] = [
  {
    id: 'c1',
    senderName: 'Sophea & Kesor',
    origin: 'Battambang, Cambodia',
    wish: 'May the sacred waters bring peace, bountiful rice harvests, and joy to all Cambodian families.',
    lanternStyle: 'lotus',
    timestamp: 'Just now',
    color: '#f59e0b',
  },
  {
    id: 'c2',
    senderName: 'Chhay Meng',
    origin: 'Siem Reap, Cambodia',
    wish: 'Honoring our ancestors and the brave boatmen of Angkor. Health and long life to our elders.',
    lanternStyle: 'naga',
    timestamp: '2m ago',
    color: '#10b981',
  },
  {
    id: 'c3',
    senderName: 'Dara & Leah',
    origin: 'Phnom Penh, Cambodia',
    wish: 'Wishing for wisdom, clean rivers, and harmony across our beautiful Kingdom of Wonder.',
    lanternStyle: 'temple',
    timestamp: '5m ago',
    color: '#6366f1',
  },
  {
    id: 'c4',
    senderName: 'Sokha Rith',
    origin: 'Kampong Cham, Cambodia',
    wish: 'Gratitude to Preah Mae Kongkea for the water that sustains our children and our crops.',
    lanternStyle: 'candle',
    timestamp: '12m ago',
    color: '#ec4899',
  },
];

export const VANTAGE_POINTS: VantagePoint[] = [
  {
    name: 'Royal Palace Riverside (Preah Sisowath Quay)',
    khmerName: 'មាត់ទន្លេមុខព្រះបរមរាជវាំង',
    location: 'In front of Moonlight Pavilion (Chan Chhaya)',
    bestFor: 'Finish line sprints, VIP viewing, and Royal Opening & Closing ceremonies',
    tips: 'Arrive before 08:30 AM to secure a front railing view. Evening view of illuminated flotillas is unmatched.',
  },
  {
    name: 'Chroy Changvar Peninsula Promenade',
    khmerName: 'ជ្រោយចង្វារ',
    location: 'Across the Japanese Bridge / OCIC Riverside',
    bestFor: 'Sweeping panoramic skyline shots with the Royal Palace, river expanse, and sunset',
    tips: 'Breezy and slightly less crowded than Sisowath Quay; ideal for photography and evening fireworks reflections.',
  },
  {
    name: 'Chaktomuk Confluence Point',
    khmerName: 'ប្រសព្វទន្លេបួនមុខ (ចតុមុខ)',
    location: 'Near Chaktomuk Theatre & Royal Pavilion',
    bestFor: 'Viewing the turning circle of 30-meter boats and the intersection of the Mekong and Tonle Sap',
    tips: 'Fabulous spot to hear the rowing drums echoing across the open junction of the waters.',
  },
  {
    name: 'Wat Phnom Historical Park',
    khmerName: 'រមណីយដ្ឋានវត្តភ្នំ',
    location: 'Central Phnom Penh',
    bestFor: 'Concert stages, open-air classical Khmer theatre, traditional dance, and festival markets',
    tips: 'Perfect afternoon retreat between race heats to sample fresh Ambok, palm sugar cakes, and sugarcane juice.',
  },
];

export const FESTIVAL_CUISINE = [
  {
    name: 'Ambok (Pounded Young Rice)',
    khmer: 'អំបុក',
    description: 'Crisp green paddy grains harvested at peak sweetness, dry-roasted in clay pots and hand-pounded in wooden mortars.',
    pairing: 'Eaten mixed with ripe bananas, freshly grated coconut meat, and fresh coconut water.',
  },
  {
    name: 'Num Banh Chok',
    khmer: 'នំបញ្ចុក',
    description: 'Fresh artisanal fermented rice noodles bathed in a fragrant yellow river fish curry broth scented with kaffir lime, turmeric, and prahok.',
    pairing: 'Garnished with water lily stems, shredded banana blossom, and wild seasonal herbs.',
  },
  {
    name: 'Roasted River Fish with Tamarind Dip',
    khmer: 'ត្រីអាំងទឹកត្រីអំពិលទុំ',
    description: 'Plump freshwater fish caught during the Tonle Sap flow reversal, grilled over red charcoal with a tangy ripe tamarind chili reduction.',
    pairing: 'Wrapped in crisp lettuce leaves with fresh mint and green cucumbers.',
  },
  {
    name: 'Fresh Sugarcane & Young Coconut',
    khmer: 'ទឹកអំពៅ & ទឹកដូងខ្ចី',
    description: 'Cold freshly pressed sugarcane juice infused with aromatic calamansi citrus and sweet young coconut straight from Mekong orchards.',
    pairing: 'The ultimate refreshing elixir while cheering in the tropical afternoon sun.',
  },
];
