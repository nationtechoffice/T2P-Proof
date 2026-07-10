"use client"

import { useState, type ComponentType } from "react"
import Link from "next/link"
import {
  ShieldCheck,
  Eye,
  EyeOff,
  Bot,
  Users,
  Key,
  Check,
  ArrowLeft,
  Copy,
} from "lucide-react"
import { SiteFooter } from "@/components/site-footer"

const METRICS = {
  totalVerifications: 128_472,
  botsBlocked: 3_891_204,
  activeIntegrations: 214,
  uptime: "99.97%",
}

const PRICING_TIERS = [
  {
    id: "hobbyist",
    name: "Hobbyist",
    price: "Free",
    period: "",
    description: "Perfect for side projects and prototypes.",
    limits: ["1,000 verifications/mo", "Community support", "Sandbox mode"],
    highlighted: false,
  },
  {
    id: "startup",
    name: "Startup",
    price: "$49",
    period: "/mo",
    description: "For growing dApps and launchpads.",
    limits: ["50,000 verifications/mo", "Priority support", "Custom branding", "Analytics API"],
    highlighted: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "High-volume, SLA-backed verification at scale.",
    limits: ["Unlimited verifications", "Dedicated support", "On-prem option", "Custom SLA"],
    highlighted: false,
  },
]

function formatNumber(n: number): string {
  return n.toLocaleString("en-US")
}

function maskApiKey(key: string): string {
  if (key.length <= 12) return "•".repeat(key.length)
  return `${key.slice(0, 8)}${"•".repeat(Math.min(key.length - 16, 32))}${key.slice(-8)}`
}

