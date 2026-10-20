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
  keywords: ["handyman dade city fl", "handyman near dade city", "home repair dade city", "handyman 33523", "handyman 33525"],
  exactTitle: true,
});

export default function DadeCityPage() {
  return <CityServicePage page={page} />;
}
