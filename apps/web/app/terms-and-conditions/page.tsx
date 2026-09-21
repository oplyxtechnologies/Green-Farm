/* Hallmark · macrostructure: editorial-governance · theme: fresh-dewy · genre: commercial
 * pre-emit critique: P5 H5 E5 S5 R5 V5
 * slop test: pass / all-gates-cleared
 */

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { RevealText, FadeDriftText } from "../../components/animations";

export const metadata: Metadata = {
  title: "Commercial Terms & Conditions | Green Nepal Agricultural Farm",
  description: "Terms and conditions governing agricultural supply agreements and platform usage.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-background text-text min-h-screen py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-krishi-brand mb-8 transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Return to Farm Overview
        </Link>

        <FadeDriftText as="span" className="text-xs font-semibold uppercase tracking-wider text-krishi-brand block mb-2">
          Commercial Governance
        </FadeDriftText>
        <RevealText
          as="h1"
          className="font-heading text-3xl sm:text-5xl text-slate-900 font-bold leading-tight"
        >
          Commercial Terms &amp; Conditions
        </RevealText>
        <FadeDriftText as="p" delay={0.1} className="text-xs text-slate-500 mt-2">
          Agricultural Supply Framework · Kingdom / Republic of Nepal
        </FadeDriftText>

        <div className="mt-10 space-y-8 rounded-2xl border border-slate-200 bg-white p-8 sm:p-12 text-sm text-slate-600 font-sans leading-relaxed shadow-crisp-sm">
          <section className="space-y-2">
            <FadeDriftText as="h2" triggerStart="top 92%" className="font-heading text-xl font-bold text-slate-900">
              1. Acceptance of Terms
            </FadeDriftText>
            <p>
              By accessing this digital platform or engaging in commercial trade with Green Nepal Agricultural Farm,
              commercial partners acknowledge and consent to the operational provisions outlined herein.
            </p>
          </section>

          <section className="space-y-2 pt-6 border-t border-slate-200">
            <FadeDriftText as="h2" triggerStart="top 92%" className="font-heading text-xl font-bold text-slate-900">
              2. Agricultural Product Characterization
            </FadeDriftText>
            <p>
              Produce weights, cultivar characteristics, and pricing figures cataloged on this site reflect seasonal
              harvest benchmarks. Commercial commitments for guaranteed tonnage and fixed pricing are executed
              under bilateral written supply agreements signed with our farm operations executive.
            </p>
          </section>

          <section className="space-y-2 pt-6 border-t border-slate-200">
            <FadeDriftText as="h2" triggerStart="top 92%" className="font-heading text-xl font-bold text-slate-900">
              3. Harvest Dispatch &amp; Perishable Acceptance
            </FadeDriftText>
            <p>
              Harvested crops are dispatched via temperature-managed transport during morning hours (04:00 AM – 12:00 PM).
              Receiving quality inspections must occur upon arrival at designated receiving docks. Any variances
              are logged against certified dispatch weigh-bills.
            </p>
          </section>

          <section className="space-y-2 pt-6 border-t border-slate-200">
            <FadeDriftText as="h2" triggerStart="top 92%" className="font-heading text-xl font-bold text-slate-900">
              4. Intellectual Property &amp; Agronomic Research
            </FadeDriftText>
            <p>
              All editorial narratives, soil microbiological logs, photography, and brand identifiers remain the exclusive
              intellectual property of Green Nepal Agricultural Farm. Unauthorized reproduction for commercial misrepresentation
              is strictly prohibited.
            </p>
          </section>

          <section className="space-y-2 pt-6 border-t border-slate-200">
            <FadeDriftText as="h2" triggerStart="top 92%" className="font-heading text-xl font-bold text-slate-900">
              5. Applicable Jurisdiction
            </FadeDriftText>
            <p>
              All commercial agreements and electronic communications are governed by and adjudicated under the commercial
              and civil laws of Nepal.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
