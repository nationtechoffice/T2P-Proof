import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationLanding } from "@/components/location-landing";
import { getLocationSilo } from "@/lib/location-silos";
import { locationPageMetadata } from "@/lib/seo";

const location = getLocationSilo("oldsmar");

if (!location) {
  throw new Error("Missing location silo: oldsmar");
}

export const metadata: Metadata = locationPageMetadata(location);

export default function Page() {
  const data = getLocationSilo("oldsmar");
  if (!data) notFound();
  return <LocationLanding location={data} />;
}
