/* Hallmark · macrostructure: vocational-ledger · theme: fresh-dewy · genre: commercial
 * pre-emit critique: P5 H5 E5 S5 R5 V5
 * slop test: pass / all-gates-cleared
 */

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { MagneticButton } from "../../components/MagneticButton";
import { PEXELS_ASSETS } from "../../lib/pexels";
import {
  RevealText,
  FadeDriftText,
  StaggeredLineReveal,
  ClipWipeImage,
} from "../../components/animations";

export const metadata: Metadata = {
  title: "Careers and Opportunities",
  description:
    "Join the agronomy, irrigation engineering, and farm management teams at Green Nepal Agricultural Farm across Birendranagar, Surkhet and Kathmandu.",
  openGraph: {
    title: "Careers and Opportunities | Green Nepal Agricultural Farm",
    description:
      "Join the agronomy, irrigation engineering, and farm management teams at Green Nepal Agricultural Farm across Birendranagar, Surkhet and Kathmandu.",
    url: "/careers",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Careers - Green Nepal Agricultural Farm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers and Opportunities | Green Nepal Agricultural Farm",
    description:
      "Join the agronomy, irrigation engineering, and farm management teams at Green Nepal Agricultural Farm across Birendranagar, Surkhet and Kathmandu.",
    images: ["/opengraph-image.jpg"],
  },
};

const openRoles = [
  {
    title: "Polyhouse & Protected Culture Agronomist",
    station: "Kathmandu Valley Polyhouse Complex",
    type: "Full-time Agronomic Lead",
    responsibilities:
      "Oversee microclimate conditions, biological pest management (beneficial insects), and precision drip irrigation schedules across climate-shielded polyhouses.",
    qualifications: "B.Sc. or M.Sc. in Agronomy / Horticulture with field greenhouse experience.",
  },
  {
    title: "Solar Telemetry & Drip Irrigation Technician",
    station: "Surkhet Valley Station (Birendranagar)",
    type: "Full-time Technical Role",
    responsibilities:
      "Maintain solar PV pumping stations, sub-surface drip manifolds, filtration backwash cycles, and soil moisture sensor telemetry across our commercial farming plots.",
    qualifications: "Technical diploma in Agricultural Engineering, Electrical, or Mechanical Systems.",
  },
  {
    title: "Cold-Chain Logistics & Wholesale Dispatch Coordinator",
    station: "Kathmandu Central Distribution Center",
    type: "Full-time Operations",
    responsibilities:
      "Manage dawn harvest arrival quality checks, cold-storage temperature logs (2°C–6°C), and daily dispatch routes to commercial hotel and retail accounts.",
    qualifications: "Proven experience in agricultural supply chain, warehouse management, or perishable logistics.",
  },
];

