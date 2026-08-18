import Link from "next/link";
import type { ServiceCategory } from "@/lib/site-config";
import {
  getRelatedLocations,
  getRelatedServices,
  popularServiceLinks,
  sitelinkNav,
} from "@/lib/internal-links";

interface RelatedContentProps {
  category?: ServiceCategory;
  slug?: string;
  currentPath?: string;
  headingServices?: string;
  headingAreas?: string;
}

export function RelatedContent({
  category,
  slug,
  currentPath,
  headingServices = "Related Services",
  headingAreas = "Service Areas",
}: RelatedContentProps) {
  const services =
    category && slug
      ? getRelatedServices(category, slug, 6)
      : popularServiceLinks.slice(0, 8).map((link) => ({
          href: link.href,
          label: link.label,
          description: "",
        }));
  const areas = getRelatedLocations(currentPath, 8);

  return (
    <nav
      aria-label="Related services and service areas"
      className="section-padding relative pt-8"
    >
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold">{headingServices}</h2>
            <ul className="grid gap-2 sm:grid-cols-2">
              {services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="related-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold">{headingAreas}</h2>
            <ul className="grid gap-2 sm:grid-cols-2">
              {areas.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="related-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ul className="mt-8 flex flex-wrap gap-2">
          {sitelinkNav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="related-chip">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
