"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RevealText } from "./animations/RevealText";
import { PEXELS_ASSETS } from "../lib/pexels";

/**
 * Hero Component
 * Asymmetrical, architectural 12-column grid Hero section with background video,
 * GSAP text reveal, and Fresh & Dewy brand styling.
 */
export function Hero() {
  const [canPlayVideo, setCanPlayVideo] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)"
    );

    let timeoutId: ReturnType<typeof setTimeout>;
    let idleId: number | undefined;

    const startVideo = () => {
      if (mediaQuery.matches) {
        setCanPlayVideo(true);
      }
    };

    const scheduleVideoLoad = () => {
      if (!mediaQuery.matches) return;
      if ("requestIdleCallback" in window) {
        idleId = (window as any).requestIdleCallback(startVideo, { timeout: 2000 });
      } else {
        timeoutId = setTimeout(startVideo, 1200);
      }
    };

    if (document.readyState === "complete") {
      scheduleVideoLoad();
    } else {
      window.addEventListener("load", scheduleVideoLoad, { once: true });
    }

    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) {
        scheduleVideoLoad();
      } else {
        setCanPlayVideo(false);
      }
    };
    mediaQuery.addEventListener("change", handler);

    return () => {
      window.removeEventListener("load", scheduleVideoLoad);
      mediaQuery.removeEventListener("change", handler);
      if (idleId && "cancelIdleCallback" in window) {
        (window as any).cancelIdleCallback(idleId);
      }
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full max-w-full flex items-end pb-16 sm:pb-24 pt-28 sm:pt-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-krishi-dark">
      {/* Background Poster Image (Immediate, self-hosted LCP element) */}
      <Image
        src="/hero-poster.jpg"
        alt="Aerial view of green agricultural fields at Green Nepal Agricultural Farm"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Background Video (deferred until after load/idle, >=768px & reduced-motion: no-preference) */}
      {canPlayVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={PEXELS_ASSETS.heroVideo.videoUrl} type="video/mp4" />
        </video>
      )}

      {/* Dark Overlay (mix-blend-multiply to ensure high-contrast text legibility) */}
      <div className="absolute inset-0 bg-krishi-dark/60 mix-blend-multiply pointer-events-none" />

      {/* Additional subtle gradient for cinematic depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-krishi-dark via-krishi-dark/40 to-transparent pointer-events-none" />

      {/* 12-Column Asymmetrical Grid Layout with dimension security to prevent CLS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full relative z-10 max-w-7xl mx-auto items-end min-h-[496px]">
        {/* Left Column (lg:col-span-8): Primary headline and subheadline */}
        <div className="lg:col-span-8 flex flex-col justify-end">
          {/* Eyebrow */}
          <div className="text-krishi-cream font-sans uppercase text-xs tracking-widest font-semibold mb-6 flex items-center gap-2">
            <span>Surkhet &amp; Kathmandu Valley · Commercial Farm</span>
          </div>

          {/* Primary Headline with RevealText GSAP component */}
          <RevealText
            as="h1"
            className="text-krishi-cream font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-editorial tracking-tight break-words"
            delay={0.15}
            duration={1.05}
          >
            Precision agriculture rooted in the living soil of Nepal.
          </RevealText>

          {/* Subheadline */}
          <p className="text-slate-300 font-sans text-lg md:text-xl max-w-xl mt-8 leading-relaxed">
            Cultivating high-yield, organic staples and highland fruits for wholesale
            distribution across Nepal.
          </p>
        </div>

        {/* Right Column (lg:col-span-4): Primary CTA and operational metadata */}
        <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end gap-6">
          {/* Clean Minimalist Operational Dispatch Card */}
          <div className="border-l-2 border-krishi-mint/40 pl-4 py-1 text-left">
            <span className="block text-[11px] font-semibold tracking-widest text-krishi-mint uppercase">
              Daily Wholesale Dispatch
            </span>
            <p className="text-sm font-medium text-slate-200 mt-0.5">
              04:00 – 12:00 NPT · Surkhet &amp; Kathmandu Hubs
            </p>
            <p className="text-xs text-slate-400 mt-0.5">
              Harvested at dawn · Same-day cold dispatch
            </p>
          </div>

          {/* CTA Button */}
          <Link
            href="/produce"
            prefetch={true}
            className="inline-flex items-center justify-center bg-krishi-mint text-krishi-mint-text rounded-full px-8 py-4 font-sans font-semibold hover:bg-white transition-colors duration-300 shadow-crisp-md group"
          >
            Explore Harvest Catalog
            <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
