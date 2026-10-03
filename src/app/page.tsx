import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { IndustryMatrix } from "@/components/home/IndustryMatrix";
import { Testimonials } from "@/components/home/Testimonials";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyQuizBar } from "@/components/StickyQuizBar";
import { BOOKING_HREF, BOOKING_LABEL, QUIZ_LABEL } from "@/lib/contact";
import heroImage from "@/assets/hero-tradesperson.jpg";

export const metadata = {
  title: "Skills Connect | RPL Evidence, Trade Licensing & Migration Guidance",
  description:
    "Turn workplace experience into recognised qualifications, trade licences and visa outcomes. Independent RPL evidence preparation for tradespeople and skilled migrants in Australia.",
};

const careerGoals = [
  {
    step: "01 / Portfolio",
    title: "RPL Portfolio Preparation",
    body: "We audit your work history and structure site photos, logs, contracts and references into a decision-ready RPL evidence portfolio.",
    cta: "Explore RPL portfolio preparation",
    to: "/resources",
  },
  {
    step: "02 / Licensing",
    title: "Licensing Service",
    body: "Step-by-step guidance on state and territory contractor licensing requirements, application criteria and the supporting documents each authority expects.",
    cta: "Explore licensing service",
    to: "/services",
  },
  {
    step: "03 / Assessment",
    title: "Skills Assessment",
    body: "Preparation support for occupational skills assessments — ANZSCO task mapping, reference letters and employment evidence for bodies such as TRA, VETASSESS and ACWA.",
    cta: "Explore skills assessment",
    to: "/services",
  },
] as const;

const recognitionPoints = [
  "Review your experience",
  "Understand evidence requirements",
  "Identify potential skill gaps",
  "Identify potential pathways",
  "Explore licensing requirements",
  "Plan your next move",
];

const impact = [
  {
    icon: "FileCheck2",
    title: "RPL Portfolio Preparation",
    body: "Convert years of undocumented, real-world experience into a structured evidence portfolio an independent RTO can assess — without classroom retraining.",
  },
  {
    icon: "HardHat",
    title: "Licensing Service",
    body: "Move from sub-contractor to licensed principal contractor with the qualification and paperwork your state licensing authority requires.",
  },
  {
    icon: "Globe2",
    title: "Skills Assessment",
    body: "Employment evidence mapped to ANZSCO standards for TRA, VETASSESS or ACWA occupational skills assessments.",
  },
];

const pillars = [
  {
    icon: "FileCheck2",
    name: "RPL Portfolio Preparation",
    goal: "Turn years of informal workplace history into formal qualification credits.",
    role: "We audit, gather and format your site photos, safety logs, contracts and references into a structured RPL portfolio ready for evaluation.",
    boundary:
      "Skills Connect is an independent evidence preparation consultancy, not an RTO. Formal RPL assessment and qualification issuance are conducted strictly by accredited independent RTOs.",
  },
  {
    icon: "HardHat",
    name: "Licensing Service",
    goal: "Become a fully licensed trade contractor (Fair Trading, VBA, QBCC) or registered supervisor.",
    role: "State boards require a prerequisite trade qualification. We help build the evidence portfolio to gain it through an independent RTO, then guide your state contractor licence paperwork.",
    boundary:
      "Trade licences are granted solely by the relevant state government licensing authorities.",
  },
  {
    icon: "BadgeCheck",
    name: "Skills Assessment",
    goal: "Secure positive occupational skills assessments for Australian visas.",
    role: "ANZSCO task mapping, employment reference formatting and tax record structuring for assessing bodies such as TRA, VETASSESS and ACWA.",
    boundary:
      "Skills Connect is not a migration agency or assessing body and does not issue visa approvals or legal advice.",
  },
];

const steps = [
  { n: "01", title: "Free skills audit", body: "Evaluate your experience and tax proof against qualification units." },
  { n: "02", title: "Portfolio prep", body: "Collect and structure site photos, logs and references." },
  { n: "03", title: "RTO assessment", body: "An independent RTO evaluates the portfolio and issues the qualification." },
  { n: "04", title: "Career outcome", body: "Apply for a state licence, a salary uplift or your visa pathway." },
];

