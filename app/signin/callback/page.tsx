"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ShieldCheck, Loader2, CheckCircle2, XCircle } from "lucide-react"
import {
  PI_OAUTH_RETURN_KEY,
  PI_OAUTH_STATE_KEY,
} from "@/lib/pi-oauth"

type CallbackStatus = "processing" | "success" | "error"

export default function PiSignInCallbackPage() {
  const router = useRouter()
  const [status, setStatus] = useState<CallbackStatus>("processing")
  const [message, setMessage] = useState("Completing Pi Sign-in…")

  useEffect(() => {
    async function handleCallback() {
      try {
        const params = new URLSearchParams(window.location.hash.slice(1))
        const expectedState = sessionStorage.getItem(PI_OAUTH_STATE_KEY)
        sessionStorage.removeItem(PI_OAUTH_STATE_KEY)

        const returnedState = params.get("state")
        if (!expectedState || returnedState !== expectedState) {
          throw new Error("Sign-in state mismatch. Please try again.")
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
          throw new Error(data.error || "Server verification failed.")
        }

        const username = data.user?.username
        setStatus("success")
        setMessage(username ? `Welcome, @${username}!` : "Successfully signed in with Pi.")

        const returnPath = sessionStorage.getItem(PI_OAUTH_RETURN_KEY) || "/"
        sessionStorage.removeItem(PI_OAUTH_RETURN_KEY)

        history.replaceState(null, "", window.location.pathname)

        setTimeout(() => {
          router.replace(returnPath)
        }, 1200)
      } catch (err) {
        setStatus("error")
        setMessage(err instanceof Error ? err.message : "Pi Sign-in failed.")
        history.replaceState(null, "", window.location.pathname)
      }
    }

    handleCallback()
  }, [router])

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

        <p className="mt-2 text-sm text-slate-400">{message}</p>

        {status === "error" && (
          <Link
            href="/"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-black hover:bg-orange-400"
          >
            <ShieldCheck className="h-4 w-4" />
            Back to t2pproof.link
          </Link>
        )}
      </div>
    </div>
  )
}
