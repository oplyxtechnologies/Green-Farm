import type { Metadata } from "next";
import Link from "next/link";
import { Compass, Home, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "404 - Plot Not Found",
  description:
    "The agronomic chronicle or farmstead resource you requested could not be located on our managed acreage.",
};

export default function NotFound() {
  return (
    <main className="min-h-[75vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-36 pb-24 bg-background text-text">
      <div className="max-w-xl w-full text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-krishi-brand/10 text-krishi-brand border border-krishi-brand/20 mb-2">
          <Compass className="w-8 h-8 animate-pulse" />
        </div>

        <span className="block font-sans text-xs uppercase tracking-widest text-krishi-brand font-semibold">
          Error 404 · Uncharted Sector
        </span>

        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
          Plot Not Found
        </h1>

        <p className="font-sans text-base text-slate-600 leading-relaxed max-w-md mx-auto">
          The field journal, cultivar entry, or agronomy page you were seeking has either shifted in our crop rotation cycle or does not exist.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-krishi-brand hover:bg-krishi-forest text-white px-7 py-3.5 rounded-full font-sans font-semibold text-sm transition-colors shadow-crisp-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return to Farmstead</span>
          </Link>

          <Link
            href="/produce"
            className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 px-7 py-3.5 rounded-full font-sans font-medium text-sm transition-colors border border-slate-200"
          >
            <span>Browse Produce Catalog</span>
            <ArrowRight className="w-4 h-4 text-slate-500" />
          </Link>
        </div>
      </div>
    </main>
  );
}
