import { Globe2, Clock, GraduationCap, MapPin, Languages, CalendarCheck } from "lucide-react";

const regions = [
  {
    name: "Asia Pacific",
    flags: ["sg", "hk", "jp", "my", "au"],
    blurb:
      "IB DP, MYP and IGCSE support for students at international schools across South and East Asia and Oceania.",
    cities: [
      "Singapore", "Hong Kong", "Tokyo", "Seoul", "Kuala Lumpur", "Bangkok",
      "Jakarta", "Shanghai", "Sydney", "Melbourne", "Auckland",
      "Mumbai", "Delhi NCR", "Bengaluru", "Gurugram",
    ],
  },
  {
    name: "Middle East",
    flags: ["ae", "qa", "sa", "kw", "om"],
    blurb:
      "Home and online tutoring for families at IB World Schools and Cambridge schools across the Gulf.",
    cities: [
      "Dubai", "Abu Dhabi", "Sharjah", "Doha", "Riyadh", "Jeddah",
      "Kuwait City", "Muscat", "Manama", "Amman",
    ],
  },
  {
    name: "Europe",
    flags: ["gb", "ch", "de", "nl", "es"],
    blurb:
      "Support for IB Diploma, IGCSE and A Level students in British and international schools across Europe.",
    cities: [
      "London", "Geneva", "Zurich", "Amsterdam", "The Hague", "Frankfurt",
      "Munich", "Vienna", "Paris", "Madrid", "Barcelona", "Milan",
      "Stockholm", "Copenhagen", "Dublin",
    ],
  },
  {
    name: "Americas",
    flags: ["us", "ca", "br", "mx", "ar"],
    blurb:
      "IB, AP and American curriculum subject tutoring in North and South American time zones, including late-evening slots.",
    cities: [
      "New York", "Boston", "Chicago", "San Francisco", "Miami",
      "Toronto", "Vancouver", "Montreal", "Mexico City",
      "Sao Paulo", "Bogota", "Buenos Aires",
    ],
  },
  {
    name: "Africa",
    flags: ["za", "ke", "ng", "eg", "gh"],
    blurb:
      "Online IB and IGCSE tutoring for families at international schools across the African continent.",
    cities: [
      "Nairobi", "Lagos", "Abuja", "Accra", "Cairo", "Johannesburg",
      "Cape Town", "Dar es Salaam", "Kampala", "Casablanca",
    ],
  },
] as const;

const coverage = [
  {
    icon: Clock,
    title: "Every time zone, UTC-8 to UTC+12",
    body:
      "Sessions are scheduled in the student's local evening, so a DP student in Dubai, London, Singapore or Toronto keeps a routine that fits school hours.",
  },
  {
    icon: GraduationCap,
    title: "IB, IGCSE, A Level and AP",
    body:
      "PYP, MYP, DP, Cambridge IGCSE, Edexcel International GCSE, A Level, AP and American and British school curricula, at HL, SL, Core and Extended tiers.",
  },
  {
    icon: CalendarCheck,
    title: "May and November exam sessions",
    body:
      "Planning follows the student's own session: mocks, Internal Assessments, Extended Essay deadlines, TOK, predicted grades and final revision.",
  },
  {
    icon: Languages,
    title: "English-medium, globally consistent",
    body:
      "Teaching runs in English by default, with other languages on request, so families relocating between countries keep the same tutor and the same plan.",
  },
];

const marqueeFlags = [
  { code: "in", name: "India" }, { code: "ae", name: "United Arab Emirates" },
  { code: "sg", name: "Singapore" }, { code: "gb", name: "United Kingdom" },
  { code: "us", name: "United States" }, { code: "ca", name: "Canada" },
  { code: "au", name: "Australia" }, { code: "hk", name: "Hong Kong" },
  { code: "de", name: "Germany" }, { code: "ch", name: "Switzerland" },
  { code: "qa", name: "Qatar" }, { code: "sa", name: "Saudi Arabia" },
  { code: "my", name: "Malaysia" }, { code: "jp", name: "Japan" },
  { code: "nl", name: "Netherlands" }, { code: "nz", name: "New Zealand" },
  { code: "es", name: "Spain" }, { code: "fr", name: "France" },
  { code: "kw", name: "Kuwait" }, { code: "om", name: "Oman" },
  { code: "bh", name: "Bahrain" }, { code: "za", name: "South Africa" },
  { code: "id", name: "Indonesia" }, { code: "th", name: "Thailand" },
  { code: "ie", name: "Ireland" }, { code: "se", name: "Sweden" },
  { code: "kr", name: "South Korea" },
];

const globalReachJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.ibgram.com/#global-tutoring",
  name: "Online IB and IGCSE tutoring worldwide",
  serviceType: "Online tutoring",
  description:
    "IB Gram matches students with IB, IGCSE, A Level and AP tutors for online, home and hybrid lessons, scheduled in the student's own time zone across Asia Pacific, the Middle East, Europe, the Americas and Africa.",
  provider: { "@id": "https://www.ibgram.com/#organization" },
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: "https://www.ibgram.com/",
    availableLanguage: ["English"],
  },
  areaServed: regions.map((region) => ({
    "@type": "AdministrativeArea",
    name: region.name,
    containsPlace: region.cities.map((city) => ({ "@type": "City", name: city })),
  })),
};

export function GlobalReach() {
  return (
    <section
      id="global-reach"
      aria-labelledby="global-reach-heading"
      className="py-12 md:py-16 relative overflow-hidden bg-background scroll-mt-24"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(globalReachJsonLd) }}
      />

      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="ibg-rise">
          <div className="flex items-center gap-2 mb-4 text-secondary">
            <Globe2 className="size-4" />
            <span className="text-[12px] font-black tracking-[0.2em] uppercase">
              Worldwide coverage
            </span>
          </div>
          <h2
            id="global-reach-heading"
            className="text-3xl md:text-5xl xl:text-[3.1rem] font-black text-foreground leading-[1.05] tracking-tight xl:whitespace-nowrap"
          >
            IB and IGCSE tutors for families in every time zone
          </h2>
          <p className="mt-5 max-w-6xl text-muted-foreground text-base/relaxed md:text-lg/relaxed font-medium">
            IB Gram is built for internationally mobile families. Whether the student is at an IB World School in Dubai, a Cambridge school in Singapore, a British international school in Geneva or an American curriculum school in Sao Paulo, the requirement is the same: a subject specialist who knows the syllabus, the assessment criteria and the deadlines. We match on that, then fit the schedule around the student&apos;s local week.
          </p>
        </div>

        {/* Region grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {regions.map((region, i) => (
            <article
              key={region.name}
              className="ibg-rise rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/25 hover:bg-primary/5"
              style={{ animationDelay: `${0.08 * (i + 1)}s` }}
            >
              <div className="flex items-center gap-2 mb-3">
                {region.flags.map((code) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={code}
                    src={`/images/Countryflag/${code}.svg`}
                    alt=""
                    aria-hidden="true"
                    width={22}
                    height={22}
                    loading="lazy"
                    className="size-5 rounded-full border border-border object-cover"
                  />
                ))}
              </div>
              <h3 className="text-lg font-black text-foreground">{region.name}</h3>
              <p className="mt-2 text-muted-foreground text-sm/relaxed font-medium">
                {region.blurb}
              </p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {region.cities.map((city) => (
                  <li
                    key={city}
                    className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-2.5 py-1 text-[12px] font-semibold text-foreground/75"
                  >
                    <MapPin className="size-3 text-secondary/70" />
                    {city}
                  </li>
                ))}
              </ul>
            </article>
          ))}

          {/* Coverage facts fill the sixth cell */}
          <div
            className="ibg-rise rounded-2xl border border-primary/15 bg-primary/[0.04] p-6 space-y-5"
            style={{ animationDelay: "0.48s" }}
          >
            {coverage.map(({ icon: Icon, title, body }) => (
              <div key={title}>
                <div className="flex items-center gap-2">
                  <Icon className="size-4 text-primary shrink-0" />
                  <h3 className="text-sm font-black text-foreground leading-tight">{title}</h3>
                </div>
                <p className="mt-1.5 text-muted-foreground text-xs/relaxed font-medium">{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Country marquee */}
        <div
          className="mt-12 relative overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]"
          aria-label="Countries where IB Gram families study"
        >
          <div className="flex w-max items-center gap-3 animate-flags-slide hover:[animation-play-state:paused] will-change-transform">
            {[...marqueeFlags, ...marqueeFlags].map((country, idx) => (
              <div
                key={`${country.code}-${idx}`}
                title={country.name}
                className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 shrink-0"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/Countryflag/${country.code}.svg`}
                  alt=""
                  aria-hidden="true"
                  width={20}
                  height={20}
                  loading="lazy"
                  className="size-5 rounded-full object-cover"
                />
                <span className="text-xs font-semibold text-foreground/70 whitespace-nowrap">
                  {country.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
