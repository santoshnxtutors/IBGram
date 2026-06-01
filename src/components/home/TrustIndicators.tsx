"use client";

import { motion } from "framer-motion";
import { BookOpenCheck, Globe2, ShieldCheck, UsersRound } from "lucide-react";

const stats = [
  { icon: BookOpenCheck, label: "PYP, MYP, DP and IGCSE", value: "Curriculum fit" },
  { icon: UsersRound, label: "Subject, level and learning need", value: "Tutor matching" },
  { icon: ShieldCheck, label: "Profile and teaching checks", value: "Verified process" },
  { icon: Globe2, label: "Home, online and hybrid where available", value: "Flexible modes" },
];

export function TrustIndicators() {
  return (
    <section className="py-6 md:py-8 border-y border-border/10 bg-background relative z-10 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-center text-[10px] font-black text-muted-foreground uppercase tracking-[0.28em] mb-5">
          Practical support for IB and IGCSE families
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-left group hover:border-primary/30 hover:bg-white/[0.06] transition-all"
            >
              <div className="size-10 rounded-xl border border-border/40 flex items-center justify-center transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/5 shrink-0">
                <stat.icon className="size-4 text-primary" strokeWidth={1.5} />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm md:text-base font-black text-foreground leading-tight">{stat.value}</h4>
                <p className="text-xs font-semibold text-muted-foreground leading-snug">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
