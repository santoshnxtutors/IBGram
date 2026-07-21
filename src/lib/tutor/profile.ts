"use client";

export type TutorProfileStatus = "none" | "pending" | "approved" | "rejected";

export type TutorProfileInput = {
  displayName: string;
  headline: string;
  bio: string;
  about: string;
  experienceYears: number | null;
  phone: string;
  subjects: string[];
};

export type TutorProfileView = {
  status: TutorProfileStatus;
  profile:
    | {
        displayName: string;
        headline: string | null;
        bio: string | null;
        about: string | null;
        experienceYears: number | null;
        phone: string | null;
        subjects: string[];
        slug: string;
      }
    | null;
};

async function call<T>(url: string, init?: RequestInit): Promise<T> {
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

export function saveMyTutorProfile(input: TutorProfileInput): Promise<TutorProfileView> {
  return call<TutorProfileView>("/api/backend/tutor-profile/", { method: "PUT", body: JSON.stringify(input) });
}

export function changePassword(currentPassword: string, newPassword: string): Promise<unknown> {
  return call("/api/auth/change-password/", {
    method: "POST",
    body: JSON.stringify({ currentPassword, newPassword }),
  });
}
