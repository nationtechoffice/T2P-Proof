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
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/favicon.svg`,
    image: `${siteConfig.url}/images/hero-handyman.png`,
    description: siteConfig.description,
    telephone: siteConfig.phoneTel,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
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
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${siteConfig.address.street}, ${siteConfig.address.street2}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`)}`,
    areaServed: [
      ...siteConfig.counties.map((county) => ({
        "@type": "AdministrativeArea",
        name: county,
      })),
      ...siteConfig.serviceAreas.map((city) => ({
        "@type": "City",
        name: `${city}, FL`,
      })),
    ],
    openingHoursSpecification: siteConfig.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.day,
      opens: h.opens,
      closes: h.closes,
    })),
    openingHours: "Mo-Su 00:00-23:59",
    priceRange: "$$",
    paymentAccepted: "Cash, Credit Card, Check",
    currenciesAccepted: "USD",
    sameAs: Object.values(siteConfig.social),
    knowsAbout: [
      "Handyman Services",
      "Home Repair",
      "Interior Painting",
      "Exterior Painting",
      "Fence Installation",
      "Fence Repair",
      "Drywall Repair",
      "Furniture Assembly",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tampa Bay Home Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Handyman Services in Tampa" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Painting Services in Tampa" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fence Installation in Tampa Bay" } },
      ],
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phoneTel,
      contactType: "customer service",
      areaServed: "US-FL",
      availableLanguage: "English",
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
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/services?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
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
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.name} in Tampa, FL`,
    description: service.description,
    url: service.url,
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: [
      { "@type": "City", name: "Tampa, FL" },
      { "@type": "AdministrativeArea", name: "Hillsborough County, FL" },
      { "@type": "AdministrativeArea", name: "Pinellas County, FL" },
      { "@type": "AdministrativeArea", name: "Pasco County, FL" },
    ],
    serviceType: service.category,
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: service.url,
      servicePhone: siteConfig.phoneTel,
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
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/favicon.svg`,
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
