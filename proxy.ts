import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { CANONICAL_HOST, PATH_ALIASES, stripTrailingSlash } from "@/lib/redirects";

/**
 * Collapse host, trailing-slash, and alias mismatches into ONE 301.
 * Prevents GSC "Page with redirect" chains (www → slash → alias).
 */
export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get("host")?.split(":")[0]?.toLowerCase() ?? url.hostname;
  let pathname = stripTrailingSlash(url.pathname);

  const aliasTarget = PATH_ALIASES[pathname];
  if (aliasTarget) {
    pathname = aliasTarget;
  }

  const hostNeedsFix =
    hostname === `www.${CANONICAL_HOST}` || hostname.startsWith("www.");
  const pathNeedsFix = pathname !== url.pathname;

  if (!hostNeedsFix && !pathNeedsFix) {
    return NextResponse.next();
  }

  if (hostNeedsFix) {
    url.hostname = CANONICAL_HOST;
    url.protocol = "https:";
    url.port = "";
  }
  url.pathname = pathname;

  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|api/|favicon.svg|manifest.webmanifest|.*\\.[\\w]+$).*)",
  ],
};
