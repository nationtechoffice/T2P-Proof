import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { blogPosts } from "@/lib/blog-posts";
import { buildMetadata, buildPageTitle } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: buildPageTitle("Home Improvement Blog & Tips"),
  description:
    "Expert home improvement tips, guides, and advice from Handyman Pros Florida. Learn about handyman services, painting, fencing, and Florida home maintenance.",
  path: "/blog",
  keywords: ["home improvement blog", "Florida home tips", "handyman advice", "painting guides"],
});

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Blog" }]} />
      <section className="section-padding">
        <div className="container-site">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold">Home Improvement Blog</h1>
            <p className="text-lg text-[hsl(var(--muted-foreground))]">
              Expert tips, guides, and advice from Florida&apos;s trusted handyman professionals. Stay informed and protect your home investment.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.slug} className="card flex flex-col">
                <span className="mb-2 text-xs font-semibold uppercase tracking-wider text-[hsl(var(--secondary))]">
                  {post.category}
                </span>
                <h2 className="mb-2 text-xl font-bold">
                  <Link href={`/blog/${post.slug}`} className="hover:text-[hsl(var(--primary))]">
                    {post.title}
                  </Link>
                </h2>
                <p className="mb-4 flex-1 text-sm text-[hsl(var(--muted-foreground))]">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-[hsl(var(--muted))] px-2 py-0.5 text-xs text-[hsl(var(--muted-foreground))]">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs text-[hsl(var(--muted-foreground))]">
                  <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                  <span>{post.readTime} min read</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
