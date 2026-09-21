import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Briefcase, CheckCircle2, Users } from "lucide-react";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="bg-hero-gradient text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
          <p className="section-eyebrow">Careers</p>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">Join the Skills Connect team</h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80">Help tradies get the recognition they deserve. Work with a team that values skills and experience.</p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-7 shadow-card">
              <Briefcase className="size-8 text-accent" />
              <h3 className="mt-4 text-xl font-bold">RPL Assessors</h3>
              <p className="mt-2 text-sm text-muted-foreground">Evaluate trade portfolios and guide candidates through the RPL process.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-7 shadow-card">
              <Users className="size-8 text-accent" />
              <h3 className="mt-4 text-xl font-bold">Client Success</h3>
              <p className="mt-2 text-sm text-muted-foreground">Support candidates through the application and evidence collection journey.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-7 shadow-card">
              <CheckCircle2 className="size-8 text-accent" />
              <h3 className="mt-4 text-xl font-bold">Operations</h3>
              <p className="mt-2 text-sm text-muted-foreground">Keep the platform running smoothly for candidates and RTO partners.</p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}