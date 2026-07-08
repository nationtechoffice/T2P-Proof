export interface VettedToken {
  id: string
  name: string
  ticker: string
  network: string
  status: "Verified Real"
  description: string
  airdropEligible: boolean
}

export const VETTED_TOKENS: VettedToken[] = [
  {
    id: "pi-network",
    name: "Pi Network",
    ticker: "PI",
    network: "Pi Mainnet",
    status: "Verified Real",
    description: "Mobile-first mining ecosystem with 50M+ Pioneers.",
    airdropEligible: true,
  },
  {
    id: "stellar-pi",
    name: "StellarPi Bridge",
    ticker: "SPI",
    network: "Stellar",
    status: "Verified Real",
    description: "Cross-chain liquidity bridge for Pi ecosystem assets.",
    airdropEligible: true,
  },
  {
    id: "pioneer-dao",
    name: "PioneerDAO",
    ticker: "PDAO",
    network: "Pi Mainnet",
    status: "Verified Real",
    description: "Community governance token for verified Pi builders.",
    airdropEligible: false,
  },
  {
    id: "orbit-pay",
    name: "OrbitPay",
    ticker: "ORBP",
    network: "Pi Testnet",
    status: "Verified Real",
    description: "Human-verified micropayments for Pi dApps.",
    airdropEligible: true,
  },
  {
    id: "verdant-id",
    name: "VerdantID",
    ticker: "VID",
    network: "Pi Mainnet",
    status: "Verified Real",
    description: "Proof-of-humanity identity layer for Web3 launches.",
    airdropEligible: false,
  },
  {
    id: "aurora-mint",
    name: "AuroraMint",
    ticker: "AURA",
    network: "Pi Mainnet",
    status: "Verified Real",
    description: "Curated launchpad for vetted Pi ecosystem tokens.",
    airdropEligible: true,
  },
]
