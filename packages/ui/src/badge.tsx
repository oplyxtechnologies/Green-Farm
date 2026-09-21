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
    default: "border-transparent bg-farm-100 text-farm-800 hover:bg-farm-200",
    forest: "border-transparent bg-forest text-white hover:bg-forest-medium",
    earth: "border-transparent bg-earth-100 text-earth-800 hover:bg-earth-200",
    harvest: "border-transparent bg-harvest-wheat text-harvest-amber font-semibold hover:bg-yellow-100",
    secondary: "border-transparent bg-slate-100 text-slate-800 hover:bg-slate-200",
    outline: "text-forest border border-farm-300",
    success: "border-transparent bg-emerald-100 text-emerald-800",
    warning: "border-transparent bg-amber-100 text-amber-800",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-farm-600 focus:ring-offset-2",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
