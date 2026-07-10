/** Pi Sign-in OAuth Client ID — public, safe to embed client-side (Pi Developer Portal) */
export const PI_OAUTH_CLIENT_ID_DEFAULT =
  "drzPoB3NasD7MndiCIsF1Ej4EkSZOQfJNSpzeMT1dTw"

export function getPiOAuthClientId(): string {
  return process.env.NEXT_PUBLIC_PI_OAUTH_CLIENT_ID || PI_OAUTH_CLIENT_ID_DEFAULT
}

export function getPiOAuthRedirectUri(origin?: string): string {
  const configured = process.env.NEXT_PUBLIC_PI_OAUTH_REDIRECT_URI
  if (configured) return configured
  if (origin) return `${origin}/signin/callback`
  return "https://t2pproof.link/signin/callback"
}

export function isPiOAuthConfigured(): boolean {
  return Boolean(getPiOAuthClientId())
}

export const PI_OAUTH_SCOPES = ["username", "wallet_address"] as const

export const PI_OAUTH_STATE_KEY = "pi_oauth_state"
export const PI_OAUTH_RETURN_KEY = "pi_oauth_return"
