"use client"

import Link from "next/link"
import { ShieldCheck, Code2, LogOut } from "lucide-react"
import { PiAuthButton } from "@/components/PiAuthButton"
import { usePiSession } from "@/hooks/use-pi-session"

export function SiteHeader() {
  const { isSignedIn, user, signOut, hydrated } = usePiSession()

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

        <div className="flex items-center gap-2">
          {hydrated && isSignedIn && (
            <span className="hidden items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 sm:inline-flex">
              @{user?.username || "pioneer"}
            </span>
          )}

          {hydrated && isSignedIn ? (
            <button
              type="button"
              onClick={signOut}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 px-3 py-1.5 text-xs text-slate-400 transition-colors hover:border-orange-500/50 hover:text-orange-400"
            >
              <LogOut className="h-3.5 w-3.5" />
              Sign out
            </button>
          ) : (
            <PiAuthButton size="sm" className="hidden sm:inline-flex" intent="signin" showSignedInUser>
              Verify with Pi
            </PiAuthButton>
          )}
        </div>
      </div>
    </header>
  )
}