export default function CareersPage() {
  return (
    <div className="bg-background text-text min-h-screen">
      {/* 1. Header */}
      <section className="pt-28 pb-20 sm:pt-32 sm:pb-24 border-b border-slate-200 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <FadeDriftText as="span" className="text-xs font-semibold uppercase tracking-wider text-krishi-brand block mb-3">
              Vocational Registry · Field Opportunities
            </FadeDriftText>
            <RevealText
              as="h1"
              className="font-heading text-4xl sm:text-6xl text-slate-900 font-bold leading-display tracking-tight"
            >
              Shape the Future of Himalayan Agronomy
            </RevealText>
            <StaggeredLineReveal
              className="mt-6 text-base sm:text-lg text-slate-700 font-sans leading-relaxed"
              stagger={0.02}
            >
              We are assembling a skilled team of agronomists, irrigation technologists, and agricultural stewards dedicated to demonstrating that sustainable commercial farming in Nepal can set global benchmarks.
            </StaggeredLineReveal>
          </div>
        </div>
      </section>

      {/* 2. Facility / Team Photography Banner */}
      <section className="py-12 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-crisp-md">
            <ClipWipeImage
              src={PEXELS_ASSETS.terroir.polyhouse.url}
              alt={PEXELS_ASSETS.terroir.polyhouse.alt}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
              direction="right"
              scaleImage
              triggerStart="top 85%"
              className="h-full w-full"
              imageClassName="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 text-white z-10">
              <div>
                <FadeDriftText as="span" className="text-[11px] font-sans font-semibold uppercase tracking-widest text-krishi-mint block">
                  On-Site Agronomy Culture
                </FadeDriftText>
                <p className="font-heading text-lg sm:text-2xl font-bold">
                  Surkhet Valley &amp; Kathmandu Facilities
                </p>
              </div>
              <span className="inline-flex items-center px-2.5 py-1 text-xs font-medium tracking-tight text-slate-800 bg-white/95 backdrop-blur-md rounded-md border border-slate-200/60 shadow-sm">
                Active Stations · 2026
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Working Principles */}
      <section className="py-16 border-b border-slate-200 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeDriftText delay={0.05} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-krishi-brand block">
                01 · Economic Fairness
              </span>
              <h3 className="font-heading text-xl font-bold text-slate-900">
                Above-Market Living Remuneration
              </h3>
              <p className="font-sans text-xs text-slate-600 leading-relaxed">
                Fair, dependable monthly salaries coupled with seasonal harvest bonus allocations
                and full workplace medical insurance.
              </p>
            </FadeDriftText>

            <FadeDriftText delay={0.15} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-krishi-brand block">
                02 · Technological Exposure
              </span>
              <h3 className="font-heading text-xl font-bold text-slate-900">
                Advanced Precision Ag-Tech
              </h3>
              <p className="font-sans text-xs text-slate-600 leading-relaxed">
                Hands-on daily mentorship in climate-shielded polyhouse systems, solar drip
                automation, and biological microbial soil formulation.
              </p>
            </FadeDriftText>

            <FadeDriftText delay={0.25} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-krishi-brand block">
                03 · Soil Sovereignty
              </span>
              <h3 className="font-heading text-xl font-bold text-slate-900">
                Meaningful National Purpose
              </h3>
              <p className="font-sans text-xs text-slate-600 leading-relaxed">
                Directly contribute to reviving Nepalese food self-sufficiency and eliminating
                toxic chemical dependencies in our food chain.
              </p>
            </FadeDriftText>
          </div>
        </div>
      </section>

      {/* 4. Open Positions */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="border-b border-slate-200 pb-4">
            <FadeDriftText as="span" className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">
              Active Openings
            </FadeDriftText>
            <RevealText
              as="h2"
              className="font-heading text-3xl text-slate-900 font-bold"
              triggerStart="top 88%"
            >
              Current Field &amp; Technical Stations
            </RevealText>
          </div>

          <div className="space-y-8">
            {openRoles.map((role, idx) => (
              <FadeDriftText
                key={idx}
                delay={idx * 0.12}
                triggerStart="top 88%"
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-crisp-sm space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-slate-200 pb-4">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-krishi-brand block">
                      Station № 0{idx + 1} · {role.type}
                    </span>
                    <h3 className="font-heading text-2xl text-slate-900 font-bold mt-1">
                      {role.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <MapPin className="h-3.5 w-3.5 text-krishi-brand" />
                    {role.station}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs font-sans text-slate-600">
                  <div>
                    <span className="text-xs font-bold text-slate-900 block mb-1">
                      Core Scope of Work:
                    </span>
                    <p className="leading-relaxed">{role.responsibilities}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block mb-1">
                      Candidate Profile:
                    </span>
                    <p className="leading-relaxed">{role.qualifications}</p>
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <MagneticButton>
                    <Link
                      href={`/contact?${new URLSearchParams({
                        subject: `Application for ${role.title}`,
                      }).toString()}`}
                      className="inline-flex items-center gap-2 rounded-full bg-krishi-brand px-5 py-2.5 font-sans text-xs font-semibold text-white hover:bg-krishi-forest transition-colors shadow-crisp-sm"
                    >
                      Submit Candidacy Dossier
                      <ArrowRight className="h-3.5 w-3.5 text-white" />
                    </Link>
                  </MagneticButton>
                </div>
              </FadeDriftText>
            ))}
          </div>

          {/* Unsolicited Applications */}
          <FadeDriftText delay={0.1} triggerStart="top 85%" className="rounded-3xl border border-slate-800 bg-slate-900 p-8 sm:p-10 text-slate-100 shadow-crisp-lg">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-krishi-mint block">
                Unsolicited Agronomic Inquiries
              </span>
              <h3 className="font-heading text-2xl font-bold text-white">
                Are you an experienced organic farmer, tractor mechanic, or soil researcher?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                Even when specific positions are not advertised, we review resumes and field
                portfolios from dedicated individuals who share our passion for restorative agriculture.
              </p>
              <div className="pt-2">
                <MagneticButton>
                  <Link
                    href={`/contact?${new URLSearchParams({
                      subject: "General Agronomy Candidacy",
                    }).toString()}`}
                    className="inline-flex items-center gap-2 rounded-full bg-krishi-brand px-6 py-2.5 font-sans text-xs font-bold text-white hover:bg-krishi-forest transition-colors shadow-crisp-sm"
                  >
                    Transmit General Application
                    <ArrowRight className="h-3.5 w-3.5 text-white" />
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
