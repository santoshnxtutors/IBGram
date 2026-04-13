"use client";

import { motion } from "framer-motion";
import { BrainCircuit, BookOpenCheck, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AIToolsShowcase() {
  return (
    <section className="py-24 bg-background relative border-y border-white/5 shadow-2xl">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-6">
            <Sparkles className="size-4" /> Not just tutoring
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
            Supercharge Your Prep with <br />
            <span className="text-gradient">Proprietary AI Tools</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Get instant feedback, personalized test papers, and intelligent study scheduling to maximize your academic potential.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          
          {/* AI Test Generator Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative rounded-3xl overflow-hidden bg-card border border-border p-8 transition-colors hover:border-primary/50 cursor-pointer"
          >
            <div className="relative z-10">
              <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <BrainCircuit className="size-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3">AI Test Generator</h3>
              <p className="text-muted-foreground mb-8 text-base/relaxed pr-8 line-clamp-3">
                Generate IB & IGCSE past-paper style queries instantly. Target specific sub-topics, set time limits, and receive comprehensive rubric-based grading upon completion.
              </p>
              
              <Button className="w-full sm:w-auto h-12 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90">
                Generate Custom Test <ArrowRight className="ml-2 size-4" />
              </Button>
            </div>
          </motion.div>

           {/* Smart Study Planner Card */}
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative rounded-3xl overflow-hidden bg-card border border-border p-8 transition-colors hover:border-secondary/50 cursor-pointer"
          >
            <div className="relative z-10">
              <div className="size-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 text-secondary">
                <BookOpenCheck className="size-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Smart Study Planner</h3>
              <p className="text-muted-foreground mb-8 text-base/relaxed pr-8 line-clamp-3">
                Input your exam dates and syllabus. Our AI evaluates your weak areas and automatically constructs an effort-balanced, week-by-week calendar integrated with your tutor sessions.
              </p>
              
              <Button className="w-full sm:w-auto h-12 rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold">
                Plan Your Studies <ArrowRight className="ml-2 size-4" />
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