const tools = [
  {
    icon: "ClipboardList",
    title: "RPL Readiness Quiz",
    body: "A 2-minute check on experience years, tax and pay records and on-site photo availability, giving you an instant Portfolio Readiness Score for a qualification.",
    cta: "Start the RPL quiz",
    href: "/skills-check",
  },
  {
    icon: "PlaneTakeoff",
    title: "Skills Assessment for Visa Readiness Quiz",
    body: "The same 2-minute check read against migration requirements: ANZSCO occupation match, employment reference quality and document coverage for TRA or VETASSESS.",
    cta: "Check visa readiness",
    href: "/skills-check",
  },
  {
    icon: "FileCheck2",
    title: "Trade-specific RPL evidence checklists",
    body: "Downloadable guides such as the Carpentry Evidence Vault Checklist and the Community Services Duty-Mapping Guide.",
    cta: "Get a checklist",
    href: "/resources#rpl-evidence-guides",
  },
  {
    icon: "Globe2",
    title: "Skills assessment Document checklist",
    body: "Reference letter structures, bank statement proofing and ANZSCO task mapping criteria for TRA and VETASSESS.",
    cta: "Download the guide",
    href: "/resources#migration-forms",
  },
];

const iconMap: Record<string, string> = {
  FileCheck2: "file-check-2",
  HardHat: "hard-hat",
  Globe2: "globe-2",
  ClipboardList: "clipboard-list",
  PlaneTakeoff: "plane-takeoff",
  BadgeCheck: "badge-check",
};

