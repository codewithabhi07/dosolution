export const SITE_CONFIG = {
  brandName: "DO Solution",
  brandSubtitle: "Wedding • Pre-Wedding • Cinematography • Videography",
  tagline: "Capturing Emotions. Creating Memories. Telling Your Story.",
  taglineMarathi: "क्षण अनमोल, आठवणी चिरंतन.",
  proprietor: "Pranav Desai",
  proprietorRole: "Founder & Lead Cinematographer",
  proprietorTagline: "Capturing Emotions. Creating Memories. Telling Your Story.",
  proprietorImage: "/images/pranav-desai.jpg",
  proprietorBio: "Lead Cinematographer & Storyteller behind DO Solution and DO Movies, dedicated to capturing the heart, traditions, and timeless emotion of Pune, Nashik, Malegaon, and destination weddings.",
  phone: "+91 95031 09320",
  phoneDisplay: "9503109320",
  phoneRaw: "+919503109320",
  whatsapp: "919503109320",
  email: "enquiry@dosolution.in",
  locations: ["Pune", "Nashik", "Malegaon"],
  serviceRegion: "Pune, Nashik, Malegaon & Destination Weddings across India",
  facebook: "https://www.facebook.com/dosolution",
  instagram: "https://www.instagram.com/dosolution",
  instagramHandle: "@dosolution",
  youtube: "https://www.youtube.com/c/DOMovies",
  youtubeHandle: "@DOMovies",
  youtubeChannelName: "DO Movies",
  legacyWebsite: "http://www.dosolution.webs.com/",
  defaultWhatsAppMessage:
    "Hello Pranav, I came across DO Solution and would like to enquire about wedding photography/cinematography for Pune / Nashik / Malegaon. I would like to check date availability.",
  
  // Navigation Links
  navLinks: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Experience", href: "#experience" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Films", href: "#films" },
    { label: "Why Us", href: "#why-us" },
    { label: "Locations", href: "#locations" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],

  // Structured Data & SEO
  seo: {
    title: "DO Solution | Wedding Photography & Cinematography in Pune, Nashik & Malegaon",
    description:
      "DO Solution offers premium wedding photography, candid photography, cinematography and cinematic wedding films across Pune, Nashik, Malegaon and Maharashtra. Contact Pranav Desai to plan your wedding story.",
    siteUrl: "https://dosolution.in",
    keywords: [
      "Wedding photographer Pune",
      "Wedding photography Pune",
      "Candid wedding photographer Pune",
      "Wedding cinematography Pune",
      "Wedding photographer Nashik",
      "Wedding photography Nashik",
      "Wedding photographer Malegaon",
      "Wedding cinematography Malegaon",
      "Pre wedding photography Pune",
      "Wedding films Maharashtra",
      "Luxury Indian wedding photography",
      "Maharashtrian wedding cinematography",
      "Pranav Desai wedding films",
    ],
  },
};

export const getWhatsAppLink = (customMessage?: string) => {
  const message = customMessage || SITE_CONFIG.defaultWhatsAppMessage;
  return `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
};

export const getTelLink = () => {
  return `tel:${SITE_CONFIG.phoneRaw}`;
};
