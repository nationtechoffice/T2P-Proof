import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-[#050508]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-slate-500 md:flex-row">
        <p>© {new Date().getFullYear()} t2pproof.link · Proof of Humanity for Web3</p>
        <nav className="flex items-center gap-6">
          <Link href="/privacy" className="transition-colors hover:text-orange-300">
            Privacy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-orange-300">
            Terms
          </Link>
          <Link href="/developer" className="transition-colors hover:text-orange-300">
            Developer API
          </Link>
        </nav>
      </div>
    </footer>
  )
}
