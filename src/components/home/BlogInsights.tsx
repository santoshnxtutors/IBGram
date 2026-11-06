import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { BlogCardGrid } from "@/components/blog/BlogCardGrid";
import { getHomeBlogPosts } from "@/lib/cms/blog";
import { blogPath } from "@/lib/cms/blog-path";

export async function BlogInsights() {
  const posts = await getHomeBlogPosts("ib", 3);
  if (posts.length === 0) return null;

  return (
    <section className="border-t border-border/40 bg-background py-12 md:py-16">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10 flex flex-col items-end justify-between gap-6 md:flex-row">
          <div className="max-w-2xl">
            <h2 className="mb-4 text-3xl font-black tracking-tight text-foreground md:text-5xl">
              Study insights and family resources
            </h2>
            <p className="text-lg font-medium text-muted-foreground md:text-xl">
              Calm, practical reading for IB and IGCSE families thinking through subjects, revision, deadlines and
              tutor support.
            </p>
          </div>
          <Link
            href="/blog/"
            className="group flex shrink-0 items-center gap-2 py-2 font-bold text-primary transition-colors hover:text-primary/80"
          >
            View All Blogs <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <BlogCardGrid
          posts={posts.map((blog) => ({
            href: blogPath(blog),
            title: blog.title,
            excerpt: blog.excerpt,
            readingTimeMinutes: blog.readingTimeMinutes,
            imageUrl: blog.featuredImageUrl,
            categoryName: blog.categoryName,
            publishedAt: blog.publishedAt,
          }))}
        />
      </div>
    </section>
  );
}
