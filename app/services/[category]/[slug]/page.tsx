import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { EntityFacts } from "@/components/entity-facts";
import { FAQSection } from "@/components/faq-section";
import { RelatedContent } from "@/components/related-content";
import { categoryMeta, getAllServiceSlugs, getService } from "@/lib/services";
import { buildMetadata, buildLocalTitle } from "@/lib/seo";
import { getLocalPageDescription } from "@/lib/local-seo";
import type { ServiceCategory } from "@/lib/site-config";
import { JsonLd, breadcrumbSchema, serviceSchema, faqSchema, speakableSchema } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site-config";
import { buildServiceFaqs, entityStatement } from "@/lib/geo-content";
import { getRelatedLocations } from "@/lib/internal-links";

export function generateStaticParams() {
  return getAllServiceSlugs();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const service = getService(category as ServiceCategory, slug);
  if (!service) return {};
  return buildMetadata({
    title: buildLocalTitle(`${service.name} in Tampa, FL`),
    description: getLocalPageDescription(service.shortDescription, service.name),
    path: `/services/${category}/${slug}`,
    keywords: [...service.keywords, `${service.name} Tampa`, `${service.name} Westchase`, `${service.name} Hillsborough County`],
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const service = getService(category as ServiceCategory, slug);
  if (!service) notFound();

  const catMeta = categoryMeta[service.category];
  const pageUrl = `${siteConfig.url}/services/${category}/${slug}`;
  const faqs = buildServiceFaqs(service);
  const nearby = getRelatedLocations(undefined, 6);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Services", url: `${siteConfig.url}/services` },
            { name: catMeta.name, url: `${siteConfig.url}/services/${category}` },
            { name: service.name, url: pageUrl },
          ]),
          serviceSchema({
            name: service.name,
            description: service.description,
            url: pageUrl,
            category: catMeta.name,
          }),
          faqSchema(faqs),
          speakableSchema(pageUrl, [".service-definition", ".service-description", ".entity-definition"]),
        ]}
      />
      <Breadcrumbs
        items={[
          { label: "Services", href: "/services" },
          { label: catMeta.name, href: `/services/${category}` },
          { label: service.name },
        ]}
      />
      <article className="section-padding">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold">{service.name} in Tampa, FL</h1>
            <p className="service-definition entity-definition mb-6 text-xl leading-relaxed text-[hsl(var(--muted-foreground))]">
              {entityStatement} This page covers {service.name.toLowerCase()} for Westchase, Carrollwood, Citrus Park, Hillsborough County, and Tampa Bay — open 24/7.
            </p>
            <div className="service-description mb-8 rounded-xl bg-[hsl(var(--muted))] p-6">
              <h2 className="mb-3 text-xl font-bold">About Our {service.name} Service</h2>
              <p className="leading-relaxed text-[hsl(var(--muted-foreground))]">{service.description}</p>
              <p className="mt-4 leading-relaxed text-[hsl(var(--muted-foreground))]">
                {service.shortDescription} Licensed {service.name.toLowerCase()} from Handyman Pros FL includes a free estimate, transparent $$ pricing, and a walkthrough before we leave.
              </p>
            </div>
            <div className="mb-8 rounded-xl border border-[hsl(var(--border))] p-6">
              <h2 className="mb-3 text-xl font-bold">Why Choose Handyman Pros FL?</h2>
              <ul className="space-y-2 text-[hsl(var(--muted-foreground))]">
                <li>✓ Licensed and insured Tampa Bay professionals</li>
                <li>✓ Free, no-obligation estimates — price range $$</li>
                <li>✓ Serving Westchase, Carrollwood, Citrus Park &amp; Tampa Bay</li>
                <li>✓ Satisfaction guaranteed on every job</li>
                <li>✓ Same-day and 24/7 service available</li>
              </ul>
              <h3 className="mb-2 mt-6 text-lg font-bold">Service areas for {service.name}</h3>
              <ul className="flex flex-wrap gap-2">
                {nearby.map((area) => (
                  <li key={area.href}>
                    <Link href={area.href} className="related-chip">
                      {area.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <EntityFacts compact city="Tampa, FL" />
            <div className="mt-8 flex flex-col gap-3 text-center sm:flex-row sm:justify-center">
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="btn-primary"
                aria-label="Call Handyman Pros Florida Now"
              >
                Call Now {siteConfig.phone}
              </a>
              <Link href="/contact" className="btn-secondary">
                Request Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </article>
      <FAQSection faqs={faqs} title={`${service.name} FAQ`} />
      <RelatedContent
        category={service.category}
        slug={service.slug}
        headingServices={`More ${catMeta.name}`}
      />
      <CTASection title={`Ready for ${service.name}?`} />
    </>
  );
}
