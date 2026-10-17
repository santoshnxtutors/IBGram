"use client";

export type Tutor = {
  id: string; // Tutor id
  slug: string;
  name: string;
  headline: string | null;
  subjects: string[];
  avatarUrl: string | null;
  rating: number | null;
  experienceYears: number | null;
  city: string | null;
  areas: string[];
  modes: Array<"online" | "home" | "hybrid">;
};

export type BookingParty = { id: string; name: string; avatarUrl: string | null };

export type Booking = {
  id: string;
  subject: string;
  scheduledAt: string;
  status: "requested" | "confirmed" | "completed" | "cancelled";
  notes: string | null;
  /** Google Meet URL, present once the tutor has accepted. */
  meetLink: string | null;
  createdAt: string;
  viewerRole: "student" | "tutor";
  student: BookingParty;
  tutor: BookingParty;
};

async function api<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`/api/backend/${path}`, {
    credentials: "include",
    cache: "no-store",
    headers: { "Content-Type": "application/json" },
    ...init,
  });
  const body = await res.json().catch(() => null);
  if (!res.ok || body?.success === false) {
    throw new Error(body?.error?.message ?? body?.error ?? "Something went wrong. Please try again.");
  }
  return body.data as T;
}

export function fetchTutors(): Promise<{ tutors: Tutor[] }> {
  return api<{ tutors: Tutor[] }>("tutors/");
}

export type DemoRequest = {
  id: string;
  subject: string;
  preferredAt: string;
  notes: string | null;
  status: "new" | "contacted" | "scheduled" | "completed" | "cancelled";
  createdAt: string;
  demoBookingId: string | null;
  demoBookingStatus: Booking["status"] | null;
  tutor: { id: string; slug: string; displayName: string; headline: string | null; avatarUrl: string | null };
};

/** The signed-in student's demo requests (every "Book a Demo", for any tutor). */
export function fetchMyDemoRequests(): Promise<{ requests: DemoRequest[] }> {
  return api<{ requests: DemoRequest[] }>("bookings/requests/");
}

export function fetchMyBookings(): Promise<{ bookings: Booking[] }> {
  return api<{ bookings: Booking[] }>("bookings/");
}

export function fetchBooking(id: string): Promise<{ booking: Booking }> {
  return api<{ booking: Booking }>(`bookings/${id}/`);
}

export function createBooking(input: {
  tutorId: string;
  subject: string;
  scheduledAt: string;
  notes?: string;
}): Promise<{ booking: Booking | null }> {
  // booking is null when the tutor has no login account: the request went to the admin team instead.
  return api<{ booking: Booking | null }>("bookings/", { method: "POST", body: JSON.stringify(input) });
}

export function updateBooking(id: string, status: Booking["status"]): Promise<{ booking: Booking }> {
  return api<{ booking: Booking }>(`bookings/${id}/`, { method: "PATCH", body: JSON.stringify({ status }) });
}
