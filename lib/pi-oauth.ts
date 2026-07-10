/** Pi Sign-in OAuth Client ID — public, safe to embed client-side (Pi Developer Portal) */
export const PI_OAUTH_CLIENT_ID_DEFAULT =
  "drzPoB3NasD7MndiCIsF1Ej4EkSZOQfJNSpzeMT1dTw"

export const PI_APP_DOMAIN = "t2pproof.link"

/**
 * Pi portal accepts apex domain only (no www).
 * Must EXACTLY match Pi Developer Portal → Redirect URIs.
 */
export const PI_OAUTH_REDIRECT_URI_DEFAULT =
  "https://t2pproof.link/signin/callback"

export function getPiOAuthClientId(): string {
  return process.env.NEXT_PUBLIC_PI_OAUTH_CLIENT_ID || PI_OAUTH_CLIENT_ID_DEFAULT
}

export function getPiOAuthRedirectUri(): string {
  return (
    process.env.NEXT_PUBLIC_PI_OAUTH_REDIRECT_URI || PI_OAUTH_REDIRECT_URI_DEFAULT
  )
}

export function isPiOAuthConfigured(): boolean {
  return Boolean(getPiOAuthClientId())
}

export const PI_OAUTH_SCOPES = ["username", "wallet_address"] as const

import type { PiAuthIntent } from "./pi-session"

export interface PiOAuthStatePayload {
  nonce: string
  returnTo: string
  intent?: PiAuthIntent
  tokenId?: string
}

export function encodeOAuthState(
  returnTo: string,
  options?: { intent?: PiAuthIntent; tokenId?: string }
): string {
  const payload: PiOAuthStatePayload = {
    nonce: crypto.randomUUID(),
    returnTo,
    ...(options?.intent ? { intent: options.intent } : {}),
    ...(options?.tokenId ? { tokenId: options.tokenId } : {}),
  }
  return btoa(JSON.stringify(payload))
}

export function decodeOAuthState(state: string): PiOAuthStatePayload {
  const normalized = decodeURIComponent(state)
  const payload = JSON.parse(atob(normalized)) as PiOAuthStatePayload
  if (!payload?.nonce || !payload?.returnTo) {
    throw new Error("Invalid OAuth state payload.")
  }
  return payload
}

export const DEFAULT_RETURN_URL = "https://t2pproof.link/"
