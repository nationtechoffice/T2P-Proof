"use client"

import { useEffect, useRef } from "react"
import { tryAutoAuthenticateOnLoad } from "@/lib/pi-auth"
import { usePiSession } from "@/hooks/use-pi-session"

export function PiAuthBootstrap() {
  const { isSignedIn, hydrated, refresh } = usePiSession()
  const attempted = useRef(false)

  useEffect(() => {
    if (!hydrated || attempted.current || isSignedIn) return

    attempted.current = true

    void tryAutoAuthenticateOnLoad().then((result) => {
      if (result) refresh()
    })
  }, [hydrated, isSignedIn, refresh])

  return null
}
