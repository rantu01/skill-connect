import { ArrowRight, BadgeCheck, BriefcaseBusiness, Building2, Check, FileCheck2, Globe2, Handshake, HeartHandshake, Scale, ShieldCheck, Users } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { BOOKING_HREF, BOOKING_LABEL, QUIZ_HREF } from "@/lib/contact";

const services = [
  { icon: FileCheck2, title: "RPL portfolio preparation", body: "We gather, audit and organise site photos, job records, tax documents and employer references into a decision-ready evidence package for independent RTO evaluation." },
  { icon: Building2, title: "Trade licensing advisory", body: "We help you understand qualification prerequisites and prepare paperwork for the relevant state licensing authority." },
  { icon: Users, title: "Professional registration", body: "We assist health and care professionals with mapping credentials for registration with relevant peak industry bodies." },
  { icon: Globe2, title: "Migration skills assessment guidance", body: "We help structure ANZSCO duty mapping, reference letters and supporting documents for official assessing bodies such as TRA and VETASSESS." },
];

const reasons = [
  { icon: Scale, title: "Independent guidance", body: "We focus on consulting and documentation, helping you identify a direct recognition pathway without selling unnecessary training." },
  { icon: BadgeCheck, title: "No missing proof", body: "Know which photos, pay records, work orders and references are needed before your portfolio reaches an assessor." },
  { icon: Handshake, title: "End-to-end support", body: "Our guidance can continue from qualification evidence through to licensing or migration skills assessment paperwork." },
  { icon: ShieldCheck, title: "Clear compliance boundaries", body: "We are transparent about our advisory role and the decisions reserved for RTOs, regulators and assessing authorities." },
];

const process = [
  ["01", "Skills and evidence audit", "We compare your work history with the relevant national competency requirements."],
  ["02", "Evidence vault structuring", "We organise site photos, payslips, contracts, safety records and reference letters."],
  ["03", "Independent review", "Your completed portfolio is prepared for evaluation by an accredited partner RTO."],
  ["04", "Next-outcome guidance", "We support the paperwork for your relevant licensing authority or skills assessing body."],
];

const people = [
  "Unlicensed tradespeople seeking a Certificate III and a clearer path to state licensing",
  "Sub-contractors and handymen preparing to move toward licensed business ownership",
  "Onshore and offshore skilled workers preparing evidence for TRA or VETASSESS",
  "Care, health and community workers pursuing qualifications and supervisory roles",
];

