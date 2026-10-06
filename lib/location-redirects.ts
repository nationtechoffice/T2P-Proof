import { targetLocations } from "./programmatic";
import { siteConfig } from "./site-config";

const FL_SUFFIX = "-fl";

export type PermanentRedirect = {
  source: string;
  destination: string;
  permanent: true;
};

/**
 * The other /locations form of a hub slug.
 * Canonical `clearwater` → `clearwater-fl`. Canonical `palm-harbor-fl` → `palm-harbor`.
 * The current hub slug stays canonical; this never renames it.
 */
export function alternateLocationSlug(canonicalSlug: string): string {
  if (canonicalSlug.endsWith(FL_SUFFIX)) {
    const bare = canonicalSlug.slice(0, -FL_SUFFIX.length);
    if (!bare || bare.endsWith("-") || bare.includes("/")) {
      throw new Error(`Location slug "${canonicalSlug}" cannot drop ${FL_SUFFIX}`);
    }
    return bare;
  }
  return `${canonicalSlug}${FL_SUFFIX}`;
}

export function canonicalLocationPath(slug: string): string {
  return `/locations/${slug}`;
}

export function canonicalLocationUrl(slug: string): string {
  return `${siteConfig.url}${canonicalLocationPath(slug)}`;
}

/** Paths that must 308 to the hub. Trailing-slash variants included. Not listed in the sitemap. */
export function locationAlternatePaths(locations: { slug: string }[] = targetLocations): string[] {
  return locations.flatMap((location) => {
    const alternate = canonicalLocationPath(alternateLocationSlug(location.slug));
    return [alternate, `${alternate}/`];
  });
}

/**
 * Permanent (308) redirects from each hub's non-canonical /locations form to the live slug.
 * Future hubs are covered because the list is `targetLocations`, not a handwritten city list.
 */
export function locationAlternateRedirects(
  locations: { slug: string }[] = targetLocations,
): PermanentRedirect[] {
  const canonicalSlugs = locations.map((location) => location.slug);
  const canonicalSet = new Set(canonicalSlugs);
  if (canonicalSet.size !== canonicalSlugs.length) {
    const dupes = canonicalSlugs.filter((slug, index) => canonicalSlugs.indexOf(slug) !== index);
    throw new Error(`Duplicate location hub slugs: ${[...new Set(dupes)].join(", ")}`);
  }

  const redirects: PermanentRedirect[] = [];
  const sources = new Set<string>();

  for (const slug of canonicalSlugs) {
    const alternate = alternateLocationSlug(slug);
    if (canonicalSet.has(alternate)) {
      throw new Error(
        `Location slug collision: "${alternate}" is both a hub and the alternate of "${slug}"`,
      );
    }
    const destination = canonicalLocationPath(slug);
    for (const source of [canonicalLocationPath(alternate), `${canonicalLocationPath(alternate)}/`]) {
      if (source.replace(/\/$/, "") === destination) {
        throw new Error(`Location redirect loops on ${source}`);
      }
      if (sources.has(source)) {
        throw new Error(`Duplicate location redirect source ${source}`);
      }
      sources.add(source);
      redirects.push({ source, destination, permanent: true });
    }
  }

  return redirects;
}

/**
 * Fail the build if a generated hub redirect repeats a legacy source, points at another
 * redirect, or sends a canonical hub URL somewhere else.
 */
export function assertLocationRedirectsFit(
  existing: { source: string; destination: string }[],
  generated: PermanentRedirect[] = locationAlternateRedirects(),
): void {
  const existingSources = new Set(existing.map((rule) => rule.source));
  const generatedSources = new Set<string>();
  const canonicalDestinations = new Set<string>();

  for (const rule of generated) {
    const normalizedSource = rule.source.replace(/\/$/, "") || "/";
    if (normalizedSource === rule.destination) {
      throw new Error(`Location redirect loops: ${rule.source} -> ${rule.destination}`);
    }
    if (existingSources.has(rule.source)) {
      throw new Error(`Location redirect collides with existing source ${rule.source}`);
    }
    if (generatedSources.has(rule.source)) {
      throw new Error(`Duplicate location redirect source ${rule.source}`);
    }
    if (existingSources.has(rule.destination)) {
      throw new Error(`Canonical ${rule.destination} is already a redirect source`);
    }
    if (rule.permanent !== true) {
      throw new Error(`Location redirect ${rule.source} must be permanent`);
    }
    if (rule.destination.endsWith("/")) {
      throw new Error(`Canonical destination must not have a trailing slash: ${rule.destination}`);
    }
    generatedSources.add(rule.source);
    canonicalDestinations.add(rule.destination);
  }

  for (const destination of canonicalDestinations) {
    if (generatedSources.has(destination) || generatedSources.has(`${destination}/`)) {
      throw new Error(`Canonical ${destination} is also a generated redirect source`);
    }
  }

  for (const rule of existing) {
    if (generatedSources.has(rule.destination)) {
      throw new Error(
        `Existing redirect ${rule.source} points at alternate ${rule.destination}, which would chain`,
      );
    }
    if ((rule.source.replace(/\/$/, "") || "/") === (rule.destination.replace(/\/$/, "") || "/")) {
      throw new Error(`Existing redirect loops: ${rule.source}`);
    }
  }
}
