import type { Metadata } from "next";
import { MarketingPageView } from "@/components/marketing-page";
import { thonotosassaPage } from "@/lib/seo-plan/city-pages";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: thonotosassaPage.metaTitle,
  description: thonotosassaPage.metaDescription,
  path: thonotosassaPage.path,
  keywords: thonotosassaPage.keywords,
  exactTitle: true,
});

export default function Page() {
  return <MarketingPageView page={thonotosassaPage} />;
}
