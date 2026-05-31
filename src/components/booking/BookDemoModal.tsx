"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/contact";
import { Loader2, Send, X } from "lucide-react";

type BookDemoModalProps = {
  open: boolean;
  onClose: () => void;
  tutorName?: string;
  defaultSubject?: string;
  defaultBoard?: string;
};

const BOARD_OPTIONS = ["IB (PYP)", "IB (MYP)", "IB (DP)", "IB (CP)", "Cambridge IGCSE", "Edexcel IGCSE", "CBSE", "ICSE", "State Board", "Other"];
const TIME_SLOTS = [
  "Morning (8 AM – 11 AM)",
  "Late Morning (11 AM – 1 PM)",
  "Afternoon (1 PM – 4 PM)",
  "Evening (4 PM – 7 PM)",
  "Late Evening (7 PM – 9 PM)",
];

const initialState = {
  name: "",
  phone: "",
  email: "",
  classGrade: "",
  board: "",
  subject: "",
  schoolName: "",
  location: "",
  preferredDate: "",
  preferredTime: "",
  mode: "Online",
  notes: "",
};

export function BookDemoModal({ open, onClose, tutorName, defaultSubject, defaultBoard }: BookDemoModalProps) {
  const [form, setForm] = useState({
    ...initialState,
    subject: defaultSubject ?? "",
    board: defaultBoard ?? "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  const update = <K extends keyof typeof form>(key: K, value: (typeof form)[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!form.name.trim() || !form.phone.trim() || !form.classGrade.trim() || !form.subject.trim() || !form.board.trim()) {
      setError("Please fill in name, phone, class, board and subject.");
      return;
    }

    setSubmitting(true);

    const lines = [
      "Hi IBGram team! I would like to book a *Free Demo Class*.",
      "",
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
    ];
    if (form.email.trim()) lines.push(`Email: ${form.email.trim()}`);
    lines.push(
      `Class / Grade: ${form.classGrade.trim()}`,
      `Board / Curriculum: ${form.board}`,
      `Subject(s): ${form.subject.trim()}`,
    );
    if (form.schoolName.trim()) lines.push(`School: ${form.schoolName.trim()}`);
    if (form.location.trim()) lines.push(`Location / Area: ${form.location.trim()}`);
    lines.push(`Mode: ${form.mode}`);
    if (form.preferredDate) lines.push(`Preferred Date: ${form.preferredDate}`);
    if (form.preferredTime) lines.push(`Preferred Time: ${form.preferredTime}`);
    if (tutorName) lines.push(`Interested Tutor: ${tutorName}`);
    if (form.notes.trim()) {
      lines.push("", `Notes: ${form.notes.trim()}`);
    }
    lines.push("", "(Sent via IBGram website)");

    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${CONTACT.whatsappDigits}?text=${text}`;
    window.open(url, "_blank", "noopener,noreferrer");

    setTimeout(() => {
      setSubmitting(false);
      setForm({ ...initialState });
      onClose();
    }, 400);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="book-demo-title"
      className="fixed inset-0 z-[100] flex items-end md:items-center justify-center bg-black/60 p-0 md:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full md:max-w-lg max-h-[95vh] overflow-y-auto bg-card border border-border rounded-t-2xl md:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <h2 id="book-demo-title" className="text-lg font-bold text-foreground">
            Book a Free Demo
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="size-8 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/40 flex items-center justify-center transition-colors"
          >
            <X className="size-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-3">
          <Field label="Full Name *">
            <input
              required
              type="text"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="Student or parent name"
              className={inputCls}
            />
          </Field>

          <Field label="Phone / WhatsApp *">
            <input
              required
              type="tel"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              placeholder="+91 ..."
              className={inputCls}
            />
          </Field>

          <Field label="Email">
            <input
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="name@example.com"
              className={inputCls}
            />
          </Field>

          <div className="grid grid-cols-2 gap-3">
            <Field label="Class / Grade *">
              <input
                required
                type="text"
                value={form.classGrade}
                onChange={(e) => update("classGrade", e.target.value)}
                placeholder="e.g. Grade 10"
                className={inputCls}
              />
            </Field>

            <Field label="Board *">
              <select
                required
                value={form.board}
                onChange={(e) => update("board", e.target.value)}
                className={inputCls}
              >
                <option value="">Select…</option>
                {BOARD_OPTIONS.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </Field>
          </div>

          <Field label="Subject(s) *">
            <input
              required
              type="text"
              value={form.subject}
              onChange={(e) => update("subject", e.target.value)}
              placeholder="e.g. Math, Physics"
              className={inputCls}
            />
          </Field>

          <Field label="School Name">
            <input
              type="text"
              value={form.schoolName}
              onChange={(e) => update("schoolName", e.target.value)}
              placeholder="School name"
              className={inputCls}
            />
          </Field>

          <Field label="Location / Area">
            <input
              type="text"
              value={form.location}
              onChange={(e) => update("location", e.target.value)}
              placeholder="e.g. Sector 56, Gurugram"
              className={inputCls}
            />
          </Field>

          <div className="grid grid-cols-2 gap-3">
            <Field label="Date">
              <input
                type="date"
                value={form.preferredDate}
                onChange={(e) => update("preferredDate", e.target.value)}
                className={inputCls}
              />
            </Field>

            <Field label="Time Slot">
              <select
                value={form.preferredTime}
                onChange={(e) => update("preferredTime", e.target.value)}
                className={inputCls}
              >
                <option value="">Select…</option>
                {TIME_SLOTS.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </Field>
          </div>

          <Field label="Mode">
            <div className="flex gap-2">
              {(["Online", "Home Tuition", "Either"] as const).map((m) => (
                <button
                  type="button"
                  key={m}
                  onClick={() => update("mode", m)}
                  className={`flex-1 h-9 rounded-md text-sm font-semibold border transition-colors ${
                    form.mode === m
                      ? "bg-primary/10 text-primary border-primary"
                      : "bg-card text-muted-foreground border-border hover:text-foreground"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </Field>

          <Field label="Notes">
            <textarea
              value={form.notes}
              onChange={(e) => update("notes", e.target.value)}
              placeholder="Any extra context (optional)"
              rows={2}
              className={`${inputCls} resize-none py-2`}
            />
          </Field>

          {error && (
            <p className="text-sm text-red-500" role="alert">{error}</p>
          )}

          <div className="flex gap-2 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="h-11 px-4 rounded-md font-semibold"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={submitting}
              className="flex-1 h-11 rounded-md bg-[#25D366] hover:bg-[#1ebe5b] text-white font-semibold flex items-center justify-center gap-2"
            >
              {submitting ? (
                <>
                  <Loader2 className="size-4 animate-spin" /> Opening…
                </>
              ) : (
                <>
                  <Send className="size-4" /> Send on WhatsApp
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

const inputCls =
  "h-10 w-full bg-background border border-border rounded-md px-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block space-y-1">
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
