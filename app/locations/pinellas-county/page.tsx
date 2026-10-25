import type { Metadata } from "next";
import { CountyHubPage } from "@/components/county-hub-page";
import { pinellasCountyHub } from "@/lib/seo-plan/county-hubs";
import { buildMetadata } from "@/lib/seo";

const hub = pinellasCountyHub;

export const metadata: Metadata = buildMetadata({
  title: hub.metaTitle,
  description: hub.metaDescription,
  path: hub.path,
  keywords: hub.keywords,
  exactTitle: true,
});

export default function Page() {
  return <CountyHubPage hub={hub} />;
}
