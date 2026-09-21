"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { RevealText } from "./animations/RevealText";
import { CurtainReveal } from "./animations/CurtainReveal";
import { PEXELS_ASSETS } from "../lib/pexels";

/**
 * SeasonalHarvest Component
 * Asymmetrical, staggered produce section with GSAP CurtainReveal animations
 * on a crisp, light background adhering to our Fresh & Dewy design system.
 * Optimized for flawless mobile responsiveness with zero horizontal overflow
 * and unrestricted vertical text heights.
 */
export function SeasonalHarvest() {
  return (
    <section className="bg-white py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-slate-200 text-slate-900 w-full max-w-full overflow-hidden">
      <div className="mx-auto max-w-7xl w-full min-w-0">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 pb-12 sm:pb-16 border-b border-slate-200 w-full min-w-0">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-krishi-brand block">
              Field Yield Register · Active Cycles
            </span>
            <RevealText
              as="h2"
              className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight"
              triggerStart="top 90%"
            >
              Current Field Cycle &amp; Harvest.
            </RevealText>
            <p className="text-slate-600 font-sans text-sm sm:text-base lg:text-lg leading-relaxed pt-2">
              Every crop in our catalog is harvested according to strict dawn protocols and
              distributed through direct cold-chain allocations. We strictly eliminate synthetic agrochemicals,
              nourishing each cultivar with on-farm biological compost.
            </p>
          </div>

          <div className="shrink-0 pt-2 lg:pt-0">
            <Link
              href="/produce"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 sm:px-6 py-3 sm:py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-800 hover:border-krishi-brand hover:text-krishi-brand transition-all duration-300 shadow-crisp-sm group"
            >
              <span>Explore Complete Register</span>
              <ArrowRight className="h-4 w-4 text-slate-600 group-hover:text-krishi-brand group-hover:translate-x-0.5 transition-all" />
            </Link>
          </div>
        </div>

        {/* Asymmetrical Staggered Crop Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start w-full min-w-0">
          {/* Crop 1: Vine Tomatoes (Tall Feature - 5 columns) */}
          <div className="col-span-12 lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none flex flex-col h-auto space-y-5 min-w-0">
            <CurtainReveal
              curtainColor="mint"
              direction="up"
              duration={1.15}
              triggerStart="top 85%"
              className="relative aspect-[4/5] sm:aspect-[3/4] w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-crisp-md"
            >
              <Image
                src={PEXELS_ASSETS.crops.tomatoes.url}
                alt={PEXELS_ASSETS.crops.tomatoes.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <div className="absolute top-4 left-4 z-10 max-w-[calc(100%-2rem)]">
                <span className="inline-block rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-900 border border-slate-200 shadow-sm truncate">
                  Kathmandu Polyhouses
                </span>
              </div>
            </CurtainReveal>

            {/* Card Text Outside Image - Explicitly h-auto with ample bottom clearance */}
            <div className="flex flex-col h-auto space-y-2 pt-1 pb-4 min-w-0">
              <span className="text-[11px] font-mono uppercase tracking-widest text-krishi-brand block">
                Solanum lycopersicum · Protected Culture
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug pb-1">
                Vine-Ripened Polyhouse Tomatoes
              </h3>
              <p className="text-slate-600 font-sans text-sm leading-relaxed pt-1">
                Cultivated inside engineered polyhouse structures with micro-drip fertigation
                and zero chemical pesticides. Hand-harvested in clusters at balanced brix acidity
                for hospitality chains and commercial grocers.
              </p>
              <div className="pt-4 mt-2 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 font-sans">
                <span className="font-mono text-slate-800 font-medium break-words">
                  Wholesale Crates (20 kg / 50 kg)
                </span>
                <Link
                  href="/produce"
                  className="text-krishi-brand hover:text-krishi-forest font-semibold inline-flex items-center gap-1 transition-colors shrink-0"
                >
                  <span>Botanical Specs</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column (7 columns): Crop 2 (Wide) and Crop 3 (Pushed-down Square) */}
          <div className="col-span-12 lg:col-span-7 space-y-12 sm:space-y-16 lg:space-y-20 w-full min-w-0">
            {/* Crop 2: Capsicums / Bell Peppers (Wide Aspect Ratio) */}
            <div className="w-full max-w-md mx-auto lg:max-w-none flex flex-col h-auto space-y-5 min-w-0">
              <CurtainReveal
                curtainColor="brand"
                direction="left"
                duration={1.2}
                triggerStart="top 85%"
                className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-crisp-md"
              >
                <Image
                  src={PEXELS_ASSETS.crops.bellPeppers.url}
                  alt={PEXELS_ASSETS.crops.bellPeppers.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 z-10 max-w-[calc(100%-2rem)]">
                  <span className="inline-block rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-900 border border-slate-200 shadow-sm truncate">
                    High-Tunnels · Continuous Cycle
                  </span>
                </div>
              </CurtainReveal>

              {/* Card Text Outside Image */}
              <div className="flex flex-col h-auto space-y-2 pt-1 pb-4 min-w-0">
                <span className="text-[11px] font-mono uppercase tracking-widest text-krishi-brand block">
                  Capsicum annuum · Precision Fertigation
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug pb-1">
                  Sweet Crisp Bell Peppers
                </h3>
                <p className="text-slate-600 font-sans text-sm leading-relaxed pt-1">
                  Thick-walled, vibrant sweet bell peppers nurtured in drip-irrigated beds.
                  Superior cell firmness and vitamin C retention engineered for cold-chain
                  preservation and multi-day commercial distribution.
                </p>
                <div className="pt-4 mt-2 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 font-sans">
                  <span className="font-mono text-slate-800 font-medium break-words">
                    15 kg Ventilated Dispatch Crates
                  </span>
                  <Link
                    href="/produce"
                    className="text-krishi-brand hover:text-krishi-forest font-semibold inline-flex items-center gap-1 transition-colors shrink-0"
                  >
                    <span>Botanical Specs</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Crop 3: Mustard Greens (Pushed Down Square/Offset) */}
            <div className="w-full max-w-md mx-auto lg:max-w-md lg:ml-auto flex flex-col h-auto space-y-5 min-w-0">
              <CurtainReveal
                curtainColor="mint"
                direction="right"
                duration={1.2}
                triggerStart="top 85%"
                className="relative aspect-square sm:aspect-[4/3] lg:aspect-square w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-crisp-md"
              >
                <Image
                  src={PEXELS_ASSETS.crops.mustardGreens.url}
                  alt={PEXELS_ASSETS.crops.mustardGreens.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 35vw"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 z-10 max-w-[calc(100%-2rem)]">
                  <span className="inline-block rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-900 border border-slate-200 shadow-sm truncate">
                    Surkhet Valley Farm
                  </span>
                </div>
              </CurtainReveal>

              {/* Card Text Outside Image */}
              <div className="flex flex-col h-auto space-y-2 pt-1 pb-4 min-w-0">
                <span className="text-[11px] font-mono uppercase tracking-widest text-krishi-brand block">
                  Brassica juncea · Surkhet Alluvial Silt
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug pb-1">
                  Organic Mustard Greens (Tori ko Saag)
                </h3>
                <p className="text-slate-600 font-sans text-sm leading-relaxed pt-1">
                  Clipped before sunrise while morning dew is active on leaves. Rich alluvial
                  soil and aged vermicast impart an unmistakable authentic peppery savor prized by culinary institutions.
                </p>
                <div className="pt-4 mt-2 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 font-sans">
                  <span className="font-mono text-slate-800 font-medium break-words">
                    Dawn Harvest Dispatch · 04:00 NPT
                  </span>
                  <Link
                    href="/produce"
                    className="text-krishi-brand hover:text-krishi-forest font-semibold inline-flex items-center gap-1 transition-colors shrink-0"
                  >
                    <span>Botanical Specs</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
