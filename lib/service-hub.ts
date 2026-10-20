import { coreServices } from "./programmatic";
import { briefServicePages } from "./brief-service-pages";

export type ServiceHubLink = {
  href: string;
  label: string;
  description?: string;
  emphasis?: "primary" | "secondary";
};

/** Canonical service links for nav, homepage grid, and /services index. */
export const primaryServiceHubLinks: ServiceHubLink[] = [
  { href: "/services/drywall-repair", label: "Drywall Repair", description: "Patches, texture, and ceiling damage." },
  { href: "/services/ceiling-repair", label: "Ceiling Repair", description: "Stains, cracks, and texture blending." },
  { href: "/services/tv-wall-mounting", label: "TV Wall Mounting", description: "Secure mounts and cable concealment." },
  { href: "/services/furniture-assembly", label: "Furniture Assembly", description: "Flat-pack builds and room rearrangement." },
  { href: "/services/patio-building", label: "Patio Building", description: "Paver patios and patio cover roof panels." },
  { href: "/services/baseboard-trim-installation", label: "Baseboards & Trim", description: "Baseboard, crown, and casing install." },
  { href: "/services/door-installation", label: "Door Installation", description: "Prehung doors and new hardware." },
  { href: "/services/door-repair", label: "Door Repair", description: "Sticking doors, hinges, and weatherstrip." },
  { href: "/services/lock-rekeying-smart-locks", label: "Locks & Smart Locks", description: "Rekeys, smart locks, and doorbells." },
  { href: "/services/cabinet-installation-repair", label: "Cabinets", description: "RTA install, hinges, and drawer slides." },
  { href: "/services/shelving-closet-systems", label: "Shelving & Closets", description: "Closet systems and garage shelving." },
  { href: "/services/deck-repair", label: "Deck Repair", description: "Boards, railings, and step fixes." },
  { href: "/services/blinds-curtain-installation", label: "Blinds & Curtains", description: "Blinds, shades, and curtain rods." },
  { href: "/services/weatherstripping-caulking", label: "Weatherstripping & Caulking", description: "Draft seals and tub recaulk." },
  { href: "/services/painting", label: "Painting", description: "Interior and exterior painting." },
  { href: "/services/tile-installation", label: "Tile Installation", description: "Backsplash and floor-tile sections." },
  { href: "/services/handyman/fan-installation", label: "Ceiling Fans & Fixtures", description: "Fan and light swaps at existing boxes." },
  { href: "/services/plumbing-fixture-repair", label: "Faucets & Toilets", description: "Fixture swaps and leak fixes." },
  { href: "/services/electrical-fixture-installation", label: "Light Fixtures", description: "Like-for-like fixture installation." },
  { href: "/services/flooring-installation", label: "Flooring", description: "LVP, laminate, and section repairs." },
  { href: "/services/gutter-installation", label: "Gutters", description: "Cleaning, repair, and installs." },
  { href: "/services/same-day-handyman", label: "Same-Day Handyman", description: "When same-day routing is open." },
  { href: "/services/fence", label: "Fence Repair", description: "Boards, gates, and short sections.", emphasis: "secondary" },
];

export function allServiceHubLinks(): ServiceHubLink[] {
  const briefBySlug = new Map(briefServicePages.map((p) => [p.slug, p]));
  const coreBySlug = new Map(coreServices.map((s) => [s.slug, s]));

  return primaryServiceHubLinks.map((link) => {
    const slug = link.href.replace(/^\/services\//, "").replace(/^\/services\/handyman\//, "");
    const brief = briefBySlug.get(slug);
    const core = coreBySlug.get(slug);
    if (brief && !link.description) {
      return { ...link, description: brief.intro?.slice(0, 120) };
    }
    if (core && !link.description) {
      return { ...link, description: core.intro.slice(0, 120) };
    }
    return link;
  });
}

export const navServiceLinks: ServiceHubLink[] = allServiceHubLinks();
