"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BookOpen, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CourseTutorSection } from "./course-tutor-section";
import { formatCourseSubject } from "./course-tutor-data";

export default function CoursePage() {
  const params = useParams();
  const router = useRouter();

  const curriculum = (params.curriculum as string)?.toUpperCase() || "IB";
  const subjectStr = (params.subject as string) || "course";
  const subject = formatCourseSubject(subjectStr);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-secondary/5 blur-[100px]" />

      <section className="relative z-10 pt-16 pb-14">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="mb-6 rounded-full px-4 hover:bg-white/5"
          >
            <ArrowLeft className="mr-2 size-4" /> Back
          </Button>

          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-5 flex flex-wrap items-center gap-3"
            >
              <div className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-black uppercase tracking-widest text-primary">
                {curriculum} Curriculum
              </div>
              <div className="rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-xs font-black uppercase tracking-widest text-secondary">
                Top 1% Tutors
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6 text-4xl font-black tracking-tight text-foreground md:text-6xl"
            >
              Master {subject} with <span className="text-primary">IB Gram</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
            >
              Get matched with elite, verified tutors specialized in {curriculum} {subject}. Our educators bring years of
              experience and proven success strategies to help you build confidence and perform strongly in your exams.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-10 grid gap-6 md:grid-cols-2"
            >
              <div className="rounded-[2rem] border border-white/5 bg-card p-6 transition-colors hover:border-primary/20">
                <BookOpen className="mb-4 size-8 text-primary" />
                <h3 className="mb-2 text-xl font-bold">Comprehensive Syllabus</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  We cover the full {curriculum} {subject} syllabus with structured lessons, topic sequencing, and exam-ready practice.
                </p>
              </div>
              <div className="rounded-[2rem] border border-white/5 bg-card p-6 transition-colors hover:border-secondary/20">
                <GraduationCap className="mb-4 size-8 text-secondary" />
                <h3 className="mb-2 text-xl font-bold">Result-Oriented Approach</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Our tutoring blends concept clarity, question technique, and feedback loops to improve accuracy and final outcomes.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Button
                onClick={() => router.push("/tutors")}
                variant="outline"
                className="h-14 rounded-2xl border-primary/25 bg-primary/10 px-8 text-lg font-bold text-primary hover:bg-primary/15"
              >
                Find a {subject} Tutor <ArrowRight className="ml-2 size-5" />
              </Button>
              <Button
                variant="outline"
                onClick={() => router.push("/admissions")}
                className="h-14 rounded-2xl border-border px-8 text-lg font-bold hover:bg-muted"
              >
                Book a Demo Class <ArrowRight className="ml-2 size-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <CourseTutorSection curriculum={curriculum} subjectSlug={subjectStr} />
    </div>
  );
}
