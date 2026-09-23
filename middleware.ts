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
  "/services/handyman/furniture-assembly": "/services/furniture-assembly",
  "/services/drywall-repair-tampa": "/services/drywall-repair",
};

export function middleware(request: NextRequest) {
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
    "/services/drywall-repair-tampa",
  ],
};
