import { BadgeCheck, Briefcase, ClipboardList, Compass, FileCheck2, Globe2, HardHat, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteLogo } from "@/components/SiteLogo";
import { BOOKING_HREF, BOOKING_LABEL, QUIZ_HREF } from "@/lib/contact";

const iconMap: Record<string, any> = { TrendingUp, Briefcase, ClipboardList, Compass, FileCheck2, Globe2, HardHat, Zap };

const impact = [
  { icon: "TrendingUp", title: "Higher earning potential", body: "Certified and licensed workers command 25%–60% higher hourly and contracting rates than uncredentialed assistants." },
  { icon: "Briefcase", title: "Contractor freedom", body: "Move from sub-contractor to licensed principal contractor, quote directly on projects and run your own business." },
  { icon: "Globe2", title: "Migration & residency", body: "Formal qualification evidence mapped to ANZSCO standards for TRA, VETASSESS or ACWA skills assessments." },
  { icon: "Zap", title: "Fast-track recognition", body: "Convert years of undocumented, real-world experience into formal credentials without classroom retraining." },
];

const pillars = [
  { icon: "FileCheck2", name: "RPL evidence preparation", goal: "Turn years of informal workplace history into formal qualification credits.", role: "We audit, gather and format your site photos, safety logs, contracts and references into a structured RPL portfolio ready for evaluation.", boundary: "Skills Connect is an independent evidence preparation consultancy, not an RTO. Formal RPL assessment and qualification issuance are conducted strictly by accredited independent RTOs." },
  { icon: "HardHat", name: "Trade licensing advisory", goal: "Become a fully licensed trade contractor (Fair Trading, VBA, QBCC) or registered supervisor.", role: "State boards require a prerequisite trade qualification. We help build the evidence portfolio to gain it through an independent RTO, then guide your state contractor licence paperwork.", boundary: "Trade licences are granted solely by the relevant state government licensing authorities." },
  { icon: "Compass", name: "Career counselling & pathway mapping", goal: "Step into supervisory roles, secure wage increases or transition across industries.", role: "One-on-one sessions mapping your current skills against vocational benchmarks (TAE, BSB, FNS, CHC) to create a step-by-step career development plan.", boundary: "Skills Connect provides non-accredited career coaching and advisory guidance." },
  { icon: "BadgeCheck", name: "Skills assessment guidance for migration", goal: "Secure positive occupational skills assessments for Australian visas.", role: "ANZSCO task mapping, employment reference formatting and tax record structuring for assessing bodies such as TRA, VETASSESS and ACWA.", boundary: "Skills Connect is not a migration agency or assessing body and does not issue visa approvals or legal advice." },
];

const tools = [
  { icon: "ClipboardList", title: "RPL & migration readiness quiz", body: "A 2-minute interactive tool assessing experience years, tax and pay records and site photo availability for an instant Portfolio Readiness Score.", cta: "Start the quiz" },
  { icon: "FileCheck2", title: "Trade-specific evidence checklists", body: "Downloadable guides such as the Carpentry Evidence Vault Checklist and the Community Services Duty-Mapping Guide.", cta: "Get a checklist" },
  { icon: "Globe2", title: "Migration document readiness checklist", body: "Reference letter structures, bank statement proofing and ANZSCO task mapping criteria for TRA and VETASSESS.", cta: "Download the guide" },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" aria-label="Skills Connect home"><SiteLogo /></Link>
          <nav className="hidden gap-6 text-sm font-medium text-muted-foreground lg:flex">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <Link href="/services" className="text-foreground">Services</Link>
            <Link href="/industries" className="hover:text-foreground">Industries</Link>
            <Link href="/resources" className="hover:text-foreground">Resources</Link>
            <Link href="/blog" className="hover:text-foreground">Blogs</Link>
            <Link href="/contact" className="hover:text-foreground">Contact</Link>
          </nav>
          <Button variant="hero" size="sm" asChild><a href={QUIZ_HREF} target="_blank" rel="noreferrer">Check if you qualify</a></Button>
        </div>
      </header>

      <section className="relative overflow-hidden bg-hero-gradient px-6 py-20 text-primary-foreground sm:py-28">
        <div className="mx-auto max-w-6xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase">What we do</span>
          <h1 className="mt-6 max-w-3xl text-4xl leading-[1.05] font-bold sm:text-5xl lg:text-6xl">Services that turn experience into recognised qualifications, licences and visa outcomes</h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80">We are an independent evidence preparation consultancy. We audit, structure and package your workplace history so an accredited RTO, state licensing body or migration assessing authority can evaluate it quickly and fairly.</p>
        </div>
      </section>

      <section className="border-b border-border bg-secondary py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="section-eyebrow">The RPL impact</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Career advancement and pay rises, not classrooms</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
             {impact.map(({ icon: Icon, title, body }) => {
               const IconComponent = iconMap[Icon];
               return (
                 <div key={title} className="rounded-xl border border-border bg-card p-6 shadow-card">
                   <span className="inline-flex size-10 items-center justify-center rounded-lg bg-accent-gradient text-accent-foreground">{IconComponent ? <IconComponent className="size-5" /> : <span className="size-5" />}</span>
                   <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                   <p className="mt-2 text-sm text-muted-foreground">{body}</p>
                 </div>
               );
             })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="section-eyebrow">Core service pillars</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">How RPL integrates with every service</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
             {pillars.map(({ icon: Icon, name, goal, role, boundary }) => {
               const IconComponent = iconMap[Icon];
               return (
                 <article key={name} className="flex flex-col rounded-xl border border-border bg-card p-7 shadow-card">
                   <span className="inline-flex size-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">{IconComponent ? <IconComponent className="size-5" /> : <span className="size-5" />}</span>
                   <h3 className="mt-5 text-xl font-semibold">{name}</h3>
                   <dl className="mt-4 space-y-3 text-sm">
                     <div><dt className="font-semibold">The goal</dt><dd className="text-muted-foreground">{goal}</dd></div>
                     <div><dt className="font-semibold">Our role</dt><dd className="text-muted-foreground">{role}</dd></div>
                   </dl>
                   <p className="mt-5 rounded-lg border-l-2 border-accent bg-muted p-4 text-xs text-muted-foreground"><span className="font-semibold text-foreground">Compliance boundary: </span>{boundary}</p>
                 </article>
               );
             })}
          </div>
        </div>
      </section>

      <section className="bg-hero-gradient py-20 text-primary-foreground sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="section-eyebrow text-primary-foreground/60">Free tools</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Check your readiness today</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
             {tools.map(({ icon: Icon, title, body, cta }) => {
               const IconComponent = iconMap[Icon];
               return (
                 <div key={title} className="flex flex-col rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-7">
                   {IconComponent ? <IconComponent className="size-6 text-accent" /> : <span className="size-6 text-accent" />}
                   <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                   <p className="mt-2 flex-1 text-sm text-primary-foreground/75">{body}</p>
                   <Button variant="heroOutline" className="mt-6 self-start">{cta}</Button>
                 </div>
               );
             })}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary py-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Find out what your experience is already worth</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">A free skills audit maps your work history against qualification units, so you know exactly which evidence you already have and what is missing.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button variant="hero" size="xl" asChild><a href={BOOKING_HREF} target="_blank" rel="noreferrer">{BOOKING_LABEL}</a></Button>
            <Button variant="outline" size="xl" asChild><Link href="/industries">Browse industries</Link></Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}