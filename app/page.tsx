import { Hero } from "@/components/hero";
import { ServicesGrid } from "@/components/services-grid";
import { PhotoGallery } from "@/components/photo-gallery";
import { Testimonials } from "@/components/testimonials";
import { FAQSection, homeFaqs } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";
import { JsonLd, faqSchema, speakableSchema } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-posts";
import { formatDate } from "@/lib/utils";
import { CheckCircle, MapPin } from "lucide-react";

export default function HomePage() {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          faqSchema(homeFaqs),
          speakableSchema(siteConfig.url, [".hero-speakable", ".faq-speakable"]),
        ]}
      />
      <Hero />

      <section className="section-padding relative">
        <div className="container-site">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="hero-speakable">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[hsl(var(--accent))]">
                Based in Tampa
              </p>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Your Trusted Tampa Bay Handyman
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-[hsl(var(--muted-foreground))]">
                Handyman Pros FL is a mobile handyman service built around fast, flexible response for the Tampa area. Our tools travel with us — same-day help for urgent jobs across Hillsborough County and surrounding counties.
              </p>
              <ul className="space-y-3">
                {[
                  "Licensed, bonded, and insured local Tampa experts",
                  "Honest, upfront pricing with no surprise fees",
                  "Mobile team with tools on board",
                  "60+ specialized services under one roof",
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
                Tampa and all surrounding counties across the Bay area.
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
                {siteConfig.serviceAreas.map((city) => (
                  <span key={city} className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-sm shadow-sm">
                    <MapPin className="h-3 w-3 text-[hsl(var(--accent))]" />
                    {city}
                  </span>
                ))}
              </div>
              <Link href="/service-areas" className="btn-primary mt-6 inline-block">
                View All Service Areas
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ServicesGrid />
      <PhotoGallery />
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
