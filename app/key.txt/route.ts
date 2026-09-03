import { siteConfig } from "@/lib/site-config";

/** IndexNow key at /key.txt as well as /{key}.txt */
export async function GET() {
  return new Response(`${siteConfig.indexNowKey}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, immutable",
    },
  });
}
