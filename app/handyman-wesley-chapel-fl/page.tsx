import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationLanding } from "@/components/location-landing";
import { getLocationSilo } from "@/lib/location-silos";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const location = getLocationSilo("wesley-chapel");

if (!location) {
  throw new Error("Missing location silo: wesley-chapel");
}

export const metadata: Metadata = buildMetadata({
  title: `${location.h1} | ${siteConfig.shortName}`,
  description: location.metaDescription,
  path: location.path,
  keywords: location.keywords,
});

export default function Page() {
  const data = getLocationSilo("wesley-chapel");
  if (!data) notFound();
  return <LocationLanding location={data} />;
}
