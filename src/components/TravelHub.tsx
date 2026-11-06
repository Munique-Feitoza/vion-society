"use client";

import { FileCheck, Sun, DollarSign, Car } from "lucide-react";

export default function TravelHub() {
  const items = [
    {
      icon: FileCheck,
      title: "Visa & ETA Entry Requirements",
      desc: "Most foreign nationals require an electronic travel authorization (ETA) prior to arrival. Passports must be valid for 6 months. VION's concierge team assists all booked guests with express VIP arrival coordination at Bandaranaike International Airport (CMB).",
    },
    {
      icon: Sun,
      title: "The Dual Monsoon Secret (Year-Round Sun)",
      desc: "Sri Lanka is a year-round destination thanks to its contrasting weather systems. When it rains in the southwest (May to September), the eastern beaches (Arugam Bay, Passikudah) enjoy pristine calm waters and blue skies.",
    },
    {
      icon: DollarSign,
      title: "Currency & Zero-Surcharge Billing",
      desc: "The local currency is the Sri Lankan Rupee (LKR). Major international credit cards (Visa, Mastercard, Amex) are accepted at all luxury properties. All VION quotes and contracts are settled securely in USD/EUR/GBP with zero surprise exchange surcharges.",
    },
    {
      icon: Car,
      title: "Private Chauffeur & Road Protocol",
      desc: "Due to winding hillside roads and diverse wildlife corridors, self-driving is discouraged. All VION journeys include an elite English-speaking chauffeur-guide in a luxury air-conditioned SUV with onboard high-speed Wi-Fi and chilled refreshments.",
    },
  ];

  return (
    <section id="know" className="py-24 px-6 lg:px-12 bg-[#0C0F12]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block mb-3">
            Practical Intelligence
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-white font-light">
            Know Before You Depart
          </h2>
          <p className="text-xs text-[#B4B0A5] mt-2 font-light">
            Essential curated guidance for smooth arrivals and culturally attuned expeditions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl border border-white/10 bg-[#171D26]"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#C5A880]/15 flex items-center justify-center text-[#C5A880]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-xl text-white font-normal">{item.title}</h4>
                </div>
                <p className="text-xs text-[#B4B0A5] leading-relaxed font-light">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
