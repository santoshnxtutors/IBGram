"use client";

export type TutorPublicState = "pending" | "live" | "hidden" | "offline";

export type TutorOverview = {
  tutor: {
    id: string;
    slug: string;
    displayName: string;
    headline: string | null;
    avatarUrl: string | null;
    verified: boolean;
    approved: boolean;
    hidden: boolean;
    publicState: TutorPublicState;
    currency: string;
    hourlyRate: number | null;
  } | null;
  reviews: {
    rating: number | null;
    count: number;
    published: number;
    pending: number;
    items: Array<{
      id: string;
      authorName: string;
      authorRole: string | null;
      location: string | null;
      rating: number;
      quote: string;
      status: string;
      featured: boolean;
      createdAt: string;
    }>;
  };
  earnings: {
    currency: string;
    total: number;
    thisMonth: number;
    payments: Array<{
      id: string;
      orderId: string;
      amount: number;
      currency: string;
      customerName: string;
      note: string | null;
      paidAt: string | null;
    }>;
  };
};

const EMPTY: Omit<TutorOverview, "tutor"> = {
  reviews: { rating: null, count: 0, published: 0, pending: 0, items: [] },
  earnings: { currency: "INR", total: 0, thisMonth: 0, payments: [] },
};

/** Tutor dashboard data that is not in the bookings/chat APIs. Never throws. */
export async function fetchTutorOverview(): Promise<TutorOverview> {
  try {
    const res = await fetch("/api/tutor/overview/", { credentials: "include", cache: "no-store" });
    if (!res.ok) return { tutor: null, ...EMPTY };
    const body = (await res.json()) as Partial<TutorOverview>;
    return { tutor: body.tutor ?? null, reviews: body.reviews ?? EMPTY.reviews, earnings: body.earnings ?? EMPTY.earnings };
  } catch {
    return { tutor: null, ...EMPTY };
  }
}

/** Hide or show the public tutor profile. Throws with a readable message. */
export async function setTutorHidden(hidden: boolean): Promise<void> {
  const res = await fetch("/api/tutor/visibility/", {
    method: "POST",
    credentials: "include",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ hidden }),
  });
  const body = (await res.json().catch(() => null)) as { error?: string } | null;
  if (!res.ok) throw new Error(body?.error ?? "Could not update your profile visibility.");
}

export const money = (amount: number, currency: string) =>
  new Intl.NumberFormat(currency === "USD" ? "en-US" : "en-IN", {
    style: "currency",
    currency: currency || "INR",
    maximumFractionDigits: 0,
  }).format(amount);
