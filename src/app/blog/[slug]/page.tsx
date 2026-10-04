import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, User } from "lucide-react";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { BOOKING_HREF, BOOKING_LABEL } from "@/lib/contact";
import { BLOG_POSTS } from "@/lib/blog-posts";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: `${post.title} | Skills Connect`, description: post.excerpt };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="bg-hero-gradient text-primary-foreground">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:py-24">
          <p className="text-sm text-primary-foreground/70">
            <Link href="/blog" className="hover:text-primary-foreground hover:underline">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span>{post.title}</span>
          </p>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl">
            {post.title}
          </h1>
          <div className="mt-6 flex items-center gap-3 text-sm text-primary-foreground/70">
            <Calendar className="size-4" />
            <span>{post.date}</span>
            <User className="size-4" />
            <span>Skills Connect</span>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-5">
            {post.body.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/blog"
              className="inline-flex h-11 items-center rounded-lg border border-border bg-card px-5 text-sm font-semibold transition-colors hover:border-accent"
            >
              <ArrowLeft className="mr-2 size-4" /> Back to blog
            </Link>
            <a
              href={BOOKING_HREF}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {BOOKING_LABEL} <ArrowRight className="ml-2 size-4" />
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
