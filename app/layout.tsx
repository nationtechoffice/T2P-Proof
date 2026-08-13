import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyCallBar } from "@/components/sticky-call-bar";
import { AnimatedBackground } from "@/components/animated-background";
import { JsonLd, localBusinessSchema, websiteSchema } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site-config";
import { tampaLocalKeywords, formatFullAddress } from "@/lib/local-seo";
import { siteImages } from "@/lib/images";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.shortName} | Fast Affordable Handyman in Tampa, FL`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords, ...tampaLocalKeywords].join(", "),
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
  },
  other: {
    "business:contact_data:formatted_address": formatFullAddress(),
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.shortName} | Fast Affordable Handyman in Tampa, FL`,
    description: siteConfig.description,
    images: [
      {
        url: siteImages.hero.src,
        width: siteImages.hero.width,
        height: siteImages.hero.height,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.shortName,
    description: siteConfig.description,
    images: [siteImages.hero.src],
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
  verification: {
    google: "google-site-verification-placeholder",
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
        <JsonLd data={[localBusinessSchema(), websiteSchema()]} />
      </head>
      <body>
        <AnimatedBackground />
        <Header />
        <main id="main-content" className="pb-20 lg:pb-0">
          {children}
        </main>
        <Footer />
        <StickyCallBar />
        <Analytics />
      </body>
    </html>
  );
}
