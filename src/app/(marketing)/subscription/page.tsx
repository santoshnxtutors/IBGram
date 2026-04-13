"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Star, Sparkles, Zap, ShieldCheck, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function SubscriptionPage() {
  const benefits = [
    {
      title: "Unlimited 1:1 Live Sessions",
      description: "Direct access to top-tier IB Specialists for personalized coaching and doubt clearance.",
      icon: Zap
    },
    {
      title: "AI-Driven Study Plans",
      description: "Dynamic roadmaps that adapt to your performance data and exam timelines.",
      icon: Sparkles
    },
    {
      title: "Elite Resource Library",
      description: "Access curated question banks, past paper solutions, and exclusive study guides.",
      icon: ShieldCheck
    },
    {
      title: "Real-time Progress Reports",
      description: "Detailed analytics for parents and students to track improvement metrics.",
      icon: Star
    }
  ];

  const plans = [
    {
      name: "Monthly",
      price: "$199",
      period: "per month",
      description: "Perfect for short-term exam prep and specific topic mastery.",
      highlight: false,
      cta: "Start Monthly Plan"
    },
    {
      name: "Yearly",
      price: "$149",
      period: "per month",
      description: "Most popular for consistent high performance across the curriculum.",
      highlight: true,
      cta: "Join Yearly Elite",
      savings: "Save $600/year"
    },
    {
      name: "Pay As You Go",
      price: "$45",
      period: "per session",
      description: "Flexibility for targeted assistance whenever you need it most.",
      highlight: false,
      cta: "Book a Session"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground pb-20 scroll-mt-24">
      {/* Header Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-[20%] right-[-10%] w-[30vw] h-[300px] bg-secondary/5 rounded-full blur-[80px]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-8"
          >
            <ShieldCheck className="size-4" />
            Join the Elite Academic Inner Circle
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-[1.1]"
          >
            Elevate Your <span className="text-primary italic">Academic</span> <br className="hidden md:block" /> Performance
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium"
          >
            Access the world's most sophisticated education platform. Built for students who demand excellence and tutors who deliver it.
          </motion.p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 md:px-6 mb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-[2rem] bg-[#0B0F19]/60 border border-white/5 hover:border-primary/20 transition-all group"
            >
              <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <benefit.icon className="size-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 md:px-6 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">Choose Your Path to Success</h2>
          <p className="text-muted-foreground font-medium">Transparent pricing with no hidden fees. All courses included.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className={`relative h-full flex flex-col rounded-[2.5rem] border transition-all duration-500 overflow-hidden ${
                plan.highlight 
                ? "bg-primary/5 border-primary/30" 
                : "bg-background border-border"
              }`}>
                {plan.highlight && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-bl-2xl">
                    Most Popular
                  </div>
                )}
                
                <CardHeader className="p-8 pb-4">
                  <CardTitle className="text-2xl font-black mb-2">{plan.name}</CardTitle>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                    {plan.description}
                  </p>
                </CardHeader>
                
                <CardContent className="p-8 pt-0 flex-1">
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-5xl font-black tracking-tight">{plan.price}</span>
                    <span className="text-muted-foreground font-bold text-sm">{plan.period}</span>
                  </div>

                  {plan.savings && (
                    <div className="px-3 py-1 bg-green-500/10 text-green-500 text-xs font-black rounded-lg w-fit mb-8">
                      {plan.savings}
                    </div>
                  )}

                  <ul className="space-y-4 mb-4">
                    {['Access to All IB/IGCSE Courses', 'Verified Elite Tutors', '24/7 AI Smart Planner', 'Interactive Dashboard'].map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm font-semibold">
                        <CheckCircle2 className="size-4 text-primary shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter className="p-8 pt-0 mt-auto">
                  <Button 
                    className={`w-full h-14 rounded-2xl font-black text-lg transition-all ${
                      plan.highlight 
                      ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                      : "bg-foreground text-background hover:bg-muted-foreground"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WhatsApp Support Section */}
      <section className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-[3rem] p-12 bg-[#0B0F19]/60 border border-white/5 relative overflow-hidden text-center"
        >
          <h2 className="text-2xl md:text-3xl font-black mb-4">Need help choosing a plan?</h2>
          <p className="text-muted-foreground mb-8 font-medium">Speak with our academic advisors to find the perfect fit for your child's goals.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-14 px-8 rounded-2xl bg-green-600 hover:bg-green-700 text-white font-bold flex items-center gap-2">
              <MessageCircle className="size-5" />
              Chat on WhatsApp
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 rounded-2xl font-bold border-2">
              View All Courses
              <ArrowRight className="ml-2 size-5" />
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
