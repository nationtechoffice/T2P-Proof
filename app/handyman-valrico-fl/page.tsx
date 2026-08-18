import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationLanding } from "@/components/location-landing";
import { getLocationSilo } from "@/lib/location-silos";
import { locationPageMetadata } from "@/lib/seo";

const location = getLocationSilo("valrico");

if (!location) {
  throw new Error("Missing location silo: valrico");
}

export const metadata: Metadata = locationPageMetadata(location);

export default function Page() {
  const data = getLocationSilo("valrico");
  if (!data) notFound();
  return <LocationLanding location={data} />;
}
