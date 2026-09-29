import type { CitySeoPage } from "../types";

/**
 * /yamunanagar/ - IB and IGCSE tutoring page for Yamunanagar, Haryana. Online-only delivery: no
 * confirmed IB or Cambridge/Edexcel IGCSE school inside Yamunanagar district (a search hit for
 * "Vidya Sanskar International School" turned out to be in Faridabad, not here, so it is not used).
 * stripSchools stays empty; schoolClusters point to confirmed schools in Chandigarh (the closest,
 * via the new NH73 four-lane), Gurugram and Delhi, consistent with panipat.ts and hisar.ts. Rendered
 * with the shared CountryLanding layout used by /gurgaon/.
 */
export const yamunanagar: CitySeoPage = {
  slug: "yamunanagar",
  countryName: "Yamunanagar",
  countryNameLong: "Yamunanagar, Haryana",
  demonym: "Yamunanagar",
  state: "Haryana",
  stateCode: "IN-HR",
  flagCode: "in",
  countryCode: "IN",
  region: "Haryana, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evening slots work around the plywood mills' own shift changes, the fog that shuts down the Yamuna belt most December mornings, and whatever your child's own homework leaves open",
  lastUpdated: "2026-09-21",
  geo: { latitude: 30.133, longitude: 77.288 },
  wikipedia: "https://en.wikipedia.org/wiki/Yamunanagar",
  alternateNames: ["Jamnanagar", "Abdullahpur", "Yamuna Nagar"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Yamunanagar | Online Tuition",
  metaDescription:
    "IB and IGCSE tutors for Yamunanagar: DP, MYP, PYP and Cambridge/Edexcel support matched to your syllabus, live online lessons, one to one, with a free trial.",
  h1: "IB and IGCSE Tutors and Online Tuition in Yamunanagar",
  heroEyebrow: "IB & IGCSE ONLINE TUITION FOR YAMUNANAGAR FAMILIES",
  heroSubtitle:
    "Two kinds of household ask about IB and IGCSE tutors in Yamunanagar: one has a child boarding somewhere else on an international syllabus and wants private help at home during the holidays, the other has a son or daughter on the Haryana Board or CBSE here in Yamunanagar-Jagadhri and wants Cambridge or Edexcel Maths added on the side. Either way the lesson happens on a screen, never at your gate, and the clock it runs on cares more about the plywood mills' own shift bells and December's fog than anything else.",
  primaryKeyword: "IB and IGCSE tutors in Yamunanagar",
  imageAltText: "IB Diploma student in Yamunanagar working through a Chemistry past paper with a tutor during a live online lesson",
  secondaryKeywords: [
    "IB tutor Yamunanagar",
    "IGCSE tutor Yamunanagar",
    "IB home tuition Yamunanagar",
    "IGCSE home tuition Yamunanagar",
    "IB private tuition Yamunanagar",
    "IB Maths tutor Yamunanagar",
    "IGCSE Maths tutor Yamunanagar",
    "IB Physics tutor Yamunanagar",
    "IB Chemistry tutor Yamunanagar",
    "IB Biology tutor Yamunanagar",
    "IB DP tutor Yamunanagar",
    "IB MYP tutor Yamunanagar",
    "IB PYP tutor Yamunanagar",
    "IGCSE online tuition Yamunanagar",
    "Cambridge IGCSE tutor Yamunanagar",
    "IB tutor Jagadhri",
    "IGCSE tutor Model Town Yamunanagar",
    "online IB tutor Yamunanagar Haryana",
    "IB tutor near Yamuna Nagar",
  ],

  heroTrustPoints: [
    "A tutor is chosen against your child's actual IB subject and level, or the exact Cambridge or Edexcel code, nothing vaguer",
    "Lessons stay on a screen. A tutor turning up at your gate in Yamunanagar happens nowhere but Gurugram and pockets of Delhi NCR",
    "Sit through the whole first class before deciding anything, let alone paying for it",
    "Zero ties to any Yamunanagar school, and zero ties to the IB Organization, Cambridge Assessment International Education or Pearson Edexcel",
  ],
  heroStats: [
    { value: "PYP to DP", label: "Full IB continuum covered" },
    { value: "Cambridge & Edexcel", label: "Both IGCSE boards supported" },
    { value: "IST", label: "One shared clock, tutor to student" },
    { value: "First class free", label: "See it work before paying" },
  ],

  intro: {
    heading: "What IB and IGCSE tutoring looks like for a family living in Yamunanagar",
    paragraphs: [
      "Nobody gets handed a subject in the abstract here. A tutor teaches one course, named precisely, to one student. Sometimes that's a full IB Diploma subject a boarding student needs propped up between terms while their family stays put in Yamunanagar-Jagadhri. Other times it's Cambridge IGCSE Maths or Science, bolted onto a Haryana Board or CBSE year a student is already living through in this city. The second case only works because the lesson happens on a screen: a tutor can mark up a past paper live, as a student writes it out, which neither a phone call nor a bought video course can replicate.",
      "Nothing in this district has IB or Cambridge/Edexcel IGCSE authorisation right now, and that includes Jagadhri. Schools here sit almost entirely on the Haryana Board or CBSE, taught in Hindi and English, with plenty of Punjabi spoken at home thanks to the district's post-Partition settlement. Three sorts of family actually come to us: those with a child boarding at an international school in Chandigarh, Gurugram or Delhi; people connected to the plywood, paper or sugar-machinery trade who moved here mid-syllabus; and Haryana Board or CBSE households confident enough to bolt an IGCSE paper on privately for the extra stretch.",
      "There's no version of this where a tutor drives over. That's strictly a Gurugram-and-parts-of-Delhi-NCR thing. A Yamunanagar lesson asks for a laptop, a stable connection, and a tutor logged in from anywhere in the country they actually teach best, which is how a house off Jagadhri Road ends up working with an IB Economics specialist in Chennai instead of whoever happens to be five minutes away, which for most Diploma subjects here is, frankly, nobody.",
      "This platform has no relationship with any school named on this page, nor with the IB Organization, Cambridge Assessment International Education or Pearson Edexcel. What a tutor does is teach, explain and mark. What a tutor never does is write, or touch up, any part of an Internal Assessment, an Extended Essay or a piece of coursework.",
    ],
    bullets: [
      "IB support for boarding students and newly arrived households, PYP right through to DP",
      "Cambridge and Edexcel IGCSE matched to the precise code and tier",
      "Live, one-to-one lessons run on Indian Standard Time",
      "A written note lands after every free trial class",
      "No in-person visits here; that stays confined to Gurugram and Delhi NCR",
    ],
  },

  programmesIntro:
    "Because no school in this district holds IB authorisation, a Yamunanagar family typically reaches the Primary Years, Middle Years or Diploma Programme through a child boarding somewhere else, or through moving here mid-course. Cambridge and Edexcel IGCSE sit in the same spot, since the district has no confirmed school for either. Here's how each of the four stages plays out in practice.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12",
      description:
        "Six transdisciplinary units of inquiry replace a timetable split into separate subjects, building toward a student-led Exhibition at the end. Nothing here is externally examined, so a tutor's job is reading stamina, number sense, and coaching a young student to ask a question worth actually investigating.",
      countryNote:
        "A PYP enquiry from Yamunanagar almost always follows a family's move here mid-programme, so the opening sessions tend to rebuild habits the previous school had already set.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16",
      description:
        "Four lettered criteria replace a single mark per subject, MYP Year 5 brings the Personal Project, and a handful of schools finish the programme with an eAssessment. Where students stumble is turning flat description into real criterion-level analysis.",
      countryNote:
        "MYP work tied to Yamunanagar is nearly always a boarding student home for a short break, working through criterion-marked assignments before heading back.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three Higher Level and three Standard, run alongside Theory of Knowledge and a required Extended Essay, with internal assessment worth somewhere between a fifth and a third of the grade in most subjects. Results follow the May sitting.",
      countryNote:
        "No school in the district teaches the Diploma, so a family reaching out here is almost certainly backing a child boarded in Chandigarh, Gurugram or Delhi, and tutoring runs on that school's calendar, not Yamunanagar's.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A student on this track takes two or more Diploma courses and pairs them with a hands-on career study, some reflective writing and workplace-skills modules. Few schools in India offer it, though the Diploma pieces inside are taught with no less depth than in a straight DP.",
      countryNote:
        "CP requests out of Yamunanagar are unusual given there's no local IB school at all; where one does turn up, the focus lands on the Diploma content rather than the reflective piece.",
    },
  ],

  subjectsIntro:
    "A boarding student trying to catch up on Applications and Interpretation over Diwali needs something different from a Haryana Board student here adding IGCSE Physics purely for the stretch, so matching starts from the exact code and level, not a loose word like 'IB'. Only once that's settled does the exam series a student is actually entered for, and a slot around their own school day, come into it.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Most enquiries here trace back to a Paper 3 question nobody at school had prepared the student for. First sessions usually chase down an exploration topic long before the last week of a holiday, not during it." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Confident use of the graphic calculator and comfort with statistics matter more than pure algebra ever does, and the exploration is the piece that slips if nobody fixes a topic and a deadline weeks in advance." },
    { name: "IB Physics", levels: "HL / SL", description: "The data booklet trips students up more than the physics does, so a tutor tests that fluency across all six areas before turning to a Scientific Investigation that could stand up to a moderator's actual questions." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Bonding and structure rarely cause trouble; organic mechanisms further into the course do, and a tutor checks the investigation write-up directly against what the mark scheme wants to see." },
    { name: "IB Biology", levels: "HL / SL", description: "A student can know every fact and still miss marks by not answering what the command word actually asks, and weak statistics usually decide whether an investigation's conclusion stands." },
    { name: "IB Economics", levels: "HL / SL", description: "Sessions open on drawing accurate diagrams with examples that are genuinely current, then push an HL student toward the level of evaluation Paper 3 rewards." },
    { name: "IB Business Management", levels: "HL / SL", description: "Reciting theory instead of applying it to the case given costs marks fast, so sessions run on real past-paper scenarios, and the Business Research Project needs an actual organisation willing to talk." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Neither the unseen commentary in Paper 1 nor the comparative essay in Paper 2 comes naturally without practice, and of everything on this course, the Individual Oral is what students walk in least prepared for." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Theory and pseudocode need real coding time alongside them, since the IA's product has to run and its write-up has to match what was actually built." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies quoted from the biological, cognitive and sociocultural approaches have to stay current and accurate, and a long-response answer only holds together under time pressure with real practice behind it." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Examiners want a student who questions a system, not one who repeats a textbook, so sessions push toward genuine evaluation over tidy summary." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies get drilled until specific places and numbers replace vague generalities, and fieldwork write-ups get checked for a method that would genuinely hold up." },
    { name: "IB History", levels: "HL / SL", description: "Paper 1 rewards close source work, Paper 2 rewards a single argument held from the first line to the last, and the two get practised as separate skills." },
    { name: "IB Hindi A / B", levels: "HL / SL", description: "Register and text type come first, since marks disappear fastest there, before sessions move into the unscripted conversation the individual oral actually demands." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Sessions run as a real conversation, not a lecture, pulling apart an exhibition commentary line by line and asking a student to argue a prescribed title from a side they hadn't planned to take." },
  ],

  igcseSubjectsIntro:
    "Since this district has no confirmed Cambridge or Edexcel school, the starting point is always which board a family is genuinely aiming for rather than the word IGCSE on its own; Cambridge sits two exam windows a year apart from Edexcel's own pair. A Haryana Board or CBSE household adding a paper on gets matched to that specific board from day one, because the two ask questions in noticeably different ways even when the syllabus content lines up.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended tier goes better for a student who has built speed without a calculator first, since Cambridge costs a dropped method step more than a single wrong answer." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "It builds calculus and vector confidence a year or two before the IB Diploma would otherwise demand it, which sets up a move into Maths AA cleanly." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Rearranging equations under time pressure trips students more than the physics itself, and the alternative-to-practical paper gets its own dedicated slot rather than a last-minute scramble." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole-ratio work and organic reactions build alongside alternative-to-practical technique from lesson one, not as a late add-on." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics questions carry heavier weight than students expect on Cambridge papers, and the longer extended-response questions get their own dedicated drilling since that's exactly where marks vanish." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Diagrams pick up the fast marks, but the real gain sits in the longer evaluative questions that Core-tier preparation usually skips entirely." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Real Python problems make logic actually stick, since tracing it on paper alone rarely survives contact with code that has to run." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Timed practice on an unseen passage, plus direct teaching of summary technique, closes more of the gap than vocabulary lists ever do." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "A memorised answer nearly always loses to one built for the specific scenario given, so sessions drill applying theory to the case on the page." },
  ],

  regionsTitle: "Yamunanagar and Jagadhri areas covered by our online IB and IGCSE matching",
  regionsIntro:
    "Since every lesson happens online, these areas matter less for getting a tutor to a door and more as context: which school catchment a family belongs to, how mill traffic across the twin city shapes a workable evening, and what fog or peak summer heat genuinely does to a household's week here.",
  regions: [
    { name: "Model Town, Yamunanagar", note: "An established residential area with several private schools and a fair number of professional households." },
    { name: "Jagadhri", note: "The twin city across the rail tracks, carrying much of the plywood and paper trade along with a large share of the district's schools." },
    { name: "Buria Road", note: "A busy link out to the surrounding villages, where school and mill shift-change traffic decides when an evening slot actually works." },
    { name: "Saraswati Nagar", note: "A quieter pocket near the Western Yamuna Canal, popular with families in the paper and sugar-machinery trades." },
    { name: "Railway Road", note: "Central, near the Yamuna Nagar-Jagadhri station, home to a mix of older schools and long-settled trading families." },
    { name: "Prem Nagar", note: "An established locality on the Jagadhri side, mostly Hindi and Punjabi speaking, where Haryana Board and CBSE schooling still dominates." },
    { name: "The NH73 corridor toward Chandigarh", note: "The route most families now use for a Chandigarh boarding option, cut down considerably by the recent four-laning." },
    { name: "The industrial belt", note: "The plywood, paper and sugar-machinery manufacturing zone that shapes much of the district's working households and their schedules." },
    { name: "Sadhaura Road", note: "A quieter corridor toward the Shivalik foothills and Kalesar side of the district, home to a smaller, more spread-out set of families." },
  ],

  schoolDisclaimer:
    "No school inside Yamunanagar district currently carries authorisation for the IB or for Cambridge/Edexcel IGCSE. Any school named here is only pointing to where a confirmed campus actually exists nearby, not to a partnership. This platform holds no contract with any school listed, and none with the IB Organization, Cambridge Assessment International Education, or Pearson Edexcel either.",
  schoolClusters: [
    {
      city: "Yamunanagar itself",
      note: "Nothing in this district turned up as a confirmed IB or Cambridge/Edexcel IGCSE school. Families here study mostly on the Haryana Board or CBSE, either boarding a child elsewhere for an international curriculum or bolting IGCSE subjects on privately.",
      schools: [],
    },
    {
      city: "Nearby: Chandigarh",
      note: "The nearest genuine option, about ninety kilometres away now that NH73 through Panchkula runs four lanes. Strawberry Fields High School, Sector 26, is confirmed to teach an international curriculum alongside CBSE.",
      schools: ["Strawberry Fields High School, Sector 26, Chandigarh"],
    },
    {
      city: "Nearby: Gurugram",
      note: "Around two hundred kilometres south, and Haryana's real concentration of IB schools. Amity International School, Sector 46, and GD Goenka World School, Sohna, are both confirmed IB campuses.",
      schools: ["Amity International School, Sector 46, Gurugram", "GD Goenka World School, Sohna"],
    },
    {
      city: "Nearby: Delhi",
      note: "About the same distance as Gurugram, with a considerably wider spread of established schools. DPS RK Puram runs the IB Diploma alongside CBSE and is confirmed.",
      schools: ["DPS RK Puram, Delhi"],
    },
  ],

  modesIntro:
    "Every format a Yamunanagar family lands on comes down to the same basic thing underneath: one tutor, one student, live on video, on the same Indian clock. The rhythm is what shifts, a steady weekly slot, a denser run before exams, or a plan built entirely around when a boarding term breaks. Nobody comes to the house in any of this, not outside Gurugram and Delhi NCR.",
  modes: [
    {
      title: "A regular weekly lesson",
      description:
        "The same slot every week, tutor and student on a shared screen, built around school hours or a boarding term's own dates. Most families here start this way.",
      bullets: [
        "Never picked for living nearby, since that isn't how this works",
        "Covers IB DP, MYP or Cambridge/Edexcel IGCSE equally well",
        "Past papers marked live, on screen, week after week",
        "The same tutor stays for the whole term",
      ],
    },
    {
      title: "Ongoing tutoring with a paper trail",
      description:
        "The weekly lesson stays, but a note follows every class and a longer check-in comes every few weeks, so a family always knows where things actually stand.",
      bullets: [
        "A written note after each lesson, not left to memory",
        "A proper check-in every few weeks resets the plan where needed",
        "Especially good for a younger PYP or MYP student on a slow, steady pace",
        "A second slot is easy to add once mocks approach",
      ],
    },
    {
      title: "Revision blocks over holidays and exam windows",
      description:
        "A denser run of sessions sits across school breaks or the weeks before an exam series, built on timed past papers with quick turnaround, mapped against the fog, the summer heat and the festival season here.",
      bullets: [
        "Past papers marked against whichever criteria a board is currently using",
        "Feedback back within days, not weeks",
        "Built around a boarding term's holidays and the local festival calendar",
        "Best booked two to three weeks before a boarding term ends",
      ],
    },
  ],

  sections: [
    {
      heading: "Yamunanagar's schools, and who actually needs IB or IGCSE tutoring here",
      paragraphs: [
        "Nearly every school across Yamunanagar and Jagadhri runs on the Haryana Board or CBSE, taught in Hindi and English with Punjabi common at home, a legacy of the district's post-Partition settlement. Not one campus here carries IB World School status or teaches Cambridge/Edexcel IGCSE, which puts this district in a different position from Chandigarh and Gurugram, both reachable, each with an established international-curriculum scene of its own.",
        "Three kinds of household generate almost everything we see from Yamunanagar: families with a child boarding at an international school in Chandigarh, Gurugram or Delhi; people tied to the plywood, paper or sugar-machinery trade who arrived here with a child already partway through IB or IGCSE; and confident Haryana Board or CBSE households adding an IGCSE Maths, Science or English paper privately for the extra rigour it brings.",
        "Having no local school changes one thing directly: there's simply no resident bench of IB or IGCSE subject specialists to draw on here. Matching nationally is the actual fix, so a family near Buria Road, or one inside the industrial belt, isn't stuck picking among whichever generalists are willing to try an unfamiliar syllabus. They can reach a specialist teaching that exact subject or code from anywhere in the country instead.",
        "None of that leaves a well-matched Yamunanagar student behind anyone. Cambridge sets the same 0580 or 0620 paper wherever it's sat, IB moderation holds Diploma work to one worldwide standard no matter where a student lives, and a tutor who genuinely knows that mark scheme closes the distance completely.",
      ],
      table: {
        caption: "Where Yamunanagar families find confirmed IB or IGCSE schools",
        columns: ["City", "Distance from Yamunanagar", "Confirmed school"],
        rows: [
          ["Chandigarh", "Around 90 km (NH73)", "Strawberry Fields High School, Sector 26"],
          ["Gurugram", "Around 200 km", "Amity International School, Sector 46; GD Goenka World School, Sohna"],
          ["Delhi", "Around 200 km", "DPS RK Puram (IB Diploma)"],
        ],
      },
      bullets: [
        "No school in Yamunanagar district runs the IB or Cambridge/Edexcel IGCSE",
        "Demand comes from boarding families, industry relocations, and households adding IGCSE depth privately",
        "There's no local specialist bench at all, which is exactly why national matching earns its keep here",
        "Marking standards and the exams themselves don't differ from anywhere else in India",
      ],
    },
    {
      heading: "How is IB or IGCSE different from Haryana Board and CBSE in Yamunanagar?",
      paragraphs: [
        "Quick answer: Haryana Board and CBSE test a fixed syllabus through one paper that rewards a familiar pattern, while Cambridge and Edexcel IGCSE deliberately hide familiar content inside unfamiliar wording, especially at Extended or Higher tier, which catches out a student who only memorised the steps. A sharp Haryana Board student can clear that paper on pattern alone; the same trick stops working fast against an Extended-tier question.",
        "Coursework is where the real gap sits. Haryana Board and CBSE both carry some project or practical marks, but neither gets close to how an IB Internal Assessment or IGCSE coursework piece is marked against detailed, published criteria. A student sitting an IGCSE paper for the first time has usually never planned an independent piece of work in their life, and building that skill takes up more of the early sessions than content ever does.",
        "Depth splits the two apart as well. HL Maths and the HL sciences go a long way past anything Haryana Board or CBSE covers at the same age, Core-tier IGCSE lands roughly at CBSE difficulty, and Extended sits a clear notch higher again. Whatever gets decided on Core versus Extended in Grade 9 quietly shapes how steep the jump into Class 11, or a boarding school's Diploma programme, ends up feeling.",
        "None of this argues against switching. Plenty of families, once they lay the spread-out, criteria-based IB or IGCSE structure next to a single make-or-break Haryana Board paper, end up choosing it, particularly once a child is already looking at study beyond the state.",
      ],
      table: {
        caption: "Haryana Board and CBSE against IB and IGCSE",
        columns: ["Feature", "Haryana Board / CBSE", "IB / IGCSE"],
        rows: [
          ["Schools running it in this district", "The large majority", "Not one; done through boarding or private study"],
          ["How it's tested", "A single end-of-year paper, mostly recall", "Marked against published, applied criteria"],
          ["Weight given to projects or practicals", "Small", "A fifth to a third of the grade in most IB subjects; built into IGCSE too"],
          ["Where it's recognised", "India", "Globally"],
        ],
      },
      bullets: [
        "Extended and Higher tier questions punish memorisation far harder than a Haryana Board paper ever does",
        "Planning an independent piece of assessed work is the real gap on a first switch",
        "The Core versus Extended call in Grade 9 shapes how steep later jumps feel",
        "A good number of families end up preferring the spread-out workload once they see it laid out",
      ],
    },
    {
      heading: "What sets the price of a tutor for IB or IGCSE in Yamunanagar?",
      paragraphs: [
        "Ask about Core-tier IGCSE Maths and the quote lands nowhere near what a boarding family pays for IB Physics HL, simply because the two draw from pools of very different sizes across the country. HL Diploma subjects run higher purely because so few tutors nationally have taught them lately; Core IGCSE has a much bigger, easier pool sitting behind it. Whatever your specific match settles at gets confirmed before the trial, not adjusted once it's underway.",
        "There's no travel line hiding in a Yamunanagar fee, because nobody drives anywhere for this. A Physics HL specialist working out of Pune costs exactly what one on Railway Road would, and the second option is rare enough for an IB subject here that the point barely matters in practice.",
        "What fills the hour counts for more than the hourly number itself. A tutor who's already marked Cambridge 0620's alternative-to-practical papers, or taken several students through the IB Maths AI exploration, gets through more real work in one session than a generalist manages in two, most of which goes on re-covering what school already taught.",
        "Nothing runs on a long contract here. Families check in every few weeks, a session pauses or gets skipped without cost, and if a tutor and student simply aren't clicking after the trial, the answer is a new match, not a request to push through it.",
      ],
      bullets: [
        "HL Diploma work costs more nationally than Core IGCSE, purely on how scarce the specialist is",
        "No travel cost sits inside a Yamunanagar fee, since nothing involves a commute",
        "A specific match's cost is confirmed before the trial, never adjusted after",
        "No long contract; pausing or stopping costs nothing",
      ],
    },
    {
      heading: "Coaching centres, home tutors, self-study or online tuition: what actually works here",
      paragraphs: [
        "Coaching centres across Yamunanagar and Jagadhri exist for Haryana Board, CBSE and entrance-exam batches, full stop, because that's where the money is. Nobody's running a batch for IB Chemistry HL or IGCSE Additional Maths 0606; the number of students in the whole district taking either wouldn't fill a room.",
        "Home tutors do fine business around Model Town and Prem Nagar for ordinary school subjects, but genuine IB or IGCSE demand here is close to nil, so a tutor who's actually taught IGCSE Physics 0625's alternative-to-practical paper this year simply isn't sitting in this district. A decent generalist calms a nervous student down, but can't stand in for someone marking against a live syllabus regularly.",
        "A determined student can get somewhere alone on IGCSE Maths, where past papers and mark schemes are all public, but self-study almost always falls apart on Internal Assessment planning and the kind of extended written answer examiners specifically reward over a neat summary. Nobody catches that gap without a more experienced second reader on the draft.",
        "What changes with online tutoring is simple: a local bench of effectively zero specialists becomes a national one, and the syllabus precision no coaching centre offers here, and the correction self-study can't give itself, both arrive at once.",
      ],
      table: {
        caption: "Routes to IB and IGCSE support in Yamunanagar, compared",
        columns: ["Route", "Syllabus match", "Setting", "Where it falls short here"],
        rows: [
          ["Coaching centres", "Weak; built for Haryana Board, CBSE or entrance exams", "Batch, shared", "No batch covers IB or Cambridge content"],
          ["Local home tutors", "Hit or miss", "Individual", "Very few have taught the current IGCSE or IB syllabus"],
          ["Self-study alone", "As far as a teenager can self-check", "Solo", "No second reader for IA drafts or long answers"],
          ["A tutor matched to the syllabus", "Chosen for the exact code and tier", "Individual", "None; the search covers the whole country"],
        ],
      },
      bullets: [
        "Coaching centres here run on Haryana Board, CBSE and entrance demand, not IB or Cambridge",
        "A tutor teaching the live IB or IGCSE syllabus is essentially not to be found locally",
        "Self-study leaves IAs and extended answers with no second, experienced reader",
        "National matching is the actual fix for the local supply gap here",
      ],
    },
    {
      heading: "What does the exam year look like around Yamunanagar's fog, heat and festivals?",
      paragraphs: [
        "The district's genuine pressure points sit at opposite ends of the calendar: December and January bring the dense fog that shuts the whole Yamuna belt's roads and rail down for hours at a stretch, right as school internal exams often run; April to June regularly pushes the mercury to 42-44 degrees; and Lohri in mid-January, Baisakhi in April given the district's sizeable Punjabi population, then Diwali, each derail a household's week for several days running.",
        "Cambridge IGCSE keeps its May-June and October-November series every year, and Edexcel adds a January sitting on top of its own June one, so a family here gets matched to whichever board and series a child is genuinely entered for, since the two don't share a calendar at all. IB Diploma exams for boarding students fall in the May session, results land in early July, and a November retake window exists too, meaning tutoring runs against the boarding school's own dates rather than Yamunanagar's.",
        "For a household adding IGCSE privately, the six to eight weeks before whichever series applies is where revision earns its keep, and even a January start ahead of a May-June sitting can still produce something real, as long as the plan is honest about how much is actually left to cover.",
        "For boarding DP students, school holidays are the only working window that matters, since term-time tutoring has to squeeze around a boarding school's own timetable rather than Yamunanagar's. A revision block set into the winter or summer break beats extra sessions crammed into an already full term, every time.",
      ],
      table: {
        caption: "Yamunanagar's exam and seasonal calendar, and its effect on tutoring",
        columns: ["Period", "What happens", "Effect on tutoring"],
        rows: [
          ["December-January", "Dense fog, disrupted travel, school internal exams", "Sessions stay online regardless; a natural focus period"],
          ["April-June", "Peak heat; Cambridge IGCSE series; IB DP exams for boarding students", "Shorter, sharply focused sessions and final revision blocks"],
          ["Baisakhi and Diwali", "Several days of household disruption", "A planned pause, rescheduled rather than dropped"],
          ["October-November", "Cambridge IGCSE's second series", "A second window for resits or later-entered subjects"],
        ],
      },
      bullets: [
        "December-January fog disrupts travel but never an online lesson",
        "Cambridge IGCSE runs May-June and October-November; Edexcel adds a January series",
        "A boarding DP student's exams fall in May, and a retake chance follows that November",
        "Baisakhi, Lohri and Diwali each derail a Yamunanagar household's week for days at a time",
      ],
    },
    {
      heading: "Where do Yamunanagar students go next: universities and career routes after IB or IGCSE",
      paragraphs: [
        "A student wrapping up IGCSE and moving into Class 11 and 12, or finishing an IB Diploma while boarding elsewhere, generally looks at several paths at once from a Yamunanagar base: engineering, given the district's own manufacturing backbone in plywood, paper and sugar machinery; medicine; or a place abroad. Locally, Kurukshetra University sits at the centre of the region's higher education, NIT Kurukshetra pulls in engineering hopefuls from across the district, and Panjab University in Chandigarh comes up once a family starts looking further out.",
        "An Indian engineering or medical seat isn't automatic just because a student holds an IB or IGCSE certificate; Association of Indian Universities equivalence has to be sorted first, alongside the specific subjects and levels JEE or NEET require. It's paperwork families who moved to Yamunanagar for work sometimes start too late, particularly for a Diploma candidate boarding somewhere outside Haryana.",
        "For applications abroad, the predicted grades that come out in autumn of Class 12 carry more weight than most families realise, since universities see them long before final results. UK offers generally name a total IB points figure with HL minimums attached; US applications weigh predicted grades within a much wider file; every other system runs its own equivalence again.",
        "This platform's tutors stick to the academic side: subject depth, predicted-grade improvement, exam technique. We're glad to talk through what a target course typically expects, so tutoring time goes exactly where it moves the outcome.",
      ],
      bullets: [
        "Kurukshetra University and NIT Kurukshetra anchor local higher education",
        "Panjab University, Chandigarh, comes up once a family looks further afield",
        "JEE and NEET eligibility both hinge on AIU equivalence plus the right subject levels going in",
        "Tutoring stays focused on subject depth and exam technique, not admissions advice",
      ],
    },
    {
      heading: "IB Maths AA versus AI, and the three sciences, for a Yamunanagar student",
      paragraphs: [
        "Which Maths route fits usually comes down to what's next. Engineering, physical science and economics-heavy courses pull toward Analysis and Approaches, where HL Paper 3 throws unfamiliar, multi-step problems that a tutor market trained mostly on Haryana Board and CBSE patterns rarely drills. Applications and Interpretation rewards statistical thinking, real-world modelling and confident calculator use instead, and its exploration is exactly where a boarding student's easy marks vanish if the topic isn't locked down before a break ends.",
        "Both HL sciences hinge on the same demand, dressed differently. Physics needs quick, accurate data-booklet use under real pressure across Paper 1 and 2, plus a Scientific Investigation built on a method that survives a moderator actually pushing on it. Chemistry, once bonding and structure are out of the way, shifts weight onto organic mechanisms and energetics, marked just as exactingly, which is why a tutor grading against the real IB rubric beats one working off general science knowledge.",
        "Biology tends to expose something different: solid recall that never converts into marks because a student answers around a command term instead of straight into it, plus statistics shaky enough to leave an investigation's conclusion unconvincing. That gap shows up across all three sciences whenever a student has come from Haryana Board or CBSE, where content is usually fine but exam phrasing was never drilled this hard.",
        "None of these subjects live inside Yamunanagar district, so a specialist matched precisely to the HL or SL level and this year's syllabus closes the gap between one school holiday and the next far quicker than a generalist reaching for whatever science textbook is on the shelf.",
      ],
      bullets: [
        "Proof and calculus-heavy routes point toward AA; statistics and modelling point toward AI",
        "Physics and Chemistry HL both hinge on the Scientific Investigation",
        "Biology marks depend on command-term precision just as much as content recall",
        "A move from Haryana Board or CBSE usually leaves the syllabus known but exam phrasing under-practised",
      ],
    },
    {
      heading: "IGCSE Core versus Extended, and picking subjects in Yamunanagar",
      paragraphs: [
        "Core and Extended cap different grade bands on both Cambridge and Edexcel IGCSE, so the Grade 9 call between them matters twice over here: once for the ceiling a student can reach on that paper, and again for how gentle or brutal any later jump into HL science or maths feels for a student who boards elsewhere for the IB Diploma.",
        "A household that takes Extended Mathematics 0580 and layers Additional Mathematics 0606 on top gives a student about the strongest possible base for IB Maths AA HL down the line. Extended in the sciences does something similar, taking the edge off DP Physics or Chemistry HL because the depth Extended demands already sits close to where the Diploma starts.",
        "A Yamunanagar student nearly always ends up on IGCSE because a family chose to add it privately, not because a school built it in, since no local school runs it as standard. That makes tier and subject choice a genuinely open conversation, one worth having with a tutor who can lay out what each path leads to, rather than copying whatever combination a distant school happens to run.",
        "For a household arriving here from an Edexcel-affiliated school, a tutor who knows how Edexcel's Foundation and Higher tiers phrase questions differently from Cambridge's matters, since the maths underneath overlaps heavily but the technique for answering does not carry over cleanly at all.",
      ],
      bullets: [
        "The Grade 9 Core versus Extended call affects grade ceiling and later DP readiness alike",
        "Nothing builds toward IB Maths AA HL as well as 0606 Additional Mathematics does",
        "A Yamunanagar student's tier and subject choice is usually a genuinely open family decision",
        "Edexcel's technique differs from Cambridge's even where content overlaps",
      ],
    },
    {
      heading: "How your child gets matched to a tutor here",
      paragraphs: [
        "It begins with a short brief: programme or board, subject and level, current or predicted grade, the exam session being sat, and the real worry behind the request, whether that's one topic, an Internal Assessment, mocks or switching boards entirely. That brief decides the shortlist, not any tutor's profile photo.",
        "Syllabus fit comes first, since a district with no confirmed local school means the right specialist was never going to turn up inside Yamunanagar itself anyway. Qualifications, recent teaching experience with that exact subject and level, and how a tutor approaches Internal Assessments all get checked before a family ever meets anyone.",
        "The free trial class is where a family actually judges things: how clearly a tutor explains, whether the questions asked genuinely diagnose something, and whether a child feels able to speak up when stuck. A short first-month plan follows, covering topics and rhythm, for the family to approve or push back on.",
        "If the fit turns out wrong, the next step is simply a different tutor, not a child forced to adapt. Nothing binds a family here to a match that isn't working out.",
      ],
      bullets: [
        "The brief covers programme, subject, level, exam session and the real worry behind it",
        "Syllabus fit is the first filter, since there's no local pool to draw on here",
        "Qualifications and teaching experience get checked before anyone meets a family",
        "A written first-month plan, with a re-match whenever the fit is wrong",
      ],
    },
  ],

  tutorsIntro:
    "Below are tutors covering the IB continuum, PYP through DP, alongside both Cambridge and Edexcel IGCSE, all placed with Yamunanagar families. Since a lesson here always happens on screen rather than at home, the match leans entirely on getting the syllabus, level and exam sitting exactly right.",

  process: [
    { title: "Tell us what's needed", description: "Board or programme, subject and level, current or predicted grade, and when your household actually has time free." },
    { title: "Get a shortlist", description: "Tutors picked on syllabus fit first, since there's no local bench here, each with a plain reason attached." },
    { title: "Watch a free trial class", description: "A real topic, worked through live online, no cost and no strings either way." },
    { title: "Sign off the first month", description: "The tutor lays out topics and rhythm and how progress gets reported; approve it or ask for changes." },
    { title: "Settle into a rhythm", description: "A fixed weekly online slot, checked on every few weeks, re-matched whenever it stops working." },
  ],

  whyPoints: [
    { title: "Matching starts from the syllabus", description: "A tutor is chosen for the precise IB subject and level, or exact Cambridge/Edexcel code, never a rough label." },
    { title: "Built for a place with no local school", description: "Nothing in Yamunanagar carries IB or IGCSE authorisation, so the search runs nationally instead." },
    { title: "You see it before you commit", description: "The free trial puts a real topic in front of your child, so any decision rests on what actually happened." },
    { title: "The writing stays the student's", description: "A tutor coaches an Internal Assessment, coursework or the Extended Essay, but never drafts it." },
    { title: "Nothing gets assumed", description: "A note follows every lesson, and a fuller check-in lands every few weeks." },
    { title: "No strings", description: "No school or board affiliation, no long contract, a re-match whenever the fit is off." },
  ],

  faqs: [
    { question: "How do I find an IB tutor in Yamunanagar?", answer: "Share your child's IB programme, subject, level and exam session, and back comes a shortlist of tutors who teach that exact course. There's no school in this district running the IB Diploma, so the search happens nationally on syllabus fit rather than location, with timing checked against your household only afterward. A free trial class always comes first, and switching tutors if the fit is wrong takes nothing more than saying so." },
    { question: "Do you offer IGCSE tutors in Yamunanagar for Cambridge or Edexcel?", answer: "Yes, both boards are covered, delivered as live online tuition since neither has a confirmed school running anywhere in this district. A match is made on the exact code and tier, Mathematics 0580 Extended or Chemistry 0620 among the more common requests, using that specific board's own past papers and mark schemes rather than a generic approach." },
    { question: "Do your tutors visit homes in Yamunanagar?", answer: "No, nobody visits a home here for a lesson. That kind of in-person tuition exists only in Gurugram and parts of Delhi NCR. Everywhere else, this district included, a lesson runs live online, one to one, over video with a shared whiteboard, which is real tuition taken from home, just without anyone physically arriving at it." },
    { question: "What does an IB or IGCSE tutor cost in Yamunanagar?", answer: "The programme and level, the subject, how long each session runs, and how recently a tutor last taught that syllabus all feed into the number, which gets locked in for your match before any trial starts. HL Diploma work usually costs more than Core-tier IGCSE. Since nobody travels for a lesson, that cost never enters the fee, and pausing or ending sessions carries no penalty at any point." },
    { question: "Which schools in Yamunanagar offer IB or IGCSE?", answer: "None right now. We couldn't confirm a single school in this district running the IB Diploma, Middle Years or Primary Years Programme, or Cambridge/Edexcel IGCSE. Most schools here sit on the Haryana Board or CBSE. Confirmed international-curriculum schools do exist nearby, in Chandigarh, Gurugram and Delhi." },
    { question: "My child boards at an IB school outside Yamunanagar. Can a tutor help during holidays?", answer: "Yes, and it's one of the more common requests from this district, given there's no local school teaching the IB Diploma or Middle Years Programme. A tutor gets matched to the exact subject, level and syllabus a boarding school follows, with sessions built around school breaks or, where the school allows it, agreed evening slots during term." },
    { question: "Is there a free trial class before anything is charged?", answer: "Yes, every match opens with one. A child works through a genuine topic from their own syllabus with the tutor online, free of charge and with no obligation attached. A short first-month plan follows the trial, and the family decides from there whether to go ahead, ask for changes, or try someone else." },
    { question: "Can a tutor help with IB Internal Assessments for a child connected to Yamunanagar?", answer: "Yes, but only by coaching, never by writing anything for the student. That covers narrowing a workable research question, unpacking what each mark-band actually rewards, thinking through how data gets collected, and giving honest feedback once a draft exists. Producing or rewriting the assessed text itself would break IB integrity rules, so that request is turned down flat." },
    { question: "Which IB Diploma subjects can you help with for a Yamunanagar family?", answer: "The list runs across pretty much every group a boarding student here would need: both Maths routes at HL and SL, the three sciences, Economics, Business Management, English A, Computer Science, and the DP core of Theory of Knowledge and the Extended Essay besides. If a subject isn't listed, it's worth asking anyway, since coverage runs wider than any single page can spell out." },
    { question: "Do you tutor IB MYP and PYP students connected to Yamunanagar, not just DP?", answer: "Yes, the full continuum is covered for Yamunanagar households whose child studies at an IB school elsewhere or is moving between curricula. MYP sessions work on criterion-based analysis across sciences and humanities and keep the Personal Project's journal on track; PYP sessions build reading, writing, number confidence and the research habits an Exhibition eventually needs." },
    { question: "Is online tutoring as good as in-person for IB or IGCSE students in Yamunanagar?", answer: "For this district, yes, mostly because there's no local specialist to weigh it against for any IB or IGCSE subject, let alone one specific HL topic. A shared digital whiteboard, past papers worked through live on screen and recorded solutions to revisit cover almost everything a tutor sitting beside a child would do, and the trade-off is access to specialists right across India." },
    { question: "How are tutors verified for Yamunanagar students?", answer: "Qualifications, recent teaching experience with the exact subject and level, and an approach to assessment criteria all get checked before anyone is introduced to a family. Given that Yamunanagar has no confirmed local IB or IGCSE school, tutors who've taught that syllabus recently get sought out ahead of generalists. The free trial class is then where a family judges fit for themselves." },
    { question: "When should my child in Yamunanagar start IB or IGCSE tutoring?", answer: "Starting right at the beginning, Class 11 for the IB Diploma or Grade 9 for IGCSE, leaves time to sort out foundations before internal exams, IA deadlines and predicted grades all pile up together. A family starting in the final year can still make real progress, with tutoring aimed squarely at the highest-value topics and past papers." },
    { question: "My child is on the Haryana Board or CBSE here but wants to add an IGCSE subject. Can a tutor help?", answer: "Yes, this comes up often enough from this district, precisely because no school here puts IGCSE on the timetable by default. Whatever subject gets chosen, usually Mathematics, one of the Sciences, or English, is taught as a genuine addition running beside the student's existing year, with the specific board and sitting confirmed upfront." },
    { question: "Can sessions happen on weekends or evenings in Yamunanagar?", answer: "Yes, most households here prefer weekday evenings after school plus weekend mornings. Scheduling accounts for winter fog, when families often push sessions slightly later, and for Lohri, Baisakhi and Diwali, when routines shift noticeably for several days at a time. Adding a second weekly slot ahead of mocks is straightforward to arrange." },
    { question: "What happens if the tutor assigned in Yamunanagar isn't working out?", answer: "Say so, and a different tutor gets found. Progress is reviewed every few weeks, with a re-match available whenever the fit is wrong, rather than asking a child to push through with someone who isn't helping. There's no long contract, so pausing or stopping carries no penalty at any stage." },
    { question: "Is this platform affiliated with any school in Yamunanagar, or with the IB, Cambridge or Edexcel?", answer: "No, not with any of them. This is an independent tutoring platform with no endorsement from, or partnership with, any Yamunanagar school, the IB Organization, Cambridge Assessment International Education or Pearson Edexcel. Any school mentioned on this page is simply pointing toward a nearby city with a confirmed campus, and every tutor works strictly to a family's own board and syllabus." },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "How families in other Indian cities approach the same IB and IGCSE questions." },
    { label: "IB and IGCSE home tuition in Gurgaon", href: "/gurgaon/", description: "Where a tutor visiting your house is actually part of the offer." },
    { label: "IGCSE guide", href: "/igcse/", description: "IGCSE boards, tiers and subject choices laid out plainly." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "HL and SL, how internal assessment is weighted, TOK and the Extended Essay." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP's lettered criteria and how the Personal Project actually runs." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and how they build toward the Exhibition." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Picking between Analysis and Approaches and Applications and Interpretation." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles, searchable by subject and years teaching." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send a brief and get a trial class booked." },
    { label: "IB and IGCSE tutoring in Panipat", href: "/panipat/", description: "Another Haryana city with the same gap: no local IB or IGCSE school at all." },
    { label: "IB and IGCSE tutoring in Rohtak", href: "/rohtak/", description: "A further look at how a Haryana city without a local school handles this." },
    { label: "IB and IGCSE tutoring in Hisar", href: "/hisar/", description: "A Haryana city that also leans on Gurugram, Delhi and Chandigarh for confirmed schools." },
  ],

  closingHeading: "Book a free trial with an IB or IGCSE tutor in Yamunanagar",
  closingBody:
    "Let us know the board or programme, the subject and level, where your child stands today, and when your household is genuinely free. Back comes a shortlisted tutor with their background explained and a trial slot that fits your week, delivered entirely online, at no cost and with nothing owed. Email ibgram24@gmail.com or WhatsApp +91 7439 368 115.",
};
