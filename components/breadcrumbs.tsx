import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container-site py-4">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-[hsl(var(--muted-foreground))]">
        <li>
          <Link href="/" className="hover:text-[hsl(var(--primary))]">Home</Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <ChevronRight className="h-3 w-3" aria-hidden="true" />
            {item.href ? (
              <Link href={item.href} className="hover:text-[hsl(var(--primary))]">{item.label}</Link>
            ) : (
              <span className="font-medium text-[hsl(var(--foreground))]" aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
