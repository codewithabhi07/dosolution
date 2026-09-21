"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Heart, Play, Film } from "lucide-react";
import { INSTAGRAM_POSTS } from "@/data/instagram";
import { SITE_CONFIG } from "@/data/site";
import GoldDivider from "@/components/ui/GoldDivider";
import { InstagramIcon } from "@/components/ui/BrandIcons";
import VideoModal from "@/components/ui/VideoModal";

export default function InstagramGrid() {
  const [activeReel, setActiveReel] = useState<{ url: string; title: string } | null>(null);

  return (
    <section className="relative py-24 md:py-32 bg-[#0a0b10] text-[#fbf9f5] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#c5a059]/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.3em] text-[#edd8a6] font-semibold mb-3">
            <InstagramIcon className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>DAILY HIGHLIGHTS & REELS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#fbf9f5] font-normal tracking-tight">
            FOLLOW THE STORIES
          </h2>

          <GoldDivider withDiamond />

          <a
            href={SITE_CONFIG.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-mono text-sm tracking-widest text-[#edd8a6] hover:text-white transition-colors bg-white/5 px-4 py-1.5 rounded-full border border-[#c5a059]/30"
          >
            {SITE_CONFIG.instagramHandle}
          </a>

          <p className="text-xs sm:text-sm text-[#a39e94] font-light mt-3">
            Behind the scenes, fresh ceremony sneak-peeks, Haldi celebrations, and cinematic reels.
          </p>
        </div>

        {/* 6-Item Instagram Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <div
              key={post.id}
              onClick={() => {
                if (post.reelUrl) {
                  setActiveReel({ url: post.reelUrl, title: post.title });
                } else {
                  window.open(SITE_CONFIG.instagram, "_blank");
                }
              }}
              className="group relative aspect-square overflow-hidden rounded-md bg-[#11131c] border border-[#c5a059]/20 hover:border-[#edd8a6] transition-all duration-300 cursor-pointer shadow-xl hover:-translate-y-1"
            >
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover object-center group-hover:scale-110 transition-transform duration-700 brightness-[0.7] group-hover:brightness-[0.4]"
              />

              {/* Reel Play Badge if video */}
              {post.type === "Reel" && (
                <div className="absolute top-2.5 right-2.5 z-10 w-6 h-6 rounded-full bg-black/60 border border-[#c5a059]/50 flex items-center justify-center text-[#edd8a6]">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </div>
              )}

              {/* Hover Overlay with Likes & Tag */}
              <div className="absolute inset-0 bg-black/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-center">
                <span className="text-[9px] uppercase tracking-widest text-[#edd8a6] font-mono mb-1">
                  {post.type}
                </span>
                <p className="text-[11px] text-[#fbf9f5] font-serif line-clamp-2">
                  {post.title}
                </p>
                <div className="flex items-center gap-1 text-[10px] text-white/85 mt-2 font-mono">
                  <Heart className="w-3 h-3 fill-red-500 text-red-500" />
                  <span>{post.likes}</span>
                </div>
                <span className="text-[9px] text-[#edd8a6] mt-2 underline uppercase tracking-wider">
                  {post.type === "Reel" ? "Play Reel ▶" : "View Story →"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="mt-12 text-center">
          <a
            href={SITE_CONFIG.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold-gradient hover:bg-gold-gradient-hover text-[#08090d] text-xs uppercase tracking-[0.25em] font-bold rounded-sm shadow-xl shadow-[#c5a059]/20 transition-all duration-300 hover:scale-105"
          >
            <span>FOLLOW ON INSTAGRAM</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Video Modal Player for Instagram Reels */}
      <VideoModal
        isOpen={Boolean(activeReel)}
        videoUrl={activeReel?.url || ""}
        title={activeReel?.title || "Instagram Wedding Reel"}
        couple="DO Solution • Pune • Nashik • Malegaon"
        onClose={() => setActiveReel(null)}
      />
    </section>
  );
}
