import { NextResponse } from "next/server";
import { submitAllPagesToIndexNow, submitToIndexNow } from "@/lib/indexnow";

function isAuthorized(request: Request): boolean {
  const secret = process.env.INDEXNOW_SECRET || process.env.CRON_SECRET;
  if (!secret) {
    return process.env.NODE_ENV !== "production";
  }
  const auth = request.headers.get("authorization");
  return auth === `Bearer ${secret}`;
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json(
      { message: "Use POST or GET with Authorization: Bearer <INDEXNOW_SECRET|CRON_SECRET>." },
      { status: 401 }
    );
  }

  const results = await submitAllPagesToIndexNow();
  return NextResponse.json({
    submitted: true,
    urlCount: "all",
    results,
  });
}

export async function POST(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let urlList: string[] | undefined;

  try {
    const body = await request.json();
    if (Array.isArray(body?.urlList)) {
      urlList = body.urlList.filter((url: unknown) => typeof url === "string");
    }
  } catch {
    // No body — submit all canonical pages
  }

  const results = urlList ? await submitToIndexNow(urlList) : await submitAllPagesToIndexNow();

  return NextResponse.json({
    submitted: true,
    urlCount: urlList?.length ?? "all",
    results,
  });
}
