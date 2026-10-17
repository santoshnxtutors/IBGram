import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookingsPanel } from "@/components/dashboard/BookingsPanel";
import { HeaderPill, PageHeader } from "@/components/dashboard/ui";
import { CalendarDays, Star } from "lucide-react";

export const metadata: Metadata = { title: "Demo classes" };
export const dynamic = "force-dynamic";

export default function TutorSchedulePage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow={<HeaderPill icon={CalendarDays}>Demo classes</HeaderPill>}
        title="Requests & classes"
        subtitle="Accept a request to create the Google Meet link and open the chat. Mark a class done once you have taught it."
        actions={
          <Link href="/tutor/reviews">
            <Button className="h-11 gap-2 rounded-xl bg-white font-bold text-primary hover:bg-white/90">
              <Star className="size-4" /> Ask for a review
            </Button>
          </Link>
        }
      />
      <BookingsPanel role="tutor" showPast title="All requests & classes" />
    </div>
  );
}
