"use client";

import { useEffect, useState } from "react";
import { Plane, ShieldCheck } from "lucide-react";

export default function TopBar() {
  const [ceylonTime, setCeylonTime] = useState<string>("COLOMBO • 29°C CLEAR • 07:45 PM (GMT+5:30)");

  useEffect(() => {
    const updateTime = () => {
      try {
        const options: Intl.DateTimeFormatOptions = {
          timeZone: "Asia/Colombo",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        };
        const timeStr = new Intl.DateTimeFormat("en-US", options).format(new Date());
        setCeylonTime(`COLOMBO • 29°C CLEAR • ${timeStr} (GMT+5:30)`);
      } catch {
        // Fallback
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#06080A] text-[10px] text-[#B4B0A5]/70 border-b border-white/5 py-1.5 px-6 lg:px-12 flex items-center justify-between z-50 relative">
      <div className="flex items-center space-x-2">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="tracking-wider uppercase font-medium">{ceylonTime}</span>
      </div>
      <div className="hidden sm:flex items-center space-x-4 tracking-widest uppercase text-[9px]">
        <span className="flex items-center gap-1.5"><Plane className="w-3 h-3 text-[#C5A880]" /> Private Aviation & Seaplane Dispatch</span>
        <span>•</span>
        <span className="flex items-center gap-1.5"><ShieldCheck className="w-3 h-3 text-[#C5A880]" /> 24/7 VIP Concierge</span>
      </div>
    </div>
  );
}

