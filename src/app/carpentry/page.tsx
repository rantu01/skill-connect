import TradePage from "../trade-page";

type TradeContent = {
  slug: string;
  audience: string;
  h1: string;
  heroIntro: string;
  heroSteps: string[];
  qualifications: { code: string; name: string; note: string }[];
  evidenceItems: string[];
  outcomeTabs: {
    id: string;
    label: string;
    icon: string;
    heading: string;
    intro: string;
    points: { title: string; body: string }[];
    cta: string;
  }[];
  costOfInaction: { icon: string; staying: string; certified: string }[];
  quizHeading: string;
  quizQuestions: { question: string; options: { label: string; score: number }[] }[];
  faqHeading: string;
  faqs: { q: string; a: string }[];
};

const carpentryData: TradeContent = {
  slug: "carpentry",
  audience: "Carpentry",
  h1: "RPL for Carpentry: Turn your site experience into a recognised qualification",
  heroIntro: "If you have years of hands-on carpentry experience, we can help you map your skills against the CPC30220 Cert III in Carpentry and prepare the evidence portfolio an independent RTO needs.",
  heroSteps: ["Your experience", "Evidence portfolio", "RTO assessment", "Trade qualification"],
  qualifications: [
    { code: "CPC30220", name: "Cert III in Carpentry", note: "Core trade qualification for carpenters" },
    { code: "CPC40120", name: "Cert IV in Building & Construction", note: "For site supervisors and leading hands" },
  ],
  evidenceItems: ["Site photos of your work", "Job logs and work orders", "Tax records and payslips", "Employer references", "Certificates of any prior training"],
  outcomeTabs: [
    {
      id: "qualification",
      label: "Qualification",
      icon: "FileCheck2",
      heading: "Get your Cert III in Carpentry",
      intro: "An RTO assesses your evidence and issues credit for units you already satisfy. You may need to complete only a few remaining units.",
      points: [
        { title: "Credit for what you know", body: "Units covered by your experience are granted as credit." },
        { title: "Fast-track completion", body: "Most carpentry RPL pathways finish in 6–12 months." },
      ],
      cta: "Start your RPL application",
    },
    {
      id: "licence",
      label: "Licence",
      icon: "HardHat",
      heading: "Become a licensed carpenter",
      intro: "A state contractor licence lets you quote and run your own carpentry business.",
      points: [
        { title: "State licence requirements", body: "Each state has its own licensing criteria we help you meet." },
        { title: "Insurance and compliance", body: "We guide you through the paperwork for registered contractor status." },
      ],
      cta: "Book a licensing consult",
    },
    {
      id: "migration",
      label: "Migration",
      icon: "Globe2",
      heading: "Skills assessment for carpentry",
      intro: "TRA assesses carpentry occupations for skilled visa applications.",
      points: [
        { title: "ANZSCO mapping", body: "Your experience is mapped to ANZSCO 340212 (Carpenter)." },
        { title: "Evidence package", body: "We prepare the documents TRA requires for a positive assessment." },
      ],
      cta: "Start migration assessment",
    },
  ],
  costOfInaction: [
    { icon: "TrendingUp", staying: "Stuck at sub-contractor rates", certified: "Access to higher-paying licensed roles" },
    { icon: "Briefcase", staying: "Cannot quote independently", certified: "Run your own carpentry business" },
    { icon: "Award", staying: "No formal qualification on record", certified: "Nationally recognised Cert III" },
  ],
  quizHeading: "Check your carpentry RPL eligibility",
  quizQuestions: [
    { question: "How many years of carpentry experience do you have?", options: [{ label: "Less than 2 years", score: 1 }, { label: "2–5 years", score: 3 }, { label: "5+ years", score: 5 }] },
    { question: "Do you have site photos or work samples?", options: [{ label: "No", score: 1 }, { label: "Some", score: 3 }, { label: "Extensive portfolio", score: 5 }] },
    { question: "Do you have tax records or payslips?", options: [{ label: "No", score: 1 }, { label: "Some", score: 3 }, { label: "Complete records", score: 5 }] },
    { question: "Do you have employer references?", options: [{ label: "No", score: 1 }, { label: "1–2 references", score: 3 }, { label: "3+ references", score: 5 }] },
    { question: "Have you completed any formal carpentry training?", options: [{ label: "No", score: 1 }, { label: "Some units", score: 3 }, { label: "Full qualification", score: 5 }] },
  ],
  faqHeading: "Carpentry RPL frequently asked questions",
  faqs: [
    { q: "How long does carpentry RPL take?", a: "Most carpentry RPL pathways take 6–12 months from evidence collection to RTO outcome." },
    { q: "What evidence do I need?", a: "Site photos, job logs, tax records, employer references and any prior training certificates." },
    { q: "Can I do RPL if I have no formal training?", a: "Yes. RPL is designed for experienced workers without formal qualifications." },
    { q: "Will I need to study anything?", a: "You may need to complete a small number of remaining units, but RPL minimises classroom time." },
  ],
};

export default function CarpentryPage() {
  return <TradePage data={carpentryData} />;
}