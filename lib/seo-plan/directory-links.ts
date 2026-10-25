import { allMarketingPages, projectStories } from "@/lib/marketing-pages";
import { getAllBlogSlugs, getBlogPost } from "@/lib/blog-posts";
import { coreServices, targetLocations } from "@/lib/programmatic";
import { briefServicePages } from "@/lib/brief-service-pages";
import { cityServicePages } from "@/lib/city-service-pages";
import { seoPlanPaths } from "./paths";

export function latestGuidesBlock() {
  const blogSlugs = getAllBlogSlugs().slice(0, 3);
  const blogs = blogSlugs.map((slug) => {
    const post = getBlogPost(slug);
    return {
      href: `/blog/${slug}`,
      label: post?.title ?? slug,
      description: post?.description?.slice(0, 120) ?? "",
    };
  });
  const answers = allMarketingPages
    .filter((p) => p.path.startsWith("/answers/") && p.path !== "/answers")
    .slice(0, 2)
    .map((p) => ({
      href: p.path,
      label: p.h1,
      description: p.metaDescription.slice(0, 120),
    }));
  return [...blogs, ...answers].slice(0, 5);
}

/** Orphan / low-inlink URLs the directory should surface first. */
export const orphanInlinkTargets = [
  { href: "/projects/bathroom-plumbing-drywall-brandon", label: "Project: bathroom plumbing & drywall — Brandon" },
  { href: "/projects/bathroom-tile-grout-carrollwood", label: "Project: bathroom tile & grout — Carrollwood" },
  { href: "/projects/hot-tub-shell-repair-riverview", label: "Project: hot tub shell repair — Riverview" },
  { href: "/projects/marble-tile-shower-clearwater", label: "Project: marble tile shower — Clearwater" },
  { href: "/projects/metallic-epoxy-laundry-lutz", label: "Project: epoxy laundry floor — Lutz" },
  { href: "/projects/porcelain-tile-floor-tampa", label: "Project: porcelain tile floor — Tampa" },
  { href: "/services/sliding-glass-door-repair", label: "Sliding glass door repair" },
];

export function directoryServiceLinks() {
  const core = coreServices.map((s) => ({ href: `/services/${s.slug}`, label: s.name }));
  const brief = briefServicePages.map((p) => ({ href: `/services/${p.slug}`, label: p.name }));
  const seen = new Set<string>();
  return [...core, ...brief].filter((l) => {
    if (seen.has(l.href)) return false;
    seen.add(l.href);
    return true;
  });
}

export function directoryCityLinks() {
  const cities = targetLocations.map((l) => ({
    href: `/locations/${l.slug}`,
    label: l.city,
    county: l.county ?? "Tampa Bay",
  }));
  const extras = [
    { href: "/locations/hillsborough-county", label: "Hillsborough County", county: "Hillsborough" },
    { href: "/locations/pasco-county", label: "Pasco County", county: "Pasco" },
    { href: "/locations/pinellas-county", label: "Pinellas County", county: "Pinellas" },
    { href: "/locations/thonotosassa", label: "Thonotosassa", county: "Hillsborough" },
    { href: "/locations/new-tampa", label: "New Tampa", county: "Hillsborough" },
    { href: "/locations/ybor-city", label: "Ybor City", county: "Hillsborough" },
    { href: "/locations/dade-city", label: "Dade City", county: "Pasco" },
    { href: "/locations/south-tampa", label: "South Tampa", county: "Hillsborough" },
  ];
  return [...cities, ...extras];
}

export function directoryCityServiceMatrix() {
  return cityServicePages.map((p) => ({
    href: p.path,
    label: `${p.serviceLabel} — ${p.cityName}`,
  }));
}

export function directoryAllPathsForSchema() {
  return seoPlanPaths.map((path) => ({
    name: path,
    url: `https://handymanprosflorida.com${path}`,
  }));
}

export function directoryProjectAndEsLinks() {
  const projects = projectStories.map((p) => ({ href: p.path, label: p.h1 }));
  const es = allMarketingPages.filter((p) => p.path.startsWith("/es/")).map((p) => ({ href: p.path, label: p.h1 }));
  return [...projects, ...es];
}
