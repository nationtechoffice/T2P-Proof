import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { FAQSection } from "@/components/faq-section";
import { HqDispatch } from "@/components/hq-dispatch";
import { categoryMeta, getAllServiceSlugs, getRelatedServices, getService } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";
import { getLocalPageDescription, getLocalPageTitle, formatFullAddress } from "@/lib/local-seo";
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
    title: getLocalPageTitle(service.name),
    description: getLocalPageDescription(service.shortDescription, service.name),
    path: `/services/${category}/${slug}`,
    keywords: [...service.keywords.slice(0, 6), `${service.name} Tampa`],
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
  const related = getRelatedServices(service);
  const hq = formatFullAddress();
  const serviceLower = service.name.toLowerCase();
  const faqs = [
    ...service.faqs,
    {
      question: `Do you offer ${service.name} from a Tampa office?`,
      answer: `Yes. ${service.name} is dispatched from our only headquarters at ${hq} in Westchase. We do not operate extra branches. Call ${siteConfig.phone} to schedule.`,
    },
    {
      question: `Can I book ${service.name} in Westchase or Carrollwood?`,
      answer: `Yes. Our Tampa crew handles ${serviceLower} across Westchase, Carrollwood, Citrus Park, Town 'n' Country, and greater Tampa Bay. Same-day visits are often available when the route allows.`,
    },
  ];

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

            <div className="mb-8 space-y-4 leading-relaxed text-[hsl(var(--muted-foreground))]">
              <h2 className="text-xl font-bold text-[hsl(var(--foreground))]">
                How {service.name} works from our Tampa HQ
              </h2>
              <p>
                Call {siteConfig.phone} to describe the {serviceLower} job. We quote clearly, then a licensed technician
                leaves our only location at {hq} and comes to your home. You are not routed to a second office or a
                franchise branch — Handyman Pros FL is one Tampa crew.
              </p>
              <p>
                Most {serviceLower} visits in Westchase, Carrollwood, Town &apos;n&apos; Country, and nearby Tampa
                neighborhoods can be scheduled same week, and often the same day when the truck is already in the area.
                Florida humidity, stucco, and HOA rules are part of how we plan materials and finish work for this
                service.
              </p>
              <p>
                If {service.name.toLowerCase()} needs a permit or a specialist trade beyond handyman scope, we say so
                before work starts. Otherwise we complete the punch list, protect floors and furnishings, and walk the
                result with you before we leave.
              </p>
            </div>

            <div className="mb-8 rounded-xl border border-[hsl(var(--border))] p-6">
              <h2 className="mb-3 text-xl font-bold">Why Choose Handyman Pros FL?</h2>
              <ul className="space-y-2 text-[hsl(var(--muted-foreground))]">
                <li>✓ Licensed and insured Tampa Bay professionals</li>
                <li>✓ Free, no-obligation estimates</li>
                <li>✓ One Westchase / Tampa headquarters — we come to you</li>
                <li>✓ Satisfaction guaranteed on every job</li>
                <li>✓ Same-day and 24/7 service available</li>
              </ul>
              <p className="mt-4 text-sm text-[hsl(var(--muted-foreground))]">
                Also see{" "}
                <Link href="/locations/westchase-fl" className="font-medium text-[hsl(var(--primary))] hover:underline">
                  Handyman Westchase FL
                </Link>
                ,{" "}
                <Link href="/handyman-carrollwood-fl" className="font-medium text-[hsl(var(--primary))] hover:underline">
                  Handyman Carrollwood FL
                </Link>
                , and{" "}
                <Link href="/services/drywall-repair" className="font-medium text-[hsl(var(--primary))] hover:underline">
                  Drywall Repair Tampa
                </Link>
                .
              </p>
            </div>

            <div className="mb-8">
              <h2 className="mb-3 text-xl font-bold">Related {catMeta.name}</h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {related.map((item) => (
                  <li key={`${item.category}-${item.slug}`}>
                    <Link
                      href={`/services/${item.category}/${item.slug}`}
                      className="block rounded-xl border border-[hsl(var(--border))] bg-white/70 px-4 py-3 text-sm font-medium hover:border-[hsl(var(--accent))]"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <HqDispatch />

            <div className="mt-8 text-center">
              <a href={`tel:${siteConfig.phoneTel}`} className="btn-primary mr-4">
                Call {siteConfig.phone}
              </a>
              <Link href="/contact" className="btn-secondary">
                Request Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </article>
      <FAQSection faqs={faqs} title={`${service.name} FAQ`} />
      <CTASection title={`Ready for ${service.name}?`} />
    </>
  );
}
