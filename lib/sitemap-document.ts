import type { MetadataRoute } from "next";
import { coreServices, targetLocations } from "./programmatic";
import { locationAlternatePaths } from "./location-redirects";
import { getAllSiteUrls, sitemapPriority } from "./sitemap-urls";
import { siteConfig } from "./site-config";
import { workPhotos } from "./work-showcase";
import { galleryForPath } from "./service-galleries";
import { recentWorkPhotos } from "./recent-work";

const CHANGE_FREQUENCIES = new Set([
  "always",
  "hourly",
  "daily",
  "weekly",
  "monthly",
  "yearly",
  "never",
]);

/** Google allows 1,000 images per URL. Stay under that so one gallery cannot blow the document. */
const MAX_IMAGES_PER_URL = 1000;

/** City hubs on /locations, including Valrico, Apollo Beach, and Gulfport. */
export const LOCATION_HUB_COUNT = 29;

/** Aliases that 301 elsewhere. A crawler file must not list them. */
const SITEMAP_FORBIDDEN_PATHS = [
  "/handyman-plant-city-fl",
  "/handyman-westchase-fl",
  "/locations/westchase",
] as const;

function isHttpUrl(value: string): boolean {
  try {
    const parsed = new URL(value);
    return parsed.protocol === "https:" || parsed.protocol === "http:";
  } catch {
    return false;
  }
}

