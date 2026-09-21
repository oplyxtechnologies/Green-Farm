/* Hallmark · macrostructure: editorial-spread · theme: fresh-dewy · genre: commercial
 * pre-emit critique: P5 H5 E5 S5 R5 V5
 * slop test: pass / all-gates-cleared
 */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { VideoHero } from "../components/VideoHero";
import { MagneticButton } from "../components/MagneticButton";
import { ArrowRight, Compass, Sprout, SunMedium, Droplets } from "lucide-react";
import { PEXELS_ASSETS } from "../lib/pexels";

export const metadata: Metadata = {
  title: "Green Nepal Krishi Farm | Commercial Organic Agriculture",
  description:
    "Commercial organic agriculture, sustainable polyhouse cultivation, and wholesale agricultural produce in Chitwan and Kathmandu, Nepal.",
};

const agronomicPillars = [
  {
    num: "01",
    title: "Alluvial Soil Enrichment & Vermicomposting",
    desc: "We feed the microbiology of our Chitwan alluvial soil using on-farm organic compost and green manure, completely replacing synthetic agrochemicals.",
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
      {/* 1. Asymmetrical Video Hero */}
      <VideoHero />

      {/* 2. Editorial Manifesto & Terroir Note (Asymmetrical Spread) */}
      <section className="py-24 border-b border-slate-200 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-krishi-brand block">
                Field Dispatch · Terroir &amp; Technique
              </span>
              <h2 className="font-heading text-3xl sm:text-5xl text-slate-900 font-bold leading-display tracking-tight">
                Modern agricultural discipline, grounded in the natural rhythm of Nepalese earth.
              </h2>
              <p className="text-base sm:text-lg text-slate-700 font-sans leading-relaxed pt-2">
                Nepal’s diverse agro-climatic zones offer extraordinary potential for
                commercial organic cultivation. At Green Nepal Krishi Farm, we eliminate the
                compromise between high harvest tonnage and long-term soil vitality.
              </p>
              <p className="text-sm text-slate-600 font-sans leading-relaxed">
                By investing in closed-loop compost cycles, natural predator pest
                management, and automated drip networks, our operations demonstrate that
                commercial-scale food security in Nepal can be both ecologically restorative
                and commercially profitable.
              </p>
              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-krishi-brand border-b border-slate-300 pb-0.5"
                >
                  Read our full agricultural manifesto
                  <ArrowRight className="h-4 w-4 text-krishi-brand" />
                </Link>
              </div>
            </div>

            {/* Right Detailed Botanical List */}
            <div className="lg:col-span-5 space-y-6 lg:border-l lg:border-slate-200 lg:pl-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 block">
                Agronomic Disciplines
              </span>

              <div className="space-y-6 divide-y divide-slate-200">
                {agronomicPillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div key={pillar.num} className="pt-5 first:pt-0 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-heading text-krishi-sun font-bold text-sm">
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
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High-Impact Harvest Advisory Banner (bg-krishi-mint & text-krishi-mint-text) */}
      <section className="bg-krishi-mint text-krishi-mint-text py-8 px-4 sm:px-6 lg:px-8 border-y border-krishi-brand/20">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-krishi-mint-text text-krishi-mint text-[11px] font-sans font-semibold uppercase tracking-wider">
              <span>Seasonal Harvest Notice</span>
              <span>·</span>
              <span>Direct Farm Allocation</span>
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold leading-tight">
              Pre-Monsoon &amp; Highland Harvest Supply Agreements Now Open
            </h3>
            <p className="text-xs sm:text-sm font-sans opacity-90 leading-relaxed">
              Lock in guaranteed weekly tonnage of organic vegetables, greens, and grains with fixed seasonal pricing and daily dawn dispatch across Nepal.
            </p>
          </div>

          <div className="shrink-0">
            <MagneticButton>
              <Link
                href="/contact?subject=Commercial Supply Contract"
                className="inline-flex items-center gap-2 rounded-full bg-krishi-mint-text px-6 py-3 font-sans text-xs font-bold text-krishi-mint hover:bg-black transition-colors shadow-sm"
              >
                <span>Reserve Harvest Allocation</span>
                <ArrowRight className="h-3.5 w-3.5 text-krishi-mint" />
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* 3. The Harvest Gallery: Asymmetrical Spread */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-krishi-brand block mb-2">
                Seasonal Focus · Current Yields
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl text-slate-900 font-bold">
                Featured Commercial Harvests
              </h2>
            </div>
            <Link
              href="/produce"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700 hover:text-krishi-brand"
            >
              <span>View Full Crop Register</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Asymmetrical Layout: 1 Dominant Feature Card + 2 Stacked Cards */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Dominant Crop Feature (7 Columns) */}
            <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-crisp-sm flex flex-col group">
              <div className="relative h-80 sm:h-[420px] w-full overflow-hidden bg-slate-100">
                <Image
                  src={PEXELS_ASSETS.crops.tomatoes.url}
                  alt={PEXELS_ASSETS.crops.tomatoes.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 text-[10px] font-semibold uppercase tracking-wider bg-white/90 text-slate-900 px-3 py-1 rounded-full border border-slate-200 backdrop-blur-sm">
                  Kathmandu Valley Polyhouse
                </div>
                <div className="absolute bottom-4 right-4 text-[10px] font-semibold uppercase tracking-wider bg-slate-900/80 text-krishi-cream px-3 py-1 rounded-full backdrop-blur-sm">
                  Continuous Harvest · Year-Round
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-krishi-brand block">
                    Solanum lycopersicum · Heirloom Lineage
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl text-slate-900 font-bold mt-1">
                    Vine-Ripened Greenhouse Tomatoes
                  </h3>
                  <p className="text-sm text-slate-600 font-sans mt-3 leading-relaxed">
                    Grown inside climate-shielded polyhouses with biological pollination
                    and zero chemical pesticides. Picked at optimal sugar-to-acid balance for
                    hospitality chains and supermarkets throughout Nepal.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-slate-500 block">Target Dispatch</span>
                    <span className="font-heading text-sm font-bold text-slate-900">
                      Wholesale Crates (20 kg / 50 kg)
                    </span>
                  </div>
                  <Link
                    href="/contact?subject=Tomato Wholesale Contract"
                    className="text-xs font-semibold text-krishi-brand hover:text-krishi-forest"
                  >
                    Contract Inquiry &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Stacked Secondary Crops (5 Columns) */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {/* Secondary Crop 1 */}
              <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-crisp-sm flex flex-col sm:flex-row lg:flex-col group">
                <div className="relative h-48 sm:w-1/2 lg:w-full sm:h-auto lg:h-52 overflow-hidden bg-slate-100 shrink-0">
                  <Image
                    src={PEXELS_ASSETS.crops.mustardGreens.url}
                    alt={PEXELS_ASSETS.crops.mustardGreens.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 35vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 text-[9px] font-semibold uppercase tracking-wider bg-white/90 text-slate-900 px-2.5 py-0.5 rounded-full border border-slate-200">
                    Chitwan Alluvial Bed
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-krishi-brand block">
                      Brassica juncea · Native Cultivar
                    </span>
                    <h4 className="font-heading text-xl text-slate-900 font-bold mt-0.5">
                      Organic Mustard Greens (Tori ko Saag)
                    </h4>
                    <p className="text-xs text-slate-600 font-sans mt-2 leading-relaxed">
                      Crisp, peppery leaves harvested daily at dawn from bio-enriched soils.
                      High in antioxidants and vitamin K.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">Winter Season</span>
                    <Link
                      href="/contact?subject=Mustard Greens Wholesale"
                      className="text-xs font-semibold text-krishi-brand hover:text-krishi-forest"
                    >
                      Inquire Bulk &rarr;
                    </Link>
                  </div>
                </div>
              </div>

              {/* Secondary Crop 2 */}
              <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-crisp-sm flex flex-col sm:flex-row lg:flex-col group">
                <div className="relative h-48 sm:w-1/2 lg:w-full sm:h-auto lg:h-52 overflow-hidden bg-slate-100 shrink-0">
                  <Image
                    src={PEXELS_ASSETS.crops.basmatiRice.url}
                    alt={PEXELS_ASSETS.crops.basmatiRice.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 35vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 text-[9px] font-semibold uppercase tracking-wider bg-white/90 text-slate-900 px-2.5 py-0.5 rounded-full border border-slate-200">
                    River-Fed Basin
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-krishi-brand block">
                      Oryza sativa · Aromatic Grain
                    </span>
                    <h4 className="font-heading text-xl text-slate-900 font-bold mt-0.5">
                      Organic Basmati Rice (Paddy)
                    </h4>
                    <p className="text-xs text-slate-600 font-sans mt-2 leading-relaxed">
                      Sun-dried long-grain basmati nurtured through natural river channels
                      and aged for distinct floral aroma and grain length.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">Year-round Supply</span>
                    <Link
                      href="/contact?subject=Basmati Rice Wholesale"
                      className="text-xs font-semibold text-krishi-brand hover:text-krishi-forest"
                    >
                      Inquire Bulk &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Commercial Procurement & Logistics Section */}
      <section className="py-20 border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 sm:p-14 text-slate-100 shadow-crisp-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-krishi-mint block">
                  B2B Commercial Distribution
                </span>
                <h3 className="font-heading text-2xl sm:text-4xl text-white font-bold leading-tight">
                  Reliable tonnage, fixed seasonal schedules, and uncompromised organic integrity.
                </h3>
                <p className="text-sm text-slate-300 font-sans max-w-2xl leading-relaxed">
                  We supply commercial supermarkets, retail produce cooperatives, and institutional
                  kitchens with scheduled morning dispatches from our packing hubs in Chitwan and Kathmandu.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <MagneticButton>
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center font-sans text-xs font-semibold px-6 py-3.5 rounded-full bg-krishi-brand text-white hover:bg-krishi-forest transition-colors shadow-crisp-sm"
                  >
                    Initiate Wholesale Procurement
                  </Link>
                </MagneticButton>
                <MagneticButton strength={0.2}>
                  <Link
                    href="/produce"
                    className="inline-flex w-full items-center justify-center text-[11px] font-semibold uppercase tracking-wider px-6 py-3.5 rounded-full border border-slate-700 text-slate-200 hover:bg-slate-800 transition-colors"
                  >
                    Browse Full Harvest Specifications
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
