import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, ExternalLink, GraduationCap, Info, Layers, Search, ShieldCheck, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cambridgeSubjects, edexcelSubjects } from "./data";
import { IGCSETutors } from "./tutor";

export const metadata: Metadata = {
  title: "IGCSE Programmes & Subjects | IB Gram",
  description: "Explore comprehensive IGCSE pathways for Cambridge and Pearson Edexcel. Get expert tutoring and official curriculum resources.",
};

const INITIAL_VISIBLE_SUBJECTS = 6;

export default function IGCSEPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section - Focused & High Conversion */}
      <section className="relative pt-24 pb-20 overflow-hidden noise-overlay">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 -left-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[80px]" />
        </div>

        <div className="container px-4 relative z-10 mx-auto max-w-5xl">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <GraduationCap className="size-4" />
              <span>Elite IGCSE Tutoring & Curriculum Support</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
              Master Your <span className="text-gradient">IGCSE</span> Curriculum
            </h1>
            
            <p className="text-lg text-muted-foreground md:text-xl leading-relaxed max-w-2xl mx-auto">
              Our comprehensive IGCSE section provides a stable index of programs, subjects, and official resources to help you excel in Cambridge and Pearson Edexcel examinations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/tutors">
                <Button size="lg" variant="outline" className="h-12 px-8 text-base rounded-full glassmorphism border-primary/30 text-primary hover:bg-primary/10 transition-all group">
                  Find an IGCSE Tutor <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="#subjects">
                <Button size="lg" variant="outline" className="h-12 px-8 text-base rounded-full glassmorphism">
                  Browse Subjects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Program Positioning - Executive Summary Style */}
      <section className="py-16 border-y border-border/50 bg-muted/5">
        <div className="container px-4 mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-secondary font-bold text-sm uppercase tracking-wider">
                <Target className="size-4" />
                <span>Program Overview</span>
              </div>
              <h2 className="text-3xl font-bold">Comprehensive Curriculum Index</h2>
              <p className="text-muted-foreground leading-relaxed">
                A comprehensive IGCSE section should behave like a curriculum catalog: a stable “source-of-truth” index of programs, subjects, and specifications. We model our support around the two primary board programs:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <div className="mt-1 size-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary text-xs tracking-tighter">C</div>
                  <div>
                    <span className="font-semibold text-foreground block text-sm">Cambridge IGCSE</span>
                    <span className="text-xs text-muted-foreground">Offered by Cambridge University Press & Assessment for ages 14–16.</span>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="mt-1 size-5 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 text-secondary text-xs tracking-tighter">P</div>
                  <div>
                    <span className="font-semibold text-foreground block text-sm">Pearson Edexcel International GCSE (9–1)</span>
                    <span className="text-xs text-muted-foreground">Available in 37 subjects with choice of linear or modular assessment.</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="glassmorphism p-8 rounded-2xl border-white/5 space-y-6">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center">
                  <ShieldCheck className="size-6" />
                </div>
                <h3 className="text-xl font-bold">Why Us for IGCSE?</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                The most maintainable approach is a student-friendly layer that points to official board documents (syllabus/specification PDFs) rather than duplicating copyrighted content. Our subject pages are designed to be thin, informative, and actionable.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-background/50 border border-border/50">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-[10px] uppercase text-muted-foreground font-bold">Official Alignment</div>
                </div>
                <div className="p-4 rounded-xl bg-background/50 border border-border/50">
                  <div className="text-2xl font-bold text-secondary">Elite</div>
                  <div className="text-[10px] uppercase text-muted-foreground font-bold">Tutor Network</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subject Index Section */}
      <section className="py-20 bg-background" id="subjects">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Subject Directories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose your exam board to explore the full subject inventory, specification codes, and resource access patterns.
            </p>
          </div>

          <Tabs defaultValue="cambridge" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-muted/50 p-1 border border-border/50 h-12 rounded-full">
                <TabsTrigger 
                  value="cambridge" 
                  className="rounded-full px-8 data-[state=active]:bg-background data-[state=active]:shadow-sm hover:bg-transparent hover:text-muted-foreground transition-none"
                >
                  Cambridge IGCSE
                </TabsTrigger>
                <TabsTrigger 
                  value="edexcel" 
                  className="rounded-full px-8 data-[state=active]:bg-background data-[state=active]:shadow-sm hover:bg-transparent hover:text-muted-foreground transition-none"
                >
                  Pearson Edexcel
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="cambridge" className="outline-none">
              <SubjectDirectory subjects={cambridgeSubjects} boardColor="primary" buttonText="Show all Cambridge courses" footerText="View full Cambridge subject directory" footerTone="primary" />
            </TabsContent>

            <TabsContent value="edexcel" className="outline-none">
              <SubjectDirectory subjects={edexcelSubjects} boardColor="secondary" buttonText="Show all Edexcel courses" footerText="View full Edexcel qualification hub" footerTone="secondary" />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <IGCSETutors />

      {/* Assessment & Grading Info */}
      <section className="py-20 bg-muted/10">
        <div className="container px-4 mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Understanding Assessment & Grading</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-6 bg-primary rounded-full"></div>
                <h3 className="text-xl font-bold">Cambridge IGCSE Model</h3>
              </div>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Cambridge Explains the relationship between A*–G and 9–1 variants, administrative zone implications, and warns that switching between grading-scale syllabuses after entry deadlines is not allowed.
                </p>
                <ul className="grid grid-cols-2 gap-3">
                  <li className="flex items-center gap-2 bg-background/50 p-3 rounded-lg border border-border/50">
                    <div className="size-2 rounded-full bg-primary" />
                    <span>A*–G & 9–1 Scales</span>
                  </li>
                  <li className="flex items-center gap-2 bg-background/50 p-3 rounded-lg border border-border/50">
                    <div className="size-2 rounded-full bg-primary" />
                    <span>Zone Restrictions</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-6 bg-secondary rounded-full"></div>
                <h3 className="text-xl font-bold">Pearson Edexcel Model</h3>
              </div>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Pearson describes International GCSEs as awarded on the 9–1 scale and provides a choice between linear or modular assessment for many subjects to suit different learner needs.
                </p>
                <ul className="grid grid-cols-2 gap-3">
                  <li className="flex items-center gap-2 bg-background/50 p-3 rounded-lg border border-border/50">
                    <div className="size-2 rounded-full bg-secondary" />
                    <span>9–1 Grading Scale</span>
                  </li>
                  <li className="flex items-center gap-2 bg-background/50 p-3 rounded-lg border border-border/50">
                    <div className="size-2 rounded-full bg-secondary" />
                    <span>Linear/Modular Paths</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Tutor Oriented */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 -z-10" />
        <div className="container px-4 mx-auto max-w-4xl text-center">
          <div className="space-y-8 glassmorphism p-12 rounded-[2.5rem] border-primary/20">
            <h2 className="text-4xl font-bold">Ready to Excel in your IGCSEs?</h2>
            <p className="text-lg text-muted-foreground">
              Don't navigate the complex world of IGCSE programs alone. Connect with our elite subject experts who specialize in Cambridge and Edexcel curriculums.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="h-14 px-10 text-lg rounded-full border-primary/30 hover:bg-primary/10 glassmorphism text-primary transition-all group">
                Book a Free Trial Session <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-10 text-lg rounded-full border-primary/30 hover:bg-primary/5 glassmorphism">
                Speak with an Academic Advisor
              </Button>
            </div>
            <div className="pt-6 flex justify-center gap-8 text-sm text-muted-foreground font-medium">
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

