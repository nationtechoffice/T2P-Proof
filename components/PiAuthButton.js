"use client"

import { useCallback, useEffect, useState } from "react"
import { isNativePiEnv } from "@/lib/pi-sdk"
import { authenticateWithPi } from "@/lib/pi-auth"
import { getPiOAuthRedirectUri } from "@/lib/pi-oauth"
import { getPiSession } from "@/lib/pi-session"

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
 *   intent?: import("@/lib/pi-session").PiAuthIntent
 *   tokenId?: string
 *   showSignedInUser?: boolean
 * }} props
 */
export function PiAuthButton({
  children = "Sign in with Pi",
  className = "",
  onSuccess,
  onError,
  variant = "primary",
  size = "md",
  intent = "signin",
  tokenId,
  showSignedInUser = false,
}) {
  const [status, setStatus] = useState(/** @type {PiAuthStatus} */ ("idle"))
  const [errorMessage, setErrorMessage] = useState("")
  const [signedInUser, setSignedInUser] = useState(
    /** @type {{ username?: string } | null} */ (null)
  )

  useEffect(() => {
    const session = getPiSession()
    if (session?.user) {
      setSignedInUser(session.user)
      setStatus("success")
    }
  }, [])

  const completeWithExistingSession = useCallback(() => {
    const session = getPiSession()
    if (!session?.user) return false

    setSignedInUser(session.user)
    setStatus("success")
    onSuccess?.({ user: session.user })
    return true
  }, [onSuccess])

  const handlePiLogin = useCallback(async () => {
    if (completeWithExistingSession()) {
      return
    }

    setStatus("loading")
    setErrorMessage("")

    try {
      /** @type {{ intent?: "signin" | "demo" | "unlock"; tokenId?: string }} */
      const options = { intent, ...(tokenId ? { tokenId } : {}) }
      const result = await authenticateWithPi(options)

      if (result.redirecting) {
        return
      }

      setSignedInUser(result.user)
      setStatus("success")
      onSuccess?.({ user: result.user })
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Pi authentication failed."
      setErrorMessage(msg)
      setStatus("error")
      onError?.(msg)
    }
  }, [completeWithExistingSession, onError, intent, tokenId, onSuccess])

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
  const successLabel =
    showSignedInUser && signedInUser?.username
      ? `@${signedInUser.username}`
      : "Signed in ✓"

  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        onClick={handlePiLogin}
        disabled={isLoading || (isSuccess && !showSignedInUser)}
        className={`inline-flex items-center justify-center gap-2 rounded-lg transition-all ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      >
        {isLoading && (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}
        {isSuccess
          ? successLabel
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
          OAuth callback: <code className="text-orange-400/80">{getPiOAuthRedirectUri()}</code>
        </p>
      )}
    </div>
  )
}

export default PiAuthButton
