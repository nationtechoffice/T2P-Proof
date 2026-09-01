import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationCityLanding } from "@/components/location-city-landing";
import { getTargetLocation, serviceMetaDescription, serviceMetaTitle, targetLocations } from "@/lib/programmatic";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return targetLocations.map((location) => ({ city: location.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const location = getTargetLocation(city);
  if (!location) return {};
  return buildMetadata({
    title: serviceMetaTitle("Handyman", location.city),
    description: serviceMetaDescription("handyman service", location.city),
    path: `/locations/${location.slug}`,
    keywords: [`handyman ${location.city}`, `handyman near me ${location.city}`, `${location.city} FL handyman`],
    exactTitle: true,
  });
}

export default async function LocationCityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const location = getTargetLocation(city);
  if (!location) notFound();
  return <LocationCityLanding location={location} />;
}
