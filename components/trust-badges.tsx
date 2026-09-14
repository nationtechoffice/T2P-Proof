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
    <ul className="grid grid-cols-2 gap-2.5">
      {badges.map(({ label, Icon }) => (
        <li
          key={label}
          className={`flex items-center gap-2 rounded-lg px-3 py-2 text-left ${
            onDark
              ? "border border-white/15 bg-slate-950/50 text-white"
              : "border border-[hsl(var(--border))] bg-white/90 shadow-sm"
          }`}
        >
          <Icon className="h-4 w-4 shrink-0 text-[hsl(var(--accent))]" aria-hidden />
          <span className="text-xs font-semibold leading-snug">{label}</span>
        </li>
      ))}
    </ul>
  );
}
