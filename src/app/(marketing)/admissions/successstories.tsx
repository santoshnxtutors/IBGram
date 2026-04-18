"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Globe2, Quote, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const storySnapshots = [
  {
    name: "Pahuna Gulati",
    from: "India",
    to: "Hong Kong",
    university: "University of Hong Kong",
    program: "Bachelors in Economics & Finance",
    summary: "A stronger application narrative helped turn a focused shortlist into a standout admit.",
    tone: "Profile built around clarity and fit",
  },
  {
    name: "Yashaswi Mehra",
    from: "India",
    to: "USA",
    university: "University of Nebraska Lincoln",
    program: "Bachelors in Physics",
    summary: "A tighter plan for essays, academics, and deadlines made the process much easier to execute.",
    tone: "Step-by-step execution",
  },
  {
    name: "Rehan Bhatia",
    from: "India",
    to: "Hong Kong",
    university: "Hong Kong University of Science & Technology",
    program: "BS Computer Science",
    summary: "Clear positioning and consistent review improved how the profile came together.",
    tone: "STEM shortlist strategy",
  },
  {
    name: "Divyanshu Vasu",
    from: "India",
    to: "Canada",
    university: "York University",
    program: "BS Computer Science",
    summary: "The application journey became structured, calm, and easy to track week by week.",
    tone: "Timeline discipline",
  },
  {
    name: "Abhishek Bhatia",
    from: "India",
    to: "USA",
    university: "Columbia University",
    program: "Masters in Computer Science",
    summary: "Strategic guidance sharpened the story behind the grades and the technical profile.",
    tone: "Graduate admissions focus",
  },
  {
    name: "Sanya Juneja",
    from: "India",
    to: "UK",
    university: "London School of Economics",
    program: "MSc Economics",
    summary: "Better structure around the application made the entire submission feel more controlled.",
    tone: "UK application planning",
  },
  {
    name: "Karnika Bansal",
    from: "India",
    to: "Spain",
    university: "IE Business School",
    program: "MBA",
    summary: "The guidance helped the profile feel more targeted for a competitive business school track.",
    tone: "Business school positioning",
  },
  {
    name: "Vaurn Rawal",
    from: "India",
    to: "USA",
    university: "Carnegie Mellon University",
    program: "Masters in CS",
    summary: "Application strategy and essay refinement made the journey feel focused from start to finish.",
    tone: "CS admit strategy",
  },
];

const familyQuotes = [
  {
    name: "Sanjay Sinha",
    role: "Shreya Sinha's Father",
    university: "Columbia University",
    quote:
      "The process became structured and far less overwhelming once the shortlist and application plan were mapped clearly.",
  },
  {
    name: "Nikita Singhal",
    role: "Anusha Singhal's Mother",
    university: "University of Pennsylvania",
    quote:
      "We had strong academics, but the support helped us present the profile more intentionally and confidently.",
  },
  {
    name: "Riya Malhotra",
    role: "Student Journey",
    university: "University of Alberta",
    quote:
      "The counselling helped simplify every decision so I could stay consistent through each stage.",
  },
  {
    name: "Lakshya Madaan",
    role: "Student Journey",
    university: "Arizona State University",
    quote: "The advice was practical, direct, and easy to follow when deadlines started stacking up.",
  },
  {
    name: "Shubika Aggarwal",
    role: "Student Journey",
    university: "Cornell University, UCLA, UIUC",
    quote:
      "I felt clearer about what to do each week, and that structure made a real difference in the final applications.",
  },
  {
    name: "Mihir Ahuja",
    role: "Student Journey",
    university: "Carnegie Mellon, Columbia, UCLA, USC",
    quote: "The process was focused, measured, and easy to keep moving without losing momentum.",
  },
];

const metrics = [
  { value: "20+", label: "Admission stories shown" },
  { value: "6+", label: "Countries represented" },
  { value: "12+", label: "Top university destinations" },
  { value: "100%", label: "Image-free storytelling" },
];

const spotlightStories = storySnapshots.slice(0, 3);
const orbitPhases = [
  { x: -160, y: -105, scale: 1, rotateY: -18, rotateZ: -6, opacity: 1, zIndex: 30 },
  { x: 130, y: -25, scale: 0.94, rotateY: 16, rotateZ: 6, opacity: 0.9, zIndex: 20 },
  { x: 0, y: 128, scale: 0.86, rotateY: 0, rotateZ: 0, opacity: 0.82, zIndex: 10 },
] as const;
const orbitWidths = [
  "w-[min(22rem,78vw)] sm:w-[min(36rem,72vw)]",
  "w-[min(21rem,74vw)] sm:w-[min(34rem,68vw)]",
  "w-[min(22rem,76vw)] sm:w-[min(35rem,74vw)]",
] as const;
function TabLink({ href, label, active }: { href: string; label: string; active?: boolean }) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={[
        "rounded-full px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.22em] transition-colors sm:px-7 sm:text-xs",
        active ? "bg-card text-foreground" : "text-muted-foreground hover:text-foreground",
      ].join(" ")}
    >
      {label}
    </Link>
  );
}

