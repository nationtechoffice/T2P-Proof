import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { FAQSection } from "@/components/faq-section";
import { RelatedContent } from "@/components/related-content";
import { categoryMeta, getServicesByCategory } from "@/lib/services";
import { buildMetadata, buildLocalTitle } from "@/lib/seo";
import type { ServiceCategory } from "@/lib/site-config";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site-config";
import { entityStatement } from "@/lib/geo-content";

const validCategories: ServiceCategory[] = ["handyman", "painting", "fence"];

export function generateStaticParams() {
  return validCategories.map((category) => ({ category }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  if (!validCategories.includes(category as ServiceCategory)) return {};
  const meta = categoryMeta[category as ServiceCategory];
  return buildMetadata({
    title: buildLocalTitle(meta.name),
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
  const categoryFaqs = services.flatMap((s) => s.faqs).slice(0, 6);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Services", url: `${siteConfig.url}/services` },
            { name: meta.name, url: `${siteConfig.url}/services/${category}` },
          ]),
          faqSchema(
            categoryFaqs.length
              ? categoryFaqs
              : [{ question: `Do you offer ${meta.name.toLowerCase()} in Tampa?`, answer: entityStatement }]
          ),
        ]}
      />
      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: meta.name }]} />
      <section className="section-padding">
        <div className="container-site">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold">{meta.title}</h1>
            <p className="entity-definition text-lg text-[hsl(var(--muted-foreground))]">{meta.description} {entityStatement}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${category}/${service.slug}`}
                className="card group flex min-h-12 flex-col hover:border-[hsl(var(--primary))]"
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
      {categoryFaqs.length > 0 && <FAQSection faqs={categoryFaqs} title={`${meta.name} FAQ`} />}
      <RelatedContent category={cat} slug="__hub__" headingServices={`Related ${meta.name}`} />
      <CTASection title={`Need ${meta.name}?`} />
    </>
  );
}
