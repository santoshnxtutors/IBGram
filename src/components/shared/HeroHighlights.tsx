import { CalendarCheck, ClipboardCheck, MessageCircle, Target } from "lucide-react";

/**
 * The "Why IBGram?" value panel used on the right of every hero — homepage, IGCSE,
 * the generated SEO pages and the Gurgaon landing pages. Kept in one place so the
 * four propositions cannot drift apart across page types.
 */
const HIGHLIGHTS = [
  {
    title: "Subject-level tutor matching",
    icon: Target,
    desc: "Matched by programme, subject, level, weak areas and your school's calendar.",
  },
  {
    title: "Syllabus-aware tutoring",
    icon: ClipboardCheck,
    desc: "Math AA, Math AI, Physics, Chemistry, Economics, English and more, to the current syllabus.",
  },
  {
    title: "Lessons in your time zone",
    icon: CalendarCheck,
    desc: "Online worldwide around school hours, with home and hybrid options where tutors are local.",
  },
  {
    title: "Parent communication",
    icon: MessageCircle,
    desc: "Clear updates on what was covered, what needs practice and the next step.",
  },
];

export function HeroHighlights({ heading }: { heading?: string }) {
  return (
    <div className="space-y-6">
      {heading && (
        <div>
          <h2 className="mb-2 text-xs font-black uppercase tracking-[0.3em] text-primary/80">Why IBGram?</h2>
          <p className="text-xl font-black leading-tight text-foreground md:text-2xl">{heading}</p>
        </div>
      )}

      <div className="grid gap-3">
        {HIGHLIGHTS.map(({ title, icon: Icon, desc }) => (
          <div
            key={title}
            className="group flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all hover:border-primary/30 hover:bg-white/[0.06]"
          >
            <div className="grid size-10 shrink-0 place-items-center rounded-xl border border-primary/10 bg-primary/5 text-primary transition-colors group-hover:bg-primary/10">
              <Icon className="size-5" />
            </div>
            <div>
              <h3 className="mb-1 text-sm font-bold text-foreground transition-colors group-hover:text-primary">{title}</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
