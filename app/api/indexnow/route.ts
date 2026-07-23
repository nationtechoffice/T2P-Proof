import { NextResponse } from "next/server";
import { submitAllPagesToIndexNow, submitToIndexNow } from "@/lib/indexnow";

export async function GET() {
  const secret = process.env.INDEXNOW_SECRET;
  if (secret) {
    return NextResponse.json(
      { message: "Use POST with Authorization header to trigger IndexNow submission." },
      { status: 200 }
    );
  }

  const results = await submitAllPagesToIndexNow();
  return NextResponse.json({
    submitted: true,
    results,
  });
}

export async function POST(request: Request) {
  const secret = process.env.INDEXNOW_SECRET;

  if (secret) {
    const auth = request.headers.get("authorization");
    if (auth !== `Bearer ${secret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  let urlList: string[] | undefined;

  try {
    const body = await request.json();
    if (Array.isArray(body?.urlList)) {
      urlList = body.urlList.filter((url: unknown) => typeof url === "string");
    }
  } catch {
    // No body — submit all pages
  }

  const results = urlList ? await submitToIndexNow(urlList) : await submitAllPagesToIndexNow();

  return NextResponse.json({
    submitted: true,
    urlCount: urlList?.length ?? "all",
    results,
  });
}
