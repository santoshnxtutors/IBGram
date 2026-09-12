"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Lock, Search, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CURRENCIES, DIAL_CODES, ZERO_DECIMAL_CURRENCIES } from "@/lib/payment-options";

type Option = { value: string; label: string; pinned?: boolean };

const currencyName = new Intl.DisplayNames(["en"], { type: "currency" });
const regionName = new Intl.DisplayNames(["en"], { type: "region" });

const COUNTRY_OPTIONS: Option[] = Object.entries(DIAL_CODES)
  .map(([code, dial]) => ({ value: code, label: `${regionName.of(code) ?? code} (+${dial})` }))
  .sort((a, b) => Number(b.value === "IN") - Number(a.value === "IN") || a.label.localeCompare(b.label));

const CURRENCY_OPTIONS: Option[] = CURRENCIES.map((code) => ({ value: code, label: `${code} - ${currencyName.of(code)}` }));

const OTHER_TUTOR = "other";

type CashfreeSdk = (opts: { mode: string }) => {
  checkout: (opts: { paymentSessionId: string; redirectTarget: string }) => Promise<{ error?: { message?: string } } | undefined>;
};

const field = "h-12 w-full rounded-xl border border-border bg-background px-4 font-semibold outline-none transition focus:border-primary";
const caption = "mb-1.5 block text-xs font-bold uppercase tracking-widest text-muted-foreground";
const optionClass = "block w-full px-4 py-2.5 text-left text-sm font-semibold transition hover:bg-primary/10";

export function PaymentForm({ tutors, defaultTutorId }: { tutors: { id: string; name: string }[]; defaultTutorId?: string }) {
  const [currency, setCurrency] = useState("INR");
  const [country, setCountry] = useState("IN");
  const [tutorId, setTutorId] = useState(defaultTutorId ?? "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const tutorOptions: Option[] = [
    ...tutors.map((t) => ({ value: t.id, label: t.name })),
    { value: OTHER_TUTOR, label: "Not decided yet / Other", pinned: true },
  ];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!tutorId) {
      setError("Please select your tutor.");
      return;
    }
    const payload = Object.fromEntries(new FormData(e.currentTarget));
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/payment/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error ?? "Could not start the payment.");

      const Cashfree = (window as unknown as { Cashfree?: CashfreeSdk }).Cashfree;
      if (!Cashfree) throw new Error("Payment system is still loading. Please try again.");
      // Redirects to Cashfree's hosted checkout, which returns to /payment/?order_id=...
      const result = await Cashfree({ mode: json.mode }).checkout({
        paymentSessionId: json.paymentSessionId,
        redirectTarget: "_self",
      });
      if (result?.error) throw new Error(result.error.message ?? "Could not open checkout.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not start the payment.");
      setLoading(false);
    }
  }

  return (
    <>
      <Script src="https://sdk.cashfree.com/js/v3/cashfree.js" strategy="afterInteractive" />
      <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row">
          <label className="flex-1">
            <span className={caption}>Full name</span>
            <input required name="name" minLength={3} maxLength={100} autoComplete="name" className={field} />
          </label>
          <label className="flex-1">
            <span className={caption}>Email</span>
            <input required name="email" type="email" maxLength={100} autoComplete="email" className={field} />
          </label>
        </div>

        <div>
          <span className={caption}>Mobile number</span>
          <div className="flex gap-3">
            <div className="w-40 shrink-0 sm:w-60">
              <SearchSelect
                name="country"
                label="Country"
                value={country}
                onChange={setCountry}
                options={COUNTRY_OPTIONS}
                searchPlaceholder="Search country or code"
              />
            </div>
            <div className="flex h-12 min-w-0 flex-1 items-center rounded-xl border border-border bg-background transition focus-within:border-primary">
              <span className="pl-4 font-semibold text-muted-foreground">+{DIAL_CODES[country]}</span>
              <input
                required
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel-national"
                maxLength={20}
                aria-label="Mobile number"
                placeholder={country === "IN" ? "10-digit mobile number" : "Mobile number"}
                className="h-full min-w-0 flex-1 bg-transparent px-2 font-semibold outline-none"
              />
            </div>
          </div>
        </div>

        <div>
          <span className={caption}>Tutor</span>
          <SearchSelect
            name="tutorId"
            label="Tutor"
            value={tutorId}
            onChange={setTutorId}
            options={tutorOptions}
            placeholder="Select your tutor"
            searchPlaceholder={`Search ${tutors.length} tutors by name`}
          />
        </div>

        <div className="flex gap-3">
          <div className="w-40 shrink-0 sm:w-60">
            <span className={caption}>Currency</span>
            <SearchSelect
              name="currency"
              label="Currency"
              value={currency}
              onChange={setCurrency}
              options={CURRENCY_OPTIONS}
              searchPlaceholder="Search currency"
            />
          </div>
          <label className="min-w-0 flex-1">
            <span className={caption}>Amount</span>
            <input
              required
              name="amount"
              type="number"
              inputMode="decimal"
              min={1}
              step={ZERO_DECIMAL_CURRENCIES.has(currency) ? 1 : 0.01}
              placeholder="Enter amount"
              className={field}
            />
          </label>
        </div>

        <label className="block">
          <span className={caption}>Payment for (optional)</span>
          <input name="note" minLength={3} maxLength={200} placeholder="e.g. IB Maths tutoring, October" className={field} />
        </label>

        {error && (
          <p role="alert" className="rounded-xl border border-rose-300 bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-700">
            {error}
          </p>
        )}

        <Button type="submit" disabled={loading} className="h-12 w-full rounded-xl text-base font-black">
          <Lock className="size-4" />
          {loading ? "Opening secure checkout..." : "Pay securely"}
        </Button>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <ShieldCheck className="size-3.5 text-emerald-600" aria-hidden />
            256-bit SSL encrypted
          </span>
          <span>PCI DSS compliant checkout by Cashfree</span>
          <span>IBGram never sees or stores your card details</span>
        </div>
      </form>
    </>
  );
}

/** Dropdown that always opens below its button, with a search box above the list. */
function SearchSelect({ name, label, value, onChange, options, placeholder = "Select", searchPlaceholder }: {
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
  searchPlaceholder: string;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const box = useRef<HTMLDivElement>(null);

  const q = query.trim().toLowerCase();
  const matches = options.filter((o) => !o.pinned && o.label.toLowerCase().includes(q));
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
        className={`${field} flex items-center justify-between gap-2 text-left`}
      >
        <span className={`truncate ${selected ? "" : "text-muted-foreground"}`} suppressHydrationWarning>
          {selected?.label ?? placeholder}
        </span>
        <ChevronDown className={`size-4 shrink-0 transition ${open ? "rotate-180" : ""}`} aria-hidden />
      </button>

      {open && (
        <div className="absolute left-0 top-full z-30 mt-2 w-full min-w-72 overflow-hidden rounded-xl border border-border bg-card shadow-lg">
          <div className="border-b border-border p-2">
            <div className="flex items-center gap-2 rounded-lg bg-background px-3">
              <Search className="size-4 shrink-0 text-muted-foreground" aria-hidden />
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
                className="h-10 w-full bg-transparent text-sm font-semibold outline-none"
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
              </button>
            ))}
            {matches.length === 0 && <p className="px-4 py-3 text-sm text-muted-foreground">No results found</p>}
            {pinned.map((o) => (
              <button
                key={o.value}
                type="button"
                role="option"
                aria-selected={o.value === value}
                onClick={() => pick(o.value)}
                className={`${optionClass} border-t border-border text-muted-foreground`}
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
