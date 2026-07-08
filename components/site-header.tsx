"use client"

import Link from "next/link"
import { ShieldCheck, Code2 } from "lucide-react"
import { PiAuthButton } from "@/components/PiAuthButton"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-800 bg-[#050508]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-orange-500/40 bg-orange-500/10 text-orange-400 shadow-[0_0_16px_rgba(249,115,22,0.35)]">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="text-sm font-semibold tracking-tight text-white">
            t2pproof<span className="text-orange-400">.link</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
          <a href="#directory" className="transition-colors hover:text-orange-300">
            Token Directory
          </a>
          <a href="#developers" className="transition-colors hover:text-orange-300">
            For Developers
          </a>
          <Link href="/developer" className="flex items-center gap-1.5 transition-colors hover:text-orange-300">
            <Code2 className="h-3.5 w-3.5" />
            Dashboard
          </Link>
        </nav>

        <PiAuthButton size="sm" className="hidden sm:inline-flex">
          Verify with Pi
        </PiAuthButton>
      </div>
    </header>
  )
}
