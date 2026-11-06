"use client";

import { useState, useRef } from "react";
import { Volume2, VolumeX, Menu, X, Globe } from "lucide-react";
import { Language, Translations } from "@/data/translations";

interface NavbarProps {
  currency: string;
  setCurrency: (c: string) => void;
  language: Language;
  setLanguage: (l: Language) => void;
  translations: Translations;
  onOpenBuilder: () => void;
}

export default function Navbar({
  currency,
  setCurrency,
  language,
  setLanguage,
  translations,
  onOpenBuilder,
}: NavbarProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const whiteNoiseRef = useRef<AudioBufferSourceNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  const toggleSound = () => {
    if (!audioCtxRef.current) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }

    if (audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }

    if (!isPlaying) {
      const ctx = audioCtxRef.current;
      const bufferSize = ctx.sampleRate * 2;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = buffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.969 * b2 + white * 0.153852;
        b3 = 0.8665 * b3 + white * 0.3104856;
        b4 = 0.55 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.016898;
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.035;
        b6 = white * 0.115926;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = buffer;
      whiteNoise.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(800, ctx.currentTime);

      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(0.01, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + 1.5);

      whiteNoise.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);

      whiteNoise.start(0);
      whiteNoiseRef.current = whiteNoise;
      gainNodeRef.current = gainNode;
      setIsPlaying(true);
    } else {
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.exponentialRampToValueAtTime(0.001, audioCtxRef.current.currentTime + 0.8);
        setTimeout(() => {
          whiteNoiseRef.current?.stop();
          whiteNoiseRef.current?.disconnect();
        }, 850);
      }
      setIsPlaying(false);
    }
  };

  const t = translations.nav;

  return (
    <>
      <header className="sticky top-0 left-0 w-full z-40 transition-all duration-300 bg-[#0C0F12]/95 backdrop-blur-xl border-b border-white/10 px-4 sm:px-6 lg:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          
          {/* Logo */}
          <a href="#" className="flex flex-col items-start sm:items-center group shrink-0 whitespace-nowrap select-none">
            <span className="font-serif text-lg sm:text-xl tracking-[0.3em] text-white font-medium group-hover:text-[#C5A880] transition-colors whitespace-nowrap">
              VION
            </span>
            <span className="text-[7.5px] sm:text-[8.5px] tracking-[0.4em] text-[#C5A880] uppercase -mt-0.5 font-semibold whitespace-nowrap">
              SOCIETY
            </span>
          </a>

          {/* Desktop Navigation - Clean, restrained luxury links */}
          <nav className="hidden 2xl:flex items-center space-x-7 text-xs tracking-[0.16em] uppercase font-medium text-[#B4B0A5] whitespace-nowrap">
            <a href="#signature" className="hover:text-[#C5A880] transition-colors whitespace-nowrap">{t.journeys}</a>
            <a href="#route-canvas" className="hover:text-[#C5A880] transition-colors whitespace-nowrap">{t.routeMap}</a>
            <a href="#destinations" className="hover:text-[#C5A880] transition-colors whitespace-nowrap">{t.provinces}</a>
            <a href="#villas" className="hover:text-[#C5A880] transition-colors whitespace-nowrap">{t.villas}</a>
            <a href="#trip-builder" className="hover:text-[#C5A880] transition-colors whitespace-nowrap">{t.tripBuilder}</a>
            <a href="#know" className="hover:text-[#C5A880] transition-colors whitespace-nowrap">{t.travelHub}</a>
          </nav>

          {/* Compact Nav for Large Screens (1024px - 1535px) */}
          <nav className="hidden lg:flex 2xl:hidden items-center space-x-5 text-[11px] tracking-[0.12em] uppercase font-medium text-[#B4B0A5] whitespace-nowrap">
            <a href="#signature" className="hover:text-[#C5A880] transition-colors whitespace-nowrap">{t.journeys}</a>
            <a href="#route-canvas" className="hover:text-[#C5A880] transition-colors whitespace-nowrap">{t.routeMap}</a>
            <a href="#villas" className="hover:text-[#C5A880] transition-colors whitespace-nowrap">{t.villas}</a>
            <a href="#trip-builder" className="hover:text-[#C5A880] transition-colors whitespace-nowrap">{t.tripBuilder}</a>
          </nav>

          {/* Right Action Controls - Guaranteed No Overflow */}
          <div className="flex items-center space-x-2 sm:space-x-2.5 shrink-0">
            
            {/* Language Switcher */}
            <div className="relative flex items-center bg-black/60 border border-white/15 rounded-full px-2 py-1 text-[11px] text-[#C5A880] shrink-0">
              <Globe className="w-3 h-3 mr-1 text-[#C5A880]/80 shrink-0" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="bg-transparent text-[#C5A880] focus:outline-none cursor-pointer font-bold uppercase tracking-wider text-[11px]"
              >
                <option value="EN" className="bg-[#12161D]">EN</option>
                <option value="FR" className="bg-[#12161D]">FR</option>
                <option value="DE" className="bg-[#12161D]">DE</option>
                <option value="AR" className="bg-[#12161D]">العربية</option>
                <option value="PT" className="bg-[#12161D]">PT</option>
              </select>
            </div>

            {/* Currency Switcher */}
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="hidden md:block bg-black/60 border border-white/15 rounded-full text-[11px] text-[#C5A880] px-2.5 py-1 focus:outline-none focus:border-[#C5A880] cursor-pointer font-medium shrink-0"
            >
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="GBP">GBP (£)</option>
              <option value="AUD">AUD (A$)</option>
              <option value="LKR">LKR (Rs)</option>
            </select>

            {/* Ambient Audio Pill - Icon only on medium/large, expands on 2xl */}
            <button
              onClick={toggleSound}
              title={isPlaying ? "Mute Ambient Ceylon Mist" : "Play Ambient Ceylon Mist Audio"}
              className={`flex items-center justify-center text-[11px] border rounded-full transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                isPlaying
                  ? "border-[#C5A880] text-[#C5A880] bg-[#C5A880]/15"
                  : "border-white/15 text-[#B4B0A5] hover:text-white bg-white/5"
              } p-1.5 2xl:px-3 2xl:py-1.5`}
            >
              {isPlaying ? (
                <Volume2 className="w-3.5 h-3.5 text-[#C5A880] animate-pulse shrink-0" />
              ) : (
                <VolumeX className="w-3.5 h-3.5 shrink-0" />
              )}
              <span className="hidden 2xl:inline ml-1.5">{isPlaying ? t.playingSound : t.ambientSound}</span>
            </button>

            {/* Direct CTA */}
            <button
              onClick={onOpenBuilder}
              className="bg-[#C5A880] hover:bg-[#D8BC95] text-[#0C0F12] text-[10px] sm:text-[11px] tracking-[0.12em] uppercase font-semibold px-3 sm:px-4 py-2 rounded-full transition-all duration-300 shadow-md hover:scale-[1.02] cursor-pointer whitespace-nowrap shrink-0"
            >
              {t.curateJourney}
            </button>

            {/* Mobile / Tablet Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-1.5 text-[#B4B0A5] hover:text-white focus:outline-none"
              aria-label="Open Navigation"
            >
              <Menu className="w-5 h-5" />
            </button>

          </div>

        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0C0F12]/98 backdrop-blur-2xl flex flex-col justify-between p-8 lg:hidden">
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
              <span className="font-serif text-xl tracking-[0.3em] text-white">VION SOCIETY</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#B4B0A5] hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col space-y-6 text-base tracking-[0.2em] uppercase font-light text-[#F7F4EE]">
              <a href="#signature" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C5A880]">{t.journeys}</a>
              <a href="#route-canvas" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C5A880]">{t.routeMap}</a>
              <a href="#destinations" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C5A880]">{t.provinces}</a>
              <a href="#villas" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C5A880]">{t.villas}</a>
              <a href="#trip-builder" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C5A880]">{t.tripBuilder}</a>
              <a href="#know" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C5A880]">{t.travelHub}</a>
            </nav>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-4">
            <div className="flex justify-center gap-3 py-2">
              {(['EN', 'FR', 'DE', 'AR', 'PT'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLanguage(l)}
                  className={`px-3 py-1 text-xs rounded-full border ${
                    language === l
                      ? "border-[#C5A880] bg-[#C5A880] text-[#0C0F12] font-bold"
                      : "border-white/10 text-white"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBuilder();
              }}
              className="w-full bg-[#C5A880] text-[#0C0F12] text-xs font-semibold py-3.5 rounded-full text-center tracking-widest uppercase"
            >
              {t.curateJourney} →
            </button>
          </div>
        </div>
      )}
    </>
  );
}
