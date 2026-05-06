"use client";

import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Wand2, Save, Rocket, RefreshCw, Link2, FileText, Sparkles } from "lucide-react";
import type { GeneratedSeoResult, SeoGeneratorInput } from "@/lib/page-generator/types";

const defaultInput: SeoGeneratorInput = {
  pageType: "sector",
  cityName: "Gurugram",
  citySlug: "gurugram",
  parentLocation: "Gurugram",
  microLocationName: "Sector 56",
  microLocationType: "sector",
  primaryKeyword: "IB tutors in Sector 56 Gurugram",
  secondaryKeywords: ["IB home tutors Sector 56", "IB DP tutor Sector 56"],
  serviceFocus: "IB tutors",
  programmes: ["PYP", "MYP", "DP"],
  subjects: ["Math AA", "Math AI", "Physics", "Chemistry", "Economics", "English"],
  tutoringModes: ["home", "online", "hybrid"],
  premiumAreas: ["Golf Course Road", "DLF Phase 5"],
  nearbyAreas: ["Sector 55", "Sector 57", "Sushant Lok"],
  nearbyCities: ["Delhi", "Noida"],
  schoolsMentioned: ["Scottish High International School", "Lancers International School"],
  proofNotes: "",
  tutorAvailabilityNotes: "",
  ctaFocus: "Book a free academic consultation",
  publishMode: "draft",
  indexPreference: "auto",
};

