import Link from "next/link";

type InternalLinkItem = {
  href: string;
  label: string;
};

type InternalLinkHubProps = {
  title: string;
  intro?: string;
  links: readonly InternalLinkItem[];
  className?: string;
};

/**
 * Contextual internal-link hub for local SEO authority flow
 * (service ↔ city pages). Renders as a simple linked list — not a card grid.
 */
export function InternalLinkHub({ title, intro, links, className = "" }: InternalLinkHubProps) {
  if (!links.length) return null;

  return (
    <nav aria-label={title} className={`mt-10 ${className}`}>
      <h2 className="mb-2 text-2xl font-bold">{title}</h2>
      {intro ? (
        <p className="mb-4 text-sm text-[hsl(var(--muted-foreground))]">{intro}</p>
      ) : null}
      <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="font-medium text-[hsl(var(--primary))] underline-offset-2 hover:underline hover:text-[hsl(var(--accent))]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
