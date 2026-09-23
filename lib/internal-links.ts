import { coreServices, targetLocations } from "@/lib/programmatic";
import { allLocationLinks } from "@/lib/location-silos";

/** Hub links that pass PageRank between services ↔ cities (local SEO siloing). */
export const authorityHubLinks = {
  home: { href: "/", label: "Tampa Handyman" },
  services: { href: "/services", label: "All Handyman Services" },
  fence: { href: "/services/fence", label: "Fence Installation & Repair Tampa" },
  drywall: { href: "/services/drywall-repair", label: "Drywall Repair Tampa" },
  tvMount: { href: "/services/tv-wall-mounting", label: "TV Mounting Tampa" },
  fans: { href: "/services/handyman/fan-installation", label: "Ceiling Fan Installation Tampa" },
  tile: { href: "/services/tile-installation", label: "Tile Installation Tampa" },
  furniture: { href: "/services/furniture-assembly", label: "Furniture Assembly Tampa" },
  sameDay: { href: "/services/same-day-handyman", label: "Same-Day Handyman Tampa" },
  locations: { href: "/locations", label: "Tampa Bay Service Areas" },
  tampa: { href: "/locations/tampa", label: "Handyman Tampa FL" },
  westchase: { href: "/locations/westchase-fl", label: "Handyman Westchase FL" },
  carrollwood: { href: "/handyman-carrollwood-fl", label: "Handyman Carrollwood FL" },
  clearwater: { href: "/locations/clearwater", label: "Handyman Clearwater FL" },
  stPete: { href: "/locations/st-petersburg", label: "Handyman St. Petersburg FL" },
  oldsmar: { href: "/locations/oldsmar-fl", label: "Handyman Oldsmar FL" },
  safetyHarbor: { href: "/locations/safety-harbor-fl", label: "Handyman Safety Harbor FL" },
  palmHarbor: { href: "/locations/palm-harbor-fl", label: "Handyman Palm Harbor FL" },
  townNCountry: { href: "/locations/town-n-country-fl", label: "Handyman Town n Country FL" },
} as const;

/** Adjacent city pages so Bingbot can walk from crawled hubs to newer URLs. */
const NEARBY_LOCATION_SLUGS: Record<string, readonly string[]> = {
  tampa: ["westchase-fl", "town-n-country-fl", "citrus-park-fl", "clearwater"],
  clearwater: ["safety-harbor-fl", "dunedin-fl", "oldsmar-fl", "st-petersburg"],
  "st-petersburg": ["clearwater", "tampa"],
  "westchase-fl": ["oldsmar-fl", "citrus-park-fl", "town-n-country-fl", "tampa"],
  "palm-harbor-fl": ["oldsmar-fl", "dunedin-fl", "tarpon-springs-fl", "safety-harbor-fl"],
  "oldsmar-fl": ["westchase-fl", "safety-harbor-fl", "palm-harbor-fl", "town-n-country-fl", "citrus-park-fl", "dunedin-fl"],
  "dunedin-fl": ["safety-harbor-fl", "palm-harbor-fl", "clearwater", "oldsmar-fl"],
  "town-n-country-fl": ["westchase-fl", "oldsmar-fl", "citrus-park-fl", "tampa"],
  "citrus-park-fl": ["westchase-fl", "oldsmar-fl", "town-n-country-fl", "tampa"],
  "safety-harbor-fl": ["oldsmar-fl", "clearwater", "dunedin-fl", "palm-harbor-fl"],
  "tarpon-springs-fl": ["palm-harbor-fl", "new-port-richey-fl", "dunedin-fl"],
  "new-port-richey-fl": ["tarpon-springs-fl", "palm-harbor-fl"],
};

export function nearbyLocationLinks(slug: string) {
  const slugs = NEARBY_LOCATION_SLUGS[slug] ?? [];
  return slugs.flatMap((near) => {
    const location = targetLocations.find((item) => item.slug === near);
    return location ? [{ href: `/locations/${location.slug}`, label: `Handyman ${location.city} FL` }] : [];
  });
}

export function coreServiceLinks(cityLabel?: string) {
  return [
    ...coreServices.map((service) => ({
      href: `/services/${service.slug}`,
      label: cityLabel ? `${service.name} in ${cityLabel}` : service.name,
    })),
    {
      href: "/services/fence",
      label: cityLabel ? `Fence Repair in ${cityLabel}` : "Fence Installation & Repair",
    },
    {
      href: "/services/painting",
      label: cityLabel ? `Painting in ${cityLabel}` : "Painting Services",
    },
  ];
}

export function tampaBayLocationLinks() {
  return targetLocations.map((location) => ({
    href: `/locations/${location.slug}`,
    label: `Handyman ${location.city} FL`,
  }));
}

export function siloLocationLinks() {
  return allLocationLinks.map((area) => ({
    href: area.href,
    label: `Handyman ${area.label} FL`,
  }));
}

/** Map free-text popular-service labels to real URLs when possible. */
export function linkifyServiceLabel(label: string): { href: string; label: string } | null {
  const lower = label.toLowerCase();
  if (lower.includes("tv") || lower.includes("mount")) {
    return { href: "/services/tv-wall-mounting", label };
  }
  if (lower.includes("drywall") || lower.includes("wall repair")) {
    return { href: "/services/drywall-repair", label };
  }
  if (lower.includes("fence")) {
    return { href: "/services/fence", label };
  }
  if (lower.includes("door")) {
    return { href: "/services/door-repair", label };
  }
  if (lower.includes("furniture") || lower.includes("assembly")) {
    return { href: "/services/furniture-assembly", label };
  }
  if (lower.includes("same-day") || lower.includes("same day")) {
    return { href: "/services/same-day-handyman", label };
  }
  if (lower.includes("fan")) {
    return { href: "/services/handyman/fan-installation", label };
  }
  if (lower.includes("tile") || lower.includes("backsplash") || lower.includes("grout")) {
    return { href: "/services/tile-installation", label };
  }
  if (lower.includes("electrical") || lower.includes("fixture")) {
    return { href: "/services/electrical-fixture-installation", label };
  }
  if (lower.includes("plumb") || lower.includes("faucet")) {
    return { href: "/services/plumbing-fixture-repair", label };
  }
  if (lower.includes("paint")) {
    return { href: "/services/painting", label };
  }
  if (lower.includes("handyman")) {
    return { href: "/services/handyman", label };
  }
  return null;
}

export const fenceCategoryLinks = [
  { href: "/services/fence", label: "Fence Services Tampa" },
  { href: "/services/fence/wood-fence-installation", label: "Wood Fence Installation" },
  { href: "/services/fence/fence-repairs-maintenance", label: "Fence Repair & Maintenance" },
  { href: "/services/fence/vinyl-fence-installation", label: "Vinyl Fence Installation" },
  { href: "/services/fence/privacy-fence-installation", label: "Privacy Fence Installation" },
] as const;
