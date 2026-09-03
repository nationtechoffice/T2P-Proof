import { Clock, Shield, MapPin, Zap } from "lucide-react";
import { instantEstimate } from "@/lib/instant-estimate";

const icons = [Clock, Shield, MapPin, Zap];

export function TrustBadges({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const onDark = variant === "dark";
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {instantEstimate.trust.map((label, index) => {
        const Icon = icons[index] || Shield;
        return (
          <li
            key={label}
            className={`flex flex-col items-center gap-2 rounded-xl p-3 text-center ${
              onDark ? "bg-white/10 text-white backdrop-blur-sm" : "border border-[hsl(var(--border))] bg-white/80"
            }`}
          >
            <Icon className="h-6 w-6 text-[hsl(var(--accent))]" />
            <span className="text-xs font-semibold">{label}</span>
          </li>
        );
      })}
    </ul>
  );
}
