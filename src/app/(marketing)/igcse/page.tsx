"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, BrainCircuit, Globe2, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function IGCSEPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[120px]" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px]" />
        </div>

        <div className="container px-4 md:px-6 relative z-10 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium">
              <Star className="size-4" fill="currentColor" />
              <span>Voted #1 Cambridge IGCSE Resource</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
              Master the <span className="text-gradient">IGCSE</span> Curriculum
            </h1>
            
            <p className="text-xl text-muted-foreground md:text-2xl leading-relaxed max-w-2xl mx-auto">
              Empowering IGCSE students globally to secure A* grades using AI-driven mock tests, targeted revision, and elite 1:1 tutors.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="h-14 px-8 text-lg bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg shadow-secondary/20">
                Explore IGCSE Subject Paths <ArrowRight className="ml-2 size-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg bg-background/50 backdrop-blur-sm border-border hover:bg-border/50">
                <BrainCircuit className="mr-2 size-5" /> Try AI Generator
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Subject Tiles */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Cambridge IGCSE Subject Toolkits</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Comprehensive question banks, past paper solution videos, and AI-graded mock examinations tailored strictly to the current Cambridge syllabus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Subject Card */}
            <Link href="#">
              <Card className="group h-full bg-background border-border/50 hover:border-secondary/50 transition-all hover:shadow-lg hover:shadow-secondary/10 overflow-hidden relative">
                <div className="absolute inset-x-0 bottom-0 h-1 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                <CardContent className="p-8">
                  <div className="size-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-6">
                    <span className="font-bold text-xl">∑</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Mathematics</h3>
                  <p className="text-muted-foreground mb-4">Syllabus 0580 & 0980 (Core & Extended). Over 2,000 video solutions and practice tests.</p>
                  <span className="text-secondary font-medium flex items-center text-sm">
                    View Course Toolkit <ArrowRight className="ml-1 size-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </CardContent>
              </Card>
            </Link>

            {/* Subject Card */}
            <Link href="#">
              <Card className="group h-full bg-background border-border/50 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10 overflow-hidden relative">
                <div className="absolute inset-x-0 bottom-0 h-1 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                <CardContent className="p-8">
                  <div className="size-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-6">
                    <Globe2 className="size-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Co-ordinated Sciences</h3>
                  <p className="text-muted-foreground mb-4">Syllabus 0654. Double Award aligned question banks for Physics, Chemistry, and Biology.</p>
                  <span className="text-blue-500 font-medium flex items-center text-sm">
                    View Course Toolkit <ArrowRight className="ml-1 size-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </CardContent>
              </Card>
            </Link>

            {/* Subject Card */}
            <Link href="#">
              <Card className="group h-full bg-background border-border/50 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10 overflow-hidden relative">
                <div className="absolute inset-x-0 bottom-0 h-1 bg-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                <CardContent className="p-8">
                  <div className="size-12 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-6">
                    <BookOpen className="size-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">First Language English</h3>
                  <p className="text-muted-foreground mb-4">Syllabus 0500. Comprehensive essay grading AI and passage analysis breakdown.</p>
                  <span className="text-purple-500 font-medium flex items-center text-sm">
                    View Course Toolkit <ArrowRight className="ml-1 size-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Methodology */}
      <section className="py-24 bg-muted/20 border-t border-border">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <div className="inline-flex size-12 rounded-full bg-primary/20 text-primary items-center justify-center mb-6">
                <ShieldCheck className="size-6" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Why Top IGCSE Students Choose IB Gram</h2>
              <ul className="space-y-4">
                 <li className="flex gap-3 items-start">
                   <div className="mt-1 size-5 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 text-secondary text-xs font-bold">✓</div>
                   <div>
                     <span className="font-semibold text-foreground block">Strictly Cambridge Aligned</span>
                     <span className="text-sm text-muted-foreground">No bloated content. Everything maps exactly to the latest 2024-2025 syllabi requirements.</span>
                   </div>
                 </li>
                 <li className="flex gap-3 items-start">
                   <div className="mt-1 size-5 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 text-secondary text-xs font-bold">✓</div>
                   <div>
                     <span className="font-semibold text-foreground block">Predictive AI Grading</span>
                     <span className="text-sm text-muted-foreground">Our algorithms compare your mock test answers against examiner reports to instantly estimate your 9-1 grade.</span>
                   </div>
                 </li>
              </ul>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl blur-[40px] z-0" />
              <div className="glassmorphism-heavy border-white/10 rounded-3xl p-8 relative z-10 shadow-2xl">
                 <h3 className="text-2xl font-bold text-foreground mb-6">IGCSE Grade Distribution Target</h3>
                 <div className="space-y-4">
                   <div>
                     <div className="flex justify-between mb-1 text-sm font-medium">
                       <span>A* / 9-8 Targets</span>
                       <span className="text-secondary">82%</span>
                     </div>
                     <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
                       <div className="h-full bg-secondary rounded-full" style={{ width: '82%' }} />
                     </div>
                   </div>
                   <div>
                     <div className="flex justify-between mb-1 text-sm font-medium">
                       <span>A / 7 Targets</span>
                       <span className="text-primary">94%</span>
                     </div>
                     <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
                       <div className="h-full bg-primary rounded-full" style={{ width: '94%' }} />
                     </div>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
