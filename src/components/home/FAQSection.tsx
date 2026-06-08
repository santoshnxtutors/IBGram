"use client";

import { useState } from "react";
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

export function FAQSection({ location = { country: "India", cities: "Mumbai, Delhi NCR, Bangalore, Pune, and Hyderabad" }, items }: FAQSectionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const faqs = items?.length ? items : [
    {
      question: "How does IB Gram match a tutor?",
      answer: "We look at the curriculum, subject, level, weak areas, school timeline, preferred tutoring mode, schedule and budget. The goal is to help families review a smaller, more relevant set of tutor options instead of a long generic list.",
    },
    {
      question: "Can I find a tutor for Math AA HL or Math AI HL?",
      answer: "Yes. IB Gram supports IB Mathematics Analysis and Approaches and Applications and Interpretation at SL and HL, subject to tutor availability and schedule fit.",
    },
    {
      question: "Do you support IA, EE and TOK?",
      answer: "Tutors may help students understand requirements, plan timelines, review structure and practise academic thinking. They must not write assessed work for the student.",
    },
    {
      question: "Can I choose home, online or hybrid tutoring?",
      answer: `Yes, depending on the subject, city and tutor schedule. Online tutoring is available widely, while home and hybrid tutoring depend on local availability in ${location.country}, including areas such as ${location.cities}.`,
    },
    {
      question: "Do you support both IB and IGCSE?",
      answer: "Yes. Families can look for support across PYP, MYP, DP and IGCSE subjects including Math, Physics, Chemistry, Biology, Economics, Business Management and English.",
    },
    {
      question: "How quickly can a tutor be arranged?",
      answer: "Timelines depend on the subject, level, schedule and tutoring mode. Some online matches can be reviewed quickly, while home tutoring may take longer because location and travel feasibility matter.",
    },
    {
      question: "Are tutors verified?",
      answer: "Tutor profiles are reviewed for identity, subject familiarity, teaching experience, communication and reliability signals. Verification supports safer selection, but it is not a guarantee of results.",
    },
    {
      question: "Will the tutor communicate progress to parents?",
      answer: "Parents can ask for concise updates after sessions, including what was covered, what needs practice, homework set and the next academic priority.",
    },
    {
      question: "Can I change the tutor if the fit is not right?",
      answer: "Yes. If the first match does not feel right, share what did not work and IB Gram can help review alternate tutor options where available.",
    },
    {
      question: "Is IB Gram officially affiliated with schools?",
      answer: "IB Gram is an independent tutoring platform and is not officially affiliated with schools unless specifically stated. School names may appear only to describe local context or student requirements.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 relative overflow-hidden bg-background scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <MessageCircleQuestion className="size-5 text-secondary" />
              <span className="text-secondary font-black uppercase tracking-[0.2em] text-[10px]">Support and information</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
              Questions parents usually ask
            </h2>
          </div>

          <a
            href="/contact-us"
            className="px-6 py-2.5 rounded-full border border-white/10 hover:border-primary/40 bg-white/[0.04] text-sm font-bold text-foreground transition-all duration-300 w-fit"
          >
            Talk to an academic advisor
          </a>
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
                      ? "bg-[#0f1422] border-primary/30 shadow-lg"
                      : "bg-white/[0.04] border-white/10 hover:border-white/20 hover:bg-white/[0.06]"
                  }`}
                >
                  <div className="p-4 md:p-5 flex items-center justify-between gap-4">
                    <h3 className={`font-semibold text-sm md:text-base transition-colors duration-300 ${isOpen ? "text-primary" : "text-foreground/90"}`}>
                      {faq.question}
                    </h3>
                    <span className={`p-1 rounded-full transition-colors duration-300 ${isOpen ? "bg-primary/20" : "bg-white/5"}`}>
                      <ChevronDown
                        className={`size-4 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : "text-muted-foreground"}`}
                      />
                    </span>
                  </div>

                  {isOpen && (
                    <div className="px-4 md:px-5 pb-5 text-sm md:text-base text-muted-foreground leading-relaxed border-t border-white/5 pt-3">
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
