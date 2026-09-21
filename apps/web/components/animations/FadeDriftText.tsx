"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface FadeDriftTextProps {
  /** The text content or elements to reveal */
  children: React.ReactNode;
  /** Optional Tailwind / CSS classes applied to the container */
  className?: string;
  /** Delay in seconds before animation begins */
  delay?: number;
  /** Duration in seconds for transition */
  duration?: number;
  /** Subtle vertical drift offset in pixels (default: 12) */
  yOffset?: number;
  /** GSAP easing curve (default: power3.out) */
  ease?: string;
  /** Semantic HTML tag for typography */
  as?: "div" | "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  /** Whether to trigger upon viewport entry with ScrollTrigger (default: true) */
  scrollTrigger?: boolean;
  /** ScrollTrigger start position (default: "top 92%") */
  triggerStart?: string;
}

/**
 * FadeDriftText
 * Subtle opacity fade paired with vertical drift for eyebrows, category pills,
 * and meta tags across editorial pages.
 */
export function FadeDriftText({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  yOffset = 12,
  ease = "power3.out",
  as: Component = "div",
  scrollTrigger = true,
  triggerStart = "top 92%",
}: FadeDriftTextProps) {
  const containerRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.fromTo(
        containerRef.current,
        {
          opacity: 0,
          y: yOffset,
        },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease,
          scrollTrigger: scrollTrigger
            ? {
                trigger: containerRef.current,
                start: triggerStart,
                once: true,
              }
            : undefined,
        }
      );
    },
    {
      scope: containerRef,
      dependencies: [children, delay, duration, yOffset, ease, scrollTrigger, triggerStart],
    }
  );

  return (
    <Component
      ref={containerRef as any}
      className={`will-change-transform min-w-0 ${className}`}
    >
      {children}
    </Component>
  );
}
