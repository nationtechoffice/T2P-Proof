import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarketingPageView } from "@/components/marketing-page";
import { allMarketingPages, getMarketingPageByPath } from "@/lib/marketing-pages";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return allMarketingPages
    .filter((p) => p.path.startsWith("/answers/"))
    .map((p) => ({ slug: p.path.replace("/answers/", "") }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getMarketingPageByPath(`/answers/${slug}`);
  if (!page) return {};
  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: page.path,
    keywords: page.keywords,
    exactTitle: true,
  });
}

export default async function AnswerTopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getMarketingPageByPath(`/answers/${slug}`);
  if (!page) notFound();
  return <MarketingPageView page={page} />;
}
