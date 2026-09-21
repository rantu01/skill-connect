import { ArrowRight, Calendar, User } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteLogo } from "@/components/SiteLogo";

const posts = [
  { title: "How RPL works for tradies", slug: "how-rpl-works", date: "2026-01-15", excerpt: "A step-by-step guide to Recognition of Prior Learning for trades." },
  { title: "Evidence portfolio checklist", slug: "evidence-checklist", date: "2026-02-01", excerpt: "What documents you need to prove your trade experience." },
  { title: "State licensing differences", slug: "state-licensing", date: "2026-02-20", excerpt: "How licensing requirements differ across Australian states." },
  { title: "RPL vs apprenticeship", slug: "rpl-vs-apprenticeship", date: "2026-03-10", excerpt: "Which pathway is right for your experience level?" },
];

export default function BlogPage() {
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
          <p className="section-eyebrow">Blog</p>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">Insights &amp; guides</h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80">Practical advice for tradespeople navigating RPL and licensing.</p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <article key={post.title} className="rounded-xl border border-border bg-card p-7 shadow-card">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Calendar className="size-4" />
                  <span>{post.date}</span>
                  <User className="size-4" />
                  <span>Skills Connect</span>
                </div>
                <h2 className="mt-4 text-xl font-bold">{post.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
                <Button variant="ghost" size="sm" className="mt-5 px-0" asChild>
                  <Link href={`/blog/${post.slug}`}>Read more<ArrowRight className="ml-1 size-4" /></Link>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}