"use client";

import { useState } from "react";
import Link from "next/link";
import { CalendarCheck, Calculator, ChevronDown, Home, Monitor, MessageCircle, Sparkles, Wallet } from "lucide-react";

const WHATSAPP_DISPLAY = "+91 74393 68115";
const WHATSAPP_URL = `https://wa.me/917439368115?text=${encodeURIComponent(
  "Hi IB Gram, I'm a tutor on IB Gram and have a question about the tutor policy.",
)}`;
const ONLINE_SHARE = 0.7;
const HOME_FIRST_MONTH_SHARE = 0.5;

const inr = (n: number) => `₹${Math.round(n).toLocaleString("en-IN")}`;

const FAQS = [
  { q: "How is home tuition shared?", a: "The first month's fee for each new home student is split 50-50. From the second month, 100% of the fee is yours." },
  { q: "How much of an online class fee do I keep?", a: "70% of every online class fee is yours, every month. The 30% platform fee covers finding students, fee collection and support." },
  { q: "When do I get paid?", a: "Once a month, on the 1st, for all classes held the month before. September's fees are deposited on 1 October. If the 1st is a Sunday or bank holiday, it goes out the next working day." },
  { q: "What if a family pays late?", a: "We collect fees and chase late payments, never you. A late fee is added to your next payout as soon as we receive it." },
  { q: "Who do I ask about anything else?", a: `WhatsApp the IB Gram team on ${WHATSAPP_DISPLAY}. We reply on WhatsApp.` },
];

