import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CityServicePage } from "@/components/city-service-page";
import { cityServicePages, getCityServicePage } from "@/lib/city-service-pages";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return cityServicePages.map((p) => ({ city: p.citySlug, service: p.serviceSlug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string; service: string }> }): Promise<Metadata> {
  const { city, service } = await params;
  const page = getCityServicePage(city, service);
  if (!page) return {};
  return buildMetadata({ title: page.title, description: page.description, path: page.path, exactTitle: true });
}

export default async function Page({ params }: { params: Promise<{ city: string; service: string }> }) {
  const { city, service } = await params;
  const page = getCityServicePage(city, service);
  if (!page) notFound();
  return <CityServicePage page={page} />;
}
