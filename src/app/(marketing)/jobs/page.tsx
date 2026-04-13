"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Search, ArrowRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const DEPARTMENTS = ["All Departments", "Teaching & Academic", "Engineering", "Operations", "Product & Design"];

const JOBS = [
  {
    id: "1",
    title: "Elite IB Physics Specialist",
    department: "Teaching & Academic",
    location: "Global / Remote",
    type: "Full-time",
    level: "Senior",
    posted: "2 days ago"
  },
  {
    id: "2",
    title: "Senior Fullstack Engineer (Next.js & AI)",
    department: "Engineering",
    location: "Hybrid / Dubai",
    type: "Full-time",
    level: "Senior",
    posted: "4 days ago"
  },
  {
    id: "3",
    title: "Academic Success Counselor",
    department: "Operations",
    location: "Remote",
    type: "Full-time",
    level: "Mid-level",
    posted: "1 week ago"
  },
  {
    id: "4",
    title: "UI/UX Designer (EdTech Platforms)",
    department: "Product & Design",
    location: "Remote",
    type: "Contract",
    level: "Senior",
    posted: "3 days ago"
  },
  {
    id: "5",
    title: "IGCSE Mathematics Lead Tutor",
    department: "Teaching & Academic",
    location: "Hybrid / London",
    type: "Full-time",
    level: "Team Lead",
    posted: "5 days ago"
  },
  {
    id: "6",
    title: "Backend Engineer (Python & FastAPI)",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    level: "Mid-level",
    posted: "1 day ago"
  }
];

export default function JobsPage() {
  const [activeDept, setActiveDept] = useState("All Departments");

  const filteredJobs = activeDept === "All Departments" 
    ? JOBS 
    : JOBS.filter(job => job.department === activeDept);

  return (
    <div className="min-h-screen bg-background text-foreground pb-32">
      {/* Header Spacer */}
      <div className="h-24 md:h-32" />

      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        
        {/* Hero Section - True Minimalist (No Fancy Badges) */}
        <div className="text-center max-w-3xl mx-auto mb-20 px-2">
           <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground mb-6 tracking-tight leading-tight">
              Careers at <span className="text-gradient">IB Gram</span>
           </h1>
           <p className="text-muted-foreground text-lg md:text-xl font-medium leading-relaxed">
              Building the world's most intelligent EdTech platform. We're looking for thinkers, educators, and creators.
           </p>
        </div>

        {/* Minimal Search & Filter - Clean Bordered Style */}
        <div className="flex flex-col lg:flex-row gap-6 mb-16 items-center justify-between border-b border-border/50 pb-12">
           <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full lg:w-auto pb-2 lg:pb-0">
              {DEPARTMENTS.map((dept) => (
                 <button
                    key={dept}
                    onClick={() => setActiveDept(dept)}
                    className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold border transition-all ${
                       activeDept === dept 
                       ? "bg-foreground text-background border-foreground" 
                       : "bg-transparent text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                    }`}
                 >
                    {dept}
                 </button>
              ))}
           </div>

           <div className="relative w-full lg:w-80 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <input 
                 type="text" 
                 placeholder="Search roles..."
                 className="h-12 w-full pl-12 pr-6 bg-card border border-border rounded-xl text-foreground font-semibold text-sm focus:ring-0 focus:border-primary transition-all outline-none"
              />
           </div>
        </div>

        {/* Jobs Listing - Minimal List Style (No heavy blocks) */}
        <div className="flex flex-col">
           {filteredJobs.length > 0 ? (
              filteredJobs.map((job, idx) => (
                 <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="group py-10 border-b border-border/40 flex flex-col md:flex-row md:items-center justify-between gap-8 hover:px-4 transition-all"
                 >
                    <div className="flex flex-col gap-4">
                       <div className="flex items-center gap-3">
                          <span className="text-[10px] uppercase font-black tracking-widest text-primary">
                             {job.department}
                          </span>
                          <span className="w-1 h-1 rounded-full bg-border" />
                          <span className="text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                             {job.posted}
                          </span>
                       </div>
                       <h3 className="text-2xl md:text-3xl font-black text-foreground group-hover:text-primary transition-colors tracking-tight">
                          {job.title}
                       </h3>
                       <div className="flex flex-wrap items-center gap-6 text-sm md:text-base font-bold text-muted-foreground">
                          <span className="flex items-center gap-2"><MapPin className="size-4" /> {job.location}</span>
                          <span className="flex items-center gap-2"><Briefcase className="size-4" /> {job.type}</span>
                          <span className="flex items-center gap-2"><Building2 className="size-4" /> {job.level}</span>
                       </div>
                    </div>

                    <div className="flex items-center gap-4">
                       <Button variant="outline" className="h-12 px-8 rounded-xl font-black text-sm border-border group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all flex items-center gap-2">
                          View Role <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                       </Button>
                    </div>
                 </motion.div>
              ))
           ) : (
              <div className="text-center py-20">
                 <Briefcase className="size-12 text-muted-foreground/20 mx-auto mb-4" />
                 <h3 className="text-xl font-bold text-foreground">No roles matching your criteria</h3>
                 <p className="text-muted-foreground font-medium mt-1">Try another category or search term.</p>
              </div>
           )}
        </div>

        {/* Bottom CTA - Truly Minimal (No white grid) */}
        <section className="text-center mt-20 py-24 border-t border-border/60">
           <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-foreground">Don't see a perfect fit?</h2>
           <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10 font-bold">
              We're always looking for geniuses, disruptors, and educators. Send us a general application and we'll be in touch.
           </p>
           <div className="flex justify-center">
              <Button variant="outline" className="h-14 px-12 rounded-2xl border-2 border-primary/20 text-foreground font-black text-lg hover:border-primary hover:bg-primary/5 transition-all">
                 Send General Inquiry
              </Button>
           </div>
        </section>

      </div>
    </div>
  );
}
