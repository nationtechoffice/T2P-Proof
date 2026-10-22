/**
 * Trustindex free Google reviews widget.
 * Set NEXT_PUBLIC_TRUSTINDEX_WIDGET_ID in env, or paste the ID below for deploys without env.
 *
 * In the Trustindex dashboard, disable the widget “rich snippet” / schema option so Trustindex
 * does not inject review or AggregateRating JSON-LD on our pages (we only use our own LocalBusiness graph).
 */
/** Swap this ID in one place when the Trustindex widget changes. */
export const TRUSTINDEX_WIDGET_ID_FALLBACK = "ea1b166845ba19703416d0ca600";

export function getTrustindexWidgetId(): string {
  const fromEnv = process.env.NEXT_PUBLIC_TRUSTINDEX_WIDGET_ID?.trim();
  if (fromEnv) return fromEnv;
  return TRUSTINDEX_WIDGET_ID_FALLBACK.trim();
}

export function trustindexLoaderSrc(widgetId: string): string {
  return `https://cdn.trustindex.io/loader.js?${widgetId}`;
}
