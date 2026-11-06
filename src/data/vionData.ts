export interface DayPlan {
  day: number;
  title: string;
  desc: string;
}

export interface Journey {
  id: string;
  title: string;
  tag: string;
  tier: 'HEAVEN' | 'SIGNATURE' | 'CURATED';
  duration: string;
  basePriceUSD: number;
  coverImg: string;
  route: string;
  pace: string;
  style: string;
  summary: string;
  days: DayPlan[];
}

export interface Stay {
  id: string;
  name: string;
  location: string;
  category: 'heritage' | 'glamping' | 'boutique' | 'wellness';
  pricePerNightUSD: number;
  image: string;
  highlights: string[];
  description: string;
}

export interface MapNode {
  name: string;
  region: string;
  tag: string;
  elevation: string;
  weather: string;
  driveFromAirport: string;
  description: string;
  highlights: string[];
  x: number;
  y: number;
}

export interface RoutePreset {
  id: string;
  name: string;
  tier: 'HEAVEN' | 'SIGNATURE' | 'CURATED';
  nodes: string[];
  description: string;
  travelStyle: string;
  duration: string;
  estDriveTotal: string;
}

export const CURRENCY_RATES: Record<string, { rate: number; symbol: string; prefix: boolean }> = {
  USD: { rate: 1, symbol: '$', prefix: true },
  EUR: { rate: 0.92, symbol: '€', prefix: false },
  GBP: { rate: 0.79, symbol: '£', prefix: true },
  AUD: { rate: 1.54, symbol: 'A$', prefix: true },
  LKR: { rate: 305, symbol: 'LKR ', prefix: true },
};

