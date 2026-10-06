"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteLogo } from "@/components/SiteLogo";
import { BOOKING_HREF, BOOKING_LABEL } from "@/lib/contact";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/resources", label: "Resources" },
  { href: "/blog", label: "Blogs" },
  { href: "/contact", label: "Contact" },
];

type SiteHeaderProps = {
  ctaHref?: string;
  ctaLabel?: string;
  ctaExternal?: boolean;
};

export function SiteHeader({
  ctaHref = BOOKING_HREF,
  ctaLabel = BOOKING_LABEL,
  ctaExternal = true,
}: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" aria-label="Skills Connect home" onClick={() => setOpen(false)}>
          <SiteLogo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-6 text-sm font-medium text-muted-foreground lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors duration-200 hover:text-foreground",
                pathname === link.href && "text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="hero" size="sm" asChild className="hidden sm:inline-flex">
            <a
              href={ctaHref}
              {...(ctaExternal ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              {ctaLabel}
            </a>
          </Button>

          {/* Hamburger — three lines, mobile only */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav className="border-t border-border/60 bg-background px-6 py-4 lg:hidden animate-card-in">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground",
                  pathname === link.href && "bg-accent/50 text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="hero" size="sm" asChild className="mt-3 sm:hidden">
              <a
                href={ctaHref}
                onClick={() => setOpen(false)}
                {...(ctaExternal ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {ctaLabel}
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
