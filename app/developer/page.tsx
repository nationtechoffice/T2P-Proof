import { DeveloperDashboard } from "@/components/developer-dashboard"
import { getPiApiKeyOrEmpty, isPiApiKeyConfigured } from "@/lib/pi-config"

export const dynamic = "force-dynamic"

export default function DeveloperPage() {
  return (
    <DeveloperDashboard
      piApiKey={getPiApiKeyOrEmpty()}
      apiKeyConfigured={isPiApiKeyConfigured()}
    />
  )
}
