import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MEDIA_ROOT = path.join(process.cwd(), "media");

type RouteContext = {
  params: Promise<{ path: string[] }>;
};

export async function GET(_request: Request, context: RouteContext) {
  const { path: segments } = await context.params;
  if (!segments?.length || segments.some((segment) => segment === "" || segment === "." || segment === "..")) {
    return new NextResponse(null, { status: 404 });
  }

  const relativePath = segments.join("/");
  if (!relativePath.toLowerCase().endsWith(".avif")) {
    return new NextResponse(null, { status: 404 });
  }

  const filePath = path.resolve(MEDIA_ROOT, relativePath);
  const rootWithSep = MEDIA_ROOT.endsWith(path.sep) ? MEDIA_ROOT : `${MEDIA_ROOT}${path.sep}`;
  if (!filePath.startsWith(rootWithSep)) {
    return new NextResponse(null, { status: 404 });
  }

  try {
    const body = await readFile(filePath);
    return new NextResponse(new Uint8Array(body), {
      status: 200,
      headers: {
        "Content-Type": "image/avif",
        "Cache-Control": "public, max-age=604800, stale-while-revalidate=2592000",
      },
    });
  } catch {
    return new NextResponse(null, { status: 404 });
  }
}
