import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookingsPanel } from "@/components/dashboard/BookingsPanel";
import { HeaderPill, PageHeader } from "@/components/dashboard/ui";
import { CalendarDays, Search } from "lucide-react";

export const metadata: Metadata = { title: "My classes" };
export const dynamic = "force-dynamic";

export default function StudentSchedulePage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow={<HeaderPill icon={CalendarDays}>My classes</HeaderPill>}
        title="Your demo classes"
        subtitle="Every class you booked, newest first. The Google Meet link appears here as soon as your tutor accepts."
        actions={
          <Link href="/student/tutors">
            <Button className="h-11 gap-2 rounded-xl bg-white font-bold text-primary hover:bg-white/90">
              <Search className="size-4" /> Book another demo
            </Button>
          </Link>
        }
      />
      <BookingsPanel role="student" showPast title="All classes" />
    </div>
  );
}
