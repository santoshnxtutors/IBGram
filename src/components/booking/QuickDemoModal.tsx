"use client";

import { useEffect, useState } from "react";
import { Send, X } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/contact";

const CURRICULUMS = ["IB", "IGCSE", "Both"] as const;
const MODES = ["Online", "Home Tuition", "Either"] as const;

const initialState = {
  name: "",
  location: "",
  curriculum: "IB" as (typeof CURRICULUMS)[number],
  mode: "Online" as (typeof MODES)[number],
  message: "",
};

/**
 * Short enquiry form for the hero CTA: name, location, curriculum, mode, message.
 * Deliberately smaller than BookDemoModal, which the tutor-profile and compare flows
 * still use because they need grade, subject and preferred slot.
 *
 * No phone field: the enquiry is delivered over WhatsApp, so the sender's number
 * arrives with the message anyway.
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

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const url = buildWhatsAppUrl(
      [
        "Hi IB Gram, I would like to book a free demo session.",
        `Name: ${form.name.trim()}`,
        `Location: ${form.location.trim()}`,
        `Curriculum: ${form.curriculum}`,
        `Mode: ${form.mode}`,
        form.message.trim() ? `Message: ${form.message.trim()}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
    );
    window.open(url, "_blank", "noopener,noreferrer");
    setForm({ ...initialState });
    onClose();
  };

  const field =
    "w-full rounded-xl border border-border/70 bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary";

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <button type="button" aria-label="Close" onClick={onClose} className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-border/70 bg-card shadow-2xl">
        <div className="flex items-start justify-between border-b border-border/60 px-5 py-4">
          <div>
            <h2 className="text-base font-black text-foreground">Book a free demo</h2>
            <p className="mt-0.5 text-xs text-muted-foreground">We will continue on WhatsApp.</p>
          </div>
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="size-4" />
          </button>
        </div>

        <form onSubmit={submit} className="space-y-3 px-5 py-5">
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

          <div className="grid grid-cols-2 gap-3">
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

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-black text-black transition-transform hover:scale-[1.01] hover:bg-[#20bd5a] active:scale-[0.99]"
          >
            Send on WhatsApp
            <Send className="size-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
