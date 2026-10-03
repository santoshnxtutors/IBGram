import type { Metadata } from "next";
import Link from "next/link";
import { CalendarCheck, Home, Monitor } from "lucide-react";
import { JsonLd } from "@/components/seo-city/JsonLd";
import { LegalDocument, type LegalSection } from "@/components/legal/LegalDocument";
import { absoluteUrl } from "@/lib/seo/slug-utils";
import { CONTACT } from "@/lib/contact";

const pageUrl = absoluteUrl("/tutor-policy/");
const ogImage = absoluteUrl("/images/ib-gram-city-og.svg");

const EFFECTIVE_DATE = "3 October 2026";
const LAST_UPDATED = "3 October 2026";

export const metadata: Metadata = {
  title: "Tutor Policy — Commission, Payouts and Tutor Protection | IB Gram",
  description:
    "How IB Gram pays tutors: home tuition is split 50-50 for the first month only, then 100% goes to the tutor. Online classes are 70% tutor, 30% platform fee. Paid monthly on the 1st, with tutor protection and safeguarding rules.",
  keywords: [
    "IB Gram tutor policy",
    "home tutor commission",
    "online tutor revenue share",
    "tutor payout policy India",
    "tutor protection guidelines",
  ],
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: pageUrl,
    siteName: "IB Gram",
    title: "IB Gram Tutor Policy — Commission, Payouts and Tutor Protection",
    description:
      "Home tuition: 50-50 for the first month, then 100% yours. Online: 70% yours. Paid monthly on the 1st.",
    images: [{ url: ogImage, alt: "IB Gram tutor policy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IB Gram Tutor Policy",
    description: "Home tuition: 50-50 for the first month, then 100% yours. Online: 70% yours. Paid monthly on the 1st.",
    images: [ogImage],
  },
};

const sections: LegalSection[] = [
  {
    id: "who-it-covers",
    heading: "Who this policy covers",
    body: [
      "This policy applies to every tutor who teaches a student introduced by IB Gram, whether the classes are at the student's home (offline) or online. It explains exactly how fees are shared, when you are paid, how we protect you, and what we expect from you in return.",
      "Tutors on IB Gram are independent professionals, not employees. You decide which students and schedules you take on. This policy sits alongside our Terms & Conditions and Privacy Policy.",
    ],
  },
  {
    id: "home-tuition",
    heading: "Home (offline) tuition: 50-50 for the first month, then 100% yours",
    body: [
      "For every new home-tuition student we introduce, the first month's fee is shared 50-50: half to you, half to IB Gram. That half is our one-time fee for finding the student and setting up the match.",
      "From the second month onwards, 100% of the fee is yours. IB Gram takes nothing from home tuition after the first month, for as long as you keep teaching that student.",
      [
        "The split is per student. Each new student you take on has their own first month at 50-50.",
        "Example: a home-tuition fee of ₹16,000 a month. Month 1: you receive ₹8,000 and IB Gram keeps ₹8,000. Month 2 onwards: you receive the full ₹16,000 every month.",
        "Over six months with that student you earn ₹88,000 of the ₹96,000 the family pays, which is about 92%.",
        "If a student stops during the first month, the 50-50 split applies only to the fees actually paid for classes that took place.",
      ],
    ],
  },
  {
    id: "online-classes",
    heading: "Online classes: 70% to you, 30% platform fee",
    body: [
      "For online classes, 70% of every fee is yours and 30% is IB Gram's platform fee. This split stays the same every month, for as long as you teach the student online.",
      "The 30% platform fee covers finding and matching students, arranging demo classes, collecting fees from families and following up on late payments, scheduling support, and finding you a replacement student if one stops.",
      [
        "Example: ₹1,200 per class and 12 classes in a month comes to ₹14,400. You receive ₹10,080 and IB Gram keeps ₹4,320.",
        "If a student moves from online to home tuition (or back), the split for that mode applies from the month the change happens.",
      ],
    ],
  },
  {
    id: "payouts",
    heading: "When and how you get paid: monthly, on the 1st",
    body: [
      "We pay once a month, not daily and not per class. All fees for classes held in a calendar month are paid to you on the 1st of the following month.",
      [
        "Fees for September are deposited on 1 October. Fees for October are deposited on 1 November, and so on.",
        "If the 1st falls on a Sunday or a bank holiday, the transfer goes out on the next working day.",
        "Your first payout is on the 1st of the month after you start. If you start on 15 September, you are paid on 1 October for classes from 15 to 30 September.",
        "Payouts go by bank transfer or UPI to the account you give us. Keep these details up to date so a payout is never delayed.",
        "Each payout comes with a statement listing every student, the classes held, the fee, the split and the amount paid to you.",
      ],
      "Payouts cover fees received from families for classes that actually took place. If a family pays late, that amount is added to your next payout as soon as we receive it. IB Gram collects the fees and does the chasing, so you never have to ask a family for money.",
    ],
  },
  {
    id: "tutor-protection",
    heading: "Tutor protection: how we look after you",
    body: [
      "We follow clear tutor protection guidelines so that teaching with IB Gram is fair, safe and predictable:",
      [
        "Locked split. The split that applies when a student starts is the split for that student. We will never cut it for an existing student.",
        "Notice of changes. Any change to this policy is announced at least 30 days in advance by WhatsApp or email, and applies only to students who start after the change.",
        "Transparent statements. You can question any line on your monthly statement and we will go through the class record with you.",
        "Your data. Your phone number, CV, ID and bank details are used only to verify you, match you and pay you, as set out in our Privacy Policy and the Digital Personal Data Protection Act, 2023. We never sell your data.",
        "Respect and safety. If a family or student is abusive, harasses you or discriminates against you, tell us. We step in, and you are free to stop teaching that student.",
        "Your right to say no. You can decline any student, location, timing or subject without penalty, including home-tuition locations you are not comfortable travelling to.",
        "A fair hearing. Before any action against your account, we tell you the concern and listen to your side, except where a student's immediate safety requires us to act first.",
      ],
    ],
  },
  {
    id: "safeguarding",
    heading: "Student safeguarding: what we expect from you",
    body: [
      "Many of our students are under 18, so every tutor must follow these child protection rules:",
      [
        "Home tuition: teach in a common area of the home, with a parent, guardian or another adult in the house. Never teach a minor alone behind a closed door.",
        "Online classes: use the agreed platform, keep your camera on in a professional setting, and never record a class without the parent's consent.",
        "Communication: talk about classes through the parent or guardian, or in a chat that includes them. No private social media contact with students under 18.",
        "No gifts, loans, money or personal favours between you and a student.",
        "If you believe a student is at risk of harm, tell IB Gram straight away.",
      ],
      "A breach of these rules ends the engagement, and where the law requires it, including under the POCSO Act, 2012, we will report it to the authorities.",
    ],
  },
  {
    id: "professional-standards",
    heading: "Professional standards",
    body: [
      [
        "Teach only the subjects and levels you listed on your profile.",
        "Be on time. Give at least 24 hours' notice to reschedule. Classes cancelled by the tutor are not charged to the family, so they are not paid.",
        "Academic honesty: explain, teach and give feedback, but never write an Internal Assessment, Extended Essay, coursework or exam answer for a student.",
        "Keep IB Gram students on IB Gram. Do not move a student we introduced to a private arrangement or take fees from the family directly. Home tuition is already 100% yours from the second month, so there is no reason to. Doing so leads to removal from the platform.",
        "If you need to stop teaching a student, tell us as early as possible, ideally a week ahead, so we can arrange a smooth handover.",
      ],
    ],
  },
  {
    id: "tax",
    heading: "Tax and your status",
    body: [
      "As an independent professional, you are responsible for the income tax on your earnings. Your monthly statements give you a clear record for filing. Where the law requires us to deduct tax at source, we will deduct it and show it on your statement.",
    ],
  },
  {
    id: "contact",
    heading: "Questions and contact",
    body: [
      `For anything about this policy or your earnings, WhatsApp or call ${CONTACT.phoneDisplay}, or email ${CONTACT.email}.`,
      "The 'last updated' date at the top of this page always shows the current version.",
    ],
  },
];

const SUMMARY = [
  {
    icon: Home,
    label: "Home tuition",
    value: "50-50, then 100%",
    note: "First month's fee split 50-50. From month 2, every rupee is yours.",
  },
  {
    icon: Monitor,
    label: "Online classes",
    value: "70% yours",
    note: "30% platform fee covers students, fee collection and support.",
  },
  {
    icon: CalendarCheck,
    label: "Payouts",
    value: "Monthly, on the 1st",
    note: "September's fees are deposited on 1 October.",
  },
];

function PolicySummary() {
  return (
    <div className="mb-12 space-y-4">
      <div className="grid gap-4 md:grid-cols-3">
        {SUMMARY.map(({ icon: Icon, label, value, note }) => (
          <div key={label} className="rounded-2xl border border-border bg-card p-5">
            <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
              <Icon className="size-5" />
            </span>
            <p className="mt-3 text-xs font-black uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
            <p className="mt-1 text-2xl font-black text-foreground">{value}</p>
            <p className="mt-1 text-sm font-medium text-muted-foreground">{note}</p>
          </div>
        ))}
      </div>

      <div className="overflow-x-auto rounded-2xl border border-border bg-card">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead className="border-b border-border text-xs font-black uppercase tracking-[0.14em] text-muted-foreground">
            <tr>
              <th className="p-4">Mode</th>
              <th className="p-4">Month 1</th>
              <th className="p-4">Month 2 onwards</th>
              <th className="p-4">Paid on</th>
            </tr>
          </thead>
          <tbody className="font-medium text-foreground">
            <tr className="border-b border-border">
              <td className="p-4 font-bold">Home tuition</td>
              <td className="p-4">You 50% · IB Gram 50%</td>
              <td className="p-4 font-bold text-primary">You 100%</td>
              <td className="p-4">1st of next month</td>
            </tr>
            <tr>
              <td className="p-4 font-bold">Online classes</td>
              <td className="p-4">You 70% · IB Gram 30%</td>
              <td className="p-4">You 70% · IB Gram 30%</td>
              <td className="p-4">1st of next month</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-sm font-semibold text-muted-foreground">
        Want to teach with IB Gram?{" "}
        <Link href="/join-as-tutor/" className="text-primary hover:underline">
          Apply as a tutor
        </Link>
      </p>
    </div>
  );
}

export default function TutorPolicyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: "Tutor Policy", item: pageUrl },
        ],
      },
      {
        "@type": "WebPage",
        "@id": pageUrl,
        url: pageUrl,
        name: "Tutor Policy — IB Gram",
        description:
          "IB Gram's tutor commission, monthly payout schedule, tutor protection guidelines and student safeguarding rules.",
        inLanguage: "en",
        datePublished: "2026-10-03",
        dateModified: "2026-10-03",
        isPartOf: { "@id": "https://www.ibgram.com/#website" },
        publisher: { "@id": "https://www.ibgram.com/#organization" },
      },
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <LegalDocument
        eyebrow="Tutor Policy"
        title="How tutors earn and are protected at IB Gram"
        intro="Simple, written-down rules: what share of every fee is yours, when the money reaches you, how we protect you, and what we expect in return. No hidden deductions."
        effectiveDate={EFFECTIVE_DATE}
        lastUpdated={LAST_UPDATED}
        sections={sections}
        summary={<PolicySummary />}
        footerNote="Short version: home tuition is split 50-50 for the first month only, then 100% is yours. Online classes are 70% yours and 30% platform fee. You are paid once a month, on the 1st, for the month before: September's fees reach you on 1 October."
      />
    </>
  );
}
