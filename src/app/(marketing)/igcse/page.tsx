import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, GraduationCap, ShieldCheck, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IGCSETutors } from "./tutor";
import { IGCSESubjectExplorer } from "./subject-explorer";

export const metadata: Metadata = {
  title: "IGCSE Programmes & Subjects | IB Gram",
  description: "Explore comprehensive IGCSE pathways for Cambridge and Pearson Edexcel. Get expert tutoring and official curriculum resources.",
};

export default function IGCSEPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <section className="relative overflow-hidden pt-16 pb-20 noise-overlay">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[100px]" />
          <div className="absolute bottom-1/4 -left-1/4 h-[400px] w-[400px] rounded-full bg-secondary/5 blur-[80px]" />
        </div>

        <div className="container relative z-10 mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <GraduationCap className="size-4" />
              <span>Elite IGCSE Tutoring & Curriculum Support</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-6xl">
              Master Your <span className="text-gradient">IGCSE</span> Curriculum
            </h1>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Our comprehensive IGCSE section provides a stable index of programs, subjects, and official resources to help you excel in Cambridge and Pearson Edexcel examinations.
            </p>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Link href="/tutors">
                <Button size="lg" variant="outline" className="glassmorphism h-12 rounded-full border-primary/30 px-8 text-base text-primary transition-all group hover:bg-primary/10">
                  Find an IGCSE Tutor <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="#subjects">
                <Button size="lg" variant="outline" className="glassmorphism h-12 rounded-full px-8 text-base">
                  Browse Subjects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/50 bg-muted/5 py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-secondary">
                <Target className="size-4" />
                <span>Program Overview</span>
              </div>
              <h2 className="text-3xl font-bold">Comprehensive Curriculum Index</h2>
              <p className="leading-relaxed text-muted-foreground">
                A comprehensive IGCSE section should behave like a curriculum catalog: a stable source-of-truth index of programs, subjects, and specifications. We model our support around the two primary board programs:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs tracking-tighter text-primary">C</div>
                  <div>
                    <span className="block text-sm font-semibold text-foreground">Cambridge IGCSE</span>
                    <span className="text-xs text-muted-foreground">Offered by Cambridge University Press & Assessment for ages 14-16.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-secondary/20 text-xs tracking-tighter text-secondary">P</div>
                  <div>
                    <span className="block text-sm font-semibold text-foreground">Pearson Edexcel International GCSE (9-1)</span>
                    <span className="text-xs text-muted-foreground">Available in 37 subjects with choice of linear or modular assessment.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="glassmorphism space-y-6 rounded-2xl border-white/5 p-8">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                  <ShieldCheck className="size-6" />
                </div>
                <h3 className="text-xl font-bold">Why Us for IGCSE?</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                The most maintainable approach is a student-friendly layer that points to official board documents rather than duplicating copyrighted content. Our subject pages are designed to be thin, informative, and actionable.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-border/50 bg-background/50 p-4">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-[10px] font-bold uppercase text-muted-foreground">Official Alignment</div>
                </div>
                <div className="rounded-xl border border-border/50 bg-background/50 p-4">
                  <div className="text-2xl font-bold text-secondary">Elite</div>
                  <div className="text-[10px] font-bold uppercase text-muted-foreground">Tutor Network</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20" id="subjects">
        <div className="container mx-auto max-w-7xl px-4">
          <IGCSESubjectExplorer />
        </div>
      </section>

      <IGCSETutors />

      <section className="bg-muted/10 py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold">Understanding Assessment & Grading</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-6 w-1.5 rounded-full bg-primary"></div>
                <h3 className="text-xl font-bold">Cambridge IGCSE Model</h3>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  Cambridge explains the relationship between A*-G and 9-1 variants, administrative zone implications, and warns that switching between grading-scale syllabuses after entry deadlines is not allowed.
                </p>
                <ul className="grid grid-cols-2 gap-3">
                  <li className="flex items-center gap-2 rounded-lg border border-border/50 bg-background/50 p-3">
                    <div className="size-2 rounded-full bg-primary" />
                    <span>A*-G & 9-1 Scales</span>
                  </li>
                  <li className="flex items-center gap-2 rounded-lg border border-border/50 bg-background/50 p-3">
                    <div className="size-2 rounded-full bg-primary" />
                    <span>Zone Restrictions</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-6 w-1.5 rounded-full bg-secondary"></div>
                <h3 className="text-xl font-bold">Pearson Edexcel Model</h3>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  Pearson describes International GCSEs as awarded on the 9-1 scale and provides a choice between linear or modular assessment for many subjects to suit different learner needs.
                </p>
                <ul className="grid grid-cols-2 gap-3">
                  <li className="flex items-center gap-2 rounded-lg border border-border/50 bg-background/50 p-3">
                    <div className="size-2 rounded-full bg-secondary" />
                    <span>9-1 Grading Scale</span>
                  </li>
                  <li className="flex items-center gap-2 rounded-lg border border-border/50 bg-background/50 p-3">
                    <div className="size-2 rounded-full bg-secondary" />
                    <span>Linear/Modular Paths</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 bg-primary/10" />
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <div className="glassmorphism space-y-8 rounded-[2.5rem] border-primary/20 p-12">
            <h2 className="text-4xl font-bold">Ready to Excel in your IGCSEs?</h2>
            <p className="text-lg text-muted-foreground">
              Do not navigate the complex world of IGCSE programs alone. Connect with our elite subject experts who specialize in Cambridge and Edexcel curriculums.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="outline" className="glassmorphism group h-14 rounded-full border-primary/30 px-10 text-lg text-primary transition-all hover:bg-primary/10">
                Book a Free Trial Session <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="glassmorphism h-14 rounded-full border-primary/30 px-10 text-lg hover:bg-primary/5">
                Speak with an Academic Advisor
              </Button>
            </div>
            <div className="flex justify-center gap-8 pt-6 text-sm font-medium text-muted-foreground">
              <span className="flex items-center gap-2">
                <div className="size-1.5 rounded-full bg-green-500" />
                Personalized Learning
              </span>
              <span className="flex items-center gap-2">
                <div className="size-1.5 rounded-full bg-green-500" />
                Exam-Focused Prep
              </span>
              <span className="flex items-center gap-2">
                <div className="size-1.5 rounded-full bg-green-500" />
                AI-Driven Insights
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



