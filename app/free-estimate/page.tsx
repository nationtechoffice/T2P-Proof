import type { Metadata } from "next";
import { MarketingPageView } from "@/components/marketing-page";
import { freeEstimatePage } from "@/lib/marketing-pages";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: freeEstimatePage.metaTitle,
  description: freeEstimatePage.metaDescription,
  path: freeEstimatePage.path,
  keywords: freeEstimatePage.keywords,
  exactTitle: true,
});

export default function FreeEstimatePage() {
  return <MarketingPageView page={freeEstimatePage} />;
}
