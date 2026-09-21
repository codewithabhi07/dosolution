import { MapPin, Compass, Navigation, Sparkles } from "lucide-react";
import GoldDivider from "@/components/ui/GoldDivider";

export default function Locations() {
  const hubs = [
    {
      city: "PUNE",
      tagline: "Cultural Capital & Luxury Venues",
      desc: "Capturing grand heritage weddings at Fort JadhavGADH, contemporary celebrations at Oxford Golf Resort, and luxury hotel ballrooms.",
    },
    {
      city: "NASHIK",
      tagline: "Vineyard Romance & Sacred Heritage",
      desc: "Filming picturesque pre-weddings across Sula Vineyards, traditional ceremonies in Panchavati, and scenic riverside estates.",
    },
    {
      city: "MALEGAON",
      tagline: "Rich Traditions & Grand Family Unions",
      desc: "Documenting authentic family traditions, vibrant baarat celebrations, and multi-generational joyous gatherings.",
    },
  ];

  return (
    <section id="locations" className="relative py-18 md:py-32 bg-[#08090d] text-[#fbf9f5] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#c5a059]/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.3em] text-[#edd8a6] font-semibold mb-3">
            <Compass className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>PRIMARY SERVICE REGIONS</span>
          </div>

          <h2 className="font-serif text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl text-[#fbf9f5] font-normal tracking-tight">
            CAPTURING STORIES ACROSS MAHARASHTRA
          </h2>

          <GoldDivider withDiamond />

          <p className="text-xs sm:text-base text-[#a39e94] font-light max-w-2xl mx-auto leading-relaxed">
            Based in Maharashtra and available for weddings across Pune, Nashik, Malegaon and destinations throughout India.
          </p>
        </div>

        {/* Minimal Stylized Maharashtra Map & Hub Graphic */}
        <div className="relative mb-12 sm:mb-16 p-4 sm:p-10 md:p-12 rounded-md bg-[#10121a] border border-[#c5a059]/30 overflow-hidden shadow-2xl">
          {/* Subtle geometric line art connecting Pune, Nashik, Malegaon */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <svg
              className="w-full h-full"
              viewBox="0 0 800 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M260 290 L400 160 L540 100"
                stroke="#c5a059"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
              <circle cx="260" cy="290" r="7" fill="#d4af37" />
              <circle cx="400" cy="160" r="7" fill="#d4af37" />
              <circle cx="540" cy="100" r="7" fill="#d4af37" />
              <text x="275" y="295" fill="#fbf9f5" fontSize="14" fontFamily="serif" fontWeight="bold">Pune</text>
              <text x="415" y="165" fill="#fbf9f5" fontSize="14" fontFamily="serif" fontWeight="bold">Nashik</text>
              <text x="555" y="105" fill="#fbf9f5" fontSize="14" fontFamily="serif" fontWeight="bold">Malegaon</text>
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 text-center md:text-left">
            {hubs.map((hub) => (
              <div
                key={hub.city}
                className="p-5 sm:p-7 rounded-md bg-black/50 border border-white/10 hover:border-[#c5a059] transition-all duration-300 group hover:-translate-y-1 shadow-lg"
              >
                <div className="flex items-center justify-center md:justify-start gap-2 text-xs uppercase tracking-[0.25em] text-[#edd8a6] mb-2 font-mono font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Primary Hub</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#fbf9f5] group-hover:text-[#edd8a6] transition-colors tracking-wider">
                  {hub.city}
                </h3>

                <p className="text-xs uppercase tracking-wider text-[#edd8a6]/80 mt-1 mb-2 sm:mb-3 font-medium">
                  {hub.tagline}
                </p>

                <p className="text-xs sm:text-sm text-[#a39e94] font-light leading-relaxed">
                  {hub.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Destination Callout */}
          <div className="relative z-10 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <Navigation className="w-5 h-5 text-[#c5a059] shrink-0" />
              <p className="text-xs sm:text-sm text-[#fbf9f5]/85 font-light">
                Planning a destination wedding in Goa, Udaipur, Lonavala or beyond? We travel with our full cinema gear.
              </p>
            </div>

            <a
              href="#contact"
              className="w-full sm:w-auto py-2.5 px-4 rounded-sm bg-white/5 sm:bg-transparent border border-[#c5a059]/30 sm:border-0 text-xs uppercase tracking-[0.2em] text-[#edd8a6] hover:text-white font-semibold transition-colors text-center shrink-0"
            >
              Enquire Travel Dates →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
