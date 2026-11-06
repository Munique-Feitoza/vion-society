"use client";

import { useState } from "react";
import { MAP_NODES, ROUTE_PRESETS } from "@/data/vionData";
import { Navigation, Clock, Mountain, Sun, Compass, Sparkles } from "lucide-react";
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
    <section id="route-canvas" className="py-24 px-6 lg:px-12 bg-[#10141B] border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block mb-3 flex items-center gap-2">
              <Compass className="w-3.5 h-3.5" /> {t.tag}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-white font-light">{t.title}</h2>
          </div>
          <p className="text-[#B4B0A5] max-w-md text-sm mt-4 md:mt-0 font-light leading-relaxed">
            {t.desc}
          </p>
        </div>

        {/* Route Circuit Filter Pills */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {ROUTE_PRESETS.map((p) => (
            <button
              key={p.id}
              onClick={() => handleSelectPreset(p.id)}
              className={`px-4 py-2 text-xs rounded-full border transition-all cursor-pointer font-medium ${
                activePresetId === p.id
                  ? "border-[#C5A880] bg-[#C5A880] text-[#0C0F12] font-semibold shadow-md shadow-[#C5A880]/20"
                  : "border-white/10 text-[#B4B0A5] hover:border-[#C5A880] bg-white/5"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        {/* Map & Province Inspector Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Cartographic Vector Canvas */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden flex flex-col items-center justify-center min-h-[520px] bg-[#141A23]">
            
            <div className="absolute top-4 left-5 text-[10px] uppercase tracking-widest text-[#C5A880] font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              <span>{t.gridNotice}</span>
            </div>

            <div className="absolute bottom-4 left-5 text-[10px] uppercase tracking-wider text-[#B4B0A5]/50 font-mono">
              Indian Ocean • 06°N 80°E
            </div>

            <svg
              viewBox="40 60 280 430"
              className="w-full max-w-md h-auto select-none my-4"
              style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.8))" }}
            >
              {/* Island Coastline Silhouette - Authentic Sri Lanka Contour */}
              <path
                d="M 175 75
                   C 188 85, 195 105, 190 125
                   C 185 138, 155 145, 135 152
                   C 118 158, 105 175, 102 195
                   C 100 215, 110 230, 106 250
                   C 102 270, 92 295, 92 320
                   C 92 355, 102 385, 112 415
                   C 120 432, 135 450, 160 458
                   C 190 458, 225 442, 252 415
                   C 272 385, 278 345, 270 305
                   C 260 265, 252 225, 242 190
                   C 232 155, 208 120, 188 90
                   Z"
                fill="#0C1016"
                stroke="#2B3648"
                strokeWidth="1.5"
              />

              {/* Central Highlands Topography Shading */}
              <ellipse
                cx="185"
                cy="300"
                rx="45"
                ry="55"
                fill="#16202D"
                opacity="0.6"
              />
              <ellipse
                cx="180"
                cy="305"
                rx="28"
                ry="35"
                fill="#1E2A3C"
                opacity="0.5"
              />

              {/* Active Circuit Route Path */}
              {points && (
                <path
                  d={`M ${points}`}
                  fill="none"
                  stroke="#C5A880"
                  strokeWidth="2.5"
                  strokeDasharray="6,4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-all duration-700"
                />
              )}

              {/* Node Pins & Badges */}
              {Object.entries(MAP_NODES).map(([key, node]) => {
                const isSelected = key === selectedNodeKey;
                const isInPreset = activePreset.nodes.includes(key);

                // Position label pill to avoid overlaps
                const labelLeft = key === "colombo" || key === "galle" || key === "hatton";
                const pillWidth = node.shortName.length * 6.5 + 14;
                const pillX = labelLeft ? node.x - pillWidth - 10 : node.x + 10;
                const pillY = node.y - 9;

                return (
                  <g
                    key={key}
                    className="cursor-pointer group"
                    onClick={() => setSelectedNodeKey(key)}
                  >
                    {/* Selected Node Glow Aura */}
                    {isSelected && (
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="16"
                        fill="#C5A880"
                        fillOpacity="0.18"
                        stroke="#C5A880"
                        strokeWidth="1.5"
                        className="animate-pulse"
                      />
                    )}

                    {/* Pin Core */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={isSelected ? 7 : isInPreset ? 5.5 : 4}
                      fill={isSelected ? "#F7F4EE" : isInPreset ? "#C5A880" : "#4A5568"}
                      stroke="#0C1016"
                      strokeWidth="2"
                      className="transition-all duration-300"
                    />

                    {/* Label Background Pill (Prevents any line collision) */}
                    <rect
                      x={pillX}
                      y={pillY}
                      width={pillWidth}
                      height="18"
                      rx="9"
                      fill="#0C1016"
                      fillOpacity="0.88"
                      stroke={isSelected ? "#C5A880" : isInPreset ? "#ffffff25" : "#ffffff10"}
                      strokeWidth={isSelected ? "1.5" : "1"}
                    />

                    {/* Label Text */}
                    <text
                      x={pillX + pillWidth / 2}
                      y={pillY + 12}
                      textAnchor="middle"
                      fill={isSelected ? "#C5A880" : isInPreset ? "#F7F4EE" : "#8F9CAE"}
                      fontSize="9"
                      fontFamily="system-ui, sans-serif"
                      fontWeight={isSelected ? 700 : isInPreset ? 600 : 500}
                      letterSpacing="0.03em"
                    >
                      {node.shortName}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Province Inspector Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Active Circuit Overview */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 bg-[#171D26]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase tracking-widest text-[#C5A880] font-bold">
                  ACTIVE EXPEDITION TIER: {activePreset.tier}
                </span>
                <span className="text-[10px] text-[#B4B0A5]/70">
                  {activePreset.duration}
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-white mb-2">
                {activePreset.name}
              </h3>
              <p className="text-xs text-[#B4B0A5] leading-relaxed mb-4 font-light">
                {activePreset.description}
              </p>
              <div className="flex items-center space-x-3 text-xs text-[#B4B0A5]/80 pt-3 border-t border-white/10">
                <span className="flex items-center gap-1.5 text-[#C5A880]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{activePreset.estDriveTotal}</span>
                </span>
              </div>
            </div>

            {/* Selected Node Details Card */}
            <div className="glass-card p-6 sm:p-7 rounded-2xl border border-[#C5A880]/40 bg-[#171D26] relative shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] uppercase tracking-wider text-[#B4B0A5]/80 font-medium">
                  {currentNode.region} • {currentNode.tag}
                </span>
                <span className="text-[10px] text-[#C5A880] bg-[#C5A880]/15 px-2.5 py-1 rounded-full font-semibold flex items-center gap-1 border border-[#C5A880]/20">
                  <Sun className="w-3 h-3" /> {currentNode.weather}
                </span>
              </div>

              <h4 className="font-serif text-2xl sm:text-3xl text-white mb-1.5">
                {currentNode.name}
              </h4>
              
              <div className="text-[11px] text-[#B4B0A5]/80 mb-4 flex items-center gap-2">
                <Mountain className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>{currentNode.elevation}</span>
                <span>•</span>
                <span>{currentNode.driveFromAirport}</span>
              </div>

              <p className="text-xs text-[#B4B0A5] leading-relaxed mb-5 font-light">
                {currentNode.description}
              </p>

              <div className="mb-6">
                <span className="text-[10px] uppercase tracking-wider text-white font-semibold block mb-2.5">
                  Curated Highlights:
                </span>
                <ul className="space-y-2">
                  {currentNode.highlights.map((h, i) => (
                    <li key={i} className="flex items-center space-x-2 text-xs text-[#B4B0A5]">
                      <span className="text-[#C5A880] text-sm leading-none">✦</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onIncludeRegion(currentNode.name)}
                className="w-full bg-[#C5A880] hover:bg-[#D8BC95] text-[#0C0F12] text-xs font-semibold py-3.5 rounded-xl transition-all shadow-lg shadow-[#C5A880]/20 uppercase tracking-wider cursor-pointer"
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
