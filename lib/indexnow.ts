import { siteConfig } from "./site-config";

const INDEXNOW_ENDPOINTS = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow",
  "https://yandex.com/indexnow",
  "https://search.seznam.cz/indexnow",
  "https://search.naver.com/indexnow",
] as const;

const MAX_URLS_PER_REQUEST = 10_000;

function getIndexNowKey(): string {
  return process.env.INDEXNOW_KEY || siteConfig.indexNowKey;
}

export function getIndexNowKeyLocation(): string {
  const key = getIndexNowKey();
  return `${siteConfig.url}/${key}.txt`;
}

export interface IndexNowResult {
  endpoint: string;
  status: number;
  ok: boolean;
}

export async function submitToIndexNow(urlList: string[]): Promise<IndexNowResult[]> {
  if (urlList.length === 0) {
    return [];
  }

  const key = getIndexNowKey();
  const payload = {
    host: siteConfig.domain,
    key,
    keyLocation: getIndexNowKeyLocation(),
    urlList: urlList.slice(0, MAX_URLS_PER_REQUEST),
  };

  const results: IndexNowResult[] = [];

  await Promise.all(
    INDEXNOW_ENDPOINTS.map(async (endpoint) => {
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          body: JSON.stringify(payload),
        });

        results.push({
          endpoint,
          status: response.status,
          ok: response.ok || response.status === 202,
        });
      } catch {
        results.push({
          endpoint,
          status: 0,
          ok: false,
        });
      }
    })
  );

  return results;
}

export async function submitAllPagesToIndexNow(): Promise<IndexNowResult[]> {
  const { getAllSiteUrls } = await import("./sitemap-urls");
  return submitToIndexNow(getAllSiteUrls());
}
