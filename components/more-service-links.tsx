import Link from "next/link";

/** Add-only inbound links to the Oct 2026 brief service pages, keyed by the host page path. */
const L = {
  grab: { href: "/services/grab-bar-installation", label: "Grab bar installation" },
  lanai: { href: "/services/lanai-screen-repair", label: "Lanai screen repair" },
  popcorn: { href: "/services/popcorn-ceiling-removal", label: "Popcorn ceiling removal" },
  pressure: { href: "/services/pressure-washing", label: "Pressure washing" },
  soffit: { href: "/services/soffit-fascia-repair", label: "Soffit, fascia and wood rot repair" },
  commercial: { href: "/services/commercial-handyman", label: "Commercial handyman services" },
  gutterRepair: { href: "/services/gutter-repair", label: "Gutter repair" },
};

const linksByPath: Record<string, { href: string; label: string }[]> = {
  "/services/handyman": [L.grab, L.lanai, L.commercial],
  "/services/plumbing-fixture-repair": [L.grab],
  "/blog/hurricane-prep-home-maintenance-florida": [L.lanai],
  "/services/drywall-repair": [L.popcorn],
  "/services/painting": [L.popcorn],
  "/services/handyman/exterior-painting": [L.pressure],
  "/services/handyman/cleaning": [L.pressure],
  "/services/gutter-installation": [L.soffit, L.gutterRepair],
  "/services/handyman/roof-repair": [L.soffit],
  "/services": [L.commercial, L.gutterRepair],
};

export function MoreServiceLinks({ path }: { path: string }) {
  const links = linksByPath[path];
  if (!links) return null;
  return (
    <section className="section-padding pt-0">
      <div className="container-site mx-auto max-w-3xl">
        <h2 className="mb-4 text-2xl font-bold">Related services</h2>
        <ul className="list-disc space-y-2 pl-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="font-medium text-[hsl(var(--primary))] hover:underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
