"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Sparkles, Clock } from "lucide-react";
import { CINEMATOGRAPHY_FILMS } from "@/data/cinematography";
import { FilmItem } from "@/types";
import GoldDivider from "@/components/ui/GoldDivider";
import VideoModal from "@/components/ui/VideoModal";

export default function Cinematography() {
  const [selectedFilm, setSelectedFilm] = useState<FilmItem | null>(null);

  const filmCategories = [
    "Cinematic Wedding Films",
    "Wedding Teasers",
    "Highlight Films",
    "Reels & Vertical Stories",
    "Ceremony Films",
  ];

  return (
    <section id="cinematography" className="relative py-24 md:py-32 bg-[#0a0b10] text-[#fbf9f5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.3em] text-[#edd8a6] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>MOTION PICTURES</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#fbf9f5] font-normal tracking-tight">
            YOUR WEDDING, IN MOTION.
          </h2>

          <GoldDivider withDiamond />

          <p className="font-serif italic text-lg sm:text-xl text-[#edd8a6] max-w-xl mx-auto">
            "Because some moments deserve more than a photograph."
          </p>

          <p className="text-sm text-[#a39e94] font-light max-w-xl mx-auto mt-3">
            Sound design, genuine laughs, whispered vows, and sweeping cinematography that brings the spirit of your day alive for generations.
          </p>

          {/* Film Types Badge List */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {filmCategories.map((cat, i) => (
              <span
                key={i}
                className="text-[11px] uppercase tracking-wider text-[#edd8a6] px-3.5 py-1.5 rounded-full border border-[#c5a059]/30 bg-black/40 font-mono"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* 4 Cinematic Film Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  <div className="w-16 h-16 rounded-full bg-black/60 border-2 border-[#d4af37] flex items-center justify-center text-[#edd8a6] group-hover:scale-110 group-hover:bg-[#c5a059] group-hover:text-black group-hover:border-transparent transition-all duration-300 shadow-2xl shadow-[#d4af37]/30 backdrop-blur-sm">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Duration Tag */}
                <div className="absolute bottom-4 right-4 z-10 flex items-center space-x-1.5 text-xs text-white/90 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded border border-[#c5a059]/30 font-mono">
                  <Clock className="w-3 h-3 text-[#c5a059]" />
                  <span>{film.duration}</span>
                </div>

                {/* Film Type Tag */}
                <div className="absolute top-4 left-4 z-10 text-[10px] uppercase tracking-widest text-[#edd8a6] bg-black/70 backdrop-blur-md px-3 py-1 rounded border border-[#c5a059]/30 font-mono">
                  {film.type}
                </div>
              </div>

              {/* Bottom Information */}
              <div className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#fbf9f5] group-hover:text-[#edd8a6] transition-colors">
                    {film.title}
                  </h3>
                  <p className="text-xs text-[#a39e94] mt-1 font-light">
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
