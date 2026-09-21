import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

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