import { ArrowRight, Clock, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/**
 * The blog card grid from the homepage, as its own component.
 *
 * The homepage and the country landing pages were drawing two different cards
 * for the same thing — the homepage one with the cover image, the country one a
 * bare title and excerpt. One component, one look, wherever posts are listed.
 */
export type BlogCard = {
  href: string;
  title: string;
  excerpt?: string | null;
  readingTimeMinutes?: number | null;
  imageUrl?: string | null;
  categoryName?: string | null;
  publishedAt?: string | null;
};

function formatDate(iso: string | null | undefined): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export function BlogCardGrid({ posts }: { posts: BlogCard[] }) {
  if (posts.length === 0) return null;
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
      {posts.map((blog) => (
        <Link key={blog.href} href={blog.href} className="group flex flex-col">
          <div className="relative mb-6 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border/50 bg-card">
            {blog.imageUrl ? (
              <Image
                src={blog.imageUrl}
                alt={blog.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
                unoptimized={blog.imageUrl.startsWith("http")}
                className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-muted/10">
                <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">IB Gram</span>
              </div>
            )}
            {blog.categoryName && (
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-border bg-background/90 px-3 py-1.5 text-xs font-bold text-foreground backdrop-blur-sm">
                <Tag className="size-3 text-primary" /> {blog.categoryName}
              </div>
            )}
          </div>

          <div className="mb-4 flex items-center gap-4 text-xs font-semibold text-muted-foreground">
            {blog.readingTimeMinutes ? (
              <span className="flex items-center gap-1.5">
                <Clock className="size-3.5" /> {blog.readingTimeMinutes} min read
              </span>
            ) : null}
            {blog.publishedAt && (
              <>
                <span className="size-1 rounded-full bg-border" />
                <span>{formatDate(blog.publishedAt)}</span>
              </>
            )}
          </div>

          <h3 className="mb-3 line-clamp-2 text-xl font-black leading-snug transition-colors group-hover:text-primary md:text-2xl">
            {blog.title}
          </h3>

          {blog.excerpt ? (
            <p className="mb-6 line-clamp-3 font-medium leading-relaxed text-muted-foreground">{blog.excerpt}</p>
          ) : null}

          <div className="mt-auto flex items-center gap-2 text-sm font-bold text-foreground transition-colors group-hover:text-primary">
            Read Article <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </div>
        </Link>
      ))}
    </div>
  );
}
