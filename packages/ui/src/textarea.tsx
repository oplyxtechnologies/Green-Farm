import * as React from "react";
import { cn } from "./lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[100px] w-full rounded-xl border border-farm-200 bg-white px-3.5 py-2.5 text-sm text-forest placeholder:text-earth-500/70 transition-colors focus-visible:outline-none focus-visible:border-farm-600 focus-visible:ring-2 focus-visible:ring-farm-600/20 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
