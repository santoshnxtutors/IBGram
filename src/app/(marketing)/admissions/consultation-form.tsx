"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, Send, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/contact";
import whatsappLogo from "../../../../public/images/whatshap.jpg";

type ConsultationFormProps = {
  label?: string;
  service?: string;
  variant?: "solid" | "outline" | "floating";
};

const inputClass =
  "h-11 w-full rounded-xl border border-border/70 bg-background/75 px-3.5 text-sm font-medium text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary/70 focus:ring-2 focus:ring-primary/15";

const labelClass =
  "block space-y-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground";

function value(formData: FormData, key: string) {
  return String(formData.get(key) || "").trim();
}

export function AdmissionsConsultationForm({
  label = "Book A Free Consultation",
  service = "Admissions Consulting",
  variant = "solid",
}: ConsultationFormProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const message = [
      "New Ethos x IBGram admissions enquiry",
      "",
      `Service: ${value(formData, "service") || service}`,
      `Student name: ${value(formData, "studentName")}`,
      `Parent name: ${value(formData, "parentName")}`,
      `WhatsApp number: ${value(formData, "phone")}`,
      `Email: ${value(formData, "email") || "Not shared"}`,
      `Current grade / curriculum: ${value(formData, "grade")}`,
      `Target countries: ${value(formData, "countries")}`,
      `Target universities / tests: ${value(formData, "targets")}`,
      `Timeline: ${value(formData, "timeline")}`,
      `Query: ${value(formData, "query")}`,
    ].join("\n");

    window.open(`https://wa.me/${CONTACT.whatsappDigits}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  return (
    <>
      <Button
        type="button"
        size={variant === "floating" ? "default" : "lg"}
        variant={variant === "outline" ? "outline" : "default"}
        onClick={() => setOpen(true)}
        className={
          variant === "floating"
            ? "h-auto gap-3 rounded-none bg-transparent p-0 text-sm font-semibold text-white shadow-none hover:bg-transparent"
            : variant === "outline"
              ? "h-14 w-full rounded-2xl border-border/40 px-6 text-base font-black hover:bg-muted/10 sm:w-auto sm:px-8"
              : "h-14 w-full rounded-2xl border border-border/50 bg-background px-6 text-base font-black text-foreground transition-all hover:scale-105 hover:bg-background active:scale-95 sm:w-auto sm:px-8"
        }
      >
        {variant === "floating" ? (
          <>
            <span className="rounded-lg bg-[#111823] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10">
              {label}
            </span>
            <span className="flex size-14 items-center justify-center rounded-full bg-[#0F5A3F] shadow-xl shadow-black/25 transition-transform hover:scale-105">
              <span className="relative size-8 overflow-hidden rounded-full bg-white">
                <Image
                  src={whatsappLogo}
                  alt=""
                  fill
                  sizes="32px"
                  className="scale-[1.45] object-cover object-center"
                />
              </span>
            </span>
          </>
        ) : (
          <>
            {label}
            <ArrowRight className="ml-2 size-5" />
          </>
        )}
      </Button>

      {open && typeof document !== "undefined"
        ? createPortal(
            <div
              className="fixed inset-0 z-[200] flex items-end justify-center bg-black/75 p-0 backdrop-blur-md sm:items-center sm:px-4 sm:py-4"
              onClick={() => setOpen(false)}
            >
          <div
            className="flex h-[100dvh] w-full max-w-[720px] flex-col overflow-hidden border border-border/70 bg-card text-card-foreground shadow-[0_24px_80px_-28px_rgba(0,0,0,0.85)] sm:h-auto sm:max-h-[92vh] sm:rounded-3xl"
            role="dialog"
            aria-modal="true"
            aria-label="Admissions consultation form"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="shrink-0 border-b border-border/60 bg-card/95 px-4 py-4 sm:px-6 sm:py-5">
              <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-primary">
                  <span className="size-1.5 rounded-full bg-primary" />
                  Admissions
                </div>
                <h2 className="mt-3 text-lg font-black tracking-tight text-foreground min-[360px]:text-xl sm:text-2xl">
                  Share details on WhatsApp
                </h2>
                <p className="mt-1 max-w-xl text-sm leading-6 text-muted-foreground max-[380px]:text-xs max-[380px]:leading-5">
                  Send your goals, timeline, and target universities to our admissions team.
                </p>
              </div>
              <button
                type="button"
                aria-label="Close admissions consultation form"
                onClick={() => setOpen(false)}
                className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border/60 bg-background/60 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <X className="size-5" />
              </button>
              </div>
            </div>

            <form className="flex min-h-0 flex-1 flex-col" onSubmit={handleSubmit}>
              <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4 sm:px-6 sm:py-5">
                <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                  <label className={labelClass}>
                    Student name
                    <input name="studentName" required className={inputClass} />
                  </label>
                  <label className={labelClass}>
                    Parent name
                    <input name="parentName" required className={inputClass} />
                  </label>
                  <label className={labelClass}>
                    WhatsApp number
                    <input name="phone" required type="tel" autoComplete="tel" className={inputClass} />
                  </label>
                  <label className={labelClass}>
                    Email
                    <input name="email" type="email" autoComplete="email" className={inputClass} />
                  </label>
                  <label className={labelClass}>
                    Service
                    <select name="service" defaultValue={service} className={inputClass}>
                      <option>Admissions Consulting</option>
                      <option>Test Prep</option>
                      <option>Admissions + Test Prep</option>
                      <option>Profile Building</option>
                      <option>Scholarship Strategy</option>
                    </select>
                  </label>
                  <label className={labelClass}>
                    Grade / curriculum
                    <input name="grade" required placeholder="Grade 10, IB DP1, A Levels..." className={inputClass} />
                  </label>
                  <label className={labelClass}>
                    Target countries
                    <input name="countries" required placeholder="US, UK, Canada, Europe..." className={inputClass} />
                  </label>
                  <label className={labelClass}>
                    Timeline
                    <input name="timeline" required placeholder="Fall 2026, urgent, 6 months..." className={inputClass} />
                  </label>
                </div>

                <label className={`${labelClass} mt-3 sm:mt-4`}>
                  Target universities / tests
                  <input name="targets" placeholder="Oxford, NUS, SAT, IELTS, GMAT..." className={inputClass} />
                </label>

                <label className={`${labelClass} mt-3 sm:mt-4`}>
                  Query
                  <textarea
                    name="query"
                    rows={4}
                    required
                    placeholder="Tell us goals, current profile, scores, deadlines, or test date."
                    className={`${inputClass} min-h-24 resize-none py-3`}
                  />
                </label>
              </div>

              <div className="shrink-0 border-t border-border/60 bg-card/95 px-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] pt-3 backdrop-blur sm:px-6 sm:pb-5">
                <Button type="submit" className="h-12 w-full rounded-xl bg-primary text-sm font-black text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-[1.01] active:scale-[0.99] sm:h-14 sm:text-base">
                  Send details on WhatsApp
                  <Send className="ml-2 size-4 sm:size-5" />
                </Button>
              </div>
            </form>
          </div>
        </div>,
            document.body,
          )
        : null}
    </>
  );
}
