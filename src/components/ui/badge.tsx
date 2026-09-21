import * as React from "react";
import { cn } from "@/lib/utils";

const Badge = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & { variant?: "default" | "secondary" | "destructive" | "outline" }
>(({ className, variant = "default", ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
      variant === "default" && "border-transparent bg-primary text-primary-foreground shadow",
      variant === "secondary" && "border-transparent bg-secondary text-secondary-foreground",
      variant === "destructive" && "border-transparent bg-destructive text-destructive-foreground shadow",
      variant === "outline" && "text-foreground",
      className
    )}
    {...props}
  />
));
Badge.displayName = "Badge";

export { Badge };