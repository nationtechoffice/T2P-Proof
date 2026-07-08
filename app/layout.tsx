import type { Metadata } from "next"
import Script from "next/script"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} bg-[#050508]`}>
      <body className="font-sans antialiased">
        <Script src="https://sdk.minepi.com/pi-sdk.js" strategy="beforeInteractive" />
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
