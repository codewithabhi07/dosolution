"use client";

import Link from "next/link";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { getWhatsAppLink, getTelLink } from "@/data/site";

export default function MobileStickyBar() {
  const whatsappUrl = getWhatsAppLink();
  const telUrl = getTelLink();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0b0b0e]/95 backdrop-blur-xl border-t border-[#c8a97e]/25 shadow-2xl pb-[env(safe-area-inset-bottom)]">
      <div className="grid grid-cols-3 divide-x divide-white/10 text-center">
        {/* CALL NOW */}
        <a
          href={telUrl}
          className="flex flex-col items-center justify-center py-2.5 px-1 text-white hover:text-[#c8a97e] active:bg-white/5 transition-colors"
        >
          <Phone className="w-4 h-4 text-[#c8a97e] mb-1" />
          <span className="text-[10px] uppercase font-semibold tracking-wider">
            Call Now
          </span>
        </a>

        {/* WHATSAPP */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2.5 px-1 text-white hover:text-[#25D366] active:bg-white/5 transition-colors"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366] mb-1" />
          <span className="text-[10px] uppercase font-semibold tracking-wider">
            WhatsApp
          </span>
        </a>

        {/* BOOK YOUR DATE */}
        <Link
          href="#contact"
          className="flex flex-col items-center justify-center py-2.5 px-1 bg-[#c8a97e] text-[#08080a] font-semibold active:bg-[#dfc8a5] transition-colors"
        >
          <Calendar className="w-4 h-4 mb-1" />
          <span className="text-[10px] uppercase tracking-wider">
            Book Date
          </span>
        </Link>
      </div>
    </div>
  );
}
