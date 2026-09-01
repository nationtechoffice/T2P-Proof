import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { ServicesGrid } from "@/components/services-grid";
import { PhotoGallery } from "@/components/photo-gallery";
import { GoogleReviews } from "@/components/google-reviews";
import { Testimonials } from "@/components/testimonials";
import { FAQSection, homeFaqs } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";
import { HqDispatch } from "@/components/hq-dispatch";
import { JsonLd, faqSchema, speakableSchema } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site-config";
import { allLocationLinks } from "@/lib/location-silos";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-posts";
import { formatDate } from "@/lib/utils";
import { CheckCircle, MapPin } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Tampa Handyman Near Me",
  description: siteConfig.description,
  path: "/",
  keywords: [
    "handyman Tampa FL",
    "handyman Westchase",
    "handyman 33626",
    "handyman near me Tampa",
    "licensed handyman Tampa Bay",
  ],
});

export default function HomePage() {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          faqSchema(homeFaqs),
          speakableSchema(siteConfig.url, [".hero-speakable", ".hero-speakable h1", ".faq-speakable"]),
        ]}
      />
      <Hero />

      <section className="section-padding relative">
        <div className="container-site">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[hsl(var(--accent))]">
                One Tampa location
              </p>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Your Trusted Tampa Bay Handyman
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-[hsl(var(--muted-foreground))]">
                Handyman Pros FL is a single-location mobile handyman based in Westchase, Tampa. Our tools travel with us — same-day help for urgent jobs across Hillsborough County and surrounding counties. We do not operate extra branches.
              </p>
              <ul className="space-y-3">
                {[
                  "Licensed, bonded, and insured local Tampa experts",
                  "Honest, upfront pricing with no surprise fees",
                  "Mobile team dispatched from Westchase HQ",
                  "60+ specialized services from one crew",
                  "Serving Tampa & all surrounding counties",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(var(--accent))]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-panel">
              <h3 className="mb-2 text-xl font-bold">Counties We Serve</h3>
              <p className="mb-4 text-sm text-[hsl(var(--muted-foreground))]">
                Coverage from our only Tampa headquarters — we come to you.
              </p>
              <div className="mb-6 flex flex-wrap gap-2">
                {siteConfig.counties.map((county) => (
                  <span key={county} className="rounded-full bg-[hsl(var(--primary))]/10 px-3 py-1.5 text-sm font-medium text-[hsl(var(--primary))]">
                    {county}
                  </span>
                ))}
              </div>
              <h3 className="mb-3 text-lg font-bold">Popular Neighborhoods</h3>
              <div className="flex flex-wrap gap-2">
                {siteConfig.serviceAreas.map((city) => {
                  const match = allLocationLinks.find(
                    (area) => area.label === city || (city === "Town 'n' Country" && area.label === "Town 'n' Country")
                  );
                  const chip = (
                    <>
                      <MapPin className="h-3 w-3 text-[hsl(var(--accent))]" />
                      {city}
                    </>
                  );
                  return match ? (
                    <Link
                      key={city}
                      href={match.href}
                      className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-sm shadow-sm hover:text-[hsl(var(--accent))]"
                    >
                      {chip}
                    </Link>
                  ) : (
                    <span key={city} className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-sm shadow-sm">
                      {chip}
                    </span>
                  );
                })}
              </div>
              <Link href="/service-areas" className="btn-primary mt-6 inline-block">
                View All Service Areas
              </Link>
            </div>
          </div>
          <div className="mt-12">
            <HqDispatch />
          </div>
        </div>
      </section>

      <ServicesGrid />

      <section className="section-padding relative pt-0">
        <div className="container-site">
          <div className="mx-auto max-w-3xl rounded-2xl border border-[hsl(var(--border))] bg-white/70 p-6 text-center shadow-sm backdrop-blur-sm md:p-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[hsl(var(--accent))]">
              Featured Service
            </p>
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">Drywall Repair in Tampa</h2>
            <p className="mb-6 text-[hsl(var(--muted-foreground))]">
              Need a drywall patch, ceiling texture repair, or a trusted wall repair contractor? See our dedicated Tampa drywall page for details and booking.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/services/drywall-repair-tampa" className="btn-primary">
                View Drywall Repair Tampa
              </Link>
              <a href={`tel:${siteConfig.phoneTel}`} className="btn-accent">
                Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <PhotoGallery />
      <GoogleReviews />
      <Testimonials />

      <section className="section-padding relative">
        <div className="container-site">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Tampa Home Improvement Tips</h2>
            <p className="text-lg text-[hsl(var(--muted-foreground))]">
              Expert advice from our Tampa Bay home service professionals.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {recentPosts.map((post) => (
              <article key={post.slug} className="card flex flex-col">
                <span className="mb-2 text-xs font-semibold uppercase tracking-wider text-[hsl(var(--accent))]">
                  {post.category}
                </span>
                <h3 className="mb-2 text-lg font-bold">
                  <Link href={`/blog/${post.slug}`} className="hover:text-[hsl(var(--primary))]">
                    {post.title}
                  </Link>
                </h3>
                <p className="mb-4 flex-1 text-sm text-[hsl(var(--muted-foreground))]">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-[hsl(var(--muted-foreground))]">
                  <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                  <span>{post.readTime} min read</span>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/blog" className="btn-secondary">View All Blog Posts</Link>
          </div>
        </div>
      </section>

      <div className="faq-speakable">
        <FAQSection />
      </div>
      <CTASection />
    </>
  );
}
