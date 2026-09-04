import type { Metadata } from "next";
import { JsonLd } from "@/components/seo-city/JsonLd";
import { LegalDocument, type LegalSection } from "@/components/legal/LegalDocument";
import { absoluteUrl } from "@/lib/seo/slug-utils";
import { CONTACT } from "@/lib/contact";

const pageUrl = absoluteUrl("/privacy-policy/");
const ogImage = absoluteUrl("/images/ib-gram-city-og.svg");

const EFFECTIVE_DATE = "1 January 2026";
const LAST_UPDATED = "1 January 2026";

export const metadata: Metadata = {
  title: "Privacy Policy — How IB Gram Handles Your Data | IB Gram",
  description:
    "How IB Gram collects, uses, stores and protects the personal data of parents, students and tutors. Covers enquiry data, student information, cookies, retention periods, third-party processors and your rights under India's DPDP Act 2023 and the GDPR.",
  keywords: [
    "IB Gram privacy policy",
    "tutoring platform privacy policy",
    "student data protection",
    "DPDP Act 2023 tutoring",
    "GDPR tutoring platform",
    "IB tutor data privacy",
  ],
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: pageUrl,
    siteName: "IB Gram",
    title: "Privacy Policy — How IB Gram Handles Your Data",
    description:
      "Plain-English explanation of what IB Gram collects from parents, students and tutors, why we collect it, how long we keep it and how you can ask us to change or delete it.",
    images: [{ url: ogImage, alt: "IB Gram privacy policy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IB Gram Privacy Policy",
    description:
      "What we collect, why we collect it, how long we keep it, and how to ask us to delete it.",
    images: [ogImage],
  },
};

const sections: LegalSection[] = [
  {
    id: "who-we-are",
    heading: "Who we are",
    body: [
      "IB Gram is an independent tutoring platform that helps parents and students find IB, IGCSE, A Level and AP tutors for online, home and hybrid lessons. We are operated from Gurugram, Haryana, India, and we work with families in India and internationally.",
      `For anything in this policy, you can reach us at ${CONTACT.email} or ${CONTACT.phoneDisplay}. Our registered address is ${CONTACT.addressFull}.`,
      "This policy explains, in plain language, what we do with your information. If something here is unclear, write to us and we will explain it properly rather than pointing you back at the text.",
    ],
  },
  {
    id: "what-we-collect",
    heading: "What we collect",
    body: [
      "We try to collect only what we actually need to match a student with a suitable tutor. That falls into three groups.",
      "Information you give us directly, usually through an enquiry form, WhatsApp, email or a phone call:",
      [
        "Parent or guardian name, email address and phone number.",
        "The student's first name, year group, curriculum (PYP, MYP, DP, IGCSE, A Level, AP) and the subjects and levels they need help with.",
        "Practical requirements: city and time zone, preferred schedule, online or in-person, budget range, exam session and any deadlines.",
        "Context you choose to share about how the student is doing — weak areas, recent grades, learning preferences or support needs.",
        "Account details if you register: name, email address, password (stored only as a hash, never in readable form) and any subscription or billing reference.",
      ],
      "Information we collect automatically when you use the site:",
      [
        "Standard server and log data such as IP address, browser type, device type, referring page and the pages you visited.",
        "Cookie and analytics data used to understand which pages are useful and where the site is slow or broken.",
      ],
      "Information tutors give us when they apply to join, including their name, contact details, qualifications, teaching experience, subject and curriculum expertise, availability, rates and identity or credential documents used for verification.",
      "We do not ask for and do not want payment card numbers, government identity numbers, health records or any other sensitive information beyond what is described above. Please do not send them to us.",
    ],
  },
  {
    id: "why-we-use-it",
    heading: "Why we use it",
    body: [
      "Every piece of information above is used for a specific, limited purpose:",
      [
        "To understand a requirement and shortlist tutors who genuinely fit the subject, level, schedule and mode.",
        "To introduce a shortlisted tutor to you, and to share with that tutor only what they need in order to prepare — typically the subject, level, timing and learning need.",
        "To reply to your enquiry, arrange a first session and follow up on how it went.",
        "To run accounts, subscriptions and billing where you have signed up for a paid plan.",
        "To verify tutor profiles and act on complaints or safety concerns.",
        "To keep the website secure, diagnose faults and improve the pages people actually use.",
        "To send service messages about your enquiry or account. We send marketing email only if you have opted in, and every such email carries an unsubscribe link.",
      ],
      "Where the law requires a stated legal basis, we rely on your consent (enquiries and marketing), the performance of a contract (accounts, subscriptions and lessons arranged through us), our legitimate interests (site security, fraud prevention, service improvement) and legal obligations (tax and accounting records).",
    ],
  },
  {
    id: "students-and-children",
    heading: "Students, children and parental consent",
    body: [
      "Most of the students we support are under 18, so we treat student information carefully and deliberately.",
      [
        "Enquiries must be made by a parent, guardian or other responsible adult. We do not knowingly accept enquiries directly from a child without a parent involved.",
        "We ask for the minimum about a student: usually a first name, year group, curriculum, subjects and what they are finding difficult.",
        "We do not build advertising profiles of students and we do not sell or rent student information to anyone, in any form, for any price.",
        "A tutor receives only what they need to teach the student well. They do not receive your full enquiry history.",
      ],
      "If you believe a child's information has reached us without a parent's involvement, tell us and we will delete it.",
    ],
  },
  {
    id: "who-we-share-with",
    heading: "Who we share information with",
    body: [
      "We share personal data only in these situations:",
      [
        "Tutors: the relevant part of a requirement, shared with the specific tutors you are being introduced to, so they can prepare properly.",
        "Service providers who run parts of our operation on our behalf — website hosting, database hosting, email delivery, analytics and payment processing. They may only use the data to provide that service to us.",
        "Professional advisers such as accountants or lawyers, where necessary.",
        "Authorities, where we are legally required to disclose information or where disclosure is needed to protect someone's safety.",
      ],
      "We do not sell personal data. We do not trade contact lists. We do not pass your details to unrelated tutoring companies, coaching centres or lead-generation networks.",
    ],
  },
  {
    id: "cookies",
    heading: "Cookies and analytics",
    body: [
      "The site uses a small number of cookies and similar technologies. Some are strictly necessary — they keep you signed in, remember your preferences and protect forms against abuse. Others are analytics cookies that tell us, in aggregate, which pages are read, which are ignored and where people leave.",
      "You can block or delete cookies through your browser settings at any time. Strictly necessary cookies cannot be switched off without breaking parts of the site, such as signing in. Analytics can be blocked without affecting your ability to use the site or make an enquiry.",
    ],
  },
  {
    id: "retention",
    heading: "How long we keep it",
    body: [
      "We keep information only as long as it is useful for the purpose it was collected for:",
      [
        "Enquiries that do not lead to tutoring: up to 24 months, so we can pick up the conversation if you return, then deleted.",
        "Active families and accounts: for as long as the account or tutoring relationship is live, plus 24 months.",
        "Billing and tax records: as long as Indian tax and accounting law requires, typically eight years.",
        "Tutor applications and verification records: for the duration of the tutor's association with us, plus 24 months.",
        "Website analytics: in aggregated, non-identifying form.",
      ],
      "You can ask us to delete your information sooner. We will do so unless we are legally required to keep a specific record.",
    ],
  },
  {
    id: "your-rights",
    heading: "Your rights",
    body: [
      "Whatever country you are in, you can ask us to:",
      [
        "Tell you what personal data we hold about you and your child.",
        "Correct anything that is wrong or out of date.",
        "Delete your information, subject to records we must keep by law.",
        "Stop using your information for a particular purpose, including marketing.",
        "Send you a copy of the information you gave us, in a portable format.",
        "Withdraw consent you previously gave, at any time, without having to justify it.",
      ],
      "If you are in India, these rights sit alongside the Digital Personal Data Protection Act, 2023. If you are in the United Kingdom or the European Economic Area, the UK GDPR and EU GDPR apply and you also have the right to complain to your local supervisory authority.",
      `To exercise any of these, email ${CONTACT.email} with the request and enough detail for us to find your records. We respond within 30 days, and usually much sooner.`,
    ],
  },
  {
    id: "security-and-transfers",
    heading: "Security and international transfers",
    body: [
      "We protect information with encrypted connections (HTTPS) across the site, hashed passwords, access limited to the people who need it, and hosting with established providers who maintain their own security programmes.",
      "No system is perfectly secure, and we will not pretend otherwise. If a breach ever affects your personal data in a way that creates a real risk to you, we will tell you and the relevant authority promptly and explain what happened.",
      "Because we serve families worldwide and use international hosting and email providers, your information may be stored or processed outside your own country, including in India, the European Union and the United States. Wherever it goes, it stays covered by this policy and by contractual protections with our providers.",
    ],
  },
  {
    id: "changes-and-contact",
    heading: "Changes and how to reach us",
    body: [
      "When we change this policy we update the 'last updated' date at the top of this page. If a change materially affects how we use your information, we will say so clearly rather than quietly editing the text.",
      `Questions, corrections, deletion requests or complaints: email ${CONTACT.email}, call ${CONTACT.phoneDisplay}, or write to us at ${CONTACT.addressFull}. A real person reads these, and you will get a real answer.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: "Privacy Policy", item: pageUrl },
        ],
      },
      {
        "@type": "WebPage",
        "@id": pageUrl,
        url: pageUrl,
        name: "Privacy Policy — IB Gram",
        description:
          "How IB Gram collects, uses, stores and protects the personal data of parents, students and tutors.",
        inLanguage: "en",
        datePublished: "2026-01-01",
        dateModified: "2026-01-01",
        isPartOf: { "@id": "https://www.ibgram.com/#website" },
        publisher: { "@id": "https://www.ibgram.com/#organization" },
        about: { "@type": "Thing", name: "Data protection and privacy" },
      },
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <LegalDocument
        eyebrow="Privacy Policy"
        title="How we handle your information"
        intro="This policy explains what IB Gram collects from parents, students and tutors, why we collect it, who else ever sees it and how you can have it corrected or deleted. It is written to be read, not to be skipped."
        effectiveDate={EFFECTIVE_DATE}
        lastUpdated={LAST_UPDATED}
        sections={sections}
        footerNote="Short version: we collect what is needed to match a student with the right tutor, we share it only with the tutors you are being introduced to and the services that run our website, we never sell it, and you can ask us to delete it at any time."
      />
    </>
  );
}
