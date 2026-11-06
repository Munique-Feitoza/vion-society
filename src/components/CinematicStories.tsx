"use client";

import { useState } from "react";
import { Play, X, Film, Sparkles } from "lucide-react";

interface Story {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  category: string;
  coverImg: string;
  videoUrl: string; // Embed or preview
  description: string;
}

const STORIES: Story[] = [
  {
    id: "film-highlands",
    title: "The Mist Kingdoms of Ceylon",
    subtitle: "Hatton & Castlereagh Valleys",
    duration: "2:40 Film",
    category: "Highlands & Tea",
    coverImg: "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1600&auto=format&fit=crop",
    videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1", // clean placeholder or direct HTML5 video
    description: "Dawn breaking over emerald tea terraces 1,200 meters above sea level. Relais & Châteaux planter life, mountain streams, and the rhythmic sound of single-origin tea harvests.",
  },
  {
    id: "film-leopard",
    title: "Apex of Ruhuna: The Leopard Coast",
    subtitle: "Yala National Park & Dunes",
    duration: "3:15 Film",
    category: "Wild Safaris",
    coverImg: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=1600&auto=format&fit=crop",
    videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1",
    description: "Tracking the world's densest wild leopard population through ancient dry-zone forests, granite monoliths, and untamed Indian Ocean dunes.",
  },
  {
    id: "film-ocean",
    title: "Salt, Stone & Solitude",
    subtitle: "Galle Fort & Secluded Bays",
    duration: "2:10 Film",
    category: "Ocean Sanctuaries",
    coverImg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
    videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1",
    description: "17th-century rampart walks at dusk, private ocean catamarans tracking blue whales, and barefoot sunset dinners on private golden sands.",
  },
];

export default function CinematicStories() {
  const [activeStory, setActiveStory] = useState<Story | null>(null);

  return (
    <section id="cinema" className="py-24 px-6 lg:px-12 bg-[#090C0F] border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block mb-3 flex items-center gap-2">
              <Film className="w-3.5 h-3.5" /> Visual Chronicles & Films
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-white font-light">
              The Cinematic Ceylon Experience
            </h2>
          </div>
          <p className="text-[#B4B0A5] max-w-md text-sm mt-4 md:mt-0 font-light leading-relaxed">
            Slow luxury experienced through high-definition visual storytelling. Every expedition is documented with cinematic intimacy.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {STORIES.map((story) => (
            <div
              key={story.id}
              onClick={() => setActiveStory(story)}
              className="group relative h-[440px] rounded-3xl overflow-hidden border border-white/10 cursor-pointer transition-all duration-500 hover:border-[#C5A880]/50 hover:shadow-2xl hover:shadow-[#C5A880]/10 flex flex-col justify-end p-8"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url(${story.coverImg})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0F12] via-[#0C0F12]/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />

              {/* Play Badge */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#C5A880] group-hover:bg-[#C5A880] group-hover:text-[#0C0F12] group-hover:scale-110 transition-all duration-300 shadow-xl">
                <Play className="w-4 h-4 ml-0.5 fill-current" />
              </div>

              {/* Tag */}
              <div className="relative z-10 mb-2">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#C5A880] font-bold bg-black/60 px-3 py-1 rounded-full border border-[#C5A880]/30">
                  {story.category} • {story.duration}
                </span>
              </div>

              {/* Title & Description */}
              <div className="relative z-10">
                <h3 className="font-serif text-2xl text-white font-normal mb-1.5 group-hover:text-[#C5A880] transition-colors">
                  {story.title}
                </h3>
                <p className="text-xs text-[#B4B0A5]/80 font-light line-clamp-2 leading-relaxed">
                  {story.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Video Modal */}
      {activeStory && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8">
          <div className="relative w-full max-w-4xl bg-[#12161D] rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#C5A880] font-bold">
                  {activeStory.category} • {activeStory.duration}
                </span>
                <h4 className="font-serif text-xl sm:text-2xl text-white mt-0.5">
                  {activeStory.title}
                </h4>
              </div>
              <button
                onClick={() => setActiveStory(null)}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Container */}
            <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activeStory.coverImg}
                alt={activeStory.title}
                className="w-full h-full object-cover filter brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                <p className="text-sm text-[#F7F4EE] max-w-xl font-light leading-relaxed mb-4">
                  {activeStory.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-[#C5A880]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Cinematic 4K master asset will be streamed via Mux / Vercel Edge in production.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

