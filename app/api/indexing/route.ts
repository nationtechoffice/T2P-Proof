import { NextResponse } from "next/server";
import { submitAllPagesToIndexNow, submitToIndexNow } from "@/lib/indexnow";
import {
  googleIndexingConfigured,
  inspectPriorityUrls,
  pingBingSitemap,
  priorityInspectUrls,
  submitUrlsToGoogleIndexing,
} from "@/lib/google-indexing";
import { getAllSiteUrls } from "@/lib/sitemap-urls";

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

function isAuthorized(request: Request): boolean {
  const secret = process.env.INDEXNOW_SECRET;
  if (!secret) return true;
  return request.headers.get("authorization") === `Bearer ${secret}`;
}

export async function GET() {
  const secret = process.env.INDEXNOW_SECRET;
  if (secret) {
    return NextResponse.json(
      { message: "Use POST with Authorization: Bearer INDEXNOW_SECRET to submit URLs." },
      { status: 200 }
    );
  }
  return runSubmit();
}

export async function POST(request: Request) {
  if (!isAuthorized(request)) return unauthorized();

  let urlList: string[] | undefined;
  let inspect = false;
  try {
    const body = await request.json();
    if (Array.isArray(body?.urlList)) {
      urlList = body.urlList.filter((url: unknown) => typeof url === "string");
    }
    inspect = Boolean(body?.inspect);
  } catch {
    // no body — submit all canonical pages
  }

  return runSubmit(urlList, inspect);
}

async function runSubmit(urlList?: string[], inspect = false) {
  const urls = urlList?.length ? urlList : getAllSiteUrls();
  const indexNow = urlList?.length ? await submitToIndexNow(urls) : await submitAllPagesToIndexNow();
  const bing = await pingBingSitemap();
  const google = googleIndexingConfigured() ? await submitUrlsToGoogleIndexing(urls) : [];
  const inspection =
    inspect && googleIndexingConfigured() ? await inspectPriorityUrls(priorityInspectUrls(urls)) : [];

  return NextResponse.json({
    submitted: true,
    urlCount: urls.length,
    indexNow,
    bingSitemapPing: bing,
    googleIndexing: {
      configured: googleIndexingConfigured(),
      results: google.slice(0, 20),
      accepted: google.filter((r) => r.ok).length,
      attempted: google.length,
    },
    googleInspection: inspection,
  });
}
