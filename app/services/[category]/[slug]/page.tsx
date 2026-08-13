import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { FAQSection } from "@/components/faq-section";
import { QuoteForm } from "@/components/quote-form";
import { categoryMeta, getAllServiceSlugs, getService, getServiceVoiceH2s } from "@/lib/services";
import { buildMetadata, buildLocalTitle } from "@/lib/seo";
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
  const voiceH2s = getServiceVoiceH2s(service.name);

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
      <article className="section-padding !pb-8 md:!pb-12">
        <div className="container-site">
          <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="mx-auto w-full max-w-3xl lg:mx-0">
              <h1 className="mb-4 text-4xl font-bold">{service.name} in Tampa, FL</h1>
              <p className="service-definition mb-6 text-xl leading-relaxed text-[hsl(var(--muted-foreground))]">
                {service.shortDescription} Serving Westchase, Carrollwood, Citrus Park, Hillsborough County &amp; Tampa Bay — open 24/7.
              </p>
              {/* Above-the-fold quote form on mobile */}
              <div className="mb-8 lg:hidden">
                <QuoteForm compact defaultService={category === "painting" || category === "fence" ? category : "handyman"} />
              </div>
              <div className="service-description mb-8 rounded-xl bg-[hsl(var(--muted))] p-6">
                <h2 className="mb-3 text-xl font-bold">{voiceH2s.about}</h2>
                <p className="leading-relaxed text-[hsl(var(--muted-foreground))]">{service.description}</p>
              </div>
              <div className="mb-8 rounded-xl border border-[hsl(var(--border))] p-6">
                <h2 className="mb-3 text-xl font-bold">{voiceH2s.why}</h2>
                <ul className="space-y-2 text-[hsl(var(--muted-foreground))]">
                  <li>✓ Licensed and insured Tampa Bay professionals</li>
                  <li>✓ Free, no-obligation estimates</li>
                  <li>✓ Serving Westchase, Carrollwood, Citrus Park &amp; Tampa Bay</li>
                  <li>✓ Satisfaction guaranteed on every job</li>
                  <li>✓ Same-day and 24/7 service available</li>
                </ul>
                <p className="mt-4 text-sm text-[hsl(var(--muted-foreground))]">
                  Also see{" "}
                  <a href="/handyman-westchase-fl" className="font-medium text-[hsl(var(--primary))] hover:underline">
                    Handyman Westchase FL
                  </a>
                  ,{" "}
                  <a href="/handyman-carrollwood-fl" className="font-medium text-[hsl(var(--primary))] hover:underline">
                    Handyman Carrollwood FL
                  </a>
                  , and{" "}
                  <a href="/services/drywall-repair-tampa" className="font-medium text-[hsl(var(--primary))] hover:underline">
                    Drywall Repair Tampa
                  </a>
                  .
                </p>
              </div>
              <div className="text-center lg:text-left">
                <a href={`tel:${siteConfig.phoneTel}`} className="btn-primary mr-4">
                  Call {siteConfig.phone}
                </a>
                <a href="/contact" className="btn-secondary">
                  Request Free Estimate
                </a>
              </div>
            </div>
            {/* Desktop: sticky above-the-fold quote form */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <QuoteForm defaultService={category === "painting" || category === "fence" ? category : "handyman"} />
              </div>
            </aside>
          </div>
        </div>
      </article>
      <FAQSection faqs={service.faqs} title={`${service.name} FAQ`} />
      <CTASection title={`Ready for ${service.name}?`} />
    </>
  );
}
