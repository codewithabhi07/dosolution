"use client";

import { useEffect, useCallback } from "react";
import { X, Film, ExternalLink } from "lucide-react";
import { InstagramIcon } from "@/components/ui/BrandIcons";

interface VideoModalProps {
  isOpen: boolean;
  videoUrl: string;
  title?: string;
  couple?: string;
  onClose: () => void;
}

export default function VideoModal({
  isOpen,
  videoUrl,
  title = "Cinematic Wedding Film",
  couple,
  onClose,
}: VideoModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
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

  if (!isOpen) return null;

  // Detect Instagram Reel or vertical video
  const isInstagram = videoUrl.includes("instagram.com");
  const isReel = isInstagram || videoUrl.includes("/reel/") || videoUrl.includes("vertical");

  // Format Instagram embed URL if needed
  let formattedUrl = videoUrl;
  if (isInstagram && !videoUrl.includes("/embed")) {
    const trimmed = videoUrl.split("?")[0].replace(/\/$/, "");
    formattedUrl = `${trimmed}/embed/`;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Cinematic Film Player"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className={`relative w-full ${
          isReel ? "max-w-sm sm:max-w-md" : "max-w-4xl"
        } bg-[#0e1017] border border-[#c5a059]/40 rounded-lg overflow-hidden shadow-2xl shadow-black/90`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-[#12141e]">
          <div className="flex items-center space-x-3 min-w-0">
            <div className="p-1.5 rounded-full bg-[#c5a059]/15 text-[#edd8a6] shrink-0">
              {isInstagram ? <InstagramIcon className="w-4 h-4" /> : <Film className="w-4 h-4" />}
            </div>
            <div className="truncate">
              <h3 className="font-serif text-base sm:text-lg text-[#fbf9f5] tracking-wide truncate">
                {title}
              </h3>
              {couple && <p className="text-[11px] text-[#a39e94] truncate">{couple}</p>}
            </div>
          </div>

          <div className="flex items-center space-x-2 shrink-0 ml-3">
            {isInstagram && (
              <a
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full bg-white/5 hover:bg-[#c5a059]/20 text-[#edd8a6] transition-colors"
                title="Open in Instagram"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            <button
              onClick={onClose}
              aria-label="Close video player"
              className="p-1.5 rounded-full bg-white/5 hover:bg-white/15 text-[#fbf9f5] hover:text-[#edd8a6] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player Container */}
        <div
          className={`relative w-full bg-black ${
            isReel ? "aspect-[9/16] max-h-[75vh]" : "aspect-video"
          }`}
        >
          <iframe
            src={formattedUrl}
            title={title}
            className="absolute inset-0 w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Footer Note */}
        <div className="px-5 py-2.5 bg-[#090a0f] border-t border-white/10 flex items-center justify-between text-[11px] text-[#a39e94]">
          <span>DO Solution Cinematic Showcase</span>
          <span className="text-[#c5a059] font-mono">
            {isReel ? "Instagram Reel / 9:16" : "4K Ultra-HD Master Film"}
          </span>
        </div>
      </div>
    </div>
  );
}
