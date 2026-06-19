"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const INQUIRY_TYPES = [
  "IB or IGCSE tutoring",
  "Diploma Programme (DP) help",
  "Mocks and exam revision",
  "Tutor application",
  "Partnership inquiries",
  "Technical or account issue",
  "General question",
];

export function ContactFormClient() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setFormState("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      inquiryType: String(data.get("inquiryType") ?? ""),
      message: String(data.get("message") ?? ""),
      company: String(data.get("company") ?? ""), // honeypot
      sourcePage: typeof window !== "undefined" ? window.location.pathname : "/contact-us/",
    };

    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(json.error ?? "Something went wrong. Please try again.");
      }
      form.reset();
      setFormState("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setFormState("idle");
    }
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
          {/* Honeypot field — hidden from real users, catches bots. */}
          <div className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden="true">
            <label>
              Company
              <input type="text" name="company" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">
                Full Name
              </label>
              <input
                required
                name="name"
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
                name="email"
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
                name="phone"
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
            <select
              name="inquiryType"
              defaultValue={INQUIRY_TYPES[0]}
              className="h-14 w-full bg-card border border-border rounded-2xl px-5 sm:px-6 text-foreground font-semibold focus:border-primary transition-all outline-none appearance-none cursor-pointer"
            >
              {INQUIRY_TYPES.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">
              Your Message
            </label>
            <textarea
              required
              name="message"
              placeholder="Share board, programme stage, subjects, current concerns and timing preferences."
              className="min-h-[160px] w-full bg-card border border-border rounded-2xl p-5 sm:p-6 text-foreground font-semibold focus:border-primary transition-all outline-none resize-none"
            />
          </div>

          {error && (
            <p className="rounded-2xl border border-rose-400/30 bg-rose-400/10 px-5 py-3 text-sm font-bold text-rose-200">
              {error}
            </p>
          )}

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
