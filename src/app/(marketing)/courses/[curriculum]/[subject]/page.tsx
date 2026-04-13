"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, GraduationCap, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CoursePage() {
  const params = useParams();
  const router = useRouter();
  
  const curriculum = (params.curriculum as string)?.toUpperCase() || "IB";
  const subjectStr = params.subject as string;
  const subject = subjectStr ? subjectStr.charAt(0).toUpperCase() + subjectStr.slice(1).replace(/-/g, " ") : "Course";

  return (
    <div className="min-h-screen bg-background relative overflow-hidden pt-24 pb-16">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <Button 
          variant="ghost" 
          onClick={() => router.back()}
          className="mb-8 hover:bg-white/5"
        >
          <ArrowLeft className="size-4 mr-2" /> Back
        </Button>

        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest">
              {curriculum} Curriculum
            </div>
            <div className="px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-black uppercase tracking-widest">
              Top 1% Tutors
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tight text-foreground mb-6"
          >
            Master {subject} with <span className="text-primary">IB Gram</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed"
          >
            Get matched with elite, verified tutors specialized in {curriculum} {subject}. 
            Our educators bring years of experience and proven success rates to help you excel in your exams.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            <div className="p-6 rounded-[2rem] bg-card border border-white/5 relative overflow-hidden group hover:border-primary/30 transition-colors">
              <BookOpen className="size-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Comprehensive Syllabus</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We cover the entire {curriculum} {subject} syllabus, focusing on core concepts, internal assessments, and past paper strategies.
              </p>
            </div>
            <div className="p-6 rounded-[2rem] bg-card border border-white/5 relative overflow-hidden group hover:border-secondary/30 transition-colors">
              <GraduationCap className="size-8 text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-2">Result-Oriented Approach</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our methodology is tailored to maximize your potential. 98% of our students achieve top grades in their finals.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button onClick={() => router.push('/tutors')} className="h-14 px-8 rounded-2xl bg-primary text-primary-foreground font-black text-lg shadow-xl shadow-primary/20 shimmer-btn">
              Find a {subject} Tutor
            </Button>
            <Button variant="outline" onClick={() => router.push('/admissions')} className="h-14 px-8 rounded-2xl font-black border-2 border-border text-lg hover:bg-muted">
              Book a Demo Class
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
