"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface CurtainRevealProps {
  /** Elements to be revealed (Image, text card, video container) */
  children: React.ReactNode;
  /** Tailwind / CSS classes applied to the outer container */
  className?: string;
  /** Solid background color preset or custom class for the sliding curtain overlay */
  curtainColor?: "dark" | "mint" | "brand" | "forest" | "cream" | string;
  /** Additional Tailwind classes for the curtain overlay div */
  curtainClassName?: string;
  /** Direction the curtain slides away to reveal the content */
  direction?: "up" | "down" | "left" | "right";
  /** Initial scale of the inner content before settling at 1 */
  scaleInitial?: number;
  /** Animation duration in seconds */
  duration?: number;
  /** Delay before animation fires */
  delay?: number;
  /** GSAP easing curve */
  ease?: string;
  /** Whether to trigger upon viewport entry */
  scrollTrigger?: boolean;
  /** ScrollTrigger viewport entry start position */
  triggerStart?: string;
}

const COLOR_MAP: Record<string, string> = {
  dark: "bg-krishi-dark",
  mint: "bg-krishi-mint",
  brand: "bg-krishi-brand",
  forest: "bg-krishi-forest",
  cream: "bg-krishi-cream",
};

/**
 * CurtainReveal
 * Premium block-reveal transition that slides a solid overlay curtain away
 * while simultaneously zooming the inner media from an enlarged scale down to 1.
 */
export function CurtainReveal({
  children,
  className = "",
  curtainColor = "dark",
  curtainClassName = "",
  direction = "up",
  scaleInitial = 1.1,
  duration = 1.1,
  delay = 0,
  ease = "power4.inOut",
  scrollTrigger = true,
  triggerStart = "top 85%",
}: CurtainRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const resolvedColorClass =
    COLOR_MAP[curtainColor] ||
    (curtainColor.startsWith("bg-") ? curtainColor : `bg-[${curtainColor}]`);

  useGSAP(
    () => {
      if (!containerRef.current || !curtainRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: scrollTrigger
          ? {
              trigger: containerRef.current,
              start: triggerStart,
              once: true,
            }
          : undefined,
        delay,
      });

      // Define curtain transform coordinates based on direction
      const curtainTarget: gsap.TweenVars = {
        duration,
        ease,
      };

      if (direction === "up") curtainTarget.yPercent = -100;
      else if (direction === "down") curtainTarget.yPercent = 100;
      else if (direction === "right") curtainTarget.xPercent = 100;
      else if (direction === "left") curtainTarget.xPercent = -100;

      // Slide the curtain overlay out
      tl.to(curtainRef.current, curtainTarget, 0);

      // Concurrently scale content from initial scale to 1.0
      if (contentRef.current) {
        tl.fromTo(
          contentRef.current,
          { scale: scaleInitial },
          {
            scale: 1,
            duration: duration * 1.1,
            ease: "power2.out",
          },
          0
        );
      }
    },
    {
      scope: containerRef,
      dependencies: [
        direction,
        scaleInitial,
        duration,
        delay,
        ease,
        scrollTrigger,
        triggerStart,
      ],
    }
  );

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Content wrapper with scale transform */}
      <div
        ref={contentRef}
        className="relative h-full w-full will-change-transform"
      >
        {children}
      </div>

      {/* Solid Curtain Overlay */}
      <div
        ref={curtainRef}
        className={`absolute inset-0 z-20 pointer-events-none will-change-transform ${resolvedColorClass} ${curtainClassName}`}
      />
    </div>
  );
}
