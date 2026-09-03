import { createPrivateKey, createSign } from "crypto";
import { siteConfig } from "./site-config";

/**
 * Google Indexing API + Search Console URL Inspection.
 *
 * Officially the Indexing API is documented for JobPosting / BroadcastEvent.
 * We still publish URL_UPDATED notifications when a service account is
 * configured so new service/location pages are pushed the moment they deploy.
 * URL Inspection is opt-in (GOOGLE_INDEXING_INSPECT=true) because quota is tight.
 *
 * Env:
 *   GOOGLE_SERVICE_ACCOUNT_JSON  — stringified service-account JSON
 *   GOOGLE_INDEXING_INSPECT      — "true" to run URL Inspection on priority URLs
 */

const INDEXING_SCOPE = "https://www.googleapis.com/auth/indexing";
const WEBMASTERS_SCOPE = "https://www.googleapis.com/auth/webmasters";
const TOKEN_URL = "https://oauth2.googleapis.com/token";
const PUBLISH_URL = "https://indexing.googleapis.com/v3/urlNotifications:publish";
const INSPECT_URL = "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect";

export interface GoogleIndexResult {
  url: string;
  ok: boolean;
  status: number;
  detail?: string;
}

interface ServiceAccount {
  client_email: string;
  private_key: string;
}

function readServiceAccount(): ServiceAccount | null {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as ServiceAccount;
    if (!parsed.client_email || !parsed.private_key) return null;
    return parsed;
  } catch {
    return null;
  }
}

function base64url(value: string | Buffer): string {
  const buf = Buffer.isBuffer(value) ? value : Buffer.from(value);
  return buf.toString("base64url");
}

function signJwt(account: ServiceAccount, scope: string): string {
  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const payload = base64url(
    JSON.stringify({
      iss: account.client_email,
      scope,
      aud: TOKEN_URL,
      iat: now,
      exp: now + 3600,
    })
  );
  const unsigned = `${header}.${payload}`;
  const key = createPrivateKey(account.private_key.replace(/\\n/g, "\n"));
  const signer = createSign("RSA-SHA256");
  signer.update(unsigned);
  const signature = base64url(signer.sign(key));
  return `${unsigned}.${signature}`;
}

async function getAccessToken(account: ServiceAccount, scope: string): Promise<string> {
  const jwt = signJwt(account, scope);
  const body = new URLSearchParams({
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: jwt,
  });
  const response = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  if (!response.ok) {
    throw new Error(`Google OAuth failed (${response.status})`);
  }
  const data = (await response.json()) as { access_token?: string };
  if (!data.access_token) throw new Error("Google OAuth missing access_token");
  return data.access_token;
}

export function googleIndexingConfigured(): boolean {
  return Boolean(readServiceAccount());
}

export async function publishUrlToGoogleIndexing(url: string, token: string): Promise<GoogleIndexResult> {
  try {
    const response = await fetch(PUBLISH_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url, type: "URL_UPDATED" }),
    });
    const detail = await response.text();
    return {
      url,
      ok: response.ok,
      status: response.status,
      detail: detail.slice(0, 300),
    };
  } catch (error) {
    return {
      url,
      ok: false,
      status: 0,
      detail: error instanceof Error ? error.message : "network error",
    };
  }
}

export async function inspectUrlInSearchConsole(url: string, token: string): Promise<GoogleIndexResult> {
  try {
    const response = await fetch(INSPECT_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inspectionUrl: url,
        siteUrl: `${siteConfig.url}/`,
        languageCode: "en-US",
      }),
    });
    const detail = await response.text();
    return {
      url,
      ok: response.ok,
      status: response.status,
      detail: detail.slice(0, 500),
    };
  } catch (error) {
    return {
      url,
      ok: false,
      status: 0,
      detail: error instanceof Error ? error.message : "network error",
    };
  }
}

async function mapPool<T, R>(items: T[], limit: number, mapper: (item: T) => Promise<R>): Promise<R[]> {
  const results: R[] = [];
  let index = 0;
  async function worker() {
    while (index < items.length) {
      const current = items[index++];
      results.push(await mapper(current));
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, () => worker()));
  return results;
}

export async function submitUrlsToGoogleIndexing(urlList: string[]): Promise<GoogleIndexResult[]> {
  const account = readServiceAccount();
  if (!account || urlList.length === 0) return [];

  const token = await getAccessToken(account, INDEXING_SCOPE);
  return mapPool(urlList, 5, (url) => publishUrlToGoogleIndexing(url, token));
}

export async function inspectPriorityUrls(urlList: string[]): Promise<GoogleIndexResult[]> {
  if (process.env.GOOGLE_INDEXING_INSPECT !== "true") return [];
  const account = readServiceAccount();
  if (!account || urlList.length === 0) return [];

  const token = await getAccessToken(account, WEBMASTERS_SCOPE);
  return mapPool(urlList, 2, (url) => inspectUrlInSearchConsole(url, token));
}

export function priorityInspectUrls(allUrls: string[]): string[] {
  const rank = (url: string) => {
    if (url === siteConfig.url) return 0;
    if (url.endsWith("/locations/westchase-fl") || url.endsWith("/locations/tampa-fl")) return 1;
    if (url.includes("/services/tv-wall-mounting") || url.includes("/services/drywall-repair")) return 2;
    if (url.endsWith("/contact") || url.endsWith("/services")) return 3;
    return 9;
  };
  return [...allUrls].sort((a, b) => rank(a) - rank(b)).slice(0, 8);
}

export async function pingBingSitemap(): Promise<{ ok: boolean; status: number }> {
  const sitemap = `${siteConfig.url}/sitemap.xml`;
  try {
    const response = await fetch(`https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemap)}`);
    return { ok: response.ok || response.status === 200, status: response.status };
  } catch {
    return { ok: false, status: 0 };
  }
}
