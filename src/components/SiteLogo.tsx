import { cn } from "@/lib/utils";

export function SiteLogo({ className }: { className?: string }) {
  return (
    <img
      src="/assets/skills-connect-hub-logo.png"
      alt="Skills Connect"
      width={354}
      height={152}
      className={cn("h-8 w-auto", className)}
    />
  );
}