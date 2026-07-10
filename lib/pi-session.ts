export type PiUser = {
  uid?: string
  username?: string
  wallet_address?: string
  [key: string]: unknown
}

export type PiAuthIntent = "signin" | "demo" | "unlock"

export type PiPendingIntent = {
  intent: PiAuthIntent
  tokenId?: string
}

export type PiSession = {
  user: PiUser
  verifiedAt: number
}

const SESSION_KEY = "t2pproof_pi_session"
const PENDING_KEY = "t2pproof_pi_pending"
const SESSION_EVENT = "pi-session-changed"

function canUseStorage() {
  return typeof window !== "undefined" && typeof sessionStorage !== "undefined"
}

function notifySessionChanged() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(SESSION_EVENT))
  }
}

export function savePiSession(user: PiUser) {
  if (!canUseStorage()) return

  const session: PiSession = {
    user,
    verifiedAt: Date.now(),
  }

  sessionStorage.setItem(SESSION_KEY, JSON.stringify(session))
  notifySessionChanged()
}

export function getPiSession(): PiSession | null {
  if (!canUseStorage()) return null

  try {
    const raw = sessionStorage.getItem(SESSION_KEY)
    if (!raw) return null

    const session = JSON.parse(raw) as PiSession
    if (!session?.user) return null

    return session
  } catch {
    return null
  }
}

export function clearPiSession() {
  if (!canUseStorage()) return

  sessionStorage.removeItem(SESSION_KEY)
  notifySessionChanged()
}

export function setPendingIntent(intent: PiPendingIntent) {
  if (!canUseStorage()) return

  sessionStorage.setItem(PENDING_KEY, JSON.stringify(intent))
}

export function peekPendingIntent(): PiPendingIntent | null {
  if (!canUseStorage()) return null

  try {
    const raw = sessionStorage.getItem(PENDING_KEY)
    if (!raw) return null

    const intent = JSON.parse(raw) as PiPendingIntent
    if (!intent?.intent) return null

    return intent
  } catch {
    return null
  }
}

export function consumePendingIntent(): PiPendingIntent | null {
  const intent = peekPendingIntent()
  if (!intent || !canUseStorage()) return null

  sessionStorage.removeItem(PENDING_KEY)
  return intent
}

export function subscribePiSession(listener: () => void) {
  if (typeof window === "undefined") return () => {}

  window.addEventListener(SESSION_EVENT, listener)
  return () => window.removeEventListener(SESSION_EVENT, listener)
}
