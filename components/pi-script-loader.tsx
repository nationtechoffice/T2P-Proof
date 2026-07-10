"use client"

import Script from "next/script"
import { useEffect, useState } from "react"
import { markNativePiEnv } from "@/lib/pi-sdk"

/**
 * Only mark native Pi when window.Pi exists BEFORE our SDK script loads (Pi Browser).
 * Never mark native when the web SDK script creates window.Pi.
 */
export function PiScriptLoader() {
  const [needsScript, setNeedsScript] = useState(false)

  useEffect(() => {
    if (window.Pi) {
      markNativePiEnv()
      window.dispatchEvent(new Event("pi-sdk-ready"))
      return
    }

    let attempts = 0
    const poll = setInterval(() => {
      attempts++
      if (window.Pi) {
        markNativePiEnv()
        window.dispatchEvent(new Event("pi-sdk-ready"))
        clearInterval(poll)
        return
      }
      if (attempts >= 15) {
        clearInterval(poll)
        setNeedsScript(true)
      }
    }, 100)

    return () => clearInterval(poll)
  }, [])

  if (!needsScript) return null

  return (
    <Script
      id="pi-sdk"
      src="https://sdk.minepi.com/pi-sdk.js"
      strategy="afterInteractive"
      onLoad={() => {
        window.dispatchEvent(new Event("pi-sdk-ready"))
      }}
      onError={() => window.dispatchEvent(new CustomEvent("pi-sdk-error"))}
    />
  )
}
