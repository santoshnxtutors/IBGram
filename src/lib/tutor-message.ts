import { CONTACT } from "@/lib/contact";

type TutorMessageDetails = {
  name: string;
  subject?: string;
  grade?: string;
};

export function buildTutorMessageUrl(tutor: TutorMessageDetails) {
  const subjectLine = [tutor.subject, tutor.grade ? `(${tutor.grade})` : ""].filter(Boolean).join(" ");
  const lines = [
    "Hi IBGram team,",
    `I'm interested in speaking about lessons with ${tutor.name}.`,
  ];

  if (subjectLine) lines.push(`Tutor profile: ${subjectLine}`);
  lines.push("Please share availability and next steps.");

  return `https://wa.me/${CONTACT.whatsappDigits}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export function openTutorMessage(tutor: TutorMessageDetails) {
  window.open(buildTutorMessageUrl(tutor), "_blank", "noopener,noreferrer");
}
