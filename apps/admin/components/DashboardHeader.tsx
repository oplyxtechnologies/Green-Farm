"use client";

import React from "react";
import { User, Bell, Shield } from "lucide-react";

export function DashboardHeader({ title }: { title: string }) {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <header className="h-20 border-b border-slate-200 bg-white px-8 flex items-center justify-between sticky top-0 z-30 shadow-sm">
      <div>
        <h1 className="text-xl font-bold text-slate-800">{title}</h1>
        <p className="text-xs text-slate-500 mt-0.5">{today}</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 rounded-full bg-farm-50 border border-farm-200 px-3 py-1 text-xs font-semibold text-farm-800">
          <Shield className="h-3.5 w-3.5 text-farm-600" />
          <span>Admin Authenticated</span>
        </div>

        <div className="h-9 w-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700">
          <User className="h-4 w-4" />
        </div>
      </div>
    </header>
  );
}
