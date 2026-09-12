import { Quote, ShieldCheck, Star } from "lucide-react";

export type Review = {
  id: number | string;
  name: string;
  location: string;
  rating: number;
  text: string;
};

export const fallbackReviews: Review[] = [
  {
    id: 1,
    name: "Parent of a DP Math AA student",
    location: "Gurugram",
    rating: 5,
    text: "The tutor understood the Math AA HL syllabus and helped us turn revision into a weekly plan. The parent updates were clear and practical.",
  },
  {
    id: 2,
    name: "IGCSE Physics student",
    location: "Dubai",
    rating: 5,
    text: "I liked that sessions started with the topics I was actually stuck on. The practice sets made it easier to ask better questions in class.",
  },
  {
    id: 3,
    name: "Parent of an IB Economics student",
    location: "Online",
    rating: 5,
    text: "IB Gram helped us compare tutor options without pressure. We chose someone who could support essays, case studies and exam timing.",
  },
  {
    id: 4,
    name: "MYP student family",
    location: "Bangalore",
    rating: 5,
    text: "The support felt steady rather than rushed. The tutor focused on foundations first, then moved into school assessments and project work.",
  },
];

export function ReviewsSection({
  items,
  heading,
  intro,
}: {
  items?: Review[];
  /** Single-colour heading override. Country/city pages pass a location-specific one. */
  heading?: string;
  intro?: string;
}) {
  const reviews = items && items.length > 0 ? items : fallbackReviews;
  return (
    <section className="py-12 md:py-16 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-2xl text-left mb-8 md:mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-primary font-black uppercase tracking-[0.3em] text-[11px]">Student and parent reviews</span>
            <div className="h-px w-8 bg-primary/50" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground leading-tight">
            {heading ?? "Stories from families using IB Gram"}
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            {intro ??
              "Short, practical feedback from students and parents about tutor fit, revision structure and communication."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="h-full rounded-3xl border border-border bg-card p-6 md:p-7 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/5"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div className="size-11 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <Quote className="size-5" />
                </div>
                <div className="flex gap-1" role="img" aria-label={`${review.rating} star review`}>
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="size-3.5 text-secondary fill-current" aria-hidden />
                  ))}
                </div>
              </div>

              <p className="text-base font-medium text-foreground/90 leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="mt-7 border-t border-border pt-5">
                <div className="font-black text-sm text-foreground">{review.name}</div>
                <div className="mt-1 flex items-center gap-1.5 text-xs font-bold text-muted-foreground">
                  <ShieldCheck className="size-3.5 text-primary" />
                  <span>{review.location} review</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
