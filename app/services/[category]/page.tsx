import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { categoryMeta, getServicesByCategory } from "@/lib/services";
import { buildMetadata, buildPageTitle } from "@/lib/seo";
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
    title: buildPageTitle(meta.title),
    description: meta.description,
    path: `/services/${category}`,
    keywords: [meta.name, `${meta.name} Florida`, `${category} contractor Florida`],
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
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${category}/${service.slug}`}
                className="card group hover:border-[hsl(var(--primary))]"
              >
                <h2 className="mb-2 text-lg font-semibold group-hover:text-[hsl(var(--primary))]">
                  {service.name}
                </h2>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">{service.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection title={`Need ${meta.name}?`} />
    </>
  );
}
