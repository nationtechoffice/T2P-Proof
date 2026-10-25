import type { CityServicePageData } from "@/lib/city-service-pages";
import { siteConfig } from "@/lib/site-config";

const ORG = `${siteConfig.url}/#organization`;

export function planCityService(input: {
  citySlug: string;
  serviceSlug: string;
  cityName: string;
  cityLabel: string;
  serviceLabel: string;
  title: string;
  description: string;
  h1: string;
  opening: string;
  sections: { h2: string; paras?: string[]; list?: string[] }[];
  faqs: { question: string; answer: string }[];
  county: string;
  areas?: string[];
  zips?: string;
  nearby?: [string, string][];
  related?: [string, string][];
}): CityServicePageData {
  const path = `/locations/${input.citySlug}/${input.serviceSlug}`;
  const hubPath = `/locations/${input.citySlug}`;
  const url = `${siteConfig.url}${path}`;

  return {
    path,
    citySlug: input.citySlug,
    serviceSlug: input.serviceSlug,
    title: input.title,
    description: input.description,
    h1: input.h1,
    opening: input.opening,
    noJob:
      "No job too small for our insured crew. Every visit starts with a free estimate and instant reply, 24/7.",
    priceLine:
      "Free estimate before work starts. Instant reply, 24/7 — call or text for scope and scheduling.",
    chips: ["Insured crew", "Free estimate", "Instant reply, 24/7"],
    cityName: input.cityName,
    cityLabel: input.cityLabel,
    hubPath,
    serviceLabel: input.serviceLabel,
    sections: input.sections,
    areasTitle: `${input.cityName} neighborhoods we cover`,
    areas: input.areas ?? [input.cityName],
    zips: input.zips ?? "",
    nearby: input.nearby ?? [[hubPath, `Handyman in ${input.cityName}`]],
    relatedTitle: `Related in ${input.cityName}`,
    related: input.related ?? [[hubPath, `Handyman ${input.cityName}`]],
    formTitle: `Free estimate — ${input.serviceLabel} in ${input.cityName}`,
    faqTitle: `${input.serviceLabel} FAQ — ${input.cityName}`,
    faqs: input.faqs,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${url}#service`,
        name: input.h1,
        serviceType: input.serviceLabel,
        provider: { "@id": ORG },
        areaServed: {
          "@type": "City",
          name: input.cityLabel,
          containedInPlace: { "@type": "AdministrativeArea", name: `${input.county}, FL` },
        },
        url,
        offers: { "@type": "Offer", description: "Free estimate" },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: input.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Locations", item: `${siteConfig.url}/locations` },
          { "@type": "ListItem", position: 3, name: input.cityLabel, item: `${siteConfig.url}${hubPath}` },
          { "@type": "ListItem", position: 4, name: input.serviceLabel, item: url },
        ],
      },
    ],
  };
}
