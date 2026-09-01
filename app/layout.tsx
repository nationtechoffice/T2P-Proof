import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";
import { JsonLd, localBusinessSchema, websiteSchema } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site-config";
import { formatFullAddress } from "@/lib/local-seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Tampa Handyman Near Me | Handyman Pros FL",
    template: "%s | Handyman Pros FL",
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteConfig.url,
    types: {
      "text/plain": `${siteConfig.url}/llms.txt`,
    },
  },
  other: {
    "business:contact_data:formatted_address": formatFullAddress(),
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.legalName,
    title: "Tampa Handyman Near Me | Handyman Pros FL",
    description: siteConfig.description,
    images: [{ url: "/images/hero-handyman.png", width: 1280, height: 832, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tampa Handyman Near Me | Handyman Pros FL",
    description: siteConfig.description,
    images: ["/images/hero-handyman.png"],
  },
  robots: {
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
  category: "home services",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: siteConfig.themeColor,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="LLMs full context" />
        <JsonLd data={[localBusinessSchema(), websiteSchema()]} />
      </head>
      <body>
        <AnimatedBackground />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
