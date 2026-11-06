"use client";

import { useState } from "react";
import { CURRENCY_RATES } from "@/data/vionData";
import { Sliders, MessageCircle, Check } from "lucide-react";

interface TripBuilderProps {
  currency: string;
  prefillNotes?: string;
}

export default function TripBuilder({ currency, prefillNotes = "" }: TripBuilderProps) {
  const [style, setStyle] = useState("Tea Highlands & Mist");
  const [durationDays, setDurationDays] = useState(10);
  const [guests, setGuests] = useState(2);
  const [tier, setTier] = useState("Boutique Luxury Suites");
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([
    "Sigiriya Citadel",
    "Ella Mist Peaks",
    "Yala Leopard Park",
  ]);
  const [guestName, setGuestName] = useState("");
  const [month, setMonth] = useState("February");
  const [notes, setNotes] = useState(prefillNotes);

  const tierRates: Record<string, number> = {
    "Boutique Luxury Suites": 420,
    "Ultra-Luxury Heritage (Aman & Tea Trails)": 850,
  };

  const dailyRate = tierRates[tier] || 450;
  const totalUSD = dailyRate * durationDays * guests;

  const formatPrice = (usd: number) => {
    const cfg = CURRENCY_RATES[currency] || CURRENCY_RATES.USD;
    const converted = Math.round(usd * cfg.rate);
    const num = converted.toLocaleString();
    return cfg.prefix ? `${cfg.symbol}${num}` : `${num} ${cfg.symbol}`;
  };

  const toggleDest = (dest: string) => {
    if (selectedDestinations.includes(dest)) {
      if (selectedDestinations.length > 1) {
        setSelectedDestinations(selectedDestinations.filter((d) => d !== dest));
      }
    } else {
      setSelectedDestinations([...selectedDestinations, dest]);
    }
  };

  const submitToWhatsApp = () => {
    const name = guestName.trim() || "Distinguished Traveler";
    const msg = `*VION SOCIETY — Bespoke Journey Commission*\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `• *Traveler:* ${name}\n` +
      `• *Party Size:* ${guests} Guests\n` +
      `• *Duration:* ${durationDays} Days\n` +
      `• *Preferred Month:* ${month}\n` +
      `• *Travel Style:* ${style}\n` +
      `• *Sanctuary Tier:* ${tier}\n` +
      `• *Key Provinces:* ${selectedDestinations.join(" → ")}\n` +
      `• *Estimated Investment:* ${formatPrice(totalUSD)} (${currency})\n` +
      (notes ? `• *Special Wishes:* ${notes}\n` : "") +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `_Inquiry initiated from VION Society Next.js Platform_`;

    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="trip-builder" className="py-24 px-6 lg:px-12 bg-[#12161D] border-t border-b border-white/5">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block mb-3 flex items-center justify-center gap-2">
            <Sliders className="w-3.5 h-3.5" /> Custom Route Architect
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-white font-light mb-3">
            Curate Your Bespoke Expedition
          </h2>
          <p className="text-[#B4B0A5] text-sm font-light max-w-xl mx-auto">
            Configure your preferred travel pacing, destinations, and accommodation level. Our real-time engine estimates your journey investment.
          </p>
        </div>

        {/* Builder Form Card */}
        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-white/15 shadow-2xl bg-[#171D26]">
          
          {/* Step 1: Style */}
          <div className="mb-8">
            <label className="block text-xs uppercase tracking-wider text-[#C5A880] font-semibold mb-3">
              1. Select Your Primary Passion
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                "Tea Highlands & Mist",
                "Wild Leopard Safari",
                "Royal Heritage Triangle",
                "Barefoot Ocean & Surf",
              ].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setStyle(s)}
                  className={`py-2.5 px-3 rounded-xl text-xs font-medium text-center border transition-all cursor-pointer ${
                    style === s
                      ? "border-[#C5A880] bg-[#C5A880]/20 text-white font-semibold"
                      : "border-white/10 text-[#B4B0A5] hover:border-white/20 bg-white/5"
                  }`}
                >
                  {s.replace(" & ", "\n& ")}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Duration & Guests */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#C5A880] font-semibold mb-3">
                2. Expedition Duration
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[7, 10, 14].map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDurationDays(d)}
                    className={`py-2 rounded-xl text-xs text-center font-medium border transition-all cursor-pointer ${
                      durationDays === d
                        ? "border-[#C5A880] bg-[#C5A880]/20 text-white font-semibold"
                        : "border-white/10 text-[#B4B0A5] hover:border-white/20 bg-white/5"
                    }`}
                  >
                    {d} Days
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#C5A880] font-semibold mb-3">
                Party Size
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { count: 1, label: "Solo" },
                  { count: 2, label: "Couple (2)" },
                  { count: 4, label: "Family (4)" },
                ].map((g) => (
                  <button
                    key={g.count}
                    type="button"
                    onClick={() => setGuests(g.count)}
                    className={`py-2 rounded-xl text-xs text-center font-medium border transition-all cursor-pointer ${
                      guests === g.count
                        ? "border-[#C5A880] bg-[#C5A880]/20 text-white font-semibold"
                        : "border-white/10 text-[#B4B0A5] hover:border-white/20 bg-white/5"
                    }`}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Step 3: Tier */}
          <div className="mb-8">
            <label className="block text-xs uppercase tracking-wider text-[#C5A880] font-semibold mb-3">
              3. Luxury Sanctuary Tier
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  id: "Boutique Luxury Suites",
                  title: "Boutique Luxury Suites",
                  desc: "Curated 5-star colonial manors & design lodges",
                },
                {
                  id: "Ultra-Luxury Heritage (Aman & Tea Trails)",
                  title: "Ultra-Luxury Heritage Tier",
                  desc: "Amangalla, Ceylon Tea Trails, Wild Coast Lodge",
                },
              ].map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTier(t.id)}
                  className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                    tier === t.id
                      ? "border-[#C5A880] bg-[#C5A880]/20 text-white"
                      : "border-white/10 text-[#B4B0A5] hover:border-white/20 bg-white/5"
                  }`}
                >
                  <div className="font-semibold text-white text-xs">{t.title}</div>
                  <div className="text-[10px] text-[#B4B0A5]/70 mt-0.5">{t.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 4: Provinces */}
          <div className="mb-8">
            <label className="block text-xs uppercase tracking-wider text-[#C5A880] font-semibold mb-3">
              4. Desired Provinces (Select multiple)
            </label>
            <div className="flex flex-wrap gap-2">
              {[
                "Sigiriya Citadel",
                "Kandy Temples",
                "Ella Mist Peaks",
                "Hatton Tea Valleys",
                "Yala Leopard Park",
                "Galle Fort",
              ].map((dest) => {
                const active = selectedDestinations.includes(dest);
                return (
                  <button
                    key={dest}
                    type="button"
                    onClick={() => toggleDest(dest)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer flex items-center gap-1.5 ${
                      active
                        ? "border-[#C5A880] bg-[#C5A880]/20 text-white font-semibold"
                        : "border-white/10 text-[#B4B0A5] hover:border-white/20 bg-white/5"
                    }`}
                  >
                    {active && <Check className="w-3 h-3 text-[#C5A880]" />}
                    <span>{dest}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Live Estimate Bar */}
          <div className="bg-black/60 rounded-2xl p-5 border border-[#C5A880]/30 mb-8 flex flex-col sm:flex-row items-center justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-[#B4B0A5]/70 font-semibold">
                Estimated Total Journey Investment
              </div>
              <div className="font-serif text-3xl sm:text-4xl text-[#C5A880] font-normal mt-0.5">
                {formatPrice(totalUSD)}
              </div>
              <div className="text-[11px] text-[#B4B0A5]">
                {formatPrice(dailyRate * durationDays)} / guest
              </div>
            </div>
            <div className="text-right mt-4 sm:mt-0 text-[11px] text-[#B4B0A5]/80 max-w-xs">
              Includes private chauffeur SUV, luxury stays, daily breakfast & all national park permits.
            </div>
          </div>

          {/* Inputs & Dispatch */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#B4B0A5] mb-1 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder="e.g. Julian Sterling"
                  className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#C5A880]"
                />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#B4B0A5] mb-1 font-medium">
                  Preferred Month
                </label>
                <select
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  className="w-full bg-black/60 border border-white/15 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#C5A880]"
                >
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="July">July (Summer Season)</option>
                  <option value="August">August</option>
                  <option value="December">December (Festive Season)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#B4B0A5] mb-1 font-medium">
                Special Wishes or Preferences
              </label>
              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. Honeymoon suite, private seaplane charter from Colombo..."
                className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-[#C5A880]"
              />
            </div>

            <button
              onClick={submitToWhatsApp}
              className="w-full bg-[#C5A880] hover:bg-[#D8BC95] text-[#0C0F12] font-semibold text-xs tracking-widest uppercase py-4 rounded-xl transition-all shadow-xl shadow-[#C5A880]/25 flex items-center justify-center space-x-2 cursor-pointer mt-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Commission Journey via WhatsApp Concierge →</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
