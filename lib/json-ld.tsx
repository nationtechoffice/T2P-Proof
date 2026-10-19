import {
  schemaAreaServed,
  schemaPhone,
  schemaSameAs,
  schemaServicesOffered,
  schemaUrl,
} from "./programmatic";
import { instantEstimate } from "./instant-estimate";
import { siteConfig } from "./site-config";
import { googleBusiness } from "./google-business";
import { galleryImages, heroStory, optimizedStill } from "./images";
import { recentWorkPhotos } from "./recent-work";

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

function areaServedNode(name: string) {
  return name.includes("County")
    ? { "@type": "AdministrativeArea" as const, name }
    : { "@type": "City" as const, name };
}

export function localBusinessSchema() {

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${siteConfig.url}/#organization`,
    name: "Handyman Pros FL",
    legalName: siteConfig.legalName,
    alternateName: [siteConfig.name, "Handyman Pros"],
    url: schemaUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/images/handyman-pros-florida-logo.png`,
      width: 600,
      height: 688,
    },
    image: [
      `${siteConfig.url}/images/handyman-pros-florida-logo.png`,
      `${siteConfig.url}/images/handyman-pros-florida-og.png`,
      ...heroStory.stills.map((image) => `${siteConfig.url}${image.webp}`),
      ...galleryImages.map((image) => `${siteConfig.url}${optimizedStill(image.src)?.webp ?? image.src}`),
      ...recentWorkPhotos.map((photo) => `${siteConfig.url}${photo.webp}`),
    ],
    description: instantEstimate.schemaDescription,
    telephone: schemaPhone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      name: "Handyman Pros FL Tampa Headquarters",
      streetAddress: siteConfig.address.street,
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
    hasMap: googleBusiness.mapsQueryUrl,
    additionalProperty: {
      "@type": "PropertyValue",
      name: "numberOfLocations",
      value: "1",
    },
    areaServed: schemaAreaServed.map((name) => areaServedNode(name)),
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
    contactPoint: {
      "@type": "ContactPoint",
      telephone: schemaPhone,
      contactType: "customer service",
      availableLanguage: ["English", "en-US"],
      areaServed: ["US-FL", ...schemaAreaServed, siteConfig.primaryZip],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    },
    potentialAction: {
      "@type": "CommunicateAction",
      name: instantEstimate.ctaLabel,
      description: instantEstimate.schemaDescription,
      target: `tel:${siteConfig.phoneE164}`,
    },
  };
}

/**
 * Full Tampa Bay service list for the business node. Only the homepage and /services carry it;
 * city and service pages keep their own Service node instead (owner, Oct 18).
 */
export function serviceCatalogSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${siteConfig.url}/#organization`,
    name: "Handyman Pros FL",
    url: schemaUrl,
    telephone: schemaPhone,
    address: {
      "@type": "PostalAddress",
      name: "Handyman Pros FL Tampa Headquarters",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: siteConfig.address.country,
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
          areaServed: schemaAreaServed.map((name) => areaServedNode(name)),
        },
      })),
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
  image?: string;
  /** Extra on-page job photos. With more than one photo the schema image becomes a list. */
  images?: readonly string[];
  offer?: { low?: number; high?: number; description: string };
  /** Owner-approved starting price ("starts at"). Sets the Offer minPrice. */
  startingPrice?: { amount: number; sentence: string };
  /** Several starting prices, e.g. on a service-area page. Emitted as an OfferCatalog. */
  startingPriceCatalog?: readonly { label: string; amount: number; sentence: string; href: string }[];
  /** ZIP codes added to areaServed on a city page. */
  postalCodes?: readonly string[];
  /** County added to areaServed on a city page. */
  county?: string;
  /** Override the schema serviceType (defaults to category). */
  serviceType?: string;
}) {
  const areaName = service.areaName || "Tampa, FL";
  const absolute = (src: string) => (src.startsWith("http") ? src : `${siteConfig.url}${src}`);
  const imageList = [
    ...new Set([service.image, ...(service.images ?? [])].filter((src): src is string => Boolean(src)).map(absolute)),
  ];
  const image = imageList.length > 1 ? imageList : imageList[0];
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.name} in ${areaName}`,
    description: service.description,
    url: service.url,
    ...(image ? { image } : {}),
    provider: { "@id": `${siteConfig.url}/#organization` },
    brand: { "@id": `${siteConfig.url}/#organization` },
    areaServed: service.areaName
      ? [
          { "@type": "City", name: service.areaName },
          ...(service.county ? [{ "@type": "AdministrativeArea", name: `${service.county}, FL` }] : []),
          ...(service.postalCodes ?? []).map((postalCode) => ({
            "@type": "PostalAddress",
            postalCode,
            addressRegion: "FL",
            addressCountry: "US",
          })),
        ]
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
    serviceType: service.serviceType ?? service.category,
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
    ...(service.startingPriceCatalog && service.startingPriceCatalog.length > 0
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Starting prices",
            itemListElement: service.startingPriceCatalog.map((price) => ({
              "@type": "Offer",
              name: price.label,
              description: price.sentence,
              url: `${siteConfig.url}${price.href}`,
              priceCurrency: "USD",
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "USD",
                minPrice: price.amount,
              },
            })),
          },
        }
      : {}),
    ...(service.startingPrice && !service.offer
      ? {
          offers: {
            "@type": "Offer",
            url: service.url,
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            description: service.startingPrice.sentence,
            priceSpecification: {
              "@type": "PriceSpecification",
              priceCurrency: "USD",
              minPrice: service.startingPrice.amount,
            },
          },
        }
      : {}),
    ...(service.offer
      ? {
          offers: {
            "@type": "Offer",
            url: service.url,
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            description: service.offer.description,
            ...(service.offer.high != null
              ? {
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    priceCurrency: "USD",
                    minPrice: service.startingPrice?.amount ?? service.offer.low,
                    maxPrice: service.offer.high,
                  },
                }
              : {}),
          },
        }
      : {}),
    potentialAction: {
      "@type": "CommunicateAction",
      name: instantEstimate.ctaLabel,
      target: `tel:${siteConfig.phoneE164}`,
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
        url: `${siteConfig.url}/images/handyman-pros-florida-logo.png`,
        width: 600,
        height: 688,
      },
    },
    image: `${siteConfig.url}${article.image}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url,
    },
  };
}

export function howToSchema(howto: {
  name: string;
  description: string;
  totalTime?: string;
  tool?: string[];
  steps: { name: string; text: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: howto.name,
    description: howto.description,
    ...(howto.totalTime ? { totalTime: howto.totalTime } : {}),
    ...(howto.tool ? { tool: howto.tool } : {}),
    step: howto.steps.map((step) => ({
      "@type": "HowToStep",
      name: step.name,
      text: step.text,
    })),
  };
}

export const tvMountHowTo = howToSchema({
  name: "How Handyman Pros FL mounts a TV in Tampa",
  description: "Licensed Tampa handyman TV wall mounting with stud finding, level mount, and cable management.",
  totalTime: "PT2H",
  tool: ["Stud finder", "Level", "Drill", "TV mount kit"],
  steps: [
    { name: "Confirm wall & mount", text: "Confirm TV size, mount type, and stud or solid backing locations." },
    { name: "Mark & install bracket", text: "Mark level holes, install wall bracket into structure, verify torque." },
    { name: "Hang & conceal", text: "Hang TV, conceal cables where possible, test power and inputs." },
  ],
});

export const drywallHowTo = howToSchema({
  name: "How Handyman Pros FL patches drywall in Tampa",
  description: "Licensed drywall hole patch, texture blend, and paint prep in Tampa Bay.",
  steps: [
    { name: "Assess damage", text: "Measure holes/cracks and choose patch vs board replace." },
    { name: "Patch & mud", text: "Install patch, apply joint compound in coats, sand smooth." },
    { name: "Texture & prep", text: "Blend texture to match and prep for paint." },
  ],
});

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

/** ImageGallery for hub pages that show a job-photo gallery but have no Service node. */
export function imageGallerySchema(gallery: {
  name: string;
  url: string;
  photos: readonly { src: string; alt: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: gallery.name,
    url: gallery.url,
    image: gallery.photos.map((photo) => (photo.src.startsWith("http") ? photo.src : `${siteConfig.url}${photo.src}`)),
    associatedMedia: gallery.photos.map((photo) => ({
      "@type": "ImageObject",
      contentUrl: photo.src.startsWith("http") ? photo.src : `${siteConfig.url}${photo.src}`,
      name: photo.alt,
    })),
  };
}
