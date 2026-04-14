import React from "react";
import { ProgrammeHero } from "@/components/programmes/ProgrammeHero";
import { ProgrammeSection } from "@/components/programmes/ProgrammeSection";
import { GraduationCap, BookOpen, ScrollText, Award, Layers } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function MYPPage() {
  return (
    <div className="min-h-screen bg-background pb-4">
      <ProgrammeHero
        badge="Ages 11–16"
        title="Middle Years Programme (MYP)"
        subtitle="Connecting classroom learning to the real world."
        description="The MYP is an academically challenging framework with eight subject groups and interdisciplinary learning, encouraging students to make practical connections between their studies and the ever-changing global environment."
      />

      <ProgrammeSection 
        title="Curriculum Structure" 
        description="Eight distinct subject groups supported by interdisciplinary learning."
        icon={Layers}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {[
            "Language and literature", 
            "Language acquisition", 
            "Individuals and societies", 
            "Sciences", 
            "Mathematics", 
            "Arts", 
            "Physical and health education", 
            "Design"
          ].map((subject) => (
            <div key={subject} className="bg-muted/10 border border-border/50 p-4 rounded-xl flex items-center">
              <div className="w-2 h-2 rounded-full bg-primary mr-3" />
              <span className="font-semibold text-foreground text-[15px]">{subject}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 bg-card border border-border/50 p-5 rounded-xl">
          <p className="text-sm font-medium text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Interdisciplinary Learning:</strong> MYP students explore relationships between these subjects to develop an integrated understanding, forming a robust foundation for future academic paths.
          </p>
        </div>
      </ProgrammeSection>

      <ProgrammeSection 
        title="The Personal Project" 
        description="A culminating self-directed inquiry."
        icon={BookOpen}
      >
        <div className="bg-muted/5 border border-border/50 rounded-2xl p-6 md:p-8">
          <p className="text-muted-foreground leading-relaxed mb-4">
            In the final year of the programme, each MYP student completes an independent "Personal Project". This project allows students to:
          </p>
          <ul className="space-y-3 text-[15px] font-medium text-foreground">
            <li className="flex items-start"><span className="text-primary mr-2 mt-0.5">•</span> Demonstrate the skills they have learned</li>
            <li className="flex items-start"><span className="text-primary mr-2 mt-0.5">•</span> Engage in practical explorations through a cycle of inquiry, action, and reflection</li>
            <li className="flex items-start"><span className="text-primary mr-2 mt-0.5">•</span> Express individual passions and interests</li>
          </ul>
        </div>
      </ProgrammeSection>

      <ProgrammeSection 
        title="Assessment & Certification" 
        description="Criterion-related evaluation and eAssessment options."
        icon={ScrollText}
      >
        <div className="space-y-4">
          <div className="bg-card border border-border/50 p-6 rounded-2xl">
            <h4 className="text-lg font-bold text-foreground mb-2 flex flex-row items-center gap-2"><Award className="w-5 h-5 text-primary" /> Criterion-Related Assessment</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Assessment is teacher-designed according to rigorous IB criteria rather than against the performance of other students. This gives a clear, objective measure of independent achievement.
            </p>
          </div>
          <div className="bg-card border border-border/50 p-6 rounded-2xl">
            <h4 className="text-lg font-bold text-foreground mb-2 flex flex-row items-center gap-2"><ScrollText className="w-5 h-5 text-primary" /> MYP eAssessment</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Optional in the final year, eAssessment comprises on-screen examinations and ePortfolios. Meeting specific requirements leads to MYP Course Results and the official IB MYP Certificate.
            </p>
          </div>
        </div>
      </ProgrammeSection>

      <ProgrammeSection 
        title="Why Choose Our MYP Tutors?" 
        description="Targeted academic support to bridge the gap between primary and diploma levels."
        icon={GraduationCap}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-card border border-border/50 p-5 rounded-xl">
            <h4 className="text-[15px] font-bold text-foreground mb-2">eAssessment Ready</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We train students specifically for the rigorous on-screen MYP eAssessments, ensuring maximum confidence and high grades.
            </p>
          </div>
          <div className="bg-card border border-border/50 p-5 rounded-xl">
            <h4 className="text-[15px] font-bold text-foreground mb-2">Personal Project Mentorship</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our specialists mentor students through their independent Personal Project to guarantee a stellar final portfolio.
            </p>
          </div>
        </div>
      </ProgrammeSection>

      <div className="max-w-5xl mx-auto px-4 mt-16 mb-8">
        <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="text-left flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-primary" />
              Excel in the MYP with Expert Tutors
            </h3>
            <p className="text-muted-foreground font-medium max-w-xl text-[15px] leading-relaxed">
              Our specialized MYP tutors guide students through the eight subject groups, ensuring strong conceptual understanding and top marks.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 w-full lg:w-auto shrink-0">
             <Link href="/tutors" className="w-full sm:w-auto">
                <Button size="lg" className="w-full rounded-full px-6 text-[15px] font-bold h-12">
                  Find an MYP Tutor
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
