import type { Metadata } from "next";
import { MarketingPageView } from "@/components/marketing-page";
import { answersHubPage } from "@/lib/marketing-pages";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: answersHubPage.metaTitle,
  description: answersHubPage.metaDescription,
  path: answersHubPage.path,
  keywords: answersHubPage.keywords,
  exactTitle: true,
});

export default function AnswersHubPage() {
  return <MarketingPageView page={answersHubPage} />;
}
