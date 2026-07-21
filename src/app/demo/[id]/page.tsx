import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { DemoRoom } from "@/components/demo/DemoRoom";
import { getServerUser } from "@/lib/auth/server";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { robots: { index: false, follow: false } };

function backendUrl(): string {
  return (process.env.BACKEND_URL || `http://127.0.0.1:${process.env.BACKEND_PORT || "4000"}`).replace(/\/$/, "");
}

type Party = { id: string; name: string };
type Booking = {
  id: string;
  subject: string;
  viewerRole: "student" | "tutor";
  student: Party;
  tutor: Party;
};

export default async function DemoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const user = await getServerUser();
  if (!user) redirect("/login");

  // Gate: only the booking's student or tutor can open the room.
  const cookieHeader = (await cookies()).toString();
  let booking: Booking | null = null;
  try {
    const res = await fetch(`${backendUrl()}/api/bookings/${id}`, { headers: { cookie: cookieHeader }, cache: "no-store" });
    if (res.ok) {
      const body = await res.json().catch(() => null);
      booking = body?.data?.booking ?? null;
    }
  } catch {
    booking = null;
  }

  if (!booking) redirect("/student/tutors");

  const isTutor = booking.viewerRole === "tutor";
  const otherPartyName = isTutor ? booking.student.name : booking.tutor.name;
  const displayName = [user.firstName, user.lastName].filter(Boolean).join(" ") || user.email;

  return (
    <DemoRoom
      bookingId={booking.id}
      subject={booking.subject}
      displayName={displayName}
      otherPartyName={otherPartyName}
      backHref={isTutor ? "/tutor" : "/student/tutors"}
    />
  );
}
