import * as React from "react";
import { cn } from "./lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?:
    | "default"
    | "forest"
    | "earth"
    | "harvest"
    | "secondary"
    | "outline"
    | "success"
    | "warning";
}

function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: "border-transparent bg-krishi-brand/10 text-krishi-brand hover:bg-krishi-brand/20",
    forest: "border-transparent bg-krishi-forest text-white hover:bg-krishi-forest/90",
    earth: "border-transparent bg-slate-100 text-slate-800 hover:bg-slate-200",
    harvest: "border-transparent bg-krishi-mint/30 text-krishi-mint-text font-semibold hover:bg-krishi-mint/40",
    secondary: "border-transparent bg-slate-100 text-slate-800 hover:bg-slate-200",
    outline: "text-krishi-brand border border-krishi-brand/30",
    success: "border-transparent bg-emerald-100 text-emerald-800",
    warning: "border-transparent bg-slate-200 text-slate-800",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-krishi-brand focus:ring-offset-2",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
