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
  keywords: ["handyman lake magdalene fl", "handyman near lake magdalene", "home repair lake magdalene", "handyman 33612", "handyman 33613", "handyman 33618"],
  exactTitle: true,
});

export default function LakeMagdalenePage() {
  return <CityServicePage page={page} />;
}
