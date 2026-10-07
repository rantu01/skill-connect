"use client";

import { useState, type CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight, FileCheck2, Landmark, Plane } from "lucide-react";
import { cn } from "@/lib/utils";

type PathwayId = "qualification" | "licence" | "migration";

const pathways: {
  id: PathwayId;
  icon: typeof FileCheck2;
  name: string;
  quote: string;
  body: string;
}[] = [
  {
    id: "qualification",
    icon: FileCheck2,
    name: "Pathway 1 — RPL Portfolio for Qualifications",
    quote: "I want to turn my experience into a qualification",
    body: "Your work history mapped to a nationally recognised qualification and prepared for independent RTO evaluation.",
  },
  {
    id: "licence",
    icon: Landmark,
    name: "Pathway 2 — Licensing & Registration",
    quote: "I want a contractor licence, certificate or registration",
    body: "The qualification a state licensing authority or accredited industry body requires before it will register you.",
  },
  {
    id: "migration",
    icon: Plane,
    name: "Pathway 3 — Migration Skills Assessment",
    quote: "I need a skills assessment for my Australian visa",
    body: "Duty mapping, references and evidence formatted for TRA, VETASSESS or ACWA skills assessment.",
  },
];

type Gate = "Licence" | "Registration" | "Assessment";

type Row = {
  role: string;
  qualification: string;
  body: string;
  outcome: string;
  category: Category;
  gate: Gate;
  pathways: PathwayId[];
  link?: string;
};

type Category =
  | "Building & Construction"
  | "Engineering & Manufacturing"
  | "Automotive"
  | "Electrotechnology & Plumbing"
  | "Furnishing & Cabinetmaking"
  | "Property Services"
  | "Hairdressing & Beauty"
  | "Hospitality & Commercial Cookery"
  | "Community & Health"
  | "Business & Finance"
  | "Training & Education";

const categories: Category[] = [
  "Building & Construction",
  "Automotive",
  "Engineering & Manufacturing",
  "Electrotechnology & Plumbing",
  "Furnishing & Cabinetmaking",
  "Property Services",
  "Hairdressing & Beauty",
  "Hospitality & Commercial Cookery",
  "Community & Health",
  "Business & Finance",
  "Training & Education",
];

const ALL: PathwayId[] = ["qualification", "licence", "migration"];
const QL: PathwayId[] = ["qualification", "licence"];
const QA: PathwayId[] = ["qualification", "migration"];

