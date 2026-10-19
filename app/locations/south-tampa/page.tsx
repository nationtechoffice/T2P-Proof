import type { Metadata } from "next";
import { CityServicePage } from "@/components/city-service-page";
import type { CityServicePageData } from "@/lib/city-service-pages";
import { buildMetadata } from "@/lib/seo";
import data from "./data.json";

const page = data as unknown as CityServicePageData;

export const metadata: Metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  keywords: ["handyman south tampa", "south tampa handyman", "handyman hyde park tampa", "handyman palma ceia", "handyman davis islands", "handyman 33606", "handyman 33609", "handyman 33611", "handyman 33629"],
  exactTitle: true,
});

export default function SouthTampaPage() {
  return <CityServicePage page={page} />;
}
