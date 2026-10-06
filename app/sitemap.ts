import type { MetadataRoute } from "next";
import { buildSitemapEntries } from "@/lib/sitemap-document";
import { siteConfig } from "@/lib/site-config";

/**
 * Prerender once at build. The URL list is in-memory (no fetch), and
 * buildSitemapEntries skips a bad URL instead of throwing. A cold Hostinger
 * Node process was the intermittent 500: hcdn does not cache this route
 * while Cache-Control is max-age=0. postbuild also copies the XML into
 * public/sitemap.xml so the edge can serve it without waiting on Node.
 */
export const dynamic = "force-static";
export const revalidate = false;

const BUILT_AT = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  try {
    return buildSitemapEntries(BUILT_AT);
  } catch (error) {
    console.error("[sitemap] entry build failed; returning homepage only", error);
    return [
      {
        url: siteConfig.url,
        lastModified: BUILT_AT,
        changeFrequency: "weekly",
        priority: 1,
      },
    ];
  }
}
