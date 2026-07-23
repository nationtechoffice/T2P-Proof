import type { Metadata } from "next";
import { siteConfig } from "./site-config";
import { formatFullAddress } from "./local-seo";
import { tampaLocalKeywords } from "./local-seo";

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
  const url = `${siteConfig.url}${path}`;
  const image = ogImage || `${siteConfig.url}/images/hero-handyman.png`;
  const allKeywords = [...siteConfig.keywords, ...tampaLocalKeywords, ...keywords].join(", ");
  const fullAddress = formatFullAddress();

  return {
    title,
    description,
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
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1280,
          height: 832,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    other: {
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
      "business:contact_data:phone_number": siteConfig.phone,
      "business:contact_data:website": siteConfig.url,
      "business:contact_data:formatted_address": fullAddress,
    },
  };
}

export function buildPageTitle(pageTitle: string): string {
  return `${pageTitle} | ${siteConfig.shortName}`;
}

export function buildLocalTitle(pageTitle: string): string {
  return `${pageTitle} | Tampa, FL | ${siteConfig.shortName}`;
}
