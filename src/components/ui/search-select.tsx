"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Search } from "lucide-react";

export type Option = { value: string; label: string; hint?: string; pinned?: boolean };

const trigger =
  "h-12 w-full rounded-xl border border-border bg-background px-4 font-semibold outline-none transition focus:border-primary";
const menu = "border-border bg-card text-foreground";
const optionClass = "block w-full px-4 py-2.5 text-left text-sm font-semibold transition hover:bg-primary/10";

/**
 * Dropdown that always opens below its button, with a search box above the list.
 * Unlike a native <select>, whose popup the browser paints light whatever the
 * page says, this is page markup — so it stays readable on the dark admin
 * palette. Secondary text uses opacity, not a colour, so it inherits whichever
 * text colour the caller sets.
 */
export function SearchSelect({
  name,
  label,
  value,
  onChange,
  options,
  placeholder = "Select",
  searchPlaceholder,
  className,
  menuClassName,
}: {
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
  searchPlaceholder: string;
  /** Trigger button styling; defaults to the public-site field look. */
  className?: string;
  /** Panel background/text; override wherever the theme tokens are not in play. */
  menuClassName?: string;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const box = useRef<HTMLDivElement>(null);

  const q = query.trim().toLowerCase();
  const haystack = (o: Option) => `${o.label} ${o.hint ?? ""}`.toLowerCase();
  const matches = options.filter((o) => !o.pinned && haystack(o).includes(q));
  const pinned = options.filter((o) => o.pinned);
  const selected = options.find((o) => o.value === value);

  // Close on outside click or Escape.
  useEffect(() => {
    if (!open) return;
    const close = (e: PointerEvent | KeyboardEvent) => {
      if (e instanceof KeyboardEvent ? e.key === "Escape" : !box.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("pointerdown", close);
      document.removeEventListener("keydown", close);
    };
  }, [open]);

  function pick(next: string) {
    onChange(next);
    setOpen(false);
    setQuery("");
  }

  return (
    <div ref={box} className="relative">
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        aria-label={label}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((isOpen) => !isOpen)}
        className={`${className ?? trigger} flex items-center justify-between gap-2 text-left`}
      >
        <span className={`truncate ${selected ? "" : "opacity-60"}`} suppressHydrationWarning>
          {selected?.label ?? placeholder}
        </span>
        <ChevronDown className={`size-4 shrink-0 transition ${open ? "rotate-180" : ""}`} aria-hidden />
      </button>

      {open && (
        <div
          className={`absolute left-0 top-full z-50 mt-2 w-full min-w-72 overflow-hidden rounded-xl border shadow-xl shadow-black/30 ${menuClassName ?? menu}`}
        >
          <div className="border-b border-current/15 p-2">
            <div className="flex items-center gap-2 rounded-lg bg-current/5 px-3">
              <Search className="size-4 shrink-0 opacity-60" aria-hidden />
              <input
                autoFocus
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  // Enter picks the first match instead of submitting the form.
                  if (e.key === "Enter") {
                    e.preventDefault();
                    if (matches[0]) pick(matches[0].value);
                  }
                }}
                placeholder={searchPlaceholder}
                aria-label={searchPlaceholder}
                className="h-10 w-full bg-transparent text-sm font-semibold text-inherit placeholder:opacity-60 outline-none"
              />
            </div>
          </div>
          <div role="listbox" aria-label={label} className="max-h-64 overflow-y-auto py-1">
            {matches.map((o) => (
              <button
                key={o.value}
                type="button"
                role="option"
                aria-selected={o.value === value}
                onClick={() => pick(o.value)}
                className={`${optionClass} ${o.value === value ? "bg-primary/10 text-primary" : ""}`}
              >
                {o.label}
                {o.hint && <span className="block text-xs font-medium opacity-70">{o.hint}</span>}
              </button>
            ))}
            {matches.length === 0 && <p className="px-4 py-3 text-sm opacity-70">No results found</p>}
            {pinned.map((o) => (
              <button
                key={o.value}
                type="button"
                role="option"
                aria-selected={o.value === value}
                onClick={() => pick(o.value)}
                className={`${optionClass} border-t border-current/15 opacity-75`}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
