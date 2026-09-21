import { SiteFooter } from "@/components/SiteFooter";
import { SiteLogo } from "@/components/SiteLogo";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function IndustriesPage() {
  const industries = [
    { name: "Construction", trades: 12, desc: "Residential and commercial construction trades." },
    { name: "Engineering", trades: 8, desc: "Heavy equipment, diesel, and mechanical trades." },
    { name: "Services", trades: 10, desc: "Personal and home services trades." },
    { name: "Infrastructure", trades: 6, desc: "Civil and infrastructure trades." },
    { name: "Utilities", trades: 5, desc: "Gas, electrical, and plumbing trades." },
    { name: "Manufacturing", trades: 4, desc: "Production and manufacturing trades." },
  ];

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
          <p className="section-eyebrow">Industries</p>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">Industries we support</h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80">Our RPL pathways cover trades across multiple industries — find yours and get started.</p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <div key={ind.name} className="rounded-xl border border-border bg-card p-7 shadow-card">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-accent-gradient text-accent-foreground">
                    <CheckCircle2 className="size-5" />
                  </div>
                  <div>
                    <p className="font-semibold">{ind.name}</p>
                    <p className="text-xs text-muted-foreground">{ind.trades} trades</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}