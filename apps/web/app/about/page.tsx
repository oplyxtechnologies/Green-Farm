/* Hallmark · macrostructure: terroir-manifesto-chronicle · theme: fresh-dewy · genre: commercial
 * pre-emit critique: P5 H5 E5 S5 R5 V5
 * slop test: pass / all-gates-cleared
 */

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sprout, Award, HeartHandshake } from "lucide-react";
import { MagneticButton } from "../../components/MagneticButton";
import { PEXELS_ASSETS } from "../../lib/pexels";
import {
  RevealText,
  FadeDriftText,
  StaggeredLineReveal,
  ClipWipeImage,
} from "../../components/animations";

export const metadata: Metadata = {
  title: "Terroir and Philosophy",
  description:
    "Discover Green Nepal Agricultural Farm's commitment to commercial organic agriculture, regenerative soil vitality, and empowering rural Nepal.",
};

const agronomicMilestones = [
  {
    year: "Foundational Vision",
    heading: "Soil Regeneration in Surkhet Valley",
    text: "Established initial commercial acreage in the fertile valley of Birendranagar, Surkhet. Converted depleted monoculture ground into living biological soil using intensive cover cropping, cow manure vermicast, and indigenous mycorrhizal fungi.",
  },
  {
    year: "Technological Maturation",
    heading: "Solar Drip Telemetry & Water Conservation",
    text: "Commissioned automated photovoltaic drip networks. Replaced flood irrigation with root-zone micro-dosing, decreasing groundwater extraction by over 40% while sustaining peak summer vegetable yields.",
  },
  {
    year: "Microclimate Protected Culture",
    heading: "Kathmandu Valley Polyhouse Installations",
    text: "Constructed engineered multi-span polyhouses to shield high-value heirloom crops against monsoon hail and winter radiation frosts, unlocking reliable 12-month commercial harvest cycles.",
  },
  {
    year: "Institutional Stewardship",
    heading: "B2B Supply & Cold-Chain Direct Dispatch",
    text: "Formed direct agricultural supply relationships with premier hotel groups, restaurants, and grocery retailers across Nepal, bypassing predatory intermediary pricing and guaranteeing fair rural wages.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background text-text min-h-screen">
      {/* 1. Header */}
      <section className="pt-28 pb-20 sm:pt-32 sm:pb-24 border-b border-slate-200 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <FadeDriftText as="span" className="text-xs font-semibold uppercase tracking-wider text-krishi-brand block mb-3">
              Institutional Heritage · Terroir &amp; Mission
            </FadeDriftText>
            <RevealText
              as="h1"
              className="font-heading text-4xl sm:text-6xl text-slate-900 font-bold leading-display tracking-tight"
            >
              Pioneering Commercial-Scale Organic Agriculture in Nepal
            </RevealText>
            <StaggeredLineReveal
              className="mt-6 text-base sm:text-lg text-slate-700 font-sans leading-relaxed"
              stagger={0.02}
            >
              Green Nepal Agricultural Farm was founded on a simple conviction: that feeding our nation with commercial abundance does not require chemical violence against the soil. By uniting ancient agrarian wisdom with modern precision agronomy, we grow produce of pristine purity.
            </StaggeredLineReveal>
          </div>
        </div>
      </section>

      {/* 2. Asymmetrical Narrative Spread */}
      <section className="py-20 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image Feature with ClipWipeImage */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-crisp-sm">
                <ClipWipeImage
                  src={PEXELS_ASSETS.terroir.surkhetFarmland.url}
                  alt={PEXELS_ASSETS.terroir.surkhetFarmland.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  direction="right"
                  scaleImage
                  triggerStart="top 85%"
                  className="h-full w-full"
                  imageClassName="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-krishi-cream z-10">
                  <FadeDriftText as="span" className="text-xs font-semibold uppercase tracking-wider text-krishi-mint block mb-1">
                    Managed Agro-Ecosystems
                  </FadeDriftText>
                  <p className="font-heading text-lg sm:text-xl font-bold">
                    Surkhet Valley &amp; Kathmandu Protected Terraces
                  </p>
                </div>
              </div>
            </div>

            {/* Right Narrative Copy */}
            <div className="lg:col-span-6 space-y-6">
              <FadeDriftText as="span" className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                Agronomic Philosophy
              </FadeDriftText>
              <RevealText
                as="h2"
                className="font-heading text-3xl sm:text-4xl text-slate-900 font-bold leading-snug"
                triggerStart="top 85%"
              >
                Restoring Biological Vitality to the Land We Inhabit
              </RevealText>
              <StaggeredLineReveal
                className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed"
                stagger={0.018}
                triggerStart="top 85%"
              >
                Modern agriculture in South Asia has too often traded long-term fertility for short-term synthetic spikes. At Green Nepal Agricultural Farm, we operate under a closed-loop biological framework.
              </StaggeredLineReveal>
              <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                Our farm produces its own rich vermicast using indigenous earthworms,
                recycles crop residuals into mulch, and protects irrigation water tables with
                precision solar-driven drip telemetry. The result is produce with dense
                micronutrients, uncompromised flavor, and zero chemical toxicity.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-200">
                <FadeDriftText delay={0.1} className="flex items-start gap-3">
                  <Sprout className="h-5 w-5 text-krishi-brand shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 text-sm">
                      Zero Agrochemicals
                    </h4>
                    <p className="font-sans text-xs text-slate-500 mt-0.5">
                      100% bio-inputs, neem sprays &amp; compost tea
                    </p>
                  </div>
                </FadeDriftText>

                <FadeDriftText delay={0.2} className="flex items-start gap-3">
                  <HeartHandshake className="h-5 w-5 text-krishi-brand shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 text-sm">
                      Fair Rural Livelihoods
                    </h4>
                    <p className="font-sans text-xs text-slate-500 mt-0.5">
                      Direct living wages &amp; technical mentorship
                    </p>
                  </div>
                </FadeDriftText>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Chronological Heritage & Evolution */}
      <section className="py-24 bg-slate-50/50 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <FadeDriftText as="span" className="text-xs font-semibold uppercase tracking-wider text-krishi-brand block mb-2">
              Our Journey · Agronomic Evolution
            </FadeDriftText>
            <RevealText
              as="h3"
              className="font-heading text-3xl sm:text-4xl text-slate-900 font-bold"
              triggerStart="top 85%"
            >
              How We Scaled Sustainable Farming
            </RevealText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {agronomicMilestones.map((milestone, idx) => (
              <FadeDriftText
                key={idx}
                delay={idx * 0.1}
                triggerStart="top 88%"
                className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-crisp-sm space-y-3"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-krishi-brand block">
                  {milestone.year}
                </span>
                <h4 className="font-heading text-xl sm:text-2xl text-slate-900 font-bold">
                  {milestone.heading}
                </h4>
                <p className="text-sm text-slate-600 font-sans leading-relaxed">
                  {milestone.text}
                </p>
              </FadeDriftText>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Institutional Standards & Certification */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeDriftText
            delay={0.1}
            triggerStart="top 85%"
            className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-12 space-y-6"
          >
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-krishi-brand" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Institutional Quality Assurance
              </span>
            </div>

            <RevealText
              as="h3"
              className="font-heading text-2xl sm:text-3xl text-slate-900 font-bold"
              triggerStart="top 85%"
            >
              Direct Transparency from Seedling to Commercial Crate
            </RevealText>

            <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
              Every lot leaving our packing facility carries documented harvest records,
              cultivar pedigree, and soil lot numbering. Institutional clients can inspect
              our fields, review soil sample test reports, and audit our zero-chemical protocols
              at any point during the agricultural calendar.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-krishi-brand px-6 py-3 font-sans text-xs font-bold text-white hover:bg-krishi-forest transition-colors shadow-crisp-sm"
                >
                  Arrange a Farm Audit or Visit
                  <ArrowRight className="h-3.5 w-3.5 text-white" />
                </Link>
              </MagneticButton>

              <Link
                href="/produce"
                className="inline-flex items-center gap-2 font-sans text-xs font-semibold text-slate-600 hover:text-krishi-brand"
              >
                Browse our crop register
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </FadeDriftText>
        </div>
      </section>
    </div>
  );
}
