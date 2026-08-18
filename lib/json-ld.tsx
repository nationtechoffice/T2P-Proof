import { schemaAreaServedCities } from "./location-silos";
import { sitelinkNav } from "./internal-links";
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

const napAddress = {
  "@type": "PostalAddress",
  streetAddress: `${siteConfig.address.street}, ${siteConfig.address.street2}`,
  addressLocality: siteConfig.address.city,
  addressRegion: siteConfig.address.state,
  postalCode: siteConfig.address.zip,
  addressCountry: siteConfig.address.country,
};

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.legalName,
    legalName: siteConfig.legalName,
    alternateName: [siteConfig.name, "Handyman Pros", "Handyman Pros Florida"],
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/images/logo.svg`,
      width: 560,
      height: 100,
    },
    image: [
      `${siteConfig.url}/images/hero-handyman.png`,
      `${siteConfig.url}/images/logo.svg`,
    ],
    description: siteConfig.description,
    telephone: siteConfig.phoneE164,
    email: siteConfig.email,
    priceRange: "$$",
    address: napAddress,
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${siteConfig.address.street}, ${siteConfig.address.street2}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`
    )}`,
    areaServed: [
      {
        "@type": "Place",
        name: `ZIP ${siteConfig.primaryZip}`,
        address: {
          "@type": "PostalAddress",
          streetAddress: `${siteConfig.address.street}, ${siteConfig.address.street2}`,
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.state,
          postalCode: siteConfig.primaryZip,
          addressCountry: "US",
        },
      },
      ...schemaAreaServedCities.map((city) => ({
        "@type": "City",
        name: `${city}, FL`,
      })),
      ...siteConfig.counties.map((county) => ({
        "@type": "AdministrativeArea",
        name: `${county}, FL`,
      })),
    ],
    openingHoursSpecification: siteConfig.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.day,
      opens: h.opens,
      closes: h.closes,
    })),
    openingHours: "Mo-Su 00:00-23:59",
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
      "Drywall Patch Tampa",
      "Ceiling Texture Repair",
      "Furniture Assembly",
      "Westchase Home Repairs",
      "Carrollwood Home Maintenance",
      "Ceiling Fan Installation",
      "Emergency Handyman Tampa",
      "Fixture Installation",
    ],
    slogan: siteConfig.tagline,
    foundingLocation: {
      "@type": "Place",
      name: siteConfig.foundingLocation,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tampa Bay Home Services",
      itemListElement: [
        {
          "@type": "Offer",
          priceRange: "$$",
          itemOffered: {
            "@type": "Service",
            name: "Handyman Services in Tampa",
            url: `${siteConfig.url}/services/handyman`,
          },
        },
        {
          "@type": "Offer",
          priceRange: "$$",
          itemOffered: {
            "@type": "Service",
            name: "Drywall Repair in Tampa",
            url: `${siteConfig.url}/services/drywall-repair-tampa`,
          },
        },
        {
          "@type": "Offer",
          priceRange: "$$",
          itemOffered: {
            "@type": "Service",
            name: "Painting Services in Tampa",
            url: `${siteConfig.url}/services/painting`,
          },
        },
        {
          "@type": "Offer",
          priceRange: "$$",
          itemOffered: {
            "@type": "Service",
            name: "Fence Installation in Tampa Bay",
            url: `${siteConfig.url}/services/fence`,
          },
        },
        {
          "@type": "Offer",
          priceRange: "$$",
          itemOffered: {
            "@type": "Service",
            name: "Emergency Home Repairs in Tampa",
            url: `${siteConfig.url}/services/handyman/general-repairs`,
          },
        },
      ],
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phoneE164,
        contactType: "customer service",
        availableLanguage: ["English", "en-US"],
        areaServed: ["US-FL", ...schemaAreaServedCities, siteConfig.primaryZip],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      },
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phoneE164,
        contactType: "emergency",
        availableLanguage: ["English"],
        areaServed: "US-FL",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      },
    ],
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
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function siteNavigationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Handyman Pros FL primary navigation",
    itemListElement: sitelinkNav.map((item, index) => ({
      "@type": "SiteNavigationElement",
      position: index + 1,
      name: item.label,
      url: `${siteConfig.url}${item.href}`,
    })),
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
      { "@type": "City", name: "Westchase, FL" },
      { "@type": "City", name: "Carrollwood, FL" },
      { "@type": "City", name: "Citrus Park, FL" },
      { "@type": "PostalAddress", postalCode: siteConfig.primaryZip, addressRegion: "FL" },
      { "@type": "AdministrativeArea", name: "Hillsborough County, FL" },
      { "@type": "AdministrativeArea", name: "Pinellas County, FL" },
      { "@type": "AdministrativeArea", name: "Pasco County, FL" },
    ],
    serviceType: service.category,
    offers: {
      "@type": "Offer",
      priceRange: "$$",
      availability: "https://schema.org/InStock",
      url: service.url,
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: service.url,
      servicePhone: siteConfig.phoneE164,
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
