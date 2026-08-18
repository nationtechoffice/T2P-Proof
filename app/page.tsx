import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { ServicesGrid } from "@/components/services-grid";
import { PhotoGallery } from "@/components/photo-gallery";
import { GoogleReviews } from "@/components/google-reviews";
import { Testimonials } from "@/components/testimonials";
import { FAQSection } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";
import { EntityFacts } from "@/components/entity-facts";
import { RelatedContent } from "@/components/related-content";
import { JsonLd, faqSchema, speakableSchema } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata, homeMetadataDescription, homeMetadataTitle } from "@/lib/seo";
import { homeVoiceFaqs } from "@/lib/geo-content";
import { locationHrefForCity, popularServiceLinks } from "@/lib/internal-links";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-posts";
import { formatDate } from "@/lib/utils";
import { CheckCircle, MapPin } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: homeMetadataTitle,
  description: homeMetadataDescription,
  path: "/",
  keywords: ["fast handyman Tampa FL", "24/7 handyman Westchase", "emergency handyman Tampa"],
});

export default function HomePage() {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          faqSchema(homeVoiceFaqs),
          speakableSchema(siteConfig.url, [".hero-speakable", ".hero-speakable h1", ".faq-speakable", ".entity-definition"]),
        ]}
      />
      <Hero />

      <section className="section-padding relative">
        <div className="container-site">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[hsl(var(--accent))]">
                Based in Tampa
              </p>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Your Trusted Tampa Bay Handyman
              </h2>
              <p className="entity-definition mb-6 text-lg leading-relaxed text-[hsl(var(--muted-foreground))]">
                Handyman Pros FL is a licensed and insured mobile handyman provider based in Westchase, Tampa, FL offering 24/7 emergency repairs, drywall patching, painting, and fence contracting. Our tools travel with us — same-day help across Hillsborough County and Tampa Bay.
              </p>
              <ul className="space-y-3">
                {[
                  "Licensed, bonded, and insured local Tampa experts",
                  "Transparent $$ pricing — free estimates, no surprise fees",
                  "Mobile team with tools on board",
                  "60+ specialized services under one roof",
                  "Serving Tampa & all surrounding counties 24/7",
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
                Tampa and all surrounding counties across the Bay area.
              </p>
              <div className="mb-6 flex flex-wrap gap-2">
                {siteConfig.counties.map((county) => (
                  <Link
                    key={county}
                    href="/service-areas"
                    className="inline-flex min-h-12 items-center rounded-full bg-[hsl(var(--primary))]/10 px-3 py-1.5 text-sm font-medium text-[hsl(var(--primary))]"
                  >
                    {county}
                  </Link>
                ))}
              </div>
              <h3 className="mb-3 text-lg font-bold">Popular Neighborhoods</h3>
              <div className="flex flex-wrap gap-2">
                {siteConfig.serviceAreas.map((city) => {
                  const href = locationHrefForCity(city) ?? "/service-areas";
                  return (
                    <Link
                      key={city}
                      href={href}
                      className="inline-flex min-h-12 items-center gap-1 rounded-full bg-white px-3 py-1.5 text-sm shadow-sm hover:text-[hsl(var(--accent))]"
                    >
                      <MapPin className="h-3 w-3 text-[hsl(var(--accent))]" />
                      {city}
                    </Link>
                  );
                })}
              </div>
              <Link href="/service-areas" className="btn-primary mt-6 inline-block">
                View All Service Areas
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-8">
        <div className="container-site">
          <h2 className="mb-6 text-center text-2xl font-bold">Popular Tampa services</h2>
          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {popularServiceLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="related-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
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
              <a href={`tel:${siteConfig.phoneTel}`} className="btn-accent" aria-label="Call Handyman Pros Florida Now">
                Call Now {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <PhotoGallery />
      <GoogleReviews />
      <Testimonials />
      <EntityFacts />

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
                <div className="flex min-h-12 items-center justify-between text-xs text-[hsl(var(--muted-foreground))]">
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
        <FAQSection faqs={homeVoiceFaqs} />
      </div>
      <RelatedContent />
      <CTASection />
    </>
  );
}
