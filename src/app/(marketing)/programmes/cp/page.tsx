import React from "react";
import { ProgrammeHero } from "@/components/programmes/ProgrammeHero";
import { ProgrammeSection } from "@/components/programmes/ProgrammeSection";
import { GraduationCap, Briefcase, Award, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CPPage() {
  return (
    <div className="min-h-screen bg-background pb-4">
      <ProgrammeHero
        badge="Ages 16–19"
        title="Career-related Programme (CP)"
        subtitle="Combining academic rigor with practical career skills."
        description="The CP incorporates the educational principles of the IB into a unique programme. It seamlessly blends highly respected DP academic courses with a specialized career-related study, providing pathways to higher education, apprenticeships, or direct employment."
      />

      <ProgrammeSection 
        title="Curriculum Structure" 
        description="A three-part framework designed for flexibility and focus."
        icon={Briefcase}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-card border border-border/50 p-6 rounded-2xl">
            <h4 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" /> CP Core
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Personal and professional skills</li>
              <li>• Service learning</li>
              <li>• Language development</li>
              <li>• Reflective project</li>
            </ul>
          </div>
          
          <div className="bg-card border border-border/50 p-6 rounded-2xl">
            <h4 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" /> DP Courses
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Students complete at least two DP courses, providing the rigorous theoretical underpinning and academic grounding of the IB.
            </p>
          </div>

          <div className="bg-card border border-border/50 p-6 rounded-2xl">
            <h4 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" /> Career Study
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A specialized, career-specific study (often partnered with external institutions) that equips students with practical, transferable industry skills.
            </p>
          </div>
        </div>
      </ProgrammeSection>

      <ProgrammeSection 
        title="Assessment & Certification" 
        description="Validating both academic and professional capabilities."
        icon={Award}
      >
        <div className="bg-muted/5 border border-border/50 rounded-2xl p-6 md:p-8 space-y-6">
          <p className="text-muted-foreground text-[15px] leading-relaxed">
            The CP involves rigorous assessments to ensure students meet the high standards of both the academic and career paths:
          </p>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 border-b border-border/50 pb-4">
              <div className="sm:w-1/3 font-bold text-foreground pt-1">DP Courses</div>
              <div className="sm:w-2/3 text-muted-foreground text-[15px] leading-relaxed">
                Assessed formally through external examinations, precisely as they are in the Diploma Programme.
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 border-b border-border/50 pb-4">
              <div className="sm:w-1/3 font-bold text-foreground pt-1">Reflective Project</div>
              <div className="sm:w-2/3 text-muted-foreground text-[15px] leading-relaxed">
                An in-depth body of work exploring an ethical dilemma within their career-related study, graded directly by the IB.
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="sm:w-1/3 font-bold text-foreground pt-1">Career-related Study & CP Core</div>
              <div className="sm:w-2/3 text-muted-foreground text-[15px] leading-relaxed">
                Confirmed by the school based on fulfillment of requirements such as service learning, language development portfolios, etc. Successful completion yields the CP Certificate.
              </div>
            </div>
          </div>
        </div>
      </ProgrammeSection>

      <ProgrammeSection 
        title="Why Choose Our CP Tutors?" 
        description="Expert guidance balancing rigorous academics with real-world skills."
        icon={GraduationCap}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-card border border-border/50 p-5 rounded-xl">
            <h4 className="text-[15px] font-bold text-foreground mb-2">DP Course Flexibility</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We offer highly targeted tutoring for the mandatory DP subjects paired with the CP framework, optimizing study time.
            </p>
          </div>
          <div className="bg-card border border-border/50 p-5 rounded-xl">
            <h4 className="text-[15px] font-bold text-foreground mb-2">Reflective Project Support</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Professional coaching from certified educators to perfectly structure and execute the CP Reflective Project for maximum IB marks.
            </p>
          </div>
        </div>
      </ProgrammeSection>

      <div className="max-w-5xl mx-auto px-4 mt-16 mb-8">
        <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="text-left flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-primary" />
              Navigate the CP with Professional Guidance
            </h3>
            <p className="text-muted-foreground font-medium max-w-xl text-[15px] leading-relaxed">
              Our expert tutors support CP students in balancing rigorous DP subjects with career-related studies, ensuring academic excellence.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 w-full lg:w-auto shrink-0">
              <Link href="/tutors" className="w-full sm:w-auto">
                <Button size="lg" className="w-full rounded-full px-6 text-[15px] font-bold h-12">
                  Find a CP Tutor
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
