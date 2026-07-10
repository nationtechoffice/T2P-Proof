import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

/**
 * Canonical host is t2pproof.link (no www).
 * Pi OAuth callback MUST land on apex — www breaks token delivery.
 */
export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.replace(/:\d+$/, "")

  if (host === "www.t2pproof.link") {
    const dest = request.nextUrl.clone()
    dest.hostname = "t2pproof.link"
    return NextResponse.redirect(dest, 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    {
      source: "/:path*",
      has: [{ type: "host", value: "www.t2pproof.link" }],
    },
  ],
}
