import { ArrowRight, Clock, Tag } from "lucide-react";
import Link from "next/link";
import { getHomeBlogPosts } from "@/lib/cms/blog";

function formatDate(iso: string | null): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export async function BlogInsights() {
  const posts = await getHomeBlogPosts("ib", 3);
  if (posts.length === 0) return null;

  return (
    <section className="border-t border-border/40 bg-background py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
          <div className="max-w-2xl">
            <h2 className="mb-4 text-3xl font-black tracking-tight text-foreground md:text-5xl">
              Study insights and <span className="text-gradient">family resources</span>
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

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
          {posts.map((blog) => (
            <Link key={blog.id} href={`/blog/${blog.slug}/`} className="group flex flex-col">
              <div className="relative mb-6 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border/50 bg-card">
                {blog.featuredImageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={blog.featuredImageUrl}
                    alt={blog.title}
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
                {blog.categoryName && (
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-border bg-background/90 px-3 py-1.5 text-xs font-bold text-foreground backdrop-blur-sm">
                    <Tag className="size-3 text-primary" /> {blog.categoryName}
                  </div>
                )}
              </div>

              <div className="mb-4 flex items-center gap-4 text-xs font-semibold text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Clock className="size-3.5" /> {blog.readingTimeMinutes} min read
                </span>
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

              <p className="mb-6 line-clamp-3 font-medium leading-relaxed text-muted-foreground">{blog.excerpt}</p>

              <div className="mt-auto flex items-center gap-2 text-sm font-bold text-foreground transition-colors group-hover:text-primary">
                Read Article <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
