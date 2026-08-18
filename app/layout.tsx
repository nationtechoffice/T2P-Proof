import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MobileCallBar } from "@/components/mobile-call-bar";
import { AnimatedBackground } from "@/components/animated-background";
import { JsonLd, localBusinessSchema, websiteSchema, siteNavigationSchema } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site-config";
import { tampaLocalKeywords } from "@/lib/local-seo";
import { homeMetadataDescription, homeMetadataTitle } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: homeMetadataTitle,
    template: `%s`,
  },
  description: homeMetadataDescription,
  keywords: [...siteConfig.keywords, ...tampaLocalKeywords].join(", "),
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: homeMetadataTitle,
    description: homeMetadataDescription,
    phoneNumbers: [siteConfig.phoneE164],
    emails: [siteConfig.email],
    images: [{ url: "/images/hero-handyman.png", width: 1280, height: 832, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: homeMetadataTitle,
    description: homeMetadataDescription,
    images: ["/images/hero-handyman.png"],
  },
  other: {
    "og:phone_number": siteConfig.phoneE164,
    "og:email": siteConfig.email,
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
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt" />
        <JsonLd data={[localBusinessSchema(), websiteSchema(), siteNavigationSchema()]} />
        <style
          dangerouslySetInnerHTML={{
            __html: `html{scroll-behavior:smooth}body{margin:0;background:#faf6f0;color:#0b2a33;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}.btn-accent,.btn-primary,.btn-secondary{min-height:48px}`,
          }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <AnimatedBackground />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <MobileCallBar />
        <Analytics />
      </body>
    </html>
  );
}
