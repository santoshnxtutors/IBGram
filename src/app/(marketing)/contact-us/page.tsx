import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  Globe,
  Headphones,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Shield,
} from "lucide-react";
import { JsonLd } from "@/components/seo-city/JsonLd";
import { SchoolDisclaimer } from "@/components/seo-city/SchoolDisclaimer";
import { CONTACT } from "@/lib/contact";
import { absoluteUrl } from "@/lib/seo/slug-utils";
import { ContactFormClient } from "./ContactFormClient";
import {
  contactAfterMessageSteps,
  contactBlogPicks,
  contactBriefChecklist,
  contactFaqs,
  contactIntroParagraphs,
  contactMetaKeywords,
  contactReassurances,
  contactResponseChannels,
} from "./content";

const pageUrl = absoluteUrl("/contact-us/");
const ogImage = absoluteUrl("/images/ib-gram-city-og.svg");

export const metadata: Metadata = {
  title: "Contact IB Gram — Talk to an IB or IGCSE Academic Advisor",
  description:
    "Speak with the IB Gram advisor team about IB PYP, MYP, Diploma Programme, Cambridge IGCSE or Pearson Edexcel International GCSE support. Email, phone, WhatsApp and contact form — usually answered within one working day.",
  keywords: contactMetaKeywords,
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Contact IB Gram — IB & IGCSE Academic Advisors",
    description:
      "Share your IB or IGCSE brief. The advisor team replies with a small, honest tutor shortlist — no pressure, no chatbot.",
    siteName: "IB Gram",
    images: [{ url: ogImage, alt: "Contact IB Gram" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact IB Gram — IB & IGCSE Academic Advisors",
    description: "Speak with an IB or IGCSE academic advisor. Email, phone, WhatsApp or contact form.",
    images: [ogImage],
  },
};

export default function ContactUsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Contact", item: pageUrl },
    ],
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "IB Gram",
    url: pageUrl,
    email: CONTACT.email,
    telephone: CONTACT.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${CONTACT.addressLine1}, ${CONTACT.addressLine2}`,
      addressLocality: CONTACT.addressCity,
      addressRegion: CONTACT.addressState,
      postalCode: CONTACT.addressPostal,
      addressCountry: CONTACT.addressCountry,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: CONTACT.email,
        telephone: CONTACT.phoneDisplay,
        availableLanguage: ["English", "Hindi"],
        areaServed: "IN",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: contactFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [breadcrumbSchema, orgSchema, faqSchema],
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground pb-20 pt-8">
      <JsonLd data={graphSchema} />

      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 px-2 sm:px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-4 border border-primary/20">
            <Globe className="size-3" /> Student & Parent Support
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-foreground mb-4 tracking-tight leading-[1.1]">
            How can we help <br />
            <span className="text-primary">your IB or IGCSE journey?</span>
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg font-medium leading-relaxed">
            Whether you are a family looking for the right IB or IGCSE tutor fit, a returning student planning final
            exam revision, or an educator interested in working with IB Gram — the advisor team is here to listen and
            reply with a calm, useful next step.
          </p>
        </div>

        {/* FORM + CONTACT INFO */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          <ContactFormClient />

          <div className="space-y-10">
            <div className="space-y-8">
              <div className="flex gap-5 sm:gap-6 items-start">
                <div className="size-12 sm:size-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                  <Mail className="size-5 sm:size-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold mb-1">Email Us</h3>
                  <p className="text-muted-foreground font-medium mb-2 text-sm sm:text-base">
                    For detailed briefs, school reports or longer questions.
                  </p>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-primary font-black text-base sm:text-lg hover:underline transition-all break-all"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-5 sm:gap-6 items-start">
                <div className="size-12 sm:size-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                  <Phone className="size-5 sm:size-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold mb-1">Call Support</h3>
                  <p className="text-muted-foreground font-medium mb-2 text-sm sm:text-base">
                    Direct assistance for urgent or time-sensitive needs.
                  </p>
                  <a
                    href={`tel:${CONTACT.phoneTel}`}
                    className="text-primary font-black text-base sm:text-lg hover:underline transition-all"
                  >
                    {CONTACT.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex gap-5 sm:gap-6 items-start">
                <div className="size-12 sm:size-14 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary shrink-0">
                  <MessageSquare className="size-5 sm:size-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold mb-1">WhatsApp</h3>
                  <p className="text-muted-foreground font-medium mb-2 text-sm sm:text-base">
                    Message us for quick exchanges or to share a screenshot.
                  </p>
                  <a
                    href={CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary font-black text-base sm:text-lg hover:underline transition-all"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-10 border-t border-border/60">
              <h4 className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-6">Our Location</h4>
              <div className="flex gap-5 sm:gap-6 items-start">
                <div className="size-12 sm:size-14 rounded-2xl bg-muted border border-border flex items-center justify-center text-muted-foreground shrink-0">
                  <MapPin className="size-5 sm:size-6" />
                </div>
                <div className="min-w-0">
                  <h5 className="font-bold text-lg sm:text-xl mb-1">Registered Address</h5>
                  <p className="text-muted-foreground leading-relaxed font-medium max-w-sm text-sm sm:text-base">
                    {CONTACT.addressLine1},<br />
                    {CONTACT.addressLine2},<br />
                    {CONTACT.addressCity}, {CONTACT.addressState} {CONTACT.addressPostal}
                  </p>
                  <a
                    href={CONTACT.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* INTRO LONG-FORM */}
        <section className="mt-16 sm:mt-20">
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-secondary">
              <Headphones className="size-4" />
              Reaching the IB Gram team
            </div>
            <h2 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
              How most families start the conversation
            </h2>
            {contactIntroParagraphs.map((para, idx) => (
              <p key={idx} className="text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* RESPONSE CHANNELS */}
        <section className="mt-16 sm:mt-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-primary">
              <MessageSquare className="size-4" />
              Choose the channel that suits you
            </div>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Email, phone or WhatsApp — what each one is best for
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {contactResponseChannels.map((channel) => (
              <article
                key={channel.title}
                className="flex h-full flex-col rounded-3xl border border-border/50 bg-background/60 p-6"
              >
                <h3 className="text-lg font-black text-foreground">{channel.title}</h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">{channel.body}</p>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.14em] text-primary">{channel.expectation}</p>
              </article>
            ))}
          </div>
        </section>

        {/* BRIEF CHECKLIST */}
        <section className="mt-16 sm:mt-20 rounded-3xl border border-border/50 bg-muted/10 p-6 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-secondary">
                <BookOpenCheck className="size-4" />
                Writing a useful brief
              </div>
              <h2 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
                What to include so the first reply is useful
              </h2>
              <p className="text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
                A short message with the right details usually saves two or three back-and-forth replies. None of the
                items below are mandatory — share whatever feels comfortable and we will ask if anything important is
                missing.
              </p>
            </div>
            <ul className="grid gap-3 lg:col-span-7">
              {contactBriefChecklist.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-2xl border border-border/50 bg-background/60 p-4 sm:p-5"
                >
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                  <p className="text-sm font-semibold leading-relaxed text-foreground/90">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* AFTER MESSAGE STEPS */}
        <section className="mt-16 sm:mt-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-primary">
              <ArrowRight className="size-4" />
              What happens after you hit send
            </div>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
              From message to a calm, well-matched tutor
            </h2>
          </div>
          <ol className="mt-10 grid gap-5 sm:grid-cols-2">
            {contactAfterMessageSteps.map((step, idx) => (
              <li key={step.title} className="rounded-3xl border border-border/50 bg-background/60 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-black text-primary">
                    {idx + 1}
                  </div>
                  <h3 className="text-base font-black text-foreground sm:text-lg">{step.title}</h3>
                </div>
                <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* REASSURANCES */}
        <section className="mt-16 sm:mt-20">
          <div className="mx-auto max-w-3xl rounded-3xl border border-border/50 bg-muted/10 p-6 sm:p-10">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-secondary">
              <Shield className="size-4" />
              How we treat your message
            </div>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
              The quiet rules that shape every reply
            </h2>
            <ul className="mt-6 space-y-3">
              {contactReassurances.map((line) => (
                <li key={line} className="flex gap-3 text-sm font-medium leading-relaxed text-muted-foreground sm:text-base">
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* BLOG PICKS */}
        <section className="mt-16 sm:mt-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-primary">
              <BookOpenCheck className="size-4" />
              From the IB Gram blog
            </div>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Useful reading before you write your first message
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {contactBlogPicks.map((blog) => (
              <article
                key={blog.title}
                className="flex h-full flex-col rounded-3xl border border-border/50 bg-background/60 p-6"
              >
                <span className="inline-flex w-fit items-center rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-secondary">
                  {blog.category}
                </span>
                <h3 className="mt-4 text-lg font-black leading-snug text-foreground">{blog.title}</h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">{blog.excerpt}</p>
                <div className="mt-5 flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  <span>{blog.date}</span>
                  <span>{blog.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-16 sm:mt-20">
          <div className="mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-secondary">
              <MessageSquare className="size-4" />
              Frequently asked questions
            </div>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Questions parents ask before sending the first message
            </h2>
            <div className="mt-8 divide-y divide-border/50 rounded-3xl border border-border/50 bg-background/60">
              {contactFaqs.map((faq) => (
                <details key={faq.question} className="group p-5 sm:p-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-base font-black text-foreground sm:text-lg">
                    {faq.question}
                    <ArrowRight className="mt-1 size-4 shrink-0 text-primary transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground sm:text-base">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
            <SchoolDisclaimer />
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="mt-16 sm:mt-20">
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-primary/20 bg-background/70 p-8 text-center md:p-12">
            <h2 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Ready when you are
            </h2>
            <p className="mt-4 text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
              Send a short message with city, programme stage and subject — we will reply with the next clear step.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/ib-tutors/"
                className="shimmer-btn inline-flex h-14 w-full max-w-xs items-center justify-center rounded-xl bg-primary px-7 text-base font-black text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20 sm:w-auto"
              >
                Explore IB Tutor Pages
                <ArrowRight className="ml-2 size-5" />
              </Link>
              <Link
                href="/igcse-pages/"
                className="inline-flex h-14 w-full max-w-xs items-center justify-center rounded-xl border border-border bg-background/50 px-7 text-base font-black text-foreground transition-all hover:border-secondary/50 hover:bg-muted/30 sm:w-auto"
              >
                Explore IGCSE Pages
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
