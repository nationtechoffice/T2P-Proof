import {
  decodeOAuthState,
  encodeOAuthState,
  getPiOAuthClientId,
  getPiOAuthRedirectUri,
  isPiOAuthConfigured,
  PI_OAUTH_SCOPES,
} from "./pi-oauth"

const NATIVE_PI_FLAG = "pi_native_env"

let initPromise = null
let initFailed = false

const INIT_TIMEOUT_MS = 15000
const SDK_WAIT_MS = 8000
const AUTH_TIMEOUT_MS = 120000
const NATIVE_WAIT_MS = 2500

export function hasPiSdk() {
  return typeof window !== "undefined" && typeof window.Pi !== "undefined"
}

export function isNativePiEnv() {
  if (typeof window === "undefined") return false
  return sessionStorage.getItem(NATIVE_PI_FLAG) === "1"
}

export function markNativePiEnv() {
  if (typeof window !== "undefined") {
    sessionStorage.setItem(NATIVE_PI_FLAG, "1")
  }
}

export function shouldUseSandbox() {
  if (typeof window === "undefined") return true
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
        reject(new Error("Pi SDK not available."))
      }
    }, 150)

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
      } catch {
        await initPiWithTimeout(pi, { version: "2.0", sandbox: !sandbox })
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
 * OAuth redirect using the Pi-registered callback on t2pproof.link.
 * Return URL is encoded in the state param (cross-domain safe).
 */
export function startPlainOAuthSignIn() {
  if (!isPiOAuthConfigured()) {
    throw new Error("Pi OAuth client ID is not configured.")
  }

  const returnTo = window.location.href
  const state = encodeOAuthState(returnTo)
  const redirectUri = getPiOAuthRedirectUri()

  const url = new URL("https://accounts.pinet.com/oauth/authorize")
  url.searchParams.set("response_type", "token")
  url.searchParams.set("client_id", getPiOAuthClientId())
  url.searchParams.set("redirect_uri", redirectUri)
  url.searchParams.set("scope", PI_OAUTH_SCOPES.join(" "))
  url.searchParams.set("state", state)

  window.location.assign(url.toString())
}

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

async function tryNativePiAuth() {
  if (hasPiSdk()) {
    markNativePiEnv()
    return piAuthenticate(["username", "payments", "wallet_address"])
  }

  try {
    await waitForPiSdk(NATIVE_WAIT_MS)
    markNativePiEnv()
    return piAuthenticate(["username", "payments", "wallet_address"])
  } catch {
    return null
  }
}

/**
 * Pi Browser → authenticate(). All other browsers → OAuth via t2pproof.link callback.
 */
export async function piSignIn() {
  const nativeAuth = await tryNativePiAuth()
  if (nativeAuth?.accessToken) {
    return { method: "authenticate", auth: nativeAuth }
  }

  startPlainOAuthSignIn()
  return { method: "oauth_redirect" }
}

export function resetPiInitForTests() {
  initPromise = null
  initFailed = false
}

export { decodeOAuthState }
