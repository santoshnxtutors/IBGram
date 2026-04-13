"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";

export interface FAQSectionProps {
  location?: {
    country: string;
    cities?: string;
  };
}

export function FAQSection({ location = { country: "India", cities: "Mumbai, Delhi NCR, Bangalore, Pune, and Hyderabad" } }: FAQSectionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  // Build the faqs array dynamically using the provided location props
  const faqs = [
    {
      question: "How does IB Gram AI tutor matching work?",
      answer: "Our AI evaluates over 50 data points—including subject requirements, learning style, budget, and past performance—to connect you with the top 2-3 elite tutors specifically matched to your needs within minutes."
    },
    {
      question: `Do you provide home tutors and online tutors across ${location.country}?`,
      answer: `Yes, we offer both in-person home tutoring in select metropolitan areas and high-quality online tutoring accessible across all regions of ${location.country}.`
    },
    {
      question: "Which classes and boards are supported?",
      answer: "We support Classes 6-12 across major boards including CBSE, ICSE, IB, ISC, and IGCSE, providing specialised educators for each specific curriculum."
    },
    {
      question: "Do you support JEE and NEET preparation?",
      answer: "Absolutely. We have a dedicated roster of top-percentile scorers and veteran educators who specialise in rigorous competitive exam preparation for both JEE and NEET."
    },
    {
      question: "Are tutors verified on IB Gram?",
      answer: "Yes, every tutor undergoes a strict multi-step verification process checking their academic credentials, identity, past track record, and teaching consistency before joining our platform."
    },
    {
      question: "How does the trial/demo class work?",
      answer: "Once matched, you can book an initial demo session to evaluate the tutor's teaching clarity and ensure pacing compatibility before making any long-term commitments."
    },
    {
      question: "What are the typical fees for tutors?",
      answer: "Fees vary depending on the curriculum (e.g., IB vs CBSE), the tutor's experience level, and whether the sessions are online or offline. Our matching system explicitly aligns recommendations with your specified budget."
    },
    {
      question: "Can I change the tutor after hiring?",
      answer: "Yes, student comfort is our priority. If you feel the match isn't perfect after starting, our support team will seamlessly assign a replacement tutor at no extra matching cost."
    },
    {
      question: "How quickly can I get matched with a tutor?",
      answer: "Thanks to our AI algorithms, standard matches are generated instantly, and you can typically schedule your first demo session within 24 to 48 hours."
    },
    {
      question: "What details should I share to get the best match?",
      answer: "Sharing specific details like current grade, target board, struggling topics, preferred timings, and whether you want online or offline instruction significantly boosts match accuracy."
    },
    {
      question: "Do tutors give homework, tests and progress updates?",
      answer: "Yes, continuous evaluation is integrated into our learning plans. Tutors provide regular assignments, mock tests, and structured feedback sessions to parents to ensure academic tracking."
    },
    {
      question: "Which cities do you currently support?",
      answer: `Online tutoring is available globally. Our home tutoring network is continually expanding and is currently highly active in major ${location.country} cities like ${location.cities}.`
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 relative overflow-hidden bg-background scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-3"
            >
              <MessageCircleQuestion className="size-5 text-secondary" />
              <span className="text-secondary font-black uppercase tracking-[0.2em] text-[10px]">Support & Information</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-black tracking-tight text-foreground"
            >
              Frequently asked questions
            </motion.h2>
          </div>
          
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="px-6 py-2.5 rounded-full border border-white/10 hover:border-white/20 bg-black/50 text-sm font-bold text-foreground transition-all duration-300 w-fit"
          >
            More FAQs
          </motion.button>
        </div>

        {/* FAQs Grid */}
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            
            return (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                key={idx}
                className="h-fit"
              >
                <div 
                  onClick={() => toggleFaq(idx)}
                  className={`cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? "bg-[#0f1422] border-primary/30 shadow-lg" 
                      : "bg-[#0B0F19]/60 border-white/5 hover:border-white/10 hover:bg-[#0B0F19]"
                  }`}
                >
                  <div className="p-4 md:p-5 flex items-center justify-between gap-4">
                    <h3 className={`font-semibold text-sm md:text-base transition-colors duration-300 ${isOpen ? "text-primary" : "text-foreground/90"}`}>
                      {faq.question}
                    </h3>
                    <div className={`p-1 rounded-full transition-colors duration-300 ${isOpen ? "bg-primary/20" : "bg-white/5"}`}>
                      <ChevronDown 
                        className={`size-4 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : "text-muted-foreground"}`} 
                      />
                    </div>
                  </div>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-4 md:px-5 pb-5 text-sm md:text-base text-muted-foreground leading-relaxed border-t border-white/5 pt-3">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  );
}