export const MAP_NODES: Record<string, MapNode> = {
  colombo: {
    name: 'Colombo & Negombo',
    region: 'Western Province',
    tag: 'Arrival & Colonial Heritage',
    elevation: '12m above sea',
    weather: 'Tropical coastal • 29°C',
    driveFromAirport: '25 mins via Expressway',
    description: 'The historic gateway to Ceylon. Rest amidst 18th-century Dutch merchant manors and tranquil coastal coconut groves before journeying inland.',
    highlights: ['The Wallawwa Manor', 'Private Cinnamon Island Boat', 'Old Colombo Dutch Hospital Dining'],
    x: 105, y: 310
  },
  sigiriya: {
    name: 'Sigiriya & Cultural Triangle',
    region: 'Central North',
    tag: '5th-Century Sky Citadel',
    elevation: '190m above sea',
    weather: 'Dry sunny plains • 31°C',
    driveFromAirport: '3.5 hrs by private SUV (or 35 mins by Seaplane)',
    description: 'Ancient monolithic fortress rising 200m from emerald jungle. Monastic cave temples of Dambulla and giant Asian elephant gatherings in Minneriya.',
    highlights: ['Dawn VIP ascent of Lion Rock', 'Dambulla Golden Caves', 'Wild Elephant Gathering at Minneriya'],
    x: 175, y: 190
  },
  kandy: {
    name: 'Kandy Royal Kingdom',
    region: 'Central Highlands',
    tag: 'Sacred Relic & Tea Foothills',
    elevation: '500m above sea',
    weather: 'Temperate hillside • 24°C',
    driveFromAirport: '2.5 hrs via Central Highway',
    description: 'The last royal bastion of Sri Lankan kings, nestled around a tranquil lake and surrounded by mist-wrapped mountain spice sanctuaries.',
    highlights: ['Temple of the Sacred Tooth Relic', 'Peradeniya Royal Botanic Gardens', 'Private Kandyan Drumming Masterclass'],
    x: 170, y: 265
  },
  hatton: {
    name: 'Hatton & Ceylon Tea Trails',
    region: 'Golden Tea Valleys',
    tag: 'Colonial Planters & Castlereagh',
    elevation: '1,250m above sea',
    weather: 'Cool mountain mist • 18°C',
    driveFromAirport: '4 hrs by road or scenic train',
    description: 'Endless emerald valleys of single-origin Ceylon tea. Reside in restored British colonial planter bungalows with private butler service.',
    highlights: ['Castlereagh Lake Kayaking', 'Private Sommelier Tea Masterclass', 'Adam\'s Peak Sacred Vista'],
    x: 175, y: 320
  },
  ella: {
    name: 'Ella & Cloud Peaks',
    region: 'Uva Province',
    tag: 'Scenic Railway & Waterfalls',
    elevation: '1,041m above sea',
    weather: 'Cool mountain air • 21°C',
    driveFromAirport: '5 hrs scenic drive',
    description: 'Dramatic mountain pass, the iconic Nine Arch viaduct bridge, secret ravine waterfalls, and dawn treks above the clouds at Little Adam\'s Peak.',
    highlights: ['Observation-Car First Class Train', 'Nine Arch Bridge at sunrise', 'Private Waterfall Natural Baths'],
    x: 235, y: 325
  },
  yala: {
    name: 'Yala National Park',
    region: 'Wild Southern Coast',
    tag: 'Untamed Leopard Wilderness',
    elevation: '30m above sea',
    weather: 'Dry coastal savannah • 30°C',
    driveFromAirport: '4.5 hrs via Southern Expressway',
    description: 'The highest leopard density on Earth. Pristine sandy beaches colliding with thorny scrub forests, sloth bears, and herds of wild Asian elephants.',
    highlights: ['Private 4x4 Leopard Tracking', 'Luxury Ocean Cocoon Glamping', 'Bundala Flamingo Wetlands'],
    x: 265, y: 395
  },
  galle: {
    name: 'UNESCO Galle Fort',
    region: 'Southern Province',
    tag: '17th-Century Ramparts & Jewelers',
    elevation: '10m above sea',
    weather: 'Ocean breeze • 28°C',
    driveFromAirport: '2 hrs via Southern Expressway',
    description: 'Living 17th-century Dutch colonial fortress. Cobblestone avenues lined with artisanal gem merchants, boutique villas, and rampart sunset cocktails.',
    highlights: ['Private Fort Ramparts Architecture Walk', 'Boutique Antique Shopping', 'Sunset Cocktails on the Bastions'],
    x: 130, y: 440
  },
  mirissa: {
    name: 'Weligama & Mirissa Bay',
    region: 'Indian Ocean Coast',
    tag: 'Blue Whales & Barefoot Surf',
    elevation: '5m above sea',
    weather: 'Sunny coastal paradise • 29°C',
    driveFromAirport: '2 hrs 15 mins via Southern Expressway',
    description: 'Private catamaran expeditions tracking the majestic blue whale in deep Indian Ocean waters, paired with secluded luxury surf beaches.',
    highlights: ['Private Chartered Whale Catamaran', 'Bespoke Private Surf Coaching', 'Oceanfront Lobster Clay-Pot Feast'],
    x: 165, y: 455
  }
};

export const ROUTE_PRESETS: RoutePreset[] = [
  {
    id: 'grand-circuit',
    name: 'The Grand Ceylon Circuit (12 Days)',
    tier: 'SIGNATURE',
    nodes: ['colombo', 'sigiriya', 'kandy', 'hatton', 'yala', 'galle'],
    description: 'The definitive royal journey linking the Cultural Triangle citadel, misty tea estates, wild leopard safari, and colonial coastal ramparts.',
    travelStyle: 'Private Luxury SUV + Scenic Mountain Observation Train',
    duration: '12 Days / 11 Nights',
    estDriveTotal: 'Approx. 16 hours total transit over 12 days'
  },
  {
    id: 'tea-and-leopards',
    name: 'Highlands Mist to Wild Leopard Coast (9 Days)',
    tier: 'HEAVEN',
    nodes: ['colombo', 'hatton', 'ella', 'yala'],
    description: 'Designed for nature and slow luxury connoisseurs. Relais & Châteaux tea bungalows followed by private coastal cocoon safari suites.',
    travelStyle: 'Chauffeured SUV + Seaplane Transfer Option',
    duration: '9 Days / 8 Nights',
    estDriveTotal: 'Approx. 11 hours total transit'
  },
  {
    id: 'barefoot-coastal',
    name: 'Southern Haven & Ocean Sanctuaries (7 Days)',
    tier: 'CURATED',
    nodes: ['colombo', 'galle', 'mirissa'],
    description: 'A relaxed, low-transit itinerary focusing on Dutch colonial architecture, private whale catamarans, and cliffside ocean villas.',
    travelStyle: 'Expressway Private Chauffeur SUV',
    duration: '7 Days / 6 Nights',
    estDriveTotal: 'Approx. 4 hours total transit'
  }
];

