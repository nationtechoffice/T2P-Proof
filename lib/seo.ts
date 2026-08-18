import type { Metadata } from "next";
import { siteConfig } from "./site-config";
import { formatFullAddress, tampaLocalKeywords } from "./local-seo";
import type { LocationSilo } from "./location-silos";

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
}

const TITLE_MAX = 70;
const DESC_MAX = 150;

export function clipTitle(title: string, max = TITLE_MAX): string {
  const cleaned = title
    .replace(/(\s*\|\s*Handyman Pros FL)+/g, " | Handyman Pros FL")
    .replace(/\s*\|\s*Tampa, FL\s*\|\s*Tampa, FL/g, " | Tampa, FL")
    .trim();
  if (cleaned.length <= max) return cleaned;
  const cut = cleaned.slice(0, max);
  const lastPipe = cut.lastIndexOf(" | ");
  if (lastPipe > 36) return cut.slice(0, lastPipe).trim();
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 40 ? cut.slice(0, lastSpace) : cut).trim();
}

export function clipDescription(description: string, max = DESC_MAX): string {
  if (description.length <= max) return description;
  const cut = description.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > 80 ? cut.slice(0, lastSpace) : cut).trim()}…`;
}

/** Local converting title under ~65 chars. Brand is included once. */
export function localResponseTitle(intent: string, extra = "24/7 Local Service"): string {
  const branded = `${intent} | ${extra} | ${siteConfig.shortName}`;
  if (branded.length <= TITLE_MAX) return branded;
  const withExtra = `${intent} | ${extra}`;
  if (withExtra.length <= TITLE_MAX) return withExtra;
  const shorter = `${intent} | ${siteConfig.shortName}`;
  if (shorter.length <= TITLE_MAX) return shorter;
  return clipTitle(intent);
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
}: SEOProps): Metadata {
  const url = path === "/" ? siteConfig.url : `${siteConfig.url}${path}`;
  const image = ogImage || `${siteConfig.url}/images/hero-handyman.png`;
  const allKeywords = [...siteConfig.keywords, ...tampaLocalKeywords, ...keywords].join(", ");
  const fullAddress = formatFullAddress();
  const absoluteTitle = clipTitle(title);
  const metaDescription = clipDescription(description);

  return {
    title: { absolute: absoluteTitle },
    description: metaDescription,
    keywords: allKeywords,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
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
      title: absoluteTitle,
      description: metaDescription,
      siteName: siteConfig.legalName,
      phoneNumbers: [siteConfig.phoneE164],
      emails: [siteConfig.email],
      images: [
        {
          url: image,
          width: 1280,
          height: 832,
          alt: absoluteTitle,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: absoluteTitle,
      description: metaDescription,
      images: [image],
    },
    other: {
      "og:phone_number": siteConfig.phoneE164,
      "og:email": siteConfig.email,
      "og:street-address": `${siteConfig.address.street}, ${siteConfig.address.street2}`,
      "og:locality": siteConfig.address.city,
      "og:region": siteConfig.address.state,
      "og:postal-code": siteConfig.address.zip,
      "og:country-name": "United States",
      "geo.region": "US-FL",
      "geo.placename": `${siteConfig.address.city}, ${siteConfig.address.neighborhood}`,
      "geo.position": `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
      ICBM: `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
      "business:contact_data:street_address": `${siteConfig.address.street}, ${siteConfig.address.street2}`,
      "business:contact_data:locality": siteConfig.address.city,
      "business:contact_data:region": siteConfig.address.state,
      "business:contact_data:postal_code": siteConfig.address.zip,
      "business:contact_data:country_name": "United States",
      "business:contact_data:email": siteConfig.email,
      "business:contact_data:phone_number": siteConfig.phoneE164,
      "business:contact_data:website": siteConfig.url,
      "business:contact_data:formatted_address": fullAddress,
    },
  };
}

export function buildPageTitle(pageTitle: string): string {
  return localResponseTitle(pageTitle);
}

export function buildLocalTitle(pageTitle: string): string {
  return localResponseTitle(pageTitle);
}

export function locationPageMetadata(location: LocationSilo) {
  return buildMetadata({
    title: `Handyman in ${location.city}, FL | 24/7 Local Service | Handyman Pros FL`,
    description: location.metaDescription,
    path: location.path,
    keywords: location.keywords,
  });
}

export const homeMetadataTitle = "Fast Handyman in Tampa, FL | 24/7 Local Service | Handyman Pros FL";
export const homeMetadataDescription =
  "Licensed 24/7 handyman in Westchase, Tampa. Drywall, painting, fences & emergency repairs. Call (656) 205-3185 for a free estimate.";
