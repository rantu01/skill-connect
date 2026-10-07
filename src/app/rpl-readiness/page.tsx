import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { BOOKING_HREF, BOOKING_LABEL } from "@/lib/contact";

export const metadata = {
  title: "RPL Readiness Quiz | Skills Connect",
  description:
    "A 2-minute check on experience years, tax and pay records and on-site photo availability, giving you an instant Portfolio Readiness Score for a qualification.",
};

const keyAreas = [
  {
    title: "Relevant work experience",
    body: "RPL compares your real-world work history against the units of a formal qualification. The closer your day-to-day duties are to the qualification's competencies, the more of your experience may be recognised.",
  },
  {
    title: "Experience years",
    body: "The length of your relevant experience shows sustained competence. More years of hands-on work generally means a deeper evidence base to draw from when building your portfolio.",
  },
  {
    title: "Tax and pay records",
    body: "Tax records, payslips and employment contracts can help corroborate when and where you worked. This kind of documentation supports your own account of your work history.",
  },
  {
    title: "On-site photos",
    body: "Photos of work performed on site are tangible, visual proof of competence. Workplace photos and videos help an assessor see the tasks you describe rather than relying on words alone.",
  },
];

const prepare = [
  "A list of the roles and workplaces where you gained your experience",
  "Dates and approximate hours for each role",
  "Payslips, tax returns or employment contracts where available",
  "On-site photos or videos of your work",
  "Any reference letters from employers or supervisors",
  "Certificates or licences you already hold",
];

export default function RplReadinessPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="bg-hero-gradient text-primary-foreground">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-20">
          <p className="section-eyebrow">Readiness guide</p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.05] sm:text-5xl">
            RPL Readiness Quiz
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            A 2-minute check on experience years, tax and pay records and on-site photo
            availability, giving you an instant Portfolio Readiness Score for a qualification.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold sm:text-4xl">What RPL readiness means</h2>
          <p className="mt-4 text-muted-foreground">
            RPL (Recognition of Prior Learning) readiness is about understanding how much of
            your existing experience is documented and demonstrable. It is an initial
            self-check — not an official qualification outcome. Formal RPL assessment is
            always conducted by an accredited independent RTO.
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

          <h2 className="mt-12 text-3xl font-bold sm:text-4xl">What a Portfolio Readiness assessment is for</h2>
          <p className="mt-4 text-muted-foreground">
            A Portfolio Readiness assessment is intended to help you gauge how complete your
            evidence package is before you invest time in applying. It highlights what you
            already have — site photos, logs, contracts and references — and what may still
            be missing. It does not determine whether you will be granted a qualification.
          </p>

          <h2 className="mt-12 text-3xl font-bold sm:text-4xl">What to prepare</h2>
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
            This page is a readiness guide only. It does not issue qualifications, calculate
            an official score, or replace assessment by an accredited independent RTO.
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
