import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationLanding } from "@/components/location-landing";
import { getLocationSilo } from "@/lib/location-silos";
import { buildMetadata, locationMetaTitle } from "@/lib/seo";

const location = getLocationSilo("plant-city");

if (!location) {
  throw new Error("Missing location silo: plant-city");
}

export const metadata: Metadata = buildMetadata({
  title: locationMetaTitle(location.city),
  description: location.metaDescription,
  path: location.path,
  keywords: location.keywords,
});

export default function Page() {
  const data = getLocationSilo("plant-city");
  if (!data) notFound();
  return <LocationLanding location={data} />;
}
