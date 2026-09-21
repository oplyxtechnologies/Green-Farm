"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Compass, Droplets, SunMedium, ShieldCheck } from "lucide-react";
import { RevealText } from "./animations/RevealText";
import { ClipWipeImage } from "./animations/ClipWipeImage";
import { PEXELS_ASSETS } from "../lib/pexels";

/**
 * TerroirFacilities Component
 * Asymmetrical editorial spread showcasing Kathmandu polyhouse facilities
 * and expansive Surkhet alluvial plains using clip-path wipe reveals.
 */
export function TerroirFacilities() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-krishi-cream border-b border-slate-200 w-full max-w-full overflow-hidden">
      <div className="mx-auto max-w-7xl space-y-20 lg:space-y-32 w-full min-w-0">
        {/* Section Lead / Kicker */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-sans font-semibold uppercase tracking-widest text-krishi-brand block">
            Agronomic Terroir &amp; Infrastructure
          </span>
          <RevealText
            as="h2"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight"
            triggerStart="top 90%"
          >
            Engineered cultivation across complementary Nepalese microclimates.
          </RevealText>
          <p className="text-slate-600 font-sans text-base sm:text-lg leading-relaxed pt-2">
            By pairing climate-shielded polyhouses in the Kathmandu Valley with wide
            river-fed alluvial acreage in Surkhet, we maintain continuous 12-month commercial yields
            while setting regional benchmarks in aquifer conservation.
          </p>
        </div>

        {/* Row 1: Kathmandu Polyhouses (Text Left 5 cols, Image Right 6 cols offset by 1) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-krishi-forest">
              <span className="h-1.5 w-1.5 rounded-full bg-krishi-forest" />
              <span>Kathmandu Valley · 1,400m Elevation</span>
            </div>

            <RevealText
              as="h3"
              className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 leading-snug tracking-tight"
              triggerStart="top 85%"
            >
              Climate-Controlled Polyhouses in Kathmandu.
            </RevealText>

            <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
              Our climate-shielded polyhouses temper extreme monsoon cloudbursts, hail,
              and winter radiation frosts. Utilizing automated precision drip irrigation and
              calibrated ventilation, each structure operates as a protected growing environment.
            </p>

            <p className="text-slate-600 font-sans text-sm leading-relaxed">
              This controlled environment eliminates synthetic pesticide requirements through
              zero synthetic pesticides, beneficial insects, and organic neem emulsions,
              delivering pristine vine tomatoes, capsicums, and heirloom varieties out of season.
            </p>

            {/* Agronomic Feature Badges */}
            <div className="pt-2 flex flex-wrap gap-2">
              <span className="inline-flex items-center px-2.5 py-1 text-xs font-medium tracking-tight text-slate-700 bg-slate-100 rounded-md">
                Climate-Shielded Polyhouses
              </span>
              <span className="inline-flex items-center px-2.5 py-1 text-xs font-medium tracking-tight text-slate-700 bg-slate-100 rounded-md">
                Precision Drip Irrigation
              </span>
              <span className="inline-flex items-center px-2.5 py-1 text-xs font-medium tracking-tight text-slate-700 bg-slate-100 rounded-md">
                Zero Synthetic Pesticides
              </span>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                prefetch={true}
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-krishi-brand border-b border-slate-300 pb-0.5 transition-colors"
              >
                <span>Examine Polyhouse Telemetry</span>
                <ArrowRight className="h-4 w-4 text-krishi-brand" />
              </Link>
            </div>
          </div>

          {/* Image Column (6 cols, offset by 1) */}
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-crisp-md">
              <ClipWipeImage
                src={PEXELS_ASSETS.terroir.polyhouse.url}
                alt={PEXELS_ASSETS.terroir.polyhouse.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                direction="right"
                scaleImage
                triggerStart="top 85%"
                className="h-full w-full"
                imageClassName="object-cover"
              />
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center px-2.5 py-1 text-xs font-medium tracking-tight text-slate-800 bg-white/95 backdrop-blur-md rounded-md border border-slate-200/60 shadow-sm">
                  Protected Culture · Polyhouse Method
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Surkhet Alluvial Fields (Image Left 6 cols, Text Right 5 cols offset by 1) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Image Column (6 cols) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-crisp-md">
              <ClipWipeImage
                src={PEXELS_ASSETS.terroir.surkhetFarmland.url}
                alt={PEXELS_ASSETS.terroir.surkhetFarmland.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                direction="left"
                scaleImage
                triggerStart="top 85%"
                className="h-full w-full"
                imageClassName="object-cover"
              />
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center px-2.5 py-1 text-xs font-medium tracking-tight text-slate-800 bg-white/95 backdrop-blur-md rounded-md border border-slate-200/60 shadow-sm">
                  Alluvial Valley Basin · River-Irrigated Plot
                </span>
              </div>
            </div>
          </div>

          {/* Text Column (5 cols, offset by 1) */}
          <div className="lg:col-span-5 lg:col-start-8 space-y-6 order-1 lg:order-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-krishi-forest">
              <span className="h-1.5 w-1.5 rounded-full bg-krishi-forest" />
              <span>Surkhet Valley Basin · Birendranagar</span>
            </div>

            <RevealText
              as="h3"
              className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 leading-snug tracking-tight"
              triggerStart="top 85%"
            >
              Expansive River-Irrigated Plots in Birendranagar.
            </RevealText>

            <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
              In the fertile river basin of Surkhet, our open agricultural plots leverage
              nutrient-rich alluvial loam. Powered by high-efficiency solar pumping and
              precision drip lines, we deliver measured hydration directly matched to crop needs.
            </p>

            <p className="text-slate-600 font-sans text-sm leading-relaxed">
              We feed the soil biology through intensive 120-day vermicompost cycles and
              nitrogen-fixing green manure covers. This restores soil carbon and microbial vitality,
              yielding crisp mustard greens, brassicas, and nutrient-dense seasonal staples.
            </p>

            {/* Agronomic Feature Badges */}
            <div className="pt-2 flex flex-wrap gap-2">
              <span className="inline-flex items-center px-2.5 py-1 text-xs font-medium tracking-tight text-slate-700 bg-slate-100 rounded-md">
                Solar-Powered Drip Network
              </span>
              <span className="inline-flex items-center px-2.5 py-1 text-xs font-medium tracking-tight text-slate-700 bg-slate-100 rounded-md">
                Alluvial Silt Regeneration
              </span>
              <span className="inline-flex items-center px-2.5 py-1 text-xs font-medium tracking-tight text-slate-700 bg-slate-100 rounded-md">
                Natural Soil Conservation
              </span>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                prefetch={true}
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-krishi-brand border-b border-slate-300 pb-0.5 transition-colors"
              >
                <span>Read Soil Microbiology Report</span>
                <ArrowRight className="h-4 w-4 text-krishi-brand" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
