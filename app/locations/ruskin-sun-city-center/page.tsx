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
  keywords: ["handyman ruskin fl", "handyman sun city center fl", "handyman ruskin and sun city center fl", "home repair sun city center", "handyman 33570", "handyman 33572", "handyman 33573"],
  exactTitle: true,
});

export default function RuskinSunCityCenterPage() {
  return <CityServicePage page={page} />;
}
