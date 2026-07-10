import { DeveloperDashboard } from "@/components/developer-dashboard"
import { getPiApiKeyOrEmpty, isPiApiKeyConfigured } from "@/lib/pi-config"
import {
  getPiOAuthClientId,
  getPiOAuthRedirectUri,
  PI_APP_DOMAIN,
} from "@/lib/pi-oauth"

export const dynamic = "force-dynamic"

export default function DeveloperPage() {
  return (
    <DeveloperDashboard
      piApiKey={getPiApiKeyOrEmpty()}
      apiKeyConfigured={isPiApiKeyConfigured()}
      piOAuthClientId={getPiOAuthClientId()}
      piOAuthRedirectUri={getPiOAuthRedirectUri()}
      piAppDomain={PI_APP_DOMAIN}
    />
  )
}
