import Link from "next/link";
import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FAQSection } from "@/components/faq-section";
import { GoogleReviews } from "@/components/google-reviews";
import { JsonLd, breadcrumbSchema, faqSchema, speakableSchema } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site-config";
import { Phone } from "lucide-react";

export const APPROVED_OFFERS = [
  { name: "Small handyman jobs (shelves, curtain rods)", price: 49, href: "/services/same-day-handyman" },
  { name: "Furniture assembly", price: 65, href: "/services/furniture-assembly" },
  { name: "Drywall patch", price: undefined, href: "/services/drywall-repair" },
  { name: "Ceiling fan or light fixture install", price: 79, href: "/services/electrical-fixture-installation" },
  { name: "TV mounting", price: 89, href: "/services/tv-wall-mounting" },
  { name: "Same-day service call", price: 99, href: "/services/same-day-handyman" },
  { name: "Tile repair", price: 199, href: "/services/tile-installation" },
] as const;

export type CityBrief = {
  path: string;
  city: string;
  county: string;
  postalCodes: string[];
  breadcrumb: string;
  h1: string;
  opening: string;
  priceParagraph: string;
  body: ReactNode;
  faqs: { question: string; answer: string }[];
  faqTitle: string;
  ctaTitle: string;
};

export function CityBriefPage({ brief }: { brief: CityBrief }) {
  const url = `${siteConfig.url}${brief.path}`;
  const org = { "@id": `${siteConfig.url}/#organization` };
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: `Handyman service in ${brief.city}, FL`,
    serviceType: "Handyman",
    url,
    provider: org,
    areaServed: [
      {
        "@type": "City",
        name: `${brief.city}, FL`,
        containedInPlace: { "@type": "AdministrativeArea", name: `${brief.county}, FL` },
      },
      ...brief.postalCodes.map((code) => ({ "@type": "PostalCodeSpecification", postalCode: code, addressCountry: "US" })),
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Handyman starting prices in ${brief.city}, FL`,
      itemListElement: APPROVED_OFFERS.map((o) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: o.name },
        ...(o.price != null ? { priceSpecification: { "@type": "PriceSpecification", minPrice: o.price, priceCurrency: "USD" } } : {}),
      })),
    },
  };
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Locations", url: `${siteConfig.url}/locations` },
            { name: brief.breadcrumb, url },
          ]),
          service,
          faqSchema(brief.faqs),
          speakableSchema(url, [".opening", ".faq-answer"]),
        ]}
      />
      <Breadcrumbs items={[{ label: "Locations", href: "/locations" }, { label: brief.breadcrumb }]} />
      <article className="section-padding relative">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold">{brief.h1}</h1>
            <ul className="mb-6 flex flex-wrap gap-2 text-sm font-semibold">
              {["Licensed & Insured", "Free estimates on all jobs", "Hablamos español"].map((chip) => (
                <li key={chip} className="rounded-full border border-[hsl(var(--border))] px-3 py-1">{chip}</li>
              ))}
              <li className="rounded-full border border-[hsl(var(--border))] px-3 py-1">
                <a href={`tel:${siteConfig.phoneTel}`}>{siteConfig.phone}</a>
              </li>
            </ul>
            <p className="opening mb-4 text-xl leading-relaxed">{brief.opening}</p>
            <p className="mb-8 leading-relaxed text-[hsl(var(--muted-foreground))]">{brief.priceParagraph}</p>
            <div className="prose-content city-brief space-y-5 text-base leading-relaxed">{brief.body}</div>
          </div>
        </div>
      </article>
      <section className="container-site mx-auto max-w-3xl pb-6">
        <h2 className="mb-3 text-2xl font-bold">Google reviews</h2>
      </section>
      <GoogleReviews variant="compact" />
      <FAQSection faqs={brief.faqs} title={brief.faqTitle} />
      <section className="section-padding">
        <div className="container-site mx-auto max-w-3xl rounded-3xl bg-[hsl(var(--primary))] p-8 text-center text-white">
          <h2 className="mb-3 text-3xl font-bold">{brief.ctaTitle}</h2>
          <p className="mb-6">
            Free estimates on all jobs. Call {siteConfig.phone} or send the job on the{" "}
            <Link href="/contact" className="underline">form</Link>.
          </p>
          <a href={`tel:${siteConfig.phoneTel}`} className="btn-accent inline-flex items-center gap-2">
            <Phone className="h-4 w-4" /> Call {siteConfig.phone}
          </a>
          <p className="mt-6 text-sm">
            {siteConfig.name} · 12021 Tuscany Bay Dr, Tampa, FL 33626 · {siteConfig.phone}
          </p>
        </div>
      </section>
    </>
  );
}

export function L({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="font-semibold text-[hsl(var(--primary))] hover:underline">
      {children}
    </Link>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="mt-10 text-2xl font-bold">{children}</h2>;
}
export function H3({ children }: { children: ReactNode }) {
  return <h3 className="mt-6 text-xl font-semibold">{children}</h3>;
}
