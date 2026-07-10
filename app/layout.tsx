import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { PiAuthBootstrap } from "@/components/pi-auth-bootstrap"
import { PiScriptLoader } from "@/components/pi-script-loader"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "t2pproof.link · Proof of Humanity for Web3",
  description:
    "Verified token directory for Pioneers and Pi CAPTCHA bypass API for developers. Stop bots, authenticate real humans.",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  metadataBase: new URL("https://t2pproof.link"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} bg-[#050508]`}>
      <head>
        <script src="https://sdk.minepi.com/pi-sdk.js" async />
      </head>
      <body className="font-sans antialiased">
        <PiScriptLoader />
        <PiAuthBootstrap />
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
