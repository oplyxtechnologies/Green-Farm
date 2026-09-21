"use client";

import React from "react";
import Link from "next/link";
import { RevealText } from "./animations/RevealText";
import { PEXELS_ASSETS } from "../lib/pexels";

/**
 * Hero Component
 * Asymmetrical, architectural 12-column grid Hero section with background video,
 * GSAP text reveal, and Fresh & Dewy brand styling.
 */
export function Hero() {
  return (
    <section className="relative min-h-screen w-full max-w-full flex items-end pb-16 sm:pb-24 pt-28 sm:pt-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-krishi-dark">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={PEXELS_ASSETS.heroVideo.posterUrl}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={PEXELS_ASSETS.heroVideo.videoUrl} type="video/mp4" />
      </video>

      {/* Dark Overlay (mix-blend-multiply to ensure high-contrast text legibility) */}
      <div className="absolute inset-0 bg-krishi-dark/60 mix-blend-multiply" />

      {/* Additional subtle gradient for cinematic depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-krishi-dark via-krishi-dark/40 to-transparent pointer-events-none" />

      {/* 12-Column Asymmetrical Grid Layout */}
      <div className="grid grid-cols-12 gap-8 w-full relative z-10 max-w-7xl mx-auto items-end">
        {/* Left Column (col-span-8): Primary headline and subheadline */}
        <div className="col-span-12 lg:col-span-8">
          {/* Eyebrow */}
          <div className="text-krishi-cream  text-xs tracking-widest  mb-6 flex items-center gap-2">
        
            <span>Surkhet &amp; Kathmandu Valley · Commercial Farm</span>
          </div>

          {/* Primary Headline with RevealText GSAP component */}
          <RevealText
            as="h1"
            className="text-krishi-cream font-heading text-4xl sm:text-6xl md:text-8xl font-bold leading-editorial tracking-tight break-words"
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

        {/* Right Column (col-span-4): Primary CTA and operational metadata */}
        <div className="col-span-12 lg:col-span-4 flex flex-col items-start lg:items-end justify-end gap-6">
          {/* Operational Metadata */}
          <div className="flex flex-col text-left lg:text-right space-y-1.5 border-l-2 lg:border-l-0 lg:border-r-2 border-krishi-mint/40 pl-4 lg:pl-0 lg:pr-4">
            <span className="font-mono text-[11px] uppercase tracking-widest text-krishi-mint font-semibold">
              Daily Wholesale Dispatch
            </span>
            <p className="text-xs text-slate-300 font-sans">
              04:00 – 12:00 NPT · Surkhet &amp; Kathmandu Hubs
            </p>
            <span className="text-[10px] text-slate-400 font-mono">
              Direct Farm Allocation · Certified Organic
            </span>
          </div>

          {/* CTA Button */}
          <Link
            href="/produce"
            className="inline-flex items-center justify-center bg-krishi-mint text-krishi-mint-text rounded-full px-8 py-4 font-sans font-semibold hover:bg-white transition-colors duration-300 shadow-crisp-md group"
          >
            <span>Explore Harvest Catalog →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
