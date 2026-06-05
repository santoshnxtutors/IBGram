import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, Clock, Tag, User } from "lucide-react";
import { JsonLd } from "@/components/seo-city/JsonLd";
import { Markdown } from "@/components/blog/Markdown";
import { absoluteUrl, SITE_URL } from "@/lib/seo/slug-utils";
import { getBlogPostBySlug, getPublishedBlogSlugs, getPublishedBlogPosts } from "@/lib/cms/blog";

export const revalidate = 600;
export const dynamicParams = true;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await getPublishedBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

function formatDate(iso: string | null): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return { title: "Article not found | IB Gram", robots: { index: false, follow: false } };

  const url = absoluteUrl(`/blog/${post.slug}/`);
  const title = post.metaTitle ?? post.title;
  const description = post.metaDescription ?? post.excerpt ?? `${post.title} — IB Gram Insights.`;
  const shouldIndex = post.indexFlag !== "noindex";
  const socialImage = post.ogImageUrl ?? post.featuredImageUrl;
  const absoluteSocialImage = socialImage
    ? socialImage.startsWith("http")
      ? socialImage
      : `${SITE_URL}${socialImage.startsWith("/") ? "" : "/"}${socialImage}`
    : null;
  const ogImages = absoluteSocialImage ? [absoluteSocialImage] : undefined;

  return {
    title: `${title} | IB Gram`,
    description,
    keywords: post.metaKeywords.length ? post.metaKeywords : post.tags,
    alternates: { canonical: url },
    robots: { index: shouldIndex, follow: true },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      siteName: "IB Gram",
      publishedTime: post.publishedAt ?? undefined,
      modifiedTime: post.updatedAt,
      authors: [post.authorName ?? "IB Gram Editorial"],
      ...(ogImages ? { images: ogImages } : {}),
    },
    twitter: { card: "summary_large_image", title, description, ...(ogImages ? { images: ogImages } : {}) },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  const url = absoluteUrl(`/blog/${post.slug}/`);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog/") },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription ?? post.excerpt ?? undefined,
    url,
    datePublished: post.publishedAt ?? undefined,
    dateModified: post.updatedAt,
    author: { "@type": "Organization", name: post.authorName ?? "IB Gram Editorial" },
    publisher: {
      "@type": "Organization",
      name: "IB Gram",
      url: absoluteUrl("/"),
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: (post.metaKeywords.length ? post.metaKeywords : post.tags).join(", ") || undefined,
  };

  // A few more published posts for the "Keep reading" section.
  const all = await getPublishedBlogPosts();
  const related = all.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <JsonLd data={{ "@context": "https://schema.org", "@graph": [breadcrumbSchema, articleSchema] }} />

      <article className="container mx-auto max-w-3xl px-4 pt-8 md:px-6 md:pt-10">
        <Link
          href="/blog/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4" /> All articles
        </Link>

        {post.categoryName && (
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-primary">
            <Tag className="size-3" /> {post.categoryName}
          </div>
        )}

        <h1 className="text-3xl font-black leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl">
          {post.title}
        </h1>

        {post.excerpt && (
          <p className="mt-5 text-lg font-medium leading-relaxed text-muted-foreground md:text-xl">{post.excerpt}</p>
        )}

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-y border-border/50 py-4 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <User className="size-3.5 text-primary" /> {post.authorName ?? "IB Gram Editorial"}
          </span>
          {post.publishedAt && (
            <span className="flex items-center gap-1.5">
              <CalendarDays className="size-3.5 text-primary" /> {formatDate(post.publishedAt)}
            </span>
          )}
          <span className="flex items-center gap-1.5">
            <Clock className="size-3.5 text-primary" /> {post.readingTimeMinutes} min read
          </span>
        </div>

        {/* Featured image */}
        {post.featuredImageUrl && (
          <div className="mt-8 aspect-[16/9] w-full overflow-hidden rounded-3xl border border-border/50 bg-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.featuredImageUrl} alt={post.title} className="size-full object-cover" />
          </div>
        )}

        {/* Body */}
        <Markdown content={post.body} className="mt-8" />

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-2 border-t border-border/50 pt-8">
            {post.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border/60 bg-muted/20 px-3 py-1 text-xs font-bold text-muted-foreground"
              >
                #{t}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 rounded-[2rem] border border-primary/20 bg-card/40 p-8 text-center">
          <h2 className="text-2xl font-black tracking-tight text-foreground md:text-3xl">
            Need a tutor for this subject?
          </h2>
          <p className="mt-3 text-base font-medium leading-relaxed text-muted-foreground">
            Share your city, programme stage and subject — the IB Gram advisor team replies with a small, honest
            shortlist.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact-us/"
              className="shimmer-btn inline-flex h-14 w-full max-w-xs items-center justify-center whitespace-nowrap rounded-xl bg-primary px-7 text-base font-black text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20 sm:w-auto"
            >
              Speak with an Advisor <ArrowRight className="ml-2 size-5" />
            </Link>
            <Link
              href="/tutors/"
              className="inline-flex h-14 w-full max-w-xs items-center justify-center whitespace-nowrap rounded-xl border border-border bg-background/50 px-7 text-base font-black text-foreground transition-all hover:border-secondary/50 hover:bg-muted/30 sm:w-auto"
            >
              Browse Tutors
            </Link>
          </div>
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="container mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <h2 className="mb-8 text-2xl font-black tracking-tight text-foreground md:text-3xl">Keep reading</h2>
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <Link key={p.id} href={`/blog/${p.slug}/`} className="group flex flex-col">
                <div className="relative mb-5 aspect-[16/10] w-full overflow-hidden rounded-3xl border border-border/50 bg-card transition-all group-hover:border-primary/20">
                  {p.featuredImageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={p.featuredImageUrl}
                      alt={p.title}
                      loading="lazy"
                      className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-muted/10">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/30">
                        IB Gram
                      </span>
                    </div>
                  )}
                </div>
                {p.categoryName && (
                  <span className="mb-2 text-[10px] font-black uppercase tracking-widest text-primary">
                    {p.categoryName}
                  </span>
                )}
                <h3 className="line-clamp-2 text-lg font-black leading-snug transition-colors group-hover:text-primary">
                  {p.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm font-medium leading-relaxed text-muted-foreground">
                  {p.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