function IconComponent({ name }: { name: string }) {
  return (
    <span className="inline-flex size-5 items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {name === "file-check-2" && (
          <>
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><path d="m9 15 2 2 4-4" />
          </>
        )}
        {name === "hard-hat" && (
          <>
            <path d="M12 22c4.97 0 9-2.24 9-5V8l-9-5-9 5v9c0 2.76 4.03 5 9 5z" /><path d="M10 12h4" />
          </>
        )}
        {name === "globe-2" && (
          <>
            <circle cx="12" cy="12" r="10" /><line x1="2" x2="22" y1="12" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </>
        )}
        {name === "clipboard-list" && (
          <>
            <rect width="8" height="4" x="8" y="2" rx="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="M9 12h2" /><path d="M9 16h2" /><path d="M15 12h2" /><path d="M15 16h2" />
          </>
        )}
        {name === "plane-takeoff" && (
          <>
            <path d="M8.5 2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7.5L14.5 2H8.5z" /><polyline points="2 12 15 12" /><path d="m7 16 4-4 4 4" /><path d="m11 12 4-4" />
          </>
        )}
        {name === "badge-check" && (
          <>
            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /><path d="m9 12 2 2 4-4" />
          </>
        )}
      </svg>
    </span>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative overflow-hidden bg-hero-gradient text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase">
              Recognition of Prior Learning specialists
            </span>
            <h1 className="mt-6 text-4xl leading-[1.05] font-bold sm:text-5xl lg:text-6xl">
              Turn your workplace experience into recognised qualifications, trade licences and
              skills assessment outcome
            </h1>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/80">
              Don't waste time studying what you already know. We help experienced workers,
              tradespeople and skilled migrants audit and structure workplace evidence into
              decision-ready portfolios for independent RTO evaluation, state licensing and
              migration skills assessments.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="hero" size="xl" asChild>
                <Link href="/skills-check">
                  Take the 2-minute eligibility quiz
                  <ArrowRight />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href={BOOKING_HREF} target="_blank" rel="noreferrer">{BOOKING_LABEL}</a>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-primary-foreground/70">
              {["Your experience", "RPL evidence portfolio", "RTO qualification", "Licence", "Skills Assessment Outcome"].map(
                (label, i) => (
                  <span key={label} className="flex items-center gap-3">
                    {i > 0 && <ArrowRight className="size-4 text-accent" />}
                    <span>{label}</span>
                  </span>
                ),
              )}
            </div>
          </div>
          <div className="relative">
            <div className="h-[300px] overflow-hidden rounded-2xl border border-primary-foreground/15 shadow-card sm:h-[360px] lg:h-[440px]">
              <img
                src="/assets/Hero.png"
                width={200}
                height={200}
                alt="Licensed Australian tradesperson reviewing an evidence portfolio on a construction site"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 rounded-xl bg-card px-5 py-4 text-card-foreground shadow-card">
              <p className="font-display text-2xl font-bold">25–60%</p>
              <p className="text-xs text-muted-foreground">
                typical rate uplift after licensing
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="section-eyebrow">Our three core services</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            RPL Portfolio Preparation, Licensing Service and Skills Assessment
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {impact.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-xl border border-border bg-card p-6 shadow-card">
                <span className="inline-flex size-10 items-center justify-center rounded-lg bg-accent-gradient text-accent-foreground">
                  <IconComponent name={iconMap[Icon] ?? Icon} />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="section-eyebrow">What we do</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Guidance built around your career goals
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            We help you understand your career options, assess your readiness and navigate the
            requirements that may apply to your chosen pathway.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {careerGoals.map((item) => (
              <article
                key={item.title}
                className="flex flex-col rounded-xl border border-border bg-card p-7 shadow-card"
              >
                <span className="section-eyebrow">{item.step}</span>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">{item.body}</p>
                <Link
                  href={item.to}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
                >
                  {item.cta}
                  <ArrowRight className="size-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="section-eyebrow">Core service pillars</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            How RPL integrates with every service
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {pillars.map(({ icon: Icon, name, goal, role, boundary }) => (
              <article
                key={name}
                className="flex flex-col rounded-xl border border-border bg-card p-7 shadow-card"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <IconComponent name={iconMap[Icon] ?? Icon} />
                </span>
                <h3 className="mt-5 text-xl font-semibold">{name}</h3>
                <dl className="mt-4 space-y-3 text-sm">
                  <div>
                    <dt className="font-semibold">The goal</dt>
                    <dd className="text-muted-foreground">{goal}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Our role</dt>
                    <dd className="text-muted-foreground">{role}</dd>
                  </div>
                </dl>
                <p className="mt-5 rounded-lg border-l-2 border-accent bg-muted p-4 text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">Compliance boundary: </span>
                  {boundary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <IndustryMatrix />

      <section id="how-rpl-works" className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="section-eyebrow">How RPL works</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Turn experience into formal recognition in four stages
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Recognition of Prior Learning (RPL) compares your real-world work history against the
            units in a formal qualification. We help you collect, map and present that evidence so an
            independent RTO can assess it.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "Search",
                title: "Skills audit",
                body: "We review your work history, qualifications and tax records to identify which units you may already satisfy.",
              },
              {
                icon: "FolderOpen",
                title: "Evidence collection",
                body: "Gather site photos, job logs, contracts, references and certificates that prove your competence.",
              },
              {
                icon: "Upload",
                title: "Portfolio submission",
                body: "We structure your evidence into a decision-ready portfolio and submit it to an independent RTO for assessment.",
              },
              {
                icon: "Award",
                title: "Recognition outcome",
                body: "The RTO issues credit for what you already know, so you can move toward licensing or a skills assessment.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-xl border border-border bg-card p-6 shadow-card"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-lg bg-accent-gradient text-accent-foreground">
                  <IconComponent name={iconMap[Icon] ?? Icon} />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-hero-gradient py-20 text-primary-foreground sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="section-eyebrow text-primary-foreground/60">Skill-to-licence roadmap</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Four steps from site to licence</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {steps.map((s) => (
              <div
                key={s.n}
                className="relative rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-6"
              >
                <span className="font-display text-3xl font-bold text-accent">{s.n}</span>
                <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/75">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tools" className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="section-eyebrow">Free tools</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Check your readiness today</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {tools.map(({ icon: Icon, title, body, cta, href }) => (
              <div
                key={title}
                className="flex flex-col rounded-xl border border-border bg-card p-7 shadow-card"
              >
                <IconComponent name={iconMap[Icon] ?? Icon} />
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{body}</p>
                <Button variant="outline" className="mt-6 self-start" asChild>
                  {href.startsWith("http") ? (
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      {cta}
                      <ArrowRight />
                    </a>
                  ) : (
                    <Link href={href}>
                      {cta}
                      <ArrowRight />
                    </Link>
                  )}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="section-eyebrow">Your experience matters</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Don't let years of experience go unrecognised
            </h2>
            <p className="mt-4 text-muted-foreground">
              Your workplace experience may be relevant to different career, assessment or
              licensing pathways. We help you understand how that experience fits into your next
              professional step.
            </p>
            <Button variant="hero" size="xl" className="mt-8" asChild>
              <Link href="/skills-check">
                {QUIZ_LABEL}
                <ArrowRight />
              </Link>
            </Button>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {recognitionPoints.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-sm shadow-card"
              >
                <svg className="mt-0.5 size-4 shrink-0 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Testimonials />

      <section className="border-y border-border bg-secondary py-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Find out what your experience is already worth
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            A free skills audit maps your work history against qualification units, so you know
            exactly which evidence you already have and what is missing.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button variant="hero" size="xl" asChild>
              <a href={BOOKING_HREF} target="_blank" rel="noreferrer">{BOOKING_LABEL}</a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link href="/skills-check">
                Take the readiness quiz
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
      <StickyQuizBar />
    </div>
  );
}