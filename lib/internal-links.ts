import { allServices, getServicesByCategory } from "./services";
import { allLocationLinks } from "./location-silos";
import { siteConfig } from "./site-config";
import type { Service, ServiceCategory } from "./site-config";

export type NavLink = { href: string; label: string };

/** Core sitelink targets Google should treat as primary categories. */
export const sitelinkNav: NavLink[] = [
  { href: "/services/drywall-repair-tampa", label: "Drywall" },
  { href: "/services/fence", label: "Fencing" },
  { href: "/services/painting", label: "Painting" },
  { href: "/services/handyman/general-repairs", label: "Emergency Repairs" },
];

export const primaryHubLinks: NavLink[] = [
  { href: "/services/handyman", label: "Handyman Services" },
  { href: "/services/painting", label: "Painting Services" },
  { href: "/services/fence", label: "Fence Contractor" },
  { href: "/services/drywall-repair-tampa", label: "Drywall Repair Tampa" },
  { href: "/handyman-westchase-fl", label: "Handyman Westchase FL" },
  { href: "/handyman-carrollwood-fl", label: "Handyman Carrollwood FL" },
  { href: "/service-areas", label: "All Service Areas" },
  { href: "/contact", label: "Free Estimate" },
];

export const popularServiceLinks: NavLink[] = [
  { href: "/services/drywall-repair-tampa", label: "Drywall Repair Tampa" },
  { href: "/services/handyman/drywall-repair", label: "Drywall Patching" },
  { href: "/services/handyman/furniture-assembly", label: "Furniture Assembly" },
  { href: "/services/handyman/tv-mounting", label: "TV Mounting" },
  { href: "/services/handyman/fan-installation", label: "Ceiling Fan Installation" },
  { href: "/services/handyman/general-repairs", label: "Emergency Home Repairs" },
  { href: "/services/painting/interior-painting", label: "Interior Painting" },
  { href: "/services/painting/exterior-painting", label: "Exterior Painting" },
  { href: "/services/fence/fence-installation", label: "Fence Installation" },
  { href: "/services/fence/fence-repairs-maintenance", label: "Fence Repair" },
  { href: "/services/fence/privacy-fence-installation", label: "Privacy Fence" },
  { href: "/services/handyman/plumbing-fixture-installation", label: "Fixture Installation" },
];

export function getRelatedServices(
  category: ServiceCategory,
  slug: string,
  limit = 6
): { href: string; label: string; description: string }[] {
  const siblings = getServicesByCategory(category).filter((s) => s.slug !== slug);
  const extras = allServices.filter((s) => s.category !== category && s.slug !== slug);
  const pool = [...siblings, ...extras];
  return pool.slice(0, limit).map((s) => ({
    href: `/services/${s.category}/${s.slug}`,
    label: s.name,
    description: s.shortDescription,
  }));
}

export function getRelatedLocations(currentPath?: string, limit = 8): NavLink[] {
  return allLocationLinks
    .filter((area) => area.href !== currentPath)
    .slice(0, limit)
    .map((area) => ({
      href: area.href,
      label: `Handyman ${area.label} FL`,
    }));
}

export function serviceToHref(service: Service): string {
  return `/services/${service.category}/${service.slug}`;
}

export function locationHrefForCity(city: string): string | undefined {
  const normalized = city.toLowerCase().replace(/['']/g, "'");
  const match = allLocationLinks.find((area) => {
    const label = area.label.toLowerCase().replace(/['']/g, "'");
    return label === normalized || normalized.includes(label) || label.includes(normalized);
  });
  return match?.href;
}

export function organizationCitation(): string {
  return `${siteConfig.shortName} is a licensed and insured mobile handyman provider based in ${siteConfig.foundingLocation} offering 24/7 emergency repairs, drywall patching, painting, and fence contracting across Tampa Bay.`;
}
