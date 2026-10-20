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
  keywords: ["handyman east lake fl", "handyman near east lake", "home repair east lake", "handyman 34685", "handyman 34688"],
  exactTitle: true,
});

export default function EastLakePage() {
  return <CityServicePage page={page} />;
}
