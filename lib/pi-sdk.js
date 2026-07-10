import {
  getPiOAuthClientId,
  getPiOAuthRedirectUri,
  isPiOAuthConfigured,
  PI_OAUTH_RETURN_KEY,
  PI_OAUTH_SCOPES,
  PI_OAUTH_STATE_KEY,
} from "./pi-oauth"

let initPromise = null

function waitForPiSdk(timeoutMs = 12000) {
  return new Promise((resolve, reject) => {
    if (typeof window !== "undefined" && window.Pi) {
      resolve(window.Pi)
      return
    }

    const started = Date.now()
    const interval = setInterval(() => {
      if (window.Pi) {
        clearInterval(interval)
        resolve(window.Pi)
        return
      }

      if (Date.now() - started >= timeoutMs) {
        clearInterval(interval)
        reject(
          new Error(
            "Pi SDK not loaded. Open this page in Pi Browser or ensure the SDK script is present."
          )
        )
      }
    }, 150)
  })
}

/**
 * @returns {boolean}
 */
export function isPiBrowser() {
  if (typeof navigator === "undefined") return false
  return /PiBrowser/i.test(navigator.userAgent)
}

/**
 * Ensures Pi SDK script is loaded and init() has completed exactly once.
 * @returns {Promise<NonNullable<Window["Pi"]>>}
 */
export async function ensurePiInitialized() {
  if (typeof window === "undefined") {
    throw new Error("Pi SDK is only available in the browser.")
  }

  const pi = await waitForPiSdk()

  if (!initPromise) {
    const isProduction = process.env.NODE_ENV === "production"
    initPromise = Promise.resolve(
      pi.init({ version: "2.0", sandbox: !isProduction })
    )
  }

  await initPromise
  return pi
}

/**
 * Pi app auth inside Pi Browser (Pi.authenticate).
 * @param {string[]} scopes
 */
export async function piAuthenticate(scopes) {
  const pi = await ensurePiInitialized()
  return pi.authenticate(scopes, () => {})
}

/**
 * Pi Sign-in OAuth for standard browsers (Pi.signIn redirect flow).
 */
export async function piOAuthSignIn() {
  if (!isPiOAuthConfigured()) {
    throw new Error("Pi OAuth is not configured. Set NEXT_PUBLIC_PI_OAUTH_CLIENT_ID.")
  }

  const pi = await ensurePiInitialized()

  if (typeof pi.signIn !== "function") {
    throw new Error("Pi Sign-in is not available. Update Pi SDK or use Pi Browser.")
  }

  const state = crypto.randomUUID()
  sessionStorage.setItem(PI_OAUTH_STATE_KEY, state)
  sessionStorage.setItem(PI_OAUTH_RETURN_KEY, window.location.pathname + window.location.search)

  pi.signIn({
    clientId: getPiOAuthClientId(),
    redirectUri: getPiOAuthRedirectUri(window.location.origin),
    scopes: [...PI_OAUTH_SCOPES],
    state,
  })
}

/**
 * Choose the right sign-in path for the current environment.
 * @param {{ useOAuth?: boolean }} [options]
 */
export async function piSignIn(options = {}) {
  const preferOAuth = options.useOAuth ?? !isPiBrowser()

  if (preferOAuth && isPiOAuthConfigured()) {
    await piOAuthSignIn()
    return { method: "oauth_redirect" }
  }

  const auth = await piAuthenticate(["username", "payments", "wallet_address"])
  return { method: "authenticate", auth }
}

export function resetPiInitForTests() {
  initPromise = null
}