export default function SeoGeneratorAdminPage() {
  const [input, setInput] = useState<SeoGeneratorInput>(defaultInput);
  const [result, setResult] = useState<GeneratedSeoResult | undefined>();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const previewUrl = useMemo(() => result?.page.canonicalUrl.replace("https://ibgram.com", "") ?? "", [result]);

  async function generate(action: string, overrides: Partial<SeoGeneratorInput> = {}) {
    setLoading(true);
    setMessage(action);
    try {
      const response = await fetch("/api/admin/seo-generator/generate/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...input, ...overrides }),
      });
      const json = await response.json();
      if (!response.ok) throw new Error(json.error || "Generation failed.");
      setResult(json);
      setMessage("Generated SEO page draft.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Generation failed.");
    } finally {
      setLoading(false);
    }
  }

  async function save(publish = false) {
    if (!result) return;
    const page = {
      ...result.page,
      status: publish && result.page.quality.recommendedIndexFlag === "index" && result.page.quality.seoScore >= 72 ? "published" : "draft",
      indexFlag: publish && result.page.quality.recommendedIndexFlag === "index" ? "index" : "noindex",
    };
    setLoading(true);
    try {
      const response = await fetch("/api/admin/seo-generator/save/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ page }),
      });
      const json = await response.json();
      if (!response.ok) throw new Error(json.error || "Save failed.");
      setResult({ page: json.page });
      setMessage(json.message);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Save failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-background py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-primary">Internal admin</p>
          <h1 className="mt-2 text-4xl font-black tracking-tight text-foreground md:text-6xl">AI SEO Page Generator</h1>
          <p className="mt-3 max-w-3xl text-base font-medium leading-relaxed text-muted-foreground">
            Generate structured IB Gram SEO drafts from a few inputs. Public publishing stays blocked when quality is weak.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          <form className="space-y-5 rounded-[2rem] border border-border/50 bg-[#0B0F19]/50 p-5 lg:col-span-5" onSubmit={(event) => event.preventDefault()}>
            <div className="grid gap-4 sm:grid-cols-2">
              <Select label="Page type" value={input.pageType} onChange={(value) => setInput({ ...input, pageType: value as SeoGeneratorInput["pageType"] })} options={["city", "area", "sector", "society", "school", "subject", "programme"]} />
              <Select label="Publish mode" value={input.publishMode} onChange={(value) => setInput({ ...input, publishMode: value as SeoGeneratorInput["publishMode"] })} options={["draft", "review", "publish"]} />
              <Field label="City" value={input.cityName} onChange={(cityName) => setInput({ ...input, cityName })} />
              <Field label="City slug" value={input.citySlug || ""} onChange={(citySlug) => setInput({ ...input, citySlug })} />
              <Field label="Parent location" value={input.parentLocation || ""} onChange={(parentLocation) => setInput({ ...input, parentLocation })} />
              <Field label="Micro location" value={input.microLocationName || ""} onChange={(microLocationName) => setInput({ ...input, microLocationName })} />
              <Select label="Micro type" value={input.microLocationType || "sector"} onChange={(microLocationType) => setInput({ ...input, microLocationType: microLocationType as SeoGeneratorInput["microLocationType"] })} options={["area", "sector", "society", "school"]} />
              <Select label="Index preference" value={input.indexPreference} onChange={(indexPreference) => setInput({ ...input, indexPreference: indexPreference as SeoGeneratorInput["indexPreference"] })} options={["auto", "index", "noindex"]} />
            </div>

            <Field label="Primary keyword" value={input.primaryKeyword} onChange={(primaryKeyword) => setInput({ ...input, primaryKeyword })} />
            <Field label="Service focus" value={input.serviceFocus} onChange={(serviceFocus) => setInput({ ...input, serviceFocus })} />
            <Textarea label="Secondary keywords" value={input.secondaryKeywords.join(", ")} onChange={(value) => setInput({ ...input, secondaryKeywords: split(value) })} />
            <Textarea label="Programmes" value={input.programmes.join(", ")} onChange={(value) => setInput({ ...input, programmes: split(value) as SeoGeneratorInput["programmes"] })} />
            <Textarea label="Subjects" value={input.subjects.join(", ")} onChange={(value) => setInput({ ...input, subjects: split(value) })} />
            <Textarea label="Tutoring modes" value={input.tutoringModes.join(", ")} onChange={(value) => setInput({ ...input, tutoringModes: split(value) as SeoGeneratorInput["tutoringModes"] })} />
            <Textarea label="Premium / nearby areas" value={[...input.premiumAreas, ...input.nearbyAreas].join(", ")} onChange={(value) => setInput({ ...input, premiumAreas: split(value).slice(0, 4), nearbyAreas: split(value).slice(4) })} />
            <Textarea label="Schools mentioned" value={input.schoolsMentioned.join(", ")} onChange={(value) => setInput({ ...input, schoolsMentioned: split(value) })} />
            <Textarea label="Extra notes" value={input.proofNotes || ""} onChange={(proofNotes) => setInput({ ...input, proofNotes })} />
            <Field label="CTA focus" value={input.ctaFocus} onChange={(ctaFocus) => setInput({ ...input, ctaFocus })} />

            <div className="grid gap-3 sm:grid-cols-2">
              <Action icon={Wand2} label="Generate SEO Page" disabled={loading} onClick={() => generate("Generating SEO page...")} />
              <Action icon={RefreshCw} label="Regenerate Content" disabled={loading} onClick={() => generate("Regenerating content...")} />
              <Action icon={Sparkles} label="Improve Grammar" disabled={loading} onClick={() => generate("Improving grammar...", { proofNotes: `${input.proofNotes || ""}\nImprove grammar and clarity.` })} />
              <Action icon={Sparkles} label="Improve Human Tone" disabled={loading} onClick={() => generate("Improving tone...", { proofNotes: `${input.proofNotes || ""}\nMake tone natural and parent-facing.` })} />
              <Action icon={Link2} label="Generate Internal Links" disabled={loading} onClick={() => generate("Generating links...")} />
              <Action icon={FileText} label="Generate Metadata Only" disabled={loading} onClick={() => generate("Generating metadata...", { publishMode: "review" })} />
              <Action icon={Save} label="Save Draft" disabled={loading || !result} onClick={() => save(false)} />
              <Action icon={Rocket} label="Publish Page" disabled={loading || !result} onClick={() => save(true)} />
            </div>
            {message && <p className="rounded-xl border border-border/50 bg-muted/10 p-3 text-sm font-semibold text-muted-foreground">{message}</p>}
          </form>

          <section className="space-y-5 lg:col-span-7">
            {!result ? (
              <div className="rounded-[2rem] border border-border/50 bg-[#0B0F19]/50 p-8 text-muted-foreground">Generate a draft to preview URL, metadata, content, links, schema and warnings.</div>
            ) : (
              <Preview result={result} previewUrl={previewUrl} />
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

function Preview({ result, previewUrl }: { result: GeneratedSeoResult; previewUrl: string }) {
  const page = result.page;
  return (
    <>
      <div className="rounded-[2rem] border border-border/50 bg-[#0B0F19]/50 p-6">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">{previewUrl}</p>
        <h2 className="mt-3 text-3xl font-black text-foreground">{page.h1}</h2>
        <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">{page.metaDescription}</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-4">
          {[
            ["Words", page.quality.wordCount],
            ["SEO", page.quality.seoScore],
            ["Index", page.quality.recommendedIndexFlag],
            ["Duplicate", page.quality.duplicateRisk],
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl border border-border/50 bg-muted/10 p-3">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-primary">{label}</p>
              <p className="mt-1 text-lg font-black text-foreground">{value}</p>
            </div>
          ))}
        </div>
      </div>
      <Panel title="Page outline">{page.contentBlocks.map((block) => <p key={block.type}>{block.heading}</p>)}</Panel>
      <Panel title="Content preview">{page.contentBlocks.map((block) => <p key={block.type}><strong>{block.heading}:</strong> {block.body}</p>)}</Panel>
      <Panel title="FAQs">{page.faqs.map((faq) => <p key={faq.question}><strong>{faq.question}</strong><br />{faq.answer}</p>)}</Panel>
      <Panel title="Internal links">{page.internalLinks.map((link) => <p key={link.linkId}>{link.anchorText} - {link.targetUrl}</p>)}</Panel>
      <Panel title="Quality warnings">{page.quality.warnings.length ? page.quality.warnings.map((warning) => <p key={warning}>{warning}</p>) : <p>No warnings.</p>}</Panel>
      <Panel title="Schema preview"><pre className="overflow-auto text-xs">{JSON.stringify(page.schema, null, 2)}</pre></Panel>
    </>
  );
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-black uppercase tracking-[0.16em] text-muted-foreground">{label}</span>
      <input className="h-10 w-full rounded-xl border border-border bg-background/50 px-3 text-sm font-semibold outline-none focus:border-primary" value={value} onChange={(event) => onChange(event.target.value)} />
    </label>
  );
}

function Textarea({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-black uppercase tracking-[0.16em] text-muted-foreground">{label}</span>
      <textarea className="min-h-20 w-full rounded-xl border border-border bg-background/50 px-3 py-2 text-sm font-semibold outline-none focus:border-primary" value={value} onChange={(event) => onChange(event.target.value)} />
    </label>
  );
}

function Select({ label, value, options, onChange }: { label: string; value: string; options: string[]; onChange: (value: string) => void }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-black uppercase tracking-[0.16em] text-muted-foreground">{label}</span>
      <select className="h-10 w-full rounded-xl border border-border bg-background/50 px-3 text-sm font-semibold outline-none focus:border-primary" value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    </label>
  );
}

function Action({ icon: Icon, label, disabled, onClick }: { icon: LucideIcon; label: string; disabled?: boolean; onClick: () => void }) {
  return (
    <button type="button" disabled={disabled} onClick={onClick} className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-background/50 px-3 text-sm font-black text-foreground transition hover:border-primary/50 disabled:opacity-50">
      <Icon className="size-4 text-primary" />
      {label}
    </button>
  );
}

function Panel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-[2rem] border border-border/50 bg-[#0B0F19]/50 p-6">
      <h3 className="mb-4 text-xl font-black text-foreground">{title}</h3>
      <div className="space-y-3 text-sm font-medium leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}

function split(value: string): string[] {
  return value.split(",").map((item) => item.trim()).filter(Boolean);
}
