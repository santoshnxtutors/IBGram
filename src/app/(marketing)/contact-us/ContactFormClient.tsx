"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ContactFormClient() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => {
      setFormState("success");
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      className="relative"
    >
      {formState === "success" ? (
        <div className="bg-card border border-primary/30 rounded-[2rem] p-6 sm:p-8 md:p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
          <div className="size-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
            <CheckCircle2 className="size-10" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black mb-4">Message Received</h2>
          <p className="text-muted-foreground font-medium mb-8 max-w-xs">
            An IB Gram academic advisor will reach out within one working day with the next step.
          </p>
          <Button onClick={() => setFormState("idle")} variant="outline" className="rounded-xl font-black">
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">
                Full Name
              </label>
              <input
                required
                type="text"
                placeholder="Enter your name"
                className="h-14 w-full bg-card border border-border rounded-2xl px-5 sm:px-6 text-foreground font-semibold focus:border-primary transition-all outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">
                Email Address
              </label>
              <input
                required
                type="email"
                placeholder="Enter your email"
                className="h-14 w-full bg-card border border-border rounded-2xl px-5 sm:px-6 text-foreground font-semibold focus:border-primary transition-all outline-none"
              />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">
                Mobile Number
              </label>
              <input
                required
                type="tel"
                placeholder="Enter your number"
                className="h-14 w-full bg-card border border-border rounded-2xl px-5 sm:px-6 text-foreground font-semibold focus:border-primary transition-all outline-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">
              Inquiry Type
            </label>
            <select className="h-14 w-full bg-card border border-border rounded-2xl px-5 sm:px-6 text-foreground font-semibold focus:border-primary transition-all outline-none appearance-none cursor-pointer">
              <option>IB or IGCSE tutoring</option>
              <option>Diploma Programme (DP) help</option>
              <option>Mocks and exam revision</option>
              <option>Tutor application</option>
              <option>Partnership inquiries</option>
              <option>Technical or account issue</option>
              <option>General question</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">
              Your Message
            </label>
            <textarea
              required
              placeholder="Share board, programme stage, subjects, current concerns and timing preferences."
              className="min-h-[160px] w-full bg-card border border-border rounded-2xl p-5 sm:p-6 text-foreground font-semibold focus:border-primary transition-all outline-none resize-none"
            />
          </div>

          <Button
            disabled={formState === "submitting"}
            type="submit"
            className="w-full h-14 rounded-2xl bg-primary text-primary-foreground font-black text-base sm:text-lg transition-all hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2"
          >
            {formState === "submitting" ? "Sending..." : "Send Message"}
            <Send className="size-5" />
          </Button>
        </form>
      )}
    </motion.div>
  );
}
