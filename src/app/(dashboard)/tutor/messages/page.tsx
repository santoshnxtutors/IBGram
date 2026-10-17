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
        subtitle="A thread opens when you accept a demo. It stays open once the student books you, and you can close it any time."
      />
      <Messages />
    </div>
  );
}
