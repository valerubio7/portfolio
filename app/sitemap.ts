import type { MetadataRoute } from "next";

/**
 * Generates sitemap.xml at build time.
 * Update the URL once the real domain is set.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://valerubio.dev";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
