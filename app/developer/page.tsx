import { DeveloperDashboard } from "@/components/developer-dashboard"
import { getPiApiKeyOrEmpty, isPiApiKeyConfigured } from "@/lib/pi-config"
import { getPiOAuthClientId, getPiOAuthRedirectUri } from "@/lib/pi-oauth"

export const dynamic = "force-dynamic"

export default function DeveloperPage() {
  return (
    <DeveloperDashboard
      piApiKey={getPiApiKeyOrEmpty()}
      apiKeyConfigured={isPiApiKeyConfigured()}
      piOAuthClientId={getPiOAuthClientId()}
      piOAuthRedirectUri={getPiOAuthRedirectUri()}
    />
  )
}
