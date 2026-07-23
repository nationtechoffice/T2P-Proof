import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { FAQSection } from "@/components/faq-section";
import { categoryMeta, getAllServiceSlugs, getService } from "@/lib/services";
import { buildMetadata, buildLocalTitle, buildPageTitle } from "@/lib/seo";
import { getLocalPageDescription, getLocalPageTitle } from "@/lib/local-seo";
import type { ServiceCategory } from "@/lib/site-config";
import { JsonLd, breadcrumbSchema, serviceSchema, faqSchema, speakableSchema } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site-config";

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
    title: buildLocalTitle(getLocalPageTitle(service.name)),
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
          faqSchema(service.faqs),
          speakableSchema(pageUrl, [".service-definition", ".service-description"]),
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
            <p className="service-definition mb-6 text-xl leading-relaxed text-[hsl(var(--muted-foreground))]">
              {service.shortDescription} Serving Westchase, Carrollwood, Citrus Park, Hillsborough County &amp; Tampa Bay — open 24/7.
            </p>
            <div className="service-description mb-8 rounded-xl bg-[hsl(var(--muted))] p-6">
              <h2 className="mb-3 text-xl font-bold">About Our {service.name} Service</h2>
              <p className="leading-relaxed text-[hsl(var(--muted-foreground))]">{service.description}</p>
            </div>
            <div className="mb-8 rounded-xl border border-[hsl(var(--border))] p-6">
              <h2 className="mb-3 text-xl font-bold">Why Choose Handyman Pros Florida?</h2>
              <ul className="space-y-2 text-[hsl(var(--muted-foreground))]">
                <li>✓ Licensed and insured professionals</li>
                <li>✓ Free, no-obligation estimates</li>
                <li>✓ Serving all of Florida</li>
                <li>✓ Satisfaction guaranteed on every job</li>
                <li>✓ Same-day service available</li>
              </ul>
            </div>
            <div className="text-center">
              <a href={`tel:${siteConfig.phoneTel}`} className="btn-primary mr-4">
                Call {siteConfig.phone}
              </a>
              <a href="/contact" className="btn-secondary">
                Request Free Estimate
              </a>
            </div>
          </div>
        </div>
      </article>
      <FAQSection faqs={service.faqs} title={`${service.name} FAQ`} />
      <CTASection title={`Ready for ${service.name}?`} />
    </>
  );
}
