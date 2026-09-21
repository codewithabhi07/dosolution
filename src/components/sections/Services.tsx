import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { SERVICES_DATA } from "@/data/services";
import GoldDivider from "@/components/ui/GoldDivider";

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-[#0a0b10] text-[#fbf9f5] overflow-hidden">
      {/* Subtle royal ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#c5a059]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.3em] text-[#edd8a6] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>OUR SPECIALIZATIONS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#fbf9f5] font-normal tracking-tight">
            WHAT WE CREATE
          </h2>

          <GoldDivider withDiamond />

          <p className="text-sm sm:text-base text-[#a39e94] font-light max-w-xl mx-auto">
            From intimate rituals to multi-day grand celebrations, we provide bespoke photographic and cinematic services designed to capture real human emotion.
          </p>
        </div>

        {/* 6 Luxury Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-md overflow-hidden bg-[#11131c] border border-[#c5a059]/25 hover:border-[#edd8a6] transition-all duration-500 shadow-2xl flex flex-col justify-between min-h-[460px] hover:-translate-y-1.5"
            >
              {/* Background Image with Hover Zoom */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700 brightness-[0.42] group-hover:brightness-[0.32]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b10] via-[#0a0b10]/75 to-transparent" />
              </div>

              {/* Card Header Content */}
              <div className="relative z-10 p-6 sm:p-8 flex items-start justify-between">
                <span className="font-serif text-3xl font-light text-[#c5a059] group-hover:text-[#edd8a6] transition-colors">
                  {service.number}
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#edd8a6] border border-[#c5a059]/40 bg-black/50 px-3 py-1 rounded-full backdrop-blur-md">
                  {service.tag}
                </span>
              </div>

              {/* Card Bottom Content */}
              <div className="relative z-10 p-6 sm:p-8 space-y-4">
                <h3 className="font-serif text-2xl text-[#fbf9f5] group-hover:text-[#edd8a6] transition-colors tracking-wide">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#a39e94] font-light leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="pt-2 space-y-1.5 text-[11px] text-[#fbf9f5]/85">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Explore Link */}
                <div className="pt-4 border-t border-white/10">
                  <Link
                    href={`#contact?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a059] group-hover:text-white transition-colors font-medium"
                  >
                    <span>Enquire This Service</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
