export const SITE_CONFIG = {
  brandName: "DO Solution",
  brandSubtitle: "Wedding Photography • Cinematography • Films",
  proprietor: "Pranav Desai",
  proprietorRole: "Founder & Lead Cinematographer",
  proprietorTagline: "Capturing Life's Beautiful Stories",
  proprietorImage: "/images/pranav-desai.jpg",
  proprietorBio: "Lead Cinematographer & Storyteller behind DO Solution, dedicated to capturing the heart, traditions, and emotion of Maharashtra and destination weddings.",
  phone: "+91 95031 09320",
  phoneRaw: "+919503109320",
  whatsapp: "919503109320",
  email: "enquiry@dosolution.in",
  locations: ["Pune", "Nashik", "Malegaon"],
  serviceRegion: "Maharashtra & Destination Weddings across India",
  instagram: "https://instagram.com/dosolution",
  instagramHandle: "@dosolution",
  youtube: "https://youtube.com/@dosolution",
  defaultWhatsAppMessage:
    "Hello Pranav, I came across DO Solution and would like to enquire about wedding photography/cinematography. I would like to check availability for my wedding date.",
  
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
