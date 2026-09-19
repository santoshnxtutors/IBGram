import type { CountrySeoPage } from "../types";

/**
 * Denmark - https://www.ibgram.com/denmark/
 *
 * Hand-authored country landing page. Delivery to Denmark is ONLINE only;
 * nothing here may imply in-person tutoring inside Denmark. Named schools
 * appear as ecosystem context only - no affiliation is implied.
 */
export const denmark: CountrySeoPage = {
  slug: "denmark",
  countryName: "Denmark",
  countryNameLong: "the Kingdom of Denmark",
  demonym: "Danish",
  flagCode: "dk",
  countryCode: "DK",
  region: "Northern Europe",
  timezoneLabel: "Central European Time (CET/CEST, UTC+1 in winter, UTC+2 in summer)",
  schedulingNote: "Weekday afternoons and evenings in Danish local time",
  lastUpdated: "2026-09-14",

  title: "IB Tutors in Denmark | Online IB DP, MYP & IGCSE Tutoring",
  metaDescription: "Online IB tutors for students in Denmark. One-to-one DP, MYP and PYP tuition in Danish time, matched to gymnasium IB streams and international schools.",
  h1: "Online IB and IGCSE tutors for students studying in Denmark",
  heroEyebrow: "ONLINE TUTORING FOR FAMILIES IN DENMARK",
  heroSubtitle: "Your child is working through the IB Diploma or an earlier IB stage at a Danish gymnasium or international school, and we pair them with a tutor who has actually taught that subject and level. Every lesson happens online, one to one, at a time that fits after a Danish school day — no travel, no waiting room, just a specialist who knows the syllabus your child is graded against.",
  primaryKeyword: "IB tutors in Denmark",
  imageAltText: "IB tutor and a Danish gymnasium student working through an IB Diploma chemistry problem in a one-to-one online lesson",
  secondaryKeywords: [
    "IB tutor Copenhagen",
    "online IB tutor Denmark",
    "IB DP tutor Aarhus",
    "IB tutor Odense",
    "kvote 1 IB conversion tutor",
    "Danish gymnasium IB tutor",
    "IB exam prep Denmark",
    "Copenhagen International School tutor",
    "IB Diploma tutor Billund",
    "IB Mathematics tutor Denmark",
    "IB grade to Danish grade conversion",
    "IB tutor Aarhus Gymnasium",
  ],

  heroTrustPoints: [
    "Sessions timed to a Danish afternoon or evening, with the CET/CEST clock change handled on our end.",
    "Tutors who understand both the state-gymnasium IB route and full international-school IB continuum in Denmark.",
    "Support across IB PYP, MYP, DP and CP, plus context on how STX, HHX and HTX compare.",
    "Familiarity with kvote 1 and kvote 2 admission and the official IB-to-Danish grade conversion table.",
  ],
  heroStats: [
    { value: "5+", label: "Danish gymnasiums currently teaching the IB Diploma" },
    { value: "12→10", label: "How an IB 7 and IB 6 convert on the Danish 7-point scale" },
    { value: "UTC+1/+2", label: "CET/CEST, roughly four hours behind Indian time" },
    { value: "1:1", label: "Default format: one student, one tutor" },
  ],

  tutorsIntro: "Tutors here work into a Danish afternoon and evening, a comfortable stretch once the school day and any fritidsjob or sport finish, with the clock difference to India narrowing to under four hours during Danish summer time.",

  intro: {
    heading: "Who we tutor in Denmark: gymnasium IB students, international schools and PYP through DP",
    paragraphs: [
      "Denmark's relationship with the IB is unusual for a country this size: rather than the Diploma sitting only inside private international schools, a handful of ordinary Danish state gymnasiums — Aarhus Gymnasium, Nyborg Gymnasium, Kolding Gymnasium and Birkerød Gymnasium among them — run an IB Diploma stream alongside their regular STX classes. Add Copenhagen International School's full PYP-to-DP continuum and the International School of Billund's earlier years, and a Danish family can genuinely reach the IB through either a public gymnasium or a private international campus, which is a real choice most countries don't offer.",
      "Everything IB Gram delivers to families in Denmark runs online. We don't place a tutor in a Danish home; home tutoring remains something we offer only in India. What we provide instead is a subject specialist matched to your child's exact course, meeting over video at a Danish-time slot that respects an already full school and activity schedule.",
      "Requests tend to cluster around a few situations. A gymnasium student who chose the IB stream over STX in Grade 1.g finds the jump to Higher Level content sharper than expected by 2.g. A DP2 student is applying through kvote 1 and wants to understand exactly how their predicted IB points will convert on the Danish 7-point scale before a university deadline. An Extended Essay or internal assessment draft needs sharper feedback than one teacher can give an entire IB cohort. Or a family has just moved to Denmark and needs a bridge between whatever curriculum their child studied before and the IB course they've just been placed into.",
      "We start with a short conversation about the exact subject, level and stage — PYP, MYP, or DP — and which kind of Danish school runs it, since a gymnasium's IB stream and an international school's IB continuum are organised quite differently. From there we suggest a tutor who has taught that precise combination, and a trial lesson happens before anything is booked. Because delivery is online, a family in Aarhus and a family in Copenhagen draw from the same specialist pool rather than whoever happens to teach nearby.",
      "Every lesson is one-to-one by default, planned around the actual work your child has in front of them that week — a topic the class just covered, a paper handed back with a lower mark than expected, an IA section due soon. Tutors work from the live subject guide, mark practice responses the way an IB examiner would, and send a short note home after each session. If the pairing isn't right after a couple of lessons, we swap the tutor rather than ask your family to stick with a poor fit.",
    ],
    bullets: [
      "All tutoring for families in Denmark is delivered online; India remains the only country where we offer home visits.",
      "Denmark's IB Diploma runs through both state gymnasiums — Aarhus, Nyborg, Kolding, Birkerød — and private international schools such as Copenhagen International School.",
      "Common requests: the STX-to-IB decision at 1.g, kvote 1 grade-conversion questions, and Extended Essay or IA feedback.",
      "Trial lesson before any commitment, a written note after every session, and a different tutor if the match isn't working.",
    ],
  },

  programmesIntro: "The IB continuum reaches Denmark through two quite different school types — a state gymnasium's IB stream sitting alongside its STX classes, and an international school running PYP through DP as a single, purpose-built pathway. Our tutors work online across all four programmes and adjust to whichever setting your child is actually in. Below is how each stage maps onto Danish schooling.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Ages 3-12 · Danish Børnehaveklasse through Grade 5 equivalent",
      description: "The Primary Years Programme runs on transdisciplinary units of inquiry rather than separate subjects. Tutoring at this age stays gentle — reading confidence, number sense, and the research and presentation skills a unit of inquiry expects — building toward the Grade 5 PYP Exhibition.",
      countryNote: "PYP in Denmark is offered by a small number of private international schools such as Copenhagen International School and the International School of Billund, rather than by folkeskole, so families are usually already choosing an international pathway deliberately from an early age.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Ages 11-16 · roughly Danish Grades 6-10 equivalent",
      description: "MYP spans five years across eight subject groups, assessed against criteria on a scale that looks nothing like Denmark's own 7-point grading. Tutors work on criterion-based tasks and MYP's specific command terms, plus the Personal Project in the final MYP year — proposal, process journal and final report.",
      countryNote: "A student finishing MYP at an international school in Denmark typically moves either into that same school's DP or across into a Danish gymnasium's STX or IB stream, so the transition question is worth planning a year ahead rather than deciding at the last moment.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Ages 16-19 · gymnasium years 1.g to 3.g",
      description: "The Diploma Programme is six subjects at Higher or Standard Level plus Theory of Knowledge, the Extended Essay and CAS. Tutors focus on Higher Level depth, internal assessments, past-paper technique and the command terms IB examiners actually mark against, with separate sessions for Extended Essay supervision and drafting.",
      countryNote: "Danish state gymnasiums running the IB do so as a genuine alternative to STX, HHX or HTX inside the same public system, so a student's IB grades ultimately feed the same kvote 1/kvote 2 university admission process as any other Danish upper-secondary qualification.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Ages 16-19 · gymnasium years 1.g to 3.g",
      description: "The Career-related Programme pairs at least two Diploma courses with a career-related study and the CP core — personal and professional skills, service learning, added language study and a reflective project. We teach the underlying DP subjects to full standard and coach the reflective piece from an ethical question through to a finished submission.",
      countryNote: "CP is not currently a common offering among Danish IB gymnasiums or international schools, so a family specifically wanting it may need to look beyond Denmark's borders or consider whether a DP-plus-vocational combination through the local system meets the same goal.",
    },
  ],

  subjectsIntro: "Families in Denmark generally know exactly which subject and level they need covered — a Higher Level science ahead of a mock, a Standard Level subject that's slipping, an Extended Essay stuck at the planning stage. Sessions run online in Danish local time and are planned around the May examination session that Danish IB schools sit, working from whichever subject guide your child's gymnasium or international school actually teaches.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "Higher and Standard Level", description: "Danish students arriving from a strong folkeskole maths background are often technically capable but unused to writing the extended justification an IB paper rewards. Sessions build calculus and algebraic proof at HL, while SL work stays focused on the specific grade a Danish university programme actually requires for entry." },
    { name: "Mathematics: Applications and Interpretation", levels: "Higher and Standard Level", description: "Modelling, statistics and calculator-based problem solving sit at the centre of this course, which suits students heading toward a Danish business or social-science degree where applied data work matters more than pure theory. Tutors concentrate on interpreting results in context, the area Danish candidates most often drop marks on." },
    { name: "Physics", levels: "Higher and Standard Level", description: "Mechanics, fields and thermodynamics are taught through worked problem sets, with dedicated time on the scientific investigation write-up an examiner actually credits. Denmark's gymnasium physics tradition is strong, so tutoring here often means sharpening exam technique rather than rebuilding foundations." },
    { name: "Chemistry", levels: "Higher and Standard Level", description: "Bonding, energetics and organic chemistry get broken into manageable calculation steps, and Higher Level students receive direct help scoping and writing their scientific investigation. Sessions work from the current syllabus rather than an older edition still floating around a classroom." },
    { name: "Biology", levels: "Higher and Standard Level", description: "The current DP course runs on cross-cutting themes rather than a strict linear order, and tutors map that structure explicitly against the class's own scheme of work while drilling the command terms — analyse, evaluate, discuss — that actually carry the marks." },
    { name: "Economics", levels: "Higher and Standard Level", description: "Micro, macro and the global economy are taught through examples a Danish student can genuinely research and cite, including the three internal-assessment commentaries built from real news articles. Diagram precision and evaluative writing account for more of the final grade than most students expect." },
    { name: "Business Management", levels: "Higher and Standard Level", description: "Core units and HL-only tools taught through real case studies rather than definitions alone. Tutors help scope the internal assessment, structure the write-up, and target the application and evaluation criteria where most candidates lose marks they didn't need to." },
    { name: "History", levels: "Higher and Standard Level", description: "Prescribed subjects, world-history topics and the HL regional option, often with a Nordic or European angle where a Danish school selects it. Sessions build source evaluation, essay argument and the historical investigation, working from whichever regional option the class actually studies." },
    { name: "Geography", levels: "Higher and Standard Level", description: "Core units, optional themes and the HL global-interactions extension, taught with attention to the case-study recall and command-term precision that Danish IB candidates are marked against, plus support for the fieldwork component many gymnasiums build into a school trip." },
    { name: "Danish A: Language & Literature", levels: "Higher and Standard Level", description: "For students taking their literature course in Danish, sessions build the comparative and global-issue framing IB expects — a different skill from the close textual analysis a Danish folkeskole or gymnasium dansk class traditionally rewards — alongside the learner portfolio and individual oral." },
    { name: "English A and English B", levels: "Higher and Standard Level", description: "English A suits students schooled mainly in English at an international school; English B suits Danish-medium students building fluency toward DP-level analysis and the individual oral, with the five prescribed themes covered from a genuinely earlier starting point." },
    { name: "Computer Science", levels: "Higher and Standard Level", description: "Programming in Python or Java alongside the theory content — data structures, system fundamentals, logic — that a written paper tests more heavily than students expect. The internal-assessment computational solution gets separate coaching from a workable idea through to documented testing." },
    { name: "Environmental Systems and Societies", levels: "Higher and Standard Level", description: "This interdisciplinary course counts toward two subject groups, useful for a student managing a tight timetable. Sessions cover systems diagrams and environmental value systems, with Danish and Nordic environmental policy examples worked in where the syllabus allows it." },
  ],

  regionsTitle: "Cities, gymnasiums and school communities across Denmark",
  regionsIntro: "IB Gram tutors work with families across Denmark on one time zone — CET in winter, shifting to CEST in summer, roughly three and a half to four and a half hours behind Indian time depending on the season. Most families choose a late-afternoon slot straight after school or an early evening one, and the clock-change handling sits on our side, not yours.",
  regions: [
    { name: "Copenhagen", note: "Home to Copenhagen International School and Birkerød Gymnasium just north of the city, giving Copenhagen families access to both a full private IB continuum and a public gymnasium IB stream within commuting distance." },
    { name: "Aarhus", note: "Aarhus Gymnasium runs a well-established IB Diploma alongside its STX programme, and nearby Grenaa Gymnasium offers a pre-IB year plus the Diploma, giving the wider Aarhus and East Jutland area real local IB options." },
    { name: "Odense", note: "Nyborg Gymnasium, a short train ride from Odense, offers the IB Diploma to students across Funen, so Odense families often commute for gymnasium days while relying on online tutoring for the rest of the week." },
    { name: "Kolding & the Triangle Region", note: "Kolding Gymnasium runs an IB stream serving the Triangle Region between Jutland and Funen, drawing students from a wide catchment where daily travel to a second nearby IB school isn't realistic." },
    { name: "Billund", note: "Home to the International School of Billund, which teaches PYP and MYP; families here plan early for where their child continues into DP, whether at another Danish IB gymnasium or an international school abroad." },
    { name: "North Zealand (Birkerød & surrounding towns)", note: "Birkerød Gymnasium's IB stream draws families from across North Zealand who want a public-system IB option without a daily commute into central Copenhagen." },
    { name: "East Jutland (Grenaa & Djursland)", note: "Grenaa Gymnasium's pre-IB and IB Diploma programme gives families in the Djursland area a genuine local route into the Diploma without relocating toward Aarhus itself." },
    { name: "Southern Denmark & smaller towns", note: "Families outside the handful of towns with an IB-teaching gymnasium rely on online tutoring most heavily, since the nearest specialist teacher for a Higher Level subject may be well over an hour's drive away." },
  ],

  schoolDisclaimer: "IB Gram is an independent tutoring service. Schools named on this page appear only to describe the IB landscape families in Denmark study within. We hold no affiliation, endorsement, partnership or authorisation from any school named here, from the International Baccalaureate Organisation, or from the Danish Ministry of Children and Education.",
  schoolClusters: [
    {
      city: "Copenhagen",
      note: "Copenhagen families choose between a full private IB continuum and a nearby public gymnasium IB stream, so requests here often start with which route actually fits, before narrowing to a specific subject. Extended Essay supervision and HL sciences dominate the requests we see.",
      schools: [
        "Copenhagen International School",
        "Birkerød Gymnasium (North Zealand, near Copenhagen)",
      ],
    },
    {
      city: "Aarhus",
      note: "Aarhus Gymnasium's established IB Diploma draws students from across the city and East Jutland, and requests typically focus on the jump from pre-IB into full Higher Level workload during 2.g.",
      schools: [
        "Aarhus Gymnasium",
        "Grenaa Gymnasium (Djursland, near Aarhus)",
      ],
    },
    {
      city: "Odense & Funen",
      note: "Funen families lean on Nyborg Gymnasium for the Diploma itself and on online tutoring for everything the daily commute doesn't leave time for, particularly IA drafting and past-paper practice ahead of mocks.",
      schools: [
        "Nyborg Gymnasium",
      ],
    },
    {
      city: "Kolding & Billund",
      note: "Kolding Gymnasium serves the Triangle Region's IB Diploma students, while families near Billund often start at the International School of Billund's PYP or MYP years before choosing a Diploma school further afield.",
      schools: [
        "Kolding Gymnasium",
        "International School of Billund",
      ],
    },
  ],

  modesIntro: "Every lesson for a family in Denmark happens on a screen, with a shared digital whiteboard and a saved record of what was covered. We don't send a tutor to a Danish address — that stays an India-only arrangement — so the whole schedule is instead built around a Danish school day, gymnasium timetable and CET/CEST clock. Three formats between them cover most situations.",
  modes: [
    {
      title: "One-to-one online IB tutoring",
      description: "One tutor, one student, working on whatever is actually causing trouble — an HL Chemistry topic that didn't land in class, or an Extended Essay stuck at the planning stage. Lessons draw on your child's own school materials and marked feedback rather than a generic worksheet, running 60 or 90 minutes on a repeating Danish-time slot.",
      bullets: [
        "A fixed weekly slot in Danish local time, with the CET/CEST shift managed on our side each March and October.",
        "Lessons built from your child's own gymnasium or international-school materials and teacher feedback.",
        "A short written note follows every session, so progress is visible without a parent sitting in on all of it.",
        "Well suited to IA and Extended Essay coaching, Higher Level content, and gymnasium-to-international transfers.",
      ],
    },
    {
      title: "Small-group online sessions",
      description: "Two to four students at a similar level share one tutor and one screen, a practical option where a gymnasium's own IB cohort for a subject is small to begin with. Groups form around subject, level and a workable time slot, at a lower per-student rate than one-to-one.",
      bullets: [
        "Small groups of two to four, matched on subject, level and a shared Danish-time window.",
        "Useful where a gymnasium's IB stream runs a subject to a handful of students only.",
        "Lower cost per student, while the tutor and weekly slot stay the same.",
        "Moving to one-to-one later is simple if the group's pace stops suiting your child.",
      ],
    },
    {
      title: "Intensive exam-block sessions",
      description: "Concentrated bursts booked around a real deadline — May examinations, a gymnasium mock series, or an internal-assessment submission date. In these windows a student might do three or four sessions across a week or two, working timed past papers under proper conditions with feedback returned before the next attempt.",
      bullets: [
        "Timed, examiner-style past-paper practice with feedback turned around inside the same week.",
        "Built around the May examination session that Danish IB gymnasiums and international schools both sit.",
        "Scheduled through school holidays as well as term time, so it never competes with regular coursework.",
        "Best booked four to six weeks ahead, since the popular after-school slots fill first as May approaches.",
      ],
    },
  ],

  sections: [
    {
      heading: "STX, HHX, HTX or IB: how Denmark's upper-secondary routes actually compare",
      paragraphs: [
        "Most Danish teenagers finishing folkeskole choose between four main upper-secondary tracks. STX (Studentereksamen) is the broad academic route and the default choice for university-bound students. HHX (Higher Commercial Examination) leans toward business and economics, HTX (Higher Technical Examination) toward technical and scientific subjects, and HF (Higher Preparatory Examination) offers a shorter, more flexible two-year route often chosen by students starting later or wanting a specific subject combination. All four are graded on Denmark's 7-point scale and lead to Danish university entry through the same admissions system.",
        "The IB Diploma sits alongside these as a genuinely separate international qualification, available at a small number of Danish gymnasiums as an alternative stream to their STX classes, and at private international schools as a complete PYP-to-DP pathway. Where STX asks students to choose a study line with a fixed subject bundle, the IB Diploma is built around six subjects across defined groups plus Theory of Knowledge, the Extended Essay and CAS — a structure that rewards sustained coursework and research skills as much as final exam performance.",
        "For Danish families, the practical decision at age 15 or 16 usually comes down to two questions: does a nearby school actually offer the IB, and does the family expect their child to study at a Danish university, an international one, or hasn't decided yet. STX, HHX and HTX are optimised for the Danish system specifically; the IB Diploma travels more easily to universities outside Denmark while remaining fully usable for Danish university admission through the same kvote system every other Danish qualification uses.",
        "None of Denmark's tracks is inherently harder in a way that survives close comparison — each measures a different mix of skills, with different weighting toward coursework, orals and final written exams. What matters practically is knowing which track your child is actually on, how heavily internal assessment counts toward the final grade in each subject, and what the school's own deadline calendar looks like heading into the spring examination period.",
        "Because a Danish IB gymnasium runs its Diploma stream inside a public school offering STX to most other students, families sometimes assume the two are more similar than they actually are. They aren't — the assessment structure, grading scale before conversion, and workload rhythm differ meaningfully, which is exactly why a tutor matched specifically to the IB syllabus, rather than general gymnasium subject knowledge, tends to make the bigger difference.",
      ],
      bullets: [
        "STX, HHX, HTX and HF are Denmark's main national upper-secondary routes, all graded on the 7-point scale.",
        "The IB Diploma is a separate international qualification, offered as an alternative stream at select gymnasiums or as a full continuum at international schools.",
        "STX-style tracks are optimised for Danish university entry; the IB Diploma travels more easily abroad while still working through kvote admission at home.",
        "Internal assessment weighting and workload rhythm differ meaningfully between STX-family tracks and the IB, even inside the same school building.",
        "A tutor matched to the specific IB syllabus outperforms general gymnasium subject knowledge for IB coursework and exam technique.",
      ],
      table: {
        caption: "Denmark's upper-secondary routes at a glance",
        columns: ["Route", "Typical focus", "Duration", "Grading"],
        rows: [
          ["STX", "Broad academic preparation for university", "3 years", "Danish 7-point scale"],
          ["HHX", "Business, economics and commercial subjects", "3 years", "Danish 7-point scale"],
          ["HTX", "Technical, scientific and technology subjects", "3 years", "Danish 7-point scale"],
          ["IB Diploma", "Six subjects plus TOK, Extended Essay and CAS", "2 years (typically after a pre-IB year)", "IB 1-7 scale, converted for Danish admission"],
        ],
      },
    },
    {
      heading: "How do IB grades convert for Danish university admission?",
      paragraphs: [
        "Denmark's university admissions system runs on two parallel tracks, known as kvote 1 and kvote 2. Kvote 1 admits students purely on their grade point average, converted onto a common scale regardless of which qualification they hold. An IB Diploma holder is eligible for kvote 1 provided their converted average reaches the required threshold, calculated using the official IB-to-Danish grade conversion table published by the Danish Agency for Higher Education and Science.",
        "That conversion table maps each IB grade directly onto the Danish 7-point scale: an IB 7 converts to a Danish 12, an IB 6 to a 10, an IB 5 to a 7, an IB 4 to a 4, an IB 3 to a 02, an IB 2 to 00, and an IB 1 to -3. Because the two scales aren't linear in the same places, a strong set of 5s and 6s can convert to a noticeably different-looking Danish average than a student might expect from the raw IB points total alone — which is exactly why checking the actual conversion early, rather than assuming a rough equivalence, matters for planning.",
        "Kvote 2 exists for students whose converted average doesn't clear the kvote 1 threshold, or who want to apply on a broader basis that includes a test, an interview, or other qualifying activity a specific programme sets. IB students uncertain of their eventual average sometimes prepare a kvote 2 application in parallel as a safety route, particularly for competitive programmes such as medicine or dentistry where the kvote 1 cutoff moves each year.",
        "Individual Danish universities and programmes can add their own specific subject requirements on top of the general admission route — a science degree may require a particular Higher Level science or Mathematics level regardless of overall average, for instance. These requirements are set programme by programme, so checking the current admission requirements page for each target course, not just the general kvote 1 threshold, is worth doing well before an application deadline.",
        "For a DP2 student, this means predicted grades matter twice over: once for any application requiring them before final results exist, and again as the number that gets run through the official conversion table the moment real results are released. Tutoring aimed at lifting one borderline Higher Level subject from a 5 to a 6, for instance, can move the converted average from a 7 to a 10 on that single subject — a difference worth planning around deliberately rather than leaving to the exam itself.",
      ],
      bullets: [
        "Kvote 1 admits on grade point average alone; kvote 2 adds tests, interviews or other qualifying criteria for those who don't clear kvote 1.",
        "The official conversion table maps IB 7 to Danish 12, IB 6 to 10, IB 5 to 7, IB 4 to 4, IB 3 to 02, IB 2 to 00, and IB 1 to -3.",
        "Because the scales aren't evenly spaced, a strong IB result doesn't always convert the way a raw points total might suggest.",
        "Individual programmes can add subject-specific requirements on top of the general kvote 1 average threshold.",
        "Predicted grades matter for early applications; final results are what actually run through the conversion table.",
      ],
      table: {
        caption: "Official IB-to-Danish grade conversion",
        columns: ["IB grade", "Danish 7-point equivalent"],
        rows: [
          ["7", "12"],
          ["6", "10"],
          ["5", "7"],
          ["4", "4"],
          ["3", "02"],
          ["2", "00"],
          ["1", "-3"],
        ],
      },
    },
    {
      heading: "IB internal assessments, TOK and the Extended Essay in a Danish gymnasium year",
      paragraphs: [
        "Denmark's academic year runs August to June, aligning neatly with the northern-hemisphere IB calendar most schools worldwide follow, so DP2 students in Denmark work toward the same May examination session as international-school peers elsewhere. Internal assessments, the Extended Essay and TOK components cluster in the months beforehand, typically from the autumn of 2.g through the winter of 3.g, alongside whatever STX-track coursework the rest of the gymnasium is managing on a different calendar.",
        "Internal assessments are set and marked at school, then moderated externally by the IB, with weighting that varies by subject group — roughly a fifth in several sciences and in mathematics, more in language, arts and performance subjects. Tutoring at this stage is largely diagnostic: reading the published criteria alongside your child, pinpointing exactly which strand a current draft is losing marks against, and sending the student back to their own work with one specific, actionable change.",
        "The Extended Essay is an independent research paper of around 4,000 words, developed through scheduled reflection sessions with a school supervisor; TOK carries an exhibition plus a shorter essay written to a prescribed title. Danish students researching a Denmark-specific topic — a piece of national history, a local environmental issue, a Danish literary text — often have excellent access to source material through public libraries and university databases, which a tutor can help put to proper use.",
        "The line here holds regardless of country. Every IA, Extended Essay and TOK submission is confirmed as the student's own work and checked through similarity detection before being accepted. Coaching means explaining a misread criterion, asking the question that exposes a weak inference, working through a comparable but separate example, and checking that references are handled correctly — never supplying finished text for a student to submit as their own.",
        "Because Danish gymnasiums run STX and IB cohorts through the same building on largely the same academic calendar, IB students sometimes find their own deadlines get less individual attention than a dedicated IB school might offer, simply because the majority of the school is following a different programme. Planning IA and Extended Essay work several weeks ahead of the school's own internal deadline, rather than at the deadline itself, tends to matter more here than in a fully IB-only setting.",
      ],
      bullets: [
        "Denmark's August-to-June academic year lines up with the IB's standard northern-hemisphere calendar and May examination session.",
        "IA, Extended Essay and TOK work typically clusters from the autumn of 2.g through the winter of 3.g.",
        "Internal assessment weighting varies by subject group, roughly a fifth in sciences and mathematics, more in languages and the arts.",
        "Every IA, EE and TOK submission must be the student's own work; tutors coach technique and never write or ghost-edit a submission.",
        "Plan coursework deadlines a few weeks ahead of the school's own date, since a gymnasium's main focus often sits with its larger STX cohort.",
      ],
    },
    {
      heading: "Choosing between a Danish gymnasium's IB stream and a full international school",
      paragraphs: [
        "A family weighing where to send a 15- or 16-year-old for the IB Diploma in Denmark generally faces a real, practical choice rather than a purely academic one. A gymnasium's IB stream — at Aarhus, Nyborg, Kolding or Birkerød, for instance — sits inside an otherwise Danish-speaking public school, usually offers a smaller IB cohort than a dedicated international school, and typically costs the same as any other Danish upper-secondary education for residents. A private international school such as Copenhagen International School runs the full PYP-to-DP continuum in English throughout, with tuition fees and an admissions process closer to what an expatriate family elsewhere might expect.",
        "Language is the first practical filter. A student joining a Danish gymnasium's IB stream needs enough Danish to manage daily school life even if the IB subjects themselves are taught in English, since assemblies, announcements, and peer interaction outside the IB cohort happen in Danish. A student without functional Danish is generally better served by an international school's full-English environment, at least initially.",
        "Cohort size matters more than families often expect going in. A gymnasium's IB stream might run a single class of fifteen to twenty-five students across the whole Diploma, meaning some Higher Level subject combinations simply aren't offered if too few students choose them in a given year. An international school with a larger, more established IB history tends to offer a broader subject menu, though at meaningfully higher cost for non-resident families.",
        "University destination plans should factor in here too, though less decisively than families sometimes assume. Both routes lead to a fully valid IB Diploma that converts identically through the kvote 1 process for Danish university entry, and both are equally recognised by universities abroad — the choice between them is really about daily school experience, cohort size and subject availability rather than which Diploma 'counts more.'",
        "Whichever setting a family chooses, tutoring plays a similar role: filling gaps a school's own cohort size or teaching capacity can't cover for every subject and level combination, and giving a student one-to-one time a class of fifteen or more rarely allows for in a single teaching hour.",
      ],
      bullets: [
        "A gymnasium's IB stream sits inside a Danish-speaking public school; an international school runs the full continuum in English.",
        "Functional Danish matters for daily life at a gymnasium's IB stream, even where the IB subjects themselves are taught in English.",
        "Smaller gymnasium IB cohorts can limit which Higher Level subject combinations are actually offered in a given year.",
        "Both routes lead to an identical IB Diploma, recognised the same way by Danish universities through kvote 1 and by universities abroad.",
        "Tutoring fills subject-availability and one-to-one attention gaps that either setting's cohort size can create.",
      ],
    },
    {
      heading: "Does an IB Diploma earned in Denmark travel well to universities abroad?",
      paragraphs: [
        "Yes, generally more easily than a purely Danish qualification does, which is one reason some families choose the IB Diploma specifically with an eventual move abroad in mind. The IB is assessed and moderated centrally rather than by any single national system, so a university in the UK, the Netherlands, Germany or further afield reads an IB transcript from a Danish gymnasium the same way it reads one from anywhere else — through the subject list, Higher and Standard Level split, and total points out of 45.",
        "UK universities typically set entry offers as a total points figure alongside specific Higher Level grades, in much the same way they'd set an A Level offer; many also publish separate advice for Danish STX-track applicants, which doesn't apply to an IB Diploma holder from a Danish gymnasium. US universities frequently award course credit or advanced standing for Higher Level scores of 5 and above, though the exact policy is set institution by institution and worth checking directly rather than assumed.",
        "For students planning to stay in Denmark for university but keeping an overseas option open, the useful habit is treating predicted grades as doing double duty: they feed an early overseas application before final results exist, and they also give a rough sense of where the eventual kvote 1 conversion is likely to land. A subject a Danish university's admissions page barely mentions might carry real weight for a specific programme abroad, so it's worth reading both sets of requirements before finalising Higher Level choices in 1.g.",
        "Danish gymnasiums running the IB alongside STX generally have less in-house experience guiding a family through an overseas university application than a longer-established international school might, simply because most of their graduating cohort applies within Denmark. Tutoring can fill that specific gap — not by handling the application itself, but by making sure a student's subject and level choices two years earlier don't quietly close off a programme abroad the family only starts seriously considering in 3.g.",
        "The practical sequence is the same wherever a family eventually applies: shortlist two or three realistic universities in Denmark and, if relevant, abroad during 1.g or early 2.g, read each one's current entry requirements directly rather than relying on general reputation, and build subject and Higher Level decisions around what those specific programmes actually ask for.",
      ],
      bullets: [
        "An IB Diploma from a Danish gymnasium is read by universities abroad the same way as one from any other country.",
        "UK offers are typically set as a total points figure plus specific Higher Level grades; check each university directly.",
        "Many universities abroad award credit for Higher Level scores of 5 and above, though the policy is set institution by institution.",
        "A Danish IB gymnasium may have less routine experience with overseas applications than a longer-established international school.",
        "Shortlist target universities early and read their current requirements before finalising Higher Level subject choices.",
      ],
    },
    {
      heading: "How online IB tutoring works across a Danish afternoon and evening",
      paragraphs: [
        "Every lesson is booked in Danish local time — CET through the winter, CEST once Denmark moves its clocks forward in late March. Tutors work from India, roughly four and a half hours ahead of Denmark in winter and three and a half in summer, so a Danish afternoon or early-evening slot sits comfortably inside a normal working day on the tutor's side without either party working unsociable hours.",
        "A first session is diagnostic rather than a straight lesson. The tutor finds out what your child's class is genuinely working on right now, has them talk through two or three problems aloud, and looks for where the reasoning actually breaks down rather than only where the final answer is wrong. From there, sessions settle into 60 minutes for steady maintenance or 90 for heavier IA and past-paper work.",
        "Everything runs over video against a shared interactive whiteboard, so a mathematics or science tutor writes and works alongside your child on the same page in real time, while a humanities or language tutor uses a shared document with visible comments instead. Marked papers, mark schemes and worked solutions get saved into a folder the family keeps permanent access to, useful for revision later and for a parent wanting to see exactly how something was explained.",
        "Sending the school's own paperwork before a first lesson helps enormously — the DP internal-assessment brief with its word limits, MYP task-specific criteria, or the actual current subject guide the gymnasium is teaching from. Tutors work directly from that material, so feedback matches the language a student's own teacher will use when marking the final version.",
        "A short written note follows every lesson describing what was covered and what to work on before the next one, with a fuller check-in every few weeks timed around school reporting periods. Every tutor's subject knowledge and teaching background is verified before any match is made, sessions run through the platform rather than a private number, and a parent is welcome to sit in, particularly for a younger MYP or PYP student.",
      ],
      bullets: [
        "Sessions run in Danish local time, with the CET-to-CEST clock change each March and October handled on our side.",
        "A diagnostic opening session finds where reasoning actually breaks down, not just where the last answer was wrong.",
        "Shared whiteboard, annotated past papers and a saved folder the family can reopen anytime after a lesson.",
        "Send the school's own task sheet or subject guide so feedback matches exactly what a Danish teacher marks against.",
        "Tutors are verified before matching, and a parent is always welcome to sit in on a lesson.",
      ],
    },
  ],

  process: [
    { title: "Tell us the stage, subject and school type", description: "A short note over email or WhatsApp is enough to start: your child's stage — PYP, MYP or DP — the subject and level, and whether they're at a gymnasium's IB stream or a full international school. There's no lengthy form to fill in first." },
    { title: "We put forward a tutor who has taught that exact course", description: "Matching runs on subject, level and board rather than general IB familiarity — DP Chemistry HL and IGCSE-equivalent content are different jobs entirely. You see a tutor's qualifications and teaching history before anything gets booked." },
    { title: "A free trial lesson, set for a Danish-time slot", description: "The trial happens online over video with a shared whiteboard, timed for after school. Your child works through a genuine problem during the lesson, and you receive a candid written note on where the gaps actually sit." },
    { title: "A plan built around your school's real calendar", description: "Once the fit looks right, we build the plan against your gymnasium or school's own deadlines — internal assessments, mocks and the May examination session. You choose the weekly frequency and pay per session or per block, with no long-term lock-in." },
    { title: "Regular check-ins, with a tutor change if needed", description: "A short note follows every lesson, with a fuller review roughly every month covering what's improved and what still needs work. If the pairing isn't right, say so and a different tutor takes over." },
  ],

  whyPoints: [
    { title: "Matched to the exact subject, level and school setting", description: "A gymnasium IB stream and a full international school run the IB somewhat differently in practice, and we match tutors who understand both, so the first lesson starts from an accurate picture rather than a generic assumption." },
    { title: "Scheduled around Danish local time, clock changes included", description: "Sessions land in a Danish afternoon or evening slot, with the CET-to-CEST shift each spring and autumn handled on our side so a booked time never quietly moves without warning." },
    { title: "Coverage from PYP through the full Diploma", description: "Whether your child is at Copenhagen International School, the International School of Billund, or a gymnasium's IB stream in Aarhus, Nyborg, Kolding or Birkerød, we cover the same range of programmes and subjects." },
    { title: "Kvote 1 and kvote 2 awareness built into planning", description: "Understanding how IB grades convert on the Danish 7-point scale shapes which subjects and levels are worth extra attention, particularly for a borderline Higher Level result that could shift a converted average meaningfully." },
    { title: "Coursework help that respects IB's honesty rules", description: "Internal assessments, the Extended Essay and TOK all carry strict academic-integrity requirements, so coaching sharpens a student's own method and argument rather than supplying finished text to submit." },
    { title: "A verified tutor your child approves before you commit", description: "Every tutor's subject knowledge and teaching background is checked before a match is proposed, and the free trial lesson exists so your child can judge the fit directly, which matters more on a video call than most parents expect." },
  ],

  faqs: [
    {
      question: "How do I find a good IB tutor in Denmark?",
      answer: "Start by pinning down your child's exact stage — PYP, MYP or DP — the subject and level, and whether they study at a gymnasium's IB stream or a full international school. Email ibgram24@gmail.com or message +91 7439 368 115 on WhatsApp with those details and we'll suggest a matched tutor rather than a list to search through yourself.",
    },
    {
      question: "Can sessions run in Danish time, including during summer time?",
      answer: "Yes. Sessions are scheduled to Danish local time, and the shift between CET and CEST each spring and autumn is handled on our side, so your booked slot stays at the same local clock time year-round. Most families choose a late-afternoon or early-evening slot after school. Tell us the window that works and we'll match a tutor whose availability genuinely fits.",
    },
    {
      question: "How much does IB tutoring cost in Denmark, and how do we pay?",
      answer: "Cost depends on the programme stage, subject and number of weekly hours — Higher Level sciences and mathematics generally sit above MYP-level support in price. You'll get a written per-session rate before anything is booked. Email ibgram24@gmail.com with your child's stage, subject and level, and raise currency and payment method at the same time, both confirmed before the first paid lesson.",
    },
    {
      question: "Do you offer in-person tutors in Denmark?",
      answer: "No. Every session delivered inside Denmark happens online. In-person tutoring exists only in India, where our tutors are based. For Danish families that means a live one-to-one video lesson with a shared whiteboard and screen-shared past papers, particularly useful for a Higher Level subject a smaller gymnasium IB cohort doesn't have the teaching capacity to support one-to-one.",
    },
    {
      question: "What is kvote 1, and does the IB Diploma qualify for it?",
      answer: "Kvote 1 is Denmark's grade-point-average admission route, open to IB Diploma holders once their result is converted onto the Danish 7-point scale using the official conversion table. Kvote 2, which adds tests, interviews or other criteria, is available for students whose converted average doesn't clear a specific programme's kvote 1 threshold. We can't submit an application on your behalf, but strong final grades make the conversion outcome stronger too.",
    },
    {
      question: "How does an IB grade convert onto the Danish 7-point scale?",
      answer: "Using the official table: IB 7 converts to Danish 12, IB 6 to 10, IB 5 to 7, IB 4 to 4, IB 3 to 02, IB 2 to 00, and IB 1 to -3. Because the two scales aren't spaced evenly, it's worth running your child's actual predicted grades through this table rather than assuming a rough proportional equivalence.",
    },
    {
      question: "Should we choose a gymnasium's IB stream or a full international school?",
      answer: "It depends mainly on language comfort, cohort size and cost. A gymnasium's IB stream sits inside a Danish-speaking public school and usually costs the same as any other Danish upper-secondary place, but offers a smaller subject menu. An international school runs entirely in English with a broader subject range, at private-school fees. Both lead to an identical, equally recognised IB Diploma.",
    },
    {
      question: "Do your tutors teach both Higher Level and Standard Level subjects?",
      answer: "Yes, and the distinction matters. Higher Level courses carry more content and longer, harder papers, so HL tutoring spends more time on extension topics and timed exam technique. Standard Level support usually focuses on securing core understanding and steady past-paper practice. Tell us the level for each subject when booking.",
    },
    {
      question: "Can a tutor help with my child's IA, TOK or Extended Essay?",
      answer: "Within the limits the IB sets, yes — narrowing a research question, working through the assessment criteria, testing whether an argument holds up, and reacting to a draft your child actually wrote. A tutor won't write, rewrite or supply text that then gets submitted as your child's own work; everything handed in has to be genuinely theirs.",
    },
    {
      question: "How do you check your tutors before matching one with my child?",
      answer: "Each tutor is interviewed on subject knowledge and on the specific curriculum and level they'll teach, with qualifications and prior teaching experience checked before any match is proposed. If the pace, communication style or level turns out wrong once lessons begin, tell us and a different tutor takes over.",
    },
    {
      question: "Is there a trial lesson before we commit to a schedule?",
      answer: "Yes. An introductory session lets your child and the tutor work through real material together before any ongoing commitment. Use it to check whether the explanations land, whether the tutor clearly knows the syllabus your gymnasium or school uses, and whether the proposed time slot actually suits your household.",
    },
    {
      question: "Which IB subjects do you actually cover?",
      answer: "The commonly taken DP subjects across groups 1 to 5 — both Mathematics routes, Physics, Chemistry, Biology, Economics, Business Management, History, Geography, Computer Science, Environmental Systems and Societies, English A and B, and Danish A — plus MYP and PYP support. Send the exact subject and level from your child's timetable and we'll confirm availability.",
    },
    {
      question: "Do you offer intensive tutoring before the May IB exams?",
      answer: "Yes. Most families step up from one weekly session to two or three from around February, working timed past papers under proper exam conditions with mark-scheme analysis for the specific papers ahead. Book that increase early, since the popular after-school slots close to May fill fastest. Send recent mock results and we'll build the plan around the weakest papers first.",
    },
    {
      question: "We're moving to Denmark mid-year — can you help our child transfer into the IB?",
      answer: "Yes, this is a common request. Tell us which curriculum your child is coming from and whether the new Danish school runs a gymnasium IB stream or a full international continuum, and we'll build bridging sessions around the actual gaps — command terms, grading style, or content not yet covered — rather than dropping them into the new syllabus without preparation.",
    },
    {
      question: "How do we get started with a tutor?",
      answer: "Email ibgram24@gmail.com or reach us on WhatsApp at +91 7439 368 115 with your child's stage and programme, the subject and level, a workable Danish-time window, and what you actually want to change — a stronger grade, calmer exam nerves, or a looming deadline. We'll suggest a tutor and set up an introductory session, with nothing charged until you've seen a lesson and agreed the rate.",
    },
  ],

  internalLinks: [
    { label: "IB tutors by city", href: "/ib-tutors/", description: "Browse city-level IB tutoring hubs and see how matching works in each location." },
    { label: "IGCSE tuition hub", href: "/igcse/", description: "Cambridge and Edexcel IGCSE subject support, syllabus notes and past-paper practice." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "How the DP is structured, what HL and SL demand, and where students usually need help." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria, ePortfolio and personal project support for the middle years." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "Math AA and AI at HL and SL, from foundations through Paper 3 and the exploration." },
    { label: "Verified tutor profiles", href: "/tutors/", description: "See qualifications, subjects, teaching mode and availability before you commit." },
    { label: "Test preparation", href: "/admissions/test-prep/", description: "Exam-season preparation running alongside school coursework and internal assessments." },
    { label: "Talk to the team", href: "/contact-us/", description: "Ask about scheduling, subjects or tutor fit before booking a trial session." },
    { label: "IB and IGCSE guides", href: "/blog/", description: "Study guides, syllabus explainers and revision planning written for students." },
    { label: "IB tutors in Sweden", href: "/sweden/", description: "Our sister page for Nordic families studying the IB Diploma in Sweden." },
    { label: "IB tutors in Norway", href: "/norway/", description: "Online IB tutoring for another Nordic country running the Diploma in public schools." },
    { label: "IB tutors in the Netherlands", href: "/netherlands/", description: "IB support for families comparing Denmark with another Western European IB destination." },
  ],

  closingHeading: "Book a free trial with an IB tutor in Danish time",
  closingBody: "Tell us your child's stage, subject, level, and whether they're at a gymnasium's IB stream or a full international school. You'll hear back with a named tutor, a look at their teaching background, and a couple of trial times already set for a Danish afternoon or evening — free of charge, with nothing to continue if it isn't the right fit. Email ibgram24@gmail.com or message +91 7439 368 115 on WhatsApp, mentioning your child's stage and current school.",
};
