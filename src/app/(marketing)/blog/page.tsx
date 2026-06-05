import type { Metadata } from "next";
import { JsonLd } from "@/components/seo-city/JsonLd";
import { absoluteUrl } from "@/lib/seo/slug-utils";
import { getBlogCategories, getPublishedBlogPosts } from "@/lib/cms/blog";
import { BlogListClient } from "./BlogListClient";

export const revalidate = 600;

const pageUrl = absoluteUrl("/blog/");

export const metadata: Metadata = {
  title: "IB & IGCSE Blog — Strategies, Study Guides & Parent Insights | IB Gram",
  description:
    "Expert IB and IGCSE articles from IB Gram: subject strategy, IA and Extended Essay guides, revision habits, board comparisons and parent guidance. Updated regularly.",
  keywords: [
    "IB blog",
    "IGCSE blog",
    "IB study guide",
    "IB DP tips",
    "IGCSE revision tips",
    "IB Internal Assessment guide",
    "IB Extended Essay help",
    "IB parent guide",
    "IB Maths AA AI",
    "IB tutoring blog India",
  ],
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "IB & IGCSE Blog — Strategies & Study Guides | IB Gram",
    description:
      "Expert IB and IGCSE articles: subject strategy, IA/EE guides, revision habits and parent guidance.",
    siteName: "IB Gram",
  },
  twitter: {
    card: "summary_large_image",
    title: "IB & IGCSE Blog | IB Gram",
    description: "Expert IB and IGCSE articles, study guides and parent insights.",
  },
};

export default async function BlogListingPage() {
  const [posts, categories] = await Promise.all([getPublishedBlogPosts(), getBlogCategories()]);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Blog", item: pageUrl },
    ],
  };

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "IB Gram Insights",
    url: pageUrl,
    description: "IB and IGCSE strategy, study guides and parent insights from IB Gram.",
    blogPost: posts.slice(0, 20).map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: absoluteUrl(`/blog/${p.slug}/`),
      datePublished: p.publishedAt ?? undefined,
      dateModified: p.updatedAt,
      author: { "@type": "Organization", name: p.authorName ?? "IB Gram Editorial" },
    })),
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background pb-24 text-foreground">
      <JsonLd data={{ "@context": "https://schema.org", "@graph": [breadcrumbSchema, blogSchema] }} />
      <div className="container mx-auto max-w-7xl px-4 pt-8 md:px-6 md:pt-10">
        {posts.length === 0 ? (
          <div className="mx-auto max-w-3xl py-24 text-center">
            <h1 className="mb-4 text-4xl font-black tracking-tight text-foreground md:text-6xl">
              IB Gram <span className="text-gradient">Insights</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              New articles are on the way. Check back soon for IB and IGCSE study guides and strategy.
            </p>
          </div>
        ) : (
          <BlogListClient posts={posts} categories={categories} />
        )}
      </div>
    </div>
  );
}
