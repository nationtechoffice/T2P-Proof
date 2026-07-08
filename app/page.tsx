import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { TokenDirectory } from "@/components/token-directory"
import { DeveloperSection } from "@/components/developer-section"
import { ArrowRight, ShieldCheck } from "lucide-react"
import Link from "next/link"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#050508] text-slate-200">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-slate-800">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(249,115,22,0.08)_0%,_transparent_60%)]" />
          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-orange-300">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-400" />
                Proof of Humanity · Pi Network
              </span>
              <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Real Humans.{" "}
                <span className="text-orange-400">Real Tokens.</span> Zero Bots.
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-slate-400 sm:text-lg">
                t2pproof.link is the two-sided platform for verified Web3 — a curated token
                directory for Pioneers and a Pi CAPTCHA bypass API for developers.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#directory"
                  className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-black shadow-[0_0_24px_rgba(249,115,22,0.45)] transition-all hover:bg-orange-400"
                >
                  Browse Verified Tokens
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#developers"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 text-sm font-medium text-slate-300 transition-colors hover:border-orange-500/50 hover:text-orange-300"
                >
                  <ShieldCheck className="h-4 w-4" />
                  Developer API
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Split content */}
        <div className="mx-auto max-w-7xl space-y-24 px-4 py-16 sm:py-24">
          <TokenDirectory />

          <div className="relative">
            <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
            <div className="relative flex justify-center">
              <span className="bg-[#050508] px-4 text-xs font-medium uppercase tracking-widest text-slate-600">
                Two platforms · One identity layer
              </span>
            </div>
          </div>

          <DeveloperSection />

          {/* CTA strip */}
          <div className="rounded-xl border border-orange-500/20 bg-orange-500/5 p-6 text-center sm:p-10">
            <h3 className="text-xl font-semibold text-white">Ready to integrate?</h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">
              Get your API key, view metrics, and choose a pricing tier in the developer dashboard.
            </p>
            <Link
              href="/developer"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-orange-400"
            >
              Open Developer Dashboard
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
