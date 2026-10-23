import type { NextRequest } from "next/server";
import { getServerUser } from "@/lib/auth/server";
import { postAttachment } from "@/lib/chat/service";

export const dynamic = "force-dynamic";

/** Upload a photo, file or voice note straight into the thread. */
export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const user = await getServerUser();
  if (!user) return Response.json({ error: "Not signed in." }, { status: 401 });

  const form = await request.formData().catch(() => null);
  const file = form?.get("file");
  if (!(file instanceof File)) return Response.json({ error: "A file is required." }, { status: 400 });

  const caption = (form?.get("caption") as string | null)?.toString() ?? "";
  const replyToId = (form?.get("replyToId") as string | null)?.toString() || null;
  const result = await postAttachment(user.id, (await params).id, file, caption, replyToId);
  if ("error" in result) {
    const notFound = result.error === "NOT_FOUND";
    return Response.json({ error: notFound ? "Conversation not found." : result.error }, { status: notFound ? 404 : 400 });
  }
  return Response.json(result);
}
