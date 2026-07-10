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

export function resetPiInitForTests() {
  initPromise = null
}
