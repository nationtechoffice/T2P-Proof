import type { Metadata } from "next";
import { TampaBayDirectoryPage } from "@/components/tampa-bay-directory-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Tampa Bay Handyman Directory: Services and Cities",
  description:
    "Find your city and the handyman service you need. Browse every Handyman Pros FL service page and local area page in Tampa Bay. Instant reply, 24/7.",
  path: "/tampa-bay-handyman-directory",
  keywords: ["handyman services", "handyman services near me", "local handyman Tampa Bay"],
  exactTitle: true,
});

export default function Page() {
  return <TampaBayDirectoryPage />;
}
