"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";

export interface FAQSectionProps {
  location?: {
    country: string;
    cities?: string;
  };
  items?: Array<{
    question: string;
    answer: string;
  }>;
}

export function FAQSection({ location = { country: "15+ countries", cities: "the UAE, Singapore, the UK, the US and India" }, items }: FAQSectionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const faqs = items?.length ? items : [
    {
      question: "How does IB Gram match a tutor?",
      answer: "Matching starts from specifics, not a general request. IB Gram looks at the curriculum, subject, level (SL or HL, Core or Extended), the topics actually going wrong, your school's assessment calendar, your target exam session, preferred lesson mode, time zone and budget. You then compare a short list of relevant tutors rather than scrolling a long generic directory.",
    },
    {
      question: "Do you work with families outside India?",
      answer: `Yes. IB Gram works with IB and IGCSE families in ${location.country}, including ${location.cities}. Online lessons are scheduled in your own time zone and around your school day, so a student in Dubai, Singapore, London or Toronto is taught at a sensible local hour. Home and hybrid lessons depend on whether a suitable tutor is local to you.`,
    },
    {
      question: "Can I find a tutor for Math AA HL or Math AI HL?",
      answer: "Yes. IB Gram covers Mathematics: Analysis and Approaches and Mathematics: Applications and Interpretation at both SL and HL, subject to tutor availability and schedule fit. AA and AI reward different skills, so the match is made against the exact course your school has entered the student for, not 'IB Maths' in general.",
    },
    {
      question: "Do you support the IA, Extended Essay and TOK?",
      answer: "Tutors can help a student understand the criteria, choose a workable research question, plan a realistic timeline, structure an argument and review drafts for clarity and command-term use. They will not write, co-write or edit assessed work for the student. That would breach IB academic integrity rules and put the student's diploma at risk.",
    },
    {
      question: "Do you support both IB and IGCSE?",
      answer: "Yes. Support spans IB PYP, MYP, DP and CP, plus Cambridge IGCSE and Pearson Edexcel International GCSE. Subjects include Mathematics, Physics, Chemistry, Biology, Economics, Business Management, Computer Science, English and languages. Families with siblings on different tracks often use the same platform for both.",
    },
    {
      question: "Can I choose home, online or hybrid tutoring?",
      answer: "Online is available worldwide and is usually the strongest option for rare HL subjects, IA review and exam-season continuity, because it removes travel from the equation. Home tutoring depends on a tutor being genuinely local to you and able to travel reliably. Hybrid combines in-person accountability with online specialist access.",
    },
    {
      question: "What happens in the first session?",
      answer: "The first session is diagnostic rather than a sales call. The tutor works through a real topic, not small talk, so you can see how they explain a concept, how they handle a wrong answer, and whether the pace suits your child. Most families decide from that session rather than from a profile description.",
    },
    {
      question: "How much does tutoring cost?",
      answer: "Fees vary by subject, level, tutor experience and lesson mode, and HL or specialist subjects typically sit higher than earlier-years support. IB Gram confirms the rate with you before any commitment rather than after a trial. There is no charge for being matched or for comparing tutor options.",
    },
    {
      question: "How quickly can a tutor be arranged?",
      answer: "Online matches can often be reviewed quickly because time zone is the only scheduling constraint. Home tutoring takes longer, since travel feasibility and local availability both have to work. Exam season and the weeks before IA deadlines are the busiest periods, so starting earlier gives you more choice.",
    },
    {
      question: "Are tutors verified, and what does that actually mean?",
      answer: "Profiles are reviewed for identity, subject background, exam-board familiarity, teaching experience and reliability signals, and identity checks are required before any in-home session. Verification supports a safer, better-informed choice. It is not a guarantee of a particular grade, and any platform promising one should be treated with caution.",
    },
    {
      question: "Will the tutor communicate progress to parents?",
      answer: "Yes. You can ask for a short update after each session covering what was taught, what the student found difficult, what was set as practice and the next priority. A reasonable checkpoint is four weeks in: by then you should see clearer explanations from your child, not just more hours logged.",
    },
    {
      question: "Can I change the tutor if the fit is not right?",
      answer: "Yes, and it is treated as normal rather than as a complaint. Level and personality fit both matter, and a mismatch is better corrected early than tolerated. Tell IB Gram what did not work, and alternative tutors can be reviewed where availability allows.",
    },
    {
      question: "Is IB Gram affiliated with the IB Organization, Cambridge or any school?",
      answer: "No. IB Gram is an independent tutoring platform and is not officially affiliated with the International Baccalaureate Organization, Cambridge Assessment International Education, Pearson Edexcel or any school unless explicitly stated. School names appear only to describe local academic context. Syllabus and assessment rules are set by the boards, not by IB Gram.",
    },
  ];

  return (
    <section id="faq" className="py-12 md:py-16 relative overflow-hidden bg-background scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <MessageCircleQuestion className="size-5 text-secondary" />
              <span className="text-amber-800 font-black uppercase tracking-[0.2em] text-[11px]">Support and information</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
              Questions parents usually ask
            </h2>
          </div>

          <Link
            href="/contact-us/"
            className="px-6 py-2.5 rounded-full border border-border hover:border-primary/40 bg-card text-sm font-bold text-foreground transition-all duration-300 w-fit"
          >
            Talk to an academic advisor
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div key={faq.question} className="h-fit">
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  className={`w-full text-left cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 ${
                    isOpen
                      ? "bg-card border-primary/30 shadow-lg"
                      : "bg-card border-border hover:border-primary/30 hover:bg-primary/5"
                  }`}
                >
                  <div className="p-4 md:p-5 flex items-center justify-between gap-4">
                    <h3 className={`font-semibold text-sm md:text-base transition-colors duration-300 ${isOpen ? "text-primary" : "text-foreground/90"}`}>
                      {faq.question}
                    </h3>
                    <span className={`p-1 rounded-full transition-colors duration-300 ${isOpen ? "bg-primary/20" : "bg-muted"}`}>
                      <ChevronDown
                        className={`size-4 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : "text-muted-foreground"}`}
                      />
                    </span>
                  </div>

                  {isOpen && (
                    <div className="px-4 md:px-5 pb-5 text-sm md:text-base text-muted-foreground leading-relaxed border-t border-border pt-3">
                      {faq.answer}
                    </div>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
