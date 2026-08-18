import Link from "next/link";
import { popularServiceLinks, sitelinkNav } from "@/lib/internal-links";
import { siteConfig } from "@/lib/site-config";

export default function NotFound() {
  return (
    <section className="section-padding">
      <div className="container-site mx-auto max-w-2xl text-center">
        <h1 className="mb-4 text-4xl font-bold">Page not found</h1>
        <p className="mb-8 text-lg text-[hsl(var(--muted-foreground))]">
          That URL is not an active page on Handyman Pros FL. Use a category below or call{" "}
          <a href={`tel:${siteConfig.phoneTel}`} className="font-semibold text-[hsl(var(--accent))]" aria-label="Call Handyman Pros Florida Now">
            {siteConfig.phone}
          </a>
          .
        </p>
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {sitelinkNav.map((item) => (
            <Link key={item.href} href={item.href} className="related-chip">
              {item.label}
            </Link>
          ))}
        </div>
        <ul className="grid gap-2 text-left">
          {popularServiceLinks.slice(0, 8).map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="related-link">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/" className="btn-primary mt-8 inline-flex">
          Back to home
        </Link>
      </div>
    </section>
  );
}
