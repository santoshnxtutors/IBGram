import React from "react";
import { ProgrammeHero } from "@/components/programmes/ProgrammeHero";
import { ProgrammeCard } from "@/components/programmes/ProgrammeCard";
import { ProgrammeSection } from "@/components/programmes/ProgrammeSection";
import { BookOpen, GraduationCap, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProgrammesHubPage() {
  return (
    <div className="min-h-screen bg-background pb-4">
      <ProgrammeHero
        title="IB Programmes Continuum"
        subtitle="A holistic, inquiry-based approach to education from ages 3 to 19."
        description="The International Baccalaureate (IB) continuum is designed to develop well-rounded, inquiring, and knowledgeable young people who help to create a better and more peaceful world."
      />

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
              <h2 className="text-3xl font-bold tracking-tight text-foreground">Programme Options</h2>
              <p className="text-muted-foreground mt-2 font-medium">Explore the four official programmes in the IB Continuum.</p>
            </div>
            <Link 
              href="/tutors" 
              className="text-sm font-bold text-primary hover:text-primary/80 flex items-center transition-colors"
            >
              Find Your Tutors <ArrowUpRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProgrammeCard
              title="Primary Years (PYP)"
              age="Ages 3–12"
              description="An inquiry-based, transdisciplinary framework organized through six transdisciplinary themes."
              href="/programmes/pyp"
              features={[
                "Student-centered learning",
                "Integrates subject areas",
                "Culminates in the PYP exhibition"
              ]}
            />
            <ProgrammeCard
              title="Middle Years (MYP)"
              age="Ages 11–16"
              description="A challenging framework that encourages students to make practical connections between their studies and the real world."
              href="/programmes/myp"
              features={[
                "Eight subject groups",
                "Personal project in final year",
                "Criterion-related assessment"
              ]}
            />
            <ProgrammeCard
              title="Diploma Programme (DP)"
              age="Ages 16–19"
              description="An academically challenging and balanced programme with final examinations that prepares students for success at university."
              href="/programmes/dp"
              features={[
                "Six subject groups",
                "DP Core: TOK, EE, CAS",
                "Internationally recognized diploma"
              ]}
            />
            <ProgrammeCard
              title="Career-related (CP)"
              age="Ages 16–19"
              description="A framework incorporating IB values into a unique programme addressing the needs of students engaged in career-related education."
              href="/programmes/cp"
              features={[
                "At least two DP courses",
                "Career-related study",
                "Reflective project"
              ]}
            />
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
