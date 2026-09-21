import { ArrowRight, CheckCircle2, Wrench, XCircle } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteLogo } from "@/components/SiteLogo";
import { BOOKING_HREF, PHONE, PHONE_HREF } from "@/lib/contact";

function IconComponent({ name }: { name: string }) {
  return (
    <span className="inline-flex size-5 items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {name === "file-check-2" && (<><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><path d="m9 15 2 2 4-4" /></>)}
        {name === "hard-hat" && (<><path d="M12 22c4.97 0 9-2.24 9-5V8l-9-5-9 5v9c0 2.76 4.03 5 9 5z" /><path d="M10 12h4" /></>)}
        {name === "globe-2" && (<><circle cx="12" cy="12" r="10" /><line x1="2" x2="22" y1="12" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></>)}
        {name === "trending-up" && (<><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></>)}
        {name === "briefcase" && (<><rect width="20" height="14" x="2" y="2" rx="2" /><path d="M10 2v4M14 2v4" /></>)}
        {name === "award" && (<><circle cx="12" cy="8" r="7" /><path d="M8.21 13.89 7 23l5-1 3 1 5-1-1.21-9.11" /></>)}
      </svg>
    </span>
  );
}

const data = {
  slug: "concreting",
  audience: "Concreting",
  h1: "RPL for Concreting: Turn your site experience into a recognised qualification",
  heroIntro: "If you have years of hands-on concreting experience, we can help you map your skills against CPC30320 Cert III in Concreting.",
  heroSteps: ["Your experience", "Evidence portfolio", "RTO assessment", "Trade qualification"],
  qualifications: [{ code: "CPC30320", name: "Cert III in Concreting", note: "Core trade qualification for concreters" }],
  evidenceItems: ["Site photos", "Job logs", "Tax records", "Employer references"],
  outcomeTabs: [
    { id: "qualification", label: "Qualification", icon: "file-check-2", heading: "Get your Cert III in Concreting", intro: "RPL assessment of your concreting experience.", points: [{ title: "Credit for experience", body: "Units covered by your experience are granted as credit." }], cta: "Start your RPL application" },
    { id: "licence", label: "Licence", icon: "hard-hat", heading: "Become a licensed concreter", intro: "State contractor licence for concreters.", points: [{ title: "State licence", body: "Meet state licensing requirements." }], cta: "Book a licensing consult" },
    { id: "migration", label: "Migration", icon: "globe-2", heading: "Skills assessment for concreting", intro: "TRA assessment for skilled visa.", points: [{ title: "ANZSCO mapping", body: "Mapped to ANZSCO 342112." }], cta: "Start migration assessment" },
  ],
  costOfInaction: [
    { icon: "trending-up", staying: "Stuck at sub-contractor rates", certified: "Access to higher-paying licensed roles" },
    { icon: "briefcase", staying: "Cannot quote independently", certified: "Run your own concreting business" },
    { icon: "award", staying: "No formal qualification on record", certified: "Nationally recognised Cert III" },
  ],
  quizHeading: "Check your concreting RPL eligibility",
  quizQuestions: [
    { question: "How many years of concreting experience?", options: [{ label: "Less than 2 years", score: 1 }, { label: "2–5 years", score: 3 }, { label: "5+ years", score: 5 }] },
    { question: "Do you have site photos or work samples?", options: [{ label: "No", score: 1 }, { label: "Some", score: 3 }, { label: "Extensive portfolio", score: 5 }] },
    { question: "Do you have tax records or payslips?", options: [{ label: "No", score: 1 }, { label: "Some", score: 3 }, { label: "Complete records", score: 5 }] },
    { question: "Do you have employer references?", options: [{ label: "No", score: 1 }, { label: "1–2 references", score: 3 }, { label: "3+ references", score: 5 }] },
    { question: "Have you completed any formal training?", options: [{ label: "No", score: 1 }, { label: "Some units", score: 3 }, { label: "Full qualification", score: 5 }] },
  ],
  faqHeading: "Concreting RPL frequently asked questions",
  faqs: [
    { q: "How long does concreting RPL take?", a: "Most concreting RPL pathways take 6–12 months." },
    { q: "What evidence do I need?", a: "Site photos, job logs, tax records, employer references." },
    { q: "Can I do RPL if I have no formal training?", a: "Yes. RPL is designed for experienced workers." },
    { q: "Will I need to study anything?", a: "You may need to complete a small number of remaining units." },
  ],
};

