import { Messages } from "@/components/dashboard/Messages";
import { HeaderPill, PageHeader } from "@/components/dashboard/ui";
import { MessageSquare } from "lucide-react";

export const dynamic = "force-dynamic";

export default function TutorMessagesPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow={<HeaderPill icon={MessageSquare}>Messages</HeaderPill>}
        title="Chat with your students"
        subtitle="Message your students, share files and voice notes, and start a Google Meet class in one tap. Use + to open a chat with any of your students."
      />
      <Messages />
    </div>
  );
}
