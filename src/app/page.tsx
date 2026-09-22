"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Services from "@/components/sections/Services";
import Experience from "@/components/sections/Experience";
import Portfolio from "@/components/sections/Portfolio";
import FeaturedStory from "@/components/sections/FeaturedStory";
import Cinematography from "@/components/sections/Cinematography";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Locations from "@/components/sections/Locations";
import Testimonials from "@/components/sections/Testimonials";
import InstagramGrid from "@/components/sections/InstagramGrid";
import FAQ from "@/components/sections/FAQ";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import MobileStickyBar from "@/components/layout/MobileStickyBar";
import VideoModal from "@/components/ui/VideoModal";
import { FEATURED_STORY } from "@/data/cinematography";

export default function Home() {
  const [isHeroVideoModalOpen, setIsHeroVideoModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#08080a] text-[#fcfbf7] selection:bg-[#c8a97e]/30 selection:text-[#fcfbf7]">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onWatchFilmClick={() => setIsHeroVideoModalOpen(true)} />

        {/* 2. Introduction Section */}
        <Intro />

        {/* 3. Services Section */}
        <Services />

        {/* 4. Signature Experience Timeline */}
        <Experience />

        {/* 5. Portfolio Section (Masonry & Lightbox) */}
        <Portfolio />

        {/* 6. Featured Wedding Story */}
        <FeaturedStory />

        {/* 7. Cinematography & Films */}
        <Cinematography />

        {/* 8. Why Choose DO Solution */}
        <WhyChooseUs />

        {/* 9. Regional Hubs: Pune, Nashik, Malegaon */}
        <Locations />

        {/* 10. Testimonials */}
        <Testimonials />

        {/* 11. Instagram Social Stories */}
        <InstagramGrid />

        {/* 12. FAQ Section */}
        <FAQ />

        {/* 13. Contact & Booking Engine */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Elements */}
      <FloatingWhatsApp />
      <MobileStickyBar />

      {/* Hero Video Modal (triggered from hero button) */}
      <VideoModal
        isOpen={isHeroVideoModalOpen}
        videoUrl={FEATURED_STORY.videoUrl}
        title="DO Solution & DO Movies — Anuja & Ashish Wedding Highlight"
        couple="Pune, Maharashtra"
        onClose={() => setIsHeroVideoModalOpen(false)}
      />
    </div>
  );
}
