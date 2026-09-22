import Link from "next/link";
import { Phone, Mail, MapPin, Globe } from "lucide-react";
import { SITE_CONFIG, getWhatsAppLink, getTelLink } from "@/data/site";
import GoldDivider from "@/components/ui/GoldDivider";
import { InstagramIcon, YouTubeIcon, WhatsAppIcon, FacebookIcon } from "@/components/ui/BrandIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#060608] text-[#fcfbf7] pt-20 pb-28 md:pb-16 border-t border-[#c8a97e]/20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#c8a97e]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Col 1: Brand & Philosophy */}
          <div className="space-y-4">
            <Link href="#hero" className="inline-block">
              <span className="font-serif text-3xl tracking-[0.25em] text-[#fcfbf7] uppercase font-semibold">
                {SITE_CONFIG.brandName}
              </span>
            </Link>
            <p className="text-xs uppercase tracking-[0.22em] text-[#c8a97e]">
              {SITE_CONFIG.brandSubtitle}
            </p>
            <p className="text-sm text-[#a39e94] leading-relaxed pr-4 font-light">
              "{SITE_CONFIG.tagline}" — Dedicated to capturing emotions, traditions, and timeless cinematic wedding stories.
            </p>
            <div className="pt-2">
              <span className="text-xs text-[#a39e94] block">Proprietor & Director:</span>
              <span className="font-serif text-base text-[#fcfbf7] font-medium tracking-wide">
                {SITE_CONFIG.proprietor}
              </span>
              <div className="pt-2">
                <a
                  href={SITE_CONFIG.legacyWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-[#edd8a6]/80 hover:text-white transition-colors flex items-center gap-1.5 font-mono"
                >
                  <Globe className="w-3.5 h-3.5 text-[#c8a97e]" />
                  <span>{SITE_CONFIG.legacyWebsite.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-serif text-lg text-[#fcfbf7] tracking-wider uppercase mb-5 border-b border-[#c8a97e]/20 pb-2 inline-block">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-[#a39e94]">
              {SITE_CONFIG.navLinks.slice(0, 6).map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[#c8a97e] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-[1px] bg-[#c8a97e]/40 group-hover:w-3 group-hover:bg-[#c8a97e] transition-all" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Locations & Service Area */}
          <div>
            <h4 className="font-serif text-lg text-[#fcfbf7] tracking-wider uppercase mb-5 border-b border-[#c8a97e]/20 pb-2 inline-block">
              Locations
            </h4>
            <div className="space-y-3 text-sm text-[#a39e94]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c8a97e] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#fcfbf7] font-medium">Primary Hubs:</p>
                  <p className="text-xs mt-0.5">Pune • Nashik • Malegaon</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 pt-2">
                <span className="w-4 h-4 rounded-full border border-[#c8a97e]/50 flex items-center justify-center text-[10px] text-[#c8a97e] shrink-0 mt-0.5">
                  ✓
                </span>
                <p className="text-xs leading-relaxed">
                  Available for destination weddings across Maharashtra and India.
                </p>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Socials */}
          <div>
            <h4 className="font-serif text-lg text-[#fcfbf7] tracking-wider uppercase mb-5 border-b border-[#c8a97e]/20 pb-2 inline-block">
              Get in Touch
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={getTelLink()}
                className="flex items-center gap-2.5 text-[#fcfbf7] hover:text-[#c8a97e] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#c8a97e]" />
                <span className="font-medium tracking-wide">{SITE_CONFIG.phone}</span>
              </a>

              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2.5 text-[#a39e94] hover:text-[#c8a97e] transition-colors text-xs"
              >
                <Mail className="w-4 h-4 text-[#c8a97e]" />
                <span>{SITE_CONFIG.email}</span>
              </a>

              <div className="pt-4">
                <p className="text-xs text-[#a39e94] mb-3 uppercase tracking-wider">Social Stories</p>
                <div className="flex items-center space-x-2.5">
                  <a
                    href={SITE_CONFIG.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    title="Facebook: www.facebook.com/dosolution"
                    className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#1877F2]/20 text-[#fcfbf7] hover:text-[#1877F2] border border-white/10 hover:border-[#1877F2]/40 transition-all flex items-center justify-center"
                  >
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={SITE_CONFIG.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    title="Instagram: @dosolution"
                    className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#c8a97e]/20 text-[#fcfbf7] hover:text-[#c8a97e] border border-white/10 hover:border-[#c8a97e]/40 transition-all flex items-center justify-center"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={SITE_CONFIG.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    title="YouTube: DO Movies (@DOMovies)"
                    className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#ff0000]/20 text-[#fcfbf7] hover:text-[#ff0000] border border-white/10 hover:border-[#ff0000]/40 transition-all flex items-center justify-center"
                  >
                    <YouTubeIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    title="WhatsApp: +91 95031 09320"
                    className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#25D366]/20 text-[#fcfbf7] hover:text-[#25D366] border border-white/10 hover:border-[#25D366]/40 transition-all flex items-center justify-center"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <GoldDivider withDiamond />

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-[#a39e94] space-y-3 md:space-y-0">
          <p className="text-center md:text-left">
            © {currentYear} {SITE_CONFIG.brandName}. All Rights Reserved.
          </p>

          <p className="font-serif italic text-sm text-[#c8a97e] tracking-wide text-center">
            "{SITE_CONFIG.tagline}"
          </p>

          <p className="text-center md:text-right text-[11px] text-[#706b63]">
            Pune | Nashik | Malegaon | Maharashtra
          </p>
        </div>
      </div>
    </footer>
  );
}
