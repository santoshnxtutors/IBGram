"use client";

export type TutorProfileStatus = "none" | "pending" | "approved" | "rejected";

export type TeachingMode = "online" | "home" | "hybrid";
export type IbProgramme = "PYP" | "MYP" | "DP";

export type TutorProfileInput = {
  displayName: string;
  phone: string;
  email: string;
  headline: string;
  education: string;
  successRate: string;
  avatarUrl: string | null;
  tags: string[];
  languages: string[];
  ibSubjects: string[];
  igcseSubjects: string[];
  ibProgrammes: IbProgramme[];
  experienceYears: number | null;
  hourlyRate: number | null;
  currency: "INR" | "USD";
  responseTime: string;
  availabilityText: string;
  methodology: string;
  city: string;
  areas: string[];
  sectors: string[];
  societies: string[];
  travelNotes: string;
  /** Public link: ibgram.com/tutor-profile/<slug>/ (empty = keep current / derive from name). */
  slug: string;
  /** ISO alpha-2, lowercase. */
  country: string;
  countryName: string;
  state: string;
  teachingModes: TeachingMode[];
  countriesCovered: string[];
  qualifications: Array<{ title: string; description: string }>;
  faqs: Array<{ question: string; answer: string }>;
  bio: string;
  about: string;
};

export type TutorProfileView = {
  status: TutorProfileStatus;
  profile: TutorProfileInput | null;
};

/** Upload a profile photo; returns its URL (also applied at once when the profile exists). */
export async function uploadTutorPhoto(file: File): Promise<string> {
  const form = new FormData();
  form.append("photo", file);
  const res = await fetch("/api/profile/photo/", { method: "POST", body: form, credentials: "include" });
  const body = (await res.json().catch(() => null)) as { url?: string; error?: string } | null;
  if (!res.ok || !body?.url) throw new Error(body?.error ?? "Could not upload the photo.");
  return body.url;
}

/** fetch a backend JSON envelope ({ success, data, error }) and return `data`, throwing the error message. */
export async function call<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, {
    credentials: "include",
    cache: "no-store",
    headers: { "Content-Type": "application/json" },
    ...init,
  });
  const body = await res.json().catch(() => null);
  if (!res.ok || body?.success === false) {
    throw new Error(body?.error?.message ?? body?.error ?? "Something went wrong.");
  }
  return body.data as T;
}

export function fetchMyTutorProfile(): Promise<TutorProfileView> {
  return call<TutorProfileView>("/api/backend/tutor-profile/me/");
}

export async function saveMyTutorProfile(input: TutorProfileInput): Promise<TutorProfileView> {
  const view = await call<TutorProfileView>("/api/backend/tutor-profile/", { method: "PUT", body: JSON.stringify(input) });
  // Best effort: refresh the public tutor pages and sitemap so edits show at once.
  await fetch("/api/tutor/refresh/", { method: "POST", credentials: "include" }).catch(() => {});
  return view;
}

/** First password for a Google sign-up (no current password). */
export function setPassword(newPassword: string): Promise<unknown> {
  return call("/api/auth/set-password/", { method: "POST", body: JSON.stringify({ newPassword }) });
}

export function changePassword(currentPassword: string, newPassword: string): Promise<unknown> {
  return call("/api/auth/change-password/", {
    method: "POST",
    body: JSON.stringify({ currentPassword, newPassword }),
  });
}
