import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** Exact-path 301s. Dynamic service routes otherwise notFound() with the homepage title. */
const ALIAS_REDIRECTS: Record<string, string> = {
  "/services/tv-mounting": "/services/tv-wall-mounting",
  "/services/handyman/tv-mounting": "/services/tv-wall-mounting",
  "/services/fan-installation": "/services/handyman/fan-installation",
  "/services/same-day": "/services/same-day-handyman",
  "/same-day": "/services/same-day-handyman",
  "/same-day-handyman": "/services/same-day-handyman",
  "/services/handyman/drywall-repair": "/services/drywall-repair",
  "/services/drywall-repair-tampa": "/services/drywall-repair",
  "/services/handyman/tile-installation": "/services/tile-installation",
  "/services/tile-install": "/services/tile-installation",
  "/services/install-replace-tile": "/services/tile-installation",
};

/** Flooring LSA/search aliases. 308 so caches and crawlers treat the canonical as permanent. */
const FLOORING_CANONICAL = "/services/flooring-installation";
const FLOORING_ALIAS_REDIRECTS: Record<string, string> = {
  "/services/handyman/flooring-installation": FLOORING_CANONICAL,
  "/services/flooring-repair": FLOORING_CANONICAL,
  "/services/install-flooring": FLOORING_CANONICAL,
  "/services/handyman/install-flooring": FLOORING_CANONICAL,
  "/services/handyman/flooring-repair": FLOORING_CANONICAL,
  "/services/handyman/repair-flooring": FLOORING_CANONICAL,
  "/services/repair-flooring": FLOORING_CANONICAL,
  "/services/replace-flooring": FLOORING_CANONICAL,
  "/services/flooring-replacement": FLOORING_CANONICAL,
  "/services/handyman/replace-flooring": FLOORING_CANONICAL,
  "/services/handyman/flooring-replacement": FLOORING_CANONICAL,
};

/** Gutter LSA/search aliases. 308 so caches and crawlers treat the canonical as permanent. */
const GUTTER_CANONICAL = "/services/gutter-installation";
const GUTTER_ALIAS_REDIRECTS: Record<string, string> = {
  "/services/handyman/gutter-installation": GUTTER_CANONICAL,
  "/services/gutter-repair": GUTTER_CANONICAL,
  "/services/gutter-cleaning": GUTTER_CANONICAL,
  "/services/install-gutters": GUTTER_CANONICAL,
  "/services/gutter-install": GUTTER_CANONICAL,
  "/services/handyman/gutter-cleaning": GUTTER_CANONICAL,
  "/services/handyman/gutter-repair": GUTTER_CANONICAL,
  "/services/handyman/install-gutters": GUTTER_CANONICAL,
  "/services/repair-gutters": GUTTER_CANONICAL,
  "/services/handyman/repair-gutters": GUTTER_CANONICAL,
  "/services/replace-gutters": GUTTER_CANONICAL,
  "/services/gutter-replacement": GUTTER_CANONICAL,
  "/services/handyman/replace-gutters": GUTTER_CANONICAL,
  "/services/handyman/gutter-replacement": GUTTER_CANONICAL,
  "/services/clean-gutters": GUTTER_CANONICAL,
  "/services/handyman/clean-gutters": GUTTER_CANONICAL,
};

/** Furniture LSA/search aliases. 308 so caches and crawlers treat the canonical as permanent. */
const FURNITURE_ALIAS_REDIRECTS: Record<string, string> = {
  "/services/handyman/furniture-assembly": "/services/furniture-assembly",
  "/services/handyman/furniture-rearrangement": "/services/furniture-assembly",
  "/services/handyman/assemble-furniture": "/services/furniture-assembly",
  "/services/furniture-rearrangement": "/services/furniture-assembly",
  "/services/assemble-furniture": "/services/furniture-assembly",
  "/services/rearrange-furniture": "/services/furniture-assembly",
  "/services/furniture-moving": "/services/furniture-assembly",
  "/services/furniture-moving-help": "/services/furniture-assembly",
};

export function middleware(request: NextRequest) {
  const gutterDestination = GUTTER_ALIAS_REDIRECTS[request.nextUrl.pathname];
  if (gutterDestination) {
    const url = request.nextUrl.clone();
    url.pathname = gutterDestination;
    return NextResponse.redirect(url, 308);
  }

  const flooringDestination = FLOORING_ALIAS_REDIRECTS[request.nextUrl.pathname];
  if (flooringDestination) {
    const url = request.nextUrl.clone();
    url.pathname = flooringDestination;
    return NextResponse.redirect(url, 308);
  }

  const furnitureDestination = FURNITURE_ALIAS_REDIRECTS[request.nextUrl.pathname];
  if (furnitureDestination) {
    const url = request.nextUrl.clone();
    url.pathname = furnitureDestination;
    return NextResponse.redirect(url, 308);
  }

  const destination = ALIAS_REDIRECTS[request.nextUrl.pathname];
  if (!destination) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = destination;
  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: [
    "/services/tv-mounting",
    "/services/handyman/tv-mounting",
    "/services/fan-installation",
    "/services/same-day",
    "/same-day",
    "/same-day-handyman",
    "/services/handyman/drywall-repair",
    "/services/handyman/flooring-installation",
    "/services/flooring-repair",
    "/services/install-flooring",
    "/services/handyman/install-flooring",
    "/services/handyman/flooring-repair",
    "/services/handyman/repair-flooring",
    "/services/repair-flooring",
    "/services/replace-flooring",
    "/services/flooring-replacement",
    "/services/handyman/replace-flooring",
    "/services/handyman/flooring-replacement",
    "/services/handyman/gutter-installation",
    "/services/gutter-repair",
    "/services/gutter-cleaning",
    "/services/install-gutters",
    "/services/gutter-install",
    "/services/handyman/gutter-cleaning",
    "/services/handyman/gutter-repair",
    "/services/handyman/install-gutters",
    "/services/repair-gutters",
    "/services/handyman/repair-gutters",
    "/services/replace-gutters",
    "/services/gutter-replacement",
    "/services/handyman/replace-gutters",
    "/services/handyman/gutter-replacement",
    "/services/clean-gutters",
    "/services/handyman/clean-gutters",
    "/services/handyman/furniture-assembly",
    "/services/handyman/furniture-rearrangement",
    "/services/handyman/assemble-furniture",
    "/services/furniture-rearrangement",
    "/services/assemble-furniture",
    "/services/rearrange-furniture",
    "/services/furniture-moving",
    "/services/furniture-moving-help",
    "/services/drywall-repair-tampa",
    "/services/handyman/tile-installation",
    "/services/tile-install",
    "/services/install-replace-tile",
  ],
};
