"use client";

import Image from "next/image";
import Link from "next/link";
import { JoinAsTutorButton } from "./JoinAsTutorButton";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { CONTACT } from "@/lib/contact";

export function Footer() {
  const pathname = usePathname();
  const isIgcsePage = pathname?.startsWith("/igcse");

  if (pathname === "/login" || pathname === "/signup") {
    return null;
  }

  return (
    <footer className="w-full surface-navy border-t border-border mt-12 md:mt-20 pt-12 md:pt-16 pb-8 relative overflow-hidden">
      {/* 🟢 Glow / Orange Glow Mix */}
      <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[600px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 md:gap-y-12 mb-6">

          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="mb-6 inline-flex items-center gap-1">
              {/* alt="" because the brand name sits right beside it inside the same link. */}
              <Image src="/images/logo.png" alt="" width={40} height={40} className="size-10 rounded-lg" />
              <span className="text-2xl font-bold tracking-tight text-foreground"><span className="text-primary">IB</span> Gram</span>
            </Link>
            <p className="text-sm text-muted-foreground font-medium mb-6 leading-relaxed max-w-sm">
              {isIgcsePage
                ? "IGCSE tutoring support for Cambridge and Pearson Edexcel students, with tutor options reviewed by subject, schedule and learning mode."
                : "IB and IGCSE tutor matching for families who need syllabus-aware support, practical study tools and clear next steps."}
            </p>

            {/* Contact block */}
            <ul className="mb-6 space-y-2.5 text-sm font-medium text-muted-foreground">
              <li>
                <a
                  href={`tel:${CONTACT.phoneTel}`}
                  className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Phone className="size-4 shrink-0 text-primary" aria-hidden />
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <MessageCircle className="size-4 shrink-0 text-primary" aria-hidden />
                  Chat on WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Mail className="size-4 shrink-0 text-primary" aria-hidden />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-primary transition-colors"
                >
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  <span className="leading-relaxed">
                    {CONTACT.addressLine1}, {CONTACT.addressLine2}, {CONTACT.addressCity},{" "}
                    {CONTACT.addressState} {CONTACT.addressPostal}
                  </span>
                </a>
              </li>
            </ul>

          </div>

          {/* Links Column 1: Custom for IGCSE */}
          <div>
            <h4 className="font-bold text-foreground mb-6 drop-shadow-sm">{isIgcsePage ? "IGCSE Curriculum" : "Programmes"}</h4>
            <ul className="space-y-4 text-sm font-medium text-muted-foreground">
              {isIgcsePage ? (
                <>
                  <li><Link href="/igcse/#subjects" className="hover:text-primary transition-colors">Cambridge Subjects</Link></li>
                  <li><Link href="/igcse/#subjects" className="hover:text-primary transition-colors">Edexcel Specifications</Link></li>
                  <li><Link href="/igcse/#igcse-tutors" className="hover:text-primary transition-colors">IGCSE Tutors</Link></li>
                  <li><Link href="/igcse/#assessment" className="hover:text-primary transition-colors">Assessment Guide</Link></li>
                </>
              ) : (
                <>
                  <li><Link href="/programmes/pyp" className="hover:text-primary transition-colors">Primary Years (PYP)</Link></li>
                  <li><Link href="/programmes/myp" className="hover:text-primary transition-colors">Middle Years (MYP)</Link></li>
                  <li><Link href="/programmes/dp" className="hover:text-primary transition-colors">Diploma (DP)</Link></li>
                  <li><Link href="/programmes/cp" className="hover:text-primary transition-colors">Career-related (CP)</Link></li>
                  <li><Link href="/igcse" className="hover:text-primary transition-colors italic">Cambridge IGCSE</Link></li>
                </>
              )}
            </ul>
          </div>

          {/* Links Column 2: Platform */}
          <div>
            <h4 className="font-bold text-foreground mb-6 drop-shadow-sm">Platform</h4>
            <ul className="space-y-4 text-sm font-medium text-muted-foreground">
              <li><Link href="/about-us" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/igcse/" className="hover:text-primary transition-colors">IGCSE</Link></li>
              <li><Link href="/admissions/" className="hover:text-primary transition-colors">Admissions &amp; Test Prep</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blogs</Link></li>
              <li><Link href="/payment/" className="hover:text-primary transition-colors">Payment</Link></li>
            </ul>
          </div>  

          {/* Support Column */}
          <div>
            <h4 className="font-bold text-foreground mb-6 drop-shadow-sm">Support</h4>
            <ul className="space-y-4 text-sm font-medium text-muted-foreground">
              <li><Link href="/contact-us" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/#faq" className="hover:text-primary transition-colors">FAQs</Link></li>
              <li><Link href="/#how-it-works" className="hover:text-primary transition-colors">How {isIgcsePage ? "IGCSE Prep" : "IB Gram"} Works</Link></li>
              <li><Link href="/jobs" className="hover:text-primary transition-colors">Jobs</Link></li>
              <li><JoinAsTutorButton variant="link" className="text-left hover:text-primary transition-colors" /></li>
              <li><Link href="/privacy-policy/" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions/" className="hover:text-primary transition-colors">Terms &amp; Conditions</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-border pt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-semibold text-muted-foreground">
          <p>©(2018-2026) IB Gram. All rights reserved.</p>
          <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4 text-center">
            <Link href="/privacy-policy/" className="whitespace-nowrap hover:text-primary transition-colors">Privacy Policy</Link>
            <span className="hidden md:inline">|</span>
            <Link href="/terms-and-conditions/" className="whitespace-nowrap hover:text-primary transition-colors">Terms &amp; Conditions</Link>
            <span className="hidden md:inline">|</span>
            <span className="whitespace-nowrap">Independent tutoring platform</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
