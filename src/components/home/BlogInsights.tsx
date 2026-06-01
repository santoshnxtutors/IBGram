import { ArrowRight, Clock, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const MOCK_BLOGS = [
  {
    id: "1",
    title: "Planning the IB DP Core without losing the weekly rhythm",
    excerpt: "A practical way to organise TOK, EE and subject work so deadlines feel visible before they become urgent.",
    category: "IB Strategy",
    readTime: "5 min read",
    date: "Aug 12, 2024",
    image: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?w=600&h=400&fit=crop"
  },
  {
    id: "2",
    title: "IGCSE revision when several subjects feel urgent",
    excerpt: "How students can split revision time across weak areas, past papers and school assignments without overloading the week.",
    category: "Study Tips",
    readTime: "4 min read",
    date: "Sep 05, 2024",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop"
  },
  {
    id: "3",
    title: "Choosing STEM subjects with university plans in mind",
    excerpt: "Questions families can ask before choosing HL subjects, IGCSE combinations or additional academic support.",
    category: "University",
    readTime: "7 min read",
    date: "Oct 21, 2024",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
  }
];

export function BlogInsights() {
  return (
    <section className="py-24 bg-background border-t border-border/40">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        {/* Minimal Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 tracking-tight">
              Study insights and <span className="text-gradient">family resources</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl font-medium">
              Calm, practical reading for IB and IGCSE families thinking through subjects, revision, deadlines and tutor support.
            </p>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-2 font-bold text-primary hover:text-primary/80 transition-colors shrink-0 group py-2"
          >
            View All Blogs <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Minimal Grid - No Heavy Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {MOCK_BLOGS.map((blog) => (
            <div
              key={blog.id}
              className="flex flex-col group cursor-pointer"
            >
              {/* Minimal Image Wrap */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-card border border-border/50 mb-6">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[20%] group-hover:grayscale-0"
                />
                {/* Category Badge overlay */}
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm border border-border px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-bold text-foreground">
                  <Tag className="size-3 text-primary" /> {blog.category}
                </div>
              </div>

              {/* Clean Typography Layout */}
              <div className="flex items-center gap-4 text-xs font-semibold text-muted-foreground mb-4">
                <span className="flex items-center gap-1.5"><Clock className="size-3.5" /> {blog.readTime}</span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span>{blog.date}</span>
              </div>

              <h3 className="text-xl md:text-2xl font-black leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {blog.title}
              </h3>

              <p className="text-muted-foreground font-medium leading-relaxed line-clamp-3 mb-6">
                {blog.excerpt}
              </p>

              <div className="mt-auto flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                Read Article <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
