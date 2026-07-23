import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { buildMetadata, buildPageTitle } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { Shield, Users, Award, Heart } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: buildPageTitle("About Us"),
  description:
    "Learn about Handyman Pros Florida — licensed handyman, painting, and fence contractors serving homeowners across the Sunshine State since day one.",
  path: "/about",
  keywords: ["about handyman pros florida", "Florida handyman company", "licensed contractors"],
});

const values = [
  { icon: Shield, title: "Licensed & Insured", description: "Every team member is fully licensed and insured for your peace of mind." },
  { icon: Users, title: "Experienced Team", description: "Our craftsmen bring years of experience in handyman, painting, and fencing." },
  { icon: Award, title: "Quality Craftsmanship", description: "We take pride in every project, delivering results that exceed expectations." },
  { icon: Heart, title: "Customer First", description: "Your satisfaction is our top priority. We don't leave until you're happy." },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "About" }]} />
      <section className="section-padding">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold">About Handyman Pros Florida</h1>
            <p className="text-lg text-[hsl(var(--muted-foreground))]">
              Your trusted partner for home repairs, painting, and fence services across the Sunshine State.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[hsl(var(--muted))]">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold">Who We Are</h2>
            <div className="space-y-4 text-[hsl(var(--muted-foreground))] leading-relaxed">
              <p>
                Handyman Pros Florida is a full-service home improvement company built on a simple promise: deliver exceptional craftsmanship, honest pricing, and outstanding customer service on every job. From quick handyman repairs to complete painting projects and custom fence installations, we handle it all.
              </p>
              <p>
                Our team of skilled handymen, painters, and fence contractors serves homeowners across Florida — from Tampa and Orlando to Miami, Jacksonville, and beyond. We understand the unique challenges Florida homes face, from hurricane preparation to humidity-related maintenance, and we use materials and techniques built for our climate.
              </p>
              <p>
                With over {siteConfig.serviceAreas.length} service areas and {60}+ specialized services, Handyman Pros Florida is the one call you need for any home project. We offer free estimates, transparent pricing, and a satisfaction guarantee on every job.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <h2 className="mb-12 text-center text-2xl font-bold">Our Core Values</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="card text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[hsl(var(--primary))]/10">
                  <Icon className="h-7 w-7 text-[hsl(var(--primary))]" />
                </div>
                <h3 className="mb-2 font-bold">{title}</h3>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Work With Florida's Best" />
    </>
  );
}
