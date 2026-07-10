import {
  getPiOAuthClientId,
  getPiOAuthRedirectUri,
  isPiOAuthConfigured,
  PI_OAUTH_RETURN_KEY,
  PI_OAUTH_SCOPES,
  PI_OAUTH_STATE_KEY,
} from "./pi-oauth"

let initPromise = null
let initFailed = false

const INIT_TIMEOUT_MS = 10000
const SDK_WAIT_MS = 15000

/**
 * @returns {boolean}
 */
export function hasPiSdk() {
  return typeof window !== "undefined" && typeof window.Pi !== "undefined"
}

/**
 * Pi Browser detection — UA hint only; authenticate availability is checked at runtime.
 * @returns {boolean}
 */
export function isPiBrowser() {
  if (typeof navigator === "undefined") return false
  const ua = navigator.userAgent || ""
  return /PiBrowser|Pi Network|minepi|pinet/i.test(ua)
}

/**
 * Sandbox for dev / preview hosts; production domain uses mainnet.
 * @returns {boolean}
 */
export function shouldUseSandbox() {
  if (typeof window === "undefined") return false
  const host = window.location.hostname
  return (
    host === "localhost" ||
    host === "127.0.0.1" ||
    host.endsWith(".vercel.app")
  )
}

function waitForPiSdk(timeoutMs = SDK_WAIT_MS) {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined") {
      reject(new Error("Pi SDK is only available in the browser."))
      return
    }

    if (window.Pi) {
      resolve(window.Pi)
      return
    }

    const onReady = () => {
      cleanup()
      if (window.Pi) resolve(window.Pi)
      else reject(new Error("Pi SDK script loaded but window.Pi is missing."))
    }

    const onError = () => {
      cleanup()
      reject(new Error("Failed to load Pi SDK script."))
    }

    const cleanup = () => {
      clearInterval(interval)
      clearTimeout(timeout)
      window.removeEventListener("pi-sdk-ready", onReady)
      window.removeEventListener("pi-sdk-error", onError)
    }

    window.addEventListener("pi-sdk-ready", onReady)
    window.addEventListener("pi-sdk-error", onError)

    const started = Date.now()
    const interval = setInterval(() => {
      if (window.Pi) {
        cleanup()
        resolve(window.Pi)
        return
      }
      if (Date.now() - started >= timeoutMs) {
        cleanup()
        reject(
          new Error(
            "Pi SDK not available. In Pi Browser, reload the page. On desktop, use Sign in with Pi."
          )
        )
      }
    }, 200)

    const timeout = setTimeout(() => {
      cleanup()
      reject(new Error("Timed out waiting for Pi SDK."))
    }, timeoutMs)
  })
}

async function initPiWithTimeout(pi, config) {
  const result = pi.init(config)
  await Promise.race([
    Promise.resolve(result),
    new Promise((_, reject) =>
      setTimeout(
        () =>
          reject(
            new Error(
              "Pi SDK init timed out. Check your app is registered at develop.pi and reload."
            )
          ),
        INIT_TIMEOUT_MS
      )
    ),
  ])
}

/**
 * Ensures Pi SDK is loaded and init() completed once.
 * @returns {Promise<NonNullable<Window["Pi"]>>}
 */
export async function ensurePiInitialized() {
  if (typeof window === "undefined") {
    throw new Error("Pi SDK is only available in the browser.")
  }

  if (initFailed) {
    initPromise = null
    initFailed = false
  }

  const pi = await waitForPiSdk()

  if (!initPromise) {
    initPromise = (async () => {
      const config = { version: "2.0", sandbox: shouldUseSandbox() }
      try {
        await initPiWithTimeout(pi, config)
      } catch (firstError) {
        // Retry with sandbox if mainnet init fails (common in Pi Browser during setup)
        if (!config.sandbox) {
          await initPiWithTimeout(pi, { version: "2.0", sandbox: true })
          return
        }
        throw firstError
      }
    })().catch((err) => {
      initPromise = null
      initFailed = true
      throw err
    })
  }

  await initPromise
  return pi
}

/**
 * Plain OAuth redirect — works in any browser, no SDK required.
 */
export function startPlainOAuthSignIn() {
  if (!isPiOAuthConfigured()) {
    throw new Error("Pi OAuth client ID is not configured.")
  }

  const state = crypto.randomUUID()
  sessionStorage.setItem(PI_OAUTH_STATE_KEY, state)
  sessionStorage.setItem(
    PI_OAUTH_RETURN_KEY,
    window.location.pathname + window.location.search
  )

  const url = new URL("https://accounts.pinet.com/oauth/authorize")
  url.searchParams.set("response_type", "token")
  url.searchParams.set("client_id", getPiOAuthClientId())
  url.searchParams.set("redirect_uri", getPiOAuthRedirectUri(window.location.origin))
  url.searchParams.set("scope", PI_OAUTH_SCOPES.join(" "))
  url.searchParams.set("state", state)

  window.location.assign(url.toString())
}

/**
 * Pi app auth inside Pi Browser.
 * @param {string[]} scopes
 */
export async function piAuthenticate(scopes) {
  const pi = await ensurePiInitialized()
  if (typeof pi.authenticate !== "function") {
    throw new Error("Pi.authenticate is not available in this browser.")
  }
  return pi.authenticate(scopes, () => {})
}

/**
 * Smart sign-in: Pi Browser → authenticate(); other browsers → OAuth redirect.
 */
export async function piSignIn() {
  if (isPiBrowser()) {
    const auth = await piAuthenticate(["username", "payments", "wallet_address"])
    return { method: "authenticate", auth }
  }

  startPlainOAuthSignIn()
  return { method: "oauth_redirect" }
}

export function resetPiInitForTests() {
  initPromise = null
  initFailed = false
}
