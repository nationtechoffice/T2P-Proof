import { BadgeCheck, Clock, MapPinned, Shield } from "lucide-react";

const badges = [
  { label: "Licensed & Insured", Icon: Shield },
  { label: "24/7 Dispatch", Icon: Clock },
  { label: "Hillsborough County", Icon: MapPinned },
  { label: "Pinellas County", Icon: BadgeCheck },
] as const;

export function TrustBadges({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const onDark = variant === "dark";

  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {badges.map(({ label, Icon }) => (
        <li
          key={label}
          className={`flex flex-col items-center gap-2 rounded-xl p-3 text-center ${
            onDark
              ? "border border-white/15 bg-slate-950/45 text-white backdrop-blur-sm"
              : "border border-[hsl(var(--border))] bg-white/90 shadow-sm"
          }`}
        >
          <Icon className="h-6 w-6 text-[hsl(var(--accent))]" aria-hidden />
          <span className="text-xs font-semibold leading-snug">{label}</span>
        </li>
      ))}
    </ul>
  );
}
