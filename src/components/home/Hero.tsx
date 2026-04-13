"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Star, CheckCircle2, Sparkles, Trophy, Brain, Target, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function Hero() {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-40 bg-background">


      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex flex-wrap items-center gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary shadow-sm glassmorphism"
              >
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
                Over 10,000+ IB & IGCSE Students Worldwide
              </motion.div>

            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.05]">
              Top <span className="text-primary text-gradient bg-300% animate-gradient">IB Math Tutors</span> <br />
              in Your City
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-[600px] leading-relaxed">
              Personalized 1:1 tutoring combined with AI-driven study plans.
              Boost your grades dramatically with the world's gold standard in EdTech.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
              <Button
                onClick={() => router.push('/subscription')}
                size="lg"
                className="h-14 px-8 text-lg rounded-xl shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95 bg-primary text-primary-foreground font-bold"
              >
                Join Member
                <ArrowRight className="ml-2 size-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-xl glassmorphism-heavy group hover:border-secondary transition-all">
                <Bot className="mr-2 size-5 text-secondary group-hover:animate-bounce" />
                Generate Free AI Test
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-12 border-t border-border/50">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5, zIndex: 10 }}
                    className="size-10 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden cursor-pointer"
                  >
                    <UserAvatarFallback />
                  </motion.div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-secondary">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      <Star className="size-4 fill-current" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-sm font-medium text-foreground mt-1">
                  4.9/5 from <span className="text-muted-foreground">2,500+ reviews</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Strategic Advantage / Why IB Gram */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 relative"
          >
            <div className="space-y-6">
              <div className="mb-8">
                <h2 className="text-xs font-black uppercase tracking-[0.3em] text-primary/80 mb-2">Why IBGram?</h2>
                <p className="text-2xl md:text-3xl font-black text-foreground">Dominating the <span className="text-primary italic">IB & IGCSE</span> Landscape</p>
              </div>

              <div className="grid gap-4">
                {[
                  { title: "Top 1% Elite Educators", icon: Trophy, desc: "Curriculum architects and top-percentile scorers." },
                  { title: "AI-Driven Diagnostics", icon: Brain, desc: "Data-backed gap analysis and dynamic roadmaps." },
                  { title: "Curriculum Mastery", icon: Target, desc: "Rigorous past-paper and marking scheme focus." },
                  { title: "Global Success Record", icon: Globe, desc: "Verified track record of Ivy League admissions." }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="group p-5 rounded-2xl bg-[#0B0F19]/40 border border-white/5 hover:border-primary/30 transition-all flex gap-4"
                  >
                    <div className="size-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary border border-primary/10 group-hover:bg-primary/10 transition-colors shrink-0">
                      <item.icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-foreground mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Simple fallback component to mimic the user images without needing actual image assets loaded
function UserAvatarFallback() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor" fillOpacity="0.4" />
    </svg>
  );
}