function SubjectDirectory({
  subjects,
  boardColor,
  buttonText,
  footerText,
  footerTone,
}: {
  subjects: any[];
  boardColor: "primary" | "secondary";
  buttonText: string;
  footerText: string;
  footerTone: "primary" | "secondary";
}) {
  const visibleSubjects = subjects.slice(0, INITIAL_VISIBLE_SUBJECTS);
  const remainingSubjects = subjects.slice(INITIAL_VISIBLE_SUBJECTS);
  const footerToneClass = footerTone === "primary" ? "hover:text-primary" : "hover:text-secondary";

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleSubjects.map((subject) => (
          <SubjectCard key={subject.subject_code} subject={subject} boardColor={boardColor} />
        ))}
      </div>
      {remainingSubjects.length > 0 ? (
        <details className="group mt-6 flex flex-col">
          <summary className="flex justify-end cursor-pointer list-none outline-none order-last group-open:mt-6">
            <div className={`inline-flex items-center text-sm font-medium transition-colors text-muted-foreground h-9 py-2 ${footerToneClass}`}>
              {footerText} <ExternalLink className="ml-2 size-4" />
            </div>
          </summary>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 order-first">
            {remainingSubjects.map((subject) => (
              <SubjectCard key={subject.subject_code} subject={subject} boardColor={boardColor} />
            ))}
          </div>
        </details>
      ) : (
        <div className="mt-6 flex justify-end">
          <Button variant="ghost" className={`text-muted-foreground ${footerToneClass} hover:bg-transparent px-0`}>
            {footerText} <ExternalLink className="ml-2 size-4" />
          </Button>
        </div>
      )}
    </>
  );
}

function SubjectCard({ subject, boardColor }: { subject: any; boardColor: "primary" | "secondary" }) {
  const colors = {
    primary: {
      border: "hover:border-primary/50",
      text: "text-primary",
      bg: "bg-primary/10",
      btnBg: "bg-primary/5 hover:bg-primary/10",
      btnText: "text-primary",
    },
    secondary: {
      border: "hover:border-secondary/50",
      text: "text-secondary",
      bg: "bg-secondary/10",
      btnBg: "bg-secondary/5 hover:bg-secondary/10",
      btnText: "text-secondary",
    }
  };

  const c = colors[boardColor];
  
  return (
    <Card className={`group h-full bg-card/40 backdrop-blur-sm border-border/50 ${c.border} transition-all duration-300 flex flex-col`}>
      <CardContent className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-4">
          <div className={`text-xs font-mono font-bold px-2 py-1 rounded ${c.bg} ${c.text}`}>
            CODE: {subject.subject_code}
          </div>
          <div className="text-[10px] uppercase text-muted-foreground font-bold tracking-widest">
            {subject.assessment_type}
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-2 group-hover:text-foreground transition-colors">
          {subject.subject_title}
        </h3>
        
        <p className="text-sm text-muted-foreground line-clamp-3 mb-6 flex-1">
          {subject.brief_description}
        </p>
        
        <div className="space-y-3 pt-4 border-t border-border/30">
          <div className="flex items-center gap-2 text-[11px] font-medium text-muted-foreground">
            <Layers className="size-3" />
            <span>Tiering: {subject.tiering}</span>
          </div>
          <Link 
            href="/tutors" 
            className={`w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg ${c.btnBg} ${c.btnText} text-sm font-semibold transition-all group/btn`}
          >
            Find {subject.subject_title} Tutor
            <ArrowRight className="size-4 group-hover/btn:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}