import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarketingPageView } from "@/components/marketing-page";
import { projectStories } from "@/lib/marketing-pages";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return projectStories.map((p) => ({ slug: p.path.replace("/projects/", "") }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = projectStories.find((p) => p.path === `/projects/${slug}`);
  if (!page) return {};
  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: page.path,
    keywords: page.keywords,
    exactTitle: true,
    ogImage: page.heroImage ? `${siteConfig.url}${page.heroImage.src}` : undefined,
    ogAlt: page.heroImage?.alt,
  });
}

export default async function ProjectStoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = projectStories.find((p) => p.path === `/projects/${slug}`);
  if (!page) notFound();
  return <MarketingPageView page={page} />;
}
