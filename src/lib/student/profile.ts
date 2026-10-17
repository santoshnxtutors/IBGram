"use client";

import { call } from "@/lib/tutor/profile";

export type LearningMode = "online" | "home" | "hybrid";

export type StudentProfileInput = {
  phone: string;
  parentName: string;
  curriculum: "IB" | "IGCSE";
  grade: string;
  school: string;
  subjects: string[];
  city: string;
  learningModes: LearningMode[];
  goals: string;
};

export type StudentProfileView = { profile: (StudentProfileInput & { status: string }) | null };

/** Upload a profile photo; returns its URL, already saved on the account. */
export async function uploadStudentPhoto(file: File): Promise<string> {
  const form = new FormData();
  form.append("photo", file);
  const res = await fetch("/api/profile/photo/", { method: "POST", body: form, credentials: "include" });
  const body = (await res.json().catch(() => null)) as { url?: string; error?: string } | null;
  if (!res.ok || !body?.url) throw new Error(body?.error ?? "Could not upload the photo.");
  return body.url;
}

export function fetchMyStudentProfile(): Promise<StudentProfileView> {
  return call<StudentProfileView>("/api/backend/student-profile/me/");
}

export function saveMyStudentProfile(input: StudentProfileInput): Promise<StudentProfileView> {
  return call<StudentProfileView>("/api/backend/student-profile/", { method: "PUT", body: JSON.stringify(input) });
}
