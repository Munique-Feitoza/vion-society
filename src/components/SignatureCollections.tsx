"use client";

import { JOURNEYS, CURRENCY_RATES, Journey } from "@/data/vionData";
import { ArrowRight, Sparkles } from "lucide-react";
import { Translations } from "@/data/translations";

interface SignatureCollectionsProps {
  currency: string;
  onSelectJourney: (journeyId: string) => void;
  translations?: Translations["signature"];
}

export default function SignatureCollections({
  currency,
  onSelectJourney,
  translations,
}: SignatureCollectionsProps) {
  const t = translations || {
    tag: "Masterpiece Itineraries",
    title: "The Signature Collections",
    desc: "Each route is carefully balanced for road pacing, private chartered train transitions, and secluded luxury sanctuaries. Click any itinerary to review the full day-by-day expedition.",
    viewItinerary: "View Day-by-Day Plan",
    from: "From",
    perGuest: "/ guest",
    pace: "Pace",
  };

  const formatPrice = (usd: number) => {
    const cfg = CURRENCY_RATES[currency] || CURRENCY_RATES.USD;
    const converted = Math.round(usd * cfg.rate);
    const num = converted.toLocaleString();
    return cfg.prefix ? `${cfg.symbol}${num}` : `${num} ${cfg.symbol}`;
  };

  return (
    <section id="signature" className="py-24 px-6 lg:px-12 bg-[#0C0F12]">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" /> {t.tag}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-white font-light">{t.title}</h2>
          </div>
          <p className="text-[#B4B0A5] max-w-md text-sm mt-4 md:mt-0 font-light leading-relaxed">
            {t.desc}
          </p>
        </div>

        {/* Journeys Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {JOURNEYS.map((journey: Journey) => (
            <div
              key={journey.id}
              className="group glass-card rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between bg-[#171D26]"
            >
              <div>
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={journey.coverImg}
                    alt={journey.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3.5 py-1 rounded-full text-[10px] tracking-wider uppercase text-[#C5A880] font-bold border border-[#C5A880]/30">
                    TIER: VION {journey.tier} • {journey.duration.split("/")[0]}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/85 backdrop-blur-md px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white border border-white/10">
                    {t.from} <span className="text-[#C5A880]">{formatPrice(journey.basePriceUSD)}</span> {t.perGuest}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-2xl text-white font-normal mb-2 group-hover:text-[#C5A880] transition-colors">
                    {journey.title}
                  </h3>
                  <p className="text-xs text-[#B4B0A5] line-clamp-3 mb-4 leading-relaxed font-light">
                    {journey.summary}
                  </p>
                  <div className="text-[11px] text-[#B4B0A5]/60 bg-black/40 px-3 py-1.5 rounded-lg border border-white/5">
                    Route: {journey.route}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-[#B4B0A5]/60">{t.pace}: {journey.pace}</span>
                <button
                  onClick={() => onSelectJourney(journey.id)}
                  className="text-[#C5A880] font-semibold hover:underline flex items-center space-x-1 cursor-pointer"
                >
                  <span>{t.viewItinerary}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