export function DeveloperDashboard({
  piApiKey,
  apiKeyConfigured,
  piOAuthClientId,
  piOAuthRedirectUri,
  piAppDomain,
}: {
  piApiKey: string
  apiKeyConfigured: boolean
  piOAuthClientId: string
  piOAuthRedirectUri: string
  piAppDomain: string
}) {
  const [showApiKey, setShowApiKey] = useState(false)
  const [selectedTier, setSelectedTier] = useState("startup")
  const [copied, setCopied] = useState(false)
  const [copiedOAuth, setCopiedOAuth] = useState(false)

  const maskedKey = piApiKey ? maskApiKey(piApiKey) : ""

  const copyKey = async () => {
    if (!piApiKey) return
    try {
      await navigator.clipboard.writeText(piApiKey)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  const copyOAuthId = async () => {
    try {
      await navigator.clipboard.writeText(piOAuthClientId)
      setCopiedOAuth(true)
      setTimeout(() => setCopiedOAuth(false), 2000)
    } catch {
      setCopiedOAuth(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#050508] text-slate-200">
      <header className="border-b border-slate-800 bg-[#0c0c10]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-orange-300"
            >
              <ArrowLeft className="h-4 w-4" />
              Home
            </Link>
            <div className="hidden h-4 w-px bg-slate-800 sm:block" />
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-orange-500/40 bg-orange-500/10 text-orange-400">
                <ShieldCheck className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Developer Dashboard</p>
                <p className="text-xs text-slate-500">t2pproof.link · Pi Platform API</p>
              </div>
            </div>
          </div>
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
            API Online
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            icon={Users}
            label="Total Verifications"
            value={formatNumber(METRICS.totalVerifications)}
          />
          <MetricCard
            icon={Bot}
            label="Bot Attacks Blocked"
            value={formatNumber(METRICS.botsBlocked)}
          />
          <MetricCard
            icon={ShieldCheck}
            label="Active Integrations"
            value={String(METRICS.activeIntegrations)}
          />
          <MetricCard icon={Key} label="API Uptime" value={METRICS.uptime} />
        </div>

        <div className="mt-8 rounded-xl border border-slate-800 bg-[#0c0c10] p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-sm font-semibold text-white">Pi Developer API Key</h2>
              <p className="mt-1 text-xs text-slate-500">
                Server-side only. Use with{" "}
                <code className="text-orange-400/80">Authorization: Key &lt;api_key&gt;</code> on
                Pi Platform API calls. Never expose in frontend code.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={copyKey}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-3 py-2 text-xs font-medium text-slate-400 transition-colors hover:border-orange-500/50 hover:text-orange-400"
              >
                <Copy className="h-3.5 w-3.5" />
                {copied ? "Copied" : "Copy"}
              </button>
              <button
                type="button"
                onClick={() => setShowApiKey((v) => !v)}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-3 py-2 text-xs font-medium text-slate-400 transition-colors hover:border-orange-500/50 hover:text-orange-400"
              >
                {showApiKey ? (
                  <>
                    <EyeOff className="h-3.5 w-3.5" />
                    Hide
                  </>
                ) : (
                  <>
                    <Eye className="h-3.5 w-3.5" />
                    Show
                  </>
                )}
              </button>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-3 rounded-lg border border-slate-800 bg-[#050508] px-4 py-3">
            <Key className="h-4 w-4 shrink-0 text-orange-400" />
            <code className="flex-1 overflow-x-auto break-all font-mono text-sm text-slate-300">
              {apiKeyConfigured
                ? showApiKey
                  ? piApiKey
                  : maskedKey
                : "PI_API_KEY not set — add it in Vercel Environment Variables"}
            </code>
          </div>
          {!apiKeyConfigured && (
            <p className="mt-3 text-xs text-amber-400">
              Set <code className="text-orange-300">PI_API_KEY</code> in your Vercel project settings
              under Environment Variables, then redeploy.
            </p>
          )}
        </div>

        <div className="mt-6 rounded-xl border border-amber-500/30 bg-amber-500/5 p-6">
          <h2 className="text-sm font-semibold text-amber-300">Pi domain requirement</h2>
          <p className="mt-2 text-xs leading-relaxed text-slate-400">
            Your Pi app is registered on{" "}
            <code className="text-orange-400">{piAppDomain}</code>. Redirect URIs on vercel.app or
            t2pproof.link are rejected. Add <code className="text-orange-400">{piAppDomain}</code>{" "}
            as a custom domain in Vercel, then register:
          </p>
          <code className="mt-3 block rounded-lg border border-slate-800 bg-[#050508] px-3 py-2 text-xs text-emerald-400">
            {piOAuthRedirectUri}
          </code>
        </div>

        <div className="mt-6 rounded-xl border border-slate-800 bg-[#0c0c10] p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-sm font-semibold text-white">Pi Sign-in OAuth Client ID</h2>
              <p className="mt-1 text-xs text-slate-500">
                Public client ID for Sign in with Pi. Callback:{" "}
                <code className="text-orange-400/80">{piOAuthRedirectUri}</code>
              </p>
            </div>
            <button
              type="button"
              onClick={copyOAuthId}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-3 py-2 text-xs font-medium text-slate-400 transition-colors hover:border-orange-500/50 hover:text-orange-400"
            >
              <Copy className="h-3.5 w-3.5" />
              {copiedOAuth ? "Copied" : "Copy"}
            </button>
          </div>
          <div className="mt-4 flex items-center gap-3 rounded-lg border border-slate-800 bg-[#050508] px-4 py-3">
            <ShieldCheck className="h-4 w-4 shrink-0 text-orange-400" />
            <code className="flex-1 overflow-x-auto break-all font-mono text-sm text-slate-300">
              {piOAuthClientId}
            </code>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-lg font-semibold text-white">Pricing Tiers</h2>
          <p className="mt-1 text-sm text-slate-400">
            Select the plan that fits your verification volume.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {PRICING_TIERS.map((tier) => {
              const isSelected = selectedTier === tier.id

              return (
                <button
                  key={tier.id}
                  type="button"
                  onClick={() => setSelectedTier(tier.id)}
                  className={`relative flex flex-col rounded-xl border p-6 text-left transition-all ${
                    isSelected
                      ? "border-orange-500 bg-orange-500/5 shadow-[0_0_24px_rgba(249,115,22,0.12)]"
                      : "border-slate-800 bg-[#0c0c10] hover:border-slate-700"
                  }`}
                >
                  {tier.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-black">
                      Popular
                    </span>
                  )}

                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-white">{tier.name}</h3>
                    {isSelected && (
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-black">
                        <Check className="h-3 w-3" />
                      </span>
                    )}
                  </div>

                  <p className="mt-2">
                    <span className="text-2xl font-bold text-white">{tier.price}</span>
                    {tier.period && (
                      <span className="text-sm text-slate-500">{tier.period}</span>
                    )}
                  </p>

                  <p className="mt-2 text-sm text-slate-400">{tier.description}</p>

                  <ul className="mt-4 flex-1 space-y-2">
                    {tier.limits.map((limit) => (
                      <li key={limit} className="flex items-start gap-2 text-sm text-slate-300">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-orange-400" />
                        {limit}
                      </li>
                    ))}
                  </ul>

                  <span
                    className={`mt-6 block rounded-lg py-2.5 text-center text-sm font-semibold ${
                      isSelected
                        ? "bg-orange-500 text-black"
                        : "border border-slate-700 text-slate-300"
                    }`}
                  >
                    {isSelected ? "Current Plan" : "Select Plan"}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}

function MetricCard({
  icon: Icon,
  label,
  value,
}: {
  icon: ComponentType<{ className?: string }>
  label: string
  value: string
}) {
  return (
    <div className="rounded-xl border border-slate-800 bg-[#0c0c10] p-5 transition-colors hover:border-orange-500/30">
      <div className="flex items-center gap-2 text-orange-400">
        <Icon className="h-4 w-4" />
        <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
          {label}
        </span>
      </div>
      <p className="mt-3 text-2xl font-semibold text-white">{value}</p>
    </div>
  )
}
