import { ClipboardList, FileCheck2, Globe2, PlaneTakeoff } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { GuidesDirectory } from "@/components/resources/GuidesDirectory";
import { LicenceFormsSection } from "@/components/resources/LicenceFormsSection";
import { RplGuideDirectory } from "@/components/resources/RplGuideDirectory";
import { BOOKING_HREF, BOOKING_LABEL, QUIZ_HREF } from "@/lib/contact";
import { RPL_BROAD_INDUSTRIES, countGuidesByBroadIndustry } from "@/lib/rpl-guides";

const resources = [
  { icon: ClipboardList, title: "RPL Readiness Quiz", body: "A 2-minute check on experience years, tax and pay records and on-site photo availability, giving you an instant Portfolio Readiness Score for a qualification.", cta: "Start the RPL quiz", href: QUIZ_HREF },
  { icon: PlaneTakeoff, title: "Skills Assessment for Visa Readiness Quiz", body: "The same 2-minute check read against migration requirements: ANZSCO occupation match, employment reference quality and document coverage for TRA or VETASSESS.", cta: "Check visa readiness", href: QUIZ_HREF },
  { icon: FileCheck2, title: "Trade-specific RPL evidence checklists", body: "Downloadable guides such as the Carpentry Evidence Vault Checklist and the Community Services Duty-Mapping Guide.", cta: "Get a checklist", href: "#rpl-evidence-guides" },
  { icon: Globe2, title: "Skills assessment Document checklist", body: "Reference letter structures, bank statement proofing and ANZSCO task mapping criteria for TRA and VETASSESS.", cta: "Download the guide", href: "#migration-forms" },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader ctaHref={QUIZ_HREF} ctaLabel="Check if you qualify" />

      <section className="relative overflow-hidden bg-hero-gradient px-6 py-20 text-primary-foreground sm:py-28">
        <div className="mx-auto max-w-6xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase">Free tools</span>
          <h1 className="mt-6 max-w-3xl text-4xl leading-[1.05] font-bold sm:text-5xl lg:text-6xl">Prepare your RPL portfolio</h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80">Download checklists, take the readiness quiz and use our guides to gather the right evidence before your independent RTO or assessing body review.</p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {resources.map(({ icon: Icon, title, body, cta, href }) => (
              <div key={title} className="flex flex-col rounded-xl border border-border bg-card p-7 shadow-card">
                <Icon className="size-6 text-accent" />
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{body}</p>
                <Button variant="outline" className="mt-6 self-start" asChild>
                  <a href={href} {...(href.startsWith("#") ? {} : { target: "_blank", rel: "noopener noreferrer" })}>{cta}</a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="rpl-evidence-guides" className="scroll-mt-24 border-t border-border bg-secondary py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <span className="section-eyebrow">Evidence portfolio guides</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">RPL evidence portfolio guides by trade</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">Trade-by-trade guides showing exactly which photos, videos and documents an independent RTO needs. Read them online or download a printable PDF to take to work.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {RPL_BROAD_INDUSTRIES.map((name) => {
              const count = countGuidesByBroadIndustry(name);
              return (
                <div key={name} className="rounded-xl border border-border bg-card p-5 shadow-card">
                  <p className="font-semibold">{name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{count} guide{count === 1 ? "" : "s"} available</p>
                  <Link
                    href={`/rpl-evidence-guides?industry=${encodeURIComponent(name)}`}
                    className="mt-3 inline-block text-sm font-semibold text-accent hover:underline"
                  >
                    Browse guides
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="mt-8"><Button variant="hero" size="lg" asChild><Link href="/rpl-evidence-guides">See all evidence guides</Link></Button></div>
          <div className="mt-12 border-t border-border pt-10">
            <GuidesDirectory anchor="rpl-evidence-guides" />
          </div>
        </div>
      </section>

      <LicenceFormsSection />

      <section className="border-y border-border bg-secondary py-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Need help using these resources?</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">Book a free skills audit and we'll walk you through the evidence you need for your specific qualification or outcome.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button variant="hero" size="xl" asChild><a href={BOOKING_HREF} target="_blank" rel="noreferrer">{BOOKING_LABEL}</a></Button>
            <Button variant="outline" size="xl" asChild><Link href="/contact">Contact us</Link></Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}