import type { Metadata } from "next";
import { preload } from "react-dom";
import { Hero } from "@/components/hero";
import { CoverageAreasMotion } from "@/components/coverage-areas-motion";
import { BeforeAfterShowcase } from "@/components/before-after-showcase";
import { FeaturedServiceCards } from "@/components/featured-service-cards";
import { ServicesGrid } from "@/components/services-grid";
import { PhotoGallery } from "@/components/photo-gallery";
import { RecentWorkGallery } from "@/components/recent-work-gallery";
import { GoogleReviews } from "@/components/google-reviews";
import { FAQSection, homeFaqs } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";
import { HqDispatch } from "@/components/hq-dispatch";
import { JsonLd, faqSchema, serviceCatalogSchema, speakableSchema } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site-config";
import { allLocationLinks } from "@/lib/location-silos";
import { hrefForAreaName } from "@/lib/programmatic";
import { primaryServiceHubLinks } from "@/lib/service-hub";
import { homeTitle, homeDescription } from "@/lib/instant-estimate";
import { buildMetadata } from "@/lib/seo";
import { heroStory } from "@/lib/images";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blog-posts";
import { formatDate } from "@/lib/utils";
import { CheckCircle, MapPin } from "lucide-react";

const HOME_PAGE_TITLE = "Tampa Handyman Near Me | Drywall & TV Mount";

const homeMetadata: Metadata = buildMetadata({
  title: homeTitle(),
  description: homeDescription(),
  path: "/",
  exactTitle: true,
  keywords: [
    "Tampa handyman",
    "handyman Tampa",
    "handyman Tampa FL",
    "Tampa FL handyman",
    "handyman near me Tampa",
    "best handyman Tampa",
    "same day handyman Tampa",
    "handyman Westchase 33626",
    "drywall repair Tampa",
    "TV mounting Tampa",
    "handyman Carrollwood",
    "licensed handyman Tampa",
    "handyman near me Westchase",
    "home repair Tampa Bay",
    "manitas Tampa",
    "reparaciones del hogar",
    "servicios de handyman Tampa",
    "montaje de muebles Tampa",
  ],
  ogImage: `${siteConfig.url}${heroStory.poster.webp}`,
  ogAlt: heroStory.poster.alt,
  ogWidth: heroStory.poster.width,
  ogHeight: heroStory.poster.height,
});

// Homepage <title>, og:title and twitter:title; homeTitle() and layout defaults unchanged.
export const metadata: Metadata = {
  ...homeMetadata,
  title: { absolute: HOME_PAGE_TITLE },
  openGraph: { ...homeMetadata.openGraph, title: HOME_PAGE_TITLE },
  twitter: { ...homeMetadata.twitter, title: HOME_PAGE_TITLE },
};

