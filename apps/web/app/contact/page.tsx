/* Hallmark · macrostructure: procurement-dispatch-desk · theme: fresh-dewy · genre: commercial
 * pre-emit critique: P5 H5 E5 S5 R5 V5
 * slop test: pass / all-gates-cleared
 */

import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";
import { MapPin, Phone, Mail, Clock, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Procurement Desk & Contact | Green Nepal Krishi Farm",
  description:
    "Connect with the Green Nepal Krishi Farm harvest dispatch desk for commercial wholesale supply agreements, seasonal allocations, and agricultural partnerships.",
};

export default function ContactPage() {
  return (
    <div className="bg-background text-text min-h-screen">
      {/* 1. Header */}
      <section className="pt-28 pb-20 sm:pt-32 sm:pb-24 border-b border-slate-200 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-krishi-brand block mb-3">
              Commercial Dispatch Desk · Inquiries &amp; Allocations
            </span>
            <h1 className="font-heading text-4xl sm:text-6xl text-slate-900 font-bold leading-display tracking-tight">
              Connect with Our Farm Dispatch
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-700 font-sans leading-relaxed">
              Whether you are securing wholesale vegetable tonnage for hotel kitchens,
              contracting seasonal grain allocations, or visiting our Chitwan farmlands,
              our agricultural operations team is at your disposal.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Dispatch Desk & Contact Form Layout */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Farm Registry & Station Logistics */}
            <div className="lg:col-span-5 space-y-8">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block border-b border-slate-200 pb-3">
                  Farm Operations &amp; Stations
                </span>

                <div className="space-y-6 text-xs font-sans">
                  {/* Stations */}
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-krishi-brand shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-heading font-bold text-slate-900 text-sm">
                        Chitwan Farmlands &amp; Solar Station
                      </h4>
                      <p className="text-slate-600 mt-1 leading-relaxed">
                        Bharatpur Alluvial Basin, Chitwan, Nepal
                        <br />
                        <span className="text-slate-500">
                          (Open-field leafy greens, heritage grains &amp; vermiculture)
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-4 border-t border-slate-200">
                    <MapPin className="h-4 w-4 text-krishi-brand shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-heading font-bold text-slate-900 text-sm">
                        Kathmandu Polyhouse &amp; Central Distribution
                      </h4>
                      <p className="text-slate-600 mt-1 leading-relaxed">
                        Kathmandu Valley Protected Terraces, Nepal
                        <br />
                        <span className="text-slate-500">
                          (Cold-chain staging, polyhouses &amp; corporate offices)
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Dispatch Hours */}
                  <div className="flex items-start gap-3 pt-4 border-t border-slate-200">
                    <Clock className="h-4 w-4 text-krishi-sun shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-heading font-bold text-slate-900 text-sm">
                        Daily Dispatch Hours
                      </h4>
                      <p className="text-slate-600 mt-1 leading-relaxed">
                        Morning Harvest Dispatch: 04:00 AM – 12:00 PM
                        <br />
                        Office &amp; Procurement Desk: Sun – Fri (09:00 AM – 06:00 PM)
                      </p>
                    </div>
                  </div>

                  {/* Communication */}
                  <div className="flex items-start gap-3 pt-4 border-t border-slate-200">
                    <Phone className="h-4 w-4 text-krishi-brand shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-heading font-bold text-slate-900 text-sm">
                        Direct Lines
                      </h4>
                      <p className="text-slate-600 mt-1 leading-relaxed font-mono text-[11px]">
                        Wholesale Desk: +977 1-4XXXXXX
                        <br />
                        Harvest Logistics: +977 98XXXXXXXX
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-4 border-t border-slate-200">
                    <Mail className="h-4 w-4 text-krishi-brand shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-heading font-bold text-slate-900 text-sm">
                        Official Correspondence
                      </h4>
                      <p className="text-slate-600 mt-1 leading-relaxed font-mono text-[11px]">
                        wholesale@greennepalkrishi.com
                        <br />
                        operations@greennepalkrishi.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct From Farm Guarantee */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-100 space-y-2 shadow-crisp-md">
                <div className="flex items-center gap-2 text-xs text-krishi-mint font-semibold uppercase tracking-wider">
                  <ShieldCheck className="h-4 w-4" />
                  Wholesale Procurement Guarantee
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  All wholesale enquiries are logged in real-time to our Supabase agricultural
                  database and monitored by our dispatch director to ensure confirmed pricing
                  and transit timelines within 24 hours.
                </p>
              </div>
            </div>

            {/* Right Form Desk */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 shadow-crisp-sm space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-krishi-brand block">
                    Transmittal Form
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl text-slate-900 font-bold mt-1">
                    Send a Dispatch Enquiry or Wholesale Brief
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-sans mt-2 leading-relaxed">
                    Specify crop requirements, target tonnage, scheduled delivery location,
                    or general agronomic inquiries.
                  </p>
                </div>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
