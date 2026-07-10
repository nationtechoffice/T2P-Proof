"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ShieldCheck, Loader2, CheckCircle2, XCircle } from "lucide-react"
import {
  decodeOAuthState,
  DEFAULT_RETURN_URL,
  getPiOAuthRedirectUri,
} from "@/lib/pi-oauth"
import { savePiSession, setPendingIntent } from "@/lib/pi-session"

type CallbackStatus = "processing" | "success" | "error"

export default function PiSignInCallbackPage() {
  const [status, setStatus] = useState<CallbackStatus>("processing")
  const [message, setMessage] = useState("Completing Pi Sign-in…")

  useEffect(() => {
    async function handleCallback() {
      try {
        const hash = window.location.hash.slice(1)

        if (!hash) {
          const host = window.location.hostname
          if (host.startsWith("www.")) {
            throw new Error(
              "OAuth token missing — www redirect stripped it. In Vercel → Domains, disable 'redirect t2pproof.link to www'."
            )
          }
          throw new Error("No sign-in response from Pi. Try again.")
        }

        const params = new URLSearchParams(hash)
        const stateParam = params.get("state")

        if (!stateParam) {
          throw new Error("Missing OAuth state. Please try signing in again.")
        }

        let returnTo = DEFAULT_RETURN_URL
        let decoded
        try {
          decoded = decodeOAuthState(stateParam)
          returnTo = decoded.returnTo
        } catch {
          throw new Error("Invalid sign-in state. Please try again.")
        }

        const error = params.get("error")
        if (error) {
          const labels: Record<string, string> = {
            access_denied: "You declined Pi Sign-in.",
            expired: "Sign-in request expired. Please try again.",
            cancelled: "Sign-in was cancelled.",
            server_error: "Pi Sign-in server error. Please try again.",
          }
          throw new Error(labels[error] || `Pi Sign-in failed: ${error}`)
        }

        const accessToken = params.get("access_token")
        if (!accessToken) {
          throw new Error("No access token received from Pi Sign-in.")
        }

        const response = await fetch("/api/verify-pi-login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ accessToken }),
        })

        const data = await response.json()
        if (!response.ok) {
          throw new Error(data.error || data.details || "Server verification failed.")
        }

        if (!data.user) {
          throw new Error("Verified sign-in but no user profile was returned.")
        }

        savePiSession(data.user)

        if (decoded.intent) {
          setPendingIntent({
            intent: decoded.intent,
            ...(decoded.tokenId ? { tokenId: decoded.tokenId } : {}),
          })
        }

        const username = data.user?.username
        setStatus("success")
        setMessage(username ? `Welcome, @${username}! Redirecting…` : "Signed in! Redirecting…")

        history.replaceState(null, "", window.location.pathname)

        setTimeout(() => {
          window.location.assign(returnTo)
        }, 800)
      } catch (err) {
        setStatus("error")
        setMessage(err instanceof Error ? err.message : "Pi Sign-in failed.")
        history.replaceState(null, "", window.location.pathname)
      }
    }

    handleCallback()
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#050508] px-4 text-slate-200">
      <div className="w-full max-w-md rounded-xl border border-slate-800 bg-[#0c0c10] p-8 text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg border border-orange-500/40 bg-orange-500/10 text-orange-400">
          {status === "processing" && <Loader2 className="h-6 w-6 animate-spin" />}
          {status === "success" && <CheckCircle2 className="h-6 w-6 text-emerald-400" />}
          {status === "error" && <XCircle className="h-6 w-6 text-red-400" />}
        </span>

        <h1 className="mt-4 text-lg font-semibold text-white">
          {status === "processing" && "Pi Sign-in"}
          {status === "success" && "Signed in"}
          {status === "error" && "Sign-in failed"}
        </h1>

        <p className="mt-2 text-sm leading-relaxed text-slate-400">{message}</p>

        <p className="mt-3 break-all text-xs text-slate-600">
          Expected callback: {getPiOAuthRedirectUri()}
        </p>

        {status === "error" && (
          <Link
            href={DEFAULT_RETURN_URL}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-black hover:bg-orange-400"
          >
            <ShieldCheck className="h-4 w-4" />
            Try again
          </Link>
        )}
      </div>
    </div>
  )
}
