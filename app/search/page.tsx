import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { allServices } from "@/lib/services";
import { allLocationLinks } from "@/lib/location-silos";
import { blogPosts } from "@/lib/blog-posts";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Search Handyman Pros FL | Tampa Services",
  description: "Search Handyman Pros FL services, Tampa neighborhoods, and home repair guides. Call (656) 205-3185 for 24/7 help.",
  path: "/search",
  noindex: true,
});

function matchesQuery(haystack: string, query: string): boolean {
  return haystack.toLowerCase().includes(query);
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const query = q.trim().toLowerCase();

  const services = query
    ? allServices.filter((s) =>
        matchesQuery(`${s.name} ${s.shortDescription} ${s.keywords.join(" ")}`, query)
      )
    : allServices.slice(0, 12);

  const areas = query
    ? allLocationLinks.filter((a) => matchesQuery(a.label, query))
    : allLocationLinks;

  const posts = query
    ? blogPosts.filter((p) => matchesQuery(`${p.title} ${p.excerpt} ${p.tags.join(" ")}`, query))
    : blogPosts.slice(0, 6);

  return (
    <>
      <Breadcrumbs items={[{ label: "Search" }]} />
      <section className="section-padding">
        <div className="container-site mx-auto max-w-3xl">
          <h1 className="mb-4 text-4xl font-bold">Search Tampa home services</h1>
          <p className="mb-6 text-[hsl(var(--muted-foreground))]">
            Find drywall, fencing, painting, emergency repairs, and neighborhood pages. Or call{" "}
            <a href={`tel:${siteConfig.phoneTel}`} className="font-semibold text-[hsl(var(--accent))]" aria-label="Call Handyman Pros Florida Now">
              {siteConfig.phone}
            </a>
            .
          </p>
          <form action="/search" method="get" className="mb-10 flex gap-3">
            <label htmlFor="q" className="sr-only">
              Search the site
            </label>
            <input
              id="q"
              name="q"
              defaultValue={q}
              placeholder="e.g. drywall repair Westchase"
              className="min-h-12 w-full rounded-xl border border-[hsl(var(--border))] px-4"
            />
            <button type="submit" className="btn-primary shrink-0">
              Search
            </button>
          </form>

          <h2 className="mb-3 text-2xl font-bold">Services</h2>
          <ul className="mb-10 grid gap-2">
            {services.map((service) => (
              <li key={`${service.category}-${service.slug}`}>
                <Link href={`/services/${service.category}/${service.slug}`} className="related-link">
                  {service.name}
                </Link>
              </li>
            ))}
            {services.length === 0 && <li>No matching services. Try drywall, fence, or painting.</li>}
          </ul>

          <h2 className="mb-3 text-2xl font-bold">Service areas</h2>
          <ul className="mb-10 grid gap-2 sm:grid-cols-2">
            {areas.map((area) => (
              <li key={area.href}>
                <Link href={area.href} className="related-link">
                  Handyman {area.label} FL
                </Link>
              </li>
            ))}
          </ul>

          <h2 className="mb-3 text-2xl font-bold">Guides</h2>
          <ul className="grid gap-2">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="related-link">
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
