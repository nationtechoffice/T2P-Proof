import { savePiSession } from "@/lib/pi-session"
import {
  ensurePiInitialized,
  hasPiSdk,
  isNativePiEnv,
  markNativePiEnv,
  piAuthenticate,
  piSignIn,
} from "@/lib/pi-sdk"
import type { PiAuthIntent } from "@/lib/pi-session"

export const PI_AUTH_SCOPES = ["username"] as const

export type PiAuthOptions = {
  intent?: PiAuthIntent
  tokenId?: string
}

export type PiAuthResult = {
  success: true
  user: Record<string, unknown>
  redirecting?: false
}

export type PiAuthRedirect = {
  success: true
  redirecting: true
}

export async function verifyAccessTokenWithBackend(accessToken: string) {
  const response = await fetch("/api/verify-pi-login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ accessToken }),
    credentials: "include",
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.error || data.message || "Server verification failed.")
  }

  if (!data.user) {
    throw new Error("Verification succeeded but no user profile was returned.")
  }

  savePiSession(data.user)
  return data as { success: true; user: Record<string, unknown> }
}

function onIncompletePaymentFound(payment: unknown) {
  console.warn("Incomplete Pi payment found:", payment)
}

export async function authenticateWithPi(
  options: PiAuthOptions = {}
): Promise<PiAuthResult | PiAuthRedirect> {
  if (isNativePiEnv() || hasPiSdk()) {
    if (hasPiSdk() && !isNativePiEnv()) {
      markNativePiEnv()
    }

    await ensurePiInitialized()
    const auth = await piAuthenticate([...PI_AUTH_SCOPES], onIncompletePaymentFound)

    if (!auth?.accessToken) {
      throw new Error("Authentication completed without an access token.")
    }

    const verified = await verifyAccessTokenWithBackend(auth.accessToken)
    return { success: true, user: verified.user, redirecting: false }
  }

  piSignIn(options)
  return { success: true, redirecting: true }
}

export async function tryAutoAuthenticateOnLoad(): Promise<PiAuthResult | null> {
  if (typeof window === "undefined") return null
  if (window.location.pathname.startsWith("/signin/callback")) return null

  const { getPiSession } = await import("@/lib/pi-session")
  if (getPiSession()) return null

  const sdkReady = await waitForPiSdkReady()
  if (!sdkReady || !hasPiSdk()) return null

  try {
    const result = await authenticateWithPi({ intent: "signin" })
    if (result.redirecting) return null
    return result
  } catch {
    return null
  }
}

function waitForPiSdkReady(timeoutMs = 10000): Promise<boolean> {
  if (hasPiSdk()) return Promise.resolve(true)

  return new Promise((resolve) => {
    const onReady = () => {
      cleanup()
      resolve(hasPiSdk())
    }

    const cleanup = () => {
      clearTimeout(timeout)
      window.removeEventListener("pi-sdk-ready", onReady)
    }

    window.addEventListener("pi-sdk-ready", onReady)
    const timeout = setTimeout(() => {
      cleanup()
      resolve(hasPiSdk())
    }, timeoutMs)
  })
}
