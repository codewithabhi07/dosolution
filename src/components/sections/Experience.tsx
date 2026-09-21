import { MessageSquare, CalendarCheck, Camera, Film, Sparkles } from "lucide-react";
import GoldDivider from "@/components/ui/GoldDivider";

export default function Experience() {
  const steps = [
    {
      number: "01",
      title: "CONNECT",
      icon: MessageSquare,
      description:
        "Tell us your story, your wedding plans and what matters most to you. We listen to your vision, preferences, and ceremony timeline.",
    },
    {
      number: "02",
      title: "PLAN",
      icon: CalendarCheck,
      description:
        "We understand your schedule, ceremonies, locations and photography preferences. We coordinate lighting, shot lists, and key moments.",
    },
    {
      number: "03",
      title: "CREATE",
      icon: Camera,
      description:
        "Our photography and cinematography team captures authentic moments throughout your celebration, balancing candid joy with regal compositions.",
    },
    {
      number: "04",
      title: "RELIVE",
      icon: Film,
      description:
        "Receive beautifully curated photographs and cinematic films that preserve your memories for years, packaged in heirloom-grade quality.",
    },
  ];

  return (
    <section id="experience" className="relative py-18 md:py-32 bg-[#f5efe6] text-[#141418] overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#edd8a6]/25 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.3em] text-[#8f6f2d] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>OUR SIGNATURE JOURNEY</span>
          </div>

          <h2 className="font-serif text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl text-[#141418] font-normal tracking-tight">
            THE DO SOLUTION EXPERIENCE
          </h2>

          <GoldDivider withDiamond />

          <p className="text-xs sm:text-base text-[#5a564f] font-light max-w-xl mx-auto">
            From your very first enquiry to the day you watch your wedding film on the big screen, we guide you through an effortless, personalized process.
          </p>
        </div>

        {/* Timeline Desktop (Horizontal) & Mobile (Vertical) */}
        <div className="relative">
          {/* Desktop Horizontal Line */}
          <div className="hidden lg:block absolute top-12 left-16 right-16 h-[2px] bg-gradient-to-r from-transparent via-[#c5a059]/60 to-transparent z-0" />

          {/* Mobile Vertical Line */}
          <div className="lg:hidden absolute top-12 bottom-12 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#c5a059]/60 via-[#c5a059]/30 to-transparent z-0 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6 relative z-10">
            {steps.map((step) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.number}
                  className="group relative flex flex-col items-center lg:items-start text-center lg:text-left bg-white/90 p-6 sm:p-8 rounded-md border border-[#c5a059]/30 hover:border-[#c5a059] transition-all duration-300 shadow-xl shadow-[#141418]/05 hover:-translate-y-1"
                >
                  {/* Step Badge / Icon */}
                  <div className="relative mb-6">
                    <div className="w-14 h-14 rounded-full bg-[#faf8f5] border-2 border-[#c5a059] flex items-center justify-center text-[#8f6f2d] group-hover:scale-110 group-hover:bg-[#c5a059] group-hover:text-black transition-all duration-300 shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="absolute -top-2 -right-2 text-[10px] font-mono tracking-widest text-[#141418] bg-white px-2 py-0.5 rounded-full border border-[#c5a059]/40 font-semibold shadow-sm">
                      {step.number}
                    </span>
                  </div>

                  {/* Step Title */}
                  <div className="space-y-1 mb-3">
                    <span className="text-[11px] uppercase tracking-[0.3em] text-[#8f6f2d] block font-semibold">
                      Phase {step.number}
                    </span>
                    <h3 className="font-serif text-2xl text-[#141418] group-hover:text-[#8f6f2d] transition-colors">
                      {step.title}
                    </h3>
                  </div>

                  {/* Step Description */}
                  <p className="text-xs sm:text-sm text-[#5a564f] font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
