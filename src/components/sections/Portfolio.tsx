"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, MapPin, Maximize2 } from "lucide-react";
import { PORTFOLIO_DATA, PORTFOLIO_CATEGORIES } from "@/data/portfolio";
import { PortfolioItem } from "@/types";
import GoldDivider from "@/components/ui/GoldDivider";
import Lightbox from "@/components/ui/Lightbox";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Filter items based on active category
  const filteredItems: PortfolioItem[] =
    activeCategory === "All"
      ? PORTFOLIO_DATA
      : PORTFOLIO_DATA.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="portfolio" className="relative py-24 md:py-32 bg-[#08090d] text-[#fbf9f5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.3em] text-[#edd8a6] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>CURATED GALLERY</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#fbf9f5] font-normal tracking-tight">
            RECENT STORIES
          </h2>

          <GoldDivider withDiamond />

          <p className="text-sm sm:text-base text-[#a39e94] font-light max-w-xl mx-auto">
            Explore authentic wedding celebrations captured across Pune, Nashik, Malegaon and heritage destinations.
          </p>
        </div>

        {/* Filter Tabs with Liquid Gold Active State */}
        <div className="flex items-center justify-start md:justify-center overflow-x-auto pb-4 mb-12 gap-2 sm:gap-3 no-scrollbar">
          {PORTFOLIO_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 text-xs uppercase tracking-[0.2em] rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeCategory === category
                  ? "bg-gold-gradient text-[#08090d] font-bold shadow-lg shadow-[#c5a059]/25 scale-105"
                  : "bg-white/5 text-[#a39e94] hover:text-[#fbf9f5] hover:bg-white/10 border border-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative cursor-pointer overflow-hidden rounded-md bg-[#11131c] border border-[#c5a059]/25 hover:border-[#edd8a6] transition-all duration-500 shadow-2xl hover:-translate-y-1"
            >
              {/* Image Container with Responsive Aspect Ratio */}
              <div
                className={`relative w-full overflow-hidden ${
                  item.aspectRatio === "portrait"
                    ? "aspect-[3/4]"
                    : item.aspectRatio === "square"
                    ? "aspect-square"
                    : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={item.imageUrl}
                  alt={`${item.title} - ${item.category}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Lightbox Expand Icon */}
                <div className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-[#c5a059]/40 flex items-center justify-center text-white/90 group-hover:text-[#edd8a6] group-hover:border-[#edd8a6] opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 shadow-lg">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10 space-y-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#edd8a6] font-mono">
                    {item.category}
                  </span>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#fbf9f5] group-hover:text-[#edd8a6] transition-colors">
                    {item.title}
                  </h3>

                  <div className="flex items-center space-x-1.5 text-xs text-[#a39e94]">
                    <MapPin className="w-3 h-3 text-[#c5a059]" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <Lightbox
          isOpen={lightboxOpen}
          currentIndex={lightboxIndex}
          items={filteredItems}
          onClose={() => setLightboxOpen(false)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      </div>
    </section>
  );
}
