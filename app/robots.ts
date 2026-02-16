import type { MetadataRoute } from "next";

/**
 * Generates robots.txt at build time.
 * Allows all crawlers; points to the sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://valerubio.dev/sitemap.xml",
  };
}
