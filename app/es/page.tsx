import type { Metadata } from "next";
import { MarketingPageView } from "@/components/marketing-page";
import { spanishHubPage } from "@/lib/marketing-pages";
import { buildMetadata, canonicalUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  ...buildMetadata({
    title: spanishHubPage.metaTitle,
    description: spanishHubPage.metaDescription,
    path: spanishHubPage.path,
    keywords: spanishHubPage.keywords,
    exactTitle: true,
  }),
  alternates: {
    canonical: canonicalUrl("/es"),
    languages: {
      "es-US": canonicalUrl("/es"),
      "en-US": siteConfig.url,
    },
  },
  openGraph: { locale: "es_US" },
};

export default function SpanishHubPage() {
  return <MarketingPageView page={spanishHubPage} />;
}
