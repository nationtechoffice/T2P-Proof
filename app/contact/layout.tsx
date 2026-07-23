import type { Metadata } from "next";
import { buildMetadata, buildLocalTitle } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { formatFullAddress } from "@/lib/local-seo";

export const metadata: Metadata = buildMetadata({
  title: buildLocalTitle("Contact Us — Free Estimate"),
  description:
    `Contact Handyman Pros FL at ${formatFullAddress()}, Tampa. Open 24/7. Call ${siteConfig.phone} for handyman, painting & fence services in Westchase, Carrollwood & Hillsborough County.`,
  path: "/contact",
  keywords: ["contact handyman Tampa", "handyman Westchase", "free estimate Tampa", "handyman 33626"],
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
