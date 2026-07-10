"use client"

import { useCallback, useState } from "react"
import { piSignIn, isNativePiEnv } from "@/lib/pi-sdk"
import { getPiOAuthRedirectUri } from "@/lib/pi-oauth"

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
      const result = await piSignIn()

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
  }, [verifyAccessToken, onError])

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
  const nativePi = typeof window !== "undefined" && isNativePiEnv()

  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        onClick={handlePiLogin}
        disabled={isLoading || isSuccess}
        className={`inline-flex items-center justify-center gap-2 rounded-lg transition-all ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      >
        {isLoading && (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}
        {isSuccess
          ? "Signed in ✓"
          : isLoading
            ? nativePi
              ? "Approve in Pi…"
              : "Opening Pi Sign-in…"
            : children}
      </button>

      {status === "error" && errorMessage && (
        <p className="text-xs text-red-400" role="alert">
          {errorMessage}
        </p>
      )}

      {status === "error" && !nativePi && (
        <p className="text-xs text-slate-500">
          OAuth callback: <code className="text-orange-400/80">{getPiOAuthRedirectUri()}</code> — must
          be registered in Pi Developer Portal.
        </p>
      )}
    </div>
  )
}

export default PiAuthButton
