import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationLanding } from "@/components/location-landing";
import { getLocationSilo } from "@/lib/location-silos";
import { locationPageMetadata } from "@/lib/seo";

const location = getLocationSilo("wesley-chapel");

if (!location) {
  throw new Error("Missing location silo: wesley-chapel");
}

export const metadata: Metadata = locationPageMetadata(location);

export default function Page() {
  const data = getLocationSilo("wesley-chapel");
  if (!data) notFound();
  return <LocationLanding location={data} />;
}