export default function ConcretingPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" aria-label="Skills Connect home"><SiteLogo /></Link>
          <nav className="hidden gap-6 text-sm font-medium text-muted-foreground lg:flex">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <Link href="/services" className="hover:text-foreground">Services</Link>
            <Link href="/industries" className="hover:text-foreground">Industries</Link>
            <Link href="/resources" className="hover:text-foreground">Resources</Link>
            <Link href="/blog" className="hover:text-foreground">Blogs</Link>
            <Link href="/contact" className="hover:text-foreground">Contact</Link>
          </nav>
          <Button variant="hero" size="sm" asChild><a href="#quiz">Check eligibility</a></Button>
        </div>
      </header>

      <section className="bg-hero-gradient text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide"><Wrench className="size-3.5" />{data.audience}</span>
          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">{data.h1}</h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80">{data.heroIntro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="hero" size="xl" asChild><a href="#quiz">Check if I qualify in 60 seconds<ArrowRight /></a></Button>
            <Button variant="heroOutline" size="xl" asChild><a href={PHONE_HREF}>Call {PHONE}</a></Button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-primary-foreground/70">
            {data.heroSteps.map((label, i) => (
              <span key={label} className="flex items-center gap-3">{i > 0 && <ArrowRight className="size-4 text-accent" />}<span>{label}</span></span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
          <div>
            <p className="section-eyebrow">The foundation</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">One qualification sits behind every outcome</h2>
            <p className="mt-4 text-muted-foreground">Whether your goal is better pay, a state tradesperson certificate or a TRA skills assessment, the same credential unlocks it: a nationally recognised Certificate III, issued by an accredited independent RTO through Recognition of Prior Learning.</p>
            <div className="mt-8 space-y-3">
              {data.qualifications.map((q) => (
                <div key={q.code} className="rounded-lg border border-border bg-card p-4 shadow-card">
                  <p className="font-display text-sm font-bold text-accent">{q.code}</p>
                  <p className="mt-0.5 font-semibold">{q.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{q.note}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-7 shadow-card lg:self-start">
            <h3 className="text-lg font-semibold">What your portfolio is built from</h3>
            <p className="mt-2 text-sm text-muted-foreground">The everyday traces of your work become formal evidence:</p>
            <ul className="mt-5 space-y-3.5">
              {data.evidenceItems.map((item) => (
                <li key={item} className="flex gap-3 text-sm"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" /><span>{item}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="outcomes" className="border-b border-border bg-secondary py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="section-eyebrow">Choose your outcome</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">One trade, three destinations</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">Pick the goal that matches yours — the pathway, paperwork and decision-maker differ, but all three start with the same evidence portfolio.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {data.outcomeTabs.map((tab) => (
              <div key={tab.id} className="rounded-xl border border-border bg-card p-7 shadow-card">
                <h3 className="text-2xl font-bold">{tab.heading}</h3>
                <p className="mt-3 max-w-3xl text-muted-foreground">{tab.intro}</p>
                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {tab.points.map((p) => (
                    <div key={p.title} className="rounded-lg border border-border bg-background p-5">
                      <p className="font-semibold">{p.title}</p>
                      <p className="mt-1.5 text-sm text-muted-foreground">{p.body}</p>
                    </div>
                  ))}
                </div>
                <Button variant="hero" size="lg" className="mt-8" asChild><a href={BOOKING_HREF} target="_blank" rel="noreferrer">{tab.cta}<ArrowRight /></a></Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="section-eyebrow">The cost of staying uncertified</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Every year without the paperwork costs you</h2>
          <div className="mt-10 overflow-hidden rounded-xl border border-border bg-card shadow-card">
            <div className="grid grid-cols-1 divide-y divide-border md:grid-cols-[1fr_1fr] md:divide-x md:divide-y-0">
              <div className="bg-muted/60 p-6"><p className="font-display text-sm font-bold uppercase tracking-wide text-muted-foreground">Staying uncertified</p></div>
              <div className="bg-accent/10 p-6"><p className="font-display text-sm font-bold uppercase tracking-wide text-foreground">Certified &amp; recognised</p></div>
            </div>
            {data.costOfInaction.map(({ icon: Icon, staying, certified }) => (
              <div key={staying} className="grid grid-cols-1 divide-y divide-border border-t border-border md:grid-cols-[1fr_1fr] md:divide-x md:divide-y-0">
                <div className="flex items-start gap-3 p-6 text-sm text-muted-foreground"><XCircle className="mt-0.5 size-4 shrink-0 text-destructive" /><span>{staying}</span></div>
                <div className="flex items-start gap-3 bg-accent/5 p-6 text-sm font-medium"><IconComponent name={Icon} /><span>{certified}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="quiz" className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <p className="section-eyebrow">60-second eligibility check</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{data.quizHeading}</h2>
          <p className="mt-3 text-muted-foreground">Five quick questions about your work history. Your answers stay on this page — nothing is sent anywhere.</p>
          <div className="mt-10 rounded-xl border border-border bg-card p-7 shadow-card sm:p-10">
            <div className="text-center">
              <span className="inline-flex size-14 items-center justify-center rounded-full bg-accent-gradient text-accent-foreground"><CheckCircle2 className="size-7" /></span>
              <h3 className="mt-5 text-2xl font-bold">Strong readiness</h3>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Your experience and evidence look close to portfolio-ready. A free skills audit can confirm which qualification units you already meet and what gaps remain.</p>
              <p className="mx-auto mt-4 max-w-xl text-xs text-muted-foreground">This is an indicative self-assessment only, not a formal RPL outcome. Formal assessment is conducted by an accredited independent RTO.</p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Button variant="hero" size="lg" asChild><Link href="/contact">Book my free skills audit<ArrowRight /></Link></Button>
                <Button variant="outline" size="lg" asChild><a href={PHONE_HREF}>Call {PHONE}</a></Button>
                <Button variant="ghost" size="lg">Start again</Button>
              </div>
            </div>
          </div>
          <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground"><span className="size-3.5 text-accent">⚡</span>Takes about 60 seconds. No email required to see your result.</p>
        </div>
      </section>

      <section className="border-t border-border bg-secondary py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <p className="section-eyebrow">Common questions</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{data.faqHeading}</h2>
          <div className="mt-10 space-y-4">
            {data.faqs.map((f) => (
              <details key={f.q} className="rounded-lg border border-border bg-card p-5">
                <summary className="cursor-pointer text-base font-semibold">{f.q}</summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}