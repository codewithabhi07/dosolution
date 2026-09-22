"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Sparkles, MapPin, Clock } from "lucide-react";
import { FEATURED_STORY } from "@/data/cinematography";
import GoldDivider from "@/components/ui/GoldDivider";
import VideoModal from "@/components/ui/VideoModal";

export default function FeaturedStory() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="relative py-18 md:py-32 bg-[#06070a] text-[#fbf9f5] overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#c5a059]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="relative rounded-md overflow-hidden border border-[#c5a059]/35 bg-[#0e1017] shadow-2xl">
          {/* Main Visual with Play Trigger */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden group">
            <Image
              src={FEATURED_STORY.thumbnailUrl}
              alt={FEATURED_STORY.title}
              fill
              sizes="100vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 brightness-[0.55]"
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-[#0e1017]/40 to-black/60" />

            {/* Central 24k Gold Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setIsVideoModalOpen(true)}
                aria-label="Play Featured Wedding Film"
                className="group/btn relative flex items-center justify-center w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-black/60 backdrop-blur-md border-2 border-[#d4af37] hover:border-[#edd8a6] hover:scale-110 active:scale-95 transition-all duration-300 shadow-2xl shadow-[#d4af37]/30 cursor-pointer"
              >
                {/* Subtle radiating ripple */}
                <span className="absolute inset-0 rounded-full border border-[#d4af37]/50 animate-ping opacity-30" />
                <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-[#edd8a6] text-[#edd8a6] ml-0.5 sm:ml-1 group-hover/btn:fill-white group-hover/btn:text-white transition-colors" />
              </button>
            </div>

            {/* Top Left Tag */}
            <div className="absolute top-3.5 left-3.5 sm:top-6 sm:left-6 z-10 flex items-center space-x-2 text-[9.5px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#edd8a6] bg-black/70 backdrop-blur-md px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-[#c5a059]/40">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#c5a059]" />
              <span>{FEATURED_STORY.label}</span>
            </div>

            {/* Top Right Duration */}
            <div className="absolute top-3.5 right-3.5 sm:top-6 sm:right-6 z-10 hidden sm:flex items-center space-x-2 text-xs text-[#fbf9f5]/80 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>{FEATURED_STORY.duration}</span>
            </div>
          </div>

          {/* Story Narrative Card */}
          <div className="p-5 sm:p-12 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 border-t border-white/10">
            <div className="max-w-2xl space-y-2.5 sm:space-y-3.5">
              <div className="flex items-center space-x-2 text-[11px] sm:text-xs text-[#edd8a6] tracking-wider uppercase font-mono">
                <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>{FEATURED_STORY.location}</span>
                <span className="text-[#c5a059]">•</span>
                <span>{FEATURED_STORY.date}</span>
              </div>

              <h3 className="font-serif text-2xl min-[360px]:text-3xl sm:text-4xl text-[#fbf9f5] font-normal tracking-tight">
                {FEATURED_STORY.title}
              </h3>

              <p className="font-serif italic text-base sm:text-xl text-[#edd8a6]">
                "{FEATURED_STORY.subtitle}"
              </p>

              <p className="text-xs sm:text-sm text-[#a39e94] font-light leading-relaxed">
                {FEATURED_STORY.description}
              </p>
            </div>

            <div className="shrink-0 w-full md:w-auto pt-2 md:pt-0">
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="w-full md:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-gold-gradient hover:bg-gold-gradient-hover text-[#08090d] text-xs uppercase tracking-[0.22em] sm:tracking-[0.25em] font-bold rounded-sm transition-all duration-300 shadow-xl shadow-[#c5a059]/20 flex items-center justify-center gap-3 cursor-pointer min-h-[48px]"
              >
                <span>Watch Wedding Film</span>
                <Play className="w-4 h-4 fill-current" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        videoUrl={FEATURED_STORY.videoUrl}
        title={FEATURED_STORY.title}
        couple="Anuja & Ashish • Pune"
        onClose={() => setIsVideoModalOpen(false)}
      />
    </section>
  );
}
