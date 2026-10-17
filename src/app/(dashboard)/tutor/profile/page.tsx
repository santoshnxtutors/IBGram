"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle, BadgeCheck, Camera, CheckCircle2, Clock, ExternalLink, EyeOff, Lock, MessageCircle, Plus, Search, ShieldCheck, Trash2, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { PersonAvatar } from "@/components/tutors/PersonAvatar";
import { HeaderPill, PageHeader } from "@/components/dashboard/ui";
import { SubjectPicker } from "@/components/tutors/SubjectPicker";
import { useCurrentUser } from "@/lib/auth/useCurrentUser";
import { ALL_COUNTRIES, COUNTRIES, DIAL_CODES, getCountryByCode, splitPhone } from "@/lib/countries";
import { IB_SUBJECT_GROUPS, IGCSE_SUBJECT_GROUPS, type SubjectGroup } from "@/lib/tutor/subject-options";
import {
  fetchMyTutorProfile,
  saveMyTutorProfile,
  uploadTutorPhoto,
  type IbProgramme,
  type TeachingMode,
  type TutorProfileInput,
  type TutorProfileStatus,
  type TutorProfileView,
} from "@/lib/tutor/profile";

const MODES: TeachingMode[] = ["online", "home", "hybrid"];
const PROGRAMMES: IbProgramme[] = ["PYP", "MYP", "DP"];
const LANGUAGE_GROUPS: SubjectGroup[] = [
  { label: "Languages", options: ["English", "Hindi", "French", "Spanish", "German", "Mandarin", "Arabic", "Portuguese", "Japanese", "Korean", "Bengali", "Punjabi", "Urdu", "Tamil", "Telugu", "Marathi", "Gujarati", "Kannada", "Malayalam"] },
];
const SPECIALTY_GROUPS: SubjectGroup[] = [
  { label: "Suggestions", options: ["IB Examiner", "IA support", "Extended Essay supervision", "TOK coaching", "Exam strategy", "Past paper practice", "HL specialist", "Concept building", "Doubt clearing", "Board exam preparation", "Olympiad preparation", "SAT / ACT"] },
];
// Location fields are free text: comma-separated, kept as strings while typing.
type ListField = "areas" | "sectors" | "societies";

const EMPTY: TutorProfileInput = {
  displayName: "",
  phone: "",
  email: "",
  headline: "",
  education: "",
  successRate: "",
  avatarUrl: null,
  tags: [],
  languages: [],
  ibSubjects: [],
  igcseSubjects: [],
  ibProgrammes: [],
  experienceYears: null,
  hourlyRate: null,
  currency: "INR",
  responseTime: "",
  availabilityText: "",
  methodology: "",
  slug: "",
  country: "in",
  countryName: "India",
  state: "",
  city: "",
  areas: [],
  sectors: [],
  societies: [],
  travelNotes: "",
  teachingModes: ["online"],
  countriesCovered: [],
  qualifications: [],
  faqs: [],
  bio: "",
  about: "",
};

// Same rule as the server: lowercase letters, numbers and single hyphens.
const toSlug = (value: string) =>
  value.toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+/, "").replace(/-{2,}/g, "-").slice(0, 80);
const splitList = (value: string) => value.split(",").map((s) => s.trim()).filter(Boolean);
const toggle = <T,>(list: T[], item: T) => (list.includes(item) ? list.filter((x) => x !== item) : [...list, item]);
const inputCls = "h-11 rounded-xl";
const textareaCls = "w-full resize-none rounded-xl border border-border bg-background/50 p-3 text-sm outline-none focus:border-primary";
const selectCls = "h-11 w-full rounded-xl border border-border bg-background/50 px-3 text-sm outline-none focus:border-primary";

