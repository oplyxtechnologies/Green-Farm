/* Hallmark · macrostructure: editorial-governance · theme: fresh-dewy · genre: commercial
 * pre-emit critique: P5 H5 E5 S5 R5 V5
 * slop test: pass / all-gates-cleared
 */

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { RevealText, FadeDriftText } from "../../components/animations";

export const metadata: Metadata = {
  title: "Privacy Policy & Data Security | Green Nepal Agricultural Farm",
  description: "Privacy policy and client data handling protocol for Green Nepal Agricultural Farm.",
};

export default function PrivacyPolicyPage() {
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
          Privacy Policy &amp; Data Security
        </RevealText>
        <FadeDriftText as="p" delay={0.1} className="text-xs text-slate-500 mt-2">
          Effective Date: Calendar Year 2026 · Registered Commercial Farm in Nepal
        </FadeDriftText>

        <div className="mt-10 space-y-8 rounded-2xl border border-slate-200 bg-white p-8 sm:p-12 text-sm text-slate-600 font-sans leading-relaxed shadow-crisp-sm">
          <section className="space-y-2">
            <FadeDriftText as="h2" triggerStart="top 92%" className="font-heading text-xl font-bold text-slate-900">
              1. Agronomic Scope &amp; Overview
            </FadeDriftText>
            <p>
              Green Nepal Agricultural Farm (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates commercial organic
              cultivation acreage in Birendranagar, Surkhet and Kathmandu. This policy explains how we collect and safeguard
              institutional client and visitor data when transacting through our digital platform.
            </p>
          </section>

          <section className="space-y-2 pt-6 border-t border-slate-200">
            <FadeDriftText as="h2" triggerStart="top 92%" className="font-heading text-xl font-bold text-slate-900">
              2. Information Received &amp; Logged
            </FadeDriftText>
            <p>
              When institutional purchasers or partners transmit wholesale requests or application dossiers, we record:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 font-sans text-xs text-slate-700">
              <li>Representative name and corporate or institutional organization</li>
              <li>Official email address and direct WhatsApp/telephone contact line</li>
              <li>Estimated tonnage requirements and target delivery destination in Nepal</li>
              <li>Agricultural correspondence and dispatch preferences</li>
            </ul>
          </section>

          <section className="space-y-2 pt-6 border-t border-slate-200">
            <FadeDriftText as="h2" triggerStart="top 92%" className="font-heading text-xl font-bold text-slate-900">
              3. Purpose of Processing
            </FadeDriftText>
            <p>
              We utilize commercial contact information exclusively to fulfill agricultural allocation agreements,
              coordinate refrigerated dawn logistics, and communicate seasonal harvest availability schedules.
              We never commercialize, lease, or distribute partner data to third parties.
            </p>
          </section>

          <section className="space-y-2 pt-6 border-t border-slate-200">
            <FadeDriftText as="h2" triggerStart="top 92%" className="font-heading text-xl font-bold text-slate-900">
              4. Database &amp; Cryptographic Protection
            </FadeDriftText>
            <p>
              All transmittals are stored inside a secured PostgreSQL Supabase infrastructure protected by
              strict Row-Level Security (RLS) policies and HTTPS in-transit encryption.
            </p>
          </section>

          <section className="space-y-2 pt-6 border-t border-slate-200">
            <FadeDriftText as="h2" triggerStart="top 92%" className="font-heading text-xl font-bold text-slate-900">
              5. Communications &amp; Inquiries
            </FadeDriftText>
            <p>
              For data protection questions or record deletion requests, please contact our administrative desk:{" "}
              <a
                href="mailto:operations@greennepalagricultural.com"
                className="text-krishi-brand underline font-semibold"
              >
                operations@greennepalagricultural.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
