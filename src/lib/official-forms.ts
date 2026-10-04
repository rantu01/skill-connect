// Official licence / skills-assessment form listings.
// Titles, authorities, descriptions and destinations match the reference
// website's Resources sections; the forms themselves live on the official
// regulator websites (each card opens the current official version).

export type OfficialForm = {
  title: string;
  authority: string;
  state: string;
  category: string;
  format: string;
  body: string;
  href: string;
  lastChecked: string;
};

export const LICENCE_FORMS: OfficialForm[] = [
  {
    title: "ABLIS licence and permit finder",
    authority: "Australian Government",
    state: "National",
    category: "Finder",
    format: "Finder tool",
    body: "Enter your trade, location and business type to get a personalised list of every licence, permit and registration form that applies to you, with links to each application.",
    href: "https://ablis.business.gov.au/",
    lastChecked: "7 September 2026",
  },
  {
    title: "Apply for a tradesperson certificate",
    authority: "NSW Fair Trading via Service NSW",
    state: "NSW",
    category: "Trade licence",
    format: "Online application",
    body: "Application for a NSW tradesperson certificate. Lists the qualification, experience and identity evidence you must attach, and lets you lodge online or download the paper form.",
    href: "https://www.service.nsw.gov.au/transaction/apply-for-a-tradesperson-certificate",
    lastChecked: "7 September 2026",
  },
  {
    title: "Building and Energy licensing forms",
    authority: "Building and Energy (WA)",
    state: "WA",
    category: "Building licence",
    format: "Online application",
    body: "Western Australian builder, painter, electrical and gas licence application forms, renewal notices and supporting evidence checklists.",
    href: "https://www.wa.gov.au/organisation/building-and-energy/building-and-energy",
    lastChecked: "7 September 2026",
  },
  {
    title: "Consumer and Business Services licence applications",
    authority: "Consumer and Business Services",
    state: "SA",
    category: "Building licence",
    format: "Online application",
    body: "South Australian building work contractor and supervisor licence applications, including the approved qualification list for each licence class.",
    href: "https://www.cbs.sa.gov.au/",
    lastChecked: "7 September 2026",
  },
  {
    title: "NSW Fair Trading licence categories and requirements",
    authority: "NSW Fair Trading",
    state: "NSW",
    category: "Trade licence",
    format: "Guide",
    body: "Reference guide to every NSW licence class, the qualifications accepted for each, and the contractor licence application pathway.",
    href: "https://www.nsw.gov.au/departments-and-agencies/fair-trading",
    lastChecked: "7 September 2026",
  },
  {
    title: "QBCC contractor and trade licence applications",
    authority: "Queensland Building and Construction Commission",
    state: "QLD",
    category: "Building licence",
    format: "Online application",
    body: "Queensland licence application forms for contractor, nominee supervisor and site supervisor classes, with the technical qualification and experience schedules.",
    href: "https://www.qbcc.qld.gov.au/",
    lastChecked: "7 September 2026",
  },
  {
    title: "Service NSW business licences directory",
    authority: "Service NSW",
    state: "NSW",
    category: "Finder",
    format: "Finder tool",
    body: "The NSW starting point for trade and contractor licence applications, renewals and the supporting evidence each licence class requires.",
    href: "https://www.service.nsw.gov.au/business/business-licences",
    lastChecked: "7 September 2026",
  },
  {
    title: "VBA registration and licensing applications",
    authority: "Victorian Building Authority",
    state: "VIC",
    category: "Building licence",
    format: "Online application",
    body: "Victorian builder registration and plumbing licensing applications, including the categories, fees and evidence packs required for each class.",
    href: "https://www.vba.vic.gov.au/",
    lastChecked: "7 September 2026",
  },
];

export const MIGRATION_FORMS: OfficialForm[] = [
  {
    title: "Migration Skills Assessment (MSA) application",
    authority: "Trades Recognition Australia",
    state: "National",
    category: "Migration",
    format: "Online application",
    body: "The MSA pathway for skilled migration visa applicants, with the document checklist, fees and lodgement steps for your nominated ANZSCO occupation.",
    href: "https://www.tradesrecognitionaustralia.gov.au/programs/migration-skills-assessment",
    lastChecked: "7 September 2026",
  },
  {
    title: "TRA skills assessment programs",
    authority: "Trades Recognition Australia",
    state: "National",
    category: "Migration",
    format: "Online application",
    body: "Choose the right TRA program for your occupation and visa, then open the application portal and the evidence guidelines for that program.",
    href: "https://www.tradesrecognitionaustralia.gov.au/skills-assessment",
    lastChecked: "7 September 2026",
  },
  {
    title: "VETASSESS skills assessment application",
    authority: "VETASSESS",
    state: "National",
    category: "Migration",
    format: "Online application",
    body: "Skills assessment applications for trade and professional occupations assessed by VETASSESS, including the online portal and occupation criteria.",
    href: "https://www.vetassess.com.au/",
    lastChecked: "7 September 2026",
  },
];

export const LICENCE_STATES = ["National", "NSW", "VIC", "QLD", "WA", "SA"] as const;
export const LICENCE_CATEGORIES = ["Finder", "Trade licence", "Building licence"] as const;
export const MIGRATION_STATES = ["National"] as const;
export const MIGRATION_CATEGORIES = ["Migration"] as const;

export type FormSort = "recent" | "title" | "state";

export const FORM_SORTS: { value: FormSort; label: string }[] = [
  { value: "recent", label: "Recently updated" },
  { value: "title", label: "Title A–Z" },
  { value: "state", label: "State / territory" },
];

export function sortForms<T extends OfficialForm>(forms: T[], sort: FormSort): T[] {
  const list = [...forms];
  if (sort === "title") list.sort((a, b) => a.title.localeCompare(b.title));
  else if (sort === "state") {
    list.sort(
      (a, b) => a.state.localeCompare(b.state) || a.title.localeCompare(b.title)
    );
  }
  return list;
}

export function formMatchesQuery(form: OfficialForm, query: string): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return `${form.title} ${form.authority} ${form.state} ${form.category} ${form.body}`
    .toLowerCase()
    .includes(q);
}
