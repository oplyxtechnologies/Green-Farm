"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface StaggeredLineRevealProps {
  /** Paragraph or text string to reveal */
  children: string;
  /** Optional Tailwind / CSS classes applied to container */
  className?: string;
  /** Semantic element (default: 'p') */
  as?: "p" | "div" | "h2" | "h3" | "span";
  /** Delay in seconds before animation begins */
  delay?: number;
  /** Stagger time in seconds between words (default: 0.02 for tight rhythm) */
  stagger?: number;
  /** Duration in seconds for each word transition */
  duration?: number;
  /** GSAP easing curve (defaults to power3.out) */
  ease?: string;
  /** Whether to trigger upon viewport entry with ScrollTrigger (default: true) */
  scrollTrigger?: boolean;
  /** ScrollTrigger start position (default: "top 90%") */
  triggerStart?: string;
}

/**
 * StaggeredLineReveal
 * Editorial paragraph & standfirst intro text reveal with tight word-level stagger timing.
 * Utilizes masked overflow containers with descender breathing room.
 */
export function StaggeredLineReveal({
  children,
  className = "",
  as: Component = "p",
  delay = 0,
  stagger = 0.02,
  duration = 0.85,
  ease = "power3.out",
  scrollTrigger = true,
  triggerStart = "top 90%",
}: StaggeredLineRevealProps) {
  const containerRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const targets = gsap.utils.toArray<HTMLElement>(".stagger-line-word", containerRef.current);
      if (!targets.length) return;

      gsap.fromTo(
        targets,
        {
          y: "115%",
          opacity: 0,
        },
        {
          y: "0%",
          opacity: 1,
          duration,
          delay,
          stagger,
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
      dependencies: [children, delay, stagger, duration, ease, scrollTrigger, triggerStart],
    }
  );

  const words = typeof children === "string" ? children.trim().split(/\s+/) : [];

  return (
    <Component
      ref={containerRef as any}
      className={`relative w-full min-w-0 ${className}`}
    >
      {words.length > 0 ? (
        words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="inline-block overflow-hidden align-top pb-[0.22em] -mb-[0.22em] mr-[0.28em] will-change-transform"
          >
            <span className="stagger-line-word inline-block will-change-transform">
              {word}
            </span>
          </span>
        ))
      ) : (
        children
      )}
    </Component>
  );
}
