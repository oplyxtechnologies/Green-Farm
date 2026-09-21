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
        "bg-krishi-brand text-white hover:bg-krishi-forest focus-visible:ring-krishi-brand active:scale-[0.98] shadow-sm",
      forest:
        "bg-krishi-forest text-white hover:bg-krishi-forest/90 focus-visible:ring-krishi-forest active:scale-[0.98] shadow-sm",
      earth:
        "bg-slate-800 text-white hover:bg-slate-900 focus-visible:ring-slate-700 shadow-sm",
      harvest:
        "bg-krishi-mint text-krishi-mint-text font-semibold hover:bg-krishi-mint/90 focus-visible:ring-krishi-mint shadow-sm",
      outline:
        "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 hover:border-slate-300 focus-visible:ring-krishi-brand",
      secondary:
        "bg-slate-100 text-slate-900 hover:bg-slate-200 focus-visible:ring-slate-400",
      ghost:
        "text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-slate-400",
      link: "text-krishi-brand underline-offset-4 hover:underline focus-visible:ring-krishi-brand p-0 h-auto",
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
