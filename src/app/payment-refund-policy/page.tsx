import { SiteFooter } from "@/components/SiteFooter";
import { SiteLogo } from "@/components/SiteLogo";
import Link from "next/link";

export default function RefundPage() {
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
          <p className="section-eyebrow">Legal</p>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">Payment &amp; Refund Policy</h1>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-xl border border-border bg-card p-8 shadow-card">
            <p className="text-sm text-muted-foreground">Last updated: 1 January 2026</p>
            <p className="mt-6 text-sm text-muted-foreground">Payments are processed by our third-party payment provider. Refunds are handled according to the provider's policy.</p>
            <p className="mt-4 text-sm text-muted-foreground">For refund requests, contact us with your transaction details.</p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}