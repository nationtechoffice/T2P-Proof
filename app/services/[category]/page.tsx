import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { QuoteForm } from "@/components/quote-form";
import { categoryMeta, getServicesByCategory } from "@/lib/services";
import { buildMetadata, buildLocalTitle } from "@/lib/seo";
import type { ServiceCategory } from "@/lib/site-config";
import { JsonLd, breadcrumbSchema } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site-config";

const validCategories: ServiceCategory[] = ["handyman", "painting", "fence"];

export function generateStaticParams() {
  return validCategories.map((category) => ({ category }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  if (!validCategories.includes(category as ServiceCategory)) return {};
  const meta = categoryMeta[category as ServiceCategory];
  return buildMetadata({
    title: buildLocalTitle(meta.title),
    description: meta.description,
    path: `/services/${category}`,
    keywords: [meta.name, `${meta.name} Tampa`, `${meta.name} Westchase`, `${meta.name} Hillsborough County`],
  });
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  if (!validCategories.includes(category as ServiceCategory)) notFound();

  const cat = category as ServiceCategory;
  const meta = categoryMeta[cat];
  const services = getServicesByCategory(cat);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Services", url: `${siteConfig.url}/services` },
          { name: meta.name, url: `${siteConfig.url}/services/${category}` },
        ])}
      />
      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: meta.name }]} />
      <section className="section-padding">
        <div className="container-site">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold">{meta.title}</h1>
            <p className="text-lg text-[hsl(var(--muted-foreground))]">{meta.description}</p>
            <h2 className="mt-8 text-2xl font-bold">
              {cat === "handyman"
                ? "Who is the most reliable handyman for home repairs in Florida?"
                : cat === "painting"
                  ? "How much does professional painting cost in Tampa?"
                  : "How much does fence installation cost in Tampa Bay?"}
            </h2>
            <p className="mt-3 text-[hsl(var(--muted-foreground))]">
              Browse our {meta.name.toLowerCase()} below, then call {siteConfig.phone} or use Get a Quote for a free estimate.
            </p>
          </div>
          <div className="mb-10 lg:hidden">
            <QuoteForm
              compact
              defaultService={cat === "painting" || cat === "fence" ? cat : "handyman"}
              title="Get a Quote"
            />
          </div>
          <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${category}/${service.slug}`}
                  className="card group hover:border-[hsl(var(--primary))]"
                >
                  <h3 className="mb-2 text-lg font-semibold group-hover:text-[hsl(var(--primary))]">
                    {service.name}
                  </h3>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">{service.shortDescription}</p>
                </Link>
              ))}
            </div>
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <QuoteForm
                  defaultService={cat === "painting" || cat === "fence" ? cat : "handyman"}
                  title="Get a Quote"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>
      <CTASection title={`Need ${meta.name}?`} />
    </>
  );
}
