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
    <section className="py-12 border-y border-border/50 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
          Trusted by Top Tier Educational Institutions Worldwide
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center text-center space-y-3"
            >
              <div className="p-4 rounded-full bg-primary/10 text-primary">
                <stat.icon className="size-6" />
              </div>
              <div>
                <h4 className="text-3xl font-bold text-foreground">{stat.value}</h4>
                <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
