"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, X } from "lucide-react";
import { SITE_CONFIG, getTelLink, getWhatsAppLink } from "@/data/site";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection for luxury indicator
      const sections = ["about", "services", "cinematography", "portfolio", "experience", "testimonials", "contact"];
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "About", href: "#about", id: "about" },
    { label: "Services", href: "#services", id: "services" },
    { label: "Films", href: "#cinematography", id: "cinematography" },
    { label: "Portfolio", href: "#portfolio", id: "portfolio" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Reviews", href: "#testimonials", id: "testimonials" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${
          isScrolled
            ? "bg-[#08080a]/95 backdrop-blur-md border-b border-[#c8a97e]/15 shadow-2xl py-3.5 sm:py-4"
            : "bg-gradient-to-b from-black/80 via-black/30 to-transparent py-5 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo - Pure Editorial Wordmark */}
          <Link
            href="#hero"
            className="group flex flex-col focus:outline-none max-w-[60%] sm:max-w-none"
            aria-label="DO Solution Wedding Photography & Films"
          >
            <span className="font-serif text-lg min-[360px]:text-xl sm:text-2xl lg:text-[26px] tracking-[0.16em] sm:tracking-[0.22em] text-[#fcfbf7] font-normal uppercase group-hover:text-[#c8a97e] transition-colors duration-300 leading-none truncate">
              {SITE_CONFIG.brandName}
            </span>
            <span className="text-[7.5px] sm:text-[9px] tracking-[0.22em] sm:tracking-[0.35em] text-[#c8a97e] uppercase font-light mt-1 truncate">
              Wedding Films & Cinematography
            </span>
          </Link>

          {/* Desktop Navigation Links - Clean Minimalist Spacing */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-8">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-[11px] uppercase tracking-[0.2em] transition-colors duration-200 relative py-1 ${
                    isActive ? "text-[#c8a97e] font-medium" : "text-[#fcfbf7]/80 hover:text-[#c8a97e]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#c8a97e]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTAs: Direct Telephone & Luxury Date Booking */}
          <div className="hidden lg:flex items-center space-x-5">
            <a
              href={getTelLink()}
              className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#a39e94] hover:text-[#fcfbf7] transition-colors"
              title="Call Pranav Desai"
            >
              <Phone className="w-3.5 h-3.5 text-[#c8a97e]" />
              <span>{SITE_CONFIG.phone}</span>
            </a>

            <Link
              href="#contact"
              className="relative px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#08090d] bg-gold-gradient hover:bg-gold-gradient-hover transition-all duration-300 rounded-sm shadow-lg shadow-[#c5a059]/25 hover:scale-[1.02]"
            >
              Book Your Date
            </Link>
          </div>

          {/* Mobile Right Bar: Book Button & Minimalist Hamburger */}
          <div className="flex items-center space-x-2 sm:space-x-3 lg:hidden">
            <Link
              href="#contact"
              className="px-2.5 sm:px-3.5 py-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#08090d] bg-gold-gradient rounded-sm shadow-md"
            >
              Book Date
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#fcfbf7] hover:text-[#c8a97e] transition-colors focus:outline-none cursor-pointer flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-sm bg-white/5 active:bg-white/10"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              <span className="w-5 h-[1.5px] bg-current transition-all" />
              <span className="w-5 h-[1.5px] bg-current transition-all" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 h-[100dvh] max-h-[100dvh] z-50 bg-[#08080a]/98 backdrop-blur-2xl flex flex-col justify-between pt-5 pb-safe px-5 sm:px-8 lg:hidden animate-fadeIn overflow-y-auto overscroll-contain">
          {/* Mobile Header Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 shrink-0">
            <div>
              <span className="font-serif text-xl tracking-[0.2em] text-[#fcfbf7] uppercase font-medium">
                {SITE_CONFIG.brandName}
              </span>
              <p className="text-[9px] tracking-[0.3em] text-[#c8a97e] uppercase mt-0.5">
                Pune • Nashik • Malegaon
              </p>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-full bg-white/5 text-[#fcfbf7] hover:text-[#c8a97e] active:bg-white/10 border border-white/10 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links List */}
          <nav className="flex flex-col space-y-1.5 my-auto py-6 text-center">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-2xl text-[#fcfbf7]/90 hover:text-[#c8a97e] active:text-[#c8a97e] transition-colors py-2.5 px-4 tracking-wider min-h-[48px] flex items-center justify-center"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Founder Profile Card inside Mobile Drawer */}
          <div className="p-3.5 sm:p-4 rounded-sm bg-[#121217] border border-[#c8a97e]/25 flex items-center space-x-3 mb-3 shrink-0">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#c8a97e] shrink-0">
              <Image
                src={SITE_CONFIG.proprietorImage}
                alt={SITE_CONFIG.proprietor}
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>
            <div className="flex-1 min-w-0 text-left">
              <p className="font-serif text-sm text-[#fcfbf7] truncate">{SITE_CONFIG.proprietor}</p>
              <p className="text-[9.5px] text-[#c8a97e] uppercase tracking-wider truncate">{SITE_CONFIG.proprietorRole}</p>
              <a href={getTelLink()} className="text-[11px] text-[#a39e94] font-mono hover:text-white transition-colors block truncate">
                {SITE_CONFIG.phone}
              </a>
            </div>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#25D366] text-black shrink-0 flex items-center justify-center hover:scale-105 active:scale-95 transition-transform shadow-md"
              aria-label="Chat with Pranav Desai on WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Bottom Call to Action */}
          <div className="space-y-2 pt-1 text-center shrink-0">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-gold-gradient hover:bg-gold-gradient-hover text-[#08090d] font-bold uppercase tracking-widest text-xs rounded-sm shadow-xl cursor-pointer transition-colors min-h-[44px]"
            >
              <span>Book Your Wedding Date</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
