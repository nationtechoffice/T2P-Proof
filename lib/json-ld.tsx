import {
  schemaAreaServed,
  schemaPhone,
  schemaSameAs,
  schemaServicesOffered,
  schemaUrl,
} from "./programmatic";
import { siteConfig } from "./site-config";

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function localBusinessSchema() {
  const hqAddress = `${siteConfig.address.street}, ${siteConfig.address.street2}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`;

  return {
    "@context": "https://schema.org",
    "@type": ["Handyman", "HomeAndConstructionBusiness"],
    "@id": `${siteConfig.url}/#organization`,
    name: "Handyman Pros FL",
    legalName: siteConfig.legalName,
    alternateName: [siteConfig.name, "Handyman Pros"],
    url: schemaUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/images/logo.svg`,
      width: 560,
      height: 100,
    },
    image: [
      `${siteConfig.url}/images/logo.svg`,
      `${siteConfig.url}/images/hero-handyman.png`,
    ],
    description:
      "Single-location Tampa handyman company headquartered in Westchase (ZIP 33626). Licensed technicians dispatch from 12021 Tuscany Bay Dr to homes across Tampa Bay — we do not operate additional branches.",
    telephone: schemaPhone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      name: "Handyman Pros FL Tampa Headquarters",
      streetAddress: `${siteConfig.address.street}, ${siteConfig.address.street2}`,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hqAddress)}`,
    additionalProperty: {
      "@type": "PropertyValue",
      name: "numberOfLocations",
      value: "1",
    },
    areaServed: schemaAreaServed.map((name) => ({
      "@type": "City",
      name,
    })),
    openingHoursSpecification: siteConfig.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.day,
      opens: h.opens,
      closes: h.closes,
    })),
    openingHours: "Mo-Su 00:00-23:59",
    priceRange: "$$",
    serviceType: [...schemaServicesOffered],
    paymentAccepted: "Cash, Credit Card, Check",
    currenciesAccepted: "USD",
    sameAs: [...schemaSameAs],
    knowsAbout: [...schemaServicesOffered],
    slogan: siteConfig.tagline,
    foundingLocation: {
      "@type": "Place",
      name: siteConfig.foundingLocation,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tampa Bay Home Services",
      itemListElement: schemaServicesOffered.map((name, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name,
          areaServed: schemaAreaServed.map((city) => ({ "@type": "City", name: city })),
        },
      })),
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: schemaPhone,
      contactType: "customer service",
      areaServed: ["US-FL", ...schemaAreaServed, siteConfig.primaryZip],
      availableLanguage: ["English", "en-US"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: "en-US",
  };
}

export function servicesItemListSchema(
  items: { name: string; url: string; description?: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Handyman Pros FL Tampa Bay Services",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
      ...(item.description ? { description: item.description } : {}),
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function serviceSchema(service: {
  name: string;
  description: string;
  url: string;
  category: string;
  areaName?: string;
}) {
  const areaName = service.areaName || "Tampa, FL";
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.name} in ${areaName}`,
    description: service.description,
    url: service.url,
    provider: { "@id": `${siteConfig.url}/#organization` },
    brand: { "@id": `${siteConfig.url}/#organization` },
    areaServed: service.areaName
      ? [{ "@type": "City", name: service.areaName }]
      : [
          { "@type": "City", name: "Tampa, FL" },
          { "@type": "City", name: "Westchase, FL" },
          { "@type": "City", name: "Carrollwood, FL" },
          { "@type": "City", name: "Citrus Park, FL" },
          { "@type": "PostalAddress", postalCode: siteConfig.primaryZip, addressRegion: "FL" },
          { "@type": "AdministrativeArea", name: "Hillsborough County, FL" },
          { "@type": "AdministrativeArea", name: "Pinellas County, FL" },
          { "@type": "AdministrativeArea", name: "Pasco County, FL" },
        ],
    serviceType: service.category,
    hoursAvailable: siteConfig.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.day,
      opens: h.opens,
      closes: h.closes,
    })),
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: service.url,
      servicePhone: siteConfig.phoneE164,
      serviceLocation: { "@id": `${siteConfig.url}/#organization` },
    },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function articleSchema(article: {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: article.url,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      "@type": "Organization",
      name: article.author,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/logo.svg`,
      },
    },
    image: `${siteConfig.url}${article.image}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url,
    },
  };
}

export function speakableSchema(url: string, cssSelectors: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": url,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelectors,
    },
  };
}