export const JOURNEYS: Journey[] = [
  {
    id: 'tea-trail',
    title: 'The Ceylon Tea Trail & Cloud Forest Peaks',
    tag: 'Mist & Highlands',
    tier: 'HEAVEN',
    duration: '10 Days / 9 Nights',
    basePriceUSD: 4800,
    coverImg: 'https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1200&auto=format&fit=crop',
    route: 'Colombo → Hatton → Nuwara Eliya → Ella',
    pace: 'Relaxed & Contemplative',
    style: 'Highlands & Heritage',
    summary: 'Colonial tea planter bungalows, private scenic observation-car train through mist waterfalls, sunrise hike at Little Adam\'s Peak, and bespoke tea tasting with master botanists.',
    days: [
      { day: 1, title: 'Arrival in Colombo & The Wallawwa Oasis', desc: 'VIP meet-and-greet at Bandaranaike Airport. Private chauffeur transfer to a restored 18th-century manor house set amidst coconut groves. Evening welcome cocktails and curated orientation.' },
      { day: 2, title: 'Ascent to the Golden Valley of Ceylon Tea', desc: 'Scenic morning drive into Hatton. Check into your private colonial tea planter bungalow overlooking Castlereagh Lake. High tea on the lawn and private fireside dinner.' },
      { day: 3, title: 'The Art of Single-Origin Ceylon Tea', desc: 'Private guided walk through emerald tea terraces with resident tea sommelier. Exclusive tasting session of rare white and silver tip teas.' },
      { day: 4, title: 'Observation-Car Scenic Train to Ella', desc: 'Board Sri Lanka’s legendary hill-country train in a reserved private first-class cabin. Marvel at viaduct bridges, cloud waterfalls, and deep jungle valleys.' },
      { day: 5, title: 'Sunrise over Little Adam’s Peak & Nine Arch Bridge', desc: 'Private dawn excursion before public crowds arrive. Gourmet champagne breakfast overlooking the Nine Arch Bridge as the morning steam train crosses.' },
      { day: 6, title: 'Secret Waterfalls & Forest Immersion', desc: 'Exclusive natural swimming pools near Ravana Falls, accompanied by a private naturalist. Afternoon herbal Ayurvedic spa therapy.' },
      { day: 7, title: 'Descent to the Southern Plains & Udawalawe', desc: 'Private SUV journey through dramatic climate shifts from cool mist to dry scrub forests. Sunset elephant observation.' },
      { day: 8, title: 'Organic Farm Gastronomy & Village Immersion', desc: 'Hands-on culinary masterclass with traditional clay-pot hearth cooking using freshly harvested organic Ceylon spices.' },
      { day: 9, title: 'Leisure in the Valleys & Private Stargazing', desc: 'Uninterrupted relaxation in your infinity plunge pool with panoramic mountain views. Stargazing session accompanied by rare local single malts.' },
      { day: 10, title: 'Departure or Coastal Extension', desc: 'Chauffeur transfer back to Colombo International Airport or seamless transition to the Southern Coast villas.' }
    ]
  },
  {
    id: 'cultural-leopard',
    title: 'Royal Triangle to the Leopard Coast',
    tag: 'Heritage & Wild Safari',
    tier: 'SIGNATURE',
    duration: '12 Days / 11 Nights',
    basePriceUSD: 5600,
    coverImg: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=1200&auto=format&fit=crop',
    route: 'Sigiriya → Dambulla → Kandy → Yala',
    pace: 'Active & Adventurous',
    style: 'Wildlife & Culture',
    summary: 'Exclusive dawn ascent of Sigiriya Rock Fortress, the royal Temple of the Sacred Tooth Relic, elephant gatherings at Minneriya, and luxury safari glamping in leopard territory.',
    days: [
      { day: 1, title: 'Touchdown in Colombo & Coastal Rest', desc: 'Arrival VIP escort. Private SUV transfer to your ocean-facing boutique retreat for leisurely acclimatization.' },
      { day: 2, title: 'Journey to the Ancient Citadel of Sigiriya', desc: 'Drive into the Cultural Triangle. Check into an architecturally stunning water-garden lodge with views of the monumental fortress.' },
      { day: 3, title: 'Sunrise Ascent of Sigiriya Lion Rock', desc: 'Special VIP early access to climb the 5th-century sky palace before heat and crowds. Explore King Kashyapa’s water gardens and ancient frescoes.' },
      { day: 4, title: 'Cave Temples of Dambulla & Minneriya Gathering', desc: 'Gold-leaf Buddha caves of Dambulla followed by an open-top 4x4 private safari tracking the wild Asian elephant gathering at Minneriya reservoir.' },
      { day: 5, title: 'Royal Capital of Kandy & Sacred Relics', desc: 'Ascend to the last royal kingdom of Kandy. Private evening blessing ceremony at the Temple of the Sacred Tooth Relic.' },
      { day: 6, title: 'Royal Botanical Gardens & Spice Sanctuary', desc: 'Walk among giant Javan fig trees and orchid houses in Peradeniya with a veteran horticulturist. Curated organic spice sensory tour.' },
      { day: 7, title: 'Descent to Yala National Park Leopard Heartland', desc: 'Journey to Sri Lanka\'s wild south. Arrive at your luxury cocoon tented suite nestled between the jungle canopy and the roaring Indian Ocean.' },
      { day: 8, title: 'Dawn Leopard & Sloth Bear Tracking', desc: 'Private custom 4x4 game drive with VION\'s senior wildlife tracker. Yala boasts the highest leopard concentration on earth.' },
      { day: 9, title: 'Bundala Wetland Bird Sanctuary & Sunset Dune Cocktails', desc: 'Explore coastal lagoons hosting thousands of greater flamingos and migratory waterfowl. Sunset champagne on secluded sand dunes.' },
      { day: 10, title: 'Second Deep-Wilderness Safari in Yala Block 5', desc: 'Venture into the less-traveled northern sectors of Yala for elusive sloth bears, mugger crocodiles, and ancient rock monasteries.' },
      { day: 11, title: 'Rest & Open-Air Boma Dining', desc: 'Unwind at the resort with holistic spa treatments. Evening traditional open-air bonfire dinner under the southern constellations.' },
      { day: 12, title: 'Scenic Transfer to Airport or Galle Extension', desc: 'Private transfer along the expressway to Colombo or continue toward the colonial coastal ramparts of Galle.' }
    ]
  },
  {
    id: 'southern-haven',
    title: 'Southern Coastal Haven & Colonial Galle',
    tag: 'Barefoot Luxury & Ocean',
    tier: 'CURATED',
    duration: '8 Days / 7 Nights',
    basePriceUSD: 3900,
    coverImg: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    route: 'Galle Fort → Weligama → Mirissa → Tangalle',
    pace: 'Slow Luxury & Barefoot',
    style: 'Coastal & Wellness',
    summary: '17th-century Dutch colonial boutique suites inside Galle Fort, private catamaran blue whale expedition, secluded cliffside infinity pools, and world-class private surf coaching.',
    days: [
      { day: 1, title: 'Express Highway Arrival to Historic Galle Fort', desc: 'Direct luxury transfer to UNESCO-listed Galle Fort. Check into an iconic 300-year-old Dutch merchant mansion adorned with antique jackwood.' },
      { day: 2, title: 'Architecture Walk with Fort Historian', desc: 'Private guided morning stroll along the fortress ramparts, visiting colonial gem vaults, artisanal perfumeries, and historic lighthouses.' },
      { day: 3, title: 'Private Catamaran Blue Whale Expedition in Mirissa', desc: 'Board a private chartered 40-foot catamaran at sunrise with marine biologists to observe blue whales and spinner dolphins in quiet dignity.' },
      { day: 4, title: 'Barefoot Luxury at Tangalle Secluded Coves', desc: 'Check into a cliffside villa overlooking the azure Indian Ocean. Private beach butler service and sea turtle nesting observation at night.' },
      { day: 5, title: 'Ayurvedic Rejuvenation & Sound Bath Meditation', desc: 'Comprehensive consultation with resident Ayurvedic physician, herbal oil shirodhara therapy, and Tibetan sound bowl session at sunset.' },
      { day: 6, title: 'Private Surf Guiding & Weligama Bay Discovery', desc: 'Personal surf coaching tailored to your experience level on gentle rolling ocean breaks, followed by fresh king coconut refreshment.' },
      { day: 7, title: 'Lagoon Kayaking & Private Chef Seafood Feast', desc: 'Paddle through serene mangrove waterways of Koggala Lake. Farewell seven-course fresh catch dinner right on the sand.' },
      { day: 8, title: 'Homeward Journey or Extension', desc: 'Chauffeur transfer directly to Colombo Airport via the Southern Expressway (2 hours).' }
    ]
  }
];

