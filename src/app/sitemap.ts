import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_CONFIG.seo.siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
