"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Camera, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG, getWhatsAppLink } from "@/data/site";
import GoldDivider from "@/components/ui/GoldDivider";

export default function Intro() {
  return (
    <section id="about" className="relative py-18 md:py-32 bg-[#faf8f5] text-[#141418] overflow-hidden">
      {/* Delicate warm ambient highlights */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#edd8a6]/20 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#42101e]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Editorial Photo Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main portrait photo */}
              <div className="relative aspect-[3/4] w-full rounded-md overflow-hidden border border-[#c5a059]/40 shadow-2xl shadow-[#141418]/10 group">
                <Image
                  src="/images/intro-royal-9x16.jpg"
                  alt="DO Solution Royal Wedding Story"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 p-3.5 sm:p-4 bg-white/92 backdrop-blur-md rounded border border-[#c5a059]/30 shadow-lg text-left">
                  <p className="text-[9.5px] sm:text-[10px] uppercase tracking-[0.25em] text-[#8f6f2d] font-mono font-medium">
                    The Art of Celebration
                  </p>
                  <p className="font-serif text-sm sm:text-base text-[#141418] font-medium">
                    Timeless Royal Wedding Moments
                  </p>
                </div>
              </div>

              {/* Overlapping secondary detail accent card */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 w-44 aspect-square rounded-md overflow-hidden border-2 border-white shadow-2xl">
                <Image
                  src="/images/intro-accent-balcony-square.jpg"
                  alt="Traditional Maharashtrian Wedding Rituals"
                  fill
                  sizes="180px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating golden corner accents */}
              <div className="absolute -top-3 -left-3 w-20 sm:w-24 h-20 sm:h-24 border-t-2 border-l-2 border-[#c5a059]/60 pointer-events-none rounded-tl-sm" />
            </div>
          </div>

          {/* Right Column: Editorial Text & Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5 sm:space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.3em] text-[#8f6f2d] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>THE ART OF WEDDING STORIES</span>
            </div>

            <h2 className="font-serif text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl text-[#141418] leading-[1.2] font-normal tracking-tight">
              "Your Wedding Is More Than A Day.
              <br />
              <span className="italic text-[#8f6f2d]">It's A Story."</span>
            </h2>

            <GoldDivider className="!justify-start my-1" />

            <div className="space-y-3.5 sm:space-y-4 text-xs sm:text-base text-[#4a4742] font-light leading-relaxed">
              <p>
                At DO Solution, we believe every wedding has its own personality, emotions and unforgettable moments. From the quiet anticipation before the ceremony to the laughter, tears, celebrations and little details in between, we transform your wedding memories into timeless photographs and cinematic films.
              </p>
              <p>
                Rooted in Maharashtra and capturing celebrations across Pune, Nashik, Malegaon and beyond, our approach combines unobtrusive candid intimacy with grand cinematic visuals. We don’t just record events—we preserve how the day felt.
              </p>
            </div>

            {/* Founder Spotlight Card Featuring Pranav Desai */}
            <div className="mt-4 p-4 sm:p-7 rounded-md bg-white border border-[#c5a059]/35 shadow-xl shadow-[#141418]/05 relative overflow-hidden group">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                {/* Pranav Desai Portrait with Royal Gold Halo */}
                <div className="relative w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-[#c5a059] shadow-xl shrink-0 p-0.5 bg-[#faf8f5]">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src={SITE_CONFIG.proprietorImage}
                      alt={`${SITE_CONFIG.proprietor} - Founder of ${SITE_CONFIG.brandName}`}
                      fill
                      sizes="(max-width: 640px) 90px, 120px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Founder Info */}
                <div className="flex-1 text-center sm:text-left space-y-2 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                    <div>
                      <h3 className="font-serif text-xl sm:text-3xl text-[#141418] tracking-wide font-normal">
                        {SITE_CONFIG.proprietor}
                      </h3>
                      <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#8f6f2d] font-semibold">
                        {SITE_CONFIG.proprietorRole}
                      </p>
                    </div>

                    <div className="inline-flex items-center justify-center gap-1.5 text-[10px] sm:text-[11px] text-[#8f6f2d] bg-[#faf8f5] px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-[#c5a059]/40 self-center sm:self-auto font-mono">
                      <Camera className="w-3.5 h-3.5 text-[#c5a059]" />
                      <span>{SITE_CONFIG.proprietorTagline}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#5a564f] font-light leading-relaxed italic pt-1">
                    "{SITE_CONFIG.proprietorBio}"
                  </p>

                  <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 text-[11px] sm:text-xs text-[#4a4742]">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059]" />
                      <span className="font-medium">Pune • Nashik • Malegaon</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059]" />
                      <span className="font-medium">4K Cinema Production</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <Link
                href="#services"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8f6f2d] hover:text-[#141418] font-semibold transition-colors group"
              >
                <span>Explore Our Signature Services</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5 text-[#c5a059]" />
              </Link>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.18em] text-[#141418]/70 hover:text-[#25D366] transition-colors font-medium"
              >
                Direct Chat With Pranav →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
