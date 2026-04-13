"use client";

import { motion } from "framer-motion";
import { Building2, Globe2, ShieldCheck, Trophy } from "lucide-react";

const stats = [
  { icon: Globe2, label: "Countries Reached", value: "45+" },
  { icon: Trophy, label: "Avg. Grade Uplift", value: "2.5 Points" },
  { icon: ShieldCheck, label: "Verified Tutors", value: "800+" },
  { icon: Building2, label: "Partner Schools", value: "120+" },
];

export function TrustIndicators() {
  return (
    <section className="py-2 border-y border-border/10 bg-background relative z-10 -mt-8 md:-mt-12 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-center text-[8px] font-black text-muted-foreground/40 uppercase tracking-[0.4em] mb-4">
          Trusted by Top Tier Educational Institutions Worldwide
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-12 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex flex-col items-center justify-center text-center group"
            >
              <div className="size-8 rounded-full border border-border/40 flex items-center justify-center mb-2 transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/5">
                <stat.icon className="size-3.5 text-primary" strokeWidth={1.5} />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xl md:text-4xl font-black text-foreground tracking-tighter drop-shadow-sm leading-none">{stat.value}</h4>
                <p className="text-[9px] md:text-[11px] font-bold text-primary tracking-normal">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