const rows: Row[] = [
  {
    role: "4+ yrs site carpenter",
    qualification: "CPC30220 Cert III in Carpentry",
    body: "State contractor licence (NSW Fair Trading / VBA / QBCC)",
    outcome: "Carpentry contractor licence, trade rates or visa assessment",
    category: "Building & Construction",
    gate: "Licence",
    pathways: ALL,
    link: "/carpentry",
  },
  {
    role: "3+ yrs unlicensed painter",
    qualification: "CPC30620 Cert III in Painting & Decorating",
    body: "NSW Fair Trading / VBA licence",
    outcome: "Painting contractor licence",
    category: "Building & Construction",
    gate: "Licence",
    pathways: ALL,
    link: "/painting-decorating",
  },
  {
    role: "Experienced bricklayer",
    qualification: "CPC33020 Cert III in Bricklaying & Blocklaying",
    body: "State contractor licence",
    outcome: "Licensed bricklaying contractor",
    category: "Building & Construction",
    gate: "Licence",
    pathways: ALL,
    link: "/bricklaying",
  },
  {
    role: "Wall & floor tiler",
    qualification: "CPC31320 Cert III in Wall & Floor Tiling",
    body: "State contractor licence",
    outcome: "Licensed tiling contractor",
    category: "Building & Construction",
    gate: "Licence",
    pathways: QL,
    link: "/wall-floor-tiling",
  },
  {
    role: "Concreter / formworker",
    qualification: "CPC30320 Cert III in Concreting",
    body: "State contractor licence (where required)",
    outcome: "Recognised concreting contractor",
    category: "Building & Construction",
    gate: "Licence",
    pathways: QL,
    link: "/concreting",
  },
  {
    role: "Roof plumber / roof tiler",
    qualification: "CPC32620 Cert III in Roof Tiling",
    body: "State contractor licence",
    outcome: "Licensed roofing contractor",
    category: "Building & Construction",
    gate: "Licence",
    pathways: QL,
    link: "/roofing",
  },
  {
    role: "Experienced waterproofing lead",
    qualification: "CPC31420 Cert III in Construction Waterproofing",
    body: "State waterproofing contractor licence",
    outcome: "Certified waterproofing contractor",
    category: "Building & Construction",
    gate: "Licence",
    pathways: QL,
    link: "/waterproofing",
  },
  {
    role: "Site leading hand / foreman",
    qualification: "CPC40120 Cert IV in Building & Construction",
    body: "State builder / supervisor registration",
    outcome: "Registered site supervisor or builder",
    category: "Building & Construction",
    gate: "Licence",
    pathways: QL,
    link: "/carpentry",
  },
  {
    role: "Builder running own projects",
    qualification: "CPC50220 Diploma of Building & Construction",
    body: "Open builder licence (state authority)",
    outcome: "Open builder licence holder",
    category: "Building & Construction",
    gate: "Licence",
    pathways: QL,
  },
  {
    role: "Shopfitter / joiner on site",
    qualification: "CPC31912 Cert III in Joinery",
    body: "State trade recognition",
    outcome: "Trade-recognised joiner",
    category: "Building & Construction",
    gate: "Registration",
    pathways: QA,
  },
  {
    role: "Heavy diesel mechanic (uncertified)",
    qualification: "AUR31120 Cert III in Heavy Commercial Vehicle Mechanical",
    body: "State Fair Trading / TRA (ANZSCO 321212)",
    outcome: "Trade status, tradesperson certificate or visa assessment",
    category: "Automotive",
    gate: "Licence",
    pathways: ALL,
    link: "/heavy-diesel-mechanic",
  },
  {
    role: "Mobile plant mechanic",
    qualification: "AUR31220 Cert III in Mobile Plant Technology",
    body: "State Fair Trading / TRA",
    outcome: "Recognised plant mechanic",
    category: "Automotive",
    gate: "Licence",
    pathways: ALL,
    link: "/heavy-diesel-mechanic",
  },
  {
    role: "Uncredentialed light vehicle mechanic",
    qualification: "AUR30620 Cert III in Light Vehicle Mechanical Technology",
    body: "Motor Vehicle Repairer Authority / TRA (ANZSCO 321211)",
    outcome: "Licensed auto repairer, trade rates or visa assessment",
    category: "Automotive",
    gate: "Licence",
    pathways: ALL,
    link: "/light-vehicle-mechanic",
  },
  {
    role: "Automotive electrician",
    qualification: "AUR30320 Cert III in Automotive Electrical Technology",
    body: "State repairer licence / TRA",
    outcome: "Recognised automotive electrician",
    category: "Automotive",
    gate: "Licence",
    pathways: ALL,
    link: "/light-vehicle-mechanic",
  },
  {
    role: "Panel beater / spray painter",
    qualification: "AUR32120 Cert III in Automotive Body Repair Technology",
    body: "State repairer licence",
    outcome: "Licensed body repairer",
    category: "Automotive",
    gate: "Licence",
    pathways: QL,
  },
  {
    role: "Senior diagnostician / master technician",
    qualification: "AUR40216 Cert IV in Automotive Mechanical Diagnosis",
    body: "Post-trade RPL / TRA (ANZSCO 321211)",
    outcome: "Senior technician, foreman roles or visa assessment",
    category: "Automotive",
    gate: "Registration",
    pathways: ALL,
    link: "/mechanical-diagnosis",
  },
  {
    role: "Boilermaker / welder",
    qualification: "MEM30319 Cert III in Engineering (Fabrication Trade)",
    body: "Trades Recognition Australia (TRA)",
    outcome: "Recognised boilermaker on mining rates",
    category: "Engineering & Manufacturing",
    gate: "Assessment",
    pathways: QA,
  },
  {
    role: "Fitter & machinist",
    qualification: "MEM30219 Cert III in Engineering (Mechanical Trade)",
    body: "TRA / workplace registration",
    outcome: "Maintenance fitter at senior industrial status",
    category: "Engineering & Manufacturing",
    gate: "Assessment",
    pathways: QA,
  },
  {
    role: "Production leading hand",
    qualification: "MEM40119 Cert IV in Engineering",
    body: "Industry recognition",
    outcome: "Engineering supervisor",
    category: "Engineering & Manufacturing",
    gate: "Registration",
    pathways: ["qualification"],
  },
  {
    role: "Air-conditioning technician",
    qualification: "UEE32220 Cert III in Air-conditioning & Refrigeration",
    body: "State electrical licence + ARC licence",
    outcome: "Licensed refrigeration mechanic",
    category: "Electrotechnology & Plumbing",
    gate: "Licence",
    pathways: ALL,
  },
  {
    role: "Experienced plumber (overseas trained)",
    qualification: "CPC32420 Cert III in Plumbing",
    body: "State plumbing regulator (offshore assessment required)",
    outcome: "Pathway toward plumbing registration",
    category: "Electrotechnology & Plumbing",
    gate: "Licence",
    pathways: ALL,
  },
  {
    role: "Electrical worker (overseas trained)",
    qualification: "UEE30820 Cert III in Electrotechnology Electrician",
    body: "Offshore Technical Skills Record + state licence",
    outcome: "Pathway toward electrical licensing",
    category: "Electrotechnology & Plumbing",
    gate: "Licence",
    pathways: ALL,
  },
  {
    role: "Experienced cabinetmaker / joiner",
    qualification: "MSF30322 Cert III in Cabinet Making & Timber Technology",
    body: "State trade contractor recognition",
    outcome: "Recognised cabinetmaker running a kitchen business",
    category: "Furnishing & Cabinetmaking",
    gate: "Registration",
    pathways: ALL,
  },
  {
    role: "Glazier / glass installer",
    qualification: "MSF30413 Cert III in Glass and Glazing",
    body: "State licensing / glazing registration",
    outcome: "Trade-recognised glazier or production lead",
    category: "Furnishing & Cabinetmaking",
    gate: "Licence",
    pathways: QL,
  },
  {
    role: "Assistant real estate agent",
    qualification: "CPP41419 Cert IV in Real Estate Practice",
    body: "State Fair Trading (Class 1 / Class 2 licence)",
    outcome: "Licensed real estate agent / licensee in charge",
    category: "Property Services",
    gate: "Licence",
    pathways: QL,
  },
  {
    role: "Agency principal / licensed property manager",
    qualification: "CPP51122 Diploma of Property (Agency Management)",
    body: "State Fair Trading (licence in charge / agency management)",
    outcome: "Licensed agency manager or licensee in charge",
    category: "Property Services",
    gate: "Licence",
    pathways: QL,
  },
  {
    role: "Senior salon stylist (unqualified)",
    qualification: "SHB30416 Cert III in Hairdressing",
    body: "Industry bodies (e.g. HABA, ABIC)",
    outcome: "Trade-qualified senior stylist or salon owner",
    category: "Hairdressing & Beauty",
    gate: "Registration",
    pathways: ALL,
  },
  {
    role: "Barber with shop experience",
    qualification: "SHB30516 Cert III in Barbering",
    body: "State requirements / industry associations",
    outcome: "Qualified barber running a barber shop",
    category: "Hairdressing & Beauty",
    gate: "Registration",
    pathways: QL,
  },
  {
    role: "Beauty therapist",
    qualification: "SHB50115 Diploma of Beauty Therapy",
    body: "Professional association registration",
    outcome: "Senior therapist / spa business owner",
    category: "Hairdressing & Beauty",
    gate: "Registration",
    pathways: QL,
  },
  {
    role: "Cook with years of kitchen experience",
    qualification: "SIT30821 Cert III in Commercial Cookery",
    body: "TRA / VETASSESS skills assessment",
    outcome: "Trade-qualified cook or migration assessment",
    category: "Hospitality & Commercial Cookery",
    gate: "Assessment",
    pathways: ALL,
  },
  {
    role: "Asian cookery specialist",
    qualification: "SIT31121 Cert III in Asian Cookery",
    body: "VETASSESS migration assessment",
    outcome: "Recognised Asian cook / skilled visa pathway",
    category: "Hospitality & Commercial Cookery",
    gate: "Assessment",
    pathways: QA,
  },
  {
    role: "Chef de partie / kitchen lead",
    qualification: "SIT40521 Cert IV in Kitchen Management",
    body: "VETASSESS / industry recognition",
    outcome: "Executive chef or hospitality venue manager",
    category: "Hospitality & Commercial Cookery",
    gate: "Assessment",
    pathways: QA,
  },
  {
    role: "Baker / pastry cook",
    qualification: "FBP30521 Cert III in Baking",
    body: "TRA / industry recognition",
    outcome: "Trade-qualified baker",
    category: "Hospitality & Commercial Cookery",
    gate: "Assessment",
    pathways: QA,
  },
  {
    role: "Aged care assistant",
    qualification: "CHC33021 Cert III in Individual Support",
    body: "NDIS / Aged Care provider standards",
    outcome: "Aged care senior or visa assessment evidence",
    category: "Community & Health",
    gate: "Registration",
    pathways: ALL,
  },
  {
    role: "Disability support worker",
    qualification: "CHC43121 Cert IV in Disability Support",
    body: "NDIS worker screening / ACWA",
    outcome: "Disability team leader",
    category: "Community & Health",
    gate: "Registration",
    pathways: QL,
  },
  {
    role: "Support worker / community lead",
    qualification: "CHC52021 Diploma of Community Services",
    body: "ACWA migration assessment",
    outcome: "Community case manager (ANZSCO 272613)",
    category: "Community & Health",
    gate: "Assessment",
    pathways: ALL,
  },
  {
    role: "Childcare assistant",
    qualification: "CHC50121 Diploma of Early Childhood Education",
    body: "ACECQA approval / VETASSESS assessment",
    outcome: "Lead educator / skilled visa pathway",
    category: "Community & Health",
    gate: "Registration",
    pathways: ALL,
  },
  {
    role: "Practising counsellor (unregistered)",
    qualification: "CHC51015 Diploma of Counselling",
    body: "ACA / PACFA registration",
    outcome: "Registered practising counsellor",
    category: "Community & Health",
    gate: "Registration",
    pathways: QL,
  },
  {
    role: "Massage therapist",
    qualification: "HLT52021 Diploma of Remedial Massage",
    body: "Massage & Myotherapy Australia / AMT",
    outcome: "Registered remedial massage therapist",
    category: "Community & Health",
    gate: "Registration",
    pathways: QL,
  },
  {
    role: "Health services assistant / ward assistant",
    qualification: "HLT33115 Certificate III in Health Services Assistance",
    body: "Hospital / aged care provider standards",
    outcome: "Allied health or hospital support role",
    category: "Community & Health",
    gate: "Registration",
    pathways: QL,
  },
  {
    role: "Allied health assistant",
    qualification: "HLT43021 Certificate IV in Allied Health Assistance",
    body: "Allied health professional association / provider standards",
    outcome: "Qualified allied health assistant",
    category: "Community & Health",
    gate: "Registration",
    pathways: QL,
  },
  {
    role: "Occupational therapy assistant",
    qualification: "HLT43021 Certificate IV in Allied Health Assistance (Occupational Therapy)",
    body: "Occupational Therapy Australia / provider standards",
    outcome: "OT assistant in disability, paediatrics or aged care",
    category: "Community & Health",
    gate: "Registration",
    pathways: QL,
  },
  {
    role: "Experienced team leader",
    qualification: "BSB40120 Cert IV in Business",
    body: "Industry management recognition",
    outcome: "Operations manager promotion",
    category: "Business & Finance",
    gate: "Registration",
    pathways: ["qualification"],
  },
  {
    role: "Uncredentialed bookkeeper",
    qualification: "FNS40222 Cert IV in Accounting & Bookkeeping",
    body: "Tax Practitioners Board registration",
    outcome: "Registered bookkeeper / BAS agent pathway",
    category: "Business & Finance",
    gate: "Registration",
    pathways: QL,
  },
  {
    role: "Safety officer / advisor",
    qualification: "BSB41419 Cert IV in Work Health and Safety",
    body: "Industry WHS recognition",
    outcome: "WHS manager",
    category: "Business & Finance",
    gate: "Registration",
    pathways: ["qualification"],
  },
  {
    role: "HR coordinator",
    qualification: "BSB40420 Cert IV in Human Resources Management",
    body: "Professional body registration",
    outcome: "HR manager",
    category: "Business & Finance",
    gate: "Registration",
    pathways: ["qualification"],
  },
  {
    role: "Experienced trainer / assessor",
    qualification: "TAE40122 Cert IV in Training & Assessment",
    body: "Registered training provider standards",
    outcome: "Qualified RTO trainer and assessor",
    category: "Training & Education",
    gate: "Registration",
    pathways: QL,
  },
];

