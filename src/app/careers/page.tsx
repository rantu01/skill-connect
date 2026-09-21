import { SiteFooter } from "@/components/SiteFooter";
import { SiteLogo } from "@/components/SiteLogo";
import { Briefcase, CheckCircle2, Users } from "lucide-react";
import Link from "next/link";

export default function CareersPage() {
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
        </div>
      </header>

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