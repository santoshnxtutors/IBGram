import type { Metadata } from "next";
import { JsonLd } from "@/components/seo-city/JsonLd";
import { LegalDocument, type LegalSection } from "@/components/legal/LegalDocument";
import { absoluteUrl } from "@/lib/seo/slug-utils";
import { CONTACT } from "@/lib/contact";

const pageUrl = absoluteUrl("/terms-and-conditions/");
const ogImage = absoluteUrl("/images/ib-gram-city-og.svg");

const EFFECTIVE_DATE = "1 January 2026";
const LAST_UPDATED = "1 January 2026";

export const metadata: Metadata = {
  title: "Terms & Conditions — Using the IB Gram Tutoring Platform | IB Gram",
  description:
    "The terms that apply when you use IB Gram to find IB, IGCSE, A Level or AP tutors: what our tutor matching service does and does not promise, accounts and parental consent, fees and refunds, tutor relationships, acceptable use, liability and governing law.",
  keywords: [
    "IB Gram terms and conditions",
    "tutoring platform terms of service",
    "IB tutor booking terms",
    "IGCSE tutoring agreement",
    "online tutoring refund policy",
    "tutor matching terms",
  ],
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: pageUrl,
    siteName: "IB Gram",
    title: "Terms & Conditions — Using the IB Gram Tutoring Platform",
    description:
      "What IB Gram does, what it does not promise, how tutor introductions and payments work, and the rules that apply to everyone using the platform.",
    images: [{ url: ogImage, alt: "IB Gram terms and conditions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IB Gram Terms & Conditions",
    description:
      "What our tutor matching service does, how payments work, and the rules that apply to everyone using it.",
    images: [ogImage],
  },
};

const sections: LegalSection[] = [
  {
    id: "agreement",
    heading: "The agreement",
    body: [
      "These terms apply whenever you browse ibgram.com, make an enquiry, create an account, or take a tutoring session arranged through us. By doing any of those things you accept them. If you do not accept them, please do not use the platform.",
      `IB Gram is an independent tutoring platform operated from ${CONTACT.addressCity}, ${CONTACT.addressState}, India. "We", "us" and "IB Gram" mean IB Gram. "You" means the parent, guardian, student or tutor using the platform.`,
      "We have kept these terms short and readable on purpose. Nothing here is designed to catch you out.",
    ],
  },
  {
    id: "what-we-do",
    heading: "What IB Gram does — and what it does not do",
    body: [
      "IB Gram matches families with tutors. You tell us the curriculum, subject, level, schedule and what the student needs; we shortlist tutors who fit and introduce you to them.",
      "It is important to be clear about the limits of that:",
      [
        "We are a matching and introduction platform. We are not a school, an examination board, a university admissions body or an accreditation authority.",
        "Tutors are independent professionals. They are not our employees, agents or partners, and they retain control over how they teach.",
        "We check profiles, qualifications and teaching background as carefully as we reasonably can, but a verification is a check on stated credentials — not a personal guarantee of every session's outcome.",
        "Tutor availability changes. A subject, level, city or time slot listed on the site is an indication of what we typically cover, not a promise that it is available right now.",
      ],
      "If we cannot find a genuinely suitable tutor for a requirement, we will tell you that plainly rather than sending an unsuitable one.",
    ],
  },
  {
    id: "eligibility",
    heading: "Who may use the platform",
    body: [
      "You must be 18 or older to make an enquiry, create an account or enter into any paid arrangement with us. Students under 18 may take lessons, but the enquiry, the account and the payment must be made and supervised by a parent or guardian.",
      "By making an enquiry on behalf of a student, you confirm that you are that student's parent or legal guardian, or that you have their guardian's permission to do so.",
    ],
  },
  {
    id: "accounts",
    heading: "Accounts",
    body: [
      "If you create an account, keep your login details private and accurate. You are responsible for activity that happens under your account. Tell us immediately if you think someone else has access to it.",
      "We may suspend or close an account that is used to abuse the platform, harass a tutor or another user, submit false information, or bypass the platform to avoid fees.",
    ],
  },
  {
    id: "sessions-and-payments",
    heading: "Sessions, fees and payments",
    body: [
      "Tutoring rates depend on the subject, level, tutor experience, session length and mode. The applicable rate is confirmed to you in writing before lessons begin — it is never applied retrospectively.",
      [
        "Prices are quoted inclusive of applicable taxes unless we state otherwise at the time of quoting.",
        "Payment terms, session length and the schedule are agreed before the first paid session.",
        "Subscription plans renew on the stated cycle until you cancel. You can cancel at any time and the plan then runs to the end of the period you have already paid for.",
        "A trial or first session, where offered, is described accurately at the time it is offered. We do not attach hidden conditions to it.",
      ],
      "Rescheduling and cancellation: please give at least 24 hours' notice to move or cancel a session. Sessions cancelled with less notice, or missed without notice, may be charged, because the tutor has held that time. Genuine emergencies and illness are handled reasonably — talk to us.",
    ],
  },
  {
    id: "refunds",
    heading: "Refunds",
    body: [
      "If a session does not happen because of the tutor or because of a fault on our side, you are not charged for it, and if you have already paid, you are refunded or credited — your choice.",
      "If a first session simply does not feel right for the student, tell us within seven days and we will either arrange a different tutor or refund that session. We would rather rematch you than keep money for a poor fit.",
      "Refunds are made to the original payment method and normally reach you within 7 to 14 working days, depending on your bank or card issuer. Sessions already delivered as agreed are not refundable.",
    ],
  },
  {
    id: "working-with-tutors",
    heading: "Working with tutors",
    body: [
      "Once we introduce a tutor, the teaching relationship is between you and that tutor. We stay available throughout — to fix scheduling problems, deal with concerns, or rematch you if things are not working.",
      "We ask families and tutors to arrange sessions and payments through the platform. Taking an introduced tutor off-platform to avoid fees is unfair to us and removes your ability to rely on our support, rematching and complaint handling.",
      "Tutors agree to teach the subjects and levels they have claimed, to hold sessions at the agreed times, to behave professionally at all times with students, and to inform us promptly if they can no longer teach a student.",
    ],
  },
  {
    id: "acceptable-use",
    heading: "Acceptable use",
    body: [
      "Use the platform honestly and lawfully. Specifically, do not:",
      [
        "Submit false, misleading or impersonating information about yourself, a student or your credentials.",
        "Ask a tutor to complete an Internal Assessment, Extended Essay, coursework, portfolio or examination on a student's behalf. Tutors teach, explain and give feedback — they do not produce assessed work. Requests of this kind end the engagement.",
        "Harass, abuse, threaten or discriminate against anyone on the platform.",
        "Copy, scrape, republish or resell our content, tutor profiles or study materials without written permission.",
        "Attempt to disrupt, probe or gain unauthorised access to the site or its systems.",
      ],
      "We take academic honesty seriously because the boards do. Helping a student understand their subject and helping them cheat are not the same thing, and we only do the first.",
    ],
  },
  {
    id: "content-and-trademarks",
    heading: "Content, intellectual property and third-party names",
    body: [
      "The site, its text, design, study material and page structure belong to IB Gram or its licensors and are protected by copyright. You may read, print and share pages for personal, non-commercial use. Anything more requires our written permission.",
      "Material a tutor creates for a session remains that tutor's work; you may use it for the student's own study.",
      "IB Gram is an independent platform. We are not affiliated with, endorsed by, authorised by or otherwise connected to the International Baccalaureate Organization, Cambridge Assessment International Education, Pearson Edexcel, the College Board, or any school, university or examination board named anywhere on this website. Names such as IB, Diploma Programme, MYP, PYP, IGCSE, A Level and AP are used descriptively, to say which curriculum a tutor teaches. All trademarks belong to their respective owners.",
    ],
  },
  {
    id: "no-guarantees",
    heading: "Results and no guarantees",
    body: [
      "We will not promise you a grade, a points total, a predicted grade, an admission offer or a specific improvement. Nobody can honestly promise those, because outcomes depend on the student's own work, their school, the board's marking and circumstances outside anyone's control.",
      "What we do commit to is a suitable, verified tutor, a clear plan, and an honest conversation if something is not working. Reviews, testimonials and success stories on this site describe individual experiences and are not a prediction of your own result.",
    ],
  },
  {
    id: "liability",
    heading: "Liability",
    body: [
      "We provide the platform with reasonable care and skill. We do not exclude or limit liability for death or personal injury caused by our negligence, for fraud, or for anything else that cannot lawfully be limited.",
      "Beyond that, and to the extent the law allows, we are not liable for indirect or consequential loss, for examination or admission outcomes, or for the acts and omissions of an independent tutor during a session. Where we are liable, our total liability is limited to the fees you paid us in the three months before the event that caused the claim.",
      "The website is provided as it is. We work to keep it accurate and available, but we cannot guarantee uninterrupted access or that every page is free of error.",
    ],
  },
  {
    id: "suspension",
    heading: "Suspension and ending the arrangement",
    body: [
      "You can stop using the platform at any time, and you can ask us to close your account and delete your data as described in our Privacy Policy.",
      "We may suspend or end access where these terms are seriously or repeatedly broken, where a student's or tutor's safety is at risk, or where we are required to by law. Where it is fair and practical to do so, we will explain why first.",
    ],
  },
  {
    id: "law-and-contact",
    heading: "Governing law, changes and contact",
    body: [
      "These terms are governed by the laws of India, and the courts at Gurugram, Haryana have jurisdiction over any dispute. If you are a consumer in another country, this does not remove protections you have under your own local law.",
      "Before anything formal, please talk to us. Almost every problem we have seen was resolved by an email and a phone call.",
      "We may update these terms — for example, when we add a service or a law changes. The 'last updated' date at the top of this page always reflects the current version, and continuing to use the platform after a change means you accept the updated terms.",
      `Questions about these terms: email ${CONTACT.email}, call ${CONTACT.phoneDisplay}, or write to ${CONTACT.addressFull}.`,
    ],
  },
];

export default function TermsAndConditionsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: "Terms & Conditions", item: pageUrl },
        ],
      },
      {
        "@type": "WebPage",
        "@id": pageUrl,
        url: pageUrl,
        name: "Terms & Conditions — IB Gram",
        description:
          "The terms that apply when you use IB Gram to find IB, IGCSE, A Level or AP tutors, including fees, refunds, tutor relationships and liability.",
        inLanguage: "en",
        datePublished: "2026-01-01",
        dateModified: "2026-01-01",
        isPartOf: { "@id": "https://www.ibgram.com/#website" },
        publisher: { "@id": "https://www.ibgram.com/#organization" },
        about: { "@type": "Thing", name: "Terms of service" },
      },
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <LegalDocument
        eyebrow="Terms & Conditions"
        title="The terms of using IB Gram"
        intro="These are the rules that apply when you use IB Gram to find a tutor: what our service does, what it deliberately does not promise, how sessions and payments work, and what we expect from families and tutors alike."
        effectiveDate={EFFECTIVE_DATE}
        lastUpdated={LAST_UPDATED}
        sections={sections}
        footerNote="Short version: we introduce you to independent tutors who fit your requirement, we are clear about prices before you pay, we will rematch or refund a first session that does not fit, and we will never promise you a grade."
      />
    </>
  );
}
