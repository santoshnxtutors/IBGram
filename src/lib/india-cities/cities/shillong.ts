import type { CitySeoPage } from "../types";

/**
 * /shillong/ - IB and IGCSE tutoring page for Shillong, Meghalaya. No IB or Cambridge/Edexcel
 * IGCSE school confirmed inside Shillong; its well-known private schools (St. Edmund's School,
 * Pine Mount School, Loreto Convent) run CISCE only. stripSchools stays empty; school clusters
 * point honestly to Guwahati and Kolkata. Online-only delivery: tutors do not visit homes in
 * Shillong. Rendered with the shared CountryLanding layout used by /gurgaon/.
 */
export const shillong: CitySeoPage = {
  slug: "shillong",
  countryName: "Shillong",
  countryNameLong: "Shillong, Meghalaya",
  demonym: "Shillong",
  state: "Meghalaya",
  stateCode: "IN-ML",
  flagCode: "in",
  countryCode: "IN",
  region: "Meghalaya, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lesson slots work around Shillong's long wet season, the run of Khasi and Christian dates on the calendar, and whatever timetable your child's own school keeps",
  lastUpdated: "2026-09-21",
  geo: { latitude: 25.5788, longitude: 91.8933 },
  wikipedia: "https://en.wikipedia.org/wiki/Shillong",
  stripSchools: [],

  title: "IB & IGCSE Tutors in Shillong | Online Tuition",
  metaDescription: "IB and IGCSE tutoring for Shillong families: Diploma, MYP, PYP, Cambridge and Edexcel, live one-to-one video lessons matched by syllabus, free trial class.",
  h1: "IB and IGCSE Tutors and Online Tuition in Shillong",
  heroEyebrow: "IB & IGCSE TUTORING FOR SHILLONG FAMILIES",
  heroSubtitle:
    "Parents in Shillong write to us for a handful of reasons: a daughter boarding at an IB school in Kolkata who needs Chemistry HL support over the holidays, a family newly posted here from a city where their son sat Cambridge IGCSE, or simply a household in Laitumkhrah wondering whether IGCSE beats staying on ICSE. Whatever the starting point, we find a tutor who already teaches that exact subject and level, put them on a video call with your child, and let the two of them get on with it.",
  primaryKeyword: "IB and IGCSE tutors in Shillong",
  imageAltText: "A Shillong student reviewing an IGCSE Biology mark scheme with a tutor over video call",
  secondaryKeywords: [
    "IB tutor Shillong",
    "IGCSE tutor Shillong",
    "IB home tuition Shillong",
    "IGCSE home tuition Shillong",
    "IB private tuition Shillong",
    "IB Maths tutor Shillong",
    "IGCSE Maths tutor Shillong",
    "IB Physics tutor Shillong",
    "IB Chemistry tutor Shillong",
    "IB Biology tutor Shillong",
    "IB DP tutor Shillong",
    "IB MYP tutor Shillong",
    "IB PYP tutor Shillong",
    "IGCSE online tuition Shillong",
    "Cambridge IGCSE tutor Shillong",
    "IB tutor Laitumkhrah",
    "IGCSE tutor Police Bazar",
    "online IB tutor Meghalaya",
    "IB tutor Shillong Meghalaya",
  ],

  heroTrustPoints: [
    "Every introduction starts from your child's syllabus code and level, not a generic 'IB tutor' or 'IGCSE tutor' listing",
    "Lessons happen on a screen; walking up to your gate in Shillong is simply not something we do outside Gurugram and Delhi NCR",
    "You watch a full class play out before deciding whether to continue",
    "St. Edmund's School, Pine Mount School and Loreto Convent are named here for context only, with no partnership implied",
  ],
  heroStats: [
    { value: "IB & Cambridge", label: "Both curriculum families covered" },
    { value: "PYP through DP", label: "Every IB stage supported" },
    { value: "IST throughout", label: "Same clock for tutor and student" },
    { value: "Trial class, no cost", label: "Try it before you pay anything" },
  ],

  intro: {
    heading: "How tutoring actually reaches a family in Shillong",
    paragraphs: [
      "Ask a dozen Shillong households why they came looking for an IB or IGCSE tutor and you get a dozen slightly different answers, but they cluster into a few shapes. Some have a child boarding away, most often in Guwahati or Kolkata, and want subject support timed to the school holidays. Others moved here for work, an NEHU posting, a government transfer, an IIM Shillong role, and their child was already partway through IGCSE somewhere else. A smaller group is simply deciding, usually around Class 9, whether to move a child off the ICSE track their local school follows and onto something else entirely.",
      "None of those situations gets solved by a school down the road, because none of Shillong's well-regarded private schools currently teaches IB or Cambridge/Edexcel IGCSE. St. Edmund's School in Laitumkhrah, Pine Mount School and Loreto Convent are all CISCE institutions, strong ones by most accounts, but that leaves a genuine gap for anyone wanting the other two curricula. Tutoring is how that gap gets closed here, not as a stopgap but as the actual mechanism, since the specialist a family needs was never going to be teaching at the school next door anyway.",
      "A lesson runs the same way regardless of which locality a student lives in, because it happens over video, with both sides looking at the same screen. That is not a compromise forced by distance; it is what lets a family in Nongrim Hills reach a tutor who has marked this year's IGCSE Physics papers even though that person happens to live in Kochi. Nobody drives anywhere for this, in Shillong or almost anywhere else in the country; a doorstep visit is a Gurugram and Delhi NCR arrangement and nothing more.",
      "We are not connected to St. Edmund's, Pine Mount, Loreto Convent, the IB Organization, Cambridge Assessment International Education or Pearson Edexcel in any way. Tutors teach and mark work; an Internal Assessment, an Extended Essay or a piece of coursework stays entirely the student's own writing, start to finish.",
    ],
    bullets: [
      "Boarding-student support across every IB stage, PYP through to the Diploma",
      "Cambridge and Edexcel IGCSE matched down to the specific code",
      "Live one-to-one lessons, run entirely on Indian time",
      "A written plan follows once the trial class is done",
      "No doorstep visits anywhere near Shillong; that stays a Gurugram and Delhi NCR thing",
    ],
  },

  programmesIntro:
    "None of the four IB stages currently has a home inside a Shillong school, so almost every request we get connects to a child boarding elsewhere, a family that has just moved here, or a household still deciding whether IB fits at all. That shapes how tutoring for each stage plays out below.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12",
      description:
        "Learning here sits inside broad units of inquiry rather than separate subjects, building toward the Exhibition a student leads in their final PYP year. There is no exam to prepare for, so the actual work is reading confidence, comfort with numbers, and helping a child ask a question worth investigating.",
      countryNote: "Nearly every PYP query we get tied to Shillong comes from a family who arrived mid-year for a posting, picking up routines a previous school had already established.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16",
      description:
        "Four separate criteria grade each subject here, not one overall score, the Personal Project lands in Year 5, and an eAssessment sometimes closes the programme out. Students usually find the leap from summarising a topic to properly analysing it against a criterion the hardest adjustment.",
      countryNote: "MYP support connected to Shillong almost always belongs to a boarding student home for a break, working through assignments a term-time schedule left unfinished.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three of them Higher Level, sit alongside Theory of Knowledge and a required Extended Essay, with coursework typically worth a fifth to a third of each subject grade. The main exam sitting is in May, with results out in early July.",
      countryNote: "Since no Shillong school runs the Diploma, a family here is nearly always working around a boarding school's calendar somewhere else in the country rather than a local one.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or more Diploma subjects pair with a career-focused study, a piece of reflective writing and skills modules aimed at the workplace. Few Indian schools offer it, though whatever Diploma content sits inside still gets taught properly.",
      countryNote: "We rarely hear from Shillong families about CP specifically, and where we do, the actual tutoring work centres on the Diploma subjects carried within it.",
    },
  ],

  subjectsIntro:
    "A boarding student wrestling with Physics HL over the Puja break needs a different kind of session from a family in Shillong sizing up whether to leave ICSE for IGCSE before Class 9 begins, so the starting point is always the specific subject and level rather than the words IB or IGCSE on their own. Exam-series timing comes next, once that match is settled.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Weak spots tend to surface once an unfamiliar Paper 3 question lands, so a tutor often gets the exploration draft moving early rather than waiting for the last week of a break." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Real data sets and steady graphic-calculator work matter more here than algebraic manipulation, and the exploration slips if a topic is not fixed weeks in advance." },
    { name: "IB Physics", levels: "HL / SL", description: "Sessions often begin by finding where data-booklet habits fall apart under a clock, then rebuild the Scientific Investigation into something a moderator could not easily pick apart." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Organic mechanisms cause more trouble than the earlier bonding units, and getting the required investigation's write-up to match the mark scheme takes real, deliberate time." },
    { name: "IB Biology", levels: "HL / SL", description: "Knowing the content is rarely enough; a student has to answer the exact command word asked, and a shaky grip on statistics is often what sinks an otherwise sound conclusion." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagram accuracy and genuinely current examples come first, then an HL student works toward the kind of policy evaluation that actually earns marks on Paper 3." },
    { name: "IB Business Management", levels: "HL / SL", description: "Reciting theory instead of applying it to the case in front of them is the most common way students lose marks, so sessions stay anchored to past-paper scenarios." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Both the unseen commentary and the comparative essay reward drilled technique over raw talent, and the Individual Oral usually needs the heaviest rehearsal of the whole course." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Theory and coding practice run side by side, since the IA needs working code whose documentation genuinely matches what it does." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies drawn from across the approaches need to stay current and correctly cited, and building a long-response answer that holds together is where most sessions concentrate." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Examiners reward a student who genuinely interrogates a system over one who just restates a textbook, so sessions push past summary toward real evaluation." },
    { name: "IB Geography", levels: "HL / SL", description: "Specific figures and named places beat vague generalisations in case-study answers, and fieldwork write-ups get checked for a method that would hold up under scrutiny." },
    { name: "IB History", levels: "HL / SL", description: "Paper 1 rewards close reading of the sources given, Paper 2 rewards one argument sustained across an essay, and a tutor drills the two skills separately before combining them." },
    { name: "IB Hindi B", levels: "HL / SL", description: "A frequent additional-language pick for students coming from a CBSE background, with sessions weighted toward the oral component and Cambridge-style written response formats." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Sessions run as conversation, not lecture, pressure-testing an exhibition commentary and asking a student to argue a prescribed title from an angle they did not begin with." },
  ],

  igcseSubjectsIntro:
    "Because no Shillong school currently teaches Cambridge or Edexcel IGCSE, families here fall into two groups: one supporting a child boarding at an IGCSE school elsewhere, the other choosing the qualification independently while the child stays enrolled locally. Either way, work starts from the exact specification and tier a student is sitting, since Cambridge and Edexcel share content but not exam phrasing.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Moving up to Extended usually means building calculator-free speed first, since losing method marks stings more in Cambridge grading than one wrong final answer." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Taking this a year or two ahead of the IB Diploma gives a student a real head start on calculus and vectors before AA HL ever demands it." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "The physics itself is rarely the problem; rearranging equations quickly under time pressure is, and the alternative-to-practical paper needs its own dedicated slot of practice." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole-ratio work and organic chemistry get built up together with alternative-to-practical technique, rather than saving that paper for a last-minute scramble." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics and inheritance questions carry more weight than students expect, and the longer written answers reward practice that most students skip until too late." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "A correct diagram is worth easy early marks, but the longer evaluative questions are where Core-tier preparation usually leaves gaps unaddressed." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Setting real Python problems alongside the theory makes tracing logic on paper actually stick, rather than leaving it as an abstract exercise." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Timed practice with an unseen passage and direct teaching of summary technique moves the needle far more than general vocabulary drills." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Applying a concept to the exact business scenario given, rather than reciting a memorised definition, is where the marks in this subject actually sit." },
  ],

  regionsTitle: "Where Shillong families we work with are based",
  regionsIntro:
    "Since every lesson happens on a screen, the neighbourhoods below are here for context rather than logistics: which schools sit nearby, what kind of household tends to live there, and anything worth knowing about evenings once the monsoon or a festival date is in play.",
  regions: [
    { name: "Laitumkhrah", note: "Home to St. Edmund's School and a large student population, with an ICSE-to-IGCSE switch a common question here." },
    { name: "Police Bazar", note: "The city's commercial centre, mixed CBSE and CISCE schooling, and reliable evening connectivity for online lessons." },
    { name: "Malki", note: "A quieter residential slope favoured by professional families, a short drive from Laitumkhrah and the NEHU road." },
    { name: "Nongthymmai", note: "A larger, more spread-out locality on the city's edge, where IGCSE questions have become more common alongside the usual ICSE options." },
    { name: "Rynjah", note: "Close to the Guwahati-Shillong road, useful for households splitting time between the two cities for schooling or work reasons." },
    { name: "Upper Shillong", note: "Cooler and more spread out, near several boarding institutions, with a fair number of defence and government transfer families." },
    { name: "Dhankheti and Jail Road", note: "Older, central Shillong, a long CISCE school history, and dependable internet for evening lessons." },
    { name: "Nongrim Hills", note: "A leafier belt popular with government officers and NEHU faculty who often arrive partway through a child's schooling." },
    { name: "Mawlai", note: "A large, traditional Khasi locality on the northern edge of the city, where interest in IB or IGCSE tends to come through recently relocated families." },
  ],

  schoolDisclaimer:
    "School names on this page exist only to describe what is actually taught in and around Shillong, including where the nearest confirmed IB or Cambridge/Edexcel options sit when no local school offers them. None of it suggests a partnership. IB Gram is independent of every school named here, the International Baccalaureate, Cambridge Assessment International Education and Pearson Edexcel alike.",
  schoolClusters: [
    {
      city: "Shillong city",
      note: "Established, well-regarded schools here run CISCE, so families typically use tutoring either to support that board directly or to weigh a considered move away from it.",
      schools: ["St. Edmund's School, Laitumkhrah", "Pine Mount School", "Loreto Convent"],
    },
    {
      city: "Nearby: Guwahati",
      note: "About three hours away by road, and the closest confirmed IB or Cambridge option, making it the most common boarding choice for Shillong families who want to stay within reach of home.",
      schools: ["International School Guwahati"],
    },
    {
      city: "Nearby: Kolkata",
      note: "A longer-standing boarding hub for Shillong households, particularly business and professional families with existing links to the city.",
      schools: ["The Heritage School", "Calcutta International School"],
    },
  ],

  modesIntro:
    "Strip away the scheduling detail and every arrangement we run in Shillong is the same underlying thing: live video, one tutor, one student, on Indian time. What differs is pace, a steady weekly slot, a concentrated push before exams, or a plan built entirely around a boarding school's own holiday dates. A tutor showing up at the house never enters into it here.",
  modes: [
    {
      title: "A regular weekly slot",
      description: "One fixed time each week, tutor and student on the same screen, fitted around school hours or a boarding term's own calendar. Most families start exactly here.",
      bullets: [
        "Your choice of tutor is never limited by geography",
        "Works equally for IB DP, MYP and Cambridge or Edexcel IGCSE",
        "Past papers get worked through and marked live, week after week",
        "The same tutor continues for the whole term",
      ],
    },
    {
      title: "A running arrangement with written check-ins",
      description: "The weekly slot continues as usual, but a short note follows each session and a proper review happens every few weeks, so progress is never left to guesswork.",
      bullets: [
        "A short note after every lesson says what was actually covered",
        "A fuller review every few weeks adjusts the plan if it needs adjusting",
        "Works well for younger PYP or MYP students at a steady pace",
        "Adding a second slot before mocks is simple",
      ],
    },
    {
      title: "Concentrated revision around a school break",
      description: "A denser run of sessions lands during a holiday or the weeks before an exam series, timed past papers with quick turnaround, built around Shillong's own monsoon and festival dates.",
      bullets: [
        "Past papers marked against the board's current criteria, not an old one",
        "Feedback comes back in days rather than weeks",
        "Timed to boarding-school holidays and local festival dates alike",
        "Best booked two or three weeks before a term ends",
      ],
    },
  ],

  sections: [
    {
      heading: "The school picture in Shillong, and who actually calls us",
      paragraphs: [
        "Shillong's private schools have a genuinely good reputation, but that reputation runs on CISCE rather than IB or Cambridge. St. Edmund's School in Laitumkhrah is one of the region's older institutions, teaching ICSE and ISC. Pine Mount School, long known as a boarding school for girls, follows the same board, as does Loreto Convent. None of the three has ever carried IB World School status or Cambridge/Edexcel authorisation, which is not something every state capital of comparable size can say.",
        "The calls we get fall into a few recognisable patterns: a family whose child boards at a school in Guwahati or Kolkata and wants term-break or term-time subject help; someone newly posted to NEHU, IIM Shillong or a government role whose child was already midway through IGCSE elsewhere; and parents in Shillong itself who are weighing whether to move a child off ICSE, usually around Class 9, before the decision gets harder to reverse.",
        "There simply is not a resident pool of IB or Cambridge specialists inside Shillong to draw on, and that is the practical reason online matching works here rather than being a fallback. A household in Malki asking for IB Chemistry HL, or one in Police Bazar wanting Cambridge Additional Mathematics, is not choosing between a local tutor and a distant one; the local option does not exist for these subjects, so reaching across India is simply how the gap closes.",
        "None of this costs a Shillong student anything in terms of the standard they are held to. Cambridge sets one paper nationwide, the IB moderates Diploma coursework against a single global benchmark, and a tutor who knows the current mark scheme well can bring a student here to the same level as a peer studying at the school itself.",
      ],
      table: {
        caption: "Schools and boards around Shillong",
        columns: ["School", "Location", "Curriculum"],
        rows: [
          ["St. Edmund's School", "Laitumkhrah, Shillong", "CISCE (ICSE / ISC)"],
          ["Pine Mount School", "Shillong", "CISCE (ICSE), boarding for girls"],
          ["Loreto Convent", "Shillong", "CISCE (ICSE)"],
          ["International School Guwahati", "Guwahati, roughly 100 km away", "Nearest confirmed IB or Cambridge option"],
        ],
      },
      bullets: [
        "No school inside Shillong currently teaches IB or Cambridge/Edexcel IGCSE",
        "Requests come mostly from boarding families, recently relocated households, or families weighing a switch",
        "A near-absent local specialist pool is exactly why national matching makes sense here",
        "Exam papers and grading standards do not shift depending on where a student is based",
      ],
    },
    {
      heading: "Is MBOSE, CBSE or CISCE really so different from IB and IGCSE?",
      paragraphs: [
        "Meghalaya's own MBOSE board runs alongside CBSE across the state, and Shillong's private schools lean heavily toward CISCE. All three set one fixed paper on a fixed syllabus each year, which suits a student who prepares by memorising content carefully. Cambridge IGCSE and the IB test something else: whether a student can take that same knowledge and apply it to a question dressed up in an unfamiliar way, and a purely recall-based preparation tends to fall over exactly there.",
        "The bigger gap sits in coursework. CISCE weights practical work fairly heavily and MBOSE carries some project marks, but neither comes near how an IB Internal Assessment or a piece of IGCSE coursework is marked against a published, detailed set of criteria. A student switching in from an ICSE school in Laitumkhrah has usually never planned an independently assessed piece of work before, and that planning skill, more than any subject content, is what early tutoring sessions actually build.",
        "Subject depth diverges too, further than most families expect going in. HL Maths and HL sciences at Diploma level sit well beyond CISCE or CBSE at an equivalent age, and IGCSE's Extended tier is a clear step up from Core, which itself lands close to CBSE difficulty. Whichever tier a family picks at the point of switching quietly shapes how steep the following years feel.",
        "None of this is an argument against making the move. A good number of Shillong families we have spoken with end up genuinely preferring the criteria-based, spread-out workload once someone lays it out plainly against the single high-stakes paper an MBOSE or CBSE student faces at year's end.",
      ],
      table: {
        caption: "MBOSE, CBSE and CISCE against IB and IGCSE",
        columns: ["Feature", "MBOSE / CBSE", "CISCE", "IB / IGCSE"],
        rows: [
          ["Where it runs in Shillong", "Government and several private schools", "St. Edmund's, Pine Mount, Loreto Convent", "No local school; reached via boarding or online tutoring"],
          ["How it tests a student", "Recall against a fixed paper", "Detailed, syllabus-heavy papers", "Application under unfamiliar conditions"],
          ["Weight given to coursework", "Some project marks", "Practicals weighted moderately", "20-30% in most IB subjects; coursework built into IGCSE"],
          ["Where it is recognised", "India only", "India only", "Recognised internationally"],
        ],
      },
      bullets: [
        "Rote preparation holds up far less well against Cambridge or IB questions than against MBOSE or CBSE ones",
        "Planning an independently assessed piece of work is the real skill gap in a mid-schooling switch",
        "The tier chosen at the point of switching shapes how steep the years afterward feel",
        "Plenty of families end up preferring the spread-out workload once it is properly explained",
      ],
    },
    {
      heading: "What does IB or IGCSE tutoring cost for a Shillong family?",
      paragraphs: [
        "Two families asking us in the same week, one about Cambridge IGCSE English and another about IB Maths AA HL, will usually be quoted different rates, because the pool of tutors qualified to teach each one is a different size entirely. Diploma HL subjects cost more nationally simply because fewer tutors have taught that exact content recently; IGCSE Core support draws on a much wider bench. Whatever a specific match ends up costing gets confirmed before the trial class starts, never adjusted once sessions are underway.",
        "Nothing about a Shillong fee accounts for travel, because no session here has ever involved anyone driving up into the hills. A Physics HL specialist working from Pune and one who happened to live a street away in Malki, if such a person existed for this subject, would cost the family the same amount, which matters given how rarely that second option is actually available here.",
        "The number on the invoice matters less than what happens during the hour it buys. A tutor who has recently marked Cambridge 0620's alternative-to-practical papers, or guided several students through the IB Maths AI exploration this year, covers meaningfully more ground in one session than a generalist re-explaining content the school has already taught.",
        "There is no long-term contract attached to any of this. We check in with families every few weeks, sessions can be paused without a fee, and if a tutor is not clicking after the trial, the next step is a better match, not a request to persevere.",
      ],
      bullets: [
        "Diploma HL subjects cost more nationally than IGCSE Core support, purely because fewer tutors teach them",
        "No travel cost is built into a Shillong fee, since no lesson involves a commute",
        "Costs for a specific match are confirmed before the trial, never adjusted afterward",
        "No long-term contract; pausing a session carries no penalty",
      ],
    },
    {
      heading: "What a coaching class, a home tutor or self-study actually gets a Shillong family",
      paragraphs: [
        "Walk through Police Bazar or Laitumkhrah and the coaching classes you find run on MBOSE, CBSE and entrance-exam preparation, because that is where paying demand concentrates. Nobody runs a group batch for IB Chemistry HL or IGCSE Additional Mathematics here; the number of students across Shillong taking either subject would struggle to fill one classroom.",
        "Individual home tutors are easy enough to find for mainstream board subjects across most of the city's neighbourhoods, but IB and IGCSE demand is thin enough that a tutor who has genuinely taught this year's IGCSE Physics 0625 syllabus is close to impossible to find locally. A capable generalist can steady a nervous student, but cannot stand in for someone who marks against the live syllabus regularly.",
        "A determined student can make real headway alone on something like IGCSE Mathematics, where past papers and mark schemes sit freely online, but self-study reliably falls apart on Internal Assessment planning and the kind of extended written answer IB and Cambridge examiners are trained to reward over a tidy summary. Nobody spots those gaps without a second, more experienced set of eyes on the draft.",
        "What changes with online tutoring, specifically for a city like Shillong, is that it swaps a market with almost no local specialist for a national one, while still delivering the syllabus-level precision no coaching batch here provides.",
      ],
      table: {
        caption: "Support options available in Shillong, compared",
        columns: ["Option", "Match to the exact syllabus", "Attention given", "Where it falls short in Shillong"],
        rows: [
          ["Coaching batches", "Weak; built for MBOSE, CBSE or entrance exams", "Shared, group setting", "No batch here teaches IB or Cambridge subjects"],
          ["Individual home tutors", "Inconsistent", "One to one", "Very few have taught the live current syllabus"],
          ["Self-study alone", "Depends entirely on the student", "None", "IAs and extended writing go unchecked"],
          ["A matched online tutor", "Chosen for the exact subject and level", "One to one", "Draws on the whole country, not a near-empty local market"],
        ],
      },
      bullets: [
        "Coaching in Shillong is built around MBOSE, CBSE and entrance exams, not IB or Cambridge",
        "A tutor who has taught the live current syllabus is genuinely rare to find locally",
        "Self-study tends to leave IAs and extended writing without a second, experienced reader",
        "National matching is what actually closes the specialist gap here",
      ],
    },
    {
      heading: "How the monsoon and the festival calendar shape a study year in Shillong",
      paragraphs: [
        "Shillong sits inside one of the wettest belts in the country, with the monsoon running heavy from roughly May through September; the nearby Khasi Hills record some of the highest rainfall readings on the planet, and stretches of continuous rain can genuinely affect power and internet reliability for a day or two. Winters turn cool and often foggy rather than harshly cold, and summers stay mild throughout, so scheduling here is more about connectivity than heat.",
        "Christmas is a significant citywide event given Meghalaya's large Christian population, and the Khasi calendar adds its own fixed points, Shad Suk Mynsiem each spring among them, that reshape a family's evenings for a few days at a stretch. A workable plan treats these dates as genuine fixtures rather than something to work around at the last minute.",
        "A Shillong student boarding at a Cambridge school elsewhere follows the May-June and October-November series as usual, with Grade 10 results from the May-June sitting typically out by August. IB Diploma students sit exams in May, get results in early July, and have a November retake option, which means tutoring has to track the boarding school's own dates rather than any calendar specific to Shillong.",
        "Families supporting a boarding student get the most value from putting concentrated tutoring into actual school holidays, since term-time sessions have to compete with the boarding school's own busy timetable. A revision block over Puja or the winter break consistently works better than squeezing extra sessions into an already full term.",
      ],
      table: {
        caption: "Shillong's year, and what it means for tutoring",
        columns: ["Period", "What is happening", "Effect on scheduling"],
        rows: [
          ["May to September", "Heavy monsoon, occasional power or connectivity dips", "Build in flexible reschedule options"],
          ["May-June", "Cambridge IGCSE series; IB DP exams for boarding students", "Final revision and timed past-paper practice"],
          ["December", "Christmas season across the city", "A natural pause; well suited to a lighter review week"],
          ["Spring (date varies)", "Shad Suk Mynsiem and related Khasi dates", "Short local disruption to plan sessions around"],
        ],
      },
      bullets: [
        "The long monsoon makes connectivity, not heat, the main scheduling concern",
        "Christmas and Khasi festival dates genuinely reshape a household's evenings for a few days",
        "Cambridge IGCSE keeps to its usual May-June and October-November series",
        "Boarding-school holidays are where concentrated revision pays off most",
      ],
    },
    {
      heading: "Where do Shillong students end up applying after IB or IGCSE?",
      paragraphs: [
        "Students finishing IGCSE and moving into Class 11 and 12, or completing the IB Diploma while boarding elsewhere, generally end up applying in several directions at once: engineering and management entrance within India, medicine, or an undergraduate course abroad. North-Eastern Hill University anchors general higher education locally, and IIM Shillong, though a postgraduate destination, is a name families here already keep half an eye on years before it becomes relevant.",
        "Getting into Indian engineering or medical courses through JEE or NEET requires Association of Indian Universities equivalence for an IB or IGCSE qualification, plus the right subject levels. Families in Shillong weighing an ICSE-to-IGCSE switch often raise this early in the conversation, and it is worth confirming properly rather than assuming either way going in.",
        "For applications abroad, predicted grades released in the autumn of Class 12 matter more than most families expect, since universities see them well before final results arrive. UK offers typically list a target IB points total plus HL subject minimums; US applications weigh predicted grades as one part of a much wider file; other countries run their own equivalence checks again.",
        "IB Gram tutors stay firmly on the academic side of this picture: subject depth, predicted-grade improvement and exam technique. We are happy to explain what a target course typically expects subject-wise, so that tutoring time lands where it genuinely changes the outcome.",
      ],
      bullets: [
        "NEHU anchors local higher education, with IIM Shillong a well-known postgraduate name",
        "AIU equivalence and correct subject levels matter for JEE or NEET eligibility",
        "Predicted grades from autumn of Class 12 carry real weight for study-abroad applications",
        "Tutoring focuses on subject depth and technique, not admissions advice",
      ],
    },
    {
      heading: "IB Maths and the three sciences, for Shillong students specifically",
      paragraphs: [
        "Analysis and Approaches suits a student heading toward engineering, physical science or an economics-heavy course, and its HL Paper 3 rewards a kind of unfamiliar problem-solving that a mostly CISCE and CBSE-trained tutor market rarely practises in depth. Applications and Interpretation leans instead on statistics, modelling and confident graphic-calculator use, and its exploration is where boarding students most commonly lose easy marks by starting it too late in a break.",
        "Physics HL asks for fluent data-booklet use, careful pacing across both written papers, and a Scientific Investigation resting on a method that would genuinely survive scrutiny rather than a familiar textbook experiment repeated once more. Chemistry HL leans heavily on organic mechanisms and energetics once the early bonding units are out of the way, and both subjects need a tutor who marks past papers against the actual IB rubric.",
        "Biology students most often need help converting solid content knowledge into the extended-response answers IB examiners are specifically trained to reward, along with enough statistical grounding that an investigation's conclusion genuinely holds up. Students arriving here from CISCE or CBSE backgrounds usually know the material well but under-practise the precision the command words demand.",
        "Given how little local specialist teaching exists for these subjects, an online tutor matched to the exact HL or SL level and the current syllabus remains the quickest way to close these gaps between one boarding-school term and the next.",
      ],
      bullets: [
        "AA suits calculus-heavy routes; AI suits statistics and modelling",
        "The Scientific Investigation is where both Physics HL and Chemistry HL turn on the final grade",
        "Biology rewards command-word precision as much as raw content knowledge",
        "CISCE and CBSE switchers usually know the content but under-practise exam technique",
      ],
    },
    {
      heading: "Choosing Core or Extended, and how a tutor gets matched for a Shillong family",
      paragraphs: [
        "Cambridge IGCSE's Core and Extended tiers cap different grade ranges, and getting this right matters most for a family in Shillong actually weighing a switch away from ICSE, since it sets both the ceiling on the final grade and how large a later jump to Diploma-level science or maths will feel.",
        "Extended-tier Mathematics 0580, taken alongside Additional Mathematics 0606 where it is offered, builds the strongest possible run-up to IB Maths AA HL. Extended sciences work the same way, softening the shock of Physics or Chemistry HL later because the content depth already sits closer to what the Diploma assumes from day one.",
        "For a student already boarding at a Cambridge or Edexcel school, tutoring works within whatever tier and subject combination that school has already committed to, filling in wherever that particular mix leaves gaps rather than chasing an idealised path that does not apply.",
        "Matching a tutor for a Shillong household starts with a short conversation: the board, the subject and level, a current or predicted grade, the exam series in view, and the actual worry driving the request, an Internal Assessment, a mock result, or the decision to switch boards entirely. Syllabus fit comes first in any shortlist, since the right specialist was never going to be based in Shillong itself, and every tutor is checked on recent teaching experience with that exact subject before ever meeting a family. The trial class is where you judge the rest for yourself.",
      ],
      bullets: [
        "The Core versus Extended choice sets both the grade ceiling and how hard the Diploma feels later",
        "0606 Additional Mathematics gives the strongest bridge into IB Maths AA HL",
        "Tutoring fits within a boarding school's own subject combination rather than an idealised one",
        "Syllabus fit is the first filter in any shortlist, since Shillong has no local specialist pool",
      ],
    },
  ],

  tutorsIntro:
    "Below are tutors who teach IB across PYP, MYP and the Diploma, along with Cambridge and Edexcel IGCSE, matched for Shillong families on the exact syllabus and exam session a child is working toward. Every lesson runs live, over video.",

  process: [
    { title: "Send us the details", description: "The board or programme, subject and level, current grade, and times that suit your Shillong household." },
    { title: "Get a short shortlist", description: "Tutors picked first for syllabus fit, since Shillong has no local IB or Cambridge school, with a plain reason given for each name." },
    { title: "Watch a free trial class", description: "A genuine topic covered live online, at no cost and with no obligation attached." },
    { title: "Approve the first month", description: "The tutor proposes topics and a session rhythm; you sign off on it or ask for changes." },
    { title: "Settle into the routine", description: "A fixed weekly slot, a check-in every few weeks, and a straightforward re-match if the fit is not right." },
  ],

  whyPoints: [
    { title: "We match on syllabus, not a broad label", description: "Every introduction starts from the exact IB subject and level, or Cambridge/Edexcel code and tier, never a vague description." },
    { title: "Designed around a market with no local option", description: "No Shillong school teaches IB or Cambridge/Edexcel IGCSE, so we reach specialists across the country instead." },
    { title: "You see it before you pay for it", description: "A free trial class lets your child meet the tutor on a real topic first." },
    { title: "Assessed work stays the student's own", description: "Tutors guide IAs, coursework and the Extended Essay; they never write any part of them." },
    { title: "Progress is written down, not assumed", description: "A short note follows each lesson, with a fuller review every few weeks." },
    { title: "Nothing binds you in", description: "No school affiliation, no long contract, and a re-match whenever it is needed." },
  ],

  faqs: [
    { question: "Where do I even start looking for an IB tutor in Shillong?", answer: "Send us your child's IB programme, subject, level and exam session, and we put together a shortlist of tutors who already teach that exact course. Since no school in Shillong runs the IB Diploma, MYP or PYP, we match on syllabus fit nationally rather than location, then confirm a lesson time that suits your household. A free trial class happens before anything else gets decided." },
    { question: "Can you find an IGCSE tutor for a Shillong student, Cambridge or Edexcel?", answer: "Yes, for either board. Since no Shillong school currently teaches Cambridge or Edexcel IGCSE, this runs entirely as online tuition, matched by the exact code and tier, Mathematics 0580 Extended or Chemistry 0620 among the common ones, using that board's real past papers and mark schemes." },
    { question: "Will a tutor actually come to our home in Shillong?", answer: "No, and it is worth being clear about that upfront. Home visits from a tutor happen only in Gurugram and parts of Delhi NCR. Everywhere else in India, Shillong included, lessons run live online, one to one, over video with a shared whiteboard. It is genuine one-to-one tuition from home, just not a doorstep visit." },
    { question: "What should I expect to pay for a tutor in Shillong?", answer: "The fee depends on the programme and level, the subject, how long each session runs, and how recently the tutor taught that exact syllabus, confirmed for your specific match before the trial begins. IB Diploma HL subjects generally cost more than IGCSE Core support. Every lesson runs online, so travel never enters the fee, and nothing is locked into a long contract." },
    { question: "Does any school in Shillong actually teach IB or IGCSE?", answer: "Not currently. St. Edmund's School, Pine Mount School and Loreto Convent, Shillong's best-known private schools, all run CISCE rather than IB or Cambridge/Edexcel IGCSE. The closest confirmed option is International School Guwahati, about three hours away by road, with some families boarding as far as Kolkata instead." },
    { question: "My child boards outside Shillong for IB or IGCSE. Can tutoring fit around that?", answer: "Yes, this is one of the most common reasons Shillong families reach out, precisely because no local school teaches either curriculum. A tutor gets matched to the exact subject, level and syllabus your child's boarding school follows, with sessions timed to school breaks or, where the boarding school allows it, evening slots during term." },
    { question: "Is the trial class actually free, or is there a catch?", answer: "It is genuinely free. Your child works through a real topic from their own syllabus with the tutor, online, with no charge and no obligation to continue afterward. The tutor then puts together a short plan for the first month, and you decide from there whether to go ahead, ask for a different tutor, or hold off." },
    { question: "Will a tutor help write my child's IB Internal Assessment?", answer: "No, not the writing itself, only the guidance around it. That covers choosing a workable research question, explaining what each criterion actually rewards, planning how data gets collected, and giving honest feedback on drafts. Writing or rewriting assessed work would breach IB academic integrity rules, so we do not take on requests of that kind." },
    { question: "Which IB Diploma subjects do you cover for Shillong students?", answer: "Most major Diploma subject groups relevant to a boarding student connected to Shillong: Maths Analysis and Approaches or Applications and Interpretation at HL and SL, Physics, Chemistry, Biology, Economics, Business Management, English A and Computer Science, along with Theory of Knowledge and the Extended Essay." },
    { question: "Is MYP or PYP support available too, or only the Diploma?", answer: "The full continuum is covered. MYP sessions concentrate on criterion-based analysis across sciences and languages plus the Personal Project process journal; PYP sessions build reading, writing, number confidence and the research skills the Exhibition eventually needs." },
    { question: "Does online tutoring really work as well as sitting beside a tutor in person?", answer: "For a city with essentially no local IB or Cambridge specialist, it tends to work better than the local alternative would even if one existed. Since every session here runs online rather than in person, a shared whiteboard, live-marked past papers and recorded worked solutions cover most of what sitting in the same room would otherwise do, while opening the choice up to specialists anywhere in India." },
    { question: "How do you actually vet the tutors you send to Shillong families?", answer: "Every tutor is checked on their qualifications, recent experience teaching that exact subject and level, and their approach to assessment criteria before we introduce them to anyone. Given that Shillong has no local IB or Cambridge school of its own, we specifically look for people who have taught the live syllabus recently rather than a generalist. The trial class then lets you judge the rest." },
    { question: "Is there a good time to start, or a point where it is too late?", answer: "Starting at the beginning of a course, Class 11 for the Diploma or Grade 9 for IGCSE, gives the most room to fix foundations before internal exams and predicted grades land. Starting late is still worthwhile; tutoring then concentrates hard on the highest-value topics and past papers in the run-up to the exam series." },
    { question: "We're thinking of moving our child from ICSE to IGCSE. Is that something you help with?", answer: "Yes, and it comes up often, since Shillong's strongest schools all run CISCE. The real adjustment is usually about question style rather than raw content; command words like 'explain', 'evaluate' and 'justify' need direct teaching, ideally starting a term before the actual switch happens." },
    { question: "Can lessons happen in the evening or on weekends?", answer: "Yes, most Shillong families settle on weekday evenings after school plus weekend mornings. Scheduling accounts for the monsoon, when connectivity can dip occasionally, and for festival dates like Christmas and the spring Khasi festivals, when household routines shift for a few days. A second weekly slot before mocks is easy to add." },
    { question: "What if the tutor turns out not to be a good match?", answer: "Tell us and we sort out someone else. We check in with families every few weeks specifically to catch this early, rather than expecting a child to push through with a tutor who is not working out. There is no long contract, so pausing or stopping never comes with a penalty attached." },
    { question: "Is IB Gram connected to any school in Shillong, or to the IB, Cambridge or Edexcel?", answer: "No, on all counts. We run independently, with no affiliation to, endorsement from, or representation of St. Edmund's School, Pine Mount School, Loreto Convent, the International Baccalaureate Organization, Cambridge Assessment International Education or Pearson Edexcel. School names on this page simply describe what is actually taught around Shillong." },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "How IB and IGCSE tutoring works across Indian cities." },
    { label: "IB and IGCSE home tuition in Gurgaon", href: "/gurgaon/", description: "Where IB Gram's in-person home tuition is actually available." },
    { label: "IGCSE guide", href: "/igcse/", description: "IGCSE boards, tiers, subjects and exam series." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "How the DP works: HL and SL, IAs, TOK and the Extended Essay." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria, the Personal Project and eAssessment explained." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "PYP units of inquiry and the Exhibition." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Analysis and Approaches versus Applications and Interpretation, explained." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject, programme and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Share your brief and book a free trial class." },
    { label: "IB and IGCSE tutoring in Guwahati", href: "/guwahati/", description: "Tutor matching for Guwahati families, the nearest confirmed IB and Cambridge hub to Shillong." },
    { label: "IB and IGCSE tutoring in Agartala", href: "/agartala/", description: "Tutor matching for another Northeast capital working through the same local school gap." },
  ],

  closingHeading: "Start with a free trial class for your Shillong student",
  closingBody:
    "Tell us the board or programme, the subject and level, where your child currently stands, and a time that suits your household. We come back with a shortlisted tutor, their teaching background, and trial slots that fit your routine, all online, one to one, at no cost and no commitment either way. Email ibgram24@gmail.com or message us on WhatsApp at +91 7439 368 115.",
};
