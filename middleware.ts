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
