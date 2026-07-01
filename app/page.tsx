import Link from "next/link"
import { T2PGateway } from "@/components/t2p-gateway"
import { ShieldCheck } from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#060913] text-slate-200">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-[#1e293b] bg-[#060913]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-sky-500/40 bg-sky-500/10 text-sky-400 shadow-[0_0_16px_rgba(56,189,248,0.35)]">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold tracking-tight text-white">
              T2P<span className="text-sky-400">Proof</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-slate-400 md:flex">
            <a href="#network" className="transition-colors hover:text-sky-300">
              Network
            </a>
            <a href="#directory" className="transition-colors hover:text-sky-300">
              Directory
            </a>
            <Link href="/terms" className="transition-colors hover:text-sky-300">
              Docs
            </Link>
          </nav>
          <button
            type="button"
            className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-[#060913] shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-colors hover:bg-sky-400"
          >
            Verify with Pi
          </button>
        </div>
      </header>

      {/* Hero + interactive stage */}
      <main id="network" className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 pt-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-[#0d1326] px-4 py-1.5 text-xs font-medium tracking-wide text-sky-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-400" />
            Un-bottable Human Identity Gateways
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            Global Identification for a <span className="text-sky-400">verified</span> Web3
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-slate-400">
            T2P Proof secures crypto launches with un-bottable, one-human-one-identity gateways. Click the globe to
            open the live identity network.
          </p>
        </div>

        <section id="directory" className="mx-auto mt-10 max-w-6xl px-4 pb-24">
          <T2PGateway />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1e293b] bg-[#060913]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} T2P Proof · t2pproof.link</p>
          <nav className="flex items-center gap-6">
            <Link href="/privacy" className="transition-colors hover:text-sky-300">
              Privacy Protocol
            </Link>
            <Link href="/terms" className="transition-colors hover:text-sky-300">
              Terms of Usage
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
