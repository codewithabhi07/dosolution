import { Star, Quote, Sparkles } from "lucide-react";
import { TESTIMONIALS_DATA } from "@/data/testimonials";
import GoldDivider from "@/components/ui/GoldDivider";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-18 md:py-32 bg-[#faf8f5] text-[#141418]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.3em] text-[#8f6f2d] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>KIND WORDS</span>
          </div>

          <h2 className="font-serif text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl text-[#141418] font-normal tracking-tight">
            WORDS FROM OUR COUPLES
          </h2>

          <GoldDivider withDiamond />

          <p className="text-xs sm:text-base text-[#5a564f] font-light max-w-xl mx-auto">
            Real experiences from couples whose once-in-a-lifetime stories we had the privilege of capturing.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {TESTIMONIALS_DATA.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative p-5 sm:p-10 rounded-md bg-white border border-[#c5a059]/30 hover:border-[#c5a059] transition-all duration-300 shadow-xl shadow-[#141418]/05 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex items-center space-x-1.5 text-[#d4af37]">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#d4af37]" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 sm:w-8 sm:h-8 text-[#c5a059]/30 group-hover:text-[#c5a059] transition-colors" />
                </div>

                {/* Quote Text */}
                <p className="font-serif text-base sm:text-xl text-[#2a2723] leading-relaxed italic mb-6 sm:mb-8">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author & Wedding Details */}
              <div className="pt-4 sm:pt-6 border-t border-[#141418]/08 flex flex-col min-[380px]:flex-row items-start min-[380px]:items-center justify-between gap-2.5">
                <div>
                  <h4 className="font-serif text-lg sm:text-xl text-[#141418] tracking-wide font-normal">
                    {testimonial.couple}
                  </h4>
                  <p className="text-[11px] sm:text-xs uppercase tracking-wider text-[#8f6f2d] mt-0.5 font-semibold">
                    Wedding — {testimonial.weddingLocation}
                  </p>
                </div>

                <span className="text-[9.5px] sm:text-[10px] uppercase tracking-widest text-[#8f6f2d] px-2.5 py-1 rounded-full bg-[#faf8f5] border border-[#c5a059]/40 font-mono self-start min-[380px]:self-auto">
                  Verified Couple
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
