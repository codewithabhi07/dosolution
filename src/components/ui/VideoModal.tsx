"use client";

import { useEffect, useCallback } from "react";
import { X, Film, ExternalLink } from "lucide-react";
import { InstagramIcon, YouTubeIcon } from "@/components/ui/BrandIcons";
import { SITE_CONFIG } from "@/data/site";

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

  // Detect platform
  const isInstagram = videoUrl.includes("instagram.com");
  const isYouTube = videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be");
  const isReel = isInstagram || videoUrl.includes("/reel/") || videoUrl.includes("vertical");

  // Format Instagram embed URL if needed
  let formattedUrl = videoUrl;
  if (isInstagram && !videoUrl.includes("/embed")) {
    const trimmed = videoUrl.split("?")[0].replace(/\/$/, "");
    formattedUrl = `${trimmed}/embed/`;
  }

  // Derive direct watch URL for YouTube
  let directWatchUrl = SITE_CONFIG.youtube;
  if (isYouTube) {
    const embedMatch = videoUrl.match(/embed\/([a-zA-Z0-9_-]+)/);
    if (embedMatch) {
      directWatchUrl = `https://www.youtube.com/watch?v=${embedMatch[1]}`;
    }
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Cinematic Film Player"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-3 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className={`relative w-full ${
          isReel ? "max-w-xs sm:max-w-md" : "max-w-4xl"
        } bg-[#0e1017] border border-[#c5a059]/40 rounded-lg overflow-hidden shadow-2xl shadow-black/90 max-h-[92dvh] flex flex-col`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-3.5 sm:px-5 py-3 border-b border-white/10 bg-[#12141e] shrink-0">
          <div className="flex items-center space-x-2.5 sm:space-x-3 min-w-0">
            <div className="p-1.5 rounded-full bg-[#c5a059]/15 text-[#edd8a6] shrink-0">
              {isInstagram ? (
                <InstagramIcon className="w-4 h-4" />
              ) : isYouTube ? (
                <YouTubeIcon className="w-4 h-4 text-red-500" />
              ) : (
                <Film className="w-4 h-4" />
              )}
            </div>
            <div className="truncate">
              <h3 className="font-serif text-sm sm:text-lg text-[#fbf9f5] tracking-wide truncate">
                {title}
              </h3>
              {couple && <p className="text-[10px] sm:text-[11px] text-[#a39e94] truncate">{couple}</p>}
            </div>
          </div>

          <div className="flex items-center space-x-1.5 sm:space-x-2 shrink-0 ml-2">
            {isInstagram && (
              <a
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-8 sm:h-8 rounded-full bg-white/5 hover:bg-[#c5a059]/20 text-[#edd8a6] transition-colors flex items-center justify-center"
                title="Open in Instagram"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {isYouTube && (
              <a
                href={directWatchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 px-3 rounded-full bg-red-600/20 hover:bg-red-600/40 text-red-400 border border-red-500/30 text-xs font-mono transition-colors flex items-center gap-1.5"
                title="Watch on DO Movies YouTube Channel"
              >
                <YouTubeIcon className="w-3.5 h-3.5 text-red-500" />
                <span className="hidden sm:inline">Watch on YouTube</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
            <button
              onClick={onClose}
              aria-label="Close video player"
              className="w-9 h-9 sm:w-8 sm:h-8 rounded-full bg-white/5 hover:bg-white/15 text-[#fbf9f5] hover:text-[#edd8a6] transition-colors cursor-pointer flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player Container */}
        <div
          className={`relative w-full bg-black ${
            isReel ? "aspect-[9/16] max-h-[62dvh] sm:max-h-[72vh]" : "aspect-video"
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
        <div className="px-3.5 sm:px-5 py-2 sm:py-2.5 bg-[#090a0f] border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] text-[#a39e94] shrink-0">
          <span className="truncate">DO Solution & DO Movies Official Showcase</span>
          <span className="text-[#c5a059] font-mono shrink-0 ml-2">
            {isReel ? "Vertical Story / 9:16" : "Cinematic 4K Master Film"}
          </span>
        </div>
      </div>
    </div>
  );
}
