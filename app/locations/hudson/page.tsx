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
  keywords: ["handyman hudson fl", "handyman near hudson", "home repair hudson", "handyman 34667", "handyman 34669"],
  exactTitle: true,
});

export default function HudsonPage() {
  return <CityServicePage page={page} />;
}
