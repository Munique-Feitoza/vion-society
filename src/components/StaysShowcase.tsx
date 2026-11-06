"use client";

import { useState } from "react";
import { STAYS, CURRENCY_RATES, Stay } from "@/data/vionData";
import { ArrowRight, Hotel } from "lucide-react";
import { Translations } from "@/data/translations";

interface StaysShowcaseProps {
  currency: string;
  onSelectStay: (stay: Stay) => void;
  translations?: Translations["villas"];
}

export default function StaysShowcase({ currency, onSelectStay, translations }: StaysShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const t = translations || {
    tag: "Sanctuaries & Retreats",
    title: "Handpicked Private Stays",
    all: "All Stays",
    heritage: "Heritage",
    glamping: "Glamping",
    wellness: "Wellness",
    quickView: "Quick View",
    night: "/ night",
  };

  const formatPrice = (usd: number) => {
    const cfg = CURRENCY_RATES[currency] || CURRENCY_RATES.USD;
    const converted = Math.round(usd * cfg.rate);
    const num = converted.toLocaleString();
    return cfg.prefix ? `${cfg.symbol}${num}` : `${num} ${cfg.symbol}`;
  };

  const filteredStays = activeCategory === "all"
    ? STAYS
    : STAYS.filter((s) => s.category === activeCategory);

  const getCategoryLabel = (cat: string) => {
    if (cat === "all") return t.all;
    if (cat === "heritage") return t.heritage;
    if (cat === "glamping") return t.glamping;
    if (cat === "wellness") return t.wellness;
    return cat.charAt(0).toUpperCase() + cat.slice(1);
  };

  return (
    <section id="villas" className="py-24 px-6 lg:px-12 bg-[#0C0F12]">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block mb-3 flex items-center gap-2">
              <Hotel className="w-3.5 h-3.5" /> {t.tag}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-white font-light">{t.title}</h2>
          </div>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            {["all", "heritage", "glamping", "wellness"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs rounded-full border transition-all cursor-pointer font-medium ${
                  activeCategory === cat
                    ? "border-[#C5A880] bg-[#C5A880] text-[#0C0F12] font-semibold"
                    : "border-white/10 text-[#B4B0A5] hover:border-[#C5A880] bg-white/5"
                }`}
              >
                {getCategoryLabel(cat)}
              </button>
            ))}
          </div>
        </div>

        {/* Stays Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredStays.map((stay: Stay) => (
            <div
              key={stay.id}
              className="group glass-card rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-between bg-[#171D26] hover:-translate-y-1.5 transition-all duration-300"
            >
              <div>
                <div
                  className="h-60 overflow-hidden relative cursor-pointer"
                  onClick={() => onSelectStay(stay)}
                >
                  <img
                    src={stay.image}
                    alt={stay.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] text-[#C5A880] font-bold uppercase border border-[#C5A880]/30">
                    {stay.category.toUpperCase()}
                  </span>
                </div>
                <div className="p-5">
                  <h4 className="font-serif text-xl text-white mb-1 group-hover:text-[#C5A880] transition-colors">
                    {stay.name}
                  </h4>
                  <p className="text-[11px] text-[#B4B0A5]/70 mb-3">{stay.location}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {stay.highlights.slice(0, 2).map((h, i) => (
                      <span key={i} className="text-[9px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[#B4B0A5]">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-5 pb-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-[#C5A880] font-semibold">
                  {formatPrice(stay.pricePerNightUSD)} <span className="text-[10px] text-white/50">{t.night}</span>
                </span>
                <button
                  onClick={() => onSelectStay(stay)}
                  className="text-white hover:text-[#C5A880] font-medium flex items-center gap-1 cursor-pointer"
                >
                  <span>{t.quickView}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
