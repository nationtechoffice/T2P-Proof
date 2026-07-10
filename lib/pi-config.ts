const PI_API_BASE = "https://api.minepi.com/v2"

export function getPiApiKey(): string {
  const key = process.env.PI_API_KEY
  if (!key) {
    throw new Error("PI_API_KEY is not configured. Set it in your environment variables.")
  }
  return key
}

export function getPiApiKeyOrEmpty(): string {
  return process.env.PI_API_KEY ?? ""
}

export function isPiApiKeyConfigured(): boolean {
  return Boolean(process.env.PI_API_KEY)
}

export function getPiApiBase(): string {
  return PI_API_BASE
}

export function piServerHeaders(): HeadersInit {
  return {
    Authorization: `Key ${getPiApiKey()}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  }
}