function StatusBanner({ status, slug }: { status: TutorProfileStatus; slug?: string }) {
  if (status === "none") return null;
  const map = {
    pending: { icon: Clock, cls: "border-amber-400/30 bg-amber-400/10 text-amber-800 dark:text-amber-300", text: "Your profile is under review. Once an admin publishes it, you will appear on the Find a Tutor page." },
    approved: { icon: BadgeCheck, cls: "border-emerald-400/30 bg-emerald-400/10 text-emerald-800 dark:text-emerald-300", text: "Your profile is published and live. Students can find and book demos with you." },
    rejected: { icon: AlertCircle, cls: "border-rose-400/30 bg-rose-400/10 text-rose-700 dark:text-rose-300", text: "Your profile was not approved. Update the details below and save to resubmit." },
  } as const;
  const { icon: Icon, cls, text } = map[status];
  return (
    <div className={`flex flex-wrap items-start gap-2.5 rounded-xl border px-4 py-3 text-sm font-medium ${cls}`}>
      <Icon className="mt-0.5 size-4 shrink-0" /> <span className="flex-1">{text}</span>
      {status === "approved" && slug && (
        <a href={`/tutor-profile/${slug}/`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-bold underline underline-offset-4">
          View public profile <ExternalLink className="size-3.5" />
        </a>
      )}
    </div>
  );
}

function Field({ id, label, hint, className, children }: { id: string; label: string; hint?: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <Label htmlFor={id} className="text-xs">{label}</Label>
      {children}
      {hint && <p className="text-[11px] text-muted-foreground">{hint}</p>}
    </div>
  );
}

function Chips<T extends string>({ options, value, onChange }: { options: readonly T[]; value: T[]; onChange: (next: T[]) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <label key={option} className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold capitalize transition-colors ${value.includes(option) ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:border-primary/50"}`}>
          <input type="checkbox" className="sr-only" checked={value.includes(option)} onChange={() => onChange(toggle(value, option))} />
          {option}
        </label>
      ))}
    </div>
  );
}

