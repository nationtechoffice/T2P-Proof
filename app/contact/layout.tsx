import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Call Handyman Pros FL | Tampa 24/7 Estimates",
  description:
    "Contact Handyman Pros FL in Westchase, Tampa. Open 24/7 for handyman, painting & fence estimates. Call (656) 205-3185 now.",
  path: "/contact",
  keywords: ["contact handyman Tampa", "handyman Westchase", "free estimate Tampa", "handyman 33626"],
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
