import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

/**
 * Redirect apex → www for all pages EXCEPT /signin/callback.
 * OAuth tokens arrive in the URL hash (#access_token) — a redirect would strip them.
 */
export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.replace(/:\d+$/, "")
  const { pathname } = request.nextUrl

  if (host === "t2pproof.link" && pathname !== "/signin/callback") {
    const dest = request.nextUrl.clone()
    dest.hostname = "www.t2pproof.link"
    return NextResponse.redirect(dest, 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    {
      source: "/:path*",
      has: [{ type: "host", value: "t2pproof.link" }],
    },
  ],
}
