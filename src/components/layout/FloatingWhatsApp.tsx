"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/data/site";

export default function FloatingWhatsApp() {
  const whatsappUrl = getWhatsAppLink();

  return (
    <div className="fixed bottom-20 md:bottom-8 right-5 sm:right-7 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Pranav Desai"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 hover:scale-110 active:scale-95 transition-all duration-300"
      >
        {/* Pulsing halo */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />

        {/* Floating tooltip on hover (desktop only) */}
        <span className="hidden md:block absolute right-16 top-1/2 -translate-y-1/2 px-3.5 py-1.5 bg-[#0e0e12] text-[#fcfbf7] text-xs font-medium rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-[#c8a97e]/30 shadow-xl">
          Enquire on WhatsApp
          <span className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-[#0e0e12] rotate-45 border-t border-r border-[#c8a97e]/30" />
        </span>
      </a>
    </div>
  );
}
