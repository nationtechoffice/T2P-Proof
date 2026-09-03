import type { Metadata } from "next";
import { siteConfig } from "./site-config";
import { formatFullAddress } from "./local-seo";

export interface SEOProps {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
  exactTitle?: boolean;
}

const BRAND = siteConfig.shortName;
const TITLE_LIMIT = 60;

function brandedTitle(title: string): string {
  const alreadyBranded =
    title.includes(BRAND) || title.includes(siteConfig.name) || title.includes(siteConfig.legalName);
  const full = alreadyBranded ? title : `${title} | ${BRAND}`;
  if (full.length <= TITLE_LIMIT) return full;
  if (alreadyBranded && title.length <= TITLE_LIMIT) return title;
  const withoutBrand = title.replace(` | ${BRAND}`, "").trim();
  const shortened = `${withoutBrand} | ${BRAND}`;
  return shortened.length <= TITLE_LIMIT ? shortened : withoutBrand.slice(0, TITLE_LIMIT);
}

export function canonicalUrl(path: string): string {
  if (!path || path === "/") return siteConfig.url;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage,
  ogType = "website",
  publishedTime,
  modifiedTime,
  noindex = false,
  exactTitle = false,
}: SEOProps): Metadata {
  const url = canonicalUrl(path);
  const image = ogImage || `${siteConfig.url}/images/hero-handyman.png`;
  const fullTitle = exactTitle ? title : brandedTitle(title);
  const fullAddress = formatFullAddress();

  return {
    title: { absolute: fullTitle },
    description,
    keywords: keywords.slice(0, 12),
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
      types: {
        "text/plain": `${siteConfig.url}/llms.txt`,
      },
    },
    robots: noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      type: ogType,
      locale: "en_US",
      url,
      title: fullTitle,
      description,
      siteName: siteConfig.legalName,
      images: [
        {
          url: image,
          width: 1280,
          height: 832,
          alt: fullTitle,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    other: {
      "geo.region": "US-FL",
      "geo.placename": `${siteConfig.address.neighborhood}, ${siteConfig.address.city}`,
      "geo.position": `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
      ICBM: `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
      "business:contact_data:street_address": `${siteConfig.address.street}, ${siteConfig.address.street2}`,
      "business:contact_data:locality": siteConfig.address.city,
      "business:contact_data:region": siteConfig.address.state,
      "business:contact_data:postal_code": siteConfig.address.zip,
      "business:contact_data:country_name": "United States",
      "business:contact_data:email": siteConfig.email,
      "business:contact_data:phone_number": siteConfig.phone,
      "business:contact_data:website": siteConfig.url,
      "business:contact_data:formatted_address": fullAddress,
    },
  };
}

/** Page-only title. Brand is appended once in buildMetadata. */
export function buildPageTitle(pageTitle: string): string {
  return pageTitle;
}

export function buildLocalTitle(pageTitle: string): string {
  return pageTitle;
}

export function locationMetaTitle(city: string): string {
  return `Handyman ${city} FL`;
}
