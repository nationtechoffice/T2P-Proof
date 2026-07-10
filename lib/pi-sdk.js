import {
  getPiOAuthClientId,
  getPiOAuthRedirectUri,
  isPiOAuthConfigured,
  PI_OAUTH_RETURN_KEY,
  PI_OAUTH_SCOPES,
  PI_OAUTH_STATE_KEY,
} from "./pi-oauth"

const NATIVE_PI_FLAG = "pi_native_env"

let initPromise = null
let initFailed = false

const INIT_TIMEOUT_MS = 15000
const SDK_WAIT_MS = 12000
const AUTH_TIMEOUT_MS = 120000

/**
 * @returns {boolean}
 */
export function hasPiSdk() {
  return typeof window !== "undefined" && typeof window.Pi !== "undefined"
}

/**
 * True when Pi Browser injected window.Pi before our SDK script loaded.
 * @returns {boolean}
 */
export function isNativePiEnv() {
  if (typeof window === "undefined") return false
  return sessionStorage.getItem(NATIVE_PI_FLAG) === "1"
}

export function markNativePiEnv() {
  if (typeof window !== "undefined") {
    sessionStorage.setItem(NATIVE_PI_FLAG, "1")
  }
}

/**
 * @returns {boolean}
 */
export function shouldUseSandbox() {
  if (typeof window === "undefined") return true
  const host = window.location.hostname
  if (host === "localhost" || host === "127.0.0.1" || host.endsWith(".vercel.app")) {
    return true
  }
  // Use sandbox until app is mainnet-approved in Pi Developer Portal
  return true
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
        reject(new Error("Pi SDK not available. Reload the page in Pi Browser."))
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
        () => reject(new Error("Pi SDK init timed out. Reload and try again.")),
        INIT_TIMEOUT_MS
      )
    ),
  ])
}

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
      const sandbox = shouldUseSandbox()
      try {
        await initPiWithTimeout(pi, { version: "2.0", sandbox })
      } catch (firstError) {
        if (sandbox) {
          await initPiWithTimeout(pi, { version: "2.0", sandbox: false })
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
 * Plain OAuth redirect — works in Safari, Chrome, etc.
 */
export function startPlainOAuthSignIn() {
  if (!isPiOAuthConfigured()) {
    throw new Error("Pi OAuth client ID is not configured.")
  }

  const state = crypto.randomUUID()
  const redirectUri = getPiOAuthRedirectUri()

  sessionStorage.setItem(PI_OAUTH_STATE_KEY, state)
  sessionStorage.setItem(
    PI_OAUTH_RETURN_KEY,
    window.location.pathname + window.location.search
  )

  const url = new URL("https://accounts.pinet.com/oauth/authorize")
  url.searchParams.set("response_type", "token")
  url.searchParams.set("client_id", getPiOAuthClientId())
  url.searchParams.set("redirect_uri", redirectUri)
  url.searchParams.set("scope", PI_OAUTH_SCOPES.join(" "))
  url.searchParams.set("state", state)

  window.location.assign(url.toString())
}

/**
 * Pi Browser native auth via Pi.authenticate()
 * @param {string[]} scopes
 */
export async function piAuthenticate(scopes) {
  const pi = await ensurePiInitialized()
  if (typeof pi.authenticate !== "function") {
    throw new Error("Pi.authenticate is not available.")
  }

  return Promise.race([
    pi.authenticate(scopes, () => {}),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Pi authentication timed out.")), AUTH_TIMEOUT_MS)
    ),
  ])
}

/**
 * Pi Browser → authenticate(). All other browsers → OAuth redirect.
 */
export async function piSignIn() {
  if (isNativePiEnv()) {
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
