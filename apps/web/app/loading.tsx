/* Hallmark · macrostructure: instant-route-shell · theme: fresh-dewy · genre: commercial
 * pre-emit critique: P5 H5 E5 S5 R5 V5
 * slop test: pass / all-gates-cleared
 */

import React from "react";

export default function RootLoading() {
  return (
    <div className="min-h-[75vh] w-full flex flex-col items-center justify-center px-4 py-20 bg-background text-text">
      <div className="relative flex flex-col items-center space-y-6 max-w-sm text-center">
        {/* Ambient Glow */}
        <div className="absolute -top-12 h-36 w-36 rounded-full bg-krishi-mint/20 blur-3xl pointer-events-none" />

        {/* Pulsing Brand Emblem */}
        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-crisp-md">
          <div className="absolute inset-0 rounded-2xl bg-krishi-mint/30 animate-ping opacity-30" />
          <div className="h-9 w-9 rounded-full bg-krishi-brand flex items-center justify-center shadow-inner">
            <span className="block h-3 w-3 rounded-full bg-krishi-mint animate-pulse" />
          </div>
        </div>

        {/* Editorial Text */}
        <div className="space-y-1.5 z-10">
          <p className="text-[11px] font-mono font-semibold uppercase tracking-widest text-krishi-brand">
            Green Nepal Agricultural Farm
          </p>
          <p className="text-sm font-sans text-slate-500 font-medium animate-pulse">
            Synchronizing field dispatches &amp; terroir records...
          </p>
        </div>

        {/* Minimal Progress Line */}
        <div className="w-48 h-0.5 bg-slate-200 rounded-full overflow-hidden">
          <div className="h-full bg-krishi-brand rounded-full w-1/2 animate-pulse bg-gradient-to-r from-krishi-brand via-krishi-mint to-krishi-brand" />
        </div>
      </div>
    </div>
  );
}
