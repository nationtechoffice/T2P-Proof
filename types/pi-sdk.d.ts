interface PiAuthResult {
  accessToken: string
  user: {
    uid: string
    username?: string
  }
}

interface PiSignInOptions {
  clientId: string
  redirectUri: string
  scopes?: string[]
  state?: string
}

interface PiSDK {
  init: (config: { version: string; sandbox?: boolean }) => void | Promise<void>
  authenticate: (
    scopes: string[],
    onIncompletePaymentFound?: (payment: unknown) => void
  ) => Promise<PiAuthResult>
  signIn?: (options: PiSignInOptions) => void
}

interface Window {
  Pi?: PiSDK
}
