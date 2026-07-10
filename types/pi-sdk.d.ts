interface PiAuthResult {
  accessToken: string
  user: {
    uid: string
    username?: string
  }
}

interface PiSDK {
  init: (config: { version: string; sandbox?: boolean }) => void | Promise<void>
  authenticate: (
    scopes: string[],
    onIncompletePaymentFound?: (payment: unknown) => void
  ) => Promise<PiAuthResult>
}

interface Window {
  Pi?: PiSDK
}
