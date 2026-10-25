import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarketingPageView } from "@/components/marketing-page";
import { allMarketingPages, getMarketingPageByPath } from "@/lib/marketing-pages";
import { buildMetadata, canonicalUrl } from "@/lib/seo";

export function generateStaticParams() {
  return allMarketingPages
    .filter((p) => p.path.startsWith("/es/"))
    .map((p) => ({ slug: p.path.replace("/es/", "") }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getMarketingPageByPath(`/es/${slug}`);
  if (!page) return {};
  const meta = buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: page.path,
    keywords: page.keywords,
    exactTitle: true,
  });
  return {
    ...meta,
    alternates: {
      canonical: canonicalUrl(page.path),
      languages: page.alternateEnPath
        ? {
            "es-US": canonicalUrl(page.path),
            "en-US": canonicalUrl(page.alternateEnPath),
          }
        : { "es-US": canonicalUrl(page.path) },
    },
    openGraph: { ...meta.openGraph, locale: "es_US" },
  };
}

export default async function SpanishServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getMarketingPageByPath(`/es/${slug}`);
  if (!page) notFound();
  return <MarketingPageView page={page} />;
}
