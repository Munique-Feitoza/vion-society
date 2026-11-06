"use client";

import { useState } from "react";
import { MAP_NODES, ROUTE_PRESETS } from "@/data/vionData";
import { Navigation, Clock, Mountain, Sun } from "lucide-react";
import { Translations } from "@/data/translations";

interface InteractiveRouteMapProps {
  onIncludeRegion: (regionName: string) => void;
  translations?: Translations["routeMap"];
}

export default function InteractiveRouteMap({ onIncludeRegion, translations }: InteractiveRouteMapProps) {
  const [activePresetId, setActivePresetId] = useState<string>("grand-circuit");
  const [selectedNodeKey, setSelectedNodeKey] = useState<string>("sigiriya");

  const t = translations || {
    tag: "Geospatial Intelligence",
    title: "The Sri Lanka Route Explorer",
    desc: "Click any province node or circuit preset below to reveal authentic drive pacing, elevation shifts, and private transit options.",
    includeRegion: "Include in My Trip Plan →",
    gridNotice: "Interactive Ceylon Grid • Click Any Node",
  };

  const activePreset = ROUTE_PRESETS.find((p) => p.id === activePresetId) || ROUTE_PRESETS[0];
  const currentNode = MAP_NODES[selectedNodeKey] || MAP_NODES.sigiriya;

  const points = activePreset.nodes
    .map((k) => {
      const n = MAP_NODES[k];
      return n ? `${n.x},${n.y}` : "";
    })
    .filter(Boolean)
    .join(" L ");

  const handleSelectPreset = (presetId: string) => {
    setActivePresetId(presetId);
    const p = ROUTE_PRESETS.find((x) => x.id === presetId);
    if (p && p.nodes.length > 0) {
      setSelectedNodeKey(p.nodes[0]);
    }
  };

  return (
    <section id="route-canvas" className="py-24 px-6 lg:px-12 bg-[#12161D] border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block mb-3 flex items-center gap-2">
              <Navigation className="w-3.5 h-3.5" /> {t.tag}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-white font-light">{t.title}</h2>
          </div>
          <p className="text-[#B4B0A5] max-w-md text-sm mt-4 md:mt-0 font-light leading-relaxed">
            {t.desc}
          </p>
        </div>

        {/* Route Presets */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {ROUTE_PRESETS.map((p) => (
            <button
              key={p.id}
              onClick={() => handleSelectPreset(p.id)}
              className={`px-4 py-2 text-xs rounded-full border transition-all cursor-pointer font-medium ${
                activePresetId === p.id
                  ? "border-[#C5A880] bg-[#C5A880] text-[#0C0F12] font-semibold"
                  : "border-white/10 text-[#B4B0A5] hover:border-[#C5A880] bg-white/5"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        {/* Map & Node Info Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Vector Map Container */}
          <div className="lg:col-span-7 glass-card p-6 rounded-3xl border border-white/10 relative overflow-hidden flex flex-col items-center justify-center min-h-[480px] bg-[#171D26]">
            <div className="absolute top-4 left-4 text-[10px] uppercase tracking-widest text-[#C5A880] font-semibold">
              {t.gridNotice}
            </div>

            <svg viewBox="50 80 260 420" className="w-full max-w-sm h-auto select-none" style={{ filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.7))" }}>
              {/* Island Silhouette */}
              <path
                d="M 180 90 
                   C 220 130, 250 180, 270 240
                   C 285 280, 290 340, 275 390
                   C 260 440, 220 480, 160 485
                   C 120 485, 95 450, 85 410
                   C 75 360, 85 300, 100 250
                   C 115 190, 140 130, 180 90 Z"
                fill="#12161D"
                stroke="#28323F"
                strokeWidth="1.5"
              />

              {/* Connecting Route Line */}
              {points && (
                <path
                  d={`M ${points}`}
                  fill="none"
                  stroke="#C5A880"
                  strokeWidth="2.5"
                  strokeDasharray="6,4"
                  className="transition-all duration-700"
                />
              )}

              {/* Node Pins */}
              {Object.entries(MAP_NODES).map(([key, node]) => {
                const isSelected = key === selectedNodeKey;
                const isInPreset = activePreset.nodes.includes(key);

                return (
                  <g key={key} className="cursor-pointer group" onClick={() => setSelectedNodeKey(key)}>
                    {/* Pulsing Selection Rings */}
                    {isSelected && (
                      <>
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r="14"
                          fill="none"
                          stroke="#C5A880"
                          strokeWidth="1.5"
                          className="animate-pulse"
                        />
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r="18"
                          fill="none"
                          stroke="#C5A880"
                          strokeWidth="1"
                          strokeDasharray="2,2"
                          opacity="0.6"
                        />
                      </>
                    )}

                    {/* Node Core Circle */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={isSelected ? 8 : isInPreset ? 6 : 4}
                      fill={isSelected ? "#E2CCA9" : isInPreset ? "#C5A880" : "#556577"}
                      stroke={isSelected ? "#FFFFFF" : "#14181E"}
                      strokeWidth={isSelected ? "2.5" : "1"}
                      className="transition-all duration-300 group-hover:scale-125"
                    />

                    {/* Node Label with Clean Positioning */}
                    <text
                      x={
                        key === "colombo"
                          ? node.x - 55
                          : key === "galle"
                          ? node.x - 55
                          : key === "hatton"
                          ? node.x - 48
                          : node.x + 12
                      }
                      y={node.y + 4}
                      fill={isSelected ? "#C5A880" : isInPreset ? "#F7F4EE" : "#8F9CAE"}
                      fontSize="9"
                      fontFamily="system-ui, sans-serif"
                      fontWeight={isSelected ? 700 : isInPreset ? 600 : 400}
                    >
                      {node.shortName}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Selected Province Spotlight */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Circuit Card */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 bg-[#171D26]">
              <span className="text-[10px] uppercase tracking-widest text-[#C5A880] font-bold">
                TIER: VION {activePreset.tier}
              </span>
              <h3 className="font-serif text-2xl text-white mt-1 mb-2">{activePreset.name}</h3>
              <p className="text-xs text-[#B4B0A5] leading-relaxed mb-4 font-light">
                {activePreset.description}
              </p>
              <div className="flex items-center space-x-4 text-xs text-[#B4B0A5]/80 pt-2 border-t border-white/10">
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#C5A880]" /> {activePreset.duration}</span>
                <span>•</span>
                <span>{activePreset.estDriveTotal}</span>
              </div>
            </div>

            {/* Active Node Detail Card */}
            <div className="glass-card p-6 rounded-2xl border border-[#C5A880]/30 bg-[#171D26] relative">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase tracking-wider text-[#B4B0A5]/70">
                  {currentNode.region} • {currentNode.tag}
                </span>
                <span className="text-[10px] text-[#C5A880] bg-[#C5A880]/15 px-2.5 py-0.5 rounded-full font-semibold flex items-center gap-1">
                  <Sun className="w-3 h-3" /> {currentNode.weather}
                </span>
              </div>

              <h4 className="font-serif text-2xl text-white mb-1">{currentNode.name}</h4>
              <div className="text-[11px] text-[#B4B0A5]/70 mb-3 flex items-center gap-1.5">
                <Mountain className="w-3 h-3 text-[#C5A880]" /> {currentNode.elevation} • {currentNode.driveFromAirport}
              </div>

              <p className="text-xs text-[#B4B0A5] leading-relaxed mb-4 font-light">
                {currentNode.description}
              </p>

              <div className="mb-5">
                <span className="text-[10px] uppercase tracking-wider text-white font-semibold block mb-2">
                  Curated Highlights:
                </span>
                <ul className="space-y-1.5">
                  {currentNode.highlights.map((h, i) => (
                    <li key={i} className="flex items-center space-x-2 text-xs text-[#B4B0A5]">
                      <span className="text-[#C5A880]">✦</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onIncludeRegion(currentNode.name)}
                className="w-full bg-[#C5A880] hover:bg-[#D8BC95] text-[#0C0F12] text-xs font-semibold py-3 rounded-xl transition-all shadow-md uppercase tracking-wider cursor-pointer"
              >
                {t.includeRegion}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
