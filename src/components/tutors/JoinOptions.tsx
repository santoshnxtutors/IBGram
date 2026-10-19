"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, BadgeCheck, CheckCircle2, ClipboardList, Mail, PenLine, Sparkles, UserPlus, type LucideIcon } from "lucide-react";
import { TutorApplicationForm } from "@/components/tutors/TutorApplicationForm";

type Choice = "signup" | "form";

const OPTIONS: Array<{ id: Choice; label: string; title: string; text: string; time: string; icon: LucideIcon }> = [
  {
    id: "signup",
    label: "Option 1",
    title: "Sign up and build your own profile",
    text: "Create a tutor account, fill in your profile yourself and edit it any time.",
    time: "About 5 minutes",
    icon: UserPlus,
  },
  {
    id: "form",
    label: "Option 2",
    title: "Fill in the form, we build it for you",
    text: "Send your details and CV. Our team writes your profile and emails you the link.",
    time: "About 3 minutes",
    icon: ClipboardList,
  },
];

const STEPS: Record<Choice, Array<{ icon: LucideIcon; title: string; text: string }>> = {
  signup: [
    { icon: UserPlus, title: "Create your account", text: "Google or email, under a minute" },
    { icon: PenLine, title: "Build your profile", text: "Subjects, experience, rate and where you teach" },
    { icon: BadgeCheck, title: "Go live", text: "Our team reviews it and publishes it on IB Gram" },
  ],
  form: [
    { icon: ClipboardList, title: "Send your details", text: "The form below, plus your CV if you have one" },
    { icon: Sparkles, title: "We build your profile", text: "Our team writes it from your details" },
    { icon: Mail, title: "Get the link by email", text: "As soon as your profile is live" },
  ],
};

function Steps({ choice }: { choice: Choice }) {
  return (
    <ol className="grid gap-3 sm:grid-cols-3">
      {STEPS[choice].map((step, i) => (
        <motion.li
          key={step.title}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 * i }}
          className="relative flex gap-3 rounded-xl border border-border/60 bg-background/60 p-3.5"
        >
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
            <step.icon className="size-4" />
          </span>
          <span>
            <span className="block text-[11px] font-black uppercase tracking-[0.14em] text-muted-foreground">Step {i + 1}</span>
            <span className="block text-sm font-extrabold text-foreground">{step.title}</span>
            <span className="block text-xs font-medium leading-snug text-muted-foreground">{step.text}</span>
          </span>
        </motion.li>
      ))}
    </ol>
  );
}

/** Lets a tutor pick between self-signup and the "we build it for you" application form. */
export function JoinOptions() {
  const [choice, setChoice] = useState<Choice>("signup");

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-extrabold text-foreground">Choose how you want to join</h2>
        <div role="radiogroup" aria-label="How do you want to join?" className="mt-3 grid gap-4 sm:grid-cols-2">
          {OPTIONS.map((option) => {
            const active = choice === option.id;
            return (
              <motion.button
                key={option.id}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => setChoice(option.id)}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative flex flex-col rounded-2xl border-2 p-5 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
                  active ? "border-primary bg-primary/5 shadow-lg shadow-primary/10" : "border-border/60 bg-card hover:border-primary/40"
                }`}
              >
                <span className="flex items-center justify-between">
                  <span className={`grid size-11 place-items-center rounded-xl transition-colors ${active ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary group-hover:bg-primary/15"}`}>
                    <option.icon className="size-5" />
                  </span>
                  <span className={`grid size-6 place-items-center rounded-full border-2 transition-colors ${active ? "border-primary bg-primary text-primary-foreground" : "border-border"}`}>
                    {active && <CheckCircle2 className="size-4" />}
                  </span>
                </span>
                <span className={`mt-4 text-xs font-black uppercase tracking-[0.16em] ${active ? "text-primary" : "text-muted-foreground"}`}>{option.label}</span>
                <span className="mt-1 text-base font-extrabold text-foreground">{option.title}</span>
                <span className="mt-2 text-sm font-medium leading-relaxed text-muted-foreground">{option.text}</span>
                <span className="mt-3 text-xs font-bold text-foreground/70">{option.time}</span>
              </motion.button>
            );
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {choice === "signup" ? (
          <motion.div
            key="signup"
            id="signup"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="scroll-mt-24 space-y-5 rounded-2xl border border-border/60 bg-card/20 p-6 md:p-8"
          >
            <Steps choice="signup" />
            <div className="grid gap-3 sm:grid-cols-2">
              {/* Full-page navigation: the Google route is a server redirect, not a Next.js page. */}
              <button
                type="button"
                onClick={() => (window.location.href = "/api/auth/google/?role=tutor")}
                className="inline-flex h-12 items-center justify-center gap-3 rounded-full border border-border bg-white text-sm font-bold text-black shadow-sm transition-colors hover:bg-slate-100"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1Z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.24 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z" fill="#34A853" />
                  <path d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84Z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15A10.97 10.97 0 0 0 12 1 11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38Z" fill="#EA4335" />
                </svg>
                Continue with Google
              </button>
              <Link
                href="/signup/?role=tutor"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Sign up with email <ArrowRight className="size-4" />
              </Link>
            </div>
            <p className="text-center text-xs font-medium text-muted-foreground">
              Already have a tutor account?{" "}
              <Link href="/login/" className="font-bold text-primary underline-offset-4 hover:underline">Log in</Link>
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            id="tutor-application"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="scroll-mt-24 space-y-5"
          >
            <Steps choice="form" />
            <TutorApplicationForm />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
