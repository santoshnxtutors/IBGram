import React from "react";
import { ProgrammeHero } from "@/components/programmes/ProgrammeHero";
import { ProgrammeSection } from "@/components/programmes/ProgrammeSection";
import { GraduationCap, BookOpen, ScrollText, Target, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PYPPage() {
  return (
    <div className="min-h-screen bg-background pb-4">
      <ProgrammeHero
        badge="Ages 3–12"
        title="Primary Years Programme (PYP)"
        subtitle="Nurturing independent, inquiring learners from an early age."
        description="The PYP is an inquiry-based, transdisciplinary framework that builds conceptual understanding. It is organized through a programme of inquiry and six transdisciplinary themes, integrating various subject areas across all learning."
      />

      <ProgrammeSection 
        title="Curriculum Structure" 
        description="Six subject areas are integrated holistically through overarching themes."
        icon={BookOpen}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {["Language", "Mathematics", "Science", "Social studies", "Arts", "Personal, social and physical education"].map((subject) => (
            <div key={subject} className="bg-muted/10 border border-border/50 p-4 rounded-xl flex items-center">
              <div className="w-2 h-2 rounded-full bg-primary mr-3" />
              <span className="font-semibold text-foreground text-[15px]">{subject}</span>
            </div>
          ))}
        </div>
      </ProgrammeSection>

      <ProgrammeSection 
        title="Transdisciplinary Themes" 
        description="Learning transcends traditional subjects to explore human commonalities."
        icon={Target}
      >
        <div className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            The PYP curriculum framework centers on six globally significant transdisciplinary themes. Students explore these themes through a local and global lens, driving active inquiry:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[15px] font-medium text-foreground">
            <li className="flex items-center"><ArrowRight className="w-4 h-4 text-primary mr-2" /> Who we are</li>
            <li className="flex items-center"><ArrowRight className="w-4 h-4 text-primary mr-2" /> Where we are in place and time</li>
            <li className="flex items-center"><ArrowRight className="w-4 h-4 text-primary mr-2" /> How we express ourselves</li>
            <li className="flex items-center"><ArrowRight className="w-4 h-4 text-primary mr-2" /> How the world works</li>
            <li className="flex items-center"><ArrowRight className="w-4 h-4 text-primary mr-2" /> How we organize ourselves</li>
            <li className="flex items-center"><ArrowRight className="w-4 h-4 text-primary mr-2" /> Sharing the planet</li>
          </ul>
        </div>
      </ProgrammeSection>

      <ProgrammeSection 
        title="Assessment & Exhibition" 
        description="Measuring growth through meaningful reflection and action."
        icon={ScrollText}
      >
        <div className="space-y-6">
          <div className="bg-muted/5 border border-border/50 p-6 rounded-2xl">
            <h4 className="text-xl font-bold text-foreground mb-3">Ongoing Assessment</h4>
            <p className="text-muted-foreground/90 leading-relaxed text-sm">
              Assessment in the PYP is ongoing, integrated, and embedded in the inquiry process. Teachers use a variety of strategies to evaluate student understanding and guide future planning.
            </p>
          </div>
          <div className="bg-muted/5 border border-border/50 p-6 rounded-2xl">
            <h4 className="text-xl font-bold text-foreground mb-3">The PYP Exhibition</h4>
            <p className="text-muted-foreground/90 leading-relaxed text-sm">
              In their final year, students participate in the PYP exhibition. This culminating project requires them to collaboratively conduct an in-depth inquiry into real-life issues, demonstrating the skills and profile attributes they have developed.
            </p>
          </div>
        </div>
      </ProgrammeSection>

      <ProgrammeSection 
        title="Why Choose Our PYP Tutors?" 
        description="Personalized support to foster your child's inquiry and curiosity."
        icon={GraduationCap}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-card border border-border/50 p-5 rounded-xl">
            <h4 className="text-[15px] font-bold text-foreground mb-2">Subject Integration</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our tutors help young learners connect mathematics, language, and science across the PYP themes seamlessly.
            </p>
          </div>
          <div className="bg-card border border-border/50 p-5 rounded-xl">
            <h4 className="text-[15px] font-bold text-foreground mb-2">Exhibition Support</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We provide step-by-step guidance for the final PYP exhibition, building confidence in research and presentation.
            </p>
          </div>
        </div>
      </ProgrammeSection>

      <div className="max-w-5xl mx-auto px-4 mt-16 mb-8">
        <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="text-left flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-primary" />
              Master the PYP with Expert Tutors
            </h3>
            <p className="text-muted-foreground font-medium max-w-xl text-[15px] leading-relaxed">
              Give your child the best foundation. Our certified IB tutors specialize in the PYP curriculum, ensuring your child thrives in their educational journey.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 w-full lg:w-auto shrink-0">
            <Link href="/tutors" className="w-full sm:w-auto">
              <Button size="lg" className="w-full rounded-full px-6 text-[15px] font-bold h-12">
                Find a PYP Tutor
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
