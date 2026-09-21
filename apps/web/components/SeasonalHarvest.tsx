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
 */
export function SeasonalHarvest() {
  return (
    <section className="bg-white py-32 px-8 border-b border-slate-200 text-slate-900 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-16 border-b border-slate-200">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-krishi-brand block">
              Field Yield Register · Active Cycles
            </span>
            <RevealText
              as="h2"
              className="font-heading text-4xl sm:text-6xl font-bold text-slate-900 tracking-tight leading-tight"
              triggerStart="top 90%"
            >
              Current Field Cycle &amp; Harvest.
            </RevealText>
            <p className="text-slate-600 font-sans text-base sm:text-lg leading-relaxed pt-2">
              Every crop in our catalog is harvested according to strict dawn protocols and
              distributed through direct cold-chain allocations. We strictly eliminate synthetic agrochemicals,
              nourishing each cultivar with on-farm biological compost.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/produce"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-800 hover:border-krishi-brand hover:text-krishi-brand transition-all duration-300 shadow-crisp-sm group"
            >
              <span>Explore Complete Register</span>
              <ArrowRight className="h-4 w-4 text-slate-600 group-hover:text-krishi-brand group-hover:translate-x-0.5 transition-all" />
            </Link>
          </div>
        </div>

        {/* Asymmetrical Staggered Crop Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Crop 1: Vine Tomatoes (Tall Feature - 5 columns) */}
          <div className="col-span-12 lg:col-span-5 space-y-5">
            <CurtainReveal
              curtainColor="mint"
              direction="up"
              duration={1.15}
              triggerStart="top 85%"
              className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-crisp-md"
            >
              <Image
                src={PEXELS_ASSETS.crops.tomatoes.url}
                alt={PEXELS_ASSETS.crops.tomatoes.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <div className="absolute top-4 left-4 z-10">
                <span className="rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-900 border border-slate-200 shadow-sm">
                  Kathmandu Polyhouses
                </span>
              </div>
            </CurtainReveal>

            {/* Card Text Outside Image */}
            <div className="space-y-2 pt-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-krishi-brand block">
                Solanum lycopersicum · Protected Culture
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Vine-Ripened Polyhouse Tomatoes
              </h3>
              <p className="text-slate-600 font-sans text-sm leading-relaxed pt-1">
                Cultivated inside engineered polyhouse structures with micro-drip fertigation
                and zero chemical pesticides. Hand-harvested in clusters at balanced brix acidity
                for hospitality chains and commercial grocers.
              </p>
              <div className="pt-4 mt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-sans">
                <span className="font-mono text-slate-800 font-medium">Wholesale Crates (20 kg / 50 kg)</span>
                <Link
                  href="/produce"
                  className="text-krishi-brand hover:text-krishi-forest font-semibold inline-flex items-center gap-1 transition-colors"
                >
                  <span>Botanical Specs</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column (7 columns): Crop 2 (Wide) and Crop 3 (Pushed-down Square) */}
          <div className="col-span-12 lg:col-span-7 space-y-16 lg:space-y-20">
            {/* Crop 2: Capsicums / Bell Peppers (Wide Aspect Ratio) */}
            <div className="space-y-5">
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
                <div className="absolute top-4 left-4 z-10">
                  <span className="rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-900 border border-slate-200 shadow-sm">
                    High-Tunnels · Continuous Cycle
                  </span>
                </div>
              </CurtainReveal>

              {/* Card Text Outside Image */}
              <div className="space-y-2 pt-1">
                <span className="text-[11px] font-mono uppercase tracking-widest text-krishi-brand block">
                  Capsicum annuum · Precision Fertigation
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  Sweet Crisp Bell Peppers
                </h3>
                <p className="text-slate-600 font-sans text-sm leading-relaxed pt-1">
                  Thick-walled, vibrant sweet bell peppers nurtured in drip-irrigated beds.
                  Superior cell firmness and vitamin C retention engineered for cold-chain
                  preservation and multi-day commercial distribution.
                </p>
                <div className="pt-4 mt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-sans">
                  <span className="font-mono text-slate-800 font-medium">15 kg Ventilated Dispatch Crates</span>
                  <Link
                    href="/produce"
                    className="text-krishi-brand hover:text-krishi-forest font-semibold inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Botanical Specs</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Crop 3: Mustard Greens (Pushed Down Square/Offset) */}
            <div className="space-y-5 lg:max-w-md lg:ml-auto">
              <CurtainReveal
                curtainColor="mint"
                direction="right"
                duration={1.2}
                triggerStart="top 85%"
                className="relative aspect-square w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-crisp-md"
              >
                <Image
                  src={PEXELS_ASSETS.crops.mustardGreens.url}
                  alt={PEXELS_ASSETS.crops.mustardGreens.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 35vw"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-900 border border-slate-200 shadow-sm">
                    Surkhet Valley Farm
                  </span>
                </div>
              </CurtainReveal>

              {/* Card Text Outside Image */}
              <div className="space-y-2 pt-1">
                <span className="text-[11px] font-mono uppercase tracking-widest text-krishi-brand block">
                  Brassica juncea · Surkhet Alluvial Silt
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Organic Mustard Greens (Tori ko Saag)
                </h3>
                <p className="text-slate-600 font-sans text-sm leading-relaxed pt-1">
                  Clipped before sunrise while morning dew is active on leaves. Rich alluvial
                  soil and aged vermicast impart an unmistakable authentic peppery savor prized by culinary institutions.
                </p>
                <div className="pt-4 mt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-sans">
                  <span className="font-mono text-slate-800 font-medium">Dawn Harvest Dispatch · 04:00 NPT</span>
                  <Link
                    href="/produce"
                    className="text-krishi-brand hover:text-krishi-forest font-semibold inline-flex items-center gap-1 transition-colors"
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
