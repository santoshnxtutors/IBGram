"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Tag, Search, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CATEGORIES = ["All Insights", "IB Strategy", "IGCSE Tips", "Study Habits", "University Prep", "EdTech News"];

const MOCK_BLOGS = [
  {
    id: "1",
    title: "Mastering the IB DP Core: A Strategy for ToK and EE",
    excerpt: "Discover the proven methodologies to score an A in Theory of Knowledge and your Extended Essay without burning out. We dive into the specific marking criteria and how to align your research for maximum impact.",
    category: "IB Strategy",
    readTime: "5 min read",
    date: "Aug 12, 2024",
    image: "", // Blank as requested
    featured: true
  },
  {
    id: "2",
    title: "IGCSE Success: Time Management for Intense Revision",
    excerpt: "How top students organize their weekly schedules bridging the gap between social life and 9A*s.",
    category: "Study habits",
    readTime: "4 min read",
    date: "Sep 05, 2024",
    image: ""
  },
  {
    id: "3",
    title: "The Ultimate Guide to STEM Applications Worldwide",
    excerpt: "An insider's view on what admissions officers at Oxbridge and Ivy League schools look for in a modern applicant.",
    category: "University Prep",
    readTime: "7 min read",
    date: "Oct 21, 2024",
    image: ""
  },
  {
    id: "4",
    title: "Why AI is the Future of Personalized IB Tutoring",
    excerpt: "Exploring how generative models and adaptive learning are changing the landscape of international education.",
    category: "EdTech News",
    readTime: "6 min read",
    date: "Nov 02, 2024",
    image: ""
  },
  {
    id: "5",
    title: "Top 10 IB Physics IA Ideas for 2025",
    excerpt: "Our experts analyzed the latest examiner reports to find the most successful Internal Assessment topics.",
    category: "IB Strategy",
    readTime: "8 min read",
    date: "Dec 15, 2024",
    image: ""
  },
  {
    id: "6",
    title: "Bridging the Gap: Moving from MYP to DP",
    excerpt: "Transitioning to the Diploma Programme can be a shock. Here is how to prepare mentally and academically.",
    category: "Study habits",
    readTime: "5 min read",
    date: "Jan 10, 2025",
    image: ""
  }
];

export default function BlogListingPage() {
  const featuredPost = MOCK_BLOGS.find(b => b.featured) || MOCK_BLOGS[0];
  const regularPosts = MOCK_BLOGS.filter(b => b.id !== featuredPost.id);

  return (
    <div className="min-h-screen bg-background text-foreground pb-24">
      {/* Header Spacer */}
      <div className="h-24 md:h-32" />

      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Page Title & Search Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 px-2">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground mb-6 tracking-tight">
              IB Gram <span className="text-gradient">Insights</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl font-medium leading-relaxed">
              The academic edge. Expert strategies, study guides, and the latest in IB/IGCSE education.
            </p>
          </div>
          
          <div className="relative group w-full md:w-auto">
             <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors">
                <Search className="size-5" />
             </div>
             <input 
                type="text" 
                placeholder="Search articles..."
                className="h-14 w-full md:w-80 pl-12 pr-6 bg-card border border-border rounded-2xl md:rounded-full text-foreground font-semibold text-base focus:ring-0 focus:border-primary transition-all outline-none"
             />
          </div>
        </div>

        {/* Category Filter Pills (Zomato Style) */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-12 no-scrollbar px-2">
          {CATEGORIES.map((cat, idx) => (
            <button 
              key={cat}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold border transition-all ${
                idx === 0 
                ? "bg-primary text-primary-foreground border-primary" 
                : "bg-transparent text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Post (Zomato Inspired Wide Layout) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="group relative flex flex-col lg:flex-row gap-8 lg:gap-12 bg-card/40 border border-border/50 rounded-[2.5rem] overflow-hidden mb-16 hover:border-primary/20 transition-all cursor-pointer"
        >
          {/* Placeholder for Featured Image */}
          <div className="w-full lg:w-3/5 aspect-[16/9] lg:aspect-auto bg-muted/20 relative group-hover:bg-muted/10 transition-colors">
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="p-4 border border-dashed border-muted-foreground/30 rounded-2xl flex flex-col items-center gap-2">
                  <span className="text-muted-foreground/40 font-bold uppercase tracking-widest text-xs">Featured Image Blank</span>
               </div>
            </div>
            <div className="absolute top-6 left-6 bg-primary text-primary-foreground text-xs font-black tracking-widest px-4 py-2 rounded-full shadow-lg">
              FEATURED
            </div>
          </div>
          
          <div className="w-full lg:w-2/5 p-8 lg:p-12 lg:pl-0 flex flex-col justify-center">
            <div className="flex items-center gap-3 text-xs font-bold text-primary mb-6 uppercase tracking-widest">
              <span>{featuredPost.category}</span>
              <span className="size-1 rounded-full bg-border" />
              <span className="text-muted-foreground">{featuredPost.readTime}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight group-hover:text-primary transition-colors">
              {featuredPost.title}
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl font-medium leading-[1.8] mb-8 line-clamp-4">
              {featuredPost.excerpt}
            </p>
            <div className="mt-auto flex items-center gap-3 font-bold text-foreground">
              Read This Article <ArrowRight className="size-5 text-primary group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </motion.div>

        {/* Minimal Grid - No Heavy Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 px-2">
          {regularPosts.map((blog, idx) => (
            <motion.div 
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex flex-col group cursor-pointer"
            >
              {/* Minimal Image Placeholder */}
              <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden bg-card border border-border/50 mb-6 group-hover:border-primary/20 transition-all">
                <div className="absolute inset-0 bg-muted/10 flex items-center justify-center">
                   <span className="text-muted-foreground/30 font-bold uppercase tracking-widest text-[10px]">Article Image Blank</span>
                </div>
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm border border-border px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-bold text-foreground">
                   <Tag className="size-3 text-primary" /> {blog.category}
                </div>
              </div>

              {/* Clean Typography Layout */}
              <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-black text-muted-foreground mb-4">
                <span className="flex items-center gap-1.5 text-primary"><Clock className="size-3.5" /> {blog.readTime}</span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span>{blog.date}</span>
              </div>

              <h3 className="text-xl md:text-2xl font-black leading-snug mb-3 group-hover:text-primary transition-all duration-300 line-clamp-2">
                {blog.title}
              </h3>

              <p className="text-muted-foreground font-medium leading-relaxed line-clamp-3 mb-6">
                {blog.excerpt}
              </p>

              <div className="mt-auto flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                 Full Article <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination / Load More Placeholder */}
        <div className="mt-20 flex justify-center border-t border-border pt-20">
           <Button variant="outline" size="lg" className="rounded-full px-12 h-14 font-black border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all">
              Load Older Articles
           </Button>
        </div>

      </div>
    </div>
  );
}
