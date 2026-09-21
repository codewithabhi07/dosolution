import { Heart, Film, Sparkles, Award, Users, ShieldCheck } from "lucide-react";
import GoldDivider from "@/components/ui/GoldDivider";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Heart,
      title: "Authentic Moments",
      description: "We focus on genuine emotions instead of forced poses, capturing unscripted laughter and unspoken bonds naturally.",
    },
    {
      icon: Film,
      title: "Cinematic Storytelling",
      description: "Every wedding film is crafted around your unique story, combining original vows, music composition, and dynamic pacing.",
    },
    {
      icon: Sparkles,
      title: "Attention To Detail",
      description: "From heirloom jewellery and floral décor to fleeting glances and sacred rituals, no precious moment goes unnoticed.",
    },
    {
      icon: Award,
      title: "Experienced Team",
      description: "Professional photography and cinematography crew operating state-of-the-art camera systems, stabilization, and lighting.",
    },
    {
      icon: Users,
      title: "Personal Approach",
      description: "We take time to connect with each couple before the wedding, building comfort so you feel relaxed in front of our lenses.",
    },
    {
      icon: ShieldCheck,
      title: "Complete Coverage",
      description: "End-to-end photography and cinematography solutions covering your pre-wedding, haldi, sangeet, rituals, and grand reception.",
    },
  ];

  return (
    <section id="why-us" className="relative py-24 md:py-32 bg-[#faf8f5] text-[#141418]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.3em] text-[#8f6f2d] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>THE DO SOLUTION PROMISE</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#141418] font-normal tracking-tight">
            WHY COUPLES CHOOSE DO SOLUTION
          </h2>

          <GoldDivider withDiamond />

          <p className="text-sm sm:text-base text-[#5a564f] font-light max-w-xl mx-auto">
            Our couples trust us to turn their most significant day into timeless heirloom art that transcends passing trends.
          </p>
        </div>

        {/* 6 Feature Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-md bg-white border border-[#c5a059]/30 hover:border-[#c5a059] transition-all duration-300 hover:-translate-y-1.5 shadow-xl shadow-[#141418]/05 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#faf8f5] border-2 border-[#c5a059] flex items-center justify-center text-[#8f6f2d] group-hover:scale-110 group-hover:bg-[#c5a059] group-hover:text-black transition-all duration-300 mb-6 shadow-md">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <h3 className="font-serif text-2xl text-[#141418] group-hover:text-[#8f6f2d] transition-colors mb-3">
                    {reason.title}
                  </h3>

                  <p className="text-sm text-[#5a564f] font-light leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#141418]/05 flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-widest text-[#8f6f2d] font-mono font-medium">
                    0{index + 1}
                  </span>
                  <span className="w-8 h-[1.5px] bg-[#c5a059]/40 group-hover:w-14 group-hover:bg-[#c5a059] transition-all" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
