import { submitAllPagesToIndexNow } from "@/lib/indexnow";
import {
  googleIndexingConfigured,
  inspectPriorityUrls,
  pingBingSitemap,
  priorityInspectUrls,
  submitUrlsToGoogleIndexing,
} from "@/lib/google-indexing";
import { getAllSiteUrls } from "@/lib/sitemap-urls";

async function main() {
  const isProduction =
    process.env.VERCEL_ENV === "production" ||
    process.env.NODE_ENV === "production" ||
    process.env.INDEXNOW_ENABLED === "true";

  if (!isProduction) {
    console.log("[Indexing] Skipped — not a production build. Set INDEXNOW_ENABLED=true to force.");
    return;
  }

  const urls = getAllSiteUrls();
  console.log(`[Indexing] Submitting ${urls.length} canonical URLs...`);

  const indexNowResults = await submitAllPagesToIndexNow();
  const indexNowOk = indexNowResults.filter((r) => r.ok).length;
  for (const result of indexNowResults) {
    console.log(`[IndexNow] ${result.ok ? "OK" : "FAIL"} ${result.endpoint} → ${result.status || "error"}`);
  }

  const bingPing = await pingBingSitemap();
  console.log(`[Bing sitemap ping] ${bingPing.ok ? "OK" : "FAIL"} → ${bingPing.status || "error"}`);

  if (googleIndexingConfigured()) {
    const googleResults = await submitUrlsToGoogleIndexing(urls);
    const googleOk = googleResults.filter((r) => r.ok).length;
    console.log(`[Google Indexing API] ${googleOk}/${googleResults.length} URL_UPDATED accepted.`);
    const inspectResults = await inspectPriorityUrls(priorityInspectUrls(urls));
    if (inspectResults.length > 0) {
      const inspectOk = inspectResults.filter((r) => r.ok).length;
      console.log(`[Google URL Inspection] ${inspectOk}/${inspectResults.length} inspected.`);
    }
  } else {
    console.log("[Google Indexing API] Skipped — set GOOGLE_SERVICE_ACCOUNT_JSON to enable.");
  }

  if (indexNowOk === 0 && !googleIndexingConfigured()) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error("[Indexing] Submission failed:", error);
  process.exitCode = 1;
});
