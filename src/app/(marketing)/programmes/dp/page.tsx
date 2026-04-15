import React from "react";
import { ProgrammeHero } from "@/components/programmes/ProgrammeHero";
import { ProgrammeSection } from "@/components/programmes/ProgrammeSection";
import { GraduationCap, BookOpen, Globe, Library, Award, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DPPage() {
  return (
    <div className="min-h-screen bg-background pb-4">
      <section className="relative w-full pt-12 pb-12 flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center space-y-4 md:space-y-6">
          <span className="inline-flex items-center px-4 py-1.5 text-xs font-bold text-primary bg-primary/10 rounded-full">
            Ages 16–19
          </span>
          <h1 className="text-4xl md:text-[3.5rem] leading-[1.1] font-extrabold tracking-tight text-foreground">
            Diploma Programme (DP)
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-muted-foreground max-w-2xl">
            Elite DP Tutoring for IB Excellence
          </h2>
          <p className="text-lg text-muted-foreground/80 max-w-3xl leading-relaxed">
            The DP is a globally recognized curriculum. Our specialized tutors help you master all six subject groups and the DP Core to secure your dream score.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link href="/tutors">
              <Button variant="outline" className="rounded-full px-8 h-12 text-[15px] font-bold border-primary/20 text-primary hover:bg-primary/5 flex items-center gap-2">
                Find Your DP Tutor <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="https://wa.me/919876543210" target="_blank">
              <Button variant="outline" className="rounded-full px-6 h-12 text-[15px] font-bold border-primary/20 text-primary hover:bg-primary/5">
                Contact via WhatsApp 💬
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <ProgrammeSection 
        title="Curriculum Structure" 
        description="A balanced menu of six subjects complemented by the DP Core."
        icon={Library}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-muted/5 border border-border/50 p-6 rounded-2xl">
            <h4 className="text-lg font-bold text-foreground mb-4">The DP Core</h4>
            <ul className="space-y-4">
              <li>
                <div className="flex items-center font-bold text-foreground text-[15px] mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" /> Theory of Knowledge (TOK)
                </div>
                <p className="text-sm text-muted-foreground ml-3.5">Reflection on the nature of knowledge.</p>
              </li>
              <li>
                <div className="flex items-center font-bold text-foreground text-[15px] mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" /> Extended Essay (EE)
                </div>
                <p className="text-sm text-muted-foreground ml-3.5">An independent, self-directed 4,000-word research paper.</p>
              </li>
              <li>
                <div className="flex items-center font-bold text-foreground text-[15px] mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" /> Creativity, Activity, Service (CAS)
                </div>
                <p className="text-sm text-muted-foreground ml-3.5">Real-world experiential learning.</p>
              </li>
            </ul>
          </div>

          <div className="bg-muted/5 border border-border/50 p-6 rounded-2xl">
            <h4 className="text-lg font-bold text-foreground mb-4">Subject Groups</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Students choose courses from the following subject groups, ensuring breadth of knowledge:
            </p>
            <ul className="space-y-2 text-sm font-medium text-foreground">
              <li>• Studies in language and literature</li>
              <li>• Language acquisition</li>
              <li>• Individuals and societies</li>
              <li>• Sciences</li>
              <li>• Mathematics</li>
              <li>• The arts (or an additional choice from another group)</li>
            </ul>
          </div>
        </div>
      </ProgrammeSection>

      <ProgrammeSection 
        title="Assessment & Recognition" 
        description="Rigorous external and internal grading standards."
        icon={Award}
      >
        <div className="space-y-4">
          <div className="bg-card border border-border/50 p-6 rounded-2xl flex flex-col sm:flex-row gap-6 items-start">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Globe className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-foreground mb-2">Grading System</h4>
              <p className="text-muted-foreground text-[15px] leading-relaxed">
                Students receive grades ranging from 1 to 7 for each of the six subjects. The DP core (TOK and EE) can award up to 3 additional points, making the maximum achievable score 45 points. The IB Diploma requires a minimum of 24 points (subject to certain conditions).
              </p>
            </div>
          </div>
          <div className="bg-card border border-border/50 p-6 rounded-2xl flex flex-col sm:flex-row gap-6 items-start">
            <div className="p-3 bg-primary/10 rounded-xl">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-foreground mb-2">University Recognition</h4>
              <p className="text-muted-foreground text-[15px] leading-relaxed">
                The IB Diploma is respected by leading universities worldwide, known for producing self-managing, research-ready students who excel in higher education.
              </p>
            </div>
          </div>
        </div>
      </ProgrammeSection>

      <ProgrammeSection 
        title="Why Choose Our DP Tutors?" 
        description="Elite coaching designed to secure admission into the world's top universities."
        icon={GraduationCap}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-card border border-border/50 p-5 rounded-xl">
            <h4 className="text-[15px] font-bold text-foreground mb-2">Subject Masterclasses</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Highly specialized tutors for every single IB subject (HL/SL) focused on maximizing your final 1–7 grade.
            </p>
          </div>
          <div className="bg-card border border-border/50 p-5 rounded-xl">
            <h4 className="text-[15px] font-bold text-foreground mb-2">DP Core Specialists (TOK & EE)</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Struggling with the 4,000-word Extended Essay or TOK Exhibition? We have dedicated experts just for the Core yielding those crucial 3 bonus points.
            </p>
          </div>
        </div>
      </ProgrammeSection>

      <div className="max-w-5xl mx-auto px-4 mt-16 mb-8">
        <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="text-left flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-primary" />
              Achieve Your Dream IB Score (40+)
            </h3>
            <p className="text-muted-foreground font-medium max-w-xl text-[15px] leading-relaxed">
              Maximize your IB Diploma score. Our elite DP tutors specialize in individual subjects and the DP Core to help you secure admission into Ivy League and Oxbridge.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 w-full lg:w-auto shrink-0">
             <Link href="/tutors" className="w-full sm:w-auto">
                <Button size="lg" className="w-full rounded-full px-6 text-[15px] font-bold h-12">
                  Find a DP Tutor
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
