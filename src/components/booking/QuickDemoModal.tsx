"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CheckCircle2, Send, X } from "lucide-react";

const CURRICULUMS = ["IB", "IGCSE", "Both"] as const;
const MODES = ["Online", "Home Tuition", "Either"] as const;

const initialState = {
  name: "",
  phone: "",
  email: "",
  location: "",
  curriculum: "IB" as (typeof CURRICULUMS)[number],
  mode: "Online" as (typeof MODES)[number],
  message: "",
};

/**
 * Short enquiry form for the hero CTA. Submits to /api/contact/, the same
 * endpoint the contact-us page uses, so the enquiry lands in the admin
 * dashboard as a ContactLead. Email is optional; phone is how we reply.
 */
export function QuickDemoModal({
  open,
  onClose,
  defaultCurriculum,
}: {
  open: boolean;
  onClose: () => void;
  defaultCurriculum?: (typeof CURRICULUMS)[number];
}) {
  const [form, setForm] = useState({ ...initialState, curriculum: defaultCurriculum ?? initialState.curriculum });
  const [state, setState] = useState<"idle" | "submitting" | "success">("idle");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (!open || typeof document === "undefined") return null;

  const close = () => {
    onClose();
    if (state === "success") {
      setForm({ ...initialState, curriculum: defaultCurriculum ?? initialState.curriculum });
      setState("idle");
    }
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setState("submitting");

    const message = [
      `Curriculum: ${form.curriculum}`,
      `Mode: ${form.mode}`,
      `Location: ${form.location.trim()}`,
      form.message.trim() ? `Query: ${form.message.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          inquiryType: "Query",
          message,
          sourcePage: typeof window !== "undefined" ? window.location.pathname : null,
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error ?? "Something went wrong. Please try again.");
      setState("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setState("idle");
    }
  };

  const field =
    "w-full rounded-xl border border-border/70 bg-background px-3.5 py-3 text-base text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20";

  return createPortal(
    <div className="fixed inset-0 z-[200] flex items-end justify-center p-0 sm:items-center sm:p-4">
      <button
        type="button"
        aria-label="Close"
        onClick={close}
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Send a query"
        className="relative z-10 flex max-h-[92dvh] w-full flex-col overflow-hidden rounded-t-3xl border border-border/70 bg-card/100 shadow-2xl sm:max-h-[calc(100dvh-2rem)] sm:max-w-lg sm:rounded-3xl lg:max-w-xl"
      >
        <div className="flex shrink-0 items-start justify-between border-b border-border/60 px-5 py-4 sm:px-6 sm:py-5">
          <div>
            <h2 className="text-base font-black text-foreground sm:text-lg">Send a query</h2>
            <p className="mt-0.5 text-xs text-muted-foreground">Our team replies within one working day.</p>
          </div>
          <button
            type="button"
            aria-label="Close"
            onClick={close}
            className="flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="size-4" />
          </button>
        </div>

        {state === "success" ? (
          <div className="flex flex-col items-center gap-3 px-5 py-10 pb-[max(2.5rem,env(safe-area-inset-bottom))] text-center sm:px-6">
            <CheckCircle2 className="size-10 text-primary" />
            <h3 className="text-lg font-black text-foreground">Query received</h3>
            <p className="max-w-xs text-sm text-muted-foreground">
              An IB Gram academic advisor will reach out on your phone number within one working day.
            </p>
            <button
              type="button"
              onClick={close}
              className="mt-2 rounded-xl border border-border px-4 py-2 text-sm font-black text-foreground transition-colors hover:bg-muted"
            >
              Close
            </button>
          </div>
        ) : (
          <form
            onSubmit={submit}
            className="space-y-4 overflow-y-auto px-5 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:px-6"
          >
            <label className="block space-y-1 text-xs font-semibold text-muted-foreground">
              <span>Name *</span>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Student or parent name"
                className={field}
              />
            </label>

            <div className="grid gap-4 min-[420px]:grid-cols-2">
              <label className="block space-y-1 text-xs font-semibold text-muted-foreground">
                <span>Phone *</span>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="Mobile number"
                  className={field}
                />
              </label>

              <label className="block space-y-1 text-xs font-semibold text-muted-foreground">
                <span>Email</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Optional"
                  className={field}
                />
              </label>
            </div>

            <label className="block space-y-1 text-xs font-semibold text-muted-foreground">
              <span>Location *</span>
              <input
                required
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                placeholder="City or area"
                className={field}
              />
            </label>

            <div className="grid grid-cols-1 gap-4 min-[420px]:grid-cols-2">
              <label className="block space-y-1 text-xs font-semibold text-muted-foreground">
                <span>Curriculum *</span>
                <select
                  value={form.curriculum}
                  onChange={(e) => setForm({ ...form, curriculum: e.target.value as (typeof CURRICULUMS)[number] })}
                  className={field}
                >
                  {CURRICULUMS.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block space-y-1 text-xs font-semibold text-muted-foreground">
                <span>Mode *</span>
                <select
                  value={form.mode}
                  onChange={(e) => setForm({ ...form, mode: e.target.value as (typeof MODES)[number] })}
                  className={field}
                >
                  {MODES.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="block space-y-1 text-xs font-semibold text-muted-foreground">
              <span>Message</span>
              <textarea
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Subject, level, and what you need help with"
                className={`${field} resize-none`}
              />
            </label>

            {error && (
              <p className="rounded-xl border border-rose-400/30 bg-rose-400/10 px-3 py-2 text-xs font-bold text-rose-700">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={state === "submitting"}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 text-base font-black text-primary-foreground transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60"
            >
              {state === "submitting" ? "Sending..." : "Send Query"}
              <Send className="size-4" />
            </button>
          </form>
        )}
      </div>
    </div>,
    document.body,
  );
}
