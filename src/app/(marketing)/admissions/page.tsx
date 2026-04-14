"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, GraduationCap, Gavel, Globe, Microscope, ShieldCheck, Sparkles, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function AdmissionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px]" />
        </div>

        <div className="container px-4 md:px-6 relative z-10 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <Trophy className="size-4" />
                <span>Global Excellence in IB Admissions</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
                Your Direct Path to <span className="text-gradient">Elite Institutions</span>
              </h1>

              <p className="text-xl text-slate-400 md:text-2xl leading-relaxed max-w-xl">
                Securing placement in the world&apos;s most prestigious IB schools requires more than just grades. It requires an Elite Strategy.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 rounded-full">
                  Start Your Journey <ArrowRight className="ml-2 size-5" />
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 rounded-full">
                  Explore Global Network
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block justify-self-center lg:justify-self-end w-full max-w-md xl:max-w-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-[2rem] blur-[50px] animate-pulse" />
              <div className="relative glassmorphism-heavy rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl aspect-[4/5] w-full max-h-[600px]">
                <Image
                  src="/assets/images/elite_institution_hall.png"
                  alt="Elite Institution"
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-[#0a0a0a] to-transparent">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="size-12 rounded-2xl bg-primary flex items-center justify-center">
                      <Building2 className="text-white size-6" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">Top Institutional Network</p>
                      <p className="text-slate-400 text-sm">Harrow, Eton, Sevenoaks & and more</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-24 border-y border-white/5 bg-black/40">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white">The Global Elite Network</h2>
            <p className="text-slate-400 text-lg">We provide direct access and preparation for the world&apos;s most selective IB-continuum schools.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "UK Boarding Elite",
                desc: "Sevenoaks, Harrow, and Westminster. Specialist preparation for entrance exams and interview panels.",
                icon: <Building2 />,
                color: "bg-blue-500"
              },
              {
                title: "US IVY Pre-Collegiate",
                desc: "Top-tier boarding schools and high schools that feed directly into the Ivy League network.",
                icon: <GraduationCap />,
                color: "bg-red-500"
              },
              {
                title: "SG & Middle East Elite",
                desc: "ACSI, UWC South East Asia, and Dubai&apos;s leading IB institutions. Localized expertise.",
                icon: <Globe />,
                color: "bg-amber-500"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="bg-white/5 border-white/10 hover:border-primary/50 transition-all group p-8 rounded-[2rem] h-full flex flex-col">
                  <div className={`size-14 rounded-2xl ${item.color}/10 ${item.color.replace('bg-', 'text-')} flex items-center justify-center mb-8`}>
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed flex-1">{item.desc}</p>
                  <Button variant="ghost" className="mt-8 p-0 h-auto text-primary hover:text-white group-hover:translate-x-2 transition-all">
                    Explore Partners <ArrowRight className="ml-2 size-4" />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Admissions SOP */}
      <section className="py-32 relative overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Our Elite <span className="text-secondary italic">Admissions SOP</span>
              </h2>
              <p className="text-slate-400 text-xl leading-relaxed">
                We follow a rigorous Standard Operating Procedure (SOP) that has secured thousands of placements in top-tier institutions. Consistent, data-driven, and elite.
              </p>

              <div className="space-y-6">
                {[
                  { step: "01", title: "Strategic Profiling", desc: "We analyze the student's academic and extra-curricular trajectory to identify 'Target' and 'Reach' institutions." },
                  { step: "02", title: "Institutional Alignment", desc: "Direct matching with institutional values and entrance criteria for maximum impact." },
                  { step: "03", title: "Entrance Mastery", desc: "Specialist coaching for school-specific assessments, interviews, and internal selection processes." },
                  { step: "04", title: "Placement & Transition", desc: "Handling all logistics from application filing to successful onboarding." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <span className="text-primary font-black text-2xl group-hover:scale-125 transition-transform">{item.step}</span>
                    <div>
                      <h4 className="text-white font-bold text-xl mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-secondary/10 rounded-[3rem] blur-[50px]" />
              <Card className="glassmorphism-heavy border-white/10 p-10 rounded-[3rem] relative z-10">
                <h3 className="text-3xl font-bold text-white mb-8">Admission Success Rate</h3>
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between mb-4">
                      <span className="text-slate-300 font-medium">Top 5 Choice Schools</span>
                      <span className="text-secondary font-bold">96.4%</span>
                    </div>
                    <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden p-1 border border-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '96.4%' }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-secondary rounded-full shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-4">
                      <span className="text-slate-300 font-medium">Global Scholarships Secured</span>
                      <span className="text-primary font-bold">84%</span>
                    </div>
                    <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden p-1 border border-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '84%' }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-primary rounded-full shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex gap-4">
                    <div className="size-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                      <ShieldCheck />
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Verified placement data for the academic years 2022-2024 across 42 global jurisdictions.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Hero CTA */}
      <section className="py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <Card className="relative overflow-hidden border-none bg-gradient-to-r from-primary/80 to-secondary/80 p-12 md:p-20 text-center rounded-[3rem] shadow-2xl shadow-primary/20">
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold text-white">Join the Elite Class of 2025</h2>
              <p className="text-white/80 text-xl">Our specialists are currently accepting consultation requests for international admissions. Secure your slot now.</p>
              <Button size="lg" className="h-16 px-12 text-xl bg-white text-slate-900 hover:bg-slate-100 shadow-xl rounded-full font-bold">
                Book Your Consultation <Sparkles className="ml-2 size-6 text-primary" />
              </Button>
            </div>
            <div className="absolute top-0 right-0 p-8 text-white/10 -rotate-12 translate-x-1/4 -translate-y-1/4">
              <Globe className="size-[400px]" />
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
