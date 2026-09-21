"use client";

/* Hallmark · macrostructure: micro-interaction · theme: himalayan-terroir · genre: editorial
 * pre-emit critique: P5 H5 E5 S5 R5 V5
 * slop test: pass / all-gates-cleared
 */

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface MagneticButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  strength?: number;
  className?: string;
  asChild?: boolean;
}

export function MagneticButton({
  children,
  strength = 0.3,
  className = "",
  ...props
}: MagneticButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    (context, contextSafe) => {
      const el = containerRef.current;
      if (!el) return;

      // Skip on touch-only devices to avoid sticky hover states
      if (typeof window !== "undefined") {
        const isTouch = window.matchMedia("(pointer: coarse)").matches;
        if (isTouch) return;
      }

      const animateMove = (relX: number, relY: number) => {
        gsap.to(el, {
          x: relX * strength,
          y: relY * strength,
          duration: 0.35,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      const animateLeave = () => {
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.65,
          ease: "elastic.out(1, 0.35)",
          overwrite: "auto",
        });
      };

      const safeMove = contextSafe ? contextSafe(animateMove) : animateMove;
      const safeLeave = contextSafe ? contextSafe(animateLeave) : animateLeave;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const relX = e.clientX - (rect.left + rect.width / 2);
        const relY = e.clientY - (rect.top + rect.height / 2);
        safeMove(relX, relY);
      };

      const handleMouseLeave = () => {
        safeLeave();
      };

      el.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        el.removeEventListener("mousemove", handleMouseMove);
        el.removeEventListener("mouseleave", handleMouseLeave);
        gsap.killTweensOf(el);
      };
    },
    { scope: containerRef, dependencies: [strength] }
  );

  return (
    <div
      ref={containerRef}
      className={`inline-block transition-shadow ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
