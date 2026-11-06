"use client";

import { Stay, CURRENCY_RATES } from "@/data/vionData";
import { X, Sparkles, MessageCircle } from "lucide-react";

interface StayModalProps {
  stay: Stay | null;
  currency: string;
  onClose: () => void;
}

export default function StayModal({ stay, currency, onClose }: StayModalProps) {
  if (!stay) return null;

  const formatPrice = (usd: number) => {
    const cfg = CURRENCY_RATES[currency] || CURRENCY_RATES.USD;
    const converted = Math.round(usd * cfg.rate);
    const num = converted.toLocaleString();
    return cfg.prefix ? `${cfg.symbol}${num}` : `${num} ${cfg.symbol}`;
  };

  const handleReserveWhatsApp = () => {
    const msg = `*VION Society Sanctuary Inquiry*\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `• *Requested Property:* ${stay.name}\n` +
      `• *Location:* ${stay.location}\n` +
      `• *Est. Rate:* ${formatPrice(stay.pricePerNightUSD)} / night\n` +
      `• *Inquiry:* Requesting seasonal rates & VIP availability suite options.\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `_Sent via VION Society Next.js Platform_`;

    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="bg-[#12161D] max-w-xl w-full rounded-3xl p-6 sm:p-8 border border-[#C5A880]/30 relative shadow-2xl max-h-[90vh] overflow-y-auto animate-in fade-in duration-200">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#B4B0A5] hover:text-white p-1 rounded-lg cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Cover */}
        <div className="relative h-72 rounded-2xl overflow-hidden mb-6 border border-white/10 bg-[#1C242F]">
          <img src={stay.image} alt={stay.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
            <div>
              <span className="px-3 py-1 rounded-full bg-black/70 border border-[#C5A880]/40 text-[#C5A880] text-[10px] uppercase font-bold tracking-wider">
                {stay.category.toUpperCase()}
              </span>
              <h3 className="font-serif text-3xl text-white font-light mt-2">{stay.name}</h3>
              <p className="text-xs text-[#B4B0A5]">{stay.location}</p>
            </div>
            <div className="text-right">
              <div className="text-xs text-[#B4B0A5]/70">From</div>
              <div className="text-xl font-serif text-[#C5A880] font-medium">
                {formatPrice(stay.pricePerNightUSD)}{" "}
                <span className="text-xs text-white/50">/ night</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs text-[#B4B0A5] leading-relaxed mb-6 font-light">
          {stay.description}
        </p>

        {/* Highlights */}
        <div className="mb-6">
          <h4 className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold mb-3 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Distinguished Amenities
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {stay.highlights.map((h, i) => (
              <div
                key={i}
                className="flex items-center space-x-2 text-xs text-white/90 bg-white/5 p-2.5 rounded-xl border border-white/10"
              >
                <span className="text-[#C5A880]">✦</span>
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action */}
        <div className="pt-4 border-t border-white/10 flex items-center space-x-3">
          <button
            onClick={handleReserveWhatsApp}
            className="flex-1 bg-[#C5A880] hover:bg-[#D8BC95] text-[#0C0F12] text-xs font-semibold py-3.5 rounded-full uppercase tracking-wider transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-lg shadow-[#C5A880]/20"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Request Private Reservation via WhatsApp →</span>
          </button>
          <button
            onClick={onClose}
            className="border border-white/15 text-white text-xs px-5 py-3.5 rounded-full transition-all cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
