import { ArrowRight, Calendar, User } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { BLOG_POSTS } from "@/lib/blog-posts";

const posts = BLOG_POSTS;

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

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