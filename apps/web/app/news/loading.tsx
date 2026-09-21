/* Hallmark · macrostructure: field-journal-skeleton · theme: fresh-dewy · genre: commercial
 * pre-emit critique: P5 H5 E5 S5 R5 V5
 * slop test: pass / all-gates-cleared
 */

import React from "react";

export default function NewsLoading() {
  return (
    <div className="bg-background text-text min-h-screen animate-pulse">
      {/* 1. Header Skeleton */}
      <section className="pt-28 pb-16 sm:pt-32 sm:pb-20 border-b border-slate-200 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="h-4 w-36 bg-krishi-mint/40 rounded-full" />
            <div className="h-10 sm:h-14 w-4/5 bg-slate-200 rounded-xl" />
            <div className="h-5 w-full bg-slate-200/70 rounded-md" />
            <div className="h-5 w-3/4 bg-slate-200/70 rounded-md" />
          </div>
        </div>
      </section>

      {/* 2. Featured Story Skeleton */}
      <section className="py-16 sm:py-20 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Image Placeholder */}
            <div className="lg:col-span-7">
              <div className="aspect-[16/10] w-full rounded-2xl bg-slate-200/80 border border-slate-200 shadow-crisp-sm" />
            </div>

            {/* Content Placeholder */}
            <div className="lg:col-span-5 space-y-4">
              <div className="h-3 w-40 bg-slate-200 rounded" />
              <div className="h-8 w-5/6 bg-slate-300 rounded" />
              <div className="space-y-2 pt-1">
                <div className="h-4 w-full bg-slate-200 rounded" />
                <div className="h-4 w-full bg-slate-200 rounded" />
                <div className="h-4 w-3/4 bg-slate-200 rounded" />
              </div>
              <div className="h-4 w-28 bg-krishi-mint/50 rounded pt-2" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Archival Chronicles Skeleton */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="h-6 w-48 bg-slate-300 rounded" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <div className="aspect-[16/10] w-full rounded-xl bg-slate-200 border border-slate-200" />
            </div>
            <div className="lg:col-span-6 space-y-4">
              <div className="h-3 w-32 bg-slate-200 rounded" />
              <div className="h-7 w-3/4 bg-slate-300 rounded" />
              <div className="h-4 w-full bg-slate-200 rounded" />
              <div className="h-4 w-4/5 bg-slate-200 rounded" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
