import type { Metadata } from "next";
import { buildMetadata, buildPageTitle } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: buildPageTitle("Contact Us - Free Estimate"),
  description:
    "Contact Handyman Pros Florida for a free estimate. Call (888) 555-0142 or fill out our form. Handyman, painting, and fence services statewide.",
  path: "/contact",
  keywords: ["contact handyman Florida", "free estimate", "handyman quote"],
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
