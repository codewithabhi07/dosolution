"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Calendar, Send, CheckCircle2, MessageCircle, AlertCircle } from "lucide-react";
import confetti from "canvas-confetti";
import { SITE_CONFIG, getTelLink, getWhatsAppLink } from "@/data/site";
import GoldDivider from "@/components/ui/GoldDivider";

interface FormData {
  name: string;
  phone: string;
  email: string;
  weddingDate: string;
  weddingLocation: string;
  eventType: string;
  servicesRequired: string[];
  message: string;
}

const initialForm: FormData = {
  name: "",
  phone: "",
  email: "",
  weddingDate: "",
  weddingLocation: "",
  eventType: "Full Wedding & Reception",
  servicesRequired: ["Wedding Photography", "Wedding Cinematography"],
  message: "",
};

const serviceOptions = [
  "Wedding Photography",
  "Wedding Cinematography",
  "Pre-Wedding Shoot",
  "Engagement Photography",
  "Highlight & Teaser Films",
  "Complete Multi-Day Coverage",
];

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: Partial<Record<keyof FormData, string>> = {};
    if (!formData.name.trim()) errs.name = "Please enter your name";
    if (!formData.phone.trim()) {
      errs.phone = "Please enter your phone number";
    } else if (!/^[0-9+\s-]{10,14}$/.test(formData.phone.replace(/\s+/g, ""))) {
      errs.phone = "Please enter a valid phone number";
    }
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.weddingDate) errs.weddingDate = "Please select your wedding date";
    if (!formData.weddingLocation.trim()) errs.weddingLocation = "Please specify the wedding city/venue";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => {
      const exists = prev.servicesRequired.includes(service);
      const updated = exists
        ? prev.servicesRequired.filter((s) => s !== service)
        : [...prev.servicesRequired, service];
      return { ...prev, servicesRequired: updated };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger luxury confetti celebration
      try {
        confetti({
          particleCount: 75,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#c8a97e", "#e4cfae", "#ffffff", "#ffd700"],
        });
      } catch (err) {
        // graceful ignore in non-canvas environments
      }
    }, 800);
  };

  const generateWhatsAppMessage = () => {
    const parts = [
      `*Wedding Enquiry for DO Solution*`,
      `Name: ${formData.name || "N/A"}`,
      `Phone: ${formData.phone || "N/A"}`,
      `Wedding Date: ${formData.weddingDate || "N/A"}`,
      `Location: ${formData.weddingLocation || "N/A"}`,
      `Event Type: ${formData.eventType || "N/A"}`,
      `Services: ${formData.servicesRequired.join(", ") || "General"}`,
      formData.message ? `Note: ${formData.message}` : "",
    ];
    return parts.filter(Boolean).join("\n");
  };

  const handleSendViaWhatsApp = () => {
    if (!validate()) return;
    const link = getWhatsAppLink(generateWhatsAppMessage());
    window.open(link, "_blank");
  };

  return (
    <section id="contact" className="relative py-18 md:py-32 bg-[#0a0b10] text-[#fbf9f5]">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#42101e]/15 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#edd8a6] font-mono block mb-2 font-medium">
            DATE AVAILABILITY & ENQUIRIES
          </span>

          <h2 className="font-serif text-2xl min-[360px]:text-3xl sm:text-5xl md:text-6xl text-[#fbf9f5] font-normal tracking-tight">
            LET'S CREATE SOMETHING BEAUTIFUL.
          </h2>

          <GoldDivider withDiamond />

          <p className="font-serif italic text-base sm:text-xl text-[#edd8a6] max-w-xl mx-auto">
            "Your date could be the beginning of our next story."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left Column: Direct Contact & Proprietary Info */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="p-5 sm:p-8 rounded-md bg-[#11131c] border border-[#c5a059]/35 space-y-4 shadow-2xl">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#a39e94] block">
                    Proprietor & Director
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#fcfbf7] mt-1">
                    {SITE_CONFIG.proprietor}
                  </h3>
                  <p className="text-xs text-[#c8a97e] uppercase tracking-widest">
                    DO Solution Wedding Films
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-3">
                  <a
                    href={getTelLink()}
                    className="flex items-center gap-3 text-sm sm:text-base text-[#fcfbf7] hover:text-[#c8a97e] transition-colors"
                  >
                    <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#c8a97e]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="font-medium tracking-wide">{SITE_CONFIG.phone}</span>
                  </a>

                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="flex items-center gap-3 text-xs sm:text-sm text-[#a39e94] hover:text-[#c8a97e] transition-colors"
                  >
                    <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#c8a97e]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="truncate">{SITE_CONFIG.email}</span>
                  </a>

                  <div className="flex items-start gap-3 text-xs sm:text-sm text-[#a39e94] pt-1">
                    <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#c8a97e] shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-[#fcfbf7] font-medium uppercase tracking-wider">
                        Operating Across:
                      </p>
                      <p className="text-xs mt-0.5 text-[#c8a97e]">
                        Pune • Nashik • Malegaon • All India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="p-4 sm:p-6 rounded-sm bg-gradient-to-br from-[#121b14] to-[#0a120c] border border-[#25D366]/30 flex flex-col min-[420px]:flex-row items-start min-[420px]:items-center justify-between gap-3.5">
                <div>
                  <h4 className="font-serif text-base sm:text-lg text-white">Prefer instant chat?</h4>
                  <p className="text-xs text-white/70 mt-0.5">
                    Connect directly with Pranav Desai on WhatsApp.
                  </p>
                </div>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-[420px]:w-auto px-4 py-2.5 rounded-sm bg-[#25D366] text-black font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shrink-0 hover:bg-[#20bd5a] transition-colors shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 fill-black" />
                  <span>Chat Now</span>
                </a>
              </div>
            </div>

            {/* Reassurance note */}
            <div className="p-4 sm:p-6 rounded-sm bg-black/40 border border-white/5 text-xs text-[#a39e94] leading-relaxed font-light">
              <span className="text-[#c8a97e] font-medium block mb-1">Limited Annual Bookings</span>
              To give each couple our undivided creative focus, master color grading, and personal direction, DO Solution accepts a strictly limited number of weddings each season.
            </div>
          </div>

          {/* Right Column: High-Conversion Booking Form */}
          <div className="lg:col-span-7">
            <div className="p-4 sm:p-8 md:p-10 rounded-md bg-[#11131c] border border-[#c5a059]/35 shadow-2xl relative">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-5 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-[#c8a97e]/10 border border-[#c8a97e] flex items-center justify-center text-[#c8a97e] mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-3xl text-[#fcfbf7]">
                    Thank You, {formData.name}!
                  </h3>
                  <p className="text-sm text-[#a39e94] max-w-md mx-auto leading-relaxed">
                    We have received your enquiry for <strong className="text-white">{formData.weddingDate}</strong> in <strong className="text-white">{formData.weddingLocation}</strong>. Pranav Desai or our team will review date availability and connect with you within 24 hours.
                  </p>
                  <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                      onClick={handleSendViaWhatsApp}
                      className="w-full sm:w-auto px-6 py-3 rounded-sm bg-[#25D366] text-black font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 fill-black" />
                      <span>Forward Details on WhatsApp</span>
                    </button>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData(initialForm);
                      }}
                      className="w-full sm:w-auto px-6 py-3 rounded-sm border border-white/20 text-xs uppercase tracking-wider text-[#a39e94] hover:text-white transition-colors"
                    >
                      Submit Another Date
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Row 1: Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-[0.2em] text-[#c8a97e] mb-2 font-mono">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        placeholder="e.g. Aditi Sharma & Rohan Patil"
                        className={`w-full px-4 py-3 bg-[#08080a] border rounded-sm text-sm text-[#fcfbf7] placeholder-[#706b63] focus:outline-none transition-colors ${
                          errors.name ? "border-red-500/70" : "border-white/10 focus:border-[#c8a97e]"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-[0.2em] text-[#c8a97e] mb-2 font-mono">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        placeholder="+91 98765 43210"
                        className={`w-full px-4 py-3 bg-[#08080a] border rounded-sm text-sm text-[#fcfbf7] placeholder-[#706b63] focus:outline-none transition-colors ${
                          errors.phone ? "border-red-500/70" : "border-white/10 focus:border-[#c8a97e]"
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Email & Wedding Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-[0.2em] text-[#c8a97e] mb-2 font-mono">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="yourname@gmail.com"
                        className={`w-full px-4 py-3 bg-[#08080a] border rounded-sm text-sm text-[#fcfbf7] placeholder-[#706b63] focus:outline-none transition-colors ${
                          errors.email ? "border-red-500/70" : "border-white/10 focus:border-[#c8a97e]"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-[0.2em] text-[#c8a97e] mb-2 font-mono">
                        Wedding Date *
                      </label>
                      <input
                        type="date"
                        value={formData.weddingDate}
                        onChange={(e) => {
                          setFormData({ ...formData, weddingDate: e.target.value });
                          if (errors.weddingDate) setErrors({ ...errors, weddingDate: undefined });
                        }}
                        className={`w-full px-4 py-3 bg-[#08080a] border rounded-sm text-sm text-[#fcfbf7] focus:outline-none transition-colors [color-scheme:dark] ${
                          errors.weddingDate ? "border-red-500/70" : "border-white/10 focus:border-[#c8a97e]"
                        }`}
                      />
                      {errors.weddingDate && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.weddingDate}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Location & Event Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-[0.2em] text-[#c8a97e] mb-2 font-mono">
                        Wedding Location / Venue *
                      </label>
                      <input
                        type="text"
                        value={formData.weddingLocation}
                        onChange={(e) => {
                          setFormData({ ...formData, weddingLocation: e.target.value });
                          if (errors.weddingLocation) setErrors({ ...errors, weddingLocation: undefined });
                        }}
                        placeholder="e.g. Pune / Nashik / Malegaon"
                        className={`w-full px-4 py-3 bg-[#08080a] border rounded-sm text-sm text-[#fcfbf7] placeholder-[#706b63] focus:outline-none transition-colors ${
                          errors.weddingLocation ? "border-red-500/70" : "border-white/10 focus:border-[#c8a97e]"
                        }`}
                      />
                      {errors.weddingLocation && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.weddingLocation}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-[0.2em] text-[#c8a97e] mb-2 font-mono">
                        Event Type
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full px-4 py-3 bg-[#08080a] border border-white/10 rounded-sm text-sm text-[#fcfbf7] focus:outline-none focus:border-[#c8a97e] transition-colors"
                      >
                        <option value="Full Wedding & Reception">Full Wedding & Reception</option>
                        <option value="Pre-Wedding Shoot">Pre-Wedding Shoot</option>
                        <option value="Engagement Ceremony">Engagement Ceremony</option>
                        <option value="Multi-Day Destination Wedding">Multi-Day Destination Wedding</option>
                        <option value="Haldi & Mehendi Special">Haldi & Mehendi Special</option>
                      </select>
                    </div>
                  </div>

                  {/* Services Required Checkboxes */}
                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] text-[#c8a97e] mb-3 font-mono">
                      Services Required
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {serviceOptions.map((service) => {
                        const checked = formData.servicesRequired.includes(service);
                        return (
                          <button
                            type="button"
                            key={service}
                            onClick={() => handleServiceToggle(service)}
                            className={`px-3.5 py-2.5 rounded-sm border text-xs text-left flex items-center justify-between transition-all duration-200 cursor-pointer min-h-[44px] ${
                              checked
                                ? "bg-[#c8a97e]/15 border-[#c8a97e] text-[#fcfbf7]"
                                : "bg-black/30 border-white/10 text-[#a39e94] hover:border-white/20"
                            }`}
                          >
                            <span>{service}</span>
                            <span
                              className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] shrink-0 ml-2 ${
                                checked
                                  ? "bg-[#c8a97e] border-[#c8a97e] text-black font-bold"
                                  : "border-white/20"
                              }`}
                            >
                              {checked ? "✓" : ""}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] text-[#c8a97e] mb-2 font-mono">
                      Message / Special Requests
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your ceremonies, vision, and expectations..."
                      className="w-full px-4 py-3 bg-[#08080a] border border-white/10 rounded-sm text-sm sm:text-base text-[#fcfbf7] placeholder-[#706b63] focus:outline-none focus:border-[#c8a97e] transition-colors"
                    />
                  </div>

                  {/* Submit Button & Fast WhatsApp Option */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:flex-1 py-3.5 sm:py-4 bg-gold-gradient hover:bg-gold-gradient-hover text-[#08090d] text-xs uppercase tracking-[0.22em] sm:tracking-[0.25em] font-bold rounded-sm transition-all duration-300 shadow-xl shadow-[#c5a059]/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 hover:scale-[1.01] min-h-[48px]"
                    >
                      {isSubmitting ? (
                        <span>Checking Date Availability...</span>
                      ) : (
                        <>
                          <span>CHECK MY DATE</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="w-full sm:w-auto px-5 py-3.5 sm:py-4 border border-[#25D366]/60 hover:bg-[#25D366]/15 text-[#25D366] text-xs uppercase tracking-[0.15em] font-medium rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer min-h-[48px]"
                      title="Directly send this form to Pranav Desai on WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Send via WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