export default function HomePage() {
  preload(heroStory.poster.avif, {
    as: "image",
    type: "image/avif",
    fetchPriority: "high",
  });

  const recentPosts = blogPosts.slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          serviceCatalogSchema(),
          faqSchema(homeFaqs),
          speakableSchema(siteConfig.url, [".hero-speakable", ".hero-speakable h1", ".faq-speakable"]),
        ]}
      />
      <Hero />

      <FeaturedServiceCards />
      <PhotoGallery />
      <RecentWorkGallery />
      <CoverageAreasMotion />
      <BeforeAfterShowcase />

      <section className="section-padding relative">
        <div className="container-site">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[hsl(var(--accent))]">
                Tampa handyman · one crew
              </p>
              <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
                Tampa handyman near me — our local crew
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-[hsl(var(--muted-foreground))]">
                Looking for a Tampa handyman near Westchase, Carrollwood, or Citrus Park? Handyman Pros FL is one local crew — TV mounting, drywall repair, pressure washing, and home fixes with{" "}
                <Link href="/services/same-day-handyman" className="font-semibold text-[hsl(var(--primary))] underline underline-offset-4">
                  same-day help
                </Link>{" "}
                across Hillsborough &amp; Pinellas.
              </p>
              <ul className="space-y-3">
                {[
                  "Licensed and insured local Tampa experts",
                  "Honest, upfront pricing with no surprise fees",
                  "Mobile team — our local crew serves Tampa Bay",
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
                Our local crew serves Tampa Bay — we come to you.
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
                  const href =
                    hrefForAreaName(city) ||
                    allLocationLinks.find(
                      (area) =>
                        area.label.toLowerCase() === city.toLowerCase() ||
                        (city === "Town 'n' Country" && area.label === "Town 'n' Country")
                    )?.href;
                  const chip = (
                    <>
                      <MapPin className="h-3 w-3 text-[hsl(var(--accent))]" />
                      {city}
                    </>
                  );
                  return href ? (
                    <Link
                      key={city}
                      href={href}
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
              <p className="mt-6 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                Our local crew serves homeowners across three counties. In Hillsborough County: <Link href="/locations/tampa" className="font-medium text-[hsl(var(--primary))] hover:underline">Tampa</Link>, <Link href="/locations/westchase-fl" className="font-medium text-[hsl(var(--primary))] hover:underline">Westchase</Link>, <Link href="/locations/carrollwood" className="font-medium text-[hsl(var(--primary))] hover:underline">Carrollwood</Link>, <Link href="/locations/citrus-park-fl" className="font-medium text-[hsl(var(--primary))] hover:underline">Citrus Park</Link>, <Link href="/locations/town-n-country-fl" className="font-medium text-[hsl(var(--primary))] hover:underline">Town &apos;N&apos; Country</Link>, <Link href="/locations/keystone" className="font-medium text-[hsl(var(--primary))] hover:underline">Keystone</Link>, <Link href="/locations/brandon" className="font-medium text-[hsl(var(--primary))] hover:underline">Brandon</Link>, <Link href="/locations/riverview" className="font-medium text-[hsl(var(--primary))] hover:underline">Riverview</Link>, <Link href="/locations/valrico" className="font-medium text-[hsl(var(--primary))] hover:underline">Valrico</Link>, <Link href="/locations/apollo-beach" className="font-medium text-[hsl(var(--primary))] hover:underline">Apollo Beach</Link>, <Link href="/locations/temple-terrace" className="font-medium text-[hsl(var(--primary))] hover:underline">Temple Terrace</Link>, <Link href="/locations/lutz" className="font-medium text-[hsl(var(--primary))] hover:underline">Lutz</Link>, and <Link href="/locations/plant-city" className="font-medium text-[hsl(var(--primary))] hover:underline">Plant City</Link>. In Pinellas County: <Link href="/locations/clearwater" className="font-medium text-[hsl(var(--primary))] hover:underline">Clearwater</Link>, <Link href="/locations/st-petersburg" className="font-medium text-[hsl(var(--primary))] hover:underline">St. Petersburg</Link>, <Link href="/locations/largo" className="font-medium text-[hsl(var(--primary))] hover:underline">Largo</Link>, <Link href="/locations/seminole" className="font-medium text-[hsl(var(--primary))] hover:underline">Seminole</Link>, <Link href="/locations/pinellas-park" className="font-medium text-[hsl(var(--primary))] hover:underline">Pinellas Park</Link>, <Link href="/locations/dunedin-fl" className="font-medium text-[hsl(var(--primary))] hover:underline">Dunedin</Link>, <Link href="/locations/palm-harbor-fl" className="font-medium text-[hsl(var(--primary))] hover:underline">Palm Harbor</Link>, <Link href="/locations/safety-harbor-fl" className="font-medium text-[hsl(var(--primary))] hover:underline">Safety Harbor</Link>, <Link href="/locations/tarpon-springs-fl" className="font-medium text-[hsl(var(--primary))] hover:underline">Tarpon Springs</Link>, <Link href="/locations/oldsmar-fl" className="font-medium text-[hsl(var(--primary))] hover:underline">Oldsmar</Link>, and <Link href="/locations/gulfport" className="font-medium text-[hsl(var(--primary))] hover:underline">Gulfport</Link>. In Pasco County: <Link href="/locations/wesley-chapel" className="font-medium text-[hsl(var(--primary))] hover:underline">Wesley Chapel</Link>, <Link href="/locations/land-o-lakes" className="font-medium text-[hsl(var(--primary))] hover:underline">Land O&apos; Lakes</Link>, <Link href="/locations/new-port-richey-fl" className="font-medium text-[hsl(var(--primary))] hover:underline">New Port Richey</Link>, <Link href="/locations/holiday" className="font-medium text-[hsl(var(--primary))] hover:underline">Holiday</Link>, <Link href="/locations/odessa-fl" className="font-medium text-[hsl(var(--primary))] hover:underline">Odessa</Link>, and <Link href="/locations/zephyrhills-fl" className="font-medium text-[hsl(var(--primary))] hover:underline">Zephyrhills</Link>.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <HqDispatch westchaseLinkLabel="Westchase handyman page" />
          </div>
        </div>
      </section>

      <ServicesGrid />

      <section className="section-padding relative pt-0">
        <div className="container-site">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">Popular Handyman Jobs in Tampa, FL</h2>
            <p className="text-[hsl(var(--muted-foreground))]">
              Fast, reliable home repairs from a crew that serves Tampa Bay daily.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {primaryServiceHubLinks.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className={`card hover:border-[hsl(var(--accent))]${service.emphasis === "secondary" ? " opacity-90" : ""}`}
              >
                <h3 className="mb-2 text-lg font-bold">{service.label}</h3>
                {service.description ? (
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">{service.description}</p>
                ) : null}
              </Link>
            ))}
          </div>
        </div>
      </section>

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
              <Link href="/services/drywall-repair" className="btn-primary">
                View Drywall Repair Tampa
              </Link>
              <a href={`tel:${siteConfig.phoneTel}`} className="btn-accent">
                Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <GoogleReviews />

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
              <article key={post.slug} className="card flex flex-col !p-0 overflow-hidden">
                <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/9]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-6">
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
