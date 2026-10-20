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
  keywords: ["handyman ybor city fl", "handyman near ybor city", "home repair ybor city", "handyman 33605"],
  exactTitle: true,
});

export default function YborCityPage() {
  return <CityServicePage page={page} />;
}
