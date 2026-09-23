import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Page not found | Handyman Pros FL" },
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="section-padding">
      <div className="container-site mx-auto max-w-2xl text-center">
        <h1 className="mb-4 text-4xl font-bold">Page not found</h1>
        <p className="mb-8 text-lg text-[hsl(var(--muted-foreground))]">
          That URL is not a Handyman Pros FL page. Try the service list or call for a licensed Tampa handyman.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/services" className="btn-primary">
            Browse services
          </Link>
          <Link href="/" className="btn-secondary">
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
