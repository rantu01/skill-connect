import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { BOOKING_HREF, BOOKING_LABEL } from "@/lib/contact";

export const metadata = {
  title: "Skills Assessment for Visa Readiness | Skills Connect",
  description:
    "The same 2-minute check read against migration requirements: ANZSCO occupation match, employment reference quality and document coverage for TRA or VETASSESS.",
};

const keyAreas = [
  {
    title: "ANZSCO occupation match",
    body: "ANZSCO is the framework used to describe occupations in Australia. At a high level, a matching occupation means your day-to-day duties line up with the tasks an assessing body expects for that role. Choosing the appropriate occupation matters because document expectations are built around it.",
  },
  {
    title: "Employment reference quality",
    body: "Employment references generally need to show what you did, where, and for how long. A strong reference is specific and consistent with your own account of your work history, rather than a brief confirmation of dates.",
  },
  {
    title: "Document coverage",
    body: "Document coverage means having evidence across the main categories an assessor reviews: identity, qualifications, employment history and duty evidence. Gaps in coverage are easier to address before you apply than during.",
  },
  {
    title: "TRA and VETASSESS",
    body: "TRA and VETASSESS are assessing bodies commonly associated with trade and professional occupations. Which body and criteria apply depends on your occupation and pathway — confirm current requirements with the relevant authority or a registered advisor.",
  },
];

const prepare = [
  "A clear picture of your likely ANZSCO occupation and its core duties",
  "Employment references from employers or supervisors, on letterhead where possible",
  "Payslips, tax records and contracts to corroborate your work history",
  "Evidence of duties performed, such as photos, logs or project examples",
  "Copies of any qualifications or licences you hold",
  "A list of your employment history with dates and hours",
];

export default function VisaReadinessPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="bg-hero-gradient text-primary-foreground">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-20">
          <p className="section-eyebrow">Readiness guide</p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.05] sm:text-5xl">
            Skills Assessment for Visa Readiness
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            The same 2-minute check read against migration requirements: ANZSCO occupation
            match, employment reference quality and document coverage for TRA or VETASSESS.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold sm:text-4xl">What visa skills assessment readiness means</h2>
          <p className="mt-4 text-muted-foreground">
            Skills assessment readiness is an initial check on whether your employment
            history and supporting evidence line up with what migration assessing bodies
            typically review. It is not a migration outcome, and it does not determine visa
            eligibility.
          </p>

          <h2 className="mt-12 text-3xl font-bold sm:text-4xl">Key areas this check looks at</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {keyAreas.map((area) => (
              <div key={area.title} className="rounded-xl border border-border bg-card p-6 shadow-card">
                <h3 className="text-lg font-semibold">{area.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{area.body}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-12 text-3xl font-bold sm:text-4xl">What to review before you start</h2>
          <ul className="mt-6 space-y-3">
            {prepare.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-sm shadow-card">
                <svg className="mt-0.5 size-4 shrink-0 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-10 rounded-lg border-l-2 border-accent bg-muted p-4 text-xs text-muted-foreground">
            <span className="font-semibold text-foreground">Please note: </span>
            This page is a readiness guide only. Skills Connect is not a migration agency or
            assessing body and does not issue visa approvals, legal advice, or guaranteed
            assessment outcomes.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button variant="hero" size="lg" asChild>
              <Link href="/skills-check">Start the free 60 second skills check <ArrowRight className="size-4" /></Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={BOOKING_HREF} target="_blank" rel="noreferrer">{BOOKING_LABEL}</a>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
