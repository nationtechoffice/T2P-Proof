/** Pi Sign-in OAuth Client ID — public, safe to embed client-side (Pi Developer Portal) */
export const PI_OAUTH_CLIENT_ID_DEFAULT =
  "drzPoB3NasD7MndiCIsF1Ej4EkSZOQfJNSpzeMT1dTw"

export function getPiOAuthClientId(): string {
  return process.env.NEXT_PUBLIC_PI_OAUTH_CLIENT_ID || PI_OAUTH_CLIENT_ID_DEFAULT
}

/**
 * Must EXACTLY match a URI registered in Pi Developer Portal → Pi Sign-in → Redirect URIs.
 * Uses current browser origin so www vs non-www always matches.
 */
export function getPiOAuthRedirectUri(): string {
  const configured = process.env.NEXT_PUBLIC_PI_OAUTH_REDIRECT_URI
  if (configured) return configured

  if (typeof window !== "undefined") {
    return `${window.location.origin}/signin/callback`
  }

  // SSR fallback — site canonical host is www.t2pproof.link
  return "https://www.t2pproof.link/signin/callback"
}

export function isPiOAuthConfigured(): boolean {
  return Boolean(getPiOAuthClientId())
}

export const PI_OAUTH_SCOPES = ["username", "wallet_address"] as const

export const PI_OAUTH_STATE_KEY = "pi_oauth_state"
export const PI_OAUTH_RETURN_KEY = "pi_oauth_return"
