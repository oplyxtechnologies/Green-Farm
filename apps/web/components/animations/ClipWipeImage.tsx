"use client";

import React, { useRef } from "react";
import Image, { ImageProps } from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface ClipWipeImageProps
  extends Omit<Partial<ImageProps>, "alt" | "src"> {
  /** Source URL for Next.js Image */
  src?: ImageProps["src"];
  /** Alt text for accessibility */
  alt?: string;
  /** Tailwind / CSS classes for outer container */
  className?: string;
  /** Tailwind / CSS classes directly for inner Image */
  imageClassName?: string;
  /** Direction of the wipe reveal (default: "right" = reveals left to right) */
  direction?: "right" | "left" | "top" | "bottom";
  /** Animation duration in seconds */
  duration?: number;
  /** Delay before animation fires */
  delay?: number;
  /** GSAP easing curve */
  ease?: string;
  /** Whether to pair the clip reveal with a subtle un-zoom scale */
  scaleImage?: boolean;
  /** Whether to trigger upon viewport entry */
  scrollTrigger?: boolean;
  /** ScrollTrigger viewport entry start position */
  triggerStart?: string;
  /** Optional custom child node if wrapping arbitrary element */
  children?: React.ReactNode;
}

const CLIP_INITIAL_MAP = {
  right: "inset(0% 100% 0% 0%)",
  left: "inset(0% 0% 0% 100%)",
  bottom: "inset(0% 0% 100% 0%)",
  top: "inset(100% 0% 0% 0%)",
};

/**
 * ClipWipeImage
 * Blocky, architectural clip-path wipe animation triggered upon entering the viewport.
 */
export function ClipWipeImage({
  src,
  alt = "Green Nepal Agricultural Farm Image",
  className = "",
  imageClassName = "",
  direction = "right",
  duration = 1.2,
  delay = 0,
  ease = "power3.inOut",
  scaleImage = false,
  scrollTrigger = true,
  triggerStart = "top 85%",
  children,
  fill,
  width,
  height,
  sizes,
  priority,
  quality,
  placeholder,
  blurDataURL,
  ...rest
}: ClipWipeImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wipeRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const initialClip = CLIP_INITIAL_MAP[direction] || CLIP_INITIAL_MAP.right;

  useGSAP(
    () => {
      if (!wipeRef.current || !containerRef.current) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        if (!wipeRef.current || !containerRef.current) return;

        // Dynamically set initial clipPath only when motion is allowed
        gsap.set(wipeRef.current, { clipPath: initialClip });

        gsap.to(wipeRef.current, {
          clipPath: "inset(0% 0% 0% 0%)",
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
        });

        if (scaleImage && innerRef.current) {
          gsap.set(innerRef.current, { scale: 1.15 });
          gsap.to(innerRef.current, {
            scale: 1,
            duration: duration * 1.15,
            delay,
            ease: "power2.out",
            scrollTrigger: scrollTrigger
              ? {
                  trigger: containerRef.current,
                  start: triggerStart,
                  once: true,
                }
              : undefined,
          });
        }
      });
    },
    {
      scope: containerRef,
      dependencies: [direction, duration, delay, ease, scaleImage, scrollTrigger, initialClip],
    }
  );

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        ref={wipeRef}
        className="relative h-full w-full will-change-[clip-path]"
      >
        <div
          ref={innerRef}
          className="relative h-full w-full will-change-transform"
        >
          {children ? (
            children
          ) : src ? (
            <Image
              src={src}
              alt={alt}
              fill={fill}
              width={width}
              height={height}
              sizes={sizes}
              priority={priority}
              quality={quality}
              placeholder={placeholder}
              blurDataURL={blurDataURL}
              className={`object-cover ${imageClassName}`}
              {...rest}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
