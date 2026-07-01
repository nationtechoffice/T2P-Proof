import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Privacy Protocol · T2P Proof",
  description: "How T2P Proof handles identity data across its human verification gateways.",
}

const SECTIONS = [
  {
    heading: "1. Zero-Knowledge Identity",
    body: "T2P Proof verifies that you are a unique human without storing biometric raw data. Verification produces a privacy-preserving proof, not a copy of your identity.",
  },
  {
    heading: "2. Data We Never Sell",
    body: "We do not sell, rent, or trade personal identifiers. Gateway operators receive only a boolean human-verification signal and a rotating anonymous credential.",
  },
  {
    heading: "3. On-Chain Minimalism",
    body: "Only cryptographic commitments are written on-chain. No wallet address is ever linked to your legal identity within the protocol.",
  },
  {
    heading: "4. Your Controls",
    body: "You may revoke a gateway credential at any time from your Pi-authenticated dashboard. Revocation propagates across all connected launch projects.",
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#060913] text-slate-200">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-sky-400 transition-colors hover:text-sky-300">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to network
        </Link>
        <h1 className="mt-8 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Privacy Protocol</h1>
        <p className="mt-4 text-pretty leading-relaxed text-slate-400">
          T2P Proof is built so that proving your humanity never means surrendering your privacy. This protocol
          describes exactly what data moves through our identity gateways.
        </p>
        <div className="mt-10 space-y-8">
          {SECTIONS.map((s) => (
            <section key={s.heading} className="rounded-xl border border-[#1e293b] bg-[#0d1326] p-6">
              <h2 className="text-lg font-semibold text-white">{s.heading}</h2>
              <p className="mt-2 leading-relaxed text-slate-400">{s.body}</p>
            </section>
          ))}
        </div>
        <div className="mt-10 flex items-center gap-6 border-t border-[#1e293b] pt-6 text-sm text-slate-500">
          <Link href="/terms" className="transition-colors hover:text-sky-300">
            Terms of Usage
          </Link>
          <span>© {new Date().getFullYear()} T2P Proof</span>
        </div>
      </div>
    </div>
  )
}
