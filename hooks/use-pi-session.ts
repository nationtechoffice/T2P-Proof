"use client"

import { useCallback, useEffect, useState } from "react"
import {
  clearPiSession,
  consumePendingIntent,
  getPiSession,
  subscribePiSession,
  type PiPendingIntent,
  type PiSession,
} from "@/lib/pi-session"

export function usePiSession() {
  const [session, setSession] = useState<PiSession | null>(null)
  const [hydrated, setHydrated] = useState(false)

  const refresh = useCallback(() => {
    setSession(getPiSession())
    setHydrated(true)
  }, [])

  useEffect(() => {
    refresh()
    return subscribePiSession(refresh)
  }, [refresh])

  const signOut = useCallback(() => {
    clearPiSession()
    refresh()
  }, [refresh])

  return {
    session,
    user: session?.user ?? null,
    isSignedIn: Boolean(session?.user),
    hydrated,
    signOut,
    refresh,
  }
}

export function usePiPendingIntent() {
  const [pendingIntent, setPendingIntent] = useState<PiPendingIntent | null>(null)

  useEffect(() => {
    setPendingIntent(consumePendingIntent())
  }, [])

  return pendingIntent
}
