import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { SITE_CONFIG } from "@/data/site";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#08090d",
};

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.seo.siteUrl),
  title: {
    default: SITE_CONFIG.seo.title,
    template: `%s | ${SITE_CONFIG.brandName}`,
  },
  description: SITE_CONFIG.seo.description,
  keywords: SITE_CONFIG.seo.keywords,
  authors: [{ name: SITE_CONFIG.proprietor, url: SITE_CONFIG.seo.siteUrl }],
  creator: SITE_CONFIG.proprietor,
  publisher: SITE_CONFIG.brandName,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_CONFIG.seo.siteUrl,
    title: SITE_CONFIG.seo.title,
    description: SITE_CONFIG.seo.description,
    siteName: SITE_CONFIG.brandName,
    images: [
      {
        url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "DO Solution Luxury Wedding Photography & Cinematography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.seo.title,
    description: SITE_CONFIG.seo.description,
    images: ["https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_CONFIG.seo.siteUrl,
  },
};

// JSON-LD Structured Data Schema for LocalBusiness / ProfessionalService
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService", "Photographer"],
  "@id": `${SITE_CONFIG.seo.siteUrl}/#organization`,
  name: SITE_CONFIG.brandName,
  alternateName: "DO Solution Wedding Films",
  description: SITE_CONFIG.seo.description,
  url: SITE_CONFIG.seo.siteUrl,
  telephone: SITE_CONFIG.phoneRaw,
  priceRange: "₹₹₹₹",
  founder: {
    "@type": "Person",
    name: SITE_CONFIG.proprietor,
    jobTitle: "Founder & Lead Cinematographer",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Pune",
    },
    {
      "@type": "City",
      name: "Nashik",
    },
    {
      "@type": "City",
      name: "Malegaon",
    },
    {
      "@type": "AdministrativeArea",
      name: "Maharashtra",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Wedding Media Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wedding Photography",
          description: "Candid moments, traditional rituals, family emotions and timeless portraits.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wedding Cinematography",
          description: "Cinematic wedding films created with storytelling, emotion, and motion.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pre-Wedding Photography & Films",
          description: "Couple stories captured across scenic and heritage locations.",
        },
      },
    ],
  },
  sameAs: [
    SITE_CONFIG.instagram,
    SITE_CONFIG.youtube,
    SITE_CONFIG.facebook,
    SITE_CONFIG.legacyWebsite,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${montserrat.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#08080a] text-[#fcfbf7] font-sans selection:bg-[#c8a97e]/30 selection:text-[#fcfbf7] relative">
        <div className="fixed inset-0 pointer-events-none film-grain z-50 opacity-40" />
        {children}
      </body>
    </html>
  );
}