function absoluteImage(src: string | undefined): string | null {
  if (!src || typeof src !== "string") return null;
  const trimmed = src.trim();
  if (!trimmed || trimmed.includes(" ") || /[<>"']/.test(trimmed)) return null;
  const absolute = trimmed.startsWith("http://") || trimmed.startsWith("https://")
    ? trimmed
    : `${siteConfig.url}${trimmed.startsWith("/") ? trimmed : `/${trimmed}`}`;
  return isHttpUrl(absolute) ? absolute : null;
}

function imagesForUrl(url: string): string[] {
  try {
    const path = url.startsWith(siteConfig.url) ? url.slice(siteConfig.url.length) || "/" : "/";
    const recentImages = recentWorkPhotos
      .map((photo) => absoluteImage(photo?.webp))
      .filter((src): src is string => Boolean(src));
    const workImages = [
      ...workPhotos.map((photo) => absoluteImage(photo?.src)),
      ...recentImages,
    ].filter((src): src is string => Boolean(src));
    const homeImages = [
      absoluteImage("/images/work/service-van-tampa.jpg"),
      absoluteImage("/images/work/fence-repair.jpg"),
      absoluteImage("/images/work/drywall-finish-ladder.jpg"),
      absoluteImage("/images/work/porcelain-tile-install.jpg"),
      ...recentImages,
    ].filter((src): src is string => Boolean(src));

    const selected =
      url === siteConfig.url
        ? homeImages
        : url === `${siteConfig.url}/work`
          ? workImages
          : galleryForPath(path)
              .map((photo) => absoluteImage(photo?.src))
              .filter((src): src is string => Boolean(src));

    return [...new Set(selected)].slice(0, MAX_IMAGES_PER_URL);
  } catch (error) {
    console.error("[sitemap] skipped images for", url, error);
    return [];
  }
}

function changeFrequencyFor(url: string): MetadataRoute.Sitemap[number]["changeFrequency"] {
  const frequency = url.includes("/blog/") ? "weekly" : url.includes("/services/") ? "monthly" : "weekly";
  return CHANGE_FREQUENCIES.has(frequency) ? frequency : "weekly";
}

function priorityFor(url: string): number {
  try {
    const value = sitemapPriority(url);
    if (!Number.isFinite(value)) return 0.5;
    return Math.min(1, Math.max(0, Math.round(value * 100) / 100));
  } catch {
    return 0.5;
  }
}

function safeUrls(): string[] {
  try {
    const urls = getAllSiteUrls().filter((url) => typeof url === "string" && isHttpUrl(url));
    return urls.length > 0 ? urls : [siteConfig.url];
  } catch (error) {
    console.error("[sitemap] URL list failed; using homepage only", error);
    return [siteConfig.url];
  }
}

/**
 * In-memory sitemap entries. No network. One bad URL or image is skipped
 * so the route can still return 200 with the rest of the canonical set.
 */
export function buildSitemapEntries(now = new Date()): MetadataRoute.Sitemap {
  const lastModified = Number.isNaN(now.getTime()) ? new Date() : now;
  const entries: MetadataRoute.Sitemap = [];

  for (const url of safeUrls()) {
    try {
      const images = imagesForUrl(url);
      entries.push({
        url,
        lastModified,
        changeFrequency: changeFrequencyFor(url),
        priority: priorityFor(url),
        ...(images.length > 0 ? { images } : {}),
      });
    } catch (error) {
      console.error("[sitemap] skipped URL", url, error);
      entries.push({
        url,
        lastModified,
        changeFrequency: "weekly",
        priority: priorityFor(url),
      });
    }
  }

  if (entries.length === 0) {
    entries.push({
      url: siteConfig.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    });
  }

  return entries;
}

function imageLoc(image: unknown): string | null {
  if (typeof image === "string") return image;
  if (image && typeof image === "object" && "url" in image && typeof image.url === "string") return image.url;
  return null;
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/** Same URL set as the Next sitemap route, written for Hostinger's static file server. */
export function renderSitemapXml(entries: MetadataRoute.Sitemap): string {
  const hasImages = entries.some((entry) => entry.images && entry.images.length > 0);
  const imageNs = hasImages ? ' xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"' : "";
  const body = entries
    .map((entry) => {
      const images = (entry.images ?? [])
        .map((image) => {
          const loc = imageLoc(image);
          if (!loc || !isHttpUrl(loc)) return "";
          return `<image:image>\n<image:loc>${escapeXml(loc)}</image:loc>\n</image:image>`;
        })
        .filter(Boolean)
        .join("\n");
      const modified =
        entry.lastModified instanceof Date
          ? entry.lastModified.toISOString()
          : typeof entry.lastModified === "string"
            ? entry.lastModified
            : "";
      return [
        "<url>",
        `<loc>${escapeXml(entry.url)}</loc>`,
        images,
        modified ? `<lastmod>${escapeXml(modified)}</lastmod>` : "",
        entry.changeFrequency ? `<changefreq>${entry.changeFrequency}</changefreq>` : "",
        typeof entry.priority === "number" ? `<priority>${entry.priority}</priority>` : "",
        "</url>",
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"${imageNs}>\n${body}\n</urlset>\n`;
}

export function pageLocs(xml: string): string[] {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) =>
    match[1].replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&apos;/g, "'")
  );
}

function pathnameOf(url: string): string {
  try {
    return new URL(url).pathname;
  } catch {
    return url;
  }
}

/**
 * The old six-path list still passed if a newer hub (Holiday, Keystone, Westchase)
 * dropped out. This checks the full canonical set from getAllSiteUrls().
 */
export function assertSitemapDocument(xml: string): void {
  if (!xml.startsWith("<?xml")) throw new Error("sitemap is missing the XML declaration");
  if (!xml.includes("<urlset")) throw new Error("sitemap is missing urlset");
  if (xml.includes("<sitemapindex")) throw new Error("sitemap must stay a single urlset, not an index");

  const locs = pageLocs(xml);
  const locSet = new Set(locs);
  const expected = getAllSiteUrls();
  const missing = expected.filter((url) => !locSet.has(url));
  if (missing.length > 0) {
    throw new Error(`sitemap missing ${missing.length} canonical URLs, including ${missing.slice(0, 6).join(", ")}`);
  }

  if (targetLocations.length !== LOCATION_HUB_COUNT) {
    throw new Error(`expected ${LOCATION_HUB_COUNT} location hubs, found ${targetLocations.length}`);
  }

  const hubPaths = targetLocations.map((location) => `/locations/${location.slug}`);
  for (const path of hubPaths) {
    if (!locSet.has(`${siteConfig.url}${path}`)) throw new Error(`sitemap missing location hub ${path}`);
  }
  if (!locSet.has(`${siteConfig.url}/locations/westchase-fl`)) {
    throw new Error("sitemap missing /locations/westchase-fl");
  }
  if (!locSet.has(`${siteConfig.url}/locations/plant-city`)) {
    throw new Error("sitemap missing /locations/plant-city");
  }

  const servicePaths = [
    "/services",
    "/services/handyman",
    "/services/painting",
    "/services/fence",
    ...coreServices.map((service) => `/services/${service.slug}`),
    "/services/handyman/fan-installation",
  ];
  for (const path of servicePaths) {
    if (!locSet.has(`${siteConfig.url}${path}`)) throw new Error(`sitemap missing service page ${path}`);
  }

  const forbidden = new Set<string>([...SITEMAP_FORBIDDEN_PATHS, ...locationAlternatePaths()]);
  for (const path of forbidden) {
    if (locSet.has(`${siteConfig.url}${path}`) || locs.some((url) => pathnameOf(url) === path)) {
      throw new Error(`sitemap listed redirected alias ${path}`);
    }
  }
}
