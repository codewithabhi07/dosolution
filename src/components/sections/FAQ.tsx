"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQ_DATA } from "@/data/faq";
import GoldDivider from "@/components/ui/GoldDivider";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-[#08090d] text-[#fbf9f5]">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.3em] text-[#edd8a6] font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>COMMON INQUIRIES</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#fbf9f5] font-normal tracking-tight">
            FREQUENTLY ASKED QUESTIONS
          </h2>

          <GoldDivider withDiamond />

          <p className="text-sm sm:text-base text-[#a39e94] font-light max-w-xl mx-auto">
            Everything you need to know about booking DO Solution for your wedding day.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className="rounded-md border border-[#c5a059]/25 bg-[#11131c] overflow-hidden transition-all duration-300 hover:border-[#edd8a6]/60 shadow-lg"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  className="w-full p-6 sm:p-7 flex items-center justify-between text-left cursor-pointer hover:bg-white/[0.02] transition-colors"
                >
                  <span className="font-serif text-lg sm:text-xl text-[#fbf9f5] font-normal pr-4 tracking-wide">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-[#c5a059]/30 flex items-center justify-center shrink-0 text-[#edd8a6] transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#c5a059]/20 border-[#c5a059]" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 pt-1 text-sm text-[#a39e94] font-light leading-relaxed border-t border-white/5 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
