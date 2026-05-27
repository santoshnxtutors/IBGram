"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import { igcseFaqs } from "../content";

export function IGCSEFaqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-background py-16 md:py-24" id="igcse-faqs">
      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <MessageCircleQuestion className="size-5 text-secondary" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">IGCSE FAQs</span>
            </div>
            <h2 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">
              Questions IGCSE families usually ask
            </h2>
          </div>
          <a
            href="/contact-us"
            className="w-fit rounded-full border border-white/10 bg-white/[0.04] px-6 py-2.5 text-sm font-bold text-foreground transition-all hover:border-primary/40"
          >
            Talk to an academic advisor
          </a>
        </div>

        <div className="grid gap-x-8 gap-y-4 md:grid-cols-2">
          {igcseFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question} className="h-fit">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className={`w-full overflow-hidden rounded-2xl border text-left transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 ${
                    isOpen
                      ? "border-primary/30 bg-[#0f1422] shadow-lg"
                      : "border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.06]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4 p-4 md:p-5">
                    <h3 className={`text-sm font-semibold transition-colors md:text-base ${isOpen ? "text-primary" : "text-foreground/90"}`}>
                      {faq.question}
                    </h3>
                    <span className={`rounded-full p-1 transition-colors ${isOpen ? "bg-primary/20" : "bg-white/5"}`}>
                      <ChevronDown className={`size-4 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : "text-muted-foreground"}`} />
                    </span>
                  </div>

                  <AnimatePresence>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="border-t border-white/5 px-4 pb-5 pt-3 text-sm leading-relaxed text-muted-foreground md:px-5 md:text-base">
                          {faq.answer}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

