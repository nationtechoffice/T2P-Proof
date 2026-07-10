import { DeveloperDashboard } from "@/components/developer-dashboard"
import { getPiApiKey } from "@/lib/pi-config"

export default function DeveloperPage() {
  const piApiKey = getPiApiKey()

  return <DeveloperDashboard piApiKey={piApiKey} />
}
