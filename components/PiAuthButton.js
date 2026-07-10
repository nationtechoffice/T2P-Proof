"use client"

import { useCallback, useEffect, useState } from "react"
import { ensurePiInitialized, isPiBrowser, piSignIn } from "@/lib/pi-sdk"
import { isPiOAuthConfigured } from "@/lib/pi-oauth"

const AUTH_SCOPES = ["username", "payments", "wallet_address"]

/**
 * @typedef {"idle" | "loading" | "success" | "error"} PiAuthStatus
 */

/**
 * @param {{
 *   children?: import("react").ReactNode
 *   className?: string
 *   onSuccess?: (data: { user: unknown }) => void
 *   onError?: (error: string) => void
 *   variant?: "primary" | "outline" | "ghost"
 *   size?: "sm" | "md" | "lg"
 * }} props
 */
export function PiAuthButton({
  children = "Sign in with Pi",
  className = "",
  onSuccess,
  onError,
  variant = "primary",
  size = "md",
}) {
  const [status, setStatus] = useState(/** @type {PiAuthStatus} */ ("idle"))
  const [errorMessage, setErrorMessage] = useState("")
  const [sdkReady, setSdkReady] = useState(false)
  const [sdkInitializing, setSdkInitializing] = useState(true)

  const oauthEnabled = isPiOAuthConfigured()
  const inPiBrowser = typeof window !== "undefined" && isPiBrowser()

  useEffect(() => {
    let cancelled = false

    ensurePiInitialized()
      .then(() => {
        if (!cancelled) {
          setSdkReady(true)
          setSdkInitializing(false)
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setSdkReady(false)
          setSdkInitializing(false)
          console.error("[PiAuthButton] SDK init failed:", err)
        }
      })

    return () => {
      cancelled = true
    }
  }, [])

  const verifyAccessToken = useCallback(
    async (accessToken) => {
      const response = await fetch("/api/verify-pi-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ accessToken }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || data.message || "Server verification failed.")
      }

      setStatus("success")
      onSuccess?.(data)
    },
    [onSuccess]
  )

  const handlePiLogin = useCallback(async () => {
    setStatus("loading")
    setErrorMessage("")

    try {
      const result = await piSignIn({
        useOAuth: oauthEnabled && !inPiBrowser,
      })

      if (result.method === "oauth_redirect") {
        return
      }

      if (!result.auth?.accessToken) {
        throw new Error("Authentication completed without an access token.")
      }

      await verifyAccessToken(result.auth.accessToken)
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Pi authentication failed."
      setErrorMessage(msg)
      setStatus("error")
      onError?.(msg)
    }
  }, [oauthEnabled, inPiBrowser, verifyAccessToken, onError])

  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  }

  const variantClasses = {
    primary:
      "bg-orange-500 text-black font-semibold shadow-[0_0_24px_rgba(249,115,22,0.45)] hover:bg-orange-400 hover:shadow-[0_0_32px_rgba(249,115,22,0.65)] disabled:opacity-60",
    outline:
      "border border-orange-500/50 text-orange-400 hover:border-orange-400 hover:bg-orange-500/10 disabled:opacity-60",
    ghost: "text-orange-400 hover:bg-orange-500/10 disabled:opacity-60",
  }

  const isLoading = status === "loading"
  const isSuccess = status === "success"
  const isDisabled = isLoading || isSuccess || sdkInitializing || !sdkReady

  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        onClick={handlePiLogin}
        disabled={isDisabled}
        className={`inline-flex items-center justify-center gap-2 rounded-lg transition-all ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      >
        {isLoading && (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}
        {isSuccess
          ? "Signed in ✓"
          : isLoading
            ? inPiBrowser
              ? "Authenticating…"
              : "Redirecting to Pi…"
            : sdkInitializing
              ? "Initializing Pi…"
              : children}
      </button>

      {sdkInitializing && status === "idle" && (
        <p className="text-xs text-slate-500">Connecting to Pi Network SDK…</p>
      )}

      {!sdkInitializing && !sdkReady && status === "idle" && (
        <p className="text-xs text-slate-500">
          {oauthEnabled
            ? "Pi Sign-in available in any browser."
            : "Open in Pi Browser for live authentication."}
        </p>
      )}

      {status === "error" && errorMessage && (
        <p className="text-xs text-red-400" role="alert">
          {errorMessage}
        </p>
      )}
    </div>
  )
}

export default PiAuthButton
