"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const MOCK_BLOGS = [
  {
    id: "1",
    title: "Mastering the IB DP Core: A Strategy for ToK and EE",
    excerpt: "Discover the proven methodologies to score an A in Theory of Knowledge and your Extended Essay without burning out.",
    category: "IB Strategy",
    readTime: "5 min read",
    date: "Aug 12, 2024",
    image: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?w=600&h=400&fit=crop"
  },
  {
    id: "2",
    title: "IGCSE Success: Time Management for Intense Revision",
    excerpt: "How top students organize their weekly schedules bridging the gap between social life and 9A*s.",
    category: "Study Tips",
    readTime: "4 min read",
    date: "Sep 05, 2024",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop"
  },
  {
    id: "3",
    title: "The Ultimate Guide to STEM Applications Worldwide",
    excerpt: "An insider's view on what admissions officers at Oxbridge and Ivy League schools look for in a modern applicant.",
    category: "University",
    readTime: "7 min read",
    date: "Oct 21, 2024",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop"
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
              Latest Insights & <span className="text-gradient">Resources</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl font-medium">
              Expert strategies, study guides, and university admission secrets directly from elite educators.
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
          {MOCK_BLOGS.map((blog, idx) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
