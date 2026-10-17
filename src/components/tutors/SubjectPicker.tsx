"use client";

import { useMemo, useState } from "react";
import { Check, Search, X } from "lucide-react";
import type { SubjectGroup } from "@/lib/tutor/subject-options";

/**
 * Search and pick options from grouped lists (no free typing). Values saved
 * earlier that are not in the list still show as selected and can be removed.
 */
export function SubjectPicker({
  groups,
  value,
  onChange,
  idPrefix,
  searchPlaceholder = "Search subjects",
}: {
  groups: SubjectGroup[];
  value: string[];
  onChange: (next: string[]) => void;
  idPrefix: string;
  searchPlaceholder?: string;
}) {
  const [query, setQuery] = useState("");
  const selected = useMemo(() => new Set(value.map((v) => v.toLowerCase())), [value]);
  const q = query.trim().toLowerCase();

  const toggle = (option: string) =>
    onChange(selected.has(option.toLowerCase()) ? value.filter((v) => v.toLowerCase() !== option.toLowerCase()) : [...value, option]);

  const visible = groups
    .map((g) => ({ ...g, options: g.options.filter((o) => !q || o.toLowerCase().includes(q) || g.label.toLowerCase().includes(q)) }))
    .filter((g) => g.options.length);

  return (
    <div className="min-w-0 space-y-3">
      {value.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {value.map((v) => (
            <span key={v} className="inline-flex max-w-full items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground">
              <span className="truncate">{v}</span>
              <button type="button" aria-label={`Remove ${v}`} onClick={() => toggle(v)} className="shrink-0 opacity-80 hover:opacity-100">
                <X className="size-3" />
              </button>
            </span>
          ))}
        </div>
      )}

      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          id={`${idPrefix}-search`}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={searchPlaceholder}
          className="h-11 w-full rounded-xl border border-border bg-background/50 pl-9 pr-3 text-sm outline-none focus:border-primary"
        />
      </div>

      <div className="max-h-72 space-y-3 overflow-y-auto overscroll-contain rounded-xl border border-border/60 p-3">
        {visible.length === 0 && <p className="text-sm text-muted-foreground">Nothing matches “{query}”.</p>}
        {visible.map((g) => (
          <div key={g.label}>
            <p className="mb-1.5 text-[11px] font-black uppercase tracking-wider text-muted-foreground">{g.label}</p>
            <div className="flex flex-wrap gap-1.5">
              {g.options.map((o) => {
                const on = selected.has(o.toLowerCase());
                return (
                  <button
                    key={o}
                    type="button"
                    aria-pressed={on}
                    onClick={() => toggle(o)}
                    className={`inline-flex max-w-full items-center gap-1 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${on ? "border-primary bg-primary/10 text-primary" : "border-border text-foreground/80 hover:border-primary/50"}`}
                  >
                    {on && <Check className="size-3 shrink-0" />} <span className="truncate">{o}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
