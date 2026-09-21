"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, MapPin, Tag } from "lucide-react";
import { PortfolioItem } from "@/types";

interface LightboxProps {
  isOpen: boolean;
  currentIndex: number;
  items: PortfolioItem[];
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({
  isOpen,
  currentIndex,
  items,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  const currentItem = items[currentIndex];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl animate-fadeIn transition-opacity duration-300"
      onClick={onClose}
    >
      {/* Top Bar: Counter & Close */}
      <div
        className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 md:p-6 bg-gradient-to-b from-black/80 to-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center space-x-3 text-xs tracking-widest text-[#c8a97e] uppercase font-mono">
          <span className="text-white font-serif text-base">{String(currentIndex + 1).padStart(2, "0")}</span>
          <span className="text-[#c8a97e]/60">/</span>
          <span>{String(items.length).padStart(2, "0")}</span>
          <span className="hidden sm:inline-block px-2 py-0.5 rounded-full border border-[#c8a97e]/30 text-[10px] text-[#fcfbf7]/80">
            {currentItem.category}
          </span>
        </div>

        <button
          onClick={onClose}
          aria-label="Close Lightbox"
          className="p-2.5 rounded-full bg-white/5 hover:bg-[#c8a97e]/20 text-[#fcfbf7] hover:text-[#c8a97e] border border-white/10 hover:border-[#c8a97e]/40 transition-all duration-300"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous Image"
        className="absolute left-3 md:left-6 z-10 p-3 rounded-full bg-black/50 hover:bg-[#c8a97e]/20 text-white/80 hover:text-[#c8a97e] border border-white/10 hover:border-[#c8a97e]/40 transition-all duration-300 backdrop-blur-md"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next Image"
        className="absolute right-3 md:right-6 z-10 p-3 rounded-full bg-black/50 hover:bg-[#c8a97e]/20 text-white/80 hover:text-[#c8a97e] border border-white/10 hover:border-[#c8a97e]/40 transition-all duration-300 backdrop-blur-md"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div
        className="relative max-w-5xl w-[96vw] sm:w-[92vw] h-[65vh] sm:h-[75vh] flex flex-col items-center justify-center p-1 sm:p-2 mt-12 sm:mt-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={currentItem.imageUrl}
            alt={currentItem.title}
            fill
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-contain transition-all duration-500 rounded-sm select-none"
            priority
          />
        </div>

        {/* Bottom Caption Bar */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <h3 className="font-serif text-xl md:text-2xl text-[#fcfbf7] tracking-wide">
            {currentItem.title}
          </h3>
          <div className="flex items-center justify-center space-x-4 mt-1 text-xs text-[#a39e94]">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#c8a97e]" />
              {currentItem.location}
            </span>
            <span className="text-[#c8a97e]/40">•</span>
            <span className="flex items-center gap-1">
              <Tag className="w-3 h-3 text-[#c8a97e]" />
              {currentItem.category}
            </span>
          </div>
          <p className="text-xs md:text-sm text-[#fcfbf7]/75 font-light mt-1.5 italic">
            "{currentItem.caption}"
          </p>
        </div>
      </div>
    </div>
  );
}
