/* Hallmark · macrostructure: editorial-spread · theme: fresh-dewy · genre: commercial
 * pre-emit critique: P5 H5 E5 S5 R5 V5
 * slop test: pass / all-gates-cleared
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "../components/Hero";
import { TerroirFacilities } from "../components/TerroirFacilities";
import { SeasonalHarvest } from "../components/SeasonalHarvest";
import { MagneticButton } from "../components/MagneticButton";
import { ArrowRight, Sprout, SunMedium, Droplets } from "lucide-react";
import {
  RevealText,
  FadeDriftText,
  StaggeredLineReveal,
} from "../components/animations";

export const metadata: Metadata = {
  title: "Green Nepal Agricultural Farm | Organic Agriculture",
  description:
    "Commercial organic agriculture, sustainable polyhouse cultivation, and wholesale produce in Birendranagar, Surkhet and Kathmandu, Nepal.",
};

const agronomicPillars = [
  {
    num: "01",
    title: "Alluvial Soil Enrichment & Vermicomposting",
    desc: "We feed the microbiology of our Surkhet Valley soil using on-farm organic compost and green manure, completely replacing synthetic agrochemicals.",
    icon: Sprout,
  },
  {
    num: "02",
    title: "Precision Solar Drip & Aquifer Protection",
    desc: "Automated solar-powered drip irrigation delivers root-zone moisture according to transpiration rates, preserving local groundwater tables.",
    icon: Droplets,
  },
  {
    num: "03",
    title: "Microclimate Controlled Polyhouses",
    desc: "In our Kathmandu Valley installations, multi-span structures temper monsoon deluges and winter morning frosts for steady year-round harvest.",
    icon: SunMedium,
  },
];

export default function HomePage() {
  return (
    <div className="bg-background text-text">
      {/* 1. Asymmetrical Video Hero with GSAP RevealText */}
      <Hero />

      {/* 2. Terroir & Facilities (Asymmetrical Alternating Layout with ClipWipeImage) */}
      <TerroirFacilities />

      {/* 3. Seasonal Harvest (Staggered Asymmetrical Grid with CurtainReveal) */}
      <SeasonalHarvest />

      {/* 4. Editorial Manifesto & Terroir Note (Asymmetrical Spread) */}
      <section className="py-24 border-b border-slate-200 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <FadeDriftText as="span" className="text-xs font-semibold uppercase tracking-wider text-krishi-brand block">
                Field Dispatch · Terroir &amp; Technique
              </FadeDriftText>
              <RevealText
                as="h2"
                className="font-heading text-3xl sm:text-5xl text-slate-900 font-bold leading-display tracking-tight"
                triggerStart="top 85%"
              >
                Modern agricultural discipline, grounded in the natural rhythm of Nepalese earth.
              </RevealText>
              <StaggeredLineReveal
                className="text-base sm:text-lg text-slate-700 font-sans leading-relaxed pt-2"
                stagger={0.02}
                triggerStart="top 85%"
              >
                Nepal’s diverse agro-climatic zones offer extraordinary potential for commercial organic cultivation. At Green Nepal Agricultural Farm, we eliminate the compromise between high harvest tonnage and long-term soil vitality.
              </StaggeredLineReveal>
              <p className="text-sm text-slate-600 font-sans leading-relaxed">
                By investing in closed-loop compost cycles, natural predator pest
                management, and automated drip networks, our operations demonstrate that
                commercial-scale food security in Nepal can be both ecologically restorative
                and commercially profitable.
              </p>
              <div className="pt-4">
                <Link
                  href="/about"
                  prefetch={true}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-krishi-brand border-b border-slate-300 pb-0.5"
                >
                  Read our full agricultural manifesto
                  <ArrowRight className="h-4 w-4 text-krishi-brand" />
                </Link>
              </div>
            </div>

            {/* Right Detailed Botanical List */}
            <div className="lg:col-span-5 space-y-6 lg:border-l lg:border-slate-200 lg:pl-10">
              <FadeDriftText as="span" className="text-xs font-semibold uppercase tracking-wider text-slate-600 block">
                Agronomic Disciplines
              </FadeDriftText>

              <div className="space-y-6 divide-y divide-slate-200">
                {agronomicPillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <FadeDriftText
                      key={pillar.num}
                      delay={idx * 0.1}
                      triggerStart="top 88%"
                      className="pt-5 first:pt-0 space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-heading text-krishi-brand font-bold text-sm">
                          {pillar.num}
                        </span>
                        <Icon className="h-4 w-4 text-krishi-brand" />
                      </div>
                      <h3 className="font-heading text-lg font-bold text-slate-900">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-sans">
                        {pillar.desc}
                      </p>
                    </FadeDriftText>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High-Impact Harvest Advisory Banner (bg-krishi-mint & text-krishi-mint-text) */}
      <section className="bg-krishi-mint text-krishi-mint-text py-8 px-4 sm:px-6 lg:px-8 border-y border-krishi-brand/20 w-full max-w-full overflow-hidden">
        <FadeDriftText className="mx-auto max-w-7xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl w-full">
            <div className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 px-3 py-1 rounded-full bg-krishi-mint-text text-krishi-mint text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-wider w-fit max-w-full">
              <span className="whitespace-nowrap">Seasonal Harvest Notice</span>
              <span className="opacity-60 hidden xs:inline">·</span>
              <span className="whitespace-nowrap">Direct Farm Allocation</span>
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold leading-tight">
              Pre-Monsoon &amp; Highland Harvest Supply Agreements Now Open
            </h3>
            <p className="text-xs sm:text-sm font-sans opacity-90 leading-relaxed">
              Lock in guaranteed weekly tonnage of organic vegetables, greens, and grains with fixed seasonal pricing and daily dawn dispatch across Nepal.
            </p>
          </div>

          <div className="shrink-0 w-full sm:w-auto pt-1 sm:pt-0">
            <MagneticButton className="w-full sm:w-auto">
              <Link
                href={`/contact?${new URLSearchParams({
                  subject: "Commercial Supply Contract",
                }).toString()}`}
                prefetch={true}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-krishi-mint-text px-6 py-3 font-sans text-xs font-bold text-krishi-mint hover:bg-black transition-colors shadow-sm text-center"
              >
                <span>Reserve Harvest Allocation</span>
                <ArrowRight className="h-3.5 w-3.5 text-krishi-mint shrink-0" />
              </Link>
            </MagneticButton>
          </div>
        </FadeDriftText>
      </section>

      {/* 5. Commercial Procurement & Logistics Section */}
      <section className="py-16 sm:py-20 border-t border-slate-200 bg-slate-50 w-full max-w-full overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeDriftText triggerStart="top 85%" className="rounded-2xl sm:rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-10 lg:p-14 text-slate-100 shadow-crisp-lg w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-krishi-mint block">
                  B2B Commercial Distribution
                </span>
                <RevealText
                  as="h3"
                  className="font-heading text-xl sm:text-3xl lg:text-4xl text-white font-bold leading-tight"
                  triggerStart="top 85%"
                >
                  Reliable tonnage, fixed seasonal schedules, and uncompromised organic integrity.
                </RevealText>
                <p className="text-sm text-slate-300 font-sans max-w-2xl leading-relaxed">
                  We supply commercial supermarkets, retail produce cooperatives, and institutional
                  kitchens with scheduled morning dispatches from our packing hubs in Birendranagar, Surkhet and Kathmandu.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 w-full">
                <MagneticButton className="w-full">
                  <Link
                    href="/contact"
                    prefetch={true}
                    className="inline-flex w-full items-center justify-center font-sans text-xs font-semibold px-6 py-3.5 rounded-full bg-krishi-brand text-white hover:bg-krishi-forest transition-colors shadow-crisp-sm text-center"
                  >
                    Initiate Wholesale Procurement
                  </Link>
                </MagneticButton>
                <MagneticButton strength={0.2} className="w-full">
                  <Link
                    href="/produce"
                    prefetch={true}
                    className="inline-flex w-full items-center justify-center text-[11px] font-semibold uppercase tracking-wider px-6 py-3.5 rounded-full border border-slate-700 text-slate-200 hover:bg-slate-800 transition-colors text-center"
                  >
                    Browse Full Harvest Specifications
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </FadeDriftText>
        </div>
      </section>
    </div>
  );
}
