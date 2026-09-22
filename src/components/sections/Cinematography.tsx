"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Sparkles, Clock, ExternalLink } from "lucide-react";
import { CINEMATOGRAPHY_FILMS } from "@/data/cinematography";
import { FilmItem } from "@/types";
import { SITE_CONFIG } from "@/data/site";
import GoldDivider from "@/components/ui/GoldDivider";
import VideoModal from "@/components/ui/VideoModal";
import { YouTubeIcon } from "@/components/ui/BrandIcons";

export default function Cinematography() {
  const [selectedFilm, setSelectedFilm] = useState<FilmItem | null>(null);

  const filmCategories = [
    "Cinematic Wedding Films",
    "Wedding Teasers",
    "Highlight Films",
    "Pre-Wedding Films",
    "Maharashtrian Rituals",
  ];

  return (
    <section id="cinematography" className="relative py-18 md:py-32 bg-[#0a0b10] text-[#fbf9f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.3em] text-[#edd8a6] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>DO MOVIES • CINEMATIC FILMS</span>
          </div>

          <h2 className="font-serif text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl text-[#fbf9f5] font-normal tracking-tight">
            YOUR WEDDING, IN MOTION.
          </h2>

          <GoldDivider withDiamond />

          <p className="font-serif italic text-base sm:text-xl text-[#edd8a6] max-w-xl mx-auto">
            "{SITE_CONFIG.tagline}"
          </p>

          <p className="text-xs sm:text-sm text-[#a39e94] font-light max-w-xl mx-auto mt-2.5 sm:mt-3">
            Real films from our official channel <strong className="text-[#edd8a6]">DO Movies</strong>. Directed by Pranav Desai across Pune, Nashik, Malegaon & destination venues.
          </p>

          {/* YouTube Channel Button */}
          <div className="mt-5">
            <a
              href={SITE_CONFIG.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/15 hover:bg-red-600/25 text-red-400 border border-red-500/30 text-xs font-mono tracking-wider transition-all duration-300 hover:scale-105"
            >
              <YouTubeIcon className="w-4 h-4 text-red-500" />
              <span>Subscribe to DO Movies ({SITE_CONFIG.youtubeHandle})</span>
              <ExternalLink className="w-3 h-3 text-red-400" />
            </a>
          </div>

          {/* Film Types Badge List */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
            {filmCategories.map((cat, i) => (
              <span
                key={i}
                className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#edd8a6] px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-[#c5a059]/30 bg-black/40 font-mono"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* 4 Cinematic Film Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {CINEMATOGRAPHY_FILMS.map((film) => (
            <div
              key={film.id}
              onClick={() => setSelectedFilm(film)}
              className="group relative cursor-pointer rounded-md overflow-hidden bg-[#11131c] border border-[#c5a059]/25 hover:border-[#edd8a6] transition-all duration-500 shadow-2xl flex flex-col hover:-translate-y-1"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={film.thumbnailUrl}
                  alt={film.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.55] group-hover:brightness-[0.4]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#11131c] via-transparent to-black/40" />

                {/* Circular Play Button with Royal Halo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black/60 border-2 border-[#d4af37] flex items-center justify-center text-[#edd8a6] group-hover:scale-110 group-hover:bg-[#c5a059] group-hover:text-black group-hover:border-transparent transition-all duration-300 shadow-2xl shadow-[#d4af37]/30 backdrop-blur-sm">
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Duration Tag */}
                <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 z-10 flex items-center space-x-1.5 text-[11px] sm:text-xs text-white/90 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded border border-[#c5a059]/30 font-mono">
                  <Clock className="w-3 h-3 text-[#c5a059]" />
                  <span>{film.duration}</span>
                </div>

                {/* Film Type Tag */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10 text-[9.5px] sm:text-[10px] uppercase tracking-widest text-[#edd8a6] bg-black/70 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded border border-[#c5a059]/30 font-mono">
                  {film.type}
                </div>
              </div>

              {/* Bottom Information */}
              <div className="p-4 sm:p-6 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-lg sm:text-2xl text-[#fbf9f5] group-hover:text-[#edd8a6] transition-colors leading-tight">
                    {film.title}
                  </h3>
                  <p className="text-xs text-[#a39e94] mt-0.5 sm:mt-1 font-light">
                    {film.couple} • {film.location}
                  </p>
                </div>

                <div className="shrink-0 pl-4">
                  <span className="text-xs uppercase tracking-widest text-[#c5a059] group-hover:text-white transition-colors flex items-center gap-1.5 font-semibold">
                    <span>Watch</span>
                    <Play className="w-3 h-3 fill-current" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All Films on DO Movies CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <a
            href={SITE_CONFIG.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#ff0000]/15 hover:bg-[#ff0000]/25 text-white border border-[#ff0000]/40 rounded-sm font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:scale-105 shadow-xl shadow-red-950/30 min-h-[48px]"
          >
            <YouTubeIcon className="w-5 h-5 text-red-500" />
            <span>VIEW COMPLETE FILMOGRAPHY ON YOUTUBE</span>
            <ExternalLink className="w-4 h-4 text-[#edd8a6]" />
          </a>
        </div>
      </div>

      {/* Video Modal Player */}
      <VideoModal
        isOpen={Boolean(selectedFilm)}
        videoUrl={selectedFilm?.videoUrl || ""}
        title={selectedFilm?.title}
        couple={selectedFilm ? `${selectedFilm.couple} • ${selectedFilm.location}` : undefined}
        onClose={() => setSelectedFilm(null)}
      />
    </section>
  );
}
