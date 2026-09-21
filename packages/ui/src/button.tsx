import * as React from "react";
import { cn } from "./lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "forest"
    | "earth"
    | "harvest"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer";

    const variantStyles = {
      default:
        "bg-farm-700 text-white hover:bg-farm-800 focus-visible:ring-farm-600 active:bg-farm-900 shadow-sm",
      forest:
        "bg-forest text-white hover:bg-forest-medium focus-visible:ring-forest-light active:bg-forest-dark shadow-sm",
      earth:
        "bg-earth-800 text-white hover:bg-earth-900 focus-visible:ring-earth-700 shadow-sm",
      harvest:
        "bg-harvest-warm text-white hover:bg-harvest-amber focus-visible:ring-harvest-gold shadow-sm",
      outline:
        "border border-farm-200 bg-white text-forest hover:bg-farm-50 hover:border-farm-300 focus-visible:ring-farm-500",
      secondary:
        "bg-farm-100 text-farm-900 hover:bg-farm-200 focus-visible:ring-farm-500",
      ghost:
        "text-forest hover:bg-farm-50 hover:text-farm-900 focus-visible:ring-farm-500",
      link: "text-farm-700 underline-offset-4 hover:underline focus-visible:ring-farm-500 p-0 h-auto",
    };

    const sizeStyles = {
      default: "h-10 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-12 rounded-xl px-8 text-base",
      icon: "h-10 w-10",
    };

    return (
      <button
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
