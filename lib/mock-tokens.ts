export interface VettedToken {
  id: string
  name: string
  ticker: string
  network: string
  status: "Verified Real"
  description: string
  airdropEligible: boolean
  category: "major" | "pi-ecosystem"
}

export const VETTED_TOKENS: VettedToken[] = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    ticker: "BTC",
    network: "Bitcoin",
    status: "Verified Real",
    description: "The original decentralized digital currency and store of value.",
    airdropEligible: false,
    category: "major",
  },
  {
    id: "ethereum",
    name: "Ethereum",
    ticker: "ETH",
    network: "Ethereum",
    status: "Verified Real",
    description: "Leading smart-contract platform powering DeFi, NFTs, and L2 ecosystems.",
    airdropEligible: false,
    category: "major",
  },
  {
    id: "solana",
    name: "Solana",
    ticker: "SOL",
    network: "Solana",
    status: "Verified Real",
    description: "High-throughput L1 for fast, low-cost on-chain applications.",
    airdropEligible: false,
    category: "major",
  },
  {
    id: "bnb",
    name: "BNB",
    ticker: "BNB",
    network: "BNB Chain",
    status: "Verified Real",
    description: "Native asset of BNB Smart Chain with deep exchange and DeFi liquidity.",
    airdropEligible: false,
    category: "major",
  },
  {
    id: "xrp",
    name: "XRP",
    ticker: "XRP",
    network: "XRP Ledger",
    status: "Verified Real",
    description: "Digital asset built for fast cross-border payments and settlement.",
    airdropEligible: false,
    category: "major",
  },
  {
    id: "cardano",
    name: "Cardano",
    ticker: "ADA",
    network: "Cardano",
    status: "Verified Real",
    description: "Proof-of-stake blockchain focused on scalability and peer-reviewed research.",
    airdropEligible: false,
    category: "major",
  },
  {
    id: "dogecoin",
    name: "Dogecoin",
    ticker: "DOGE",
    network: "Dogecoin",
    status: "Verified Real",
    description: "Community-driven cryptocurrency with one of the largest retail followings.",
    airdropEligible: false,
    category: "major",
  },
  {
    id: "pi-network",
    name: "Pi Network",
    ticker: "PI",
    network: "Pi Mainnet",
    status: "Verified Real",
    description: "Mobile-first mining ecosystem with 50M+ Pioneers.",
    airdropEligible: true,
    category: "pi-ecosystem",
  },
  {
    id: "stellar-pi",
    name: "StellarPi Bridge",
    ticker: "SPI",
    network: "Stellar",
    status: "Verified Real",
    description: "Cross-chain liquidity bridge for Pi ecosystem assets.",
    airdropEligible: true,
    category: "pi-ecosystem",
  },
  {
    id: "pioneer-dao",
    name: "PioneerDAO",
    ticker: "PDAO",
    network: "Pi Mainnet",
    status: "Verified Real",
    description: "Community governance token for verified Pi builders.",
    airdropEligible: false,
    category: "pi-ecosystem",
  },
  {
    id: "orbit-pay",
    name: "OrbitPay",
    ticker: "ORBP",
    network: "Pi Testnet",
    status: "Verified Real",
    description: "Human-verified micropayments for Pi dApps.",
    airdropEligible: true,
    category: "pi-ecosystem",
  },
  {
    id: "aurora-mint",
    name: "AuroraMint",
    ticker: "AURA",
    network: "Pi Mainnet",
    status: "Verified Real",
    description: "Curated launchpad for vetted Pi ecosystem tokens.",
    airdropEligible: true,
    category: "pi-ecosystem",
  },
]

export const MAJOR_CRYPTO_TOKENS = VETTED_TOKENS.filter((t) => t.category === "major")
export const PI_ECOSYSTEM_TOKENS = VETTED_TOKENS.filter((t) => t.category === "pi-ecosystem")
