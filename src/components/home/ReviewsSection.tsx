"use client";

import { motion } from "framer-motion";
import { Star, Quote, Globe } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    country: "United Kingdom",
    flag: "🇬🇧",
    avatar: "/student_sarah_london_review_avatar.png",
    rating: 5,
    text: "IB Gram's AI test generator saved me hours of prep. The tutors actually know the IB rubric inside out. Went from a 5 to a predicted 7 in Math AA HL!"
  },
  {
    id: 2,
    name: "Malik A.",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    avatar: "/student_malik_dubai_review_avatar.png",
    rating: 5,
    text: "The study planner is a game changer. It automatically balanced my physics and econ revision around my school sports schedule. Truly a Gen Z platform."
  },
  {
    id: 3,
    name: "Sophia L.",
    country: "United States",
    flag: "🇺🇸",
    avatar: "/student_sophia_usa_review_avatar.png",
    rating: 5,
    text: "Found an elite chemistry tutor within minutes. The interactive dashboard and AI tools make studying feel less like a chore and more like a game."
  },
  {
    id: 4,
    name: "Arjun V.",
    country: "India",
    flag: "🇮🇳",
    avatar: "/student_malik_dubai_review_avatar.png",
    rating: 5,
    text: "IB Gram's resonance with the Indian schooling system is perfect. The AI tools are incredibly local and effective for global standard preparation."
  },
  {
    id: 5,
    name: "Mia T.",
    country: "Australia",
    flag: "🇦🇺",
    avatar: "/student_sarah_london_review_avatar.png",
    rating: 5,
    text: "The 24/7 access to elite tutors has been my secret weapon. The platform is sleek, fast, and exactly what an IB student needs in 2026."
  }
];

// Duplicate for infinity scroll
const marqueeReviews = [...reviews, ...reviews];

export function ReviewsSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 mb-16 relative">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="h-px w-8 bg-primary/50" />
            <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">Student Reviews</span>
            <div className="h-px w-8 bg-primary/50" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tight text-foreground"
          >
            Trusted by <span className="text-gradient bg-300% animate-gradient">Students Worldwide</span>
          </motion.h2>
        </div>
      </div>

      {/* Infinity Marquee */}
      <div className="relative flex overflow-hidden group">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-8 whitespace-nowrap py-10 px-4"
        >
          {marqueeReviews.map((review, idx) => (
            <div
              key={`${review.id}-${idx}`}
              className="w-[350px] md:w-[450px] flex-shrink-0 glassmorphism-heavy p-8 rounded-[2.5rem] border border-white/10 shadow-2xl relative group/card hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute -top-4 -left-4 size-12 rounded-2xl bg-primary flex items-center justify-center shadow-xl shadow-primary/20 scale-0 group-hover/card:scale-100 transition-transform duration-500">
                <Quote className="size-6 text-primary-foreground" />
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="relative size-14 rounded-2xl overflow-hidden ring-2 ring-primary/20 shadow-lg">
                  <Image src={review.avatar} alt={review.name} fill sizes="56px" className="object-cover" />
                </div>
                <div>
                  <div className="font-black text-lg text-foreground flex items-center gap-2">
                    {review.name}
                    <div className="size-2 rounded-full bg-green-500 animate-pulse" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                    <span>{review.flag}</span>
                    <span>{review.country}</span>
                    <span className="text-[8px] bg-primary/10 text-primary px-1.5 py-0.5 rounded-full border border-primary/20">Verified</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="size-4 text-secondary fill-current" />
                ))}
              </div>

              <p className="text-lg md:text-xl font-medium text-foreground/90 italic leading-relaxed whitespace-normal tracking-tight">
                "{review.text}"
              </p>

              <div className="mt-8 flex items-center gap-2 text-secondary/80 group-hover/card:text-secondary transition-colors duration-500">
                <Globe className="size-4 animate-spin-slow" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">{review.country}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Gradient Overlays for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
