import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Terms of Usage · T2P Proof",
  description: "The terms governing use of T2P Proof human identity gateways.",
}

const SECTIONS = [
  {
    heading: "1. One Human, One Identity",
    body: "Each verified account represents a single unique human. Attempting to create duplicate identities or operate automated agents through the gateway is strictly prohibited.",
  },
  {
    heading: "2. Acceptable Use",
    body: "Gateways may be used to authenticate into listed launch projects. You may not use the service to facilitate fraud, sybil attacks, or circumvention of a project's fair-launch rules.",
  },
  {
    heading: "3. Project Listings",
    body: "Directory listings are provided for informational purposes and do not constitute investment advice or an endorsement of any crypto project.",
  },
  {
    heading: "4. Liability",
    body: "T2P Proof provides verification signals on an as-is basis. Launch operators remain responsible for their own compliance and smart-contract security.",
  },
]

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#060913] text-slate-200">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-sky-400 transition-colors hover:text-sky-300">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to network
        </Link>
        <h1 className="mt-8 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Terms of Usage</h1>
        <p className="mt-4 text-pretty leading-relaxed text-slate-400">
          By accessing t2pproof.link and its human identity gateways, you agree to the following terms of usage.
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
          <Link href="/privacy" className="transition-colors hover:text-sky-300">
            Privacy Protocol
          </Link>
          <span>© {new Date().getFullYear()} T2P Proof</span>
        </div>
      </div>
    </div>
  )
}
