"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Search, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { PublicBlogCategory, PublicBlogPost } from "@/lib/cms/blog";

function formatDate(iso: string | null): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

const PAGE_SIZE = 9;

export function BlogListClient({
  posts,
  categories,
}: {
  posts: PublicBlogPost[];
  categories: PublicBlogCategory[];
}) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const matchesCat = activeCategory === "all" || p.categorySlug === activeCategory;
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        (p.excerpt ?? "").toLowerCase().includes(q) ||
        (p.categoryName ?? "").toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCat && matchesQuery;
    });
  }, [posts, activeCategory, query]);

  const featured = filtered[0];
  const rest = filtered.slice(1, visible);

  return (
    <>
      {/* Title + search */}
      <div className="mb-12 flex flex-col justify-between gap-8 px-2 md:mb-16 md:flex-row md:items-end">
        <div className="max-w-3xl">
          <h1 className="mb-4 text-4xl font-black tracking-tight text-foreground md:mb-6 md:text-6xl lg:text-7xl">
            IB Gram <span className="text-gradient">Insights</span>
          </h1>
          <p className="text-base font-medium leading-relaxed text-muted-foreground md:text-xl">
            The academic edge. Expert strategies, study guides, and the latest in IB and IGCSE education.
          </p>
        </div>

        <div className="group relative w-full md:w-auto">
          <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-muted-foreground transition-colors group-focus-within:text-primary">
            <Search className="size-5" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setVisible(PAGE_SIZE);
            }}
            placeholder="Search articles..."
            className="h-14 w-full rounded-2xl border border-border bg-card pl-12 pr-6 text-base font-semibold text-foreground outline-none transition-all focus:border-primary focus:ring-0 md:w-80 md:rounded-full"
          />
        </div>
      </div>

      {/* Category pills */}
      <div className="no-scrollbar mb-10 flex items-center gap-3 overflow-x-auto px-2 pb-4 md:mb-12">
        <button
          onClick={() => {
            setActiveCategory("all");
            setVisible(PAGE_SIZE);
          }}
          className={`whitespace-nowrap rounded-full border px-6 py-2.5 text-sm font-bold transition-all ${
            activeCategory === "all"
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-transparent text-muted-foreground hover:border-primary/50 hover:text-foreground"
          }`}
        >
          All Insights
        </button>
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => {
              setActiveCategory(cat.slug);
              setVisible(PAGE_SIZE);
            }}
            className={`whitespace-nowrap rounded-full border px-6 py-2.5 text-sm font-bold transition-all ${
              activeCategory === cat.slug
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-transparent text-muted-foreground hover:border-primary/50 hover:text-foreground"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-3xl border border-border/50 bg-card/40 px-6 py-20 text-center">
          <p className="text-lg font-bold text-foreground">No articles found</p>
          <p className="mt-2 text-muted-foreground">Try a different search or category.</p>
        </div>
      ) : (
        <>
          {/* Featured */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-16 overflow-hidden rounded-[2.5rem] border border-border/50 bg-card/40"
            >
              <Link
                href={`/blog/${featured.slug}/`}
                className="group flex cursor-pointer flex-col gap-8 transition-all hover:border-primary/20 lg:flex-row lg:gap-12"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted/20 transition-colors group-hover:bg-muted/10 lg:aspect-auto lg:w-3/5">
                  {featured.featuredImageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={featured.featuredImageUrl}
                      alt={featured.title}
                      className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex flex-col items-center gap-2 rounded-2xl border border-dashed border-muted-foreground/30 p-4">
                        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/40">
                          IB Gram Insights
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="absolute left-6 top-6 rounded-full bg-primary px-4 py-2 text-xs font-black tracking-widest text-primary-foreground shadow-lg">
                    FEATURED
                  </div>
                </div>
                <div className="flex w-full flex-col justify-center p-8 lg:w-2/5 lg:p-12 lg:pl-0">
                  <div className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-primary">
                    <span>{featured.categoryName ?? "Insights"}</span>
                    <span className="size-1 rounded-full bg-border" />
                    <span className="text-muted-foreground">{featured.readingTimeMinutes} min read</span>
                  </div>
                  <h2 className="mb-6 text-3xl font-black leading-tight transition-colors group-hover:text-primary md:text-4xl lg:text-5xl">
                    {featured.title}
                  </h2>
                  <p className="mb-8 line-clamp-4 text-base font-medium leading-[1.8] text-muted-foreground md:text-xl">
                    {featured.excerpt}
                  </p>
                  <div className="mt-auto flex items-center gap-3 font-bold text-foreground">
                    Read This Article
                    <ArrowRight className="size-5 text-primary transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 gap-x-10 gap-y-16 px-2 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((blog, idx) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 3) * 0.1, duration: 0.5 }}
              >
                <Link href={`/blog/${blog.slug}/`} className="group flex cursor-pointer flex-col">
                  <div className="relative mb-6 aspect-[16/10] w-full overflow-hidden rounded-3xl border border-border/50 bg-card transition-all group-hover:border-primary/20">
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
                  <div className="mb-4 flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    <span className="flex items-center gap-1.5 text-primary">
                      <Clock className="size-3.5" /> {blog.readingTimeMinutes} min read
                    </span>
                    {blog.publishedAt && (
                      <>
                        <span className="size-1 rounded-full bg-border" />
                        <span>{formatDate(blog.publishedAt)}</span>
                      </>
                    )}
                  </div>
                  <h3 className="mb-3 line-clamp-2 text-xl font-black leading-snug transition-all duration-300 group-hover:text-primary md:text-2xl">
                    {blog.title}
                  </h3>
                  <p className="mb-6 line-clamp-3 font-medium leading-relaxed text-muted-foreground">{blog.excerpt}</p>
                  <div className="mt-auto flex items-center gap-2 text-sm font-bold text-foreground transition-colors group-hover:text-primary">
                    Full Article <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {visible < filtered.length && (
            <div className="mt-20 flex justify-center border-t border-border pt-20">
              <Button
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                variant="outline"
                size="lg"
                className="h-14 rounded-full border-2 border-primary/20 px-12 font-black transition-all hover:border-primary hover:bg-primary/5"
              >
                Load More Articles
              </Button>
            </div>
          )}
        </>
      )}
    </>
  );
}
