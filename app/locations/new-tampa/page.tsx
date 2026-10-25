import type { Metadata } from "next";
import { MarketingPageView } from "@/components/marketing-page";
import { newTampaPage } from "@/lib/seo-plan/city-pages";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: newTampaPage.metaTitle,
  description: newTampaPage.metaDescription,
  path: newTampaPage.path,
  keywords: newTampaPage.keywords,
  exactTitle: true,
});

export default function Page() {
  return <MarketingPageView page={newTampaPage} />;
}
