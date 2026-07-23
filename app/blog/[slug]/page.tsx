import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { blogPosts, getAllBlogSlugs, getBlogPost } from "@/lib/blog-posts";
import { buildMetadata, buildPageTitle } from "@/lib/seo";
import { JsonLd, breadcrumbSchema, articleSchema, speakableSchema } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site-config";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: buildPageTitle(post.title),
    description: post.description,
    path: `/blog/${slug}`,
    keywords: post.tags,
    ogType: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
    ogImage: `${siteConfig.url}${post.image}`,
  });
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let inTable = false;
  let tableRows: string[][] = [];

  const flushTable = (key: string) => {
    if (tableRows.length === 0) return;
    const [header, , ...rows] = tableRows;
    elements.push(
      <table key={key}>
        <thead>
          <tr>{header.map((cell, i) => <th key={i}>{cell}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri}>{row.map((cell, ci) => <td key={ci}>{cell}</td>)}</tr>
          ))}
        </tbody>
      </table>
    );
    tableRows = [];
    inTable = false;
  };

  lines.forEach((line, idx) => {
    if (line.startsWith("|")) {
      inTable = true;
      const cells = line.split("|").filter(Boolean).map((c) => c.trim());
      if (!cells.every((c) => /^-+$/.test(c))) {
        tableRows.push(cells);
      }
      return;
    }
    if (inTable) flushTable(`table-${idx}`);

    if (line.startsWith("## ")) {
      elements.push(<h2 key={idx}>{line.slice(3)}</h2>);
    } else if (line.startsWith("### ")) {
      elements.push(<h3 key={idx}>{line.slice(4)}</h3>);
    } else if (line.startsWith("- ")) {
      const last = elements[elements.length - 1];
      if (last && typeof last === "object" && "type" in (last as object) && (last as React.ReactElement).type === "ul") {
        return;
      }
      elements.push(<ul key={idx}><li>{line.slice(2)}</li></ul>);
    } else if (/^\d+\.\s/.test(line)) {
      elements.push(<p key={idx}>{line}</p>);
    } else if (line.trim()) {
      elements.push(<p key={idx}>{line}</p>);
    }
  });
  if (inTable) flushTable("table-end");

  return elements;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const pageUrl = `${siteConfig.url}/blog/${slug}`;
  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Blog", url: `${siteConfig.url}/blog` },
            { name: post.title, url: pageUrl },
          ]),
          articleSchema({
            title: post.title,
            description: post.description,
            url: pageUrl,
            publishedAt: post.publishedAt,
            updatedAt: post.updatedAt,
            author: post.author,
            image: post.image,
          }),
          speakableSchema(pageUrl, [".article-summary", ".article-content"]),
        ]}
      />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />
      <article className="section-padding">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <header className="mb-8">
              <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-[hsl(var(--secondary))]">
                {post.category}
              </span>
              <h1 className="mb-4 text-4xl font-bold">{post.title}</h1>
              <p className="article-summary mb-4 text-xl text-[hsl(var(--muted-foreground))]">{post.description}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-[hsl(var(--muted-foreground))]">
                <span>By {post.author}</span>
                <time dateTime={post.publishedAt}>Published {formatDate(post.publishedAt)}</time>
                <span>{post.readTime} min read</span>
              </div>
            </header>
            <div className="article-content prose-blog">{renderContent(post.content)}</div>
            <div className="mt-8 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-[hsl(var(--muted))] px-3 py-1 text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      {otherPosts.length > 0 && (
        <section className="section-padding bg-[hsl(var(--muted))]">
          <div className="container-site">
            <h2 className="mb-8 text-center text-2xl font-bold">More Articles</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {otherPosts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="card hover:border-[hsl(var(--primary))]">
                  <h3 className="mb-2 font-semibold hover:text-[hsl(var(--primary))]">{p.title}</h3>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      <CTASection />
    </>
  );
}
