"use client"

import { useState, useCallback, useEffect } from "react"
import { Bot, CheckCircle2, Copy, Check, Shield, Zap } from "lucide-react"
import { PiAuthButton } from "@/components/PiAuthButton"
import { EMBED_SNIPPET } from "@/lib/embed-snippet"
import { usePiPendingIntent, usePiSession } from "@/hooks/use-pi-session"

type DemoState = "idle" | "verifying" | "verified"

export function DeveloperSection() {
  const [demoState, setDemoState] = useState<DemoState>("idle")
  const [verifiedUser, setVerifiedUser] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const { isSignedIn, user } = usePiSession()
  const pendingIntent = usePiPendingIntent()

  const handleDemoSuccess = useCallback((data: { user?: { username?: string } }) => {
    setDemoState("verified")
    setVerifiedUser(data.user?.username || "pioneer")
  }, [])

  useEffect(() => {
    if (!isSignedIn) return

    if (pendingIntent?.intent === "demo") {
      setDemoState("verified")
      setVerifiedUser(user?.username || "pioneer")
    }
  }, [isSignedIn, pendingIntent, user?.username])

  const handleDemoClick = () => {
    if (demoState === "verified") {
      setDemoState("idle")
      setVerifiedUser(null)
      return
    }

    if (isSignedIn) {
      setDemoState("verified")
      setVerifiedUser(user?.username || "pioneer")
      return
    }

    setDemoState("verifying")
  }

  const copySnippet = async () => {
    try {
      await navigator.clipboard.writeText(EMBED_SNIPPET)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="developers" className="scroll-mt-20">
      <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-[#0c0c10] via-[#0a0a0e] to-[#12100e]">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-500/10 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-orange-600/5 blur-[80px]" />

        <div className="relative grid gap-10 p-6 sm:p-10 lg:grid-cols-2 lg:gap-12">
          {/* Left: Hero + Demo */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-orange-400">
              For Developers
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
              Stop Bots. Authenticate Real Humans.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
              Drop-in Pi CAPTCHA bypass for your dApp, airdrop page, or signup flow. One line of
              code — real human verification powered by Pi Network&apos;s 50M+ Pioneers.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Shield className="h-4 w-4 text-orange-400" />
                Sybil-resistant
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Zap className="h-4 w-4 text-orange-400" />
                &lt; 2s verification
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Bot className="h-4 w-4 text-orange-400" />
                99.7% bot block rate
              </div>
            </div>

            {/* Interactive Demo */}
            <div className="mt-8 rounded-xl border border-slate-800 bg-[#050508] p-5">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                Live Demo
              </p>

              {demoState === "verified" ? (
                <div className="mt-4 flex items-start gap-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                  <div>
                    <p className="font-medium text-emerald-400">Human Verified</p>
                    <p className="mt-1 text-sm text-slate-300">
                      Welcome, <span className="font-mono text-white">@{verifiedUser}</span>.
                      Bot gate bypassed — access granted.
                    </p>
                  </div>
                </div>
              ) : demoState === "verifying" ? (
                <div className="mt-4">
                  <PiAuthButton
                    intent="demo"
                    onSuccess={handleDemoSuccess}
                    onError={() => setDemoState("idle")}
                    className="w-full sm:w-auto"
                  >
                    Test Pi Captcha Bypass
                  </PiAuthButton>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={handleDemoClick}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-black shadow-[0_0_24px_rgba(249,115,22,0.45)] transition-all hover:bg-orange-400 hover:shadow-[0_0_32px_rgba(249,115,22,0.65)] sm:w-auto"
                >
                  Test Pi Captcha Bypass
                </button>
              )}

              {demoState === "verified" && (
                <button
                  type="button"
                  onClick={() => {
                    setDemoState("idle")
                    setVerifiedUser(null)
                  }}
                  className="mt-3 text-xs text-slate-500 transition-colors hover:text-orange-400"
                >
                  Reset demo
                </button>
              )}
            </div>
          </div>

          {/* Right: Code Snippet */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                Embed in 30 seconds
              </p>
              <button
                type="button"
                onClick={copySnippet}
                className="inline-flex items-center gap-1.5 rounded-md border border-slate-700 px-2.5 py-1 text-xs text-slate-400 transition-colors hover:border-orange-500/50 hover:text-orange-400"
              >
                {copied ? (
                  <>
                    <Check className="h-3 w-3" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    Copy
                  </>
                )}
              </button>
            </div>

            <pre className="mt-3 flex-1 overflow-x-auto rounded-xl border border-slate-800 bg-[#050508] p-4 text-xs leading-relaxed text-slate-300">
              <code>{EMBED_SNIPPET}</code>
            </pre>

            <p className="mt-3 text-xs text-slate-500">
              Set <code className="text-orange-400/80">PI_API_KEY</code> in your server environment
              (see the{" "}
              <a href="/developer" className="text-orange-400 hover:underline">
                developer dashboard
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
