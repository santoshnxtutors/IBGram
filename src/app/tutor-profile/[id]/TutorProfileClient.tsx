"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, Clock, GraduationCap, ShieldCheck, CheckCircle2, MessageCircle, Laptop, Home as HomeIcon, Award, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { TutorProfileLocationSection } from "@/components/tutors/TutorProfileLocationSection";
import { TutorReviewsCarousel } from "@/components/tutors/TutorReviewsCarousel";
import { BookDemoModal } from "@/components/booking/BookDemoModal";
import type { Tutor } from "@/lib/tutor-data";
import type { PublicTutorReview } from "@/lib/cms/public-reviews";
import { getStoredReturnTo, storeLegacyReturnToFromUrl } from "@/lib/return-to";
import { openTutorMessage } from "@/lib/tutor-message";
import Link from "next/link";

export type TutorReachLink = {
   slug: string;
   board: string;
   subject: string;
   mode: string;
   city: string | null;
};

export default function TutorProfileClient({
   tutor,
   reviews = [],
   reachPages = [],
}: {
   tutor: Tutor;
   reviews?: PublicTutorReview[];
   reachPages?: TutorReachLink[];
}) {
   return <TutorProfileContent tutor={tutor} reviews={reviews} reachPages={reachPages} />;
}

function TutorProfileContent({
   tutor,
   reviews,
   reachPages,
}: {
   tutor: Tutor;
   reviews: PublicTutorReview[];
   reachPages: TutorReachLink[];
}) {
   const router = useRouter();
   const [demoOpen, setDemoOpen] = useState(false);

   useEffect(() => {
      storeLegacyReturnToFromUrl("tutor-profile", ["/tutor-profile"]);
      document.body.style.overflow = "unset";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
   }, []);

   const handleWhatsApp = () => {
      openTutorMessage(tutor);
   };

   const handleBookDemo = () => {
      setDemoOpen(true);
   };

   const handleBack = () => {
      const storedReturnTo = getStoredReturnTo("tutor-profile", ["/tutor-profile"]);
      if (storedReturnTo) {
         router.push(storedReturnTo);
         return;
      }

      if (window.history.length > 1) {
         router.back();
         return;
      }

      router.push("/tutors");
   };

   return (
      <div className="min-h-screen bg-background text-foreground">
         <div className="h-24 md:h-32" />

         <div className="container max-w-6xl mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
               <div className="w-full lg:w-1/3 lg:sticky lg:top-28 lg:h-[max-content] self-start pt-2 z-10">
                  <motion.div
                     initial={{ opacity: 0, x: -30 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.6 }}
                     className="flex flex-col gap-6"
                  >
                     <button
                        onClick={handleBack}
                        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-2 group w-fit"
                     >
                        <ArrowLeft className="size-4 md:size-5 transition-transform group-hover:-translate-x-1" />
                        <span className="font-medium text-sm md:text-base">Back</span>
                     </button>

                     <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-2xl glassmorphism border border-white/5 bg-muted">
                        {tutor.image ? (
                           // eslint-disable-next-line @next/next/no-img-element
                           <img
                              key={tutor.image}
                              src={tutor.image}
                              alt={tutor.name}
                              loading="eager"
                              decoding="async"
                              className="absolute inset-0 size-full object-cover"
                              onError={(event) => {
                                 const target = event.currentTarget;
                                 console.warn("[TutorProfile] avatar failed to load:", target.src);
                                 target.style.display = "none";
                                 const fallback = target.nextElementSibling as HTMLElement | null;
                                 if (fallback) fallback.style.display = "flex";
                              }}
                           />
                        ) : null}
                        <div
                           className="absolute inset-0 items-center justify-center bg-muted"
                           style={{ display: tutor.image ? "none" : "flex" }}
                        >
                           <span className="text-7xl font-black text-muted-foreground">{tutor.name.charAt(0)}</span>
                        </div>
                        <div className="absolute inset-0 border-4 border-background/20 rounded-3xl pointer-events-none mix-blend-overlay" />
                     </div>

                     <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                        {tutor.tags.map((tag) => (
                           <span
                              key={tag}
                              className={`text-[11px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full border border-current/20 ${tutor.accent}`}
                           >
                              {tag}
                           </span>
                        ))}
                     </div>

                     <div className="bg-card glassmorphism border border-border p-6 rounded-3xl text-center flex gap-6 justify-between items-center px-8 shadow-lg">
                        <div className="text-center">
                           <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-1">Hourly Rate</p>
                           <p className="text-2xl font-black text-foreground">{tutor.rate}</p>
                        </div>
                        <div className="w-px h-10 bg-border" />
                        <div className="text-center flex-1">
                           <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-1">Overall Rating</p>
                           <div className="flex items-center justify-center gap-1.5 font-bold text-lg text-foreground">
                              <Star className="size-4 text-secondary fill-secondary" /> {tutor.rating}
                           </div>
                        </div>
                     </div>
                  </motion.div>
               </div>

               <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-full lg:w-2/3 flex flex-col pb-32"
               >
                  <div className="mb-4 flex items-center gap-3">
                     <div className="bg-primary/10 text-primary uppercase text-xs font-black tracking-widest px-4 py-1.5 rounded-full border border-primary/20">
                        {tutor.subject}
                     </div>
                     <div className="bg-secondary/10 text-secondary uppercase text-xs font-black tracking-widest px-4 py-1.5 rounded-full border border-secondary/20 flex items-center gap-1.5">
                        <Clock className="size-3.5" /> {tutor.experience} Experience
                     </div>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground mb-4 flex flex-wrap items-center gap-3">
                     {tutor.name}
                     <ShieldCheck className="size-8 text-primary shrink-0" />
                  </h1>

                  <div className="flex items-center gap-4 text-muted-foreground mb-8 text-sm md:text-base font-medium">
                     <span className="flex items-center gap-2"><CheckCircle2 className="size-5 text-primary" /> Verified Indentity</span>
                     <span>•</span>
                     <span className="flex items-center gap-2"><MessageCircle className="size-4" /> {tutor.reviews} Student Reviews</span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pb-12 pt-2 border-b border-border/50">
                     <Button
                        onClick={handleBookDemo}
                        size="lg"
                        className="h-16 px-10 rounded-[1.8rem] bg-primary hover:bg-primary/90 text-primary-foreground font-black text-xl shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95"
                     >
                        Book a Demo
                     </Button>

                     <Button
                        onClick={handleWhatsApp}
                        size="lg"
                        variant="outline"
                        className="h-16 px-10 rounded-[1.8rem] flex items-center justify-center gap-3 font-black text-xl border-2 hover:bg-[#25D366]/10 hover:text-[#25D366] hover:border-[#25D366]/50 transition-all text-foreground"
                     >
                        <svg className="size-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                           <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                        </svg>
                        Chat on WhatsApp
                     </Button>
                  </div>

                  <div className="flex flex-col gap-14 lg:gap-16 pt-12">
                     <section>
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-foreground">
                           <GraduationCap className="size-6 text-primary" /> About {tutor.name.split(" ")[0]}
                        </h3>
                        <div className="p-8 rounded-[2rem] bg-card/40 border border-white/5 glassmorphism">
                           <div className="space-y-4 text-lg md:text-xl text-muted-foreground leading-[1.8] font-medium">
                              {(tutor.about?.trim() ? tutor.about : tutor.bio)
                                 .split(/\n\s*\n/)
                                 .map((para, idx) => (
                                    <p key={idx}>{para.trim()}</p>
                                 ))}
                           </div>
                        </div>
                     </section>

                     {reachPages.length > 0 && (
                        <section>
                           <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-foreground">
                              <BookOpen className="size-6 text-primary" /> Subject pages with {tutor.name.split(" ")[0]}
                           </h3>
                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {reachPages.map((page) => (
                                 <Link
                                    key={page.slug}
                                    href={`/tutor/${page.slug}/`}
                                    className="group flex items-center justify-between gap-3 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:bg-primary/5"
                                 >
                                    <div className="min-w-0">
                                       <p className="font-black text-foreground group-hover:text-primary">
                                          {page.board} {page.subject}
                                       </p>
                                       <p className="mt-1 text-sm font-medium capitalize text-muted-foreground">
                                          {page.mode} tutoring{page.city ? ` · ${page.city}` : ""}
                                       </p>
                                    </div>
                                    <ArrowLeft className="size-5 shrink-0 rotate-180 text-primary transition-transform group-hover:translate-x-1" />
                                 </Link>
                              ))}
                           </div>
                        </section>
                     )}

                     {tutor.faqs && tutor.faqs.length > 0 && (
                        <section>
                           <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-foreground">
                              <MessageCircle className="size-6 text-primary" /> FAQs about {tutor.name.split(" ")[0]}
                           </h3>
                           <div className="divide-y divide-border/50 rounded-[2rem] border border-border bg-card/40">
                              {tutor.faqs.map((faq, idx) => (
                                 <details key={idx} className="group p-6">
                                    <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-lg font-bold text-foreground">
                                       {faq.question}
                                       <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary transition-transform group-open:rotate-90" />
                                    </summary>
                                    <p className="mt-3 text-base font-medium leading-relaxed text-muted-foreground">
                                       {faq.answer}
                                    </p>
                                 </details>
                              ))}
                           </div>
                        </section>
                     )}

                     <section>
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-foreground">
                           <Award className="size-6 text-primary" /> Qualifications & Background
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           {tutor.tags.map((tag, idx) => (
                              <div key={idx} className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border">
                                 <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                                    <CheckCircle2 className="size-5 text-primary" />
                                 </div>
                                 <div>
                                    <h4 className="font-bold text-foreground text-lg mb-1">{tag}</h4>
                                    <p className="text-sm text-muted-foreground font-medium">Reviewed for profile quality, subject familiarity and teaching reliability.</p>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </section>

                     <section>
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-foreground">
                           <BookOpen className="size-6 text-primary" /> Subjects & Syllabus Covered
                        </h3>
                        <div className="flex flex-wrap gap-3">
                           {['IB Diploma Programme (DP)', 'IGCSE', 'MYP', 'A-Levels', 'AP Curriculum'].map((syllabus, idx) => (
                              <div key={idx} className="bg-background border-2 border-border px-6 py-3 rounded-2xl text-foreground font-bold hover:border-primary/50 transition-colors cursor-default">
                                 {syllabus}
                              </div>
                           ))}
                        </div>
                     </section>

                     <TutorProfileLocationSection tutor={tutor} />

                     <TutorReviewsCarousel reviews={reviews} tutorFirstName={tutor.name.split(" ")[0]} />

                     <section>
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-foreground">
                           <Star className="size-6 text-primary" /> Teaching Expertise & Methodology
                        </h3>
                        <div className="p-8 rounded-[2rem] bg-gradient-to-br from-primary/5 via-background to-secondary/5 border border-primary/10 relative overflow-hidden">
                           <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                              <GraduationCap className="size-48" />
                           </div>
                           <div className="relative z-10 space-y-4">
                              <p className="text-lg md:text-xl text-muted-foreground leading-[1.8] font-medium">
                                 My methodology revolves around breaking down highly complex {tutor.subject.toLowerCase()} topics into intuitive, real-world models. Rather than relying on rote memorization, I empower students to understand the underlying logic required by examiners.
                              </p>
                              <p className="text-lg md:text-xl text-muted-foreground leading-[1.8] font-medium">
                                 Sessions are structured around syllabus requirements, marking criteria and targeted practice so students can build clearer exam habits over time.
                              </p>
                           </div>
                        </div>
                     </section>

                     <section>
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-foreground">
                           <Laptop className="size-6 text-primary" /> Home Tutor vs Online Tutor by {tutor.name.split(" ")[0]}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="p-8 rounded-[2rem] bg-card border border-border shadow-xl">
                              <div className="size-14 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                                 <HomeIcon className="size-6 text-secondary" />
                              </div>
                              <h4 className="text-xl font-black mb-4">In-Person Home Tutoring</h4>
                              <p className="text-base text-muted-foreground font-medium leading-relaxed">
                                 Recommended for students who struggle with focus or prefer a highly observed disciplinary environment. I provide complete oversight of written work in real-time, enforcing study habits directly.
                              </p>
                           </div>
                           <div className="p-8 rounded-[2rem] bg-card border border-border shadow-xl">
                              <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                                 <Laptop className="size-6 text-primary" />
                              </div>
                              <h4 className="text-xl font-black mb-4">Interactive Online Tutoring</h4>
                              <p className="text-base text-muted-foreground font-medium leading-relaxed">
                                 Utilizes state-of-the-art interactive digital whiteboards and simulation tools. This approach offers massive scheduling flexibility and provides instant access to digitized past papers and global resources.
                              </p>
                           </div>
                        </div>
                     </section>

                     <section className="text-center mt-10 md:mt-16 pb-10 border-t border-border pt-16">
                        <h3 className="text-3xl md:text-4xl font-black mb-6 text-foreground">Not sure what to choose?</h3>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10 font-medium">
                           Every student learns differently. A short consultation helps check teaching style, pace and subject fit before committing to regular sessions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                           <Button size="lg" className="h-16 px-12 rounded-[2rem] bg-primary hover:bg-primary/90 text-primary-foreground font-black text-xl shadow-[0_0_40px_-10px_rgba(33,197,94,0.4)] transition-all hover:-translate-y-1" onClick={handleBookDemo}>
                              Book Your Demo Now
                           </Button>
                        </div>
                     </section>
                  </div>
               </motion.div>
            </div>
         </div>

         <BookDemoModal
            open={demoOpen}
            onClose={() => setDemoOpen(false)}
            tutorName={tutor.name}
            defaultSubject={tutor.subject}
            defaultBoard={tutor.curriculum === "IB" ? "IB (DP)" : tutor.curriculum === "IGCSE" ? "Cambridge IGCSE" : undefined}
         />
      </div>
   );
}
