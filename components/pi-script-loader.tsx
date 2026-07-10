"use client"

import Script from "next/script"
import { useEffect, useState } from "react"

/**
 * Load Pi SDK script only when window.Pi is not already injected (e.g. Pi Browser).
 */
export function PiScriptLoader() {
  const [needsScript, setNeedsScript] = useState(false)

  useEffect(() => {
    if (window.Pi) {
      window.dispatchEvent(new Event("pi-sdk-ready"))
      return
    }
    // Pi Browser injects window.Pi shortly after load — poll briefly before loading script
    let attempts = 0
    const poll = setInterval(() => {
      attempts++
      if (window.Pi) {
        clearInterval(poll)
        window.dispatchEvent(new Event("pi-sdk-ready"))
        return
      }
      if (attempts >= 15) {
        clearInterval(poll)
        setNeedsScript(true)
      }
    }, 200)
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
      onError={() => {
        window.dispatchEvent(new CustomEvent("pi-sdk-error"))
      }}
    />
  )
}
