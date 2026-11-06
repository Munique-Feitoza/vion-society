"use client";

import { MessageCircle, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#06080A] border-t border-white/10 text-center text-[#B4B0A5]">
      
      {/* Society Chronicles / Acclaim */}
      <div className="py-20 px-6 border-b border-white/5 max-w-4xl mx-auto">
        <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block mb-4">
          Society Chronicles
        </span>
        <blockquote className="font-serif text-2xl sm:text-3xl text-white font-light italic leading-relaxed mb-6">
          &ldquo;VION redefined Ceylon for us. Waking up in a colonial bungalow surrounded by emerald mist, followed by a private dawn leopard tracking session in Yala without another jeep in sight—it was absolute mastery.&rdquo;
        </blockquote>
        <div className="text-xs uppercase tracking-widest text-[#B4B0A5] font-medium">
          Lord & Lady Sterling • London, UK
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16 px-6 lg:px-12 max-w-4xl mx-auto">
        <div className="font-serif text-3xl tracking-[0.35em] text-white font-medium mb-1 whitespace-nowrap">
          VION
        </div>
        <div className="text-[10px] tracking-[0.45em] text-[#C5A880] uppercase mb-8 font-semibold whitespace-nowrap">
          SOCIETY
        </div>

        <p className="text-xs max-w-lg mx-auto font-light leading-relaxed mb-8">
          Private bespoke travel planning and curated slow luxury expeditions across Sri Lanka. Colombo • Galle • Hatton • London.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs tracking-wider uppercase mb-10">
          <a
            href="https://instagram.com/vion.tourism"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C5A880] transition-colors flex items-center gap-1.5"
          >
            <svg className="w-3.5 h-3.5 text-[#C5A880]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
            <span>Instagram @vion.tourism</span>
          </a>
          <span>•</span>
          <a
            href="mailto:concierge@vionsociety.com"
            className="hover:text-[#C5A880] transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Direct Concierge Desk</span>
          </a>
          <span>•</span>
          <a
            href="#trip-builder"
            className="text-[#C5A880] hover:underline flex items-center gap-1.5 font-semibold"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp Concierge</span>
          </a>
        </div>

        <div className="text-[11px] text-[#B4B0A5]/50 pt-8 border-t border-white/5">
          © 2026 VION Society. All rights reserved. The art of slow luxury in Ceylon.
        </div>
      </div>
    </footer>
  );
}