export const STAYS: Stay[] = [
  {
    id: 'stay-tea-trails',
    name: 'Ceylon Tea Trails',
    location: 'Hatton, Central Highlands',
    category: 'heritage',
    pricePerNightUSD: 850,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
    highlights: ['Relais & Châteaux', 'Colonial Tea Bungalows', 'Private Butler', 'Castlereagh Lake Views'],
    description: 'The world\'s first tea bungalow resort. Five restored colonial houses connected by walking trails through scenic tea slopes at an altitude of 1,250 meters.'
  },
  {
    id: 'stay-wild-coast',
    name: 'Wild Coast Tented Lodge',
    location: 'Yala National Park',
    category: 'glamping',
    pricePerNightUSD: 1100,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop',
    highlights: ['Luxury Cocoon Suites', 'Leopard Wilderness', 'Jungle Spa', 'Oceanfront Dining'],
    description: 'Adjacent to Yala National Park, where the jungle meets the rugged coast. Stunning fabric-arched architecture that mirrors the surrounding boulders.'
  },
  {
    id: 'stay-amangalla',
    name: 'Amangalla Heritage Suite',
    location: 'UNESCO Galle Fort',
    category: 'boutique',
    pricePerNightUSD: 950,
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop',
    highlights: ['Colonial Splendor', 'Aman Signature Service', 'Historic Baths & Spa', 'Verandah Dining'],
    description: 'An iconic 300-year-old landmark inside the ramparts of Galle Fort. Antique four-poster beds, polished jackwood floorboards, and unmatched Aman hospitality.'
  },
  {
    id: 'stay-santani',
    name: 'Santani Wellness Sanctuary',
    location: 'Kandy Mountains',
    category: 'wellness',
    pricePerNightUSD: 720,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop',
    highlights: ['Tri-Level Glass Architecture', 'Personalized Ayurveda', 'Thermal Salt Pools', 'Zero Noise Pollution'],
    description: 'Sri Lanka’s premier sustainable wellness sanctuary set in 48 acres of pristine mountain forest. World-class restorative architecture and gourmet Ayurvedic dining.'
  }
];

