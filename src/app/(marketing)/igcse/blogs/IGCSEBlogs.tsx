import { ArrowRight, Clock, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { igcseBlogs } from "../content";

export function IGCSEBlogs() {
  return (
    <section className="border-t border-border/40 bg-background py-16 md:py-24" id="igcse-blogs">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">
              IGCSE study insights and family resources
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-muted-foreground md:text-lg">
              Practical reading for board choices, mock preparation, past-paper habits and subject-specific revision.
            </p>
          </div>
          <Link href="/blog" className="inline-flex shrink-0 items-center gap-2 text-sm font-black text-primary hover:text-primary/80">
            View all blogs <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {igcseBlogs.map((blog) => (
            <article key={blog.title} className="group flex h-full flex-col">
              <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-2xl border border-border/50 bg-card">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover grayscale-[15%] transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-border bg-background/90 px-3 py-1.5 text-xs font-bold text-foreground backdrop-blur-sm">
                  <Tag className="size-3 text-primary" />
                  {blog.category}
                </div>
              </div>

              <div className="mb-4 flex items-center gap-4 text-xs font-semibold text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Clock className="size-3.5" />
                  {blog.readTime}
                </span>
                <span className="h-1 w-1 rounded-full bg-border" />
                <span>{blog.date}</span>
              </div>

              <h3 className="text-xl font-black leading-snug text-foreground transition-colors group-hover:text-primary md:text-2xl">
                {blog.title}
              </h3>
              <p className="mt-3 line-clamp-3 text-sm font-medium leading-7 text-muted-foreground">{blog.excerpt}</p>
              <div className="mt-auto pt-6 text-sm font-black text-foreground transition-colors group-hover:text-primary">
                Read article <ArrowRight className="ml-1 inline size-4 transition-transform group-hover:translate-x-1" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

