/* Hallmark · macrostructure: botanical-ledger-skeleton · theme: fresh-dewy · genre: commercial
 * pre-emit critique: P5 H5 E5 S5 R5 V5
 * slop test: pass / all-gates-cleared
 */

import React from "react";

export default function ProduceLoading() {
  return (
    <div className="bg-background text-text min-h-screen animate-pulse">
      {/* 1. Header Skeleton */}
      <section className="pt-28 pb-20 sm:pt-32 sm:pb-24 border-b border-slate-200 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="h-4 w-48 bg-krishi-mint/30 rounded-full" />
            <div className="h-10 sm:h-14 w-3/4 bg-slate-200 rounded-xl" />
            <div className="h-5 w-full bg-slate-200/70 rounded-md" />
            <div className="h-5 w-2/3 bg-slate-200/70 rounded-md" />

            {/* Metric pill placeholders */}
            <div className="pt-4 flex flex-wrap gap-2">
              <div className="h-7 w-32 bg-slate-200/80 rounded-full" />
              <div className="h-7 w-40 bg-slate-200/80 rounded-full" />
              <div className="h-7 w-36 bg-slate-200/80 rounded-full" />
            </div>
          </div>

          {/* Stat Grid */}
          <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-2">
                <div className="h-3 w-20 bg-slate-200 rounded" />
                <div className="h-8 w-28 bg-slate-300 rounded" />
                <div className="h-3 w-32 bg-slate-200 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Crop Monograph Skeletons */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">
          {[1, 2].map((idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                {/* Image Placeholder */}
                <div className={`relative ${isEven ? "lg:col-span-7 lg:order-2" : "lg:col-span-7"}`}>
                  <div className="aspect-[4/3] w-full rounded-2xl bg-slate-200/80 border border-slate-200 shadow-crisp-sm" />
                </div>

                {/* Content Placeholder */}
                <div className={`space-y-5 ${isEven ? "lg:col-span-5 lg:order-1" : "lg:col-span-5"}`}>
                  <div className="h-3 w-32 bg-krishi-mint/40 rounded" />
                  <div className="h-8 w-3/4 bg-slate-300 rounded" />
                  <div className="space-y-2 pt-2">
                    <div className="h-4 w-full bg-slate-200 rounded" />
                    <div className="h-4 w-full bg-slate-200 rounded" />
                    <div className="h-4 w-4/5 bg-slate-200 rounded" />
                  </div>
                  <div className="h-24 w-full rounded-xl bg-slate-100 border border-slate-200" />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
