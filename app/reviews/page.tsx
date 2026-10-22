import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { GoogleReviews } from "@/components/google-reviews";
import { JsonLd, breadcrumbSchema } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Google Reviews | Handyman Pros Florida",
  description:
    "Read recent Google reviews for Handyman Pros FL — licensed Tampa Bay handyman crew. See all reviews on Google or call (656) 205-3185.",
  path: "/reviews",
  keywords: [
    "Handyman Pros FL reviews",
    "handyman Tampa Google reviews",
    "Westchase handyman reviews",
  ],
});

export default function ReviewsPage() {
  const pageUrl = `${siteConfig.url}/reviews`;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Reviews", url: pageUrl },
        ])}
      />
      <Breadcrumbs items={[{ label: "Reviews" }]} />
      <section className="section-padding pb-0">
        <div className="container-site mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-bold">Google Reviews</h1>
          <p className="text-lg text-[hsl(var(--muted-foreground))]">
            Recent feedback from homeowners who hired our Tampa Bay crew — pulled live from Google.
          </p>
        </div>
      </section>
      <GoogleReviews variant="full" />
      <CTASection />
    </>
  );
}
