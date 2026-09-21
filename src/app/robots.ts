import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${SITE_CONFIG.seo.siteUrl}/sitemap.xml`,
  };
}
