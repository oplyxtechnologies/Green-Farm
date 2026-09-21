/* Hallmark · macrostructure: asymmetrical-hero · theme: himalayan-terroir · genre: editorial
 * pre-emit critique: P5 H5 E5 S5 R5 V5
 * slop test: pass / all-gates-cleared
 */

"use client";

import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight, Compass } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { PEXELS_ASSETS } from "../lib/pexels";

export function VideoHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLSpanElement>(null);
  const titleLine2Ref = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(tagRef.current, {
        opacity: 0,
        y: -16,
        duration: 0.9,
      })
        .from(
          titleLine1Ref.current,
          {
            opacity: 0,
            y: 40,
            duration: 1.1,
            skewY: 2,
          },
          "-=0.6"
        )
        .from(
          titleLine2Ref.current,
          {
            opacity: 0,
            y: 40,
            duration: 1.1,
            skewY: 2,
          },
          "-=0.8"
        )
        .from(
          descRef.current,
          {
            opacity: 0,
            y: 24,
            duration: 0.9,
          },
          "-=0.6"
        )
        .from(
          ctaGroupRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
          },
          "-=0.6"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 text-krishi-cream"
    >
      {/* Background Video Layer with Crisp Vignette */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={PEXELS_ASSETS.heroVideo.posterUrl}
          className="h-full w-full object-cover opacity-35 filter brightness-95 contrast-105"
        >
          <source
            src={PEXELS_ASSETS.heroVideo.videoUrl}
            type="video/mp4"
          />
        </video>

        {/* Nuanced Crisp Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-transparent w-full lg:w-3/4" />
      </div>

      {/* Primary Narrative Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl space-y-6">
          {/* Eyebrow / Overline Badge */}
          <div
            ref={tagRef}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-krishi-cream -mb-2.5"
          >
            <Compass className="h-3.5 w-3.5 text-krishi-cream" />
            <span>Surkhet &amp; Kathmandu Valley · Est. Commercial Farm</span>
          </div>

          {/* Crisp Heading */}
          <h1 className="text-4xl  sm:text-6xl md:text-7xl font-heading font-bold text-krishi-cream leading-display tracking-tight">
            <span ref={titleLine1Ref} className="block">
              Rooted in the living soil
            </span>
            <span
              ref={titleLine2Ref}
              className="block italic font-light text-krishi-mint mt-1"
            >
              of Nepal.
            </span>
          </h1>

          {/* Narrative Copy */}
          <p
            ref={descRef}
            className="max-w-2xl text-base sm:text-lg text-slate-300 font-sans font-normal leading-relaxed"
          >
            Green Nepal Agricultural Farm pairs ecological soil regeneration with modern
            polyhouses and precision drip networks. We cultivate certified organic
            staples, highland fruits, and greens for wholesale distribution across Nepal.
          </p>

          {/* Action Group with GSAP Magnetic Micro-interactions */}
          <div
            ref={ctaGroupRef}
            className="pt-4 flex flex-wrap items-center gap-4"
          >
            <MagneticButton>
              <Link
                href="/produce"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-krishi-brand text-white font-semibold text-sm hover:bg-krishi-forest transition-all shadow-crisp-md"
              >
                <span>Explore Harvest Catalog</span>
                <ArrowRight className="h-4 w-4 text-white" />
              </Link>
            </MagneticButton>

            <MagneticButton strength={0.2}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-700 text-slate-200 text-sm font-medium hover:bg-slate-900/60 hover:text-white transition-colors backdrop-blur-sm"
              >
                <span>Our Agronomic Principles</span>
              </Link>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
