import type { CitySeoPage } from "../types";

/**
 * /rampur/ - IB and IGCSE tutoring page for Rampur, Uttar Pradesh. Online-only delivery: tutors do
 * not visit homes in Rampur, since in-person home tuition is offered only in Gurugram and parts of
 * Delhi NCR. No school inside Rampur district currently holds IB or Cambridge/Edexcel IGCSE status,
 * so stripSchools is empty and schoolClusters point honestly at Delhi NCR, the Dehradun boarding
 * belt and Lucknow (Modern School runs IB PYP; GD Goenka Shaheed Path runs Cambridge). Rendered with
 * the shared CountryLanding layout used by /gurgaon/.
 */
export const rampur: CitySeoPage = {
  slug: "rampur",
  countryName: "Rampur",
  countryNameLong: "Rampur, Uttar Pradesh",
  demonym: "Rampur",
  state: "Uttar Pradesh",
  stateCode: "IN-UP",
  flagCode: "in",
  countryCode: "IN",
  region: "Uttar Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Sessions get built around thick January fog mornings near the Kosi belt, the long dry heat before the monsoon and, more than either of those, the school timetable your own child actually keeps",
  lastUpdated: "2026-09-21",
  geo: { latitude: 28.7833, longitude: 79.0333 },
  wikipedia: "https://en.wikipedia.org/wiki/Rampur,_Uttar_Pradesh",
  stripSchools: [],

  title: "IB & IGCSE Tutors in Rampur | Online Private Tuition",
  metaDescription:
    "IB and IGCSE tutors for Rampur, UP: live online lessons matched to your child's syllabus, PYP to DP, exam-ready practice, honest advice, free trial class.",
  h1: "IB and IGCSE Tutors and Online Tuition in Rampur",
  heroEyebrow: "IB & IGCSE ONLINE TUITION FOR RAMPUR STUDENTS",
  heroSubtitle:
    "A Rampur household usually falls into one of three groups: still deciding between the UP Board, CBSE and something like IGCSE for a younger child, keeping a son or daughter who boards at a school elsewhere on track through the holidays, or freshly arrived in the city from a place where a different curriculum was already underway. Whichever it is, a tutor works from the exact subject and level your child needs and teaches over a screen, since nothing about this involves anyone knocking on your door. Timing works around the district's foggy winters, its long summer heat, and your family's own routine.",
  primaryKeyword: "IB and IGCSE tutors in Rampur",
  imageAltText: "IGCSE student in Rampur working through a Mathematics past paper with a tutor during a live online lesson",
  secondaryKeywords: [
    "IB tutor Rampur",
    "IGCSE tutor Rampur",
    "IB home tuition Rampur",
    "IGCSE home tuition Rampur",
    "IB private tuition Rampur",
    "IB Maths tutor Rampur",
    "IGCSE Maths tutor Rampur",
    "IB Physics tutor Rampur",
    "IB Chemistry tutor Rampur",
    "IB Biology tutor Rampur",
    "IB DP tutor Rampur",
    "IB MYP tutor Rampur",
    "IB PYP tutor Rampur",
    "IGCSE online tuition Rampur",
    "Cambridge IGCSE tutor Rampur",
    "IB tutor Civil Lines Rampur",
    "IGCSE tutor Moradabad Road Rampur",
    "online IB tutor Rampur Uttar Pradesh",
    "IB tutor Rampur UP",
  ],

  heroTrustPoints: [
    "Every match is built around the specific board and level your child is enrolled for, not a general 'IB' or 'IGCSE' label",
    "Classes happen entirely on screen. Stepping into a house to teach is something we only do in Gurugram and pockets of Delhi NCR, never in Rampur",
    "You sit in on a real lesson before spending anything or agreeing to a plan",
    "No commercial tie to any Rampur school, nor to the IB, Cambridge International or Pearson Edexcel",
  ],
  heroStats: [
    { value: "PYP to DP", label: "Whole IB continuum supported" },
    { value: "Cambridge & Edexcel", label: "Both IGCSE boards covered" },
    { value: "IST, GMT+5:30", label: "One clock, tutor and student" },
    { value: "Free trial lesson", label: "See it before you pay" },
  ],

  intro: {
    heading: "What tutoring for a Rampur family looks like in practice",
    paragraphs: [
      "Rampur is a UP Board and CBSE town first and last, with a scattering of ICSE schools and nothing on the IB or Cambridge/Edexcel register anywhere inside the district, whether you count the city itself or the tehsils around it, Shahabad, Milak, Bilaspur and Suar. That single fact shapes almost every conversation we have with a Rampur family: it is rarely 'find us a tutor nearby', and almost always 'help my child keep up with a syllabus this city does not teach'.",
      "The households we hear from split roughly three ways. Some are choosing a school for a younger child and want to understand, in plain terms, whether IGCSE would suit better than the board options sitting in front of them. Others already have a son or daughter at a boarding school in Delhi, Dehradun or further afield and need someone who knows that exact syllabus to keep pace during term breaks. A smaller group has just moved into Rampur, perhaps for a posting or a family business, with a child already partway through the IB or IGCSE somewhere else entirely.",
      "For all three, the mechanics stay simple. Video call, shared screen, one student and one tutor, timed to whatever the family's own calendar and the child's school demand. A tutor working this way can mark a past paper as fast as a student writes it, or sit with a teenager while an Internal Assessment plan takes shape, without either party needing to be in the same city, let alone the same room.",
      "IB Gram does not represent, and is not endorsed by, any school, board or examination body named anywhere on this page. What a tutor does stops at explaining, correcting and coaching; a finished Extended Essay, Internal Assessment or piece of coursework has to remain the student's own writing, full stop.",
    ],
    bullets: [
      "Coverage across the whole IB continuum for children boarding away from Rampur",
      "Cambridge and Edexcel IGCSE matched to the exact syllabus code and tier",
      "One-to-one video lessons kept on Indian time throughout",
      "A short written plan arrives once the free trial class ends",
      "No tutor comes to your door in Rampur; that stays limited to Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "Rampur district has not authorised a single school for the IB, so the four stages below reach local families through two routes only: a child boarding at a school elsewhere who comes home for holidays, or a household that has just settled in Rampur mid-course. The table underneath sets out what each stage actually asks of a student before we get into subjects.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12",
      description:
        "Younger children move between broad inquiry units rather than a fixed timetable of separate subjects, working toward a self-directed Exhibition project in their final year without sitting any formal exam along the way. Reading fluency, comfort with numbers and the ability to frame a proper question worth investigating matter far more here than covering a syllabus.",
      countryNote:
        "Requests connected to Rampur at this stage nearly always come from a family newly arrived mid-year, wanting a child's routines kept steady while the rest of the household settles in.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16",
      description:
        "Four separate assessment criteria apply to almost every subject instead of a single mark, a Personal Project falls due in the fifth year of the programme, and a number of schools close it out with an eAssessment. Students used to describing what they know tend to struggle moving toward the sharper, criteria-driven analysis this stage expects.",
      countryNote:
        "MYP work tied to Rampur is generally a child home from boarding school for a break, wanting a science or language assignment marked against the proper criteria before term resumes.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects run across the two years, split three at Higher Level and three Standard, on top of Theory of Knowledge and a compulsory Extended Essay, with coursework in most subjects worth somewhere between a fifth and a third of the eventual grade. Final results follow the May exam session, usually reaching students in early July.",
      countryNote:
        "Since no Rampur school runs the Diploma, this is almost certainly a family supporting a child boarded in another city, and any tutoring plan follows that school's calendar rather than a Rampur one.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "At least two subjects drawn from the ordinary Diploma course list sit alongside career-focused study, a written reflection on that learning, and a set of practical skill modules. Very few schools in India run it at all, though whichever Diploma subjects fall inside a student's chosen combination still get taught to full depth.",
      countryNote:
        "We rarely hear CP requests connected to Rampur, given that no local school teaches even the ordinary Diploma; where one does come up, focus stays on the academic subjects rather than the reflective component.",
    },
  ],

  subjectsIntro:
    "A teenager catching up on Economics diagrams over a Diwali break needs something quite different from one three weeks from an Internal Assessment deadline, so the starting point is always the exact subject and level rather than the word IB by itself. Once that is settled, a tutor works backward from the actual exam session the student is entered for and finds a slot that fits their boarding school's own calendar.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Paper 3's unfamiliar, multi-step questions are what usually bring a family to us, since regular classroom teaching rarely has time to drill that kind of problem-solving. The mathematical exploration is the other pressure point, and getting a topic chosen weeks rather than days before it is due changes the outcome noticeably." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "This course leans on statistics, modelling real situations and near-constant graphic calculator work rather than pure proof, so fluency with the calculator itself becomes part of what gets taught. Students who leave the exploration for the last week of a school break routinely hand in weaker work than the same student would produce with six extra weeks." },
    { name: "IB Physics", levels: "HL / SL", description: "Six thematic areas and two written papers reward a student who can move fluently between the data booklet and the question in front of them, and that fluency rarely arrives without deliberate practice. The Scientific Investigation is graded on whether its method could survive a genuinely sceptical read, which is a different skill from simply running an experiment." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Once the early bonding and structure content is out of the way, organic mechanisms are where most Rampur-linked students lose confidence, and sessions tend to spend real time there. The required investigation write-up needs to match what a moderator is actually scoring against, not just describe what happened in the lab." },
    { name: "IB Biology", levels: "HL / SL", description: "Knowing the content is rarely the problem; answering precisely what a command word like 'evaluate' or 'outline' is asking for is where marks slip away. Getting the statistics right inside an investigation is usually what separates a conclusion an examiner accepts from one that gets picked apart." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams drawn accurately and paired with an example from the last year or two, rather than a stale textbook case, earn the easiest marks going. HL students then need pushing toward the kind of policy evaluation that Paper 3 rewards, which takes more coaching than most students expect." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study questions punish generic theory answers, so a good chunk of a session is spent working an actual past case and pinning quotes from it into the answer itself. Finding a real business willing to open its books up for the Business Research Project is usually the harder half of that unit, not writing it up afterward." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Timed practice on an unseen extract for Paper 1 builds confidence faster than reading around a text ever does, and the comparative work for Paper 2 needs a student to actually hold two texts in their head at once rather than write about them one after the other. The Individual Oral tends to need three or four run-throughs before it stops sounding rehearsed." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Pseudocode on paper and a working program are not the same skill, so a tutor keeps a laptop open through most sessions rather than treating theory and coding as separate tracks. The Internal Assessment lives or dies on whether the submitted code and the write-up actually describe the same thing." },
    { name: "IB Psychology", levels: "HL / SL", description: "A student needs three approaches, biological, cognitive and sociocultural, each backed by studies they can name correctly under pressure, and mixing them up costs marks fast. Longer response questions get built almost like a mini essay, with a plan drawn before any writing starts." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "The subject rewards a student willing to argue against a system rather than describe it approvingly, so sessions spend time deliberately picking holes in a case study before writing a balanced answer." },
    { name: "IB Geography", levels: "HL / SL", description: "Naming an actual place and an actual number beats a vague description every time on a Geography paper, so case studies get memorised as concrete facts rather than themes, and a fieldwork write-up gets stress-tested for whether its method would hold up to a real question." },
    { name: "IB Hindi A", levels: "HL / SL", description: "Getting the register right for a given text type matters more than vocabulary range at this level, and the individual oral only improves once a student practises speaking without a script in front of them, which most students resist until forced into it." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "A tutor treats TOK sessions as a debate rather than a class, picking apart one object from the exhibition at a time and pushing a student to argue a prescribed title from whichever side they find less comfortable." },
  ],

  igcseSubjectsIntro:
    "Requests connected to Rampur split between Cambridge and Pearson Edexcel depending on which boarding school a family's child attends, so preparation starts from the exact syllabus code and tier rather than a general label, then works back from the May-June or October-November series the student is sitting. A family moving a child from CBSE or ICSE into IGCSE gets matched on the specific gap that switch tends to open up, rather than a blanket refresher.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Moving to Extended tier usually means building speed without a calculator first, since a lost method mark on an easy step costs more in the end than one wrong final answer." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Vectors and an early taste of calculus turn up here a year or two before a Diploma student would normally meet them, so a student taking this subject seriously arrives at Maths AA already halfway comfortable with half its content." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "The real bottleneck is usually rearranging equations under time pressure, not the physics concepts themselves, and the alternative-to-practical paper gets its own dedicated practice rather than being treated as an afterthought." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole-ratio calculations and organic reaction knowledge develop alongside alternative-to-practical technique from the very first session, rather than leaving the practical component for later worry." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics questions come up more often on Cambridge papers than most students expect walking in, and a tutor treats the longer written answers as a separate skill worth drilling on its own rather than something that follows naturally from knowing the content." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "A clean diagram wins easy marks fast, so that comes first, but sessions push on quickly toward the evaluative writing that a Core-only student rarely gets enough practice at before the exam." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "A student learns to trace an algorithm properly only after watching their own code fail and fixing it, so a tutor keeps Python running through most of a session instead of leaving programming as a topic covered in theory alone." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Timed reading of a passage the student has never seen, paired with direct summary-writing technique, closes more of the mark gap than general vocabulary work manages on its own." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Applying theory to the exact scenario printed in the question earns marks that a memorised textbook answer, however well written, almost always loses out on." },
  ],

  regionsTitle: "Rampur localities we cover through online IB and IGCSE matching",
  regionsIntro:
    "Every lesson connected to Rampur runs online, so the areas below serve as background rather than a delivery radius: which school catchment a family sits in, how far a switch toward Moradabad or Delhi would actually be, and what an evening's study time looks like once winter fog or summer heat gets factored in.",
  regions: [
    { name: "Civil Lines", note: "The city's administrative core, where most established CBSE and UP Board schools sit and where the first questions about switching to IGCSE tend to come from." },
    { name: "Qila and the old city", note: "The historic heart around the Nawabs' fort and the Raza Library, older and denser, with UP Board and Urdu-medium schooling dominant nearby." },
    { name: "Company Bagh area", note: "A quieter belt near the public garden, home to a number of government and professional families weighing curriculum choices for younger children." },
    { name: "Moradabad Road", note: "The stretch toward Moradabad, about thirty kilometres off, used by families whose work or school plans pull in that direction." },
    { name: "Bareilly Road", note: "The route east toward Bareilly, with newer residential colonies where evening study time depends heavily on that road's traffic." },
    { name: "Judge Compound", note: "A settled area near the district courts, largely CBSE and ICSE families who tend to ask directly and early about IB versus board schooling." },
    { name: "Shahabad", note: "One of the district's tehsil towns, where schooling runs almost entirely on the UP Board and an IGCSE enquiry usually means a boarding move is already being planned." },
    { name: "Milak", note: "Another tehsil town in the district, where an international-curriculum request nearly always traces back to a child already boarding away from home." },
    { name: "Bilaspur and Suar", note: "The remaining tehsils, well served by UP Board and CBSE schools, with no Cambridge or IB presence of any kind." },
  ],

  schoolDisclaimer:
    "Every school named on this page is mentioned only to show where a Rampur family's child actually studies or might study, never as a claim of partnership. IB Gram is not affiliated with, endorsed by or representing any of them, and the same is true of the International Baccalaureate, Cambridge Assessment International Education and Pearson Edexcel separately.",
  schoolClusters: [
    {
      city: "Rampur city and district",
      note: "Neither the city nor its Shahabad, Milak, Bilaspur or Suar tehsils have a school currently authorised for the IB or for Cambridge or Edexcel IGCSE. Local schooling runs on the UP Board and CBSE, with ICSE at a smaller number of schools, and any family here pursuing an international curriculum is doing so through a school located somewhere else entirely.",
      schools: [],
    },
    {
      city: "Nearby: Delhi NCR",
      note: "About three to four hours away by road, Delhi NCR has by far the biggest concentration of IB and IGCSE schools reachable from Rampur, and a number of the city's business and professional households either board a child there or shift part of the family for schooling reasons while keeping ties to Rampur.",
      schools: [],
    },
    {
      city: "Nearby: the Dehradun and Doon boarding belt",
      note: "Dehradun and the hill towns around it have drawn north Indian boarding families for generations, and some of the schools there now teach international curricula; we name none specifically without direct confirmation.",
      schools: [],
    },
    {
      city: "Nearby: Lucknow",
      note: "Modern School in Lucknow runs the IB Primary Years Programme in its junior classes before switching to ICSE, and GD Goenka Public School on Shaheed Path teaches Cambridge alongside CBSE. Both sit roughly five hours from Rampur and draw some boarding families from the district.",
      schools: ["Modern School, Lucknow", "GD Goenka Public School, Shaheed Path, Lucknow"],
    },
  ],

  modesIntro:
    "Whatever the arrangement, the underlying format connected to Rampur stays the same: a tutor and a student on a live video call, one to one, both keeping Indian time. What changes is the pace, a steady weekly rhythm through the term, a tighter push before an exam sitting, or a plan tied entirely to a boarding school's own holiday dates. Nobody arrives at a Rampur household's door to teach; that is a Gurugram and Delhi NCR arrangement only.",
  modes: [
    {
      title: "Weekly one-to-one video lessons",
      description:
        "A regular slot each week, screen shared between tutor and student, timed to fit around either a Rampur school day or a boarding term's calendar. Nearly every engagement connected to this city starts here.",
      bullets: [
        "Tutor choice never comes down to who happens to live closest",
        "Works equally for IB DP, MYP and both Cambridge and Edexcel IGCSE",
        "Past papers get marked live, on screen, lesson after lesson",
        "The same tutor stays on for the full term rather than rotating",
      ],
    },
    {
      title: "Term-long support with a written progress log",
      description:
        "The weekly rhythm continues, but each lesson is followed by a short note, and a proper review happens every few weeks so a family never has to guess how things are going.",
      bullets: [
        "A short written note follows every single lesson",
        "A full review every few weeks adjusts the plan as needed",
        "Suits younger PYP and MYP students kept on a steady pace",
        "A second weekly slot is easy to add once mocks approach",
      ],
    },
    {
      title: "Holiday and exam-block revision for boarding students",
      description:
        "A denser run of sessions lands during school breaks or in the weeks right before an exam series, built on timed past papers with quick feedback, and mapped against Rampur's own pattern of winter fog and long summer heat.",
      bullets: [
        "Past papers are timed and marked to the board's current standard",
        "Feedback comes back in days, never weeks",
        "Built around both boarding-school holidays and Rampur's own school dates",
        "Best booked two to three weeks before a boarding term ends",
      ],
    },
  ],

  sections: [
    {
      heading: "IB and IGCSE schools and families in Rampur",
      paragraphs: [
        "Search Rampur's school records and you will not find a single one authorised for the IB Diploma, Middle Years or Primary Years Programme, nor for Cambridge or Edexcel IGCSE, across the city or its four tehsils. UP Board carries most of the weight here, CBSE covers a fair share of the private schools, and ICSE sits at a handful more. That leaves the families who write to us in a fairly narrow set of situations.",
        "Most commonly it is a household weighing whether IGCSE would suit a younger child better than the board route in front of them, without a local school to visit and compare. Close behind are families whose son or daughter already boards at an international-curriculum school somewhere else, needing continuity during holidays or a tighter push before an exam series. A smaller group has relocated into Rampur mid-course, arriving from a city where the syllabus was already running.",
        "The nearest confirmed options sit well outside the district. Delhi NCR, three to four hours by road, carries by far the largest number of IB and Cambridge schools within realistic reach. Dehradun and the Doon hill belt have long pulled north Indian boarding families in, including some onto international curricula. Lucknow, about five hours away, has Modern School's IB Primary Years Programme for its youngest students and GD Goenka Public School on Shaheed Path running Cambridge alongside CBSE.",
        "That distance is exactly why matching by syllabus rather than location works so well here. A family near Civil Lines or one out toward Shahabad is not limited to whoever happens to be free nearby, since nobody qualified is nearby in the first place; instead, they reach a tutor from anywhere in the country who has actually taught that precise subject and level recently, and the exam papers themselves are identical no matter where the student sits them.",
      ],
      table: {
        caption: "Nearest confirmed IB and Cambridge options for Rampur families",
        columns: ["Location", "Distance from Rampur", "School", "Curriculum"],
        rows: [
          ["Delhi NCR", "Roughly 180 km, 3-4 hours by road", "Various", "IB and Cambridge / Edexcel IGCSE, largest pool within reach"],
          ["Dehradun and Doon belt", "Roughly 200 km", "Various boarding schools", "Includes some international-curriculum options"],
          ["Lucknow", "Roughly 320 km, about 5 hours", "Modern School", "IB Primary Years Programme, then ICSE"],
          ["Lucknow", "Roughly 320 km, about 5 hours", "GD Goenka Public School, Shaheed Path", "CBSE and Cambridge (CAIE)"],
        ],
      },
      bullets: [
        "No school in Rampur city or its four tehsils holds IB or Cambridge/Edexcel status",
        "Most families are either weighing a switch, supporting a boarder, or have just arrived from elsewhere",
        "Delhi NCR, Dehradun and Lucknow are the nearest confirmed clusters",
        "Exam papers and marking standards do not change based on where a student is based",
      ],
    },
    {
      heading: "How does IB or IGCSE actually differ from UP Board, CBSE and ICSE?",
      paragraphs: [
        "A UP Board or CBSE paper covers a fixed syllabus in a fairly predictable way, and a well-drilled student can often clear it on pattern recognition and recall alone. Cambridge and Edexcel work differently at Extended or Higher tier: a familiar topic gets dressed up in a context the student has not seen before, and rote learning alone stops being enough.",
        "The bigger difference sits in coursework. UP Board has almost none of it, CBSE and ICSE add modest project or practical marks, but neither comes close to an IB Internal Assessment or IGCSE coursework component, both marked against detailed published criteria rather than a single overall impression. A Class 9 or Class 11 student switching in from UP Board or CBSE has usually never planned an independent piece of assessed work before, and that planning skill is where the earliest sessions genuinely go.",
        "Subject depth stretches the gap wider again. HL Maths and the HL sciences reach further than anything UP Board or CBSE demands at the same age, IGCSE's Core tier lands roughly where CBSE sits in difficulty, and Extended clears a level above that. Whichever tier a student is placed on in Grade 9 quietly decides how steep Class 11 feels, regardless of which board comes next.",
        "None of this is an argument against making the move. Families who do switch a child from UP Board or CBSE toward Cambridge or the IB often end up preferring the steadier, criteria-based workload once they see it set against a single make-or-break annual paper.",
      ],
      table: {
        caption: "UP Board, CBSE, ICSE versus IB and IGCSE for a Rampur student",
        columns: ["Feature", "UP Board", "CBSE / ICSE", "IB / IGCSE"],
        rows: [
          ["Where it runs near Rampur", "Most district schools", "A smaller number of city schools", "No local school; only via a boarding move"],
          ["Assessment style", "Fixed paper, recall-heavy", "Fixed paper, some application", "Application and criteria-based throughout"],
          ["Coursework weight", "Minimal", "Modest project or practical marks", "20-30% in most IB subjects; coursework in IGCSE"],
          ["Recognition", "Uttar Pradesh and India", "India, some overseas equivalence", "Recognised worldwide"],
        ],
      },
      bullets: [
        "Extended or Higher-tier questions catch rote learning out far more than a UP Board or CBSE paper does",
        "Independent assessment planning is the real skill gap for a mid-school switch",
        "The Grade 9 tier decision quietly sets how steep Class 11 feels under any board",
        "Plenty of switching families end up preferring the steadier, criteria-based workload",
      ],
    },
    {
      heading: "What does IB or IGCSE tuition cost for a Rampur family?",
      paragraphs: [
        "A request for Cambridge IGCSE English support costs noticeably less than one for IB Maths AA HL, and the reason has nothing to do with how difficult either subject is to teach; it comes down to how many tutors nationally have taught that exact course recently. IGCSE Core work draws on a wide pool, while Diploma HL subjects draw on a much narrower one, and whatever your particular match costs gets settled before the trial class, not adjusted afterward.",
        "There is no travel line item anywhere in a Rampur fee, since no lesson here involves anyone driving in. A Chemistry HL specialist in Kochi and a Cambridge Maths tutor an hour outside Delhi end up costing a Rampur family exactly the same, which matters given how rarely either option exists anywhere near the city itself.",
        "The per-hour figure matters far less than what fills that hour. A tutor who has recently marked Cambridge 0625 alternative-to-practical scripts, or walked several students through an IB Maths AI exploration this year, gets through more useful work in one session than a generalist manages in two spent re-teaching content the boarding school already covered in class.",
        "There is no fixed-term contract on any of this. We check in with families every few weeks, a session can be paused or the whole arrangement stopped without a fee attached, and if a tutor turns out not to suit after the trial, the next step is simply finding someone who does, not asking a family to wait it out.",
      ],
      bullets: [
        "Rates track tutor scarcity, not subject difficulty; Diploma HL costs more than IGCSE Core",
        "No travel cost sits inside a Rampur fee, since no lesson involves a commute",
        "Your specific match's cost is confirmed before the trial class, not after",
        "No fixed-term contract; pausing or stopping carries no fee",
      ],
    },
    {
      heading: "Coaching centres, local tutors and self-study, weighed against online tuition in Rampur",
      paragraphs: [
        "Walk through Rampur's coaching lanes and what is on offer is almost entirely UP Board and CBSE preparation, plus batches aimed at government-service and other entrance exams, since that is where the demand genuinely sits. Nobody runs a group class for IB Chemistry HL or Cambridge Additional Mathematics, because the handful of students taking those subjects citywide would never fill a room.",
        "Plenty of home tutors work Civil Lines and Judge Compound for the ordinary board subjects, and a good one can genuinely help a nervous student find their footing. What none of them will have is recent hands-on marking experience with something like an IGCSE Physics 0625 alternative-to-practical script, simply because too few Rampur students sit that particular paper for anyone locally to build up that expertise.",
        "Left with a laptop and free rein, a determined student can get reasonably far on IGCSE Mathematics, where past papers sit online for anyone to practise against. Progress usually stalls elsewhere though, on shaping an Internal Assessment properly or writing the kind of extended answer that earns real marks, and neither improves much without an experienced person reading the draft and pushing back on it.",
        "Online tutoring mostly solves a supply problem: a district with no IB or IGCSE specialist at all suddenly has hundreds to choose from, without losing the precision a coaching batch cannot offer or the correction self-study cannot give on its own.",
      ],
      table: {
        caption: "Rampur routes to IB and IGCSE support, compared",
        columns: ["Route", "Fit to the exact syllabus", "How much attention", "Real gap in Rampur"],
        rows: [
          ["Coaching centres", "Poor; built for UP Board, CBSE or entrance exams", "Group, shared", "No batch exists for IB or Cambridge subjects"],
          ["Local home tutors", "Uneven", "One to one", "Almost nobody has taught the exact current syllabus"],
          ["Unsupervised self-study", "Whatever the student manages alone", "None", "IAs and extended writing go unchecked"],
          ["Matched online tutor", "Chosen for the exact code and level", "One to one", "Draws on the whole country, not a thin district pool"],
        ],
      },
      bullets: [
        "District coaching runs on UP Board, CBSE and entrance-exam demand, not IB or Cambridge",
        "A tutor who has taught the exact current syllabus is genuinely rare within the district",
        "Self-study usually leaves IAs and extended writing unchecked by an experienced reader",
        "Matching nationally is what actually fixes Rampur's thin local supply",
      ],
    },
    {
      heading: "How do fog and summer heat shape the Rampur exam calendar?",
      paragraphs: [
        "Late December through January brings genuinely dense fog to Rampur, thick enough that school opening times regularly shift later across this stretch of the Terai belt, and mornings can stay hard to plan around until well into the month. Summer swings the other way entirely, with April and May routinely crossing 40 degrees Celsius right as many local schools sit end-of-year internal exams ahead of the long break.",
        "Two exam windows matter for the boards connected to Rampur. Cambridge and Edexcel each hold a big sitting in May-June, when the bulk of Rampur-linked IGCSE candidates are entered, and a smaller one in October-November for whoever needs it. The IB works to a similar rhythm at Diploma level: May exams, results by early July, then a chance to retake in November if a subject did not go to plan. None of this lines up with a Rampur school calendar, since the student sitting these papers is almost never enrolled at one.",
        "A family thinking about an IGCSE switch should watch two things closely: the Grade 9 tier decision, which effectively happens the moment a school sets its scheme of work, and the first mock exam a student sits, which usually exposes gaps nobody had flagged yet. Six to eight weeks of properly focused work ahead of the real exam does more good than the same hours spread thinly across a whole year.",
        "A boarding student's actual working time is whatever holiday falls next, not the Rampur term calendar, so a plan needs to be built around Diwali, the winter break and the long summer stretch rather than squeezed into term weeks a school has already filled.",
      ],
      table: {
        caption: "Rampur's calendar effect on IB and IGCSE tutoring",
        columns: ["Period", "What happens", "Effect on tutoring"],
        rows: [
          ["Late December-January", "Dense fog, delayed school starts", "Shift sessions to a later morning slot where needed"],
          ["April-May", "Peak heat, school year-end exams", "Shorter, focused sessions; avoid over-scheduling"],
          ["May-June", "Cambridge/Edexcel IGCSE series, IB DP exams for boarders", "Final revision blocks and timed past papers"],
          ["October-November", "IGCSE second series, IB DP retakes", "A second push for students entered for this session"],
        ],
      },
      bullets: [
        "Dense winter fog regularly pushes school start times later through late December and January",
        "April-May heat coincides directly with year-end school exams",
        "Cambridge and Edexcel both run May-June and October-November series",
        "A boarding school's holidays, not a Rampur calendar, set the real tutoring windows",
      ],
    },
    {
      heading: "Which universities do Rampur students aim for after IB or IGCSE?",
      paragraphs: [
        "Students finishing IGCSE and moving into Class 11 and 12, or completing the IB Diploma while boarding elsewhere, tend to apply in a few directions at once from Rampur: engineering and management entrance inside India, medicine, or an undergraduate place abroad. Mohammad Ali Jauhar University, the first university established in the city, anchors higher education inside Rampur itself, and Aligarh Muslim University, around three hours away, has long drawn a steady share of students from the region.",
        "A student sitting the JEE or NEET off an IB or IGCSE record first needs their qualification checked against the right subject list and grade equivalence, a step families sometimes only discover late. It is common enough for a Rampur household to run entrance-exam coaching in parallel with syllabus tutoring, and Kota's coaching industry, close enough to reach from this part of Uttar Pradesh, absorbs a fair share of that demand.",
        "Anyone applying abroad should know that a predicted grade, not the final one, does most of the early work: it goes out with the application itself, months before an actual result exists. A UK course will typically want a points total alongside specific HL grades, an American one folds the same prediction into a much bigger file alongside essays and references, and each other country runs its own separate rulebook for translating an IB or IGCSE result.",
        "None of that admissions machinery is what a tutor here handles. The work stays on the subject itself, lifting a predicted grade through better technique and stronger content, while pointing a family toward what a specific course actually asks for so their time is not spent on the wrong thing.",
      ],
      bullets: [
        "Mohammad Ali Jauhar University anchors higher education inside Rampur itself",
        "Aligarh Muslim University, roughly three hours away, draws a steady number of local students",
        "AIU equivalence and correct subject levels matter for JEE and NEET eligibility",
        "Tutoring stays focused on subject depth and exam technique, not admissions consulting",
      ],
    },
    {
      heading: "Choosing between IB Maths routes, and what the sciences actually demand",
      paragraphs: [
        "A student aiming at engineering or a physical science tends to do better on Analysis and Approaches, where Paper 3 throws an unfamiliar multi-step problem at a student and expects them to work it out on the spot, a skill most UP Board or CBSE classrooms simply never drill on their own. Applications and Interpretation suits someone who thinks in data: statistics, modelling and a graphic calculator used almost instinctively, with its exploration usually suffering when a student starts it in the last week of a break rather than the first.",
        "Physics rewards a student who treats the data booklet as a tool to be used quickly rather than searched through nervously, and a Scientific Investigation stands or falls on whether its method could survive somebody actually trying to poke holes in it. Chemistry, once the early structure and bonding units are behind a student, turns almost entirely on organic mechanisms and energy calculations, and both subjects need marking against the real IB scheme rather than a generic notion of a good science answer.",
        "Biology students in this position typically know their content reasonably well already; what usually lets them down is answering a command word precisely, and building conclusions in an investigation that a statistically literate examiner would actually accept.",
        "None of these three subjects is taught anywhere close to Rampur, which is exactly why a specialist matched to the current syllabus and the right level, found anywhere in the country, closes the gap faster than a generalist filling time with whatever textbook happens to be on their shelf.",
      ],
      bullets: [
        "Analysis and Approaches suits proof-heavy routes; Applications and Interpretation suits data and modelling",
        "A Scientific Investigation's method matters as much as the result it produces",
        "Biology marks are usually lost on command words, not missing content",
        "No specialist for any of these three subjects sits anywhere near Rampur",
      ],
    },
    {
      heading: "Should a Rampur family choose IGCSE Core, Extended or the higher Edexcel tier?",
      paragraphs: [
        "Cambridge and Edexcel both cap different grade ranges across their tiers, and getting that Grade 9 choice right matters for one clear reason connected to Rampur: it decides how steep the HL sciences and maths later feel if a student moves on to an IB Diploma while boarding elsewhere. With no local school to guide the decision, it usually gets made jointly between the family and whichever boarding school the child is joining.",
        "Take Extended Mathematics along with Additional Mathematics if a school offers it, and a later jump into Maths AA HL feels far less like starting over. The same logic carries into the sciences: an Extended or Higher-tier student walks into DP Physics or Chemistry HL already familiar with roughly the depth the Diploma expects, rather than meeting it for the first time.",
        "Rampur's long history as a largely Urdu-speaking city means a fair number of families ask, once a child is heading toward an international curriculum, what happens to that language. Most IB schools keep Hindi and several other languages available at Language A or ab initio level next to English, though the exact list varies enough between boarding schools that it is worth checking directly rather than assuming.",
        "A family arriving from an Edexcel-affiliated school elsewhere should not assume Cambridge experience carries straight across; the underlying mathematics and science content lines up closely, but Edexcel's Foundation and Higher papers ask questions in a noticeably different style, and that difference is worth a tutor's early attention.",
      ],
      bullets: [
        "The Grade 9 tier choice affects both immediate grades and later DP readiness",
        "Additional Mathematics is the strongest bridge toward IB Maths AA HL",
        "Language A and ab initio choices are worth confirming directly with a boarding school",
        "Edexcel exam technique differs from Cambridge even where the content overlaps",
      ],
    },
    {
      heading: "How does IB Gram put together a match for a Rampur family?",
      paragraphs: [
        "We start with a short brief: the board or programme, subject and level, the student's current or predicted grade, their exam session, and what is actually driving the request, whether that is one stubborn topic, an Internal Assessment, upcoming mocks, or a full switch between boards. That brief shapes the shortlist far more than any tutor's profile photograph does.",
        "Syllabus fit comes before anything else in that shortlist, since a Rampur family is essentially never going to find the right specialist living nearby. Every tutor is checked on qualifications, on recent teaching experience with the exact subject and level in question, and on how they approach Internal Assessments, before ever being introduced to a family.",
        "The free trial class is where a family and student judge the rest: how clearly the tutor explains, whether their questions actually diagnose a gap, and whether the child feels able to ask for help without hesitation. A short first-month plan follows, covering topics and session rhythm, which the family either approves or sends back with changes.",
        "If the fit is wrong at any point, we find someone else rather than ask a child to adapt to a tutor who is not working. Nothing here runs on a contract long enough to make that a hard decision.",
      ],
      bullets: [
        "The opening brief covers programme, subject, level, exam session and the actual worry",
        "Syllabus fit is the first filter, since Rampur has no local specialist pool at all",
        "Every tutor is checked before introduction; the trial class always comes before any commitment",
        "A written first-month plan, with a straightforward re-match whenever the fit is wrong",
      ],
    },
  ],

  tutorsIntro:
    "Meet tutors teaching IB PYP, MYP and Diploma subjects alongside Cambridge and Edexcel IGCSE for Rampur families. Every match is weighed against the precise syllabus, level and exam session a student is actually sitting, since every lesson connected to this city runs live online rather than inside a home.",

  process: [
    { title: "Tell us what your child needs", description: "Which board or programme, the subject, the level, roughly where grades stand today, and a couple of slots that fit around your household in Rampur." },
    { title: "We put forward two or three names", description: "Each one chosen because they teach that specific syllabus right now, with a short note on why each name made the cut." },
    { title: "Your child tries one out, free", description: "A real lesson on a real topic, nothing charged, nothing to sign, purely so you can watch how the tutor actually teaches." },
    { title: "You get a plan for the month", description: "Topics, a rough rhythm for sessions and how you will hear about progress, written down before regular classes begin." },
    { title: "Term settles into its own rhythm", description: "A steady weekly slot with a check-in every few weeks, and a straight swap for a different tutor if something is not clicking." },
  ],

  whyPoints: [
    { title: "The syllabus decides the match, not a label", description: "A specific IB subject and level, or a Cambridge or Edexcel code and tier, is what shapes who gets shortlisted, never a broad heading." },
    { title: "Built for a place with nothing local", description: "Rampur has no IB or Cambridge school of its own, so the search for a tutor starts nationwide rather than in the district." },
    { title: "Watch first, decide after", description: "A trial lesson happens before any payment changes hands, so your judgement is based on something you actually saw." },
    { title: "A student's own work stays their own", description: "Guidance on an Internal Assessment, coursework or the Extended Essay never turns into a tutor drafting it for them." },
    { title: "You are told, not left wondering", description: "A quick note lands after each class, and a longer conversation happens every few weeks." },
    { title: "Easy to walk away from", description: "No tie to a school or exam board, nothing locked in for months, and a straightforward swap if a tutor is not the right one." },
  ],

  faqs: [
    { question: "How do I find an IB tutor for my child in Rampur?", answer: "Write to IB Gram with the programme, subject and level your child is working on, and what is actually going wrong at the moment. Because Rampur district has no IB-authorised school, we look nationwide rather than nearby, agree on a lesson time that fits your evenings, and let you watch a free trial class before anything is decided. If the first tutor is not quite right, we simply try another." },
    { question: "Can I get an IGCSE tutor in Rampur for either Cambridge or Edexcel?", answer: "Yes, both. A tutor is picked for the specific code and tier a student's school actually follows, Cambridge or Pearson Edexcel, and teaches everything live online rather than in person. Mathematics 0580 Extended and Chemistry 0620 come up often, and every session is built around that board's own past papers, not a generic worksheet." },
    { question: "Will a tutor come to our house in Rampur?", answer: "No, nobody visits your home in Rampur to teach. That kind of arrangement exists only in Gurugram and a few pockets of Delhi NCR. What a Rampur family gets instead is a live one-to-one class over video, with a shared screen standing in for a physical notebook, which is real tuition, just not delivered at your doorstep." },
    { question: "How much should I expect to pay for a tutor here?", answer: "It comes down to how scarce the subject is, not how hard it is to teach: IB Diploma HL subjects cost more than Cambridge or Edexcel IGCSE Core work simply because fewer tutors nationally have taught them recently. Your exact rate is agreed before the trial lesson starts, there is no travel charge added since everything runs online, and you can pause or stop whenever you like." },
    { question: "Does any school in Rampur city teach the IB or IGCSE?", answer: "Not currently. Neither the city nor the surrounding Shahabad, Milak, Bilaspur or Suar tehsils have a school authorised for the IB, Cambridge or Edexcel. UP Board and CBSE cover most of the district, with ICSE at a handful of schools, so a Rampur family after IB or IGCSE is almost always supporting a child enrolled somewhere else." },
    { question: "My son boards at an international school elsewhere. Can you help him catch up over the holidays?", answer: "This is one of the more common calls we get from Rampur. A tutor is matched to the exact subject and syllabus the boarding school teaches, and sessions are timed around school breaks, or around agreed evening slots during term if the school allows it. Nothing about it requires the tutor or the school to be anywhere near Rampur." },
    { question: "Do we get to try a class before paying anything?", answer: "Every family does. Your child sits a genuine lesson on a topic from their own syllabus, free of charge, and there is no expectation to continue afterward. A short plan for the following month arrives only once you decide the tutor is worth keeping." },
    { question: "Will a tutor write my child's Internal Assessment for them?", answer: "No. A tutor can help pick a workable research question, walk through what each grading criterion is actually looking for, and give straight feedback on a draft, but the finished piece has to be the student's own writing. Producing or rewriting it for them would break IB rules, and we do not do it." },
    { question: "Which Diploma subjects can a tutor cover for a Rampur student?", answer: "Most requests fall into a familiar set: Maths Analysis and Approaches or Applications and Interpretation, Physics, Chemistry, Biology, Economics, Business Management, English A, Computer Science, plus Theory of Knowledge and the Extended Essay, each matched at the right HL or SL level." },
    { question: "What about MYP or PYP students, not just Diploma?", answer: "We cover those too. A Rampur family with a younger child at an international school elsewhere gets help with MYP's criterion-based grading and the Personal Project, or with PYP reading, number work and the research skills an Exhibition needs, depending on the stage." },
    { question: "Does online teaching actually work as well as sitting with a tutor in person?", answer: "For a place like Rampur, where no in-person specialist exists for these subjects anyway, it works better in practice. A shared screen lets a tutor mark a paper live, replay a worked solution, or sketch a diagram exactly as they would sitting beside your child, and it opens the door to specialists anywhere in India rather than nobody nearby at all." },
    { question: "How do you check that a tutor is actually qualified?", answer: "Before anyone is introduced to a family, we look at their qualifications, whether they have taught that specific subject and level recently, and how they approach Internal Assessment guidance. Given how thin Rampur's local pool is, recent hands-on experience with the current syllabus matters more to us than a generic teaching background, and the trial lesson lets you confirm it yourself." },
    { question: "When is the right time to start tutoring?", answer: "Right at the start of the course works best, Class 11 for the Diploma or Grade 9 for IGCSE, since it leaves room to fix gaps before internal exams and predicted grades start piling up. A student starting later can still gain a lot, with sessions aimed squarely at the topics and past papers most likely to move the final grade." },
    { question: "My child is moving from UP Board or CBSE into IGCSE. Is that a hard switch?", answer: "It happens fairly often here. The content usually is not the problem, it is the style of question: words like 'explain', 'evaluate' and 'justify' expect a different kind of answer than a UP Board or CBSE paper does, and it helps to start working on that a term before the actual move." },
    { question: "Can we schedule around evenings and weekends?", answer: "Yes, that is how most Rampur families do it, weekday evenings once school ends plus weekend mornings. We build around the district's winter fog, when a later morning start usually suits better, and the summer heat, when earlier evenings tend to work best, and adding a second slot before an exam series is easy to arrange." },
    { question: "What if the tutor turns out to be a poor fit?", answer: "Say so, and we arrange someone else. We check in with families every few weeks specifically to catch this early, rather than waiting for a term to go badly, and nothing here runs on a contract that would make switching awkward." },
    { question: "Is IB Gram connected to any school, or to the IB, Cambridge or Edexcel themselves?", answer: "No, not to any of them. We run independently, we are not paid by or representing any school mentioned on this page, and tutors simply teach to whichever syllabus and calendar a student's own school has set." },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "A wider look at how families across the country approach IB and IGCSE support." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The one part of India where a tutor genuinely comes to your door." },
    { label: "IGCSE explained", href: "/igcse/", description: "A rundown of Cambridge and Edexcel tiers, subjects and when exams fall." },
    { label: "Inside the IB Diploma", href: "/programmes/dp/", description: "HL versus SL, the Extended Essay, TOK and how Diploma coursework is weighted." },
    { label: "Inside the IB Middle Years Programme", href: "/programmes/myp/", description: "The Personal Project, criterion grading and how MYP eAssessment is structured." },
    { label: "Inside the IB Primary Years Programme", href: "/programmes/pyp/", description: "How units of inquiry build toward a student-led Exhibition." },
    { label: "IB Maths explained", href: "/courses/ib/mathematics/", description: "Telling Analysis and Approaches apart from Applications and Interpretation before choosing." },
    { label: "Meet the tutors", href: "/tutors/", description: "Backgrounds and subject specialisms across the tutor roster." },
    { label: "Get in touch", href: "/contact-us/", description: "Send your child's brief and set up a trial lesson." },
    { label: "Tutoring in Moradabad", href: "/moradabad/", description: "The neighbouring UP city facing the same lack of a local IB or Cambridge school." },
    { label: "Tutoring in Lucknow", href: "/lucknow/", description: "The state capital, where an IB primary programme and a Cambridge school both exist." },
    { label: "Tutoring in Delhi", href: "/delhi/", description: "Where the region's deepest pool of IB and IGCSE schools actually sits." },
  ],

  closingHeading: "Start with a free trial lesson for your Rampur student",
  closingBody:
    "Tell us a little about your child: the board or programme, the subject giving trouble, roughly where their grades sit, and when your household is usually free. We come back with a tutor who genuinely teaches that syllabus, a sense of their background, and a trial slot that fits your week, all online, nothing charged and nothing to sign. Email ibgram24@gmail.com or message +91 7439 368 115 on WhatsApp.",
};
