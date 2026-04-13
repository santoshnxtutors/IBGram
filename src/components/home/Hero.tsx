"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Bot, PlayCircle, Star, Crown, CheckCircle2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { WhyIBGram } from "@/components/home/WhyIBGram";

export function Hero() {
  const router = useRouter();
  const [showPlans, setShowPlans] = useState(false);

  return (
    <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-40 bg-background">


      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-8"
          >
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

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <WhyIBGram />
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
              <Button size="lg" className="h-14 px-8 text-lg rounded-xl shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95 bg-primary text-primary-foreground shimmer-btn">
                Book a Tutor
                <ArrowRight className="ml-2 size-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-xl glassmorphism-heavy group hover:border-secondary transition-all">
                <Bot className="mr-2 size-5 text-secondary group-hover:animate-bounce" />
                Generate Free AI Test
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-8 border-t border-border/50">
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
          </motion.div>

          {/* Right Column (Interactive Quick Access Card) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 relative"
          >
            {/* Subtitle above card - strictly centered inside the col-span-5 column */}
            <div className="flex flex-col items-center text-center w-full mb-4 mt-4 md:mt-0 relative z-10 drop-shadow-sm">
              <h2
                className="text-[19px] md:text-[25px] lg:text-[28px] text-primary opacity-90 tracking-wide mb-1 text-center px-2 whitespace-nowrap"
                style={{ fontFamily: "'Bell MT', 'Bellefair', 'Times New Roman', serif" }}
              >
                Don't just study&ndash;conquer the curriculum
              </h2>
              <p className="text-sm md:text-base text-muted-foreground text-center px-6 max-w-prose">
                With advanced tools built for the top 1%. Choose a plan<br className="hidden md:block" /> that fits your academic goals.
              </p>
            </div>

            <Card className="glassmorphism-heavy border border-white/10 shadow-2xl overflow-visible rounded-3xl relative z-10 transition-all bg-gradient-to-b from-background/90 to-background/95">

              {/* Floating decorations - anchored safely inside card top edge */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-3 -right-4 sm:-right-8 lg:-right-12 p-3 bg-background/90 backdrop-blur-md rounded-2xl shadow-xl border border-border hidden lg:block z-20"
              >
                <div className="flex items-center gap-2">
                  <div className="size-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                    <PlayCircle className="size-5" />
                  </div>
                  <div className="text-xs font-bold leading-tight">
                    <div className="text-muted-foreground">LIVE Now</div>
                    <div>Interactive Prep</div>
                  </div>
                </div>
              </motion.div>

              <CardContent className="p-8 pt-10 relative">
                <div className="flex items-baseline justify-center gap-2 mb-10 overflow-visible text-foreground">
                  <span
                    className="text-5xl md:text-6xl leading-none -mb-3"
                    style={{ fontFamily: 'var(--font-cursive)' }}
                  >
                    Join
                  </span>
                  <span className="font-semibold text-2xl md:text-3xl italic">the</span>
                  <span className="font-extrabold text-4xl md:text-5xl italic text-primary ml-1">Elite</span>
                </div>

                <div className="space-y-4">
                  <ul className="space-y-4 mb-8">
                    {['Unlimited 1:1 Live Sessions', 'AI-Driven Study Plans', 'Access to Elite Resources'].map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-base text-foreground/90">
                        <CheckCircle2 className="size-5 text-primary flex-shrink-0" strokeWidth={1.5} />
                        <span className="font-medium tracking-wide">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="relative">
                    <Button
                      onClick={() => setShowPlans(!showPlans)}
                      className="w-full h-14 rounded-2xl text-lg font-bold bg-primary hover:bg-primary/90 border border-primary/20 text-primary-foreground shadow-sm transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
                    >
                      Become a Member
                      <motion.div
                        animate={{ rotate: showPlans ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="size-5" />
                      </motion.div>
                    </Button>

                    <AnimatePresence>
                      {showPlans && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 15, scale: 0.95 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute left-0 right-0 bottom-full mb-4 origin-bottom z-50 rounded-[14px] border border-white/10 dark:border-white/5 bg-background shadow-[0_-10px_40px_rgba(0,0,0,0.5)] overflow-hidden"
                        >
                          <div className="p-2 space-y-1">
                            <div className="p-4 rounded-xl hover:bg-primary/5 transition-colors cursor-pointer group/plan flex justify-between items-center">
                              <div>
                                <div className="font-bold">Monthly Plan</div>
                                <div className="text-sm text-muted-foreground">$199 / month</div>
                              </div>
                              <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover/plan:scale-110 transition-transform">
                                <ArrowRight className="size-4" />
                              </div>
                            </div>

                            <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors cursor-pointer group/plan flex justify-between items-center relative overflow-hidden">
                              <div className="absolute top-0 right-0 bg-primary/20 text-primary text-[10px] font-bold px-2 py-0.5 rounded-bl-lg tracking-wider uppercase">Most Popular</div>
                              <div>
                                <div className="font-bold text-primary">Yearly Plan</div>
                                <div className="text-sm text-muted-foreground">$149 / month <span className="line-through text-xs opacity-50 ml-1">$199</span></div>
                              </div>
                              <div className="size-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground group-hover/plan:scale-110 transition-transform shadow-md shadow-primary/20">
                                <ArrowRight className="size-4" />
                              </div>
                            </div>

                            <div className="p-4 rounded-xl hover:bg-primary/5 transition-colors cursor-pointer group/plan flex justify-between items-center">
                              <div>
                                <div className="font-bold">Pay As You Go</div>
                                <div className="text-sm text-muted-foreground">$45 / session</div>
                              </div>
                              <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover/plan:scale-110 transition-transform">
                                <ArrowRight className="size-4" />
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </CardContent>
            </Card>

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
