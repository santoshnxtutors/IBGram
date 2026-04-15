import React from "react";
import { ProgrammeHero } from "@/components/programmes/ProgrammeHero";
import { ProgrammeSection } from "@/components/programmes/ProgrammeSection";
import { BookOpen, GraduationCap, ArrowUpRight, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProgrammesHubPage() {
  return (
    <div className="min-h-screen bg-background pb-4">
      <section className="relative w-full pt-12 pb-12 flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center space-y-4 md:space-y-6">
          <h1 className="text-4xl md:text-[3.5rem] leading-[1.1] font-extrabold tracking-tight text-foreground">
            IB Programmes Continuum
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-muted-foreground max-w-2xl">
            Expertly Curated Tutoring for Every Stage of the IB Journey
          </h2>
          <p className="text-lg text-muted-foreground/80 max-w-3xl leading-relaxed">
            The International Baccalaureate (IB) continuum develops well-rounded, inquiring learners. Our mission is to connect you with the perfect tutors to excel at every level.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link href="/tutors">
              <Button variant="outline" className="rounded-full px-8 h-12 text-[15px] font-bold border-primary/20 text-primary hover:bg-primary/5 flex items-center gap-2">
                Find the Perfect Tutors <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="https://wa.me/919876543210" target="_blank">
              <Button variant="outline" className="rounded-full px-6 h-12 text-[15px] font-bold border-primary/20 text-primary hover:bg-primary/5">
                Contact on WhatsApp 💬
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <ProgrammeSection 
        title="What is an IB Education?" 
        description="The IB learner profile is the core of all four programmes. It translates the IB mission into a set of 10 learning outcomes, inspiring learners to be inquirers, knowledgeable, thinkers, communicators, principled, open-minded, caring, risk-takers, balanced, and reflective."
        icon={BookOpen}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-muted/5 p-6 md:p-8 rounded-3xl border border-border/50">
          <div>
            <h4 className="text-lg font-bold text-foreground mb-2">Holistic Development</h4>
            <p className="text-muted-foreground/90 text-sm leading-relaxed">
              Fostering students' academic, social, and emotional wellbeing while focusing on international-mindedness and strong personal values.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-foreground mb-2">Inquiry-based Learning</h4>
            <p className="text-muted-foreground/90 text-sm leading-relaxed">
              Curricula are built around structured inquiry, enabling students to ask questions, explore topics, and reflect on their understanding.
            </p>
          </div>
        </div>
      </ProgrammeSection>

      <ProgrammeSection 
        title="Programme Comparison" 
        description="A quick overview of the IB Continuum framework to help you understand the progression."
        icon={CheckCircle2}
      >
        <div className="overflow-x-auto bg-card border border-border/50 rounded-2xl">
          <table className="w-full text-sm text-left whitespace-nowrap md:whitespace-normal">
            <thead className="text-xs uppercase bg-muted/30 text-muted-foreground border-b border-border/50">
              <tr>
                <th className="px-6 py-4 font-bold text-foreground">Programme</th>
                <th className="px-6 py-4 font-bold text-foreground">Age Range</th>
                <th className="px-6 py-4 font-bold text-foreground">Curriculum Organizer</th>
                <th className="px-6 py-4 font-bold text-foreground">Assessment Approach</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50 text-foreground">
              <tr className="hover:bg-muted/10 transition-colors">
                <td className="px-6 py-4 font-bold"><span className="text-primary mr-2">•</span>PYP</td>
                <td className="px-6 py-4 font-medium">3–12</td>
                <td className="px-6 py-4 text-muted-foreground">Transdisciplinary themes</td>
                <td className="px-6 py-4 text-muted-foreground">Ongoing, integrated assessment</td>
              </tr>
              <tr className="hover:bg-muted/10 transition-colors">
                <td className="px-6 py-4 font-bold"><span className="text-primary mr-2">•</span>MYP</td>
                <td className="px-6 py-4 font-medium">11–16</td>
                <td className="px-6 py-4 text-muted-foreground">Eight subject groups, interdisciplinary</td>
                <td className="px-6 py-4 text-muted-foreground">Criterion-related, optional eAssessment</td>
              </tr>
              <tr className="hover:bg-muted/10 transition-colors">
                <td className="px-6 py-4 font-bold"><span className="text-primary mr-2">•</span>DP</td>
                <td className="px-6 py-4 font-medium">16–19</td>
                <td className="px-6 py-4 text-muted-foreground">Six groups + Core (TOK, EE, CAS)</td>
                <td className="px-6 py-4 text-muted-foreground">External exams + internal assessment</td>
              </tr>
              <tr className="hover:bg-muted/10 transition-colors">
                <td className="px-6 py-4 font-bold"><span className="text-primary mr-2">•</span>CP</td>
                <td className="px-6 py-4 font-medium">16–19</td>
                <td className="px-6 py-4 text-muted-foreground">DP courses + Career study + Core</td>
                <td className="px-6 py-4 text-muted-foreground">DP exams + Reflective project grade</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ProgrammeSection>

      <section className="w-full py-10 md:py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">Select Your Programme</h2>
              <p className="text-muted-foreground mt-1 text-sm">Find specialized tutors for each IB framework.</p>
            </div>
            <Link 
              href="/tutors" 
              className="text-sm font-bold text-primary hover:text-primary/80 flex items-center transition-colors px-4 py-2 bg-primary/5 rounded-full"
            >
              Find More Tutors <ArrowUpRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {[
              {
                title: "Primary (PYP)",
                age: "Ages 3–12",
                description: "Nurturing independent, inquiring learners from an early age.",
                href: "/programmes/pyp"
              },
              {
                title: "Middle (MYP)",
                age: "Ages 11–16",
                description: "Building practical real-world connections and strong conceptual foundations.",
                href: "/programmes/myp"
              },
              {
                title: "Diploma (DP)",
                age: "Ages 16–19",
                description: "Elite academic preparation for success at world-leading universities.",
                href: "/programmes/dp"
              },
              {
                title: "Career (CP)",
                age: "Ages 16–19",
                description: "A professional framework blending DP courses with career studies.",
                href: "/programmes/cp"
              }
            ].map((p) => (
              <Link 
                key={p.title}
                href={p.href}
                className="group p-6 rounded-[2rem] border border-border/50 bg-card/40 backdrop-blur-sm hover:bg-primary/5 hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3 gap-2">
                  <h3 className="text-lg font-bold tracking-tight text-foreground">{p.title}</h3>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20 whitespace-nowrap">
                    {p.age}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-2">
                  {p.description}
                </p>
                <div className="flex items-center gap-2 text-primary font-bold text-[13px]">
                  <span>Explore Programme</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 pb-4 mt-8">
        <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="text-left flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-primary" />
              Our Primary Aim: Expert Tutoring
            </h3>
            <p className="text-muted-foreground font-medium max-w-xl text-[15px] leading-relaxed">
              While we provide a comprehensive understanding of the IB continuum, our ultimate goal is to connect you with world-class, certified tutors. Whether it's the PYP exhibition or the DP core, our elite educators ensure your academic success.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 w-full lg:w-auto shrink-0">
            <Link href="/tutors" className="w-full sm:w-auto">
              <Button size="lg" className="w-full rounded-full px-6 text-[15px] font-bold h-12">
                Find Your Perfect Tutor
              </Button>
            </Link>
            <div className="flex gap-3 w-full sm:w-auto">
              <Link href="/contact-us" className="flex-1 sm:flex-none">
                <Button variant="outline" size="lg" className="w-full rounded-full px-6 text-[15px] font-bold h-12 border-border/60 hover:bg-muted/20">
                  Contact Us
                </Button>
              </Link>
              <Link href="https://wa.me/919876543210" target="_blank" className="flex-1 sm:flex-none">
                <Button variant="outline" size="lg" className="w-full rounded-full px-6 text-[15px] font-bold h-12 border-primary/30 text-primary hover:bg-primary/10">
                  WhatsApp
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
