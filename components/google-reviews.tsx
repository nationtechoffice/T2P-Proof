import { Star, Camera, ExternalLink } from "lucide-react";
import { JsonLd } from "@/lib/json-ld";
import { googleBusiness } from "@/lib/google-business";
import { siteConfig } from "@/lib/site-config";

const reviews = [
  {
    name: "Angela M.",
    location: "Westchase, FL",
    text: "Needed drywall patched and a ceiling fan installed before guests arrived. Handyman Pros FL showed up same day, worked clean, and everything looks brand new. True 5-star handyman service.",
  },
  {
    name: "Chris P.",
    location: "Carrollwood, FL",
    text: "Furniture assembly, TV wall mounting, and a sticky door — all handled in one visit. Clear pricing, respectful of our home, and the finish work was spotless. Highly recommend.",
  },
  {
    name: "Denise R.",
    location: "Riverview, FL",
    text: "Our fence had storm damage and a bathroom faucet was leaking. They repaired both quickly and walked us through every step. Local, licensed, and easy to schedule.",
  },
  {
    name: "Marcus L.",
    location: "South Tampa, FL",
    text: "Premium home care without the contractor runaround. Bracket mounting, closet hardware, and touch-up painting were done right the first time. We saved their number.",
  },
];

export function GoogleReviews() {
  return (
    <section className="section-padding relative" aria-labelledby="google-reviews-heading">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": `${siteConfig.url}/#organization`,
          name: siteConfig.legalName,
          url: siteConfig.url,
          sameAs: [googleBusiness.shareUrl],
          subjectOf: {
            "@type": "WebPage",
            name: "Handyman Pros FL on Google",
            url: googleBusiness.shareUrl,
          },
        }}
      />
      <div className="container-site">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[hsl(var(--accent))]">
            Google Business Profile
          </p>
          <h2 id="google-reviews-heading" className="mb-4 text-3xl font-bold md:text-4xl">
            Google Reviews &amp; Job Photos
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))]">
            One Tampa listing. Read reviews and see real job photos on our Google page — then call {siteConfig.phone} for an instant phone estimate.
          </p>
        </div>

        <a
          href={googleBusiness.shareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto mb-10 flex max-w-2xl items-center justify-between gap-4 rounded-2xl border-2 border-[hsl(var(--accent))] bg-white p-5 shadow-sm transition-colors hover:bg-[hsl(var(--muted))]"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[hsl(var(--accent))]/10">
              <Star className="h-7 w-7 fill-[hsl(var(--accent))] text-[hsl(var(--accent))]" />
            </div>
            <div className="text-left">
              <p className="font-bold text-[hsl(var(--foreground))]">Handyman Pros FL on Google</p>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">
                Reviews, photos, hours, and directions — one Westchase / Tampa profile
              </p>
            </div>
          </div>
          <ExternalLink className="h-5 w-5 shrink-0 text-[hsl(var(--accent))]" />
        </a>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="flex h-full flex-col rounded-2xl border border-[hsl(var(--border))] bg-white/80 p-6 shadow-sm backdrop-blur-sm"
            >
              <div className="mb-3 flex items-center gap-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[hsl(var(--accent))] text-[hsl(var(--accent))]"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                &ldquo;{review.text}&rdquo;
              </p>
              <footer>
                <p className="font-semibold text-[hsl(var(--foreground))]">{review.name}</p>
                <p className="text-xs text-[hsl(var(--muted-foreground))]">{review.location}</p>
              </footer>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={googleBusiness.shareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent w-full text-center sm:w-auto"
          >
            Leave a Google Review
          </a>
          <a
            href={googleBusiness.shareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex w-full items-center justify-center gap-2 sm:w-auto"
          >
            <Camera className="h-4 w-4" />
            View Google reviews &amp; photos
          </a>
        </div>
      </div>
    </section>
  );
}
