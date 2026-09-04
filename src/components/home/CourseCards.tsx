import Link from "next/link";
import { ArrowRight, BookOpen, Briefcase, FlaskConical, Languages, Palette, Variable } from "lucide-react";

/**
 * Subject-group entry points, matching the Courses menu in the header so the same
 * five groups are reachable from the navigation and from the page itself.
 * Slugs must stay in sync with COURSE_GROUPS in components/layout/Header.tsx.
 */
const COURSE_CARDS = [
  {
    slug: "mathematics",
    title: "IB Mathematics",
    icon: Variable,
    description:
      "IB Maths tutoring for both DP routes: Analysis and Approaches (AA) for proof, calculus and abstract technique, and Applications and Interpretation (AI) for statistics, modelling and real-world data. Tutors are matched to the exact course and level a student is entered for — AA HL is not AI SL — and cover paper technique, GDC and calculator strategy, and Mathematics Internal Assessment exploration topics from first idea to final draft.",
    tags: ["Math AA HL/SL", "Math AI HL/SL", "Maths IA", "Calculator strategy"],
  },
  {
    slug: "sciences",
    title: "IB Sciences",
    icon: FlaskConical,
    description:
      "Physics, Chemistry, Biology, Computer Science and Design Technology at Higher and Standard Level. Sessions work through core and HL-only content, the option topics your school has chosen, and the data-based questions that dominate Paper 1, 2 and 3 — plus IB Science Internal Assessment design, variable control, uncertainty handling and practical write-ups against the actual marking criteria.",
    tags: ["Physics", "Chemistry", "Biology", "Science IA"],
  },
  {
    slug: "individuals",
    title: "IB Individuals & Societies",
    icon: Briefcase,
    description:
      "Economics, Business Management, History, Psychology, Geography and Philosophy tutoring built around how these papers are actually marked. Students practise command terms such as evaluate, examine and to what extent, structure 15- and 25-mark extended responses, and get step-by-step guidance on the Economics commentary, Business research project and History IA.",
    tags: ["Economics", "Business Management", "History", "Psychology"],
  },
  {
    slug: "english",
    title: "IB English",
    icon: BookOpen,
    description:
      "English A Literature and English A Language and Literature at HL and SL. Tutoring covers Paper 1 guided textual analysis of unseen passages, Paper 2 comparative essay planning, the Individual Oral with its global issue and extracts, the HL Essay, and the learner portfolio work that feeds all of it.",
    tags: ["Lang & Lit", "Paper 1 analysis", "Individual Oral", "HL Essay"],
  },
  {
    slug: "language",
    title: "IB Language",
    icon: Languages,
    description:
      "Language B and ab initio tutoring in French, Spanish, German and Hindi. Sessions build vocabulary and grammar around the five prescribed themes, drill the text types examiners expect in Paper 2 writing, and rehearse the individual oral assessment so students speak with structure and confidence rather than memorised script.",
    tags: ["Language B", "ab initio", "Oral assessment", "Text types"],
  },
  {
    slug: "arts",
    title: "IB Arts",
    icon: Palette,
    description:
      "Group 6 tutoring in Visual Arts, Music, Theatre, Dance and Film at HL and SL — the most coursework-heavy subjects in the Diploma. Support covers the art-making inquiries portfolio, exhibition and curatorial rationale, music performance and composition portfolios, theatre notebooks, the world dance investigation and the film comparative study, matched to the guide version the school is sitting.",
    tags: ["Visual Arts", "Music", "Theatre", "Dance", "Film"],
  },
];
export function CourseCards() {
  return (
    <section className="bg-background px-4 py-12 md:py-14" id="courses">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 text-left">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-primary">
            IB courses
          </div>
          <h2 className="mb-4 text-2xl font-black leading-none tracking-tight text-foreground md:text-5xl">
            Explore IB <span className="italic text-primary">subject tutoring</span>
          </h2>
          <p className="max-w-3xl text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
            Every IB subject group we tutor, with the exact courses, levels and assessment components
            — papers, internal assessments and orals — that tutors are matched against before a
            session is booked.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {COURSE_CARDS.map(({ slug, title, icon: Icon, description, tags }) => (
            <Link
              key={slug}
              href={`/courses/ib/${slug}/`}
              prefetch={false}
              className="group flex flex-col rounded-3xl border border-border/60 bg-muted/10 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-muted/20 md:p-7"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="text-base font-black leading-tight text-foreground transition-colors group-hover:text-primary md:text-xl">
                  {title}
                </h3>
              </div>

              <p className="mb-5 text-[13px] font-medium leading-relaxed text-muted-foreground md:text-sm">
                {description}
              </p>

              <div className="mb-5 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-border/50 bg-muted/30 px-2.5 py-1 text-[11px] font-bold text-muted-foreground transition-all group-hover:border-primary/30 group-hover:text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <span className="mt-auto inline-flex items-center gap-2 text-xs font-black text-primary md:text-sm">
                Explore {title.replace("IB ", "")} tutoring
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
