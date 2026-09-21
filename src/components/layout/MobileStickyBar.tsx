"use client";

import Link from "next/link";
import { Phone, Calendar } from "lucide-react";
import { getWhatsAppLink, getTelLink } from "@/data/site";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";

export default function MobileStickyBar() {
  const whatsappUrl = getWhatsAppLink();
  const telUrl = getTelLink();

  return (
    <nav
      aria-label="Mobile quick actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0b0b0e]/95 backdrop-blur-xl border-t border-[#c5a059]/30 shadow-2xl pb-[max(0.4rem,env(safe-area-inset-bottom))] pt-1"
    >
      <div className="grid grid-cols-3 divide-x divide-white/10 text-center">
        {/* CALL NOW */}
        <a
          href={telUrl}
          className="flex flex-col items-center justify-center py-2 px-1 text-white hover:text-[#c8a97e] active:bg-white/5 transition-colors min-h-[52px]"
        >
          <Phone className="w-4 h-4 text-[#c5a059] mb-1" />
          <span className="text-[10px] uppercase font-semibold tracking-wider">
            Call Now
          </span>
        </a>

        {/* WHATSAPP */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 text-white hover:text-[#25D366] active:bg-white/5 transition-colors min-h-[52px]"
        >
          <WhatsAppIcon className="w-4 h-4 text-[#25D366] mb-1" />
          <span className="text-[10px] uppercase font-semibold tracking-wider">
            WhatsApp
          </span>
        </a>

        {/* BOOK YOUR DATE */}
        <Link
          href="#contact"
          className="flex flex-col items-center justify-center py-2 px-1 bg-gold-gradient text-[#08090d] font-bold active:brightness-110 transition-all min-h-[52px]"
        >
          <Calendar className="w-4 h-4 mb-1" />
          <span className="text-[10px] uppercase tracking-wider">
            Book Date
          </span>
        </Link>
      </div>
    </nav>
  );
}
