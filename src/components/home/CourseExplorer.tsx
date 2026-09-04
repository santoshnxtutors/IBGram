import Link from "next/link";
import { Baby, Blocks, GraduationCap, Briefcase, ArrowRight } from "lucide-react";

const PROGRAMS = [
  {
    id: "pyp",
    title: "IB PYP Tutoring",
    subtitle: "Primary Years Programme",
    age: "Ages 3-12",
    icon: Baby,
    description:
      "One-to-one IB PYP tutoring for the Primary Years Programme, where learning runs through transdisciplinary units of inquiry rather than separate subjects. Tutors strengthen early reading, phonics, writing and numeracy, help students research and present their unit work, and guide the PYP Exhibition in Grade 5 from question to final presentation — all while building the IB learner profile attributes and the independent work habits the MYP will expect.",
    highlights: ["Units of inquiry", "PYP Exhibition", "Reading & numeracy", "Learner profile"],
  },
  {
    id: "myp",
    title: "IB MYP Tutoring",
    subtitle: "Middle Years Programme",
    age: "Ages 11-16",
    icon: Blocks,
    description:
      "IB MYP tutoring across all eight subject groups — Maths, Sciences, Individuals and Societies, Language and Literature, Language Acquisition, Arts, Design and Physical and Health Education. Sessions decode the criterion A-D rubrics so students know exactly what moves a 4 to a 7, build the investigation and reflection skills the MYP Personal Project demands, prepare for MYP eAssessments and on-screen exams, and make the DP or IGCSE subject choice at the end of MYP 5 a considered one.",
    highlights: ["Criteria A-D", "Personal Project", "eAssessment prep", "DP/IGCSE choices"],
  },
  {
    id: "dp",
    title: "IB DP Tutoring",
    subtitle: "Diploma Programme",
    age: "Ages 16-19",
    icon: GraduationCap,
    description:
      "IB Diploma Programme tutoring at Higher and Standard Level across Maths AA and AI, Physics, Chemistry, Biology, Economics, Business Management, Psychology, History and English A. Tutors teach the syllabus content, then drill the paper technique and command terms each exam actually rewards, and mentor every piece of coursework — subject Internal Assessments, the 4,000-word Extended Essay, TOK exhibition and essay, and CAS planning — with structured past-paper practice through to the May and November sessions.",
    highlights: ["HL & SL subjects", "Internal Assessments", "Extended Essay & TOK", "Past papers"],
  },
  {
    id: "cp",
    title: "IB CP Tutoring",
    subtitle: "Career-related Programme",
    age: "Ages 16-19",
    icon: Briefcase,
    description:
      "IB CP tutoring for Career-related Programme students carrying DP subjects alongside a career-related study pathway. Tutors support the two or more DP courses at HL or SL, guide the Reflective Project through its ethical dilemma, research and referencing, and back the CP core — Personal and Professional Skills, service learning and language development — with realistic scheduling around placement and portfolio deadlines.",
    highlights: ["DP course support", "Reflective Project", "PPS core", "Deadline planning"],
  },
];

export function CourseExplorer() {
  return (
    <section className="pt-12 pb-6 px-4 bg-background overflow-hidden" id="curriculum">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            Curriculum navigator
          </div>
          <h2 className="text-2xl md:text-6xl font-black text-foreground mb-4 tracking-tight leading-none">
            IB tutoring for every <span className="text-primary italic">IB programme</span>
          </h2>
          <p className="text-muted-foreground font-medium max-w-3xl text-base md:text-lg leading-relaxed">
            The International Baccalaureate runs as four connected programmes, and each one is assessed
            differently — PYP through units of inquiry, MYP against criteria A-D, DP through Internal
            Assessments and final exams, CP through the Reflective Project. Pick the programme your child is
            in to see how our IB tutors teach it, which subjects we cover at Standard and Higher Level, and
            what the coursework actually asks for.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROGRAMS.map((program) => (
            <Link
              href={`/programmes/${program.id}`}
              key={program.id}
              className="flex flex-col p-6 md:p-7 rounded-3xl bg-muted/10 border border-border/60 hover:bg-muted/20 hover:border-primary/40 transition-all duration-300 group backdrop-blur-sm"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <span className="grid place-items-center size-10 rounded-2xl bg-primary/10 border border-primary/20 text-primary shrink-0">
                    <program.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-base md:text-xl font-black text-foreground group-hover:text-primary transition-colors leading-tight">
                      {program.title}
                    </h3>
                    <p className="text-[11px] md:text-xs font-bold text-muted-foreground uppercase tracking-wider mt-0.5">
                      {program.subtitle}
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-black px-2.5 py-1 rounded-full bg-muted/50 text-muted-foreground border border-border/40 whitespace-nowrap">
                  {program.age}
                </span>
              </div>

              <p className="text-[13px] md:text-sm text-muted-foreground leading-relaxed font-medium mb-5">
                {program.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {program.highlights.map((item) => (
                  <span
                    key={item}
                    className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-muted/30 text-muted-foreground border border-border/50 group-hover:border-primary/30 group-hover:text-primary transition-all"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <span className="mt-auto inline-flex items-center gap-2 text-xs md:text-sm font-black text-primary">
                Explore {program.id.toUpperCase()} tutoring
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
