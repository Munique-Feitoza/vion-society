"use client";

import { Journey, CURRENCY_RATES } from "@/data/vionData";
import { X, CheckCircle2, ArrowRight } from "lucide-react";

interface ItineraryDrawerProps {
  journey: Journey | null;
  currency: string;
  onClose: () => void;
  onCustomize: (journeyTitle: string) => void;
}

export default function ItineraryDrawer({
  journey,
  currency,
  onClose,
  onCustomize,
}: ItineraryDrawerProps) {
  if (!journey) return null;

  const formatPrice = (usd: number) => {
    const cfg = CURRENCY_RATES[currency] || CURRENCY_RATES.USD;
    const converted = Math.round(usd * cfg.rate);
    const num = converted.toLocaleString();
    return cfg.prefix ? `${cfg.symbol}${num}` : `${num} ${cfg.symbol}`;
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 transition-opacity"
      />

      {/* Drawer Panel */}
      <div className="fixed top-0 right-0 h-full w-full max-w-xl bg-[#12161D] border-l border-[#C5A880]/30 z-50 overflow-y-auto shadow-2xl p-6 sm:p-8 flex flex-col justify-between animate-in slide-in-from-right duration-300">
        <div>
          
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-bold">
              TIER: VION {journey.tier}
            </span>
            <button
              onClick={onClose}
              className="text-[#B4B0A5] hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cover Image */}
          <div className="relative h-64 rounded-2xl overflow-hidden mb-6 border border-white/10 bg-[#1C242F]">
            <img
              src={journey.coverImg}
              alt={journey.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="bg-black/70 border border-[#C5A880]/40 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold text-[#C5A880]">
                {journey.tag}
              </span>
              <h2 className="font-serif text-2xl text-white font-light mt-2">{journey.title}</h2>
              <p className="text-xs text-[#B4B0A5] mt-0.5">Route: {journey.route}</p>
            </div>
          </div>

          {/* Meta Pill Grid */}
          <div className="grid grid-cols-3 gap-2.5 mb-8">
            <div className="bg-[#171D26] border border-white/10 rounded-xl p-3 text-center">
              <div className="text-[9px] uppercase text-[#B4B0A5]/60 tracking-wider">Duration</div>
              <div className="text-xs font-semibold text-white mt-0.5">{journey.duration}</div>
            </div>
            <div className="bg-[#171D26] border border-white/10 rounded-xl p-3 text-center">
              <div className="text-[9px] uppercase text-[#B4B0A5]/60 tracking-wider">Travel Pace</div>
              <div className="text-xs font-semibold text-white mt-0.5">{journey.pace}</div>
            </div>
            <div className="bg-[#171D26] border border-white/10 rounded-xl p-3 text-center">
              <div className="text-[9px] uppercase text-[#B4B0A5]/60 tracking-wider">Investment</div>
              <div className="text-xs font-semibold text-[#C5A880] mt-0.5">
                {formatPrice(journey.basePriceUSD)}
              </div>
            </div>
          </div>

          {/* Day by Day Timeline */}
          <div className="mb-8">
            <h3 className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold mb-4">
              Day-by-Day Expedition Overview
            </h3>
            <div className="space-y-6 pt-2">
              {journey.days.map((d) => (
                <div
                  key={d.day}
                  className="relative pl-7 pb-6 border-l border-white/10 last:border-l-0"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-[#12161D] border-2 border-[#C5A880] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                  </div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A880]">
                      Day {d.day}
                    </span>
                    <span className="text-white/30">•</span>
                    <h4 className="font-serif text-lg text-white font-medium">{d.title}</h4>
                  </div>
                  <p className="text-xs text-[#B4B0A5] font-light leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions Box */}
          <div className="bg-[#171D26] p-5 rounded-2xl border border-white/10 mb-6">
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold mb-2">
              VION Bespoke Inclusions
            </h4>
            <ul className="text-xs text-[#B4B0A5] space-y-2">
              {[
                "Dedicated luxury air-conditioned SUV with high-speed Wi-Fi and chauffeur",
                "Handpicked luxury heritage bungalows, boutique suites and private villas",
                "VIP entrance privileges to Sigiriya, tea estates & national parks",
                "Daily gourmet breakfast and curated epicurean experiences",
                "24/7 VION Society Private Concierge WhatsApp dispatch",
              ].map((inc, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                  <span>{inc}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Sticky Bottom CTA */}
        <div className="sticky bottom-0 bg-[#12161D] pt-4 pb-2 border-t border-white/10 flex items-center space-x-3">
          <button
            onClick={() => onCustomize(journey.title)}
            className="flex-1 bg-[#C5A880] hover:bg-[#D8BC95] text-[#0C0F12] text-xs font-semibold py-3.5 rounded-full uppercase tracking-wider transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-lg shadow-[#C5A880]/20"
          >
            <span>Customize This Plan</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={onClose}
            className="border border-white/15 hover:border-white/30 text-white text-xs px-5 py-3.5 rounded-full transition-all cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </>
  );
}