/** IB Gram's revenue-share policy for tutors, with a live earnings calculator. */
export function TutorPolicy() {
  const [mode, setMode] = useState<"home" | "online">("home");
  const [fee, setFee] = useState("1000");
  const [homeFee, setHomeFee] = useState("16000");
  const [perWeek, setPerWeek] = useState(4);
  const [open, setOpen] = useState<number | null>(0);

  const feeValue = Math.max(0, Number(fee) || 0);
  const yours = feeValue * ONLINE_SHARE;
  const monthly = yours * perWeek * 4;
  const homeValue = Math.max(0, Number(homeFee) || 0);
  const homeFirst = homeValue * HOME_FIRST_MONTH_SHARE;

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary via-primary to-sky-600 p-6 text-white shadow-xl shadow-primary/20 sm:p-8">
        <div className="pointer-events-none absolute -right-10 -top-10 size-48 rounded-full bg-white/10 blur-2xl" />
        <div className="relative">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="size-3.5" /> IB Gram Tutor Policy
          </span>
          <h1 className="mt-3 text-2xl font-black leading-tight sm:text-3xl">Home tuition: 100% yours from month 2. Online: 70% yours.</h1>
          <p className="mt-2 max-w-xl text-sm text-white/85 sm:text-base">
            Simple, transparent earnings, paid monthly on the 1st. We find the students and collect the fees; you focus on teaching.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="rounded-3xl border border-border/60 bg-card p-5 shadow-sm sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="flex items-center gap-2 text-lg font-bold text-foreground">
            <Calculator className="size-5 text-primary" /> Earnings calculator
          </h2>
          <div className="inline-flex rounded-xl bg-muted p-1 text-sm font-semibold">
            {(["home", "online"] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMode(m)}
                aria-pressed={mode === m}
                className={`rounded-lg px-4 py-1.5 transition-colors ${mode === m ? "bg-card text-primary shadow-sm" : "text-muted-foreground"}`}
              >
                {m === "home" ? "Home tuition" : "Online"}
              </button>
            ))}
          </div>
        </div>

        {mode === "home" ? (
          <>
            <label className="mt-4 block space-y-1.5">
              <span className="text-xs font-medium text-muted-foreground">Monthly fee for the student (₹)</span>
              <input
                type="number"
                min="0"
                inputMode="numeric"
                value={homeFee}
                onChange={(e) => setHomeFee(e.target.value)}
                className="h-11 w-full rounded-xl border border-border bg-background px-3 text-base font-semibold outline-none focus:border-primary"
              />
            </label>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <Stat label="You, month 1" value={inr(homeFirst)} highlight />
              <Stat label="IB Gram, month 1 only" value={inr(homeValue - homeFirst)} />
              <Stat label="You, every month from month 2" value={inr(homeValue)} highlight />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">The 50-50 split applies once per new student, to the first month only.</p>
          </>
        ) : (
          <>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="block space-y-1.5">
                <span className="text-xs font-medium text-muted-foreground">Fee per class (₹)</span>
                <input
                  type="number"
                  min="0"
                  inputMode="numeric"
                  value={fee}
                  onChange={(e) => setFee(e.target.value)}
                  className="h-11 w-full rounded-xl border border-border bg-background px-3 text-base font-semibold outline-none focus:border-primary"
                />
              </label>
              <label className="block space-y-1.5">
                <span className="flex justify-between text-xs font-medium text-muted-foreground">
                  Classes per week <span className="font-bold text-foreground">{perWeek}</span>
                </span>
                <input type="range" min={1} max={30} value={perWeek} onChange={(e) => setPerWeek(Number(e.target.value))} className="h-11 w-full accent-primary" />
              </label>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <Stat label="You earn per class" value={inr(yours)} highlight />
              <Stat label="IB Gram per class" value={inr(feeValue - yours)} />
              <Stat label="Your month (4 weeks)" value={inr(monthly)} highlight />
            </div>
            <div className="mt-5 flex h-9 overflow-hidden rounded-xl text-xs font-bold sm:text-sm">
              <div className="flex w-[70%] items-center justify-center bg-primary text-primary-foreground">You · 70%</div>
              <div className="flex w-[30%] items-center justify-center bg-secondary/25 text-amber-900 dark:text-amber-200">IB Gram · 30%</div>
            </div>
          </>
        )}
      </section>

      {/* Two models */}
      <section className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl border border-border/60 bg-card p-5 shadow-sm">
          <span className="grid size-11 place-items-center rounded-2xl bg-primary/10 text-primary"><Monitor className="size-5" /></span>
          <h3 className="mt-3 font-bold text-foreground">Online classes</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            A fixed split every month: <span className="font-semibold text-foreground">70% to you, 30% platform fee</span>.
          </p>
        </div>
        <div className="rounded-3xl border border-border/60 bg-card p-5 shadow-sm">
          <span className="grid size-11 place-items-center rounded-2xl bg-secondary/15 text-amber-800 dark:text-amber-300"><Home className="size-5" /></span>
          <h3 className="mt-3 font-bold text-foreground">Home tuition</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            First month <span className="font-semibold text-foreground">50-50</span>, then{" "}
            <span className="font-semibold text-foreground">100% yours</span> from month 2.
          </p>
        </div>
        <div className="rounded-3xl border border-border/60 bg-card p-5 shadow-sm sm:col-span-2">
          <span className="grid size-11 place-items-center rounded-2xl bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"><CalendarCheck className="size-5" /></span>
          <h3 className="mt-3 font-bold text-foreground">Monthly payouts, on the 1st</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Paid once a month, not daily. Fees for all classes in a month reach you on the 1st of the next month:{" "}
            <span className="font-semibold text-foreground">September&apos;s fees are deposited on 1 October</span>.{" "}
            <Link href="/tutor-policy/" className="font-semibold text-primary hover:underline">
              Read the full tutor policy
            </Link>
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="rounded-3xl border border-border/60 bg-card p-2 shadow-sm">
        {FAQS.map((f, i) => (
          <div key={f.q} className="border-b border-border/50 last:border-none">
            <button
              type="button"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
              className="flex w-full items-center justify-between gap-3 rounded-2xl px-4 py-4 text-left font-semibold text-foreground hover:bg-muted/40"
            >
              {f.q}
              <ChevronDown className={`size-4 shrink-0 text-muted-foreground transition-transform ${open === i ? "rotate-180" : ""}`} />
            </button>
            {open === i && <p className="px-4 pb-4 text-sm leading-relaxed text-muted-foreground">{f.a}</p>}
          </div>
        ))}
      </section>

      {/* WhatsApp */}
      <section className="flex flex-col items-start gap-4 rounded-3xl border border-emerald-500/30 bg-linear-to-br from-emerald-500/10 to-transparent p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"><Wallet className="size-5" /></span>
          <div>
            <p className="font-bold text-foreground">Questions about the policy or your earnings?</p>
            <p className="text-sm text-muted-foreground">WhatsApp us on {WHATSAPP_DISPLAY} for more details.</p>
          </div>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-12 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 text-sm font-bold text-white shadow-md shadow-emerald-500/20 transition-transform hover:scale-[1.02] hover:bg-[#1ebe5a] sm:w-auto"
        >
          <MessageCircle className="size-4" /> WhatsApp us
        </a>
      </section>
    </div>
  );
}

function Stat({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className={`rounded-2xl p-4 ${highlight ? "bg-primary/10" : "bg-muted/40"}`}>
      <p className="text-xs font-medium text-muted-foreground">{label}</p>
      <p className={`mt-1 truncate text-xl font-black tabular-nums ${highlight ? "text-primary" : "text-foreground"}`}>{value}</p>
    </div>
  );
}
