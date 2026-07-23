import type { Metadata } from "next";
import { siteConfig } from "./site-config";

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
  const image = ogImage || `${siteConfig.url}/images/og-default.jpg`;
  const allKeywords = [...siteConfig.keywords, ...keywords].join(", ");

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
          width: 1200,
          height: 630,
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
      "geo.placename": siteConfig.address.city,
      "geo.position": `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
      ICBM: `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
      "business:contact_data:street_address": siteConfig.address.street,
      "business:contact_data:locality": siteConfig.address.city,
      "business:contact_data:region": siteConfig.address.state,
      "business:contact_data:postal_code": siteConfig.address.zip,
      "business:contact_data:country_name": "United States",
      "business:contact_data:email": siteConfig.email,
      "business:contact_data:phone_number": siteConfig.phone,
      "business:contact_data:website": siteConfig.url,
    },
  };
}

export function buildPageTitle(pageTitle: string): string {
  return `${pageTitle} | ${siteConfig.name}`;
}