const gateStyles: Record<Gate, string> = {
  Licence: "border-accent/40 bg-accent/10 text-accent",
  Registration: "border-border bg-secondary text-muted-foreground",
  Assessment: "border-primary/25 bg-primary/10 text-primary",
};

const gateLabel: Record<Gate, string> = {
  Licence: "Subject to state licensing",
  Registration: "Registration with an accredited body",
  Assessment: "Skills assessment pathway",
};

export function IndustryMatrix() {
  const [pathway, setPathway] = useState<PathwayId | null>(null);
  const [sector, setSector] = useState<Category | null>(null);

  const pathwayRows = pathway ? rows.filter((r) => r.pathways.includes(pathway)) : [];
  const availableSectors = categories.filter((c) => pathwayRows.some((r) => r.category === c));
  const visible = sector ? pathwayRows.filter((r) => r.category === sector) : [];
  const activePathway = pathways.find((p) => p.id === pathway);

  return (
    <section id="industries" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-eyebrow reveal" data-reveal>Browse by pathway</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl reveal" data-reveal style={{ "--reveal-delay": "60ms" } as CSSProperties}>
          Find your qualification in three steps
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground reveal" data-reveal style={{ "--reveal-delay": "120ms" } as CSSProperties}>
          Start with the outcome you want, choose your industry, and see the qualifications your
          experience can be mapped toward — plus who makes the final decision.
        </p>

        <p className="mt-10 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Step 1 — What do you want to achieve?
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {pathways.map(({ id, icon: Icon, name, quote, body }, i) => {
            const active = pathway === id;
            return (
              <button
                key={id}
                type="button"
                data-reveal
                style={{ "--reveal-delay": `${i * 90}ms` } as CSSProperties}
                onClick={() => {
                  setPathway(id);
                  setSector(null);
                }}
                className={cn(
                  "group reveal flex flex-col rounded-xl border bg-card p-5 text-left shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
                  active ? "border-accent ring-1 ring-accent" : "border-border hover:border-accent",
                )}
              >
                <span className="icon-pop inline-flex size-10 items-center justify-center rounded-lg bg-accent-gradient text-accent-foreground transition-transform duration-300 group-hover:scale-110">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold">{name}</h3>
                <p className="mt-1 text-sm font-medium text-accent">"{quote}"</p>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{body}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground group-hover:text-accent">
                  {active ? "Selected" : "Choose this pathway"}
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            );
          })}
        </div>

        {pathway && (
          <>
            <p className="mt-10 text-sm font-semibold uppercase tracking-wide text-muted-foreground animate-card-in">
              Step 2 — Choose your industry
            </p>
            <div className="mt-4 flex flex-wrap gap-2 animate-card-in" style={{ "--card-delay": "80ms" } as CSSProperties}>
              {availableSectors.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setSector(c)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                    sector === c
                      ? "border-transparent bg-primary text-primary-foreground"
                      : "border-border bg-card text-muted-foreground hover:border-accent hover:text-foreground",
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </>
        )}

        {pathway && sector && (
          <>
            <p className="mt-10 text-sm font-semibold uppercase tracking-wide text-muted-foreground animate-card-in">
              Step 3 — {sector} qualifications for "{activePathway?.quote}"
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {visible.map((r, i) => (
                <article
                  key={r.role + r.qualification}
                  style={{ "--card-delay": `${Math.min(i * 70, 350)}ms` } as CSSProperties}
                  className="animate-card-in flex flex-col rounded-xl border border-border bg-card p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-accent/60"
                >
                  <span
                    className={cn(
                      "self-start rounded-full border px-3 py-1 text-xs font-semibold",
                      gateStyles[r.gate],
                    )}
                  >
                    {gateLabel[r.gate]}
                  </span>
                  <h3 className="mt-3 text-base font-semibold">{r.qualification}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">For: {r.role}</p>
                  <dl className="mt-4 space-y-2 text-sm">
                    <div>
                      <dt className="font-medium">Decision made by</dt>
                      <dd className="text-muted-foreground">{r.body}</dd>
                    </div>
                    <div>
                      <dt className="font-medium">Outcome</dt>
                      <dd className="text-muted-foreground">{r.outcome}</dd>
                    </div>
                  </dl>
                  {r.link && (
                     <Link
                       href={r.link}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
                    >
                      Open the trade page
                      <ArrowRight className="size-4" />
                    </Link>
                  )}
                </article>
              ))}
            </div>
          </>
        )}

        {pathway && !sector && (
          <p className="mt-6 text-sm text-muted-foreground">
            Pick an industry above to see the matching qualifications.
          </p>
        )}
        {!pathway && (
          <p className="mt-6 text-sm text-muted-foreground">
            Choose a pathway above to start.
          </p>
        )}

        <p className="mt-8 text-xs text-muted-foreground">
          All qualifications listed are assessed and issued by accredited independent RTOs. Licensing
          and registration decisions are made by the relevant state authority or industry body.
        </p>
      </div>
    </section>
  );
}