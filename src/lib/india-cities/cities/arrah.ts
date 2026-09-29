import type { CitySeoPage } from "../types";

/**
 * /arrah/ - IB and IGCSE tutoring page for Arrah, Bihar (Bhojpur district). Online-only delivery:
 * tutors do not visit homes in Arrah, since in-person home tuition is offered only in Gurugram
 * and parts of Delhi NCR. No IB World School or Cambridge/Edexcel IGCSE school is confirmed inside
 * Bhojpur district, so stripSchools stays empty and schoolClusters point honestly at Patna, Kolkata
 * and the Delhi NCR boarding belt where Bihar families actually send a child for these curricula.
 * Rendered with the shared CountryLanding layout used by /gurgaon/.
 */
export const arrah: CitySeoPage = {
  slug: "arrah",
  countryName: "Arrah",
  countryNameLong: "Arrah, Bihar",
  demonym: "Arrah",
  state: "Bihar",
  stateCode: "IN-BR",
  flagCode: "in",
  countryCode: "IN",
  region: "Bihar, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "We build the weekly slot around Arrah's own school bell, around the weeks the Son and Ganga run high each monsoon, and around the four days every household here keeps free for Chhath",
  lastUpdated: "2026-09-21",
  geo: { latitude: 25.5541, longitude: 84.6636 },
  wikipedia: "https://en.wikipedia.org/wiki/Arrah",
  alternateNames: ["Ara", "Arah"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Arrah | Online Home Tuition",
  metaDescription:
    "IB and IGCSE tuition for Arrah and Bhojpur students: PYP to DP plus Cambridge IGCSE, live one-to-one online classes, honest fees, free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Tuition in Arrah",
  heroEyebrow: "IB & IGCSE ONLINE TUITION FOR ARRAH FAMILIES",
  heroSubtitle:
    "Nobody in Bhojpur district currently runs an IB or Cambridge classroom, so a family here starts from a different question than a Delhi or Kolkata parent would: not which school teaches it locally, but which tutor across the country actually teaches this exact IB subject or Cambridge code well. Lessons happen on a screen, one child and one tutor at a time, timed around Arrah's own school day rather than a generic slot, and nobody drives out to a house to deliver them.",
  primaryKeyword: "IB and IGCSE tutors in Arrah",
  imageAltText: "IB Diploma student from Arrah on a live video call, screen-sharing a Physics past paper with their tutor",
  secondaryKeywords: [
    "IB tutor Arrah",
    "IGCSE tutor Arrah",
    "IB home tuition Arrah",
    "IGCSE home tuition Arrah",
    "IB private tuition Arrah",
    "IB Maths tutor Arrah",
    "IGCSE Maths tutor Arrah",
    "IB Physics tutor Arrah",
    "IB Chemistry tutor Arrah",
    "IB Biology tutor Arrah",
    "IB DP tutor Arrah",
    "IB MYP tutor Arrah",
    "IB PYP tutor Arrah",
    "IGCSE online tuition Arrah",
    "Cambridge IGCSE tutor Arrah",
    "IB tutor Nawada Road Arrah",
    "IGCSE tutor Ramna Arrah",
    "online IGCSE tutor Bhojpur",
    "IB tutor Arrah Bihar",
    "IGCSE tutor Koilwar",
  ],

  heroTrustPoints: [
    "Every tutor is picked against your child's actual specification code or IB subject and level, not a loose subject name",
    "Lessons stay on screen. Calling at a family's door only happens in Gurugram and pockets of Delhi NCR, never here",
    "Watch a genuine lesson before a single rupee changes hands",
    "Independent of every school, board and coaching brand named on this page",
  ],
  heroStats: [
    { value: "BSEB and CBSE country", label: "What actually runs in Bhojpur schools" },
    { value: "PYP through DP", label: "Every IB stage, not just the Diploma" },
    { value: "IST throughout", label: "Tutor and student share one clock" },
    { value: "First class, no charge", label: "Judge the tutor before paying" },
  ],

  intro: {
    heading: "What tutoring actually looks like for an IB or IGCSE family in Arrah",
    paragraphs: [
      "Bhojpur runs on the Bihar School Examination Board almost everywhere, with a thin CBSE layer at newer private schools around the bypass and Nawada Road. No campus in Arrah, or anywhere else in the district, holds IB or Cambridge/Edexcel authorisation. Three kinds of household still write to us from here: parents of a child boarded at an international school elsewhere, families who have just been posted into Arrah mid-course, and Bhojpur parents thinking seriously about leaving BSEB or CBSE for Cambridge before Class 9 begins.",
      "The lesson itself works the same regardless of which of those three describes a family. A tutor sits with one learner, marks up a past paper live on a shared screen, or walks through exactly how an Internal Assessment should be structured, week after week. What changes for Arrah specifically is where that tutor is found: rather than pulling from a handful of nearby names, as a Delhi or Mumbai family might, we pull from anywhere in India someone has actually taught that precise course recently, because Bhojpur itself offers nothing to draw on yet.",
      "Nobody travels for any of this. House calls belong only to Gurugram and parts of Delhi NCR; a family in Arrah, or anywhere else outside that pocket, needs a connection and a screen, nothing more. Removing the commute from the equation is what lets a household near Ramna Maidan book an Additional Mathematics specialist who happens to live in Kochi, rather than settling for whoever is geographically closest, which in Bhojpur's case would usually be no one at all.",
      "This page names no school, board or coaching brand IB Gram is tied to, and that stretches to Pearson Edexcel, Cambridge Assessment International Education and the IB Organization itself. Teaching, explaining and marking are where a tutor's role stops; if a request ever amounts to someone else finishing a graded piece of coursework, an Extended Essay chapter or a chunk of an Internal Assessment, that request gets turned down.",
    ],
    bullets: [
      "IB support across the full PYP-to-DP range for boarding and recently relocated families",
      "Cambridge IGCSE lined up against the exact code and tier a target school actually sets",
      "Live, one-to-one lessons kept firmly on Indian Standard Time",
      "A written note follows the free trial, well before any payment is discussed",
      "No lesson runs in person here; that stays a Gurugram and Delhi NCR arrangement only",
    ],
  },

  programmesIntro:
    "None of the four IB stages is taught inside Bhojpur district today, so every family reaching us here does so indirectly, through a boarding placement, a transfer that landed mid-year, or plans for a future move away from BSEB. Below is what each stage actually involves once tutoring starts.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12",
      description:
        "A younger child here moves through six broad units a year, each one pulling Maths, language and science together around a single big idea rather than teaching them apart, and the final year adds the Exhibition, where the class researches and presents a question of its own choosing to the wider school. No external exam sits anywhere in this stage. Tutoring instead goes toward daily reading stamina, a comfortable feel for numbers, and coaching a child toward asking a question worth spending weeks on.",
      countryNote:
        "Nearly every PYP family we hear from in Arrah has just arrived mid-year on a railway, bank or government posting, so the first few weeks of tutoring go into settling a child back into study habits their last school had already built.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16",
      description:
        "Grading looks unfamiliar next to a Bihar Board report card: four lettered criteria per subject stand in for a single overall score, an on-screen eAssessment closes the programme at some schools, and the Personal Project comes due a year before the course ends. Where students genuinely stumble is the habit of describing what they know instead of pulling it apart the way a criterion rubric actually expects.",
      countryNote:
        "MYP work connected to Arrah is almost always a boarding student catching up on criterion-marked assignments over a school break, since the programme is not taught anywhere in the district.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Three requirements sit above the subject list itself here: a running Theory of Knowledge seminar, an Extended Essay of around four thousand words, and a logged tally of Creativity, Activity and Service hours across both years. Underneath that sit six subjects, split evenly between Higher and Standard Level, with internal coursework typically worth a fifth to a third of the final mark in most of them. Grades for the May sitting come out in early July.",
      countryNote:
        "No school within striking distance of Arrah teaches the Diploma, so a household here is nearly always supporting a child boarded in Delhi, Kolkata or the Mussoorie belt, with tutoring built around that school's own term dates.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "This route keeps two or three Diploma subjects rather than demanding all six, and wraps a separate core around them: a reflective project, a recognised career-related study, and modules aimed at workplace-ready personal and professional skills. Very few schools in India currently offer it, though whichever Diploma subjects sit inside a given student's CP are taught to the same depth as a full Diploma candidate's.",
      countryNote:
        "CP enquiries from Bhojpur district are uncommon simply because the nearest school offering it sits a long way off; when one does come up, tutoring concentrates on the Diploma subjects a student has picked rather than the reflective project.",
    },
  ],

  subjectsIntro:
    "A boarding child catching up on Chemistry HL over the Chhath break wants something very different from a Bhojpur household weighing its first move into Cambridge Extended Maths. So the subject and level come first in any conversation with us, well before the label 'IB' or 'IGCSE' does any real work. The exam series and a workable weekly slot get settled only once that groundwork is in place.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Most requests for this subject arrive the moment Paper 3 throws up a multi-step question nobody in class had prepared for. From there, a tutor's priority is getting a topic for the exploration locked in early, well before a school break narrows down to its last free week." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "This course leans on genuine data, modelling and a graphic calculator used with confidence, not the proof-heavy style AA demands. Students who leave the exploration topic undecided until late in a holiday are the ones who end up rushing it." },
    { name: "IB Physics", levels: "HL / SL", description: "Two written papers reward pacing almost as much as they reward physics itself, and data-booklet fluency has to become second nature. The Scientific Investigation, meanwhile, needs a method sturdy enough that a moderator reading it cold would still follow the logic." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Bonding and structure rarely cause the real trouble; organic mechanisms further into the course are where marks start slipping. Getting the required practical write-up to match an examiner's actual scoring focus takes repeated, deliberate rehearsal rather than a single pass." },
    { name: "IB Biology", levels: "HL / SL", description: "A student can know the syllabus cold and still lose marks by missing what a command word is actually asking for. Statistical grounding matters just as much, since a shaky calculation can undo an otherwise well-designed investigation." },
    { name: "IB Economics", levels: "HL / SL", description: "Quick marks come from a clean diagram tied to a genuinely current example. The harder skill, held back for HL Paper 3, is building an argument that weighs a policy's trade-offs rather than simply describing what the policy does." },
    { name: "IB Business Management", levels: "HL / SL", description: "A memorised definition read back at an examiner earns little; applying that same idea to the specific case printed on the paper is what actually scores, so sessions run almost entirely off past exam cases. The Business Research Project needs one willing, real organisation behind it, never a made-up one." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Neither the Paper 1 unseen commentary nor the Paper 2 comparative essay rewards natural talent as much as it rewards technique that has been drilled repeatedly. Most students also underestimate how much rehearsal the Individual Oral actually needs." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Theory on paper, pseudocode included, only really lands once it has been tested against code that runs, which is why sessions bring in real programming early. The IA itself demands a working product with documentation that genuinely matches it." },
    { name: "IB Psychology", levels: "HL / SL", description: "Getting the biological, cognitive and sociocultural approaches right means citing studies that are both accurate and reasonably current, yet the mark that actually swings a grade usually comes down to whether a long-response answer keeps its structure once the exam clock starts pressing." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Examiners consistently favour a student willing to question a system rather than one who simply reports what a textbook claims about it, so genuine evaluation gets built into sessions from the first lesson onward." },
    { name: "IB Geography", levels: "HL / SL", description: "Naming an actual place and a real figure beats a vague generalisation every time a case study comes up, and any fieldwork submitted gets checked hard for a method that would genuinely survive scrutiny." },
    { name: "IB History", levels: "HL / SL", description: "Paper 1 lives or dies on how closely a student reads the sources provided; Paper 2 instead rewards a single argument held together from the opening line to the last. The two get practised as separate skills, not blended together." },
    { name: "IB Hindi A / B", levels: "HL / SL", description: "Losing marks early usually comes down to register and text-type mismatches rather than language ability itself, so that gets fixed before sessions move on to the unscripted conversation the individual oral actually tests." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "A TOK lesson plays out more like cross-examination than a class: a tutor deliberately argues the opposite side of a prescribed title to see whether a student's reasoning actually survives, and an exhibition commentary gets read for its weakest claim first, not its strongest." },
  ],

  igcseSubjectsIntro:
    "No school inside Bhojpur district teaches Cambridge or Edexcel, so IGCSE requests reaching us from Arrah come almost entirely from a child already placed at a school elsewhere, or a household seriously weighing a move away from BSEB. We start from whatever code and tier the target school has set, then work back from the actual sitting, May-June or October-November, once that is confirmed.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Students switching from BSEB-style arithmetic drills toward Extended tier tend to arrive quick on method but slow without a calculator, and speed built early saves the method marks that a rushed final answer usually costs." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus and vector work show up here well before the IB Diploma would otherwise introduce either topic, which is precisely why this subject makes such a strong lead-in to Maths AA a couple of years later." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "It is rarely the physics itself that trips a student up so much as rearranging an equation quickly under exam conditions, and the alternative-to-practical paper gets its own dedicated slot rather than getting squeezed in as an afterthought." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Sessions build mole-ratio calculations, organic reaction knowledge and alternative-to-practical technique side by side from the outset, instead of leaving the practical component until the theory is supposedly finished." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics and inheritance questions weigh more heavily on a Cambridge paper than most students expect walking in, and drilling the longer extended-response questions separately is usually where the fastest improvement happens." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "A well-drawn diagram picks up marks fast, yet it is the longer evaluative question, routinely skipped in Core-tier preparation, that sessions end up spending the most time building confidence around." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "A flowchart that looks correct on paper often falls apart the moment it becomes actual Python, which is exactly why sessions spend as much time at a keyboard as they do with pseudocode and a pencil." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "A wide vocabulary helps less than most students assume; what actually lifts a grade is timed practice against an unfamiliar passage and summary technique taught as a specific, repeatable skill rather than picked up by chance." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "A memorised textbook definition loses marks against an answer that applies the same theory to the specific scenario printed on the paper, so scenario-based practice is where sessions consistently focus." },
  ],

  regionsTitle: "Arrah neighbourhoods our online IB and IGCSE tutors already cover",
  regionsIntro:
    "A lesson from Arrah runs entirely online, so the localities below matter less as a delivery map and more as context: which school catchment a family belongs to, how the town's traffic and monsoon rhythms shape an evening, and what a normal week already looks like once BSEB or CBSE homework is in the mix.",
  regions: [
    { name: "Nawada Road", note: "A busy residential and school corridor on the edge of town, home to several of Arrah's larger CBSE-affiliated private schools." },
    { name: "Ramna Maidan area", note: "Central Arrah, built around the town's main open ground, with a clear run at evening online sessions once school and coaching wrap up." },
    { name: "Chandi Chowk", note: "An old, dense market quarter where evening study competes directly with the noise of shop-closing hours." },
    { name: "Station Road, near Arrah Junction", note: "A transit-heavy stretch on the Grand Chord rail line, useful shorthand for families timing lessons around visiting relatives." },
    { name: "Judicial Colony and Collectorate area", note: "Government-officer housing near the district administration, where recently transferred families most often ask about switching curricula." },
    { name: "Maharaja College Road", note: "Near the district's oldest degree college, a locality with a strong existing tuition culture built around board-exam and entrance preparation." },
    { name: "Bypass Road (NH 30)", note: "Newer development along the highway bypass, where several of the town's CBSE schools have opened in the past decade." },
    { name: "Koilwar", note: "A bridge town roughly 15 kilometres east on the Son river, sitting on the direct road and rail route toward Patna." },
    { name: "Jagdishpur", note: "A historic town about 25 kilometres out, tied to the 1857 uprising, with a smaller school base than the district headquarters." },
    { name: "Shahpur", note: "A block town north along the Ganga, where families weighing a move to Cambridge or the IB usually check what exists in Arrah itself first." },
  ],

  schoolDisclaimer:
    "No school anywhere in Bhojpur district currently holds IB or Cambridge/Edexcel status, which is why none is named on this page. Where a school does appear, in Patna, Kolkata or Delhi NCR, it describes a place Bihar families genuinely board a child or relocate to for these curricula, not a partner of ours. Pearson Edexcel, Cambridge Assessment International Education, the IB Organization itself, and every school named here: none has a contract, sponsorship or endorsement arrangement of any kind with IB Gram.",
  schoolClusters: [
    {
      city: "Arrah and Bhojpur district itself",
      note: "Neither an IB World School nor a Cambridge or Edexcel campus operates here today; BSEB and CBSE cover the district's schools entirely, which is exactly why families rely on a tutor found elsewhere rather than a local specialist.",
      schools: [],
    },
    {
      city: "Patna, roughly 55 km east",
      note: "Bihar's capital carries a far larger CBSE and ICSE private-school scene and a much bigger coaching market, though it has yet to gain a confirmed IB or Cambridge school of its own, so it works better as a stronger board-school option than an international-curriculum one.",
      schools: [],
    },
    {
      city: "Kolkata, roughly nine hours by train",
      note: "One of the nearer cities with an established IB and Cambridge base; some Bihar families board a child here or relocate for work, then keep the same online tutor once they are settled in.",
      schools: ["The Heritage School, Kolkata", "Calcutta International School"],
    },
    {
      city: "Delhi NCR",
      note: "A frequent choice for families relocating for work or boarding a child specifically for the Diploma years, with a number of established IB schools spread across Delhi and Noida.",
      schools: ["Sanskriti School, Delhi", "Vasant Valley School, Delhi"],
    },
  ],

  modesIntro:
    "Every arrangement out of Arrah is built on the same base: a tutor teaching live over video, one learner at a time, kept on the family's own Indian clock. What actually differs is pace, a steady weekly habit, a tighter push before an exam series, or a plan timed entirely to a boarding school's own holiday dates. Nobody visits a house here; that stays a Gurugram and Delhi NCR arrangement.",
  modes: [
    {
      title: "A standing weekly class",
      description:
        "The same day and hour each week, on a shared screen, built around the family's evening routine in Arrah or a boarding term's own timetable. Most engagements here begin this way and simply carry on.",
      bullets: [
        "The choice of tutor is never limited to whoever happens to be nearby",
        "Works equally for IB DP, MYP and Cambridge IGCSE subjects",
        "Past papers get marked live on screen, one week to the next",
        "One tutor carries a student through the whole term rather than rotating midway",
      ],
    },
    {
      title: "A term tracked with written check-ins",
      description:
        "The weekly rhythm continues underneath, but a short note follows every lesson and a fuller review lands every few weeks, so nobody in the family has to guess how things stand.",
      bullets: [
        "A written note follows each lesson, naming exactly what was covered",
        "A proper review every few weeks resets the plan where needed",
        "Well suited to a younger PYP or MYP learner working at a steady pace",
        "A second weekly slot slots in easily once mocks approach",
      ],
    },
    {
      title: "A compressed push before a boarding term's exams",
      description:
        "A denser run of sessions lands over a school break or the final weeks before an exam series, timed papers first and fast feedback after, mapped to Arrah's own year of monsoon flooding, Chhath and the winter fog spell.",
      bullets: [
        "Timed papers marked to whichever board's current criteria applies",
        "Feedback comes back in days, not weeks",
        "Planned against boarding holiday dates and Bihar's own festival calendar together",
        "Best booked two to three weeks before a boarding term ends",
      ],
    },
  ],

  sections: [
    {
      heading: "IB and IGCSE schools and families in Arrah",
      paragraphs: [
        "Ask which school in Arrah teaches IB or Cambridge and the honest answer is none. Bhojpur district's schools run on the Bihar Board almost everywhere, with a growing CBSE presence limited to newer private campuses along Nawada Road and the NH 30 bypass. Neither the IB Organization nor Cambridge Assessment International Education has authorised a single school here yet, and that fact shapes everything else on this page rather than sitting quietly in a footnote.",
        "The families who still reach out from Arrah generally fall into three groups: parents whose child boards at an established school in Kolkata, Delhi NCR or the Mussoorie belt; government, bank or railway households who arrived mid-programme through a transfer; and Bhojpur parents actively deciding whether to move a child out of BSEB and into Cambridge before Class 9 or 10 begins.",
        "A district with zero local schools teaching these curricula has one clear knock-on effect: there is no nearby specialist pool at all, for an IB Diploma subject or a Cambridge code alike. Matching nationally is the direct answer. A household near Ramna Maidan, or one out toward Jagdishpur, is no longer limited to Arrah's own talent pool and instead draws from anywhere in India someone has genuinely taught that subject this year.",
        "A properly matched student in Arrah is not disadvantaged against a peer at a school that teaches these curricula directly. Every Cambridge candidate nationwide answers the identical 0580 or 0620 paper, and IB moderation holds a Diploma script to the same worldwide rubric whether it arrives from a metro or a district headquarters. What actually decides the outcome is whether the tutor knows that mark scheme cold, not the postcode the student writes it from.",
      ],
      table: {
        caption: "Where Bhojpur families currently find IB or Cambridge schooling",
        columns: ["Option", "Distance from Arrah", "Curriculum on offer"],
        rows: [
          ["A boarding school in Delhi NCR", "Roughly 900 km by air or long-distance rail", "IB Diploma, MYP and PYP at several established schools"],
          ["A boarding school in Kolkata", "Roughly 500 km, about nine hours by train", "IB and Cambridge IGCSE at established schools"],
          ["The Mussoorie boarding belt", "Roughly 900 km, a long rail and road journey", "IB MYP and Diploma"],
          ["A school inside Bhojpur district", "0 km", "Neither IB nor Cambridge currently authorised anywhere here"],
        ],
      },
      bullets: [
        "No campus in Bhojpur district runs IB or Cambridge/Edexcel IGCSE today",
        "Demand splits between boarding families, transferred households and BSEB-to-Cambridge switchers",
        "An empty local pool is precisely why national online matching earns its keep here",
        "Exam papers and marking standards stay identical to those set in a far larger city",
      ],
    },
    {
      heading: "How is IB or IGCSE different from BSEB and CBSE in Arrah?",
      paragraphs: [
        "Most Bhojpur schools, government-run and a good number of private ones, sit under the Bihar State Board, while CBSE has taken hold mainly at newer private schools along the bypass. Both set one fixed paper against a fixed syllabus, letting a sharp student clear a fair share of it through recall and pattern recognition alone. Cambridge and the IB rarely allow that: an Extended-tier IGCSE question, or an IB Diploma essay prompt, routinely dresses a familiar topic in an unfamiliar wrapping, and rote learning gets exposed fast.",
        "Coursework is where the systems pull apart most sharply. BSEB carries limited project marks and CBSE weights internal assessment a little more, but neither comes close to the depth of criteria an IB Internal Assessment or a piece of IGCSE coursework is judged against. A student arriving from a BSEB or CBSE classroom in Class 9 or 11 has typically never planned an independent, assessed piece of work before, and that planning skill, more than subject knowledge, is what early tutoring sessions actually build.",
        "Depth of subject content diverges too. HL Maths and HL sciences at Diploma level sit well beyond anything BSEB or CBSE reaches at the same age, and IGCSE Core roughly matches CBSE's own difficulty while Extended sits a clear notch above it. Whichever tier a student takes at the point of switching quietly decides how steep the next jump will feel.",
        "None of this is an argument against making the switch. A good number of Bihar families end up preferring the criteria-based, spread-out workload once it is set plainly beside a single make-or-break paper at the end of a BSEB or CBSE year.",
      ],
      table: {
        caption: "BSEB and CBSE against IB and IGCSE, as seen from Arrah",
        columns: ["Feature", "BSEB", "CBSE", "IB / IGCSE"],
        rows: [
          ["Presence near Arrah", "Most schools, government and private", "Newer private schools along the bypass", "None; reached only through boarding or relocation"],
          ["How work is assessed", "One fixed, recall-heavy paper", "Fixed paper plus limited project work", "Application and criteria-based throughout"],
          ["Coursework share", "Small project component", "Moderate internal assessment", "20-30% in most IB subjects; coursework built into IGCSE"],
          ["Where it is recognised", "India only", "India only", "Recognised internationally"],
        ],
      },
      bullets: [
        "Extended-tier and IB questions punish rote answers far more than a BSEB paper does",
        "Planning an independent, assessed piece of work is the real skill gap at the point of switching",
        "Core versus Extended at that switching point sets up how steep the next jump feels",
        "Many families come to prefer the spread-out workload once they see both laid out honestly",
      ],
    },
    {
      heading: "What does an IB or IGCSE tutor cost for an Arrah family, and what drives the fee?",
      paragraphs: [
        "Ask about Cambridge IGCSE English and the quote looks nothing like one for IB Maths AA at HL, because the two draw from tutor pools of very different sizes nationally. Diploma HL work generally costs more simply because far fewer tutors have taught it recently; Cambridge Core support pulls from a much wider, more available field. Whatever a specific match costs gets confirmed for your family before the trial class, never changed afterwards.",
        "A fee quoted for Arrah carries no hidden travel component, simply because nobody makes a journey for a single lesson here. Whether a Physics specialist happens to sit in Bengaluru, Chandigarh, or, in the rare case, somewhere near Ramna Maidan itself, the price stays the same either way.",
        "Two tutors charging the same hourly rate rarely deliver the same session. One who has recently graded Cambridge 0620's alternative-to-practical scripts, or steered several students through the IB Maths AI exploration this year, covers real ground faster than a generalist stuck re-teaching material a boarding school has already taught once.",
        "There is no fixed-term contract anywhere in this arrangement. We stay in touch with a family every few weeks regardless, sessions pause without penalty whenever needed, and a tutor who is not clicking with a student after the trial gets swapped for someone better suited rather than kept on out of obligation.",
      ],
      bullets: [
        "Diploma HL fees run higher nationally than IGCSE Core, purely because tutors for it are scarce",
        "No travel cost enters an Arrah fee, since no lesson here involves a commute",
        "A specific match's cost is fixed and shared before the trial, not adjusted after",
        "No fixed-term contract; pausing or stopping a run of lessons carries no fee",
      ],
    },
    {
      heading: "Online tuition against Arrah's coaching centres, home tutors and self-study",
      paragraphs: [
        "Coaching signage along Maharaja College Road or through Chandi Chowk is almost entirely BSEB or CBSE board preparation, plus the entrance batches chasing engineering and medical seats, simply because that is where enough paying students exist to fill a room. A batch for IB Chemistry HL or IGCSE Additional Mathematics would need students the district does not currently have in any one place.",
        "Ordinary board subjects are well served by home tutors around Nawada Road or Judicial Colony, yet finding one who taught IGCSE Physics 0625's alternative-to-practical unit this year, or any IB Diploma content at all, is not realistic within Arrah's own tutoring market at present. A steady, encouraging generalist helps a nervous student cope, but grading against a live international mark scheme is a different skill entirely.",
        "IGCSE Mathematics is genuinely learnable alone, given how openly past papers and mark schemes circulate, and a disciplined student can get surprisingly far this way. Where self-study reliably breaks down is Internal Assessment planning and the extended written response Cambridge and IB examiners are trained to reward, both of which need a second, more experienced reader to catch what a student cannot see in their own draft.",
        "For an Arrah family, moving to online tutoring changes one thing directly: a local specialist count of essentially zero becomes a national one, without losing either the syllabus-level accuracy no coaching batch here offers or the individual correction self-study is simply unable to provide on its own.",
      ],
      table: {
        caption: "Arrah's routes into IB and IGCSE support, side by side",
        columns: ["Route", "Fit to the exact syllabus", "Level of attention", "Real gap in Arrah"],
        rows: [
          ["Coaching batches", "Poor; built around BSEB, CBSE or entrance exams", "Group, shared attention", "No batch anywhere covers IB or Cambridge subjects"],
          ["Local home tutors", "Uneven at best", "One to one", "Very few have taught the live international syllabus"],
          ["Unsupervised self-study", "Whatever a student manages alone", "None", "IAs and extended writing go unchecked"],
          ["Matched online tutor", "Picked against the precise code and tier", "Individual, one learner at a time", "Reaches the whole country instead of an empty local field"],
        ],
      },
      bullets: [
        "Arrah's coaching lanes run on BSEB, CBSE and entrance-exam demand, not IB or Cambridge",
        "A tutor with recent experience of the exact syllabus is not to be found within the district today",
        "Self-study most often leaves IAs and extended answers without a second reader",
        "National matching is what actually closes Arrah's local supply gap",
      ],
    },
    {
      heading: "What does the exam year in Arrah look like around Chhath and the monsoon?",
      paragraphs: [
        "Summer runs hot and dry, April and May regularly pushing past 42 degrees Celsius just as BSEB and CBSE schools sit end-of-year exams before the long break begins. The monsoon that follows can push water levels on the Ganga and the Son up near Koilwar enough to disrupt road travel for several days running, and Chhath in October or November, Bihar's largest festival, effectively pauses ordinary life across the district for four days as families gather at the ghats. A workable plan treats all three as fixed points, not surprises.",
        "Cambridge runs its IGCSE series twice a year, May-June and October-November, and a boarding student simply follows whichever one their own school has entered them for; August is the usual month Grade 10 results land from the May-June round. The Diploma sits once a year in May for most schools, with grades out in early July and a smaller November retake session for anyone who needs it, so an Arrah household ends up tracking the boarding school's calendar rather than any date fixed locally.",
        "The Grade 9 or 10 tier choice, together with whatever mocks a target school runs, marks the earliest point worth paying attention to for an IGCSE student, and the stretch of six to eight weeks directly before the real exam is when concentrated revision earns its keep. Even a family starting as late as January ahead of a May-June sitting can move the needle meaningfully, so long as the plan stays realistic about what remains undone.",
        "For a boarding DP student, the real opening is school holidays, since term-time sessions have to work around the boarding school's own timetable rather than Arrah's. Building revision blocks into the Chhath and summer breaks tends to work far better than squeezing extra sessions into an already full term.",
      ],
      table: {
        caption: "How Arrah's calendar shapes a tutoring plan",
        columns: ["Period", "What is happening", "Effect on tutoring"],
        rows: [
          ["April-May", "Peak heat; BSEB and CBSE year-end exams", "Shorter, focused sessions rather than a packed schedule"],
          ["June-September", "Monsoon; Ganga and Son levels rise near Koilwar", "Expect the odd disrupted evening; the online lesson itself is unaffected"],
          ["May-June", "Cambridge's IGCSE sitting; also when boarding DP students sit finals", "Push through timed papers and close out revision"],
          ["Chhath (October-November)", "Four-day festival; routines pause district-wide", "A planned break agreed in advance, never a surprise gap"],
        ],
      },
      bullets: [
        "April-May heat coincides with BSEB and CBSE year-end exams",
        "Monsoon flooding near Koilwar can disrupt travel, though never an online lesson itself",
        "Cambridge IGCSE runs its May-June and October-November series as usual",
        "Chhath pauses ordinary routines district-wide for four days every year",
      ],
    },
    {
      heading: "Where do Arrah students head after IB or IGCSE?",
      paragraphs: [
        "Students finishing IGCSE or the IB Diploma while boarding away from Arrah tend to apply along several tracks at once: engineering or medical entrance inside India, a national university course, or an undergraduate place abroad. Locally, Veer Kunwar Singh University anchors general higher education for the district, while Patna University, Patna Science College and AIIMS Patna remain within reach for those staying in Bihar.",
        "Getting an IB or IGCSE qualification recognised for engineering or medical entrance within India runs through the Association of Indian Universities, and JEE or NEET eligibility on top of that depends on having taken the right subjects at the right level. A good number of Arrah households run entrance coaching in parallel with regular subject tutoring rather than choosing between them, largely because Bihar's own preparation culture has long centred on BPSC and other government-exam routes rather than JEE or NEET specifically.",
        "Families looking abroad find that a Class 12 predicted grade, issued each autumn, does more work in an application than they initially assume, since admissions offices see it months before any final result. A UK offer generally names a target IB points total plus minimum HL grades; a US application folds the predicted grade into a much wider file; and other countries again apply their own separate conversion rules.",
        "IB Gram's tutors stay on the academic side of all this: subject preparation, lifting predicted grades and exam technique. We are happy to explain what subjects and levels a target course typically expects, so tutoring time is spent where it genuinely moves the outcome.",
      ],
      bullets: [
        "Veer Kunwar Singh University anchors local higher education for Bhojpur district",
        "AIU equivalence and the right subject levels decide JEE and NEET eligibility",
        "Bihar's BPSC-focused coaching culture often runs alongside entrance-exam preparation",
        "Tutoring stays focused on subject depth and technique, not admissions consulting",
      ],
    },
    {
      heading: "IB Maths AA and AI, and the sciences, for an Arrah student",
      paragraphs: [
        "A student aiming at engineering or a physical-science degree usually settles on Analysis and Approaches, where HL Paper 3 throws up genuinely unfamiliar problems that a tutor market built around BSEB and CBSE rarely gets much practice drilling. Applications and Interpretation suits a different profile, one comfortable with statistics, real-world modelling and a graphic calculator, though its exploration is exactly where a boarding student loses avoidable marks by starting it in the last days of a holiday.",
        "Fluency with the data booklet and tight time management across both written papers carry Physics HL as much as raw theory does, and its Scientific Investigation has to rest on a method that would hold up if a moderator actually questioned it, not a repeat of whatever experiment a classroom already ran. Chemistry HL turns on organic mechanisms and energetics once the opening bonding unit is out of the way, and grading either subject properly needs someone who marks to the IB's own rubric rather than a general science standard.",
        "For Biology, the gap usually is not content, it is command words: a student who knows the syllabus cold can still lose marks by answering the wrong instruction, and weak statistics can quietly wreck an otherwise well-planned investigation. Across all three sciences, a student switching over from BSEB or CBSE tends to arrive with solid knowledge and thin command-word discipline, which is the part tutoring actually needs to fix.",
        "Since none of these subjects is taught anywhere nearby, pairing a student with someone who has recently handled the exact HL or SL syllabus is the practical way to close that gap between one boarding-school term and the next, rather than falling back on a generalist working from whichever textbook happens to be at hand.",
      ],
      bullets: [
        "AA fits proof-and-calculus routes; AI fits statistics-and-modelling ones",
        "The Scientific Investigation decides more of the Physics and Chemistry HL grade than students expect",
        "Biology rewards command-word precision as much as content knowledge",
        "BSEB and CBSE switchers usually need command-word practice more than content revision",
      ],
    },
    {
      heading: "IGCSE Core against Extended, and subject choices for an Arrah household",
      paragraphs: [
        "Cambridge IGCSE's Core and Extended tiers cap different grade ranges, and getting the choice right matters for a Bhojpur family planning a move out of BSEB, since it decides how steep Class 11 will feel afterward, whether that eventually means A Levels, IB Diploma HL sciences, or another route entirely.",
        "Extended-tier Mathematics 0580, paired with Additional Mathematics 0606 wherever a target school offers it, sets up the strongest run toward IB Maths AA HL later on. Extended-tier sciences work the same way, softening the shock of DP Physics or Chemistry HL because the content depth already sits closer to what the Diploma assumes.",
        "A student already enrolled at a Cambridge school generally follows whatever tier and subject list that school has already set, so tutoring works inside that existing structure rather than an idealised one, closing gaps wherever a school's particular combination leaves a student thin. A family still deciding whether to make the move benefits from seeing both tiers laid out plainly first.",
        "For households heading toward an Edexcel-affiliated school rather than Cambridge, a tutor who understands how Edexcel's Foundation and Higher tiers phrase questions differently matters, since the underlying mathematics overlaps heavily while the exam technique genuinely does not transfer cleanly.",
      ],
      bullets: [
        "The Core versus Extended choice shapes both the grade ceiling and later DP readiness",
        "0606 Additional Mathematics is the strongest bridge toward IB Maths AA HL",
        "Tutoring works inside each target school's own particular subject combination",
        "Edexcel exam technique differs from Cambridge's even where content overlaps heavily",
      ],
    },
  ],

  tutorsIntro:
    "Meet tutors teaching IB PYP, MYP and Diploma subjects alongside Cambridge IGCSE for Arrah families. Every match weighs the precise syllabus, level and exam session a child is sitting, given that every lesson here runs live online rather than inside your home.",

  process: [
    { title: "Share what your child needs", description: "The programme or board, subject and level, current or predicted grade, and times that genuinely suit your Arrah household." },
    { title: "Get a shortlist with reasons attached", description: "Tutors picked for syllabus fit first, since Bhojpur district has no local school to draw from, each with a plain note on why they suit your child." },
    { title: "Try a class at no cost", description: "A real topic worked through live online with the tutor, no fee involved and no obligation attached." },
    { title: "Agree the first month's plan", description: "The tutor sets out topics, session rhythm and a way of reporting back; you approve it or ask for changes." },
    { title: "Keep a steady weekly rhythm going", description: "A fixed online slot each week, a check-in every few weeks, and a re-match on the table whenever the fit stops working." },
  ],

  whyPoints: [
    { title: "The syllabus decides the match, not a label", description: "A tutor is chosen for the exact IB subject and HL or SL level, or Cambridge code and tier, never a broad description of the subject." },
    { title: "Purpose-built for a district with no local school", description: "No Bhojpur school carries IB or Cambridge status, so we reach specialists across the whole country instead of a nearby handful that does not exist." },
    { title: "Proof comes before commitment", description: "A free trial lets your child meet the tutor over a real topic first, so any decision rests on what you actually saw happen." },
    { title: "Assessed work always stays the student's own", description: "Tutors guide Internal Assessments, coursework and the Extended Essay, but writing any part of it for a student is not something we do." },
    { title: "Progress is never left to guesswork", description: "A short note follows every session, and a fuller review lands every few weeks, so nothing about a child's progress goes unrecorded." },
    { title: "Nothing is locked in", description: "No school or exam-board affiliation, no long contract, and a re-match on offer the moment a current pairing stops working." },
  ],

  faqs: [
    { question: "How do I find an IB tutor in Arrah?", answer: "Send us your child's IB programme, subject, level and exam session, and we shortlist tutors who teach that exact course. Since no school in Bhojpur district runs the IB, matching happens on syllabus fit across the country rather than by location, and we then confirm a lesson time that fits your household. A free trial class always comes before any decision, and we suggest another tutor if the fit turns out wrong." },
    { question: "Do you offer IGCSE tutors in Arrah for Cambridge?", answer: "Yes. IGCSE tutors matched for Arrah teach the Cambridge syllabus directly, delivered as online tuition rather than a household visit, since no school in the district currently offers Cambridge itself. Matching runs by code and tier, Mathematics 0580 Extended or Chemistry 0620 among the more common ones, using Cambridge's own past papers and mark schemes." },
    { question: "Do your tutors visit homes in Arrah?", answer: "No home visits happen in Arrah. That part of the service exists only in Gurugram and pockets of Delhi NCR; everywhere else in India, Arrah included, a lesson runs live on video instead, one to one, with a shared screen standing in for a whiteboard. This is genuine online tuition from home, never a promise of someone arriving at your door." },
    { question: "What does an IB or IGCSE tutor in Arrah cost?", answer: "The fee follows the programme and level, the subject, session length and how recently the tutor taught that exact syllabus, and it is confirmed for your specific match before the trial. Diploma HL subjects typically cost more than Cambridge IGCSE Core support. Every session runs online, so no travel cost enters the fee, and nothing here binds you to a long contract; pausing or stopping is always available." },
    { question: "Which schools in Arrah offer IB or IGCSE?", answer: "None do, currently. No school anywhere in Bhojpur district holds IB World School status or Cambridge/Edexcel IGCSE authorisation; BSEB and CBSE cover the district's schools instead. Families interested in these curricula generally board a child in Patna, Kolkata, Delhi NCR or the Mussoorie belt, or plan a Cambridge switch ahead of Class 9." },
    { question: "My child boards at an IB or IGCSE school outside Arrah. Can a tutor help during holidays?", answer: "Yes, and this is one of the more frequent requests we get from Arrah, precisely because no local school teaches either curriculum. A tutor is matched to the exact subject, level and syllabus your child's boarding school follows, with sessions arranged around school breaks or, where the boarding school allows it, agreed evening slots during term." },
    { question: "Is there a free trial class before I have to commit?", answer: "Yes, every match starts with a free trial class. Your child works through a real topic from their own syllabus with the tutor online, at no cost and with no obligation to carry on. A short first-month plan follows from the tutor, leaving you to decide whether to continue, ask for changes, or try someone else instead." },
    { question: "Can a tutor help with IB Internal Assessments for a child connected to Arrah?", answer: "Yes, but only by guiding, never by writing. That covers choosing a workable research question, explaining what each assessment criterion genuinely rewards, planning how data gets collected, and giving honest feedback on drafts. Writing or rewriting assessed work breaks IB academic integrity rules outright, so our tutors decline any request along those lines." },
    { question: "Which IB Diploma subjects can you help with for an Arrah family?", answer: "Tutors cover every major IB Diploma subject group relevant to a boarding student connected to Arrah, most commonly Maths Analysis and Approaches or Applications and Interpretation at HL and SL, Physics, Chemistry, Biology, Economics, Business Management, English A and Computer Science, along with Theory of Knowledge and the Extended Essay." },
    { question: "Do you tutor IB MYP and PYP students connected to Arrah, not just the Diploma?", answer: "Yes, the full IB continuum is covered for Arrah households whose child attends an IB school elsewhere or is moving between curricula. MYP sessions focus on criterion-based analysis across sciences and language subjects and on the Personal Project's process journal; PYP sessions build reading, writing, number sense and the research skills the Exhibition needs." },
    { question: "Is online tutoring as effective as in-person tuition for IB or IGCSE students in Arrah?", answer: "It works well here, particularly given that Bhojpur district has no local specialist to compare it against in the first place. A shared whiteboard, screen-shared past papers and recorded worked solutions cover nearly everything a tutor sitting physically beside your child would otherwise do, while opening up specialists across India instead of nobody at all locally." },
    { question: "How are IB Gram tutors verified for students in Arrah?", answer: "Every tutor is checked against qualifications, recent teaching experience with the exact subject and level, and their approach to assessment criteria before ever meeting a family. Given that Arrah has no local IB or Cambridge school at all, we specifically look for tutors who have taught that syllabus recently rather than a generalist. The free trial class then lets you judge the fit for yourself." },
    { question: "When should my child in Arrah start IB or IGCSE tutoring?", answer: "Starting at the course's opening, Class 11 for the IB Diploma or Grade 9 for Cambridge IGCSE, leaves room to fix foundations before internal exams, IA deadlines and predicted grades all arrive at once. A family starting in the final year can still make real progress, with tutoring concentrated on the highest-value topics and past papers ahead of the exam series." },
    { question: "My child is switching from BSEB or CBSE toward IGCSE from Arrah. Can a tutor help?", answer: "Yes, and it comes up often, since Bhojpur has no local Cambridge school, so a switch usually means enrolling elsewhere while the family stays put in Arrah. The real gap tends to be question style rather than content: command words such as 'explain', 'evaluate' and 'justify' need direct teaching, ideally starting a term before the switch actually happens." },
    { question: "Can sessions run on weekends or after school hours from Arrah?", answer: "Yes, most Arrah households book weekday evenings after school along with weekend mornings. Scheduling allows for the district's summer heat, when families often prefer an earlier evening slot, for the monsoon stretch near the Son and Ganga, and for the four days of Chhath each year, when sessions pause by prior agreement rather than by surprise." },
    { question: "What happens if a family in Arrah is not happy with the tutor matched to them?", answer: "Tell us, and we find someone else. Progress gets reviewed with every family every few weeks, with a re-match offered whenever the fit is wrong, rather than expecting a child to stick with a tutor who is not working out. Nothing here runs on a long contract, so pausing or stopping sessions carries no penalty either." },
    { question: "Is IB Gram affiliated with any school, board or curriculum body connected to Arrah?", answer: "No. IB Gram operates as an independent tutoring service, with no affiliation to, endorsement from, or representation of any school in Bhojpur district, Bihar's education department, the International Baccalaureate Organization, Cambridge Assessment International Education or Pearson Edexcel. Tutors simply work to each student's own school calendar and the relevant board's published syllabus." },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "How IB and IGCSE tutoring works across Indian cities." },
    { label: "IB and IGCSE home tuition in Gurgaon", href: "/gurgaon/", description: "Where IB Gram's in-person home tuition is available." },
    { label: "IGCSE guide", href: "/igcse/", description: "IGCSE boards, tiers, subjects and exam series." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "How the DP works: HL and SL, IAs, TOK and the Extended Essay." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria, the Personal Project and eAssessment explained." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "PYP units of inquiry and the Exhibition." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Analysis and Approaches versus Applications and Interpretation, explained." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject, programme and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Share your brief and book a free trial class." },
    { label: "IB and IGCSE tutoring in Patna", href: "/patna/", description: "IB and IGCSE tutor matching for Patna families, Bihar's capital and the nearest large city to Arrah." },
    { label: "IB and IGCSE tutoring in Gaya", href: "/gaya/", description: "IB and IGCSE tutor matching for Gaya families." },
    { label: "IB and IGCSE tutoring in Muzaffarpur", href: "/muzaffarpur/", description: "IB and IGCSE tutor matching for Muzaffarpur families." },
  ],

  closingHeading: "Book a free trial with an IB or IGCSE tutor in Arrah",
  closingBody:
    "Tell us the programme or board, the subject and level, your child's current grade, and the times that work for your household. We come back with a shortlisted tutor, their teaching background, and trial slots fitted around your routine, delivered online and one to one, with nothing charged and nothing owed. Reach us at ibgram24@gmail.com or on WhatsApp at +91 7439 368 115.",
};
