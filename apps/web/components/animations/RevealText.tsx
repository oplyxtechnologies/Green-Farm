"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface RevealTextProps {
  /** The text string to reveal */
  children: string;
  /** Optional Tailwind / CSS classes applied to the container */
  className?: string;
  /** Delay in seconds before animation begins */
  delay?: number;
  /** Stagger time in seconds between words */
  stagger?: number;
  /** Duration in seconds for each word transition */
  duration?: number;
  /** GSAP easing curve (defaults to power4.out) */
  ease?: string;
  /** Semantic HTML tag for typography */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  /** Whether to split the text into words for staggered masking (default: true) */
  splitWords?: boolean;
  /** Whether to trigger upon viewport entry with ScrollTrigger (default: true) */
  scrollTrigger?: boolean;
  /** ScrollTrigger start position (default: "top 90%") */
  triggerStart?: string;
}

/**
 * RevealText
 * Awwwards-style typography reveal using overflow-hidden masks and GSAP transforms.
 */
export function RevealText({
  children,
  className = "",
  delay = 0,
  stagger = 0.035,
  duration = 0.9,
  ease = "power4.out",
  as: Component = "div",
  splitWords = true,
  scrollTrigger = true,
  triggerStart = "top 90%",
}: RevealTextProps) {
  const containerRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const targets = splitWords
        ? containerRef.current.querySelectorAll(".reveal-word")
        : containerRef.current.querySelectorAll(".reveal-block");

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
          stagger: splitWords ? stagger : 0,
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
      dependencies: [children, delay, stagger, duration, ease, splitWords, scrollTrigger],
    }
  );

  const words = typeof children === "string" ? children.trim().split(/\s+/) : [];

  return (
    <Component ref={containerRef as any} className={`relative ${className}`}>
      {splitWords ? (
        words.map((word, i) => (
          <React.Fragment key={i}>
            <span className="inline-block overflow-hidden align-top pb-[0.18em] -mb-[0.18em]">
              <span className="reveal-word inline-block will-change-transform">
                {word}
              </span>
            </span>
            {i < words.length - 1 && " "}
          </React.Fragment>
        ))
      ) : (
        <span className="inline-block overflow-hidden w-full align-top pb-[0.18em] -mb-[0.18em]">
          <span className="reveal-block inline-block will-change-transform w-full">
            {children}
          </span>
        </span>
      )}
    </Component>
  );
}
