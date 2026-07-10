"use client"

import { useCallback, useEffect, useState } from "react"

const SCOPES = ["username", "payments", "wallet_address"]

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
  children = "Verify with Pi",
  className = "",
  onSuccess,
  onError,
  variant = "primary",
  size = "md",
}) {
  const [status, setStatus] = useState(/** @type {PiAuthStatus} */ ("idle"))
  const [errorMessage, setErrorMessage] = useState("")
  const [sdkReady, setSdkReady] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    const initPi = () => {
      if (!window.Pi) {
        setSdkReady(false)
        return
      }

      try {
        const isProduction = process.env.NODE_ENV === "production"
        window.Pi.init({ version: "2.0", sandbox: !isProduction })
        setSdkReady(true)
      } catch (err) {
        console.error("[PiAuthButton] SDK init failed:", err)
        setSdkReady(false)
      }
    }

    if (window.Pi) {
      initPi()
      return
    }

    const interval = setInterval(() => {
      if (window.Pi) {
        initPi()
        clearInterval(interval)
      }
    }, 200)

    const timeout = setTimeout(() => {
      clearInterval(interval)
    }, 10000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  const handlePiLogin = useCallback(async () => {
    if (!window.Pi) {
      const msg = "Pi SDK not loaded. Open in Pi Browser or ensure the SDK script is present."
      setErrorMessage(msg)
      setStatus("error")
      onError?.(msg)
      return
    }

    setStatus("loading")
    setErrorMessage("")

    try {
      const auth = await window.Pi.authenticate(SCOPES, () => {})

      if (!auth?.accessToken) {
        throw new Error("Authentication completed without an access token.")
      }

      const response = await fetch("/api/verify-pi-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ accessToken: auth.accessToken }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || data.message || "Server verification failed.")
      }

      setStatus("success")
      onSuccess?.(data)
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Pi authentication failed."
      setErrorMessage(msg)
      setStatus("error")
      onError?.(msg)
    }
  }, [onSuccess, onError])

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
        {isSuccess ? "Verified ✓" : isLoading ? "Authenticating…" : children}
      </button>

      {!sdkReady && status === "idle" && (
        <p className="text-xs text-slate-500">
          Pi SDK loading… Use Pi Browser for live auth.
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
