"use client";

import React, { useEffect, useState } from "react";
import NumberFlow from "@number-flow/react";
import { cn } from "@/lib/utils";
import { inter } from "@/lib/fonts";

export default function YouTubeLiveStats() {
  const [stats, setStats] = useState<{ subscriberCount: number; viewCount: number } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("/api/youtube-stats");
        if (res.ok) {
          const data = await res.json();
          setStats({
            subscriberCount: parseInt(data.subscriberCount, 10) || 0,
            viewCount: parseInt(data.viewCount, 10) || 0,
          });
        }
      } catch (err) {
        console.error("Failed to fetch YouTube stats", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
    // Poll every 10 seconds
    const interval = setInterval(fetchStats, 10000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className={cn(
        "flex items-center gap-2 px-2.5 py-1 rounded-full",
        "border border-white/5 bg-white/2 backdrop-blur-sm animate-pulse",
        "text-[9px] sm:text-[10px] tracking-wider text-white/30 uppercase",
        inter.className
      )}>
        <span className="h-1 w-1 rounded-full bg-white/20" />
        <span>Live...</span>
      </div>
    );
  }

  if (!stats) return null;

  return (
    <div
      className={cn(
        "flex items-center gap-2 md:gap-3 px-2.5 py-1 md:px-4 md:py-1.5 rounded-full",
        "border border-white/10 bg-black/40 backdrop-blur-md",
        "text-[10px] md:text-[11px] tracking-wider uppercase text-white/60",
        inter.className
      )}
    >
      <div className="flex items-center gap-1 md:gap-1.5">
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
        </span>
        <span className="text-[8px] md:text-[9px] font-bold text-red-500 tracking-widest">LIVE</span>
      </div>

      <div className="h-3 w-px bg-white/10" />

      <a
        href="https://youtube.com/@priprocode"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 md:gap-1.5 hover:text-red-400 transition-colors"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 md:w-3.5 md:h-3.5 text-red-600">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
        <span className="font-semibold text-white/95">
          <NumberFlow value={stats.subscriberCount} format={{ notation: "standard" }} />
        </span>
        <span className="text-white/40 text-[8px] md:text-[9px] lowercase">subs</span>
      </a>

      <div className="h-3 w-px bg-white/10" />

      <div className="flex items-center gap-1 md:gap-1.5 text-white/80">
        <span className="font-semibold text-white/95">
          <NumberFlow value={stats.viewCount} format={{ notation: "standard" }} />
        </span>
        <span className="text-white/40 text-[8px] md:text-[9px] lowercase">views</span>
      </div>
    </div>
  );
}
