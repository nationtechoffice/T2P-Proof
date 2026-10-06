import { Star, ExternalLink } from "lucide-react";
import {
  GOOGLE_LEAVE_REVIEW_URL,
  GOOGLE_REVIEWS_URL,
  googleReviews,
  type GoogleReview,
} from "@/lib/google-reviews";

function reviewCardText(text: string, max = 280): string {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (normalized.length <= max) return normalized;
  const slice = normalized.slice(0, max);
  const boundary = Math.max(slice.lastIndexOf(". "), slice.lastIndexOf("! "), slice.lastIndexOf("? "));
  if (boundary >= 40) return `${slice.slice(0, boundary + 1)} …`;
  return normalized;
}

function Stars({ rating, label }: { rating: number; label: string }) {
  const filled = Math.max(0, Math.min(5, Math.round(rating)));
  return (
    <div className="flex items-center gap-1" aria-label={label}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${
            index < filled
              ? "fill-[hsl(var(--accent))] text-[hsl(var(--accent))]"
              : "text-[hsl(var(--border))]"
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function ReviewLink({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[hsl(var(--accent))] px-5 py-3 text-sm font-bold text-white shadow-[0_18px_40px_-12px_rgba(255,122,0,0.75)] hover:brightness-105"
    >
      {children}
      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
    </a>
  );
}

function ReviewCard({ review, compact }: { review: GoogleReview; compact?: boolean }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-[hsl(var(--border))] bg-white/80 p-6 shadow-sm">
      <Stars rating={review.rating} label={`${review.rating} out of 5 stars`} />
      {review.title ? <h3 className="mt-3 text-sm font-semibold leading-snug">{review.title}</h3> : null}
      <p className={`flex-1 text-sm leading-relaxed text-[hsl(var(--muted-foreground))] ${review.title ? "mt-2" : "mt-3"}`}>
        &ldquo;{reviewCardText(review.text, compact ? 180 : 280)}&rdquo;
      </p>
      <footer className="mt-4">
        <p className="font-semibold">{review.name}</p>
        {review.date ? <p className="text-xs text-[hsl(var(--muted-foreground))]">{review.date}</p> : null}
      </footer>
    </article>
  );
}

/**
 * Real Google reviews only. An empty data file renders the link and no numbers.
 * No AggregateRating or Review JSON-LD — Google treats self-served review markup as ineligible.
 */
export function GoogleReviews({ variant = "full" }: { variant?: "full" | "compact" }) {
  const { rating, count, reviews } = googleReviews;
  const filled = rating != null && count != null && reviews.length > 0;
  const visible = variant === "compact"
    ? reviews.filter((review) => review.text.length <= 90).slice(0, 3)
    : reviews;

  return (
    <section className="section-padding relative" aria-labelledby="reviews-heading">
      <div className="container-site">
        <h2 id="reviews-heading" className={filled ? "mb-3 text-center text-3xl font-bold md:text-4xl" : "sr-only"}>
          Google reviews
        </h2>
        {filled ? (
          <>
            <div className="mb-8 flex flex-col items-center gap-2 text-center">
              <Stars rating={rating} label={`${rating.toFixed(1)} out of 5 stars`} />
              <p className="text-lg font-semibold">
                {rating.toFixed(1)} on Google, {count} {count === 1 ? "review" : "reviews"}
              </p>
            </div>
            <div className={`grid gap-6 ${variant === "compact" ? "md:grid-cols-3" : "sm:grid-cols-2 xl:grid-cols-3"}`}>
              {visible.map((review) => (
                <ReviewCard key={`${review.name}-${review.date ?? review.text.slice(0, 24)}`} review={review} compact={variant === "compact"} />
              ))}
            </div>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ReviewLink href={GOOGLE_REVIEWS_URL}>Read our reviews on Google</ReviewLink>
              <a
                href={GOOGLE_LEAVE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border-2 border-[hsl(var(--primary))] px-5 py-3 text-sm font-bold text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-white"
              >
                Leave us a review
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </>
        ) : (
          <div className="flex justify-center">
            <ReviewLink href={GOOGLE_REVIEWS_URL}>Read our reviews on Google</ReviewLink>
          </div>
        )}
      </div>
    </section>
  );
}