const iconMap: Record<string, any> = { Scale, BadgeCheck, Handshake, ShieldCheck, FileCheck2, Building2, Users, Globe2, BriefcaseBusiness, HeartHandshake };

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader ctaHref={QUIZ_HREF} ctaLabel="Check if you qualify" />

      <main>
        <section className="relative overflow-hidden bg-hero-gradient text-primary-foreground">
          <div className="relative mx-auto flex min-h-[620px] max-w-6xl items-center px-6 py-20">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">About Skills Connect</p>
              <h1 className="mt-5 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">Bridge the gap between your workplace experience and official Australian recognition</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 sm:text-xl">We help experienced tradespeople, health professionals and skilled workers turn real-world evidence into clear pathways toward recognised qualifications, state licences and migration outcomes.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="hero" size="xl" asChild><Link href="/industries">Check your pathway <ArrowRight /></Link></Button>
                <Button variant="heroOutline" size="xl" asChild><a href={BOOKING_HREF} target="_blank" rel="noreferrer">{BOOKING_LABEL}</a></Button>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-secondary py-20 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div><p className="section-eyebrow">Who we are</p><h2 className="mt-3 text-3xl font-bold sm:text-4xl">Your personal portfolio architect</h2></div>
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>Skills Connect is a registered trading name of EDUTEK PTY LTD and an independent Australian career advisory and document preparation consultancy.</p>
              <p>We help uncertified workers, sub-contractors and overseas-trained professionals navigate vocational recognition and licensing systems. Instead of asking you to relearn skills you already use, we help audit, structure and present the workplace evidence that demonstrates your experience.</p>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <p className="section-eyebrow">What we do</p>
            <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end"><h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">Four pathways. One clear evidence strategy.</h2><p className="max-w-md text-muted-foreground">We translate practical experience into organised, professional documentation suited to the outcome you are pursuing.</p></div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {services.map(({ icon: Icon, title, body }) => (
                <article key={title} className="rounded-lg border border-border bg-card p-7 shadow-card">
                  <Icon className="size-7 text-accent" />
                  <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary py-20 text-primary-foreground sm:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Why Skills Connect</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">Built around your evidence, not a course sale</h2>
            <div className="mt-10 grid gap-x-12 gap-y-10 sm:grid-cols-2">
              {reasons.map(({ icon: Icon, title, body }) => (
                <article key={title} className="border-t border-primary-foreground/20 pt-6">
                  <div className="flex items-center gap-3"><Icon className="size-5 text-accent" /><h3 className="text-lg font-semibold">{title}</h3></div>
                  <p className="mt-3 text-primary-foreground/70">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
              <div><p className="section-eyebrow">Our approach</p><h2 className="mt-3 text-3xl font-bold sm:text-4xl">From working history to decision-ready portfolio</h2><p className="mt-5 text-muted-foreground">A systematic process helps make your evidence complete, organised and easier for the relevant independent body to evaluate.</p><Button variant="outline" className="mt-7" asChild><Link href="/services">Explore our services <ArrowRight /></Link></Button></div>
              <ol className="space-y-4">
                {process.map(([number, title, body]) => (
                  <li key={number} className="grid grid-cols-[3.5rem_1fr] gap-4 border-b border-border pb-5">
                    <span className="font-display text-2xl font-bold text-accent">{number}</span>
                    <div><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p></div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-secondary py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div><HeartHandshake className="size-9 text-accent" /><p className="section-eyebrow mt-6">Who we help</p><h2 className="mt-3 text-3xl font-bold sm:text-4xl">Practical experience deserves a formal pathway</h2><p className="mt-5 text-muted-foreground">We support people across trades, automotive, care, health, community services and other skilled occupations.</p></div>
              <ul className="space-y-4">
                {people.map((person) => (
                  <li key={person} className="flex gap-3 rounded-lg border border-border bg-card p-5 shadow-card">
                    <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground"><Check className="size-4" /></span>
                    <span className="text-sm leading-relaxed">{person}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <div className="border-l-4 border-accent pl-6 sm:pl-8">
              <p className="section-eyebrow">Compliance and transparency</p>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Clear roles. No misleading promises.</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">Skills Connect is not a Registered Training Organisation, migration agency or government licensing authority. We do not deliver accredited training, perform formal assessments, issue nationally recognised qualifications or grant licences. RPL assessment and qualification issuance are completed independently by accredited partner RTOs. Licensing and migration outcomes are determined by the relevant regulatory authorities and official assessing bodies.</p>
            </div>
          </div>
        </section>

        <section className="bg-accent py-16 text-accent-foreground">
          <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 px-6 lg:flex-row lg:items-center">
            <div><p className="text-sm font-semibold uppercase tracking-widest">Your experience is valuable</p><h2 className="mt-2 text-3xl font-bold sm:text-4xl">Let&apos;s make it official.</h2><p className="mt-3 max-w-2xl text-accent-foreground/75">Start with a free conversation about your experience, evidence and career goal.</p></div>
            <div className="flex flex-wrap gap-3">
              <Button variant="default" size="xl" asChild><a href={BOOKING_HREF} target="_blank" rel="noreferrer">{BOOKING_LABEL}</a></Button>
              <Button variant="outline" size="xl" asChild><a href="tel:0488289005">Call 0488 289 005</a></Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}