import type { CitySeoPage } from "../types";

/**
 * /singrauli/ - IB and IGCSE tutoring page for Singrauli, Madhya Pradesh. Delivery is online only:
 * home visits are a Gurugram/Delhi NCR feature, not a Singrauli one. No school confirmed inside
 * Singrauli district runs IB or Cambridge/Edexcel IGCSE (Kendriya Vidyalaya Singrauli, Kendriya
 * Vidyalaya Jayant Colliery, DPS Vindhyanagar and DPS Nigahi run CBSE; St Joseph's Higher Secondary,
 * Waidhan runs ICSE), so stripSchools stays empty and schoolClusters lean honestly on Varanasi's one
 * Cambridge-track school plus a Jabalpur/Bhopal boarding route, reusing facts already verified on
 * varanasi.ts, jabalpur.ts and bhopal.ts. Rendered with the shared CountryLanding layout used by
 * /gurgaon/.
 */
export const singrauli: CitySeoPage = {
  slug: "singrauli",
  countryName: "Singrauli",
  countryNameLong: "Singrauli, Madhya Pradesh",
  demonym: "Singrauli",
  state: "Madhya Pradesh",
  stateCode: "IN-MP",
  flagCode: "in",
  countryCode: "IN",
  region: "Madhya Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lesson slots bend around April-to-June heat, the rotating shifts at the mines and power stations, and above all the calendar your child's own school follows",
  lastUpdated: "2026-09-21",
  geo: { latitude: 24.202, longitude: 82.666 },
  wikipedia: "https://en.wikipedia.org/wiki/Singrauli",
  stripSchools: [],

  title: "IB & IGCSE Tutors in Singrauli | Online Tuition",
  metaDescription:
    "IB and IGCSE tutors for Singrauli: IB DP, MYP, PYP and Cambridge IGCSE taught live, one-to-one, online and matched to your syllabus. Free trial class.",
  h1: "IB and IGCSE Tutors and Online Tuition in Singrauli",
  heroEyebrow: "IB & IGCSE ONLINE TUITION FOR SINGRAULI FAMILIES",
  heroSubtitle:
    "Looking for IB or IGCSE home tuition in Singrauli? No school in the district teaches either curriculum, and no tutor knocks on doors here, so private tuition from home means live one-to-one lessons over video. Families posted to the coalfield or the power stations near Waidhan, Nigahi and Vindhyanagar, and households whose child boards at an IB school elsewhere, are paired with a tutor who already teaches that exact syllabus. Sessions run on Indian Standard Time and are fitted around the school calendar, the pre-monsoon heat and your own shift pattern.",
  primaryKeyword: "IB and IGCSE tutors in Singrauli",
  imageAltText: "Singrauli student working through an IGCSE Physics past paper on a laptop during a live online tutoring session",
  secondaryKeywords: [
    "IB tutor Singrauli",
    "IGCSE tutor Singrauli",
    "IB home tuition Singrauli",
    "IGCSE home tuition Singrauli",
    "IB private tuition Singrauli",
    "IB Maths tutor Singrauli",
    "IGCSE Maths tutor Singrauli",
    "IB Physics tutor Singrauli",
    "IB Chemistry tutor Singrauli",
    "IB Biology tutor Singrauli",
    "IB DP tutor Singrauli",
    "IB MYP tutor Singrauli",
    "IB PYP tutor Singrauli",
    "IGCSE online tuition Singrauli",
    "Cambridge IGCSE tutor Singrauli",
    "IB tutor Waidhan",
    "IGCSE tutor Vindhyanagar",
    "online IB tutor Nigahi",
    "IB and IGCSE tutor Singrauli Madhya Pradesh",
  ],

  heroTrustPoints: [
    "Tutors are chosen for one Cambridge code and tier, or one IB subject and level, and never for a vague 'international curriculum' label",
    "All lessons are online. Tutors do not call at homes in Singrauli; that service runs only in Gurugram and parts of Delhi NCR",
    "Sit in on a complete lesson before paying anything or agreeing to anything",
    "No tie-up with Kendriya Vidyalaya, DPS Vindhyanagar, DPS Nigahi, St Joseph's, the IB Organization, Cambridge or Pearson Edexcel",
  ],
  heroStats: [
    { value: "IST, GMT+5:30", label: "One clock, tutor to student" },
    { value: "PYP through DP", label: "Whole IB continuum supported" },
    { value: "Trial class free", label: "Judge it before you pay" },
    { value: "May & Oct-Nov", label: "Cambridge's two exam series" },
  ],

  intro: {
    heading: "Why IB and IGCSE questions keep arriving from a coal and power district",
    paragraphs: [
      "Coal and electricity define Singrauli. Northern Coalfields Limited has its headquarters here, the Vindhyachal and Sasan power plants operate inside the district, and Hindalco's aluminium works at Mahan bring engineers, plant managers and contractors from other states. Many of those households lived in Mumbai, Pune or Bengaluru before, where their children were already on an international syllabus. Restarting a CBSE or state-board course halfway through a school year is the last thing they want.",
      "Schooling on the ground cannot meet that wish. Kendriya Vidyalaya Singrauli and Kendriya Vidyalaya Jayant Colliery take the children of central government and PSU employees, and both teach CBSE. Delhi Public School, Vindhyanagar and Delhi Public School, Nigahi, the two private campuses near Waidhan, also follow CBSE, while St Joseph's Higher Secondary School in Waidhan follows ICSE. None offers the IB or Cambridge and Edexcel IGCSE.",
      "Tutoring for Singrauli therefore has a narrow job: keep a Cambridge code or an IB subject moving when the town offers nothing to build on. A child in a local CBSE school who also wants IGCSE needs the whole syllabus taught from the first chapter, not a top-up. A boarding child needs lessons squeezed into the term dates of a school in some other city.",
      "IB Gram has no arrangement with any school mentioned here, or with the International Baccalaureate Organization, Cambridge Assessment International Education or Pearson Edexcel. Our tutors teach, mark and explain. Drafting or rewriting a graded Internal Assessment, Extended Essay or coursework piece is outside what any of them will do.",
    ],
    bullets: [
      "IB support from PYP to DP for boarding students and transferred families",
      "Cambridge IGCSE matched to the subject code and tier",
      "Live one-to-one lessons on Indian Standard Time",
      "A written note after the free trial class",
      "No tutor visits in Singrauli; home visits are limited to Gurugram and Delhi NCR",
    ],
  },

  programmesIntro:
    "Not one of the four IB programmes is taught inside Singrauli district, so nearly every enquiry comes from a family that began the programme in another place: a previous posting, a boarding school, or plans to enrol a child overseas. The paragraphs below describe how each stage usually appears in this district.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12",
      description:
        "Children study through units of inquiry rather than timetabled subjects and finish with a self-directed Exhibition. There is no external exam, so the tutor's time goes on reading stamina, a feel for numbers and learning to pose a real research question.",
      countryNote:
        "In Singrauli, PYP requests usually follow a mid-year transfer by NCL, NTPC or a private power company, when a child needs a tutor to keep the old school's routine going until longer-term schooling is settled.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16",
      description:
        "Four lettered criteria replace a single mark in every subject. The Personal Project falls in Year 5, and certain schools finish with an eAssessment. A child arriving from a CBSE-style school typically has to be taught how to move from describing a topic to analysing it.",
      countryNote:
        "MYP help in Singrauli tends to be for a child who boards elsewhere and is home on a break, finishing criterion-marked tasks before the next term begins at school.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects make up the Diploma, three at Higher Level and three at Standard, alongside Theory of Knowledge and a mandatory Extended Essay. Coursework commonly contributes a fifth to a third of each subject grade, and the main exams fall in May.",
      countryNote:
        "Since no Singrauli school runs the Diploma, families here almost always back a child who boards in a larger city, and the tutoring plan tracks that school's calendar, not a local one.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or more Diploma courses combine with a career study, a reflective project and skills modules aimed at the workplace. Few Indian schools offer it, though the Diploma courses inside it are still taught in full depth.",
      countryNote:
        "Enquiries about CP from Singrauli are uncommon because no local school runs it. When one appears, lessons centre on whichever Diploma subjects the student has actually selected.",
    },
  ],

  subjectsIntro:
    "Polishing Maths Analysis and Approaches HL during a boarding-school holiday is a different task from starting IGCSE Chemistry cold because nothing local teaches it. That is why a match begins with the exact subject code and level, not the bare word 'IB'. Next we look at the exam series the student is entered for and at a timetable that suits Singrauli working hours.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Households with engineering or power-sector roots often take to proof-based algebra quickly once the tutor pauses on the reasoning behind each step instead of rushing through examples." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics and modelling outweigh pure calculus in this course. The exploration usually gets postponed to the last week of a holiday unless the topic is fixed several weeks earlier." },
    { name: "IB Physics", levels: "HL / SL", description: "A child raised beside a thermal power station often has good instincts about energy and mechanics but sloppy habits with the data booklet. The first sessions typically go on fixing that under timed conditions." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Organic mechanisms cause more trouble than the bonding units before them, and the write-up of the required investigation must follow the mark scheme, not what merely feels thorough." },
    { name: "IB Biology", levels: "HL / SL", description: "Good recall does not turn into marks unless the answer matches the command word in the question. Sound statistics inside an investigation often decide whether its conclusion holds." },
    { name: "IB Economics", levels: "HL / SL", description: "Accurate diagrams come first, then fresh real-world examples instead of a decade-old textbook case, and only then the policy evaluation that HL Paper 3 asks for." },
    { name: "IB Business Management", levels: "HL / SL", description: "Reciting theory loses marks where applying it to the given case earns them. Lessons therefore work directly through past papers, and the Business Research Project needs a real organisation willing to share information." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Paper 1 commentary on unseen texts and Paper 2 comparative essays both need repeated timed practice, and the Individual Oral usually needs the most rehearsal before it counts." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Theory and pseudocode on paper are paired with actual coding time, since the IA product must be working software whose documentation matches what it really does." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies drawn from the biological, cognitive and sociocultural approaches must be recalled accurately, and lessons spend time on building a long answer that stays coherent under exam pressure." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Living beside an active coalfield hands a Singrauli student first-hand material, and examiners favour a candidate who questions a system honestly over one who paraphrases the textbook." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies are drilled until the student can quote particular figures and places, and any fieldwork investigation is checked to see that its method would survive scrutiny." },
    { name: "IB History", levels: "HL / SL", description: "Paper 1 pays for close reading of sources and Paper 2 pays for one argument sustained across a whole essay. A tutor trains the two as separate skills." },
    { name: "IB Hindi A / B", levels: "HL / SL", description: "Register and text-type conventions come first because marks vanish there fastest. The unscripted conversation of the individual oral follows." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Sessions are conversations, not lectures: the exhibition commentary is tested line by line and the student is pushed to defend a prescribed title from a stance they did not begin with." },
  ],

  igcseSubjectsIntro:
    "No IGCSE school is confirmed anywhere in Singrauli, so preparation usually starts from nothing on a Cambridge code and the target sitting, May-June or October-November, is set early. A family coming from an Edexcel school elsewhere is matched on that specification, because the content overlaps with Cambridge while exam technique does not transfer neatly.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Students stepping up to Extended need quick non-calculator working built early, because a method mark lost to a hurried line costs more than one wrong final answer." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus and vectors become familiar a year or two before the Diploma would demand them, which is why this course leads so naturally into Maths AA later." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Rearranging equations against the clock is usually the real obstacle, not the physics, and the alternative-to-practical paper gets practice of its own." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole-ratio calculations and organic reactions are built alongside alternative-to-practical technique from lesson one, so the practical paper is never left until last." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics and inheritance carry outsized weight on Cambridge papers, and longer written answers are drilled apart from the rest because that is where marks slip away." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Diagrams earn quick early marks, but most tutoring time goes to the longer evaluative questions that Core-level preparation tends to skip." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Students write and run Python on real problems, because tracing logic on paper only sticks after it has been tested on a machine." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Timed reading of an unseen passage plus direct teaching of summary technique closes more of the mark gap than any amount of vocabulary drilling." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Lessons drill applying theory to the scenario printed on the paper, since a memorised textbook answer nearly always scores less than one tied to the case." },
  ],

  regionsTitle: "Singrauli townships and localities covered by our online IB and IGCSE matching",
  regionsIntro:
    "Every lesson happens online, so these places matter as context and not as destinations: which company township an area belongs to, how far it lies from the private schools of Waidhan, and how a working day looks once summer heat and shift rosters are counted.",
  regions: [
    { name: "Waidhan", note: "District headquarters, about 26 kilometres from Singrauli town, with both DPS campuses and St Joseph's Higher Secondary School." },
    { name: "Vindhyanagar", note: "The NTPC Vindhyachal township, a planned colony where many engineering and managerial families ask about continuing an earlier city's curriculum." },
    { name: "Nigahi", note: "An NCL colliery area near Waidhan that is home to Delhi Public School, Nigahi; parents here usually weigh CBSE against adding IGCSE separately." },
    { name: "Jayant", note: "Another Northern Coalfields Limited colliery township, served by Kendriya Vidyalaya Jayant Colliery and populated mostly by government and PSU staff." },
    { name: "Singrauli town and Garhwa", note: "The older civic core of the district, with Kendriya Vidyalaya Singrauli and a mix of CBSE and state-board schools." },
    { name: "Baidhan and Morwa", note: "Residential belts near the Rihand reservoir, where relocated professional families now live alongside long-settled ones." },
    { name: "Sarai and the Sasan power belt", note: "Site of the Sasan Ultra Mega Power Plant, where contract engineers and site managers often want a child to continue the curriculum begun at a previous posting." },
    { name: "Deosar and Chitrangi", note: "Rural stretches of the district dominated by state-board and CBSE schooling, where interest in international curricula is small but genuine." },
    { name: "Mahan and Bargawa", note: "The area around Hindalco's aluminium operations, which attract industrial families from well outside Madhya Pradesh." },
  ],

  schoolDisclaimer:
    "Schools are listed only to show what exists around Singrauli, and nothing here implies a partnership. IB Gram has no contract or tie-up with any school on this page, nor with the International Baccalaureate, Cambridge Assessment International Education or Pearson Edexcel.",
  schoolClusters: [
    {
      city: "Singrauli district",
      note: "Every confirmed school in the district (Kendriya Vidyalaya Singrauli, Kendriya Vidyalaya Jayant Colliery, DPS Vindhyanagar, DPS Nigahi and St Joseph's Higher Secondary) follows CBSE or ICSE; none teaches IB or Cambridge/Edexcel IGCSE at present.",
      schools: [],
    },
    {
      city: "Nearby: Varanasi's Cambridge-track school",
      note: "Sunbeam International School, Varuna in Varanasi has adopted the Cambridge curriculum and is building toward full IGCSE, currently teaching up to Class 9. It is the closest school with any Cambridge registration, several hours from Singrauli by road or rail.",
      schools: ["Sunbeam International School, Varuna"],
    },
    {
      city: "Boarding routes for the full IB Diploma",
      note: "Because no local or nearby school offers the Diploma, families who can board a child tend to look at Jabalpur or the state capital Bhopal, where Little World School and established Cambridge campuses already operate.",
      schools: ["Little World School, Tilwara, Jabalpur", "The Sanskaar Valley School, Bhopal"],
    },
  ],

  modesIntro:
    "The base of every Singrauli arrangement is identical: one tutor, one student, live on video, on the clock the family already keeps. Only the tempo changes, whether that is a steady weekly slot, a tighter run before an exam series or a plan built around a boarding term's holiday dates. Nobody visits the house at any point, because that arrangement exists only in Gurugram and parts of Delhi NCR.",
  modes: [
    {
      title: "Weekly one-to-one video sessions",
      description:
        "One fixed slot per week, tutor and student sharing a screen, timed around the child's school day or the hours a transferred household keeps. Most Singrauli students begin with this.",
      bullets: [
        "The choice of tutor is never limited to whoever lives close by",
        "IB DP, MYP and Cambridge IGCSE subjects are all covered",
        "Past papers are marked live on the shared screen every week",
        "The same tutor stays with the student throughout the term",
      ],
    },
    {
      title: "Term-long support with a running progress note",
      description:
        "The weekly rhythm is unchanged, but each lesson ends with a short written note and every few weeks there is a fuller review, so progress is never a matter of guessing.",
      bullets: [
        "Each note lists exactly what the lesson covered",
        "A review every few weeks resets the plan whenever it needs it",
        "Younger PYP or MYP students settle well into this steady pace",
        "A second weekly slot is easy to add as mocks approach",
      ],
    },
    {
      title: "Holiday and exam-block revision for boarding students",
      description:
        "A denser run of lessons falls in school breaks or the last weeks before an exam series, built on timed past papers with quick feedback and mapped to Singrauli's own rhythm of peak heat and monsoon interruption.",
      bullets: [
        "Papers are timed and marked to the criteria of the current board",
        "Feedback returns within a couple of days, not weeks",
        "The plan follows a boarding school's holidays and ignores local school dates",
        "Booking two or three weeks before a boarding term ends works well",
      ],
    },
  ],

  sections: [
    {
      heading: "Is IB or IGCSE taught at any school in Singrauli?",
      paragraphs: [
        "No school in Singrauli district currently teaches the IB or Cambridge and Edexcel IGCSE. The two central-government schools that serve PSU and coalfield staff, Kendriya Vidyalaya Singrauli and Kendriya Vidyalaya Jayant Colliery, run CBSE. So do the district's two private DPS campuses near Waidhan, Delhi Public School, Vindhyanagar and Delhi Public School, Nigahi. St Joseph's Higher Secondary School in Waidhan is on the ICSE board.",
        "Given the district's history, the gap is unsurprising. Singrauli became a district only in 2008, and the city had roughly 220,000 residents in the 2011 census. Coal and power money arrived quickly, but the private school market did not mature at the same speed, and Cambridge or IB affiliation usually goes first to older, larger urban markets.",
        "A family therefore has two workable options. One is a tutor who teaches the whole Cambridge or IB syllabus from outside the local school system. The other is boarding the child at a school in another city that already offers the programme. Tutoring supplies continuity in either case, as a full course from scratch or as support during holidays and term breaks.",
        "None of this puts a Singrauli student at a disadvantage on paper. Cambridge sets the same 0580 or 0620 paper nationwide, and the IB Diploma is moderated to a single global standard whatever the postcode. A tutor who knows the syllabus well can bring a Singrauli student level with a classmate in a much bigger school.",
      ],
      table: {
        caption: "Confirmed schools in Singrauli district and their board",
        columns: ["School", "Location", "Board"],
        rows: [
          ["Kendriya Vidyalaya Singrauli", "Singrauli town", "CBSE"],
          ["Kendriya Vidyalaya Jayant Colliery", "Jayant", "CBSE"],
          ["Delhi Public School, Vindhyanagar", "Vindhyanagar, Waidhan", "CBSE"],
          ["Delhi Public School, Nigahi", "Nigahi, Waidhan", "CBSE"],
          ["St Joseph's Higher Secondary School", "Waidhan", "ICSE (CISCE)"],
        ],
      },
      bullets: [
        "Five confirmed schools serve the district, every one on CBSE or ICSE",
        "There is no IB World School and no Cambridge or Edexcel IGCSE school nearby",
        "Tutoring works around that gap and does not top up what a school teaches",
        "Marking standards are identical wherever a student happens to live",
      ],
    },
    {
      heading: "MP Board, CBSE and ICSE compared with IB and IGCSE for a Singrauli family",
      paragraphs: [
        "Rural government schools in the district follow the Madhya Pradesh State Board. The two Kendriya Vidyalayas and both DPS campuses follow CBSE, and St Joseph's follows ICSE. Each of these boards sets a fixed paper on a fixed syllabus, and a well-drilled student can often clear it on recall and pattern practice. Cambridge IGCSE behaves differently. An Extended-tier question often wraps familiar content in an unfamiliar setting and trips up anyone who memorised only the steps.",
        "The widest difference lies in coursework. MP Board and CBSE give limited project credit, and ICSE puts somewhat more weight on practicals, but none approaches the detailed published criteria used to mark an IB Internal Assessment or an IGCSE coursework unit. A student in Class 9 or Class 11 who has never planned independent, criteria-marked work generally needs help with the planning before content even becomes the question.",
        "Depth separates the systems further. HL Maths and HL sciences go beyond anything MP Board or CBSE cover at the same age. IGCSE Core sits about where CBSE difficulty does, while Extended stands a clear step higher. Choosing Core or Extended in Grade 9 quietly decides how big the leap to Class 11 will feel afterwards.",
        "None of this counts against changing course. Many families who move from MP Board or CBSE to Cambridge or the IB end up liking a workload that is spread over the year and judged against criteria, once it is set out clearly next to a single decisive paper in March.",
      ],
      table: {
        caption: "MP Board, CBSE, ICSE versus IB and IGCSE for Singrauli students",
        columns: ["Feature", "MP Board / CBSE", "ICSE", "IB / IGCSE"],
        rows: [
          ["Presence around Singrauli", "Government schools plus KV and DPS campuses", "St Joseph's, Waidhan only", "No local school; reached by tutor or boarding"],
          ["How papers are set", "Fixed paper leaning on recall", "Dense, syllabus-heavy paper", "Application marked against criteria"],
          ["Coursework share", "Small project component", "Practicals weighted moderately", "Often a fifth to a third in IB; coursework units in IGCSE"],
          ["Where it is recognised", "Within India", "Within India", "Worldwide"],
        ],
      },
      bullets: [
        "Extended questions in Cambridge papers penalise rote learning more than MP Board or CBSE do",
        "At the moment of switching, planning independent criteria-marked work is the real skill gap",
        "The Grade 9 tier decision shapes how hard Class 11 feels later",
        "Many families prefer the spread-out workload once it has been explained",
      ],
    },
    {
      heading: "What does an IB or IGCSE tutor cost for a family in Singrauli?",
      paragraphs: [
        "IB Gram publishes no price list, and the reason is simple: fees follow how scarce and how deep a tutor's expertise is, not a rate card. A boarding family wanting IB Maths AA HL draws on a much smaller national pool than one beginning IGCSE Mathematics Core, and the two matches are priced differently. Your rate is confirmed in writing before the trial class begins and is not changed afterwards.",
        "Travel never enters a Singrauli fee, because nobody flies or drives in for a lesson. A Chemistry specialist in Kochi costs the family precisely what one based an hour from Waidhan would, which is useful because the second kind hardly exists for an IB subject in this district.",
        "What happens inside the hour matters more than the number attached to it. A tutor who has already marked Cambridge 0620 alternative-to-practical scripts, or guided several students through the IB Maths AI exploration, achieves more in one session than a generalist manages in two spent re-explaining material a previous school already taught.",
        "No fixed-term contract sits behind any of this. We check in every few weeks, a lesson can be paused or skipped without charge, and if the fit is wrong after the trial we look for a better tutor instead of urging a family to persevere.",
      ],
      bullets: [
        "Diploma HL tutoring costs more nationwide than IGCSE Core, purely because fewer tutors teach it",
        "No travel element is included, as no Singrauli lesson involves a journey",
        "A specific rate is fixed before the trial, not after",
        "There is no fixed-term contract and pausing or stopping costs nothing",
      ],
    },
    {
      heading: "Online tutoring next to Singrauli's coaching centres, home tutors and self-study",
      paragraphs: [
        "Coaching lanes around Waidhan and Singrauli town exist for MP Board and CBSE exams, together with the large JEE and NEET batches that an engineering-minded local economy sustains. Nobody runs a group class in IB Chemistry HL or IGCSE Additional Mathematics, because the handful of students in the whole district taking those subjects could never fill a batch.",
        "Private tutors do operate from Vindhyanagar and Waidhan for regular board subjects. Cambridge and IB demand is almost absent locally, though, so finding someone who taught IGCSE Physics 0625 alternative-to-practical work this year is close to impossible inside the district. A capable local generalist can calm a nervous student but cannot replace someone who regularly marks to the current syllabus.",
        "A disciplined student can get far alone in something like IGCSE Mathematics, where past papers are freely available and mark schemes are open. Self-study reliably breaks down at Internal Assessment planning and at the extended answers that Cambridge and IB examiners reward over a neat summary. Few students spot those weaknesses without a second, more experienced reader.",
        "Online tutoring trades an almost empty local pool of specialists for a national one. It keeps the precision to the syllabus that no coaching batch here is set up to give, and it adds the personal correction that solitary study lacks.",
      ],
      table: {
        caption: "Singrauli routes to IB and IGCSE support, compared",
        columns: ["Route", "Fit to the exact syllabus", "How much attention", "Real gap in Singrauli"],
        rows: [
          ["Coaching batches", "Poor; aimed at MP Board, CBSE, JEE or NEET", "Group, shared", "No IB or Cambridge batch runs at all"],
          ["Local private tutors", "Uneven", "One to one", "Almost none have taught the current syllabus"],
          ["Unsupervised self-study", "Whatever the student manages alone", "None", "IAs and extended answers go unchecked"],
          ["Matched online tutor", "Chosen for the exact code and level", "One to one", "Draws on the whole country rather than a thin local pool"],
        ],
      },
      bullets: [
        "District coaching serves MP Board, CBSE, JEE and NEET demand and not IB or Cambridge",
        "A tutor with recent experience of the exact syllabus is rare within Singrauli",
        "Self-study leaves IAs and extended writing without a second reader",
        "Matching across the country is what solves the thin local supply",
      ],
    },
    {
      heading: "How does Singrauli's climate and festival calendar affect a study plan?",
      paragraphs: [
        "Summers in this district are harsher than across most of Madhya Pradesh. From April to June the coalfield belt regularly passes 40 degrees Celsius, exactly when many schools hold final internal exams before the long break. July to September then brings monsoon rain, which can disrupt travel around Waidhan and the mining areas. A sensible plan allows for both from the start.",
        "The coal and power townships employ a big migrant workforce, much of it from Bihar and eastern Uttar Pradesh, so Chhath Puja in October or November is a major local event, alongside Diwali and Holi. Cambridge IGCSE holds its May-June and October-November series regardless, and a student sits whichever one their school or boarding institution enters them for.",
        "Boarding students take IB Diploma exams in the May session, get results in early July and can retake in November. A Singrauli household is therefore normally matching dates to the boarding school's calendar, not to a district one. For IGCSE the tier decision and Grade 10 mocks come earliest, and the six to eight weeks before an external series are when concentrated revision pays off most.",
        "For boarding DP students the holidays are the real opening, since term-time lessons must fit around the school's own schedule. A revision block started during the Diwali or summer break usually works far better than extra sessions crammed into a full term.",
      ],
      table: {
        caption: "How climate and festivals shape the Singrauli tutoring year",
        columns: ["Period", "What happens", "Effect on tutoring"],
        rows: [
          ["April-June", "Peak heat and school finals", "Shorter, focused sessions and no overloaded weeks"],
          ["July-September", "Monsoon, some local disruption", "Flexible slots, with catch-up lessons if a class is missed"],
          ["May & October-November", "Cambridge IGCSE series, IB DP exams and retakes", "Final revision blocks and timed past papers"],
          ["October-November", "Chhath Puja and Diwali", "Many families choose a lighter revision week"],
        ],
      },
      bullets: [
        "April-June heat coincides with year-end school exams across the district",
        "Cambridge IGCSE sits in May-June and October-November",
        "Boarding IB DP students take May exams and can retake in November",
        "Chhath Puja and Diwali both shape household calendars here",
      ],
    },
    {
      heading: "Where do Singrauli's IB and IGCSE students go after school?",
      paragraphs: [
        "After IGCSE, or after finishing the Diploma at a boarding school, students usually apply in more than one direction: engineering and management entrance in India, which suits an economy already leaning towards engineering careers, or undergraduate study overseas for families with an international posting in their past. Higher education inside the district is thin, so most who stay in India move to Rewa, seat of Awadhesh Pratap Singh University, or on to a larger city.",
        "An IB or IGCSE qualification needs Association of Indian Universities equivalence before it counts for Indian engineering and medical entrance, and JEE or NEET eligibility also depends on the right subjects at the right level. Because so many Singrauli parents work in mining or power engineering, JEE preparation often runs beside subject tutoring and does not replace it.",
        "Overseas, predicted grades issued in autumn of Class 12 carry real weight, as universities see them long before final results. British offers usually state a total IB points score with HL subject minimums, American admissions read predictions within a wider application, and other systems apply their own equivalence rules.",
        "IB Gram tutors stay on the academic side: subject preparation, raising predicted grades and exam technique. We can explain which subjects and levels a target course tends to expect, so lesson time goes where it changes the outcome.",
      ],
      bullets: [
        "Awadhesh Pratap Singh University in Rewa anchors higher education nearby",
        "AIU equivalence and correct subject levels decide JEE and NEET eligibility",
        "Engineering interest runs high locally because of the coal and power economy",
        "Tutoring targets subject depth and exam technique, not admissions consulting",
      ],
    },
    {
      heading: "IB Maths AA and AI, and the sciences, in detail for Singrauli students",
      paragraphs: [
        "Analysis and Approaches fits students heading for engineering, physical science or economics-heavy degrees, and its HL Paper 3 rewards unfamiliar problem-solving that a local tutor market trained on MP Board and CBSE seldom drills. Applications and Interpretation depends on statistics, modelling and confident graphic-calculator use, and boarding students most often drop easy marks on its exploration by leaving it to the end of a holiday.",
        "Physics HL needs fluent use of the data booklet, tight pacing across Papers 1 and 2 and a Scientific Investigation whose method could stand up to scrutiny instead of repeating a textbook demonstration. In Chemistry HL, organic mechanisms and energetics take over once the early bonding units are done. Both subjects need past papers marked against the real IB rubric, not a general science standard.",
        "Biology students mostly need to turn textbook knowledge into the extended answers that IB command terms demand, with enough statistics to keep an investigation's conclusions sound. Across all three sciences, students from MP Board or CBSE tend to know the content but practise command-word precision too little.",
        "With no school in the district teaching any of these subjects, an online specialist matched to the exact HL or SL level and current syllabus is the quickest way to close the gaps between one school term and the next.",
      ],
      bullets: [
        "AA suits proof and calculus routes and AI suits statistics and modelling",
        "Physics HL and Chemistry HL both turn on the Scientific Investigation",
        "Biology needs command-term precision as much as content knowledge",
        "MP Board and CBSE switchers know the content but under-rehearse command words",
      ],
    },
    {
      heading: "IGCSE Core versus Extended and subject choices for Singrauli families",
      paragraphs: [
        "Core and Extended cap different grade ranges in Cambridge IGCSE. For a Singrauli student the choice carries a particular weight: no local school teaches the syllabus, so the decision rests on a tutor's reading of the student's ability instead of a school's tracking data.",
        "Extended Mathematics 0580, joined by Additional Mathematics 0606 where a family adds it, prepares the strongest launch into IB Maths AA HL. Extended sciences do the same for DP Physics or Chemistry HL, cushioning the jump because their depth is already closer to what the Diploma assumes.",
        "With no school structure to work within, tutoring here builds the syllabus from the ground up and does not patch gaps a school has partly covered. As a result the tier choice is made earlier and more deliberately than it would be for a student already enrolled somewhere.",
        "A household coming from an Edexcel school elsewhere needs a tutor who understands how Foundation and Higher papers phrase questions differently from Cambridge. The mathematics overlaps heavily, yet the technique for answering does not carry across cleanly.",
      ],
      bullets: [
        "Only a tutor's assessment guides the tier choice, since no local school tracks it",
        "0606 Additional Mathematics is the strongest bridge into IB Maths AA HL",
        "Lessons build the syllabus from scratch instead of topping up school teaching",
        "Edexcel technique differs from Cambridge even where content overlaps",
      ],
    },
    {
      heading: "How does IB Gram match a tutor for a family in Singrauli?",
      paragraphs: [
        "We open with a short brief covering the programme or board, subject and level, current or predicted grade, the exam session and the worry behind the request, be it one topic, an Internal Assessment, mocks or a wholesale curriculum change. That brief, not a tutor's photograph, decides who is shortlisted.",
        "Fit to the syllabus is the first filter, because a district without any IB or IGCSE school will never have the right specialist living next door. Before any introduction we check each tutor's qualifications, recent teaching of that exact subject and level, and their approach to Internal Assessments.",
        "The free trial class lets you and your child judge the rest: whether the explanations are clear, whether the diagnostic questions are useful and whether your child feels able to ask for help. The tutor then sends a short first-month plan of topics and lesson rhythm, which you approve or return for changes.",
        "If the fit proves wrong at any stage, we find another tutor and do not expect the child to adapt. No long contract holds a Singrauli family to someone who is not working out.",
      ],
      bullets: [
        "The brief covers programme, subject, level, exam session and the concern behind it",
        "Fit to the syllabus is the first filter because the district has no IB or IGCSE school",
        "Tutors are vetted before introduction and the trial precedes any commitment",
        "A written first-month plan, with a re-match whenever the fit is wrong",
      ],
    },
  ],

  tutorsIntro:
    "Meet the tutors who teach IB PYP, MYP and Diploma subjects alongside Cambridge IGCSE for Singrauli families. Each match weighs the syllabus, level and exam session a child is sitting, and every lesson is delivered live online, never inside your house.",

  process: [
    { title: "Send us the brief", description: "Tell us the programme or board, subject and level, current or predicted grade, and the hours that actually work for your Singrauli household." },
    { title: "Get a shortlist", description: "Tutors are chosen for syllabus fit first, since Singrauli has so few IB and Cambridge schools, and each comes with a plain explanation of why." },
    { title: "Take a free trial class", description: "Your child works through a real topic with the tutor online. No charge is made and neither side is committed." },
    { title: "Approve the first month", description: "The tutor sets out topics, lesson rhythm and how progress will be reported; you sign off or ask for changes." },
    { title: "Settle into regular sessions", description: "One fixed weekly online slot, reviewed every few weeks, with a re-match available whenever the fit stops working." },
  ],

  whyPoints: [
    { title: "Matching follows the syllabus, not the label", description: "Each tutor is picked for the exact IB subject and HL or SL level, or the Cambridge code and tier, never for a broad description." },
    { title: "Designed for a district with no local option", description: "No Singrauli school teaches IB or Cambridge/Edexcel IGCSE, so our search reaches specialists nationwide." },
    { title: "Proof before commitment", description: "The free trial puts your child in front of the tutor on a real topic, so your decision rests on what you saw." },
    { title: "Assessed work remains the student's", description: "Tutors guide Internal Assessments, coursework and the Extended Essay but never write any part of them." },
    { title: "Progress you can see", description: "A short note follows each session, and every few weeks there is a fuller review, so nothing is assumed." },
    { title: "Free of strings", description: "No school or exam-board affiliation, no long contract, and a re-match any time the present fit is not right." },
  ],

  faqs: [
    { question: "How do I find an IB tutor in Singrauli?", answer: "Send IB Gram your child's IB programme, subject, level and exam session and we will shortlist tutors already teaching that exact course. No school in the district runs the IB Diploma, MYP or PYP, so location plays no part; matching is by syllabus fit anywhere in India, and lesson times are settled around your routine. A free trial class comes first, before you decide anything." },
    { question: "Do you offer IGCSE tutors in Singrauli for Cambridge?", answer: "Yes, for the Cambridge syllabus, as online tuition and not a household visit, since no district school runs it. Tutors are matched by subject code and tier, with Mathematics 0580 Extended and Physics 0625 among the frequent requests, and practice uses genuine Cambridge past papers and mark schemes." },
    { question: "Do your tutors visit homes in Singrauli?", answer: "No, tutors do not visit homes in Singrauli. Home visits happen only in Gurugram and parts of Delhi NCR. Everywhere else, Singrauli included, lessons are live, one to one, over video with a shared whiteboard: proper online tuition from home, without anyone arriving at your door." },
    { question: "What does an IB or IGCSE tutor in Singrauli cost?", answer: "Four things drive the rate: programme and level, subject, session length and how recently the tutor taught that exact syllabus. Your figure is confirmed before the trial class. IB Diploma HL usually costs more than Cambridge IGCSE Core support because fewer tutors teach it. Lessons are online, so no travel cost is inside the fee, and there is no long contract." },
    { question: "Which schools in Singrauli offer IB or IGCSE?", answer: "None at present. Kendriya Vidyalaya Singrauli, Kendriya Vidyalaya Jayant Colliery, Delhi Public School Vindhyanagar and Delhi Public School Nigahi teach CBSE, and St Joseph's Higher Secondary School in Waidhan teaches ICSE. Nothing confirmed in the district offers the IB or Cambridge and Edexcel IGCSE, which is why families here depend on tutoring to reach those courses." },
    { question: "My child boards at an IB school outside Singrauli. Can a tutor help during holidays?", answer: "Yes, and we see this often from Singrauli, because no local school offers the IB Diploma or Middle Years Programme. We match a tutor to the subject, level and syllabus your child's boarding school follows, and lessons fit into school breaks or, if the boarding school permits, agreed evening slots in term." },
    { question: "Is there a free trial class before I commit?", answer: "Yes, each match begins with a free trial class. Your child tackles a real topic from their own syllabus with the tutor online, at no cost and with no duty to continue. Afterwards the tutor sends a short first-month plan, and you choose whether to go ahead, request changes or try someone else." },
    { question: "Can a tutor help with IB Internal Assessments for a child in Singrauli?", answer: "Yes, by guiding and never by writing. That means choosing a research question that can be answered, explaining what each assessment criterion rewards, planning data collection and giving honest feedback on drafts. Writing or rewriting assessed work breaches IB academic integrity rules, so IB Gram tutors turn such requests down." },
    { question: "Which IB Diploma subjects can you help with for a Singrauli family?", answer: "Tutors cover the main Diploma subject groups that a Singrauli student is likely to take: Maths Analysis and Approaches or Applications and Interpretation at HL and SL, Physics, Chemistry, Biology, Economics, Business Management, English A and Computer Science, plus Theory of Knowledge and the Extended Essay. Ask if your subject is not listed." },
    { question: "Do you tutor IB MYP and PYP students connected to Singrauli, not only the Diploma?", answer: "Yes, the whole IB continuum is covered for households whose child attends an IB school elsewhere or is changing curriculum mid-year. MYP lessons concentrate on criterion-based analysis in the sciences and languages and on the Personal Project process journal, while PYP lessons develop reading, writing, number sense and Exhibition research." },
    { question: "Is online tutoring as effective as in-person tuition for IB or IGCSE students in Singrauli?", answer: "It works well here. No local specialist teaches HL subjects or particular Cambridge codes, and no local school does either, so there is nothing in person to compare it with. A shared whiteboard, past papers on screen and recorded worked solutions replace most of what a tutor beside the child would do, and your choice widens to specialists across India." },
    { question: "How are IB Gram tutors verified for Singrauli students?", answer: "Before any introduction we check qualifications, recent teaching of the exact subject and level, and each tutor's approach to assessment criteria. Since Singrauli has no local school teaching IB or Cambridge, we look for people who taught that syllabus lately and not for generalists. The free trial class then lets you judge the fit yourself." },
    { question: "When should my child in Singrauli start IB or IGCSE tutoring?", answer: "As close to the start of the course as possible: Class 11 for the IB Diploma, Grade 9 for Cambridge IGCSE. That leaves time to build foundations before internal exams, IA deadlines and predicted grades arrive together. A final-year start still brings real progress if lessons focus on the highest-value topics and past papers before the exam series." },
    { question: "My child is switching from CBSE or MP Board to IGCSE in Singrauli. Can a tutor help?", answer: "Yes, and the request is frequent because so many Singrauli families come from a CBSE or MP Board background. The gap is usually the style of question and not the content. Command words such as 'explain', 'evaluate' and 'justify' need direct teaching, ideally beginning a term before the switch happens." },
    { question: "Can sessions happen on weekends or after school hours in Singrauli?", answer: "Yes. Most families choose weekday evenings after school plus weekend mornings. We allow for the fierce April-June heat, when earlier evenings are often preferred, and for shift patterns that run through many coalfield and power-sector households. A second weekly slot before mocks or an exam series is simple to add online." },
    { question: "What happens if we are not happy with the tutor in Singrauli?", answer: "Tell us and we will find someone else. Progress is reviewed with families every few weeks, and a re-match follows whenever the fit is wrong, so a child is never left struggling on with a tutor who is not helping. With no long contract, pausing or stopping brings no penalty." },
    { question: "Is IB Gram affiliated with any Singrauli school or with the IB or Cambridge?", answer: "No. IB Gram is an independent tutoring platform, and none of Kendriya Vidyalaya Singrauli, DPS Vindhyanagar, DPS Nigahi, St Joseph's Higher Secondary School, the International Baccalaureate Organization, Cambridge Assessment International Education or Pearson Edexcel endorses or represents us. School names on this page only describe the board landscape around Singrauli." },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "An overview of IB and IGCSE tutoring for families in Indian cities." },
    { label: "IB and IGCSE home tuition in Gurgaon", href: "/gurgaon/", description: "The only place where IB Gram tutors teach in person at home." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers, subject lists and exam series for IGCSE." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "HL and SL choices, IAs, TOK and the Extended Essay in the DP." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Choosing between Analysis and Approaches and Applications and Interpretation." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles arranged by subject, programme and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your brief and ask for a free trial class." },
    { label: "IB and IGCSE tutoring in Rewa", href: "/rewa/", description: "Matching for Rewa, the closest division headquarters in Madhya Pradesh." },
    { label: "IB and IGCSE tutoring in Satna", href: "/satna/", description: "Matching for Satna, a fellow Vindhya-region district in Madhya Pradesh." },
    { label: "IB and IGCSE tutoring in Jabalpur", href: "/jabalpur/", description: "A boarding route towards established Cambridge and IGCSE schooling." },
    { label: "IB and IGCSE tutoring in Varanasi", href: "/varanasi/", description: "The nearest city with any confirmed Cambridge-track school." },
  ],

  closingHeading: "Book a free trial with an IB or IGCSE tutor in Singrauli",
  closingBody:
    "Give us the programme or board, subject and level, your child's current grade and the hours that suit your Singrauli household. In return you receive a shortlisted tutor, a summary of their teaching background and trial slots that fit your day, all online and one to one, with nothing to pay and no commitment. Email ibgram24@gmail.com or message +91 7439 368 115 on WhatsApp.",
};
