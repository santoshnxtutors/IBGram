import { Messages } from "@/components/dashboard/Messages";
import { HeaderPill, PageHeader } from "@/components/dashboard/ui";
import { MessageSquare } from "lucide-react";

export const dynamic = "force-dynamic";

export default function MessagesPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow={<HeaderPill icon={MessageSquare}>Messages</HeaderPill>}
        title="Chat with your tutor"
        subtitle="Send messages, photos, files and voice notes. Chat opens when a demo is confirmed and stays open once you have booked a tutor."
      />
      <Messages />
    </div>
  );
}
