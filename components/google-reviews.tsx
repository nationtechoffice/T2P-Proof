import { ExternalLink } from "lucide-react";
import { TrustindexWidget } from "@/components/trustindex-widget";
import { GOOGLE_LEAVE_REVIEW_URL, GOOGLE_REVIEWS_URL } from "@/lib/google-reviews";
import { getTrustindexWidgetId } from "@/lib/trustindex";

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

/**
 * Trustindex Google reviews widget (lazy-loaded). We do not emit Review/AggregateRating JSON-LD;
 * keep Trustindex “rich snippet” off in the widget settings (see lib/trustindex.ts).
 */
export function GoogleReviews({ variant = "full" }: { variant?: "full" | "compact" }) {
  const widgetId = getTrustindexWidgetId();
  const hasWidget = widgetId.length > 0;
  const minHeight = variant === "compact" ? 360 : 520;

  return (
    <section className="section-padding relative" aria-labelledby="reviews-heading">
      <div className="container-site">
        <h2
          id="reviews-heading"
          className={hasWidget ? "mb-6 text-center text-3xl font-bold md:text-4xl" : "sr-only"}
        >
          Google reviews
        </h2>

        {hasWidget ? (
          <div className="mb-8">
            <TrustindexWidget widgetId={widgetId} minHeight={minHeight} />
          </div>
        ) : null}

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ReviewLink href={GOOGLE_REVIEWS_URL}>See all reviews on Google</ReviewLink>
          <a
            href={GOOGLE_LEAVE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-xl border-2 border-[hsl(var(--primary))] px-5 py-3 text-sm font-bold text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-white"
          >
            Leave a review
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
