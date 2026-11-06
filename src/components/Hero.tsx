"use client";

import { ArrowRight, Compass, Shield, Award } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden bg-radial from-[#1A222C] to-[#0C0F12]">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center scale-105 opacity-40 filter saturate-110"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=2400&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0C0F12]/30 via-[#0C0F12]/80 to-[#0C0F12]" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center py-20">
        
        <div className="inline-flex items-center space-x-2 border border-[#C5A880]/30 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full mb-6 shadow-lg">
          <span className="text-[10px] tracking-[0.25em] text-[#C5A880] uppercase font-semibold">
            Private & Bespoke Expeditions in Sri Lanka
          </span>
        </div>

        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white leading-[1.05] tracking-tight mb-6">
          The Art of Slow Luxury <br />
          <span className="italic font-normal gold-shimmer">in Ceylon.</span>
        </h1>

        <p className="text-base sm:text-lg text-[#B4B0A5] max-w-2xl mx-auto font-light leading-relaxed mb-10">
          Private expeditions through misty tea kingdoms, untamed leopard sanctuaries, and secluded Indian Ocean retreats. Crafted with intimate precision.
        </p>

        {/* Fast Travel Selector Widget */}
        <div className="glass-card p-4 sm:p-5 rounded-2xl max-w-3xl mx-auto shadow-2xl border border-white/10 text-left mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-[#B4B0A5]/70 mb-1 font-medium">Travel Style</label>
              <select className="w-full bg-black/60 border border-white/15 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-[#C5A880]">
                <option value="Heritage & Tea Estates">Heritage & Tea Estates</option>
                <option value="Wild Safari & Ocean Sanctuary">Wild Safari & Ocean Sanctuary</option>
                <option value="Slow Wellness & Ayurveda">Slow Wellness & Ayurveda</option>
                <option value="Private Villa Buyout">Private Villa Buyout</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-[#B4B0A5]/70 mb-1 font-medium">Preferred Season</label>
              <select className="w-full bg-black/60 border border-white/15 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-[#C5A880]">
                <option value="Winter Escape (Dec – Apr)">Winter Escape (Dec – Apr)</option>
                <option value="Summer Coast & Surf (May – Sep)">Summer Coast & Surf (May – Sep)</option>
                <option value="Tea Blossom Season (Oct – Nov)">Tea Blossom Season (Oct – Nov)</option>
              </select>
            </div>
            <div className="flex items-end">
              <button
                onClick={() => scrollTo("signature")}
                className="w-full bg-[#C5A880] hover:bg-[#D8BC95] text-[#0C0F12] text-xs font-semibold py-2.5 rounded-xl shadow-md transition-all flex items-center justify-center space-x-1 cursor-pointer uppercase tracking-wider"
              >
                <span>Explore Journeys</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#B4B0A5]/80 uppercase tracking-widest font-medium">
          <span className="flex items-center gap-1.5"><Compass className="w-3.5 h-3.5 text-[#C5A880]" /> 100% Tailored Journeys</span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-[#C5A880]" /> Dedicated Chauffeur-Guides</span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5"><Award className="w-3.5 h-3.5 text-[#C5A880]" /> Hand-Curated Luxury Stays</span>
        </div>

      </div>
    </section>
  );
}
