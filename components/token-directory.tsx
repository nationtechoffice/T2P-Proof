"use client"

import { useState } from "react"
import { BadgeCheck, ExternalLink, Gift } from "lucide-react"
import { PiAuthButton } from "@/components/PiAuthButton"
import {
  VETTED_TOKENS,
  MAJOR_CRYPTO_TOKENS,
  PI_ECOSYSTEM_TOKENS,
  type VettedToken,
} from "@/lib/mock-tokens"

function TokenGrid({
  tokens,
  unlockedTokenId,
  onUnlock,
}: {
  tokens: VettedToken[]
  unlockedTokenId: string | null
  onUnlock: (id: string) => void
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {tokens.map((token) => {
        const isUnlocked = unlockedTokenId === token.id

        return (
          <article
            key={token.id}
            className="group flex flex-col rounded-xl border border-slate-800 bg-[#0c0c10] p-5 transition-all hover:border-orange-500/40 hover:shadow-[0_0_24px_rgba(249,115,22,0.08)]"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-semibold text-white">{token.name}</h3>
                <p className="text-sm font-mono text-orange-400">${token.ticker}</p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-400">
                <BadgeCheck className="h-3 w-3" />
                {token.status}
              </span>
            </div>

            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
              {token.description}
            </p>

            <div className="mt-4 flex items-center justify-between border-t border-slate-800 pt-4">
              <span className="text-xs text-slate-500">{token.network}</span>
              {token.airdropEligible && (
                <span className="flex items-center gap-1 text-xs text-orange-400/80">
                  <Gift className="h-3 w-3" />
                  Airdrop
                </span>
              )}
            </div>

            <div className="mt-4">
              {isUnlocked ? (
                <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3">
                  <p className="text-xs font-medium text-emerald-400">Access granted</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Welcome, verified Pioneer.{" "}
                    {token.airdropEligible
                      ? "Your airdrop claim is queued."
                      : "Full token details unlocked."}
                  </p>
                  <button
                    type="button"
                    className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-orange-400 hover:text-orange-300"
                  >
                    View details
                    <ExternalLink className="h-3 w-3" />
                  </button>
                </div>
              ) : (
                <PiAuthButton
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onSuccess={() => onUnlock(token.id)}
                >
                  {token.airdropEligible ? "Claim Airdrop / View Details" : "View Details"}
                </PiAuthButton>
              )}
            </div>
          </article>
        )
      })}
    </div>
  )
}

export function TokenDirectory() {
  const [unlockedTokenId, setUnlockedTokenId] = useState<string | null>(null)

  return (
    <section id="directory" className="scroll-mt-20">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-400">
            For Pioneers
          </p>
          <h2 className="mt-1 text-2xl font-semibold text-white sm:text-3xl">
            Verified Token Directory
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-400">
            Curated, non-scam tokens vetted by t2pproof.link — from Bitcoin and major crypto to
            Pi ecosystem projects. Prove your humanity with Pi to claim airdrops or view details.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-400">
          <BadgeCheck className="h-3.5 w-3.5" />
          {VETTED_TOKENS.length} tokens verified
        </div>
      </div>

      <div className="space-y-10">
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
            Major Crypto
          </h3>
          <TokenGrid
            tokens={MAJOR_CRYPTO_TOKENS}
            unlockedTokenId={unlockedTokenId}
            onUnlock={setUnlockedTokenId}
          />
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
            Pi Ecosystem Projects
          </h3>
          <TokenGrid
            tokens={PI_ECOSYSTEM_TOKENS}
            unlockedTokenId={unlockedTokenId}
            onUnlock={setUnlockedTokenId}
          />
        </div>
      </div>
    </section>
  )
}
