import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationLanding } from "@/components/location-landing";
import { getLocationSilo } from "@/lib/location-silos";
import { buildMetadata, locationMetaTitle } from "@/lib/seo";

const location = getLocationSilo("town-n-country");

if (!location) {
  throw new Error("Missing location silo: town-n-country");
}

export const metadata: Metadata = buildMetadata({
  title: locationMetaTitle(location.city),
  description: location.metaDescription,
  path: location.path,
  keywords: location.keywords,
});

export default function Page() {
  const data = getLocationSilo("town-n-country");
  if (!data) notFound();
  return <LocationLanding location={data} />;
}
