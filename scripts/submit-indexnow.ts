import { submitAllPagesToIndexNow } from "@/lib/indexnow";

async function main() {
  const isProduction =
    process.env.VERCEL_ENV === "production" ||
    process.env.NODE_ENV === "production" ||
    process.env.INDEXNOW_ENABLED === "true";

  if (!isProduction) {
    console.log("[IndexNow] Skipped — not a production build. Set INDEXNOW_ENABLED=true to force.");
    return;
  }

  console.log("[IndexNow] Submitting all site URLs to search engines...");

  const results = await submitAllPagesToIndexNow();
  const succeeded = results.filter((r) => r.ok).length;

  for (const result of results) {
    const label = result.ok ? "OK" : "FAIL";
    console.log(`[IndexNow] ${label} ${result.endpoint} → ${result.status || "error"}`);
  }

  console.log(`[IndexNow] Done — ${succeeded}/${results.length} endpoints accepted.`);

  if (succeeded === 0) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error("[IndexNow] Submission failed:", error);
  process.exitCode = 1;
});
