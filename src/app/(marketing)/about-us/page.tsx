"use client";

import { motion } from "framer-motion";
import {
  Users,
  Target,
  Lightbulb,
  Award,
  CheckCircle2,
  GraduationCap,
  BookOpen,
  Compass,
  Zap,
  ShieldCheck,
  Globe2
} from "lucide-react";
import Image from "next/image";


const PHILOSOPHY = [
  {
    title: "Mentorship, Not Just Tutoring",
    description: "We believe that true academic mastery comes from consistent guidance and mentorship rather than isolated lessons. Our approach focuses on building long-term confidence and critical thinking skills.",
    icon: Users
  },
  {
    title: "The Math & Physics Focus",
    description: "Specializing deeply in IB DP Mathematics (AA & AI) and Physics. We understand the specific rigors of HL and SL curriculums, ensuring students are prepared for the most challenging components of their diplomas.",
    icon: Target
  },
  {
    title: "AI-Driven Precision",
    description: "While we value the human touch, we use AI diagnostics to pinpoint exact learning gaps. This allows us to make every minute of a mentorship session count towards a higher grade.",
    icon: Lightbulb
  }
];

const CORE_VALUES = [
  {
    icon: ShieldCheck,
    title: "Academic Integrity",
    details: "We uphold the highest standards of academic honesty, teaching students to think independently while mastering the syllabus."
  },
  {
    icon: Zap,
    title: "Accelerated Outcomes",
    details: "Our methods are designed to condense months of learning into weeks of targeted, high-impact mentorship sessions."
  },
  {
    icon: Globe2,
    title: "Global Standards",
    details: "Aligning with international benchmarks to ensure students are competitive for top-tier global universities."
  }
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pb-12">
      {/* Header Spacer */}
      <div className="h-24 md:h-32" />

      {/* Hero Section - Elite Minimalism */}
      <section className="container max-w-7xl mx-auto px-4 md:px-6 mb-24 md:mb-32">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl lg:text-9xl font-black text-foreground mb-8 tracking-tighter leading-[0.85]"
          >
            Empowering the <br />
            <span className="text-gradient">Innovators</span> of <br />
            Tomorrow.
          </motion.h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium underline-offset-4 decoration-primary/30 leading-relaxed max-w-3xl mx-auto mt-12">
            IB Gram is a premier mentorship ecosystem dedicated to re-imagining how students master the world's most rigorous international curriculums.
          </p>
        </div>
      </section>

      {/* Philosophy Grid */}
      <section className="container max-w-6xl mx-auto px-4 md:px-6 mb-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {PHILOSOPHY.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col"
            >
              <div className="text-primary mb-6">
                <item.icon className="size-8" />
              </div>
              <h3 className="text-xl font-black mb-4 tracking-tight uppercase tracking-widest text-xs opacity-80">{item.title}</h3>
              <h4 className="text-2xl font-black mb-4 tracking-tighter">{item.title}</h4>
              <p className="text-muted-foreground font-medium leading-relaxed text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Founder Profile - Direct from User Content */}
      <section className="container max-w-7xl mx-auto px-4 md:px-6 mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">

          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-[3rem] overflow-hidden border border-border/50 shadow-2xl">
              <Image
                src="/images/founder/ajay.jpg"
                alt="Founder Ajay Vatsyayan"
                fill
                className="object-cover"
              />
            </div>
            {/* Subtle text overlay */}
            <div className="absolute -bottom-10 -right-10 bg-card border border-border p-8 rounded-3xl hidden md:block">
              <div className="text-4xl font-black text-primary">10+</div>
              <div className="text-xs font-black uppercase tracking-widest text-muted-foreground">Years Experience</div>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <div className="flex items-center gap-3 text-primary text-xs font-black uppercase tracking-widest mb-6">
              <Compass className="size-4" /> Founder's Vision
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tighter leading-tight">
              Ajay Vatsyayan
            </h2>

            <div className="space-y-8 text-muted-foreground text-lg md:text-xl font-medium leading-relaxed">
              <p>
                <span className="text-foreground font-black">Ajay Vatsyayan</span> is the visionary founder of IB Gram, a globally recognized tutoring platform specializing in the International Baccalaureate (IB) Diploma Programme (DP) Mathematics and Physics.
              </p>
              <p>
                With over a decade of experience, he has built a reputation for excellence in guiding students through both <span className="text-primary font-bold">Analysis & Approaches (AA)</span> and <span className="text-primary font-bold">Applications & Interpretation (AI)</span> at Higher Level (HL) and Standard Level (SL).
              </p>
              <p>
                His approach is rooted in academic rigour and pedagogical clarity, ensuring that every student doesn't just pass, but masters the core logic of their subjects. Today, IB Gram stands as a testament to his commitment to high-stakes educational excellence.
              </p>

              <div className="pt-8 border-t border-border/40 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm font-bold">
                <div className="flex items-center gap-3"><CheckCircle2 className="size-5 text-primary" /> Math DP HL Specialist</div>
                <div className="flex items-center gap-3"><CheckCircle2 className="size-5 text-primary" /> Physics HL Expert</div>
                <div className="flex items-center gap-3"><CheckCircle2 className="size-5 text-primary" /> 10+ Years Legacy</div>
                <div className="flex items-center gap-3"><CheckCircle2 className="size-5 text-primary" /> Global IB Alumni</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Extended Content - Pedagogy & Vision */}
      <section className="container max-w-7xl mx-auto px-4 md:px-6 mb-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h3 className="text-3xl md:text-5xl font-black mb-8 tracking-tight">The IB Gram Pedagogy</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-foreground">Syllabus Synthesis</h4>
                <p className="text-muted-foreground leading-relaxed">We map out the entire IB/IGCSE journey, ensuring no topic is left to chance. Our synthesis approach connects IA, EE, and Theory of Knowledge components with core subject mastery.</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-foreground">Mastering Abstraction</h4>
                <p className="text-muted-foreground leading-relaxed">Mathematics and Physics are languages of logic. We teach students to decode these languages, turning complex abstract problems into intuitive 7-point solutions.</p>
              </div>
            </div>
          </div>
          <div className="bg-card p-10 rounded-[3rem] border border-border">
            <h3 className="text-2xl font-black mb-6">Our Core Focus</h3>
            <ul className="space-y-6">
              {CORE_VALUES.map((val) => (
                <li key={val.title} className="space-y-2">
                  <div className="flex items-center gap-3 font-black text-foreground uppercase tracking-widest text-[10px]">
                    <val.icon className="size-4 text-primary" /> {val.title}
                  </div>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{val.details}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Academic Excellence Quote - PW Inspiration (Focus on outcomes) */}
      <section className="container max-w-4xl mx-auto px-4 md:px-6 text-center border-t border-border/40 pt-4">
        <p className="text-2xl md:text-4xl font-black text-foreground italic leading-tight mb-4">
          “Education is the strongest weapon we have. At IB Gram, we ensure it is honed to perfection for the world's most challenging curriculums.”
        </p>
        <div className="text-primary font-black tracking-widest uppercase text-sm">— Ajay Vatsyayan, Founder</div>
      </section>

      {/* NO PROMOTION SECTION - AS REQUESTED */}
    </div>
  );
}