function StoryCard({ story }: { story: (typeof storySnapshots)[number] }) {
  return (
    <motion.article
      whileHover={{ y: -10, rotateX: 6, rotateY: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
      className="w-[290px] shrink-0 rounded-[1.5rem] border border-border/50 bg-background p-4 sm:w-[320px] sm:p-5"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-primary">
            <Globe2 className="size-3.5" />
            {story.tone}
          </div>
          <h3 className="mt-3 text-lg font-black tracking-tight text-foreground">{story.name}</h3>
          <p className="text-sm text-muted-foreground">
            {story.from} &rarr; {story.to}
          </p>
        </div>
        <div className="flex size-11 items-center justify-center rounded-full border border-border/50 bg-muted/30 text-[13px] font-black tracking-tight text-foreground">
          {story.name
            .split(" ")
            .map((part) => part[0])
            .slice(0, 2)
            .join("")}
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-border/50 px-4 py-3">
        <p className="text-sm font-semibold leading-6 text-foreground">{story.university}</p>
        <p className="mt-1 text-xs leading-5 text-muted-foreground">{story.program}</p>
      </div>

      <p className="mt-4 text-sm leading-7 text-muted-foreground">{story.summary}</p>
    </motion.article>
  );
}

function QuoteCard({ quote }: { quote: (typeof familyQuotes)[number] }) {
  return (
    <motion.article
      whileHover={{ y: -10, rotateX: 6, rotateY: 6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
      className="w-[290px] shrink-0 rounded-[1.5rem] border border-border/50 bg-background p-4 sm:w-[320px] sm:p-5"
      style={{ transformStyle: "preserve-3d" }}
    >
      <Quote className="size-4 text-primary" />
      <p className="mt-4 text-sm leading-7 text-muted-foreground">{quote.quote}</p>
      <div className="mt-4 border-t border-border/50 pt-4">
        <p className="text-sm font-black tracking-tight text-foreground">{quote.name}</p>
        <p className="mt-1 text-xs leading-5 text-muted-foreground">{quote.role}</p>
        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">{quote.university}</p>
      </div>
    </motion.article>
  );
}


function StoryStage({ reduceMotion }: { reduceMotion: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;

    const id = window.setInterval(() => {
      setActiveIndex((value) => (value + 1) % spotlightStories.length);
    }, 2600);

    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <div className="relative h-[520px] overflow-hidden rounded-[2rem] border border-border/50 bg-background sm:h-[600px] lg:h-[660px]">
      <div className="absolute inset-0 rounded-[2rem] border border-border/30" />
      <div className="absolute inset-4 rounded-[1.5rem] border border-border/20" />

      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/15"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={reduceMotion ? undefined : { duration: 28, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/10"
        animate={reduceMotion ? undefined : { rotate: -360 }}
        transition={reduceMotion ? undefined : { duration: 22, repeat: Infinity, ease: "linear" }}
      />

      <div className="absolute inset-0 [perspective:1800px]">
        {spotlightStories.map((story, index) => {
          const slotIndex = (index + activeIndex) % orbitPhases.length;
          const slot = orbitPhases[slotIndex];
          const widthClass = orbitWidths[slotIndex];

          return (
            <div
              key={story.name}
              className="absolute left-1/2 top-1/2"
              style={{ transform: "translate(-50%, -50%)" }}
            >
              <motion.article
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        x: slot.x,
                        y: slot.y,
                        scale: slot.scale,
                        rotateX: 12,
                        rotateY: slot.rotateY,
                        rotateZ: slot.rotateZ,
                        opacity: slot.opacity,
                      }
                }
                transition={reduceMotion ? undefined : { type: "spring", stiffness: 90, damping: 18 }}
                whileHover={reduceMotion ? undefined : { scale: slot.scale + 0.03, rotateX: 6, rotateY: 0 }}
                className={`${widthClass} rounded-[1.75rem] border border-border/50 bg-background/95 p-4 shadow-none sm:p-5`}
                style={{ transformStyle: "preserve-3d", zIndex: slot.zIndex }}
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.28em] text-primary">{story.tone}</p>
                    <h3 className="mt-2 text-xl font-black tracking-tight text-foreground sm:text-2xl">{story.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {story.from} &rarr; {story.to}
                    </p>
                  </div>
                  <span className="rounded-full border border-border/50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                    {index === 0 ? "Admit" : index === 1 ? "Focus" : "Outcome"}
                  </span>
                </div>

                <div className="mt-4 rounded-2xl border border-border/50 px-4 py-3">
                  <p className="text-sm font-semibold leading-6 text-foreground">{story.university}</p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">{story.program}</p>
                </div>

                <p className="mt-4 text-sm leading-7 text-muted-foreground">{story.summary}</p>
              </motion.article>
            </div>
          );
        })}

        <div className="absolute left-6 top-6 flex gap-2">
          <div className="rounded-full border border-border/50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.24em] text-primary">
            20+ stories
          </div>
          <div className="rounded-full border border-border/50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.24em] text-muted-foreground">
            6 countries
          </div>
        </div>
      </div>
    </div>
  );
}
export default function SuccessStoriesPage() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <>
      <style>{`
        body:has(main[data-page="admissions-success-stories"]) footer {
          display: none !important;
        }

        body:has(main[data-page="admissions-success-stories"]) main.flex-1 {
          flex: 0 0 auto !important;
        }

        body:has(main[data-page="admissions-success-stories"]) div.fixed:has(.ai-widget-ring) {
          display: none !important;
        }

        @keyframes marquee-left {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }

        @keyframes marquee-right {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }

        .marquee-left {
          animation: marquee-left 34s linear infinite;
        }

        .marquee-right {
          animation: marquee-right 40s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-left,
          .marquee-right {
            animation: none !important;
          }
        }
      `}</style>

      <main data-page="admissions-success-stories" className="overflow-x-hidden bg-background text-foreground">
        <div className="flex justify-center px-4 pt-1 sm:pt-2">
          <div className="inline-flex items-center rounded-full border border-border/50 bg-background p-1">
            <TabLink href="/admissions" label="Consulting" />
            <TabLink href="/admissions/success-stories" label="Success Stories" active />
            <TabLink href="/admissions/test-prep" label="Test Prep" />
          </div>
        </div>

        <section className="border-b border-border/50 px-4 pb-10 pt-6 sm:px-6 sm:pb-12 sm:pt-8 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.55 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                <Sparkles className="size-3" />
                Success Stories
              </div>

              <div className="space-y-4">
                <h1 className="max-w-3xl text-4xl font-black tracking-tighter text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.02]">
                  Real journeys, clear outcomes, and stronger admissions stories
                </h1>
                <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                  A plain-background, motion-led admissions showcase with layered depth, floating story rails, and a cleaner visual rhythm.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/contact-us">
                  <Button
                    size="lg"
                    className="h-12 rounded-full border border-border/50 bg-background px-6 text-sm font-black text-foreground shadow-none transition-transform hover:-translate-y-0.5 sm:h-14 sm:px-8 sm:text-base"
                  >
                    Book A Consultation
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </Link>
                <Link href="/admissions/test-prep">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 rounded-full border-border/60 px-6 text-sm font-black transition-transform hover:-translate-y-0.5 hover:bg-muted/20 sm:h-14 sm:px-8 sm:text-base"
                  >
                    Explore Test Prep
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    whileHover={reduceMotion ? undefined : { y: -4, rotateX: 4, rotateY: -4, scale: 1.02 }}
                    className="rounded-2xl border border-border/50 px-4 py-4"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <p className="text-xl font-black tracking-tight text-foreground sm:text-2xl">{metric.value}</p>
                    <p className="mt-2 text-xs leading-5 text-muted-foreground sm:text-sm">{metric.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: 20, scale: 0.98 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65 }}
            >
              <StoryStage reduceMotion={reduceMotion} />
            </motion.div>
          </div>
        </section>

        <section className="border-b border-border/50 px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="mx-auto max-w-7xl space-y-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.28em] text-primary">Admissions Outcomes</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-foreground sm:text-4xl">
                  Image-free stories that move as you scroll
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                Lightweight motion gives the page energy without changing its plain background or adding heavy visual noise.
              </p>
            </div>

            <div className="overflow-hidden">
              <div className="marquee-left flex w-max gap-4 pr-4 [perspective:1200px]">
                {storySnapshots.concat(storySnapshots).map((story, index) => (
                  <StoryCard key={`${story.name}-${index}`} story={story} />
                ))}
              </div>
            </div>

            <div className="overflow-hidden">
              <div className="marquee-right flex w-max gap-4 pr-4 [perspective:1200px]">
                {familyQuotes.concat(familyQuotes).map((quote, index) => (
                  <QuoteCard key={`${quote.name}-${index}`} quote={quote} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5 }}
              className="rounded-[1.75rem] border border-border/50 bg-background p-6 sm:p-8 lg:p-10"
            >
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="space-y-4">
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-primary">Start Here</p>
                  <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
                    Build the next success story with a simpler admissions plan
                  </h2>
                  <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                    Use this tab as a focused proof point for families who want outcomes, not noise. The page stays plain, fast, and easy to scan while the moving rails add the right amount of life.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <Link href="/contact-us">
                    <Button
                      size="lg"
                      className="h-12 rounded-full border border-border/50 bg-background px-6 text-sm font-black text-foreground shadow-none transition-transform hover:-translate-y-0.5 sm:h-14 sm:px-8 sm:text-base"
                    >
                      Speak With Us
                      <ArrowRight className="ml-2 size-4" />
                    </Button>
                  </Link>
                  <Link href="/admissions">
                    <Button
                      size="lg"
                      variant="outline"
                      className="h-12 rounded-full border-border/60 px-6 text-sm font-black transition-transform hover:-translate-y-0.5 hover:bg-muted/20 sm:h-14 sm:px-8 sm:text-base"
                    >
                      Back To Admissions
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

