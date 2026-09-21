"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ChevronRight, Play } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";

interface HeroProps {
  onWatchFilmClick?: () => void;
}

export default function Hero({ onWatchFilmClick }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#08080a]"
    >
      {/* Cinematic Background Image with slow subtle zoom */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=2000&q=90"
          alt="DO Solution Indian Wedding Photography & Cinematography"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center animate-subtle-zoom brightness-[0.72] contrast-[1.05]"
        />
        {/* Subtle multi-layer cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-black/45 to-black/70" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#08080a]/30 to-[#08080a]/80" />
        {/* Subtle romantic burgundy vignette hint */}
        <div className="absolute inset-0 bg-[#3a111c]/10 mix-blend-color pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16 flex flex-col items-center">
        {/* Top Brand Label */}
        <div className="inline-flex items-center space-x-3 mb-4 px-4 py-1.5 rounded-full border border-[#c8a97e]/30 bg-black/40 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c8a97e] animate-pulse" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#e4cfae] font-medium">
            {SITE_CONFIG.brandName}
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-2xl min-[380px]:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#fcfbf7] leading-[1.18] sm:leading-[1.12] tracking-tight max-w-4xl mx-auto drop-shadow-lg px-2">
          "We Capture the Moments You'll Relive Forever."
        </h1>

        {/* Supporting Text */}
        <div className="mt-5 sm:mt-6 space-y-2">
          <p className="text-[11px] min-[380px]:text-xs sm:text-sm md:text-base uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#e4cfae] font-light">
            Wedding Photography • Cinematography • Films
          </p>
          <div className="flex items-center justify-center space-x-2.5 sm:space-x-3 text-[11px] sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] text-[#a39e94] uppercase font-light">
            <span>Pune</span>
            <span className="text-[#c8a97e]">•</span>
            <span>Nashik</span>
            <span className="text-[#c8a97e]">•</span>
            <span>Malegaon</span>
          </div>
        </div>

        {/* Call to Actions */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 w-full max-w-md px-4 sm:px-0">
          <Link
            href="#portfolio"
            className="w-full sm:w-auto px-7 py-3.5 bg-[#c8a97e] hover:bg-[#dfc8a5] text-[#08080a] text-xs uppercase tracking-[0.25em] font-semibold rounded-sm transition-all duration-300 shadow-xl shadow-[#c8a97e]/15 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>View Our Stories</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="#contact"
            className="w-full sm:w-auto px-7 py-3.5 bg-black/40 hover:bg-[#c8a97e]/15 text-[#fcfbf7] hover:text-[#c8a97e] border border-[#c8a97e]/40 hover:border-[#c8a97e] text-xs uppercase tracking-[0.25em] font-medium rounded-sm backdrop-blur-md transition-all duration-300 flex items-center justify-center cursor-pointer"
          >
            Book Your Date
          </Link>
        </div>

        {/* Quick Film Play Button (Optional highlight) */}
        {onWatchFilmClick && (
          <button
            onClick={onWatchFilmClick}
            className="mt-6 sm:mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#e4cfae] hover:text-white transition-colors group cursor-pointer"
          >
            <span className="w-8 h-8 rounded-full border border-[#c8a97e]/60 flex items-center justify-center bg-black/40 group-hover:scale-110 group-hover:bg-[#c8a97e] group-hover:text-black transition-all">
              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
            </span>
            <span>Watch Highlight Reel</span>
          </button>
        )}
      </div>

      {/* Scroll to Explore Indicator */}
      <div className="absolute bottom-20 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 text-center pointer-events-none">
        <Link
          href="#about"
          className="pointer-events-auto inline-flex flex-col items-center space-y-2 text-[10px] uppercase tracking-[0.3em] text-[#a39e94] hover:text-[#c8a97e] transition-colors"
        >
          <span>SCROLL TO EXPLORE ↓</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#c8a97e]" />
        </Link>
      </div>
    </section>
  );
}