function Section({ step, title, description, children }: { step: number; title: string; description?: string; children: React.ReactNode }) {
  return (
    <Card className="border-border/50">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2.5 text-lg font-bold">
          <span className="grid size-7 shrink-0 place-items-center rounded-full bg-primary/10 text-xs font-black text-primary">{step}</span>
          {title}
        </CardTitle>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

export default function TutorProfilePage() {
  const router = useRouter();
  const { user } = useCurrentUser();
  const [view, setView] = useState<TutorProfileView | null>(null);
  const [form, setForm] = useState<TutorProfileInput>(EMPTY);
  const [lists, setLists] = useState<Record<ListField, string>>({ areas: "", sectors: "", societies: "" });
  const [curricula, setCurricula] = useState({ ib: true, igcse: false });
  const [experience, setExperience] = useState("");
  const [rate, setRate] = useState("");
  const [countryQuery, setCountryQuery] = useState("");
  const [citySuggestions, setCitySuggestions] = useState<Array<{ city: string; state: string }>>([]);
  // WhatsApp number = dial-code country + local digits; stored as "+<code> <digits>".
  const [waCountry, setWaCountry] = useState("in");
  const [waLocal, setWaLocal] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const set = <K extends keyof TutorProfileInput>(key: K, value: TutorProfileInput[K]) => setForm((f) => ({ ...f, [key]: value }));

  useEffect(() => {
    if (user && user.accountType !== "tutor") router.replace("/student");
    // Prefill name and contact email from the account for a brand-new profile.
    if (user && !view?.profile) {
      setForm((f) => ({
        ...f,
        displayName: f.displayName || [user.firstName, user.lastName].filter(Boolean).join(" "),
        email: f.email || user.email,
      }));
    }
  }, [user, router, view]);

  const hydrate = useCallback((v: TutorProfileView) => {
    setView(v);
    const p = v.profile;
    if (!p) return;
    setForm({ ...EMPTY, ...p, teachingModes: p.teachingModes.length ? p.teachingModes : ["online"] });
    setLists({ areas: p.areas.join(", "), sectors: p.sectors.join(", "), societies: p.societies.join(", ") });
    setCurricula({ ib: p.ibSubjects.length > 0 || p.ibProgrammes.length > 0, igcse: p.igcseSubjects.length > 0 });
    setExperience(p.experienceYears != null ? String(p.experienceYears) : "");
    setRate(p.hourlyRate != null ? String(p.hourlyRate) : "");
    const wa = splitPhone(p.phone);
    setWaCountry(wa.country);
    setWaLocal(wa.local);
  }, []);

  // Existing cities of the chosen country, so tutors pick the site's spelling (e.g. Gurugram).
  useEffect(() => {
    let active = true;
    fetch(`/api/locations/cities/?country=${form.country}`)
      .then((r) => r.json())
      .then((body: { cities?: Array<{ city: string; state: string }> }) => active && setCitySuggestions(body.cities ?? []))
      .catch(() => active && setCitySuggestions([]));
    return () => {
      active = false;
    };
  }, [form.country]);

  useEffect(() => {
    fetchMyTutorProfile()
      .then(hydrate)
      .catch(() => setError("Could not load your profile."))
      .finally(() => setLoading(false));
  }, [hydrate]);

  const onPhoto = async (file: File | undefined) => {
    if (!file) return;
    setUploading(true);
    setError(null);
    try {
      set("avatarUrl", await uploadTutorPhoto(file));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not upload the photo.");
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  };

  const fail = (message: string) => {
    setError(message);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSaved(false);
    const ibSubjects = curricula.ib ? form.ibSubjects : [];
    const igcseSubjects = curricula.igcse ? form.igcseSubjects : [];
    if (!/^\d{6,14}$/.test(waLocal)) return fail("Enter your WhatsApp number (digits only, without the country code).");
    if (!curricula.ib && !curricula.igcse) return fail("Choose IB, IGCSE or both.");
    if (!ibSubjects.length && !igcseSubjects.length) return fail("Pick at least one subject you teach.");
    if (!form.teachingModes.length) return fail("Pick at least one teaching mode.");
    setSaving(true);
    try {
      const v = await saveMyTutorProfile({
        ...form,
        areas: splitList(lists.areas),
        sectors: splitList(lists.sectors),
        societies: splitList(lists.societies),
        phone: `+${DIAL_CODES[waCountry]} ${waLocal}`,
        email: form.email.trim(),
        slug: form.slug.replace(/-+$/, ""),
        ibSubjects,
        igcseSubjects,
        ibProgrammes: curricula.ib ? form.ibProgrammes : [],
        // Only send a photo uploaded here; the server keeps the current one otherwise.
        avatarUrl: form.avatarUrl?.startsWith("/api/media/tutor-photos/") ? form.avatarUrl : null,
        experienceYears: experience ? Number(experience) : null,
        hourlyRate: rate ? Number(rate) : null,
        qualifications: form.qualifications.filter((q) => q.title.trim()),
        faqs: form.faqs.filter((f) => f.question.trim() && f.answer.trim()),
      });
      hydrate(v);
      setSaved(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      fail(err instanceof Error ? err.message : "Could not save your profile.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="text-muted-foreground">Loading your profile…</p>;

  const isNew = view?.status === "none";
  const profileWords = [form.displayName, form.headline, form.bio, form.about, ...form.ibSubjects, ...form.igcseSubjects]
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
  const allCountries = form.countriesCovered.includes(ALL_COUNTRIES);
  const listInput = (field: ListField, placeholder: string) => (
    <Input id={field} value={lists[field]} onChange={(e) => setLists((l) => ({ ...l, [field]: e.target.value }))} placeholder={placeholder} className={inputCls} />
  );
  const rowList = (key: "qualifications" | "faqs") => form[key] as Array<Record<string, string>>;
  const updateRow = (key: "qualifications" | "faqs", i: number, field: string, value: string) =>
    set(key, rowList(key).map((row, j) => (j === i ? { ...row, [field]: value } : row)) as never);
  const removeRow = (key: "qualifications" | "faqs", i: number) => set(key, rowList(key).filter((_, j) => j !== i) as never);

  return (
    <div className="mx-auto max-w-3xl space-y-6 pb-10">
      <PageHeader
        eyebrow={<HeaderPill icon={BadgeCheck}>My tutor profile</HeaderPill>}
        title={isNew ? "Build your public profile" : "Your public profile"}
        subtitle={
          isNew
            ? "Complete your profile and submit it. Our team reviews new profiles before they go live on the Find a Tutor page."
            : "This is what students see. Changes to a published profile go live within a few minutes."
        }
      />

      {view && <StatusBanner status={view.status} slug={view.profile?.slug} />}
      {saved && (
        <div className="flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm font-medium text-emerald-800 dark:text-emerald-300">
          <CheckCircle2 className="size-4" /> Saved. {view?.status === "approved" ? "Your changes are live." : "Sent for admin review."}
        </div>
      )}
      {error && <div className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">{error}</div>}

      <form onSubmit={submit} className="space-y-6">
        <Section step={1} title="Profile photo" description="A clear, friendly headshot. Shown on your tutor card and profile page.">
          <div className="flex flex-wrap items-center gap-5">
            <PersonAvatar src={form.avatarUrl ?? user?.avatarUrl} name={form.displayName || "Tutor"} className="size-24 text-2xl" />
            <div className="space-y-2">
              <input ref={fileRef} type="file" accept="image/jpeg,image/png,image/webp" className="sr-only" onChange={(e) => onPhoto(e.target.files?.[0])} />
              <Button type="button" variant="outline" disabled={uploading} onClick={() => fileRef.current?.click()} className="h-11 gap-2 rounded-xl font-bold">
                <Camera className="size-4" /> {uploading ? "Uploading…" : form.avatarUrl ? "Change photo" : "Upload photo"}
              </Button>
              <p className="text-xs text-muted-foreground">JPG, PNG or WebP, up to 5 MB.</p>
            </div>
          </div>
        </Section>

        <Section step={2} title="Contact details" description="Both are required to create your profile.">
          <div className="mb-5 overflow-hidden rounded-2xl border border-emerald-500/25 bg-linear-to-br from-emerald-500/10 via-primary/5 to-transparent p-4">
            <div className="flex items-start gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-emerald-500/15 text-emerald-700 dark:text-emerald-300">
                <ShieldCheck className="size-5" />
              </span>
              <div className="min-w-0">
                <p className="font-bold text-foreground">Your contact details stay private</p>
                <ul className="mt-1.5 space-y-1 text-sm text-muted-foreground">
                  <li className="flex gap-2"><Lock className="mt-0.5 size-3.5 shrink-0 text-emerald-600" /> Never shown on your public profile or tutor card.</li>
                  <li className="flex gap-2"><EyeOff className="mt-0.5 size-3.5 shrink-0 text-emerald-600" /> Students and parents cannot see them.</li>
                  <li className="flex gap-2"><MessageCircle className="mt-0.5 size-3.5 shrink-0 text-emerald-600" /> Only the IB Gram team uses them, to send you students and updates.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid gap-5">
            <Field id="phone" label="WhatsApp number *">
              <div className="flex flex-col gap-2 sm:flex-row">
                <select aria-label="Country code" value={waCountry} onChange={(e) => setWaCountry(e.target.value)} className={cn(selectCls, "sm:w-52 sm:shrink-0")}>
                  {COUNTRIES.map((c) => (
                    <option key={c.code} value={c.code}>{`${c.name} (+${DIAL_CODES[c.code]})`}</option>
                  ))}
                </select>
                <Input
                  id="phone"
                  type="tel"
                  inputMode="numeric"
                  value={waLocal}
                  onChange={(e) => setWaLocal(e.target.value.replace(/\D/g, "").slice(0, 14))}
                  placeholder="9876543210"
                  className={cn(inputCls, "min-w-0 sm:flex-1")}
                  required
                />
              </div>
            </Field>
            <Field id="email" label="Contact email *" hint="Defaults to your login email. Change it if you prefer another address.">
              <Input id="email" type="email" value={form.email} onChange={(e) => set("email", e.target.value)} className={inputCls} required />
            </Field>
          </div>
        </Section>

        <Section step={3} title="Basic details">
          <div className="grid gap-5">
            <Field id="displayName" label="Full name *">
              <Input id="displayName" value={form.displayName} onChange={(e) => set("displayName", e.target.value)} className={inputCls} required minLength={2} />
            </Field>
            <Field
              id="slug"
              label="Profile link"
              hint={isNew && !form.slug ? "Leave empty to use your name. You can change it later." : "Changing it changes your public URL; old links stop working."}
            >
              <div className="flex min-w-0 items-stretch overflow-hidden rounded-xl border border-border bg-background/50 focus-within:border-primary">
                <span className="flex shrink-0 items-center border-r border-border bg-muted/40 px-3 text-xs font-semibold text-muted-foreground">
                  <span className="hidden sm:inline">ibgram.com</span>/tutor-profile/
                </span>
                <input
                  id="slug"
                  value={form.slug}
                  onChange={(e) => set("slug", toSlug(e.target.value))}
                  placeholder={toSlug(form.displayName).replace(/-+$/, "") || "your-name"}
                  className="h-11 min-w-0 flex-1 bg-transparent px-3 text-sm outline-none"
                />
              </div>
            </Field>
            <Field id="headline" label="Headline">
              <Input id="headline" value={form.headline} onChange={(e) => set("headline", e.target.value)} placeholder="e.g. IB DP Maths & Physics specialist · 10+ yrs" className={inputCls} />
            </Field>
            <Field id="bio" label="Professional biography (short, shown on your tutor card)">
              <textarea id="bio" value={form.bio} onChange={(e) => set("bio", e.target.value)} maxLength={600} className={cn(textareaCls, "min-h-24")} placeholder="One or two lines about how you help students." />
            </Field>
            <Field id="about" label="About (long, shown on your profile page)">
              <textarea id="about" value={form.about} onChange={(e) => set("about", e.target.value)} maxLength={5000} className={cn(textareaCls, "min-h-36")} placeholder="Your experience, the students you help and the results they get." />
            </Field>
            {/* Same count as the sitemap gate in getPublicTutorProfileSitemapEntries (35 words). */}
            <div className={`rounded-xl border px-4 py-3 text-sm ${profileWords >= 35 ? "border-emerald-500/30 bg-emerald-500/5 text-emerald-800 dark:text-emerald-300" : "border-amber-400/40 bg-amber-400/10 text-amber-900 dark:text-amber-200"}`}>
              <div className="flex items-center justify-between gap-3 font-semibold">
                <span>{profileWords >= 35 ? "Your profile text is long enough to appear on Google." : "Write a little more so your profile can appear on Google."}</span>
                <span className="shrink-0 tabular-nums">{Math.min(profileWords, 35)}/35 words</span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
                <div className="h-full rounded-full bg-current transition-all" style={{ width: `${Math.min(100, (profileWords / 35) * 100)}%` }} />
              </div>
            </div>
          </div>
        </Section>

        <Section step={4} title="Curriculum & subjects" description="Choose what you teach, then search and pick your subjects.">
          <div className="space-y-5">
            <div className="flex flex-wrap gap-2">
              {([["ib", "IB"], ["igcse", "IGCSE / Cambridge"]] as const).map(([key, label]) => (
                <label key={key} className={`cursor-pointer rounded-full border px-5 py-2 text-sm font-bold transition-colors ${curricula[key] ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-primary/50"}`}>
                  <input type="checkbox" className="sr-only" checked={curricula[key]} onChange={(e) => setCurricula((c) => ({ ...c, [key]: e.target.checked }))} />
                  {label}
                </label>
              ))}
            </div>

            {curricula.ib && (
              <div className="space-y-4 rounded-xl border border-border/60 p-4">
                <div className="space-y-1.5">
                  <span className="text-xs font-medium">IB programmes</span>
                  <Chips options={PROGRAMMES} value={form.ibProgrammes} onChange={(v) => set("ibProgrammes", v)} />
                </div>
                <div className="space-y-1.5">
                  <span className="text-xs font-medium">IB subjects *</span>
                  <SubjectPicker idPrefix="ib" searchPlaceholder="Search IB subjects, e.g. Physics" groups={IB_SUBJECT_GROUPS} value={form.ibSubjects} onChange={(v) => set("ibSubjects", v)} />
                </div>
              </div>
            )}

            {curricula.igcse && (
              <div className="space-y-1.5 rounded-xl border border-border/60 p-4">
                <span className="text-xs font-medium">IGCSE subjects *</span>
                <SubjectPicker idPrefix="igcse" searchPlaceholder="Search IGCSE subjects, e.g. Chemistry" groups={IGCSE_SUBJECT_GROUPS} value={form.igcseSubjects} onChange={(v) => set("igcseSubjects", v)} />
              </div>
            )}
          </div>
        </Section>

        <Section step={5} title="Experience, fees & availability">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="exp" label="Experience (years)">
              <Input id="exp" type="number" min="0" max="60" value={experience} onChange={(e) => setExperience(e.target.value)} className={inputCls} />
            </Field>
            <Field id="rate" label="Hourly rate">
              <div className="flex gap-2">
                <select aria-label="Currency" value={form.currency} onChange={(e) => set("currency", e.target.value as "INR" | "USD")} className={cn(selectCls, "w-28 shrink-0")}>
                  <option value="INR">₹ INR</option>
                  <option value="USD">$ USD</option>
                </select>
                <Input id="rate" type="number" min="0" value={rate} onChange={(e) => setRate(e.target.value)} placeholder="1500" className={cn(inputCls, "min-w-0 flex-1")} />
              </div>
            </Field>
            <Field id="successRate" label="Success rate" hint="Only if you can back it up, e.g. 95% of students improved a grade.">
              <Input id="successRate" value={form.successRate} onChange={(e) => set("successRate", e.target.value)} placeholder="e.g. 95%" maxLength={40} className={inputCls} />
            </Field>
            <Field id="responseTime" label="Response time">
              <Input id="responseTime" value={form.responseTime} onChange={(e) => set("responseTime", e.target.value)} placeholder="e.g. Within 2 hours" className={inputCls} />
            </Field>
            <Field id="availability" label="Availability" className="sm:col-span-2">
              <Input id="availability" value={form.availabilityText} onChange={(e) => set("availabilityText", e.target.value)} placeholder="e.g. Mon–Sat, 4–9 pm IST" className={inputCls} />
            </Field>
          </div>
        </Section>

        <Section step={6} title="Teaching style">
          <div className="space-y-5">
            <div className="space-y-1.5">
              <span className="text-xs font-medium">Teaching modes *</span>
              <Chips options={MODES} value={form.teachingModes} onChange={(v) => set("teachingModes", v)} />
            </div>
            <Field id="methodology" label="Teaching methodology">
              <textarea id="methodology" value={form.methodology} onChange={(e) => set("methodology", e.target.value)} maxLength={4000} className={cn(textareaCls, "min-h-28")} placeholder="How you structure lessons, practice and feedback." />
            </Field>
            <div className="space-y-1.5">
              <span className="text-xs font-medium">Specialties (shown as badges on your card)</span>
              <SubjectPicker idPrefix="tags" searchPlaceholder="Search specialties" groups={SPECIALTY_GROUPS} value={form.tags} onChange={(v) => set("tags", v.slice(0, 12))} />
            </div>
            <div className="space-y-1.5">
              <span className="text-xs font-medium">Languages you teach in</span>
              <SubjectPicker idPrefix="languages" searchPlaceholder="Search languages" groups={LANGUAGE_GROUPS} value={form.languages} onChange={(v) => set("languages", v.slice(0, 10))} />
            </div>
          </div>
        </Section>

        <Section step={7} title="Location & coverage">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="country" label="Country *">
              <select
                id="country"
                value={form.country}
                onChange={(e) => {
                  const c = getCountryByCode(e.target.value);
                  setForm((f) => ({ ...f, country: e.target.value, countryName: c?.name ?? e.target.value.toUpperCase(), state: "", city: "" }));
                }}
                className={selectCls}
              >
                {COUNTRIES.map((c) => (
                  <option key={c.code} value={c.code}>{c.name}</option>
                ))}
              </select>
            </Field>
            <Field id="state" label="State / region *">
              <Input id="state" list="state-options" value={form.state} onChange={(e) => set("state", e.target.value)} placeholder="Haryana" className={inputCls} required minLength={2} />
              <datalist id="state-options">
                {[...new Set(citySuggestions.map((c) => c.state))].map((st) => (
                  <option key={st} value={st} />
                ))}
              </datalist>
            </Field>
            <Field id="city" label="City *" hint="Pick from the list when your city is there.">
              <Input
                id="city"
                list="city-options"
                value={form.city}
                onChange={(e) => {
                  const city = e.target.value;
                  const known = citySuggestions.find((c) => c.city.toLowerCase() === city.trim().toLowerCase());
                  setForm((f) => ({ ...f, city, ...(known ? { state: known.state } : {}) }));
                }}
                placeholder="Gurugram"
                className={inputCls}
                required
                minLength={2}
              />
              <datalist id="city-options">
                {citySuggestions.map((c) => (
                  <option key={`${c.city}-${c.state}`} value={c.city}>{c.state}</option>
                ))}
              </datalist>
            </Field>
            <Field id="areas" label="Areas (comma separated)">
              {listInput("areas", "Golf Course Road, DLF Phase 5")}
            </Field>
            <Field id="sectors" label="Sectors (comma separated)">
              {listInput("sectors", "Sector 54, Sector 57")}
            </Field>
            <Field id="societies" label="Societies (comma separated)">
              {listInput("societies", "DLF The Crest, M3M Golf Estate")}
            </Field>
            <Field id="travelNotes" label="Travel notes (home tutoring)" className="sm:col-span-2">
              <Input id="travelNotes" value={form.travelNotes} onChange={(e) => set("travelNotes", e.target.value)} placeholder="e.g. Travels up to 8 km from Sector 56" className={inputCls} />
            </Field>
            <div className="space-y-2 sm:col-span-2">
              <span className="text-xs font-medium">Countries covered (online lessons, shown on your card)</span>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked={allCountries} onChange={(e) => set("countriesCovered", e.target.checked ? [ALL_COUNTRIES] : [])} className="size-4 accent-primary" />
                All countries (worldwide online)
              </label>
              {!allCountries && (
                <>
                  <div className="relative">
                    <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                    {/* Native datalist: type to search, pick a match and it is added. */}
                    <Input
                      aria-label="Search and add a country"
                      list="country-options"
                      value={countryQuery}
                      onChange={(e) => {
                        const match = COUNTRIES.find((c) => c.name.toLowerCase() === e.target.value.trim().toLowerCase());
                        if (match && !form.countriesCovered.includes(match.code)) {
                          set("countriesCovered", [...form.countriesCovered, match.code]);
                          setCountryQuery("");
                        } else {
                          setCountryQuery(e.target.value);
                        }
                      }}
                      placeholder="Search a country, e.g. Singapore"
                      className={cn(inputCls, "pl-9")}
                    />
                    <datalist id="country-options">
                      {COUNTRIES.filter((c) => !form.countriesCovered.includes(c.code)).map((c) => (
                        <option key={c.code} value={c.name} />
                      ))}
                    </datalist>
                  </div>
                  {form.countriesCovered.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {form.countriesCovered.map((code) => (
                        <span key={code} className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                          {getCountryByCode(code)?.name ?? code.toUpperCase()}
                          <button type="button" aria-label="Remove" onClick={() => set("countriesCovered", form.countriesCovered.filter((c) => c !== code))}>
                            <X className="size-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </Section>

        <Section step={8} title="Education & qualifications">
          <div className="space-y-5">
            <Field id="education" label="Education background" hint="One qualification per line. Each line shows as its own card at the top of your profile.">
              <textarea id="education" value={form.education} onChange={(e) => set("education", e.target.value)} maxLength={2000} className={cn(textareaCls, "min-h-24")} placeholder={"M.Sc. Physics, Delhi University\nB.Ed., Jamia Millia Islamia"} />
            </Field>
            <div className="space-y-3">
              <p className="text-xs font-medium">Qualifications & background (cards on your profile)</p>
              {form.qualifications.map((q, i) => (
                <div key={i} className="grid gap-2 rounded-xl border border-border/60 p-3 sm:grid-cols-[1fr_auto]">
                  <div className="space-y-2">
                    <Input aria-label="Qualification title" value={q.title} onChange={(e) => updateRow("qualifications", i, "title", e.target.value)} placeholder="e.g. IB Mathematics Examiner" className={inputCls} />
                    <textarea aria-label="Qualification description" value={q.description} maxLength={600} onChange={(e) => updateRow("qualifications", i, "description", e.target.value)} placeholder="One or two lines of detail (optional)" className={cn(textareaCls, "min-h-16")} />
                  </div>
                  <Button type="button" variant="ghost" aria-label="Remove qualification" onClick={() => removeRow("qualifications", i)} className="h-10 text-muted-foreground hover:text-destructive">
                    <Trash2 className="size-4" />
                  </Button>
                </div>
              ))}
              {form.qualifications.length < 10 && (
                <Button type="button" variant="outline" onClick={() => set("qualifications", [...form.qualifications, { title: "", description: "" }])} className="h-10 gap-2 rounded-xl">
                  <Plus className="size-4" /> Add qualification
                </Button>
              )}
            </div>
          </div>
        </Section>

        <Section step={9} title="FAQs" description="Questions parents and students often ask you. Shown on your profile page.">
          <div className="space-y-3">
            {form.faqs.map((f, i) => (
              <div key={i} className="grid gap-2 rounded-xl border border-border/60 p-3 sm:grid-cols-[1fr_auto]">
                <div className="space-y-2">
                  <Input aria-label="Question" value={f.question} onChange={(e) => updateRow("faqs", i, "question", e.target.value)} placeholder="e.g. Do you help with the Maths IA?" className={inputCls} />
                  <textarea aria-label="Answer" value={f.answer} maxLength={2000} onChange={(e) => updateRow("faqs", i, "answer", e.target.value)} placeholder="Your answer" className={cn(textareaCls, "min-h-16")} />
                </div>
                <Button type="button" variant="ghost" aria-label="Remove FAQ" onClick={() => removeRow("faqs", i)} className="h-10 text-muted-foreground hover:text-destructive">
                  <Trash2 className="size-4" />
                </Button>
              </div>
            ))}
            {form.faqs.length < 12 && (
              <Button type="button" variant="outline" onClick={() => set("faqs", [...form.faqs, { question: "", answer: "" }])} className="h-10 gap-2 rounded-xl">
                <Plus className="size-4" /> Add FAQ
              </Button>
            )}
          </div>
        </Section>

        <div className="flex flex-col gap-2 border-t border-border/50 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">Fields marked * are required.</p>
          <Button type="submit" disabled={saving || uploading} className="h-12 w-full rounded-xl font-bold sm:w-auto sm:px-8">
            {saving ? "Saving…" : isNew ? "Create profile & submit for review" : "Save changes"}
          </Button>
        </div>
      </form>
    </div>
  );
}
