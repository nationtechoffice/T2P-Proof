import Link from "next/link";
import type { ContentSection } from "@/lib/content-sections";

export function ContentSections({ sections }: { sections: readonly ContentSection[] }) {
  if (sections.length === 0) return null;
  return (
    <div className="mt-10 space-y-10">
      {sections.map((section) => (
        <section key={section.heading} id={section.id} className="scroll-mt-28" aria-label={section.heading}>
          <h2 className="mb-4 text-2xl font-bold">{section.heading}</h2>
          <div className="space-y-4 leading-relaxed text-[hsl(var(--muted-foreground))]">
            {section.paragraphs?.map((paragraph) => <p key={paragraph.slice(0, 48)}>{paragraph}</p>)}
            {section.subsections?.map((sub) => (
              <div key={sub.heading}>
                <h3 className="mb-2 text-lg font-semibold text-[hsl(var(--foreground))]">{sub.heading}</h3>
                <div className="space-y-3">
                  {sub.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
            {section.bullets && section.bullets.length > 0 ? (
              <ul className="list-disc space-y-1 pl-5">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
            {section.links && section.links.length > 0 ? (
              <p className="text-sm">
                Related:{" "}
                {section.links.map((link, index) => (
                  <span key={link.href + link.label}>
                    {index > 0 ? " · " : null}
                    <Link href={link.href} className="font-medium text-[hsl(var(--primary))] hover:underline">
                      {link.label}
                    </Link>
                  </span>
                ))}
              </p>
            ) : null}
            {section.sources && section.sources.length > 0 ? (
              <p className="text-xs">
                Sources:{" "}
                {section.sources.map((source, index) => (
                  <span key={source.href}>
                    {index > 0 ? " · " : null}
                    <a href={source.href} target="_blank" rel="noopener noreferrer" className="underline hover:text-[hsl(var(--primary))]">
                      {source.label}
                    </a>
                  </span>
                ))}
              </p>
            ) : null}
          </div>
        </section>
      ))}
    </div>
  );
}
