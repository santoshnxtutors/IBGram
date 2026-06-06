import { permanentRedirect } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export default async function OldTutorReachPage({ params }: Props) {
  const { slug } = await params;
  permanentRedirect(`/tutor/${slug}/`);
}
