"use client";

import { useState, useRef } from "react";
import { Volume2, VolumeX, Menu, X } from "lucide-react";

interface NavbarProps {
  currency: string;
  setCurrency: (c: string) => void;
  onOpenBuilder: () => void;
}

export default function Navbar({ currency, setCurrency, onOpenBuilder }: NavbarProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const audioCtxRef = useRef<AudioContext | null>(null);
  const whiteNoiseRef = useRef<AudioBufferSourceNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  const toggleSound = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
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

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      noise.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(360, ctx.currentTime);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.01, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.3, ctx.currentTime + 1.5);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start();

      whiteNoiseRef.current = noise;
      gainNodeRef.current = gain;
      setIsPlaying(true);
    } else {
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.exponentialRampToValueAtTime(0.001, audioCtxRef.current.currentTime + 0.8);
        setTimeout(() => {
          try {
            whiteNoiseRef.current?.stop();
          } catch {}
        }, 800);
      }
      setIsPlaying(false);
    }
  };

  return (
    <>
      <header className="sticky top-0 left-0 w-full z-40 transition-all duration-300 bg-[#0C0F12]/90 backdrop-blur-xl border-b border-white/10 px-6 py-4 lg:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex flex-col items-center group">
            <span className="font-serif text-2xl tracking-[0.35em] text-white font-medium group-hover:text-[#C5A880] transition-colors">
              V I O N
            </span>
            <span className="text-[9px] tracking-[0.45em] text-[#C5A880] uppercase -mt-0.5 font-semibold">
              S O C I E T Y
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs tracking-[0.2em] uppercase font-medium text-[#B4B0A5]">
            <a href="#signature" className="hover:text-[#C5A880] transition-colors">Signature Journeys</a>
            <a href="#route-canvas" className="hover:text-[#C5A880] transition-colors">Route Map</a>
            <a href="#destinations" className="hover:text-[#C5A880] transition-colors">Provinces</a>
            <a href="#villas" className="hover:text-[#C5A880] transition-colors">Stays & Villas</a>
            <a href="#trip-builder" className="hover:text-[#C5A880] transition-colors">Trip Builder</a>
            <a href="#know" className="hover:text-[#C5A880] transition-colors">Travel Hub</a>
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            
            {/* Currency Switcher */}
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="bg-black/60 border border-white/15 rounded-full text-[11px] text-[#C5A880] px-3 py-1.5 focus:outline-none focus:border-[#C5A880] cursor-pointer font-medium"
            >
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="GBP">GBP (£)</option>
              <option value="AUD">AUD (A$)</option>
              <option value="LKR">LKR (Rs)</option>
            </select>

            {/* Ambient Audio Pill */}
            <button
              onClick={toggleSound}
              className={`hidden md:flex items-center space-x-2 text-[11px] border px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                isPlaying
                  ? "border-[#C5A880] text-[#C5A880] bg-[#C5A880]/15"
                  : "border-white/15 text-[#B4B0A5] hover:text-white bg-white/5"
              }`}
            >
              {isPlaying ? <Volume2 className="w-3.5 h-3.5 animate-pulse" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span>{isPlaying ? "Ceylon Mist ♫" : "Ambient Sound"}</span>
            </button>

            {/* Direct CTA */}
            <button
              onClick={onOpenBuilder}
              className="bg-[#C5A880] hover:bg-[#D8BC95] text-[#0C0F12] text-[11px] tracking-[0.15em] uppercase font-semibold px-5 py-2.5 rounded-full transition-all duration-300 shadow-lg shadow-[#C5A880]/20 hover:scale-[1.02] cursor-pointer"
            >
              Curate Journey
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden text-white p-2 focus:outline-none"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Fullscreen Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#0C0F12]/98 z-50 flex flex-col justify-between p-8 backdrop-blur-2xl">
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
              <div>
                <span className="font-serif text-2xl tracking-[0.35em] text-white">V I O N</span>
                <div className="text-[9px] tracking-[0.45em] text-[#C5A880] uppercase">S O C I E T Y</div>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="text-white p-2">
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col space-y-6 text-base tracking-[0.2em] uppercase font-light text-[#F7F4EE]">
              <a href="#signature" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C5A880]">Signature Journeys</a>
              <a href="#route-canvas" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C5A880]">Interactive Route Map</a>
              <a href="#destinations" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C5A880]">Provinces</a>
              <a href="#villas" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C5A880]">Stays & Villas</a>
              <a href="#trip-builder" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C5A880]">Trip Builder</a>
              <a href="#know" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C5A880]">Travel Hub</a>
            </nav>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-4">
            <button
              onClick={toggleSound}
              className="w-full border border-white/15 text-xs py-3 rounded-full text-[#B4B0A5] flex items-center justify-center space-x-2"
            >
              <span>{isPlaying ? "Mute Ceylon Mist ♫" : "Play Ceylon Rainforest Ambient Audio ♫"}</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBuilder();
              }}
              className="w-full bg-[#C5A880] text-[#0C0F12] text-xs font-semibold py-3.5 rounded-full text-center tracking-widest uppercase"
            >
              Curate Your Journey →
            </button>
          </div>
        </div>
      )}
    </>
  );
}
