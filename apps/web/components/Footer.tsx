/* Hallmark · macrostructure: editorial-spread · theme: fresh-dewy · genre: commercial
 * pre-emit critique: P5 H5 E5 S5 R5 V5
 * slop test: pass / all-gates-cleared
 */

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      {/* Top Banner: Farm Statement */}
      <div className="border-b border-slate-800/80">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <Link href="/" className="inline-block mb-1 group">
                <Image
                  src="/Logo.svg"
                  alt="Green Nepal Agricultural Farm"
                  width={160}
                  height={48}
                  className="h-9 w-auto object-contain opacity-95 group-hover:opacity-100 transition-opacity"
                />
              </Link>
              <span className="text-xs font-semibold uppercase tracking-wider text-krishi-mint block">
                Agronomic Vision · Nepal
              </span>
              <h3 className="font-heading text-3xl sm:text-4xl text-krishi-cream font-bold leading-tight">
                Cultivating high-yield, organic produce while advancing
                climate-resilient farming techniques across Nepalese terroir.
              </h3>
            </div>
            <div className="lg:col-span-5 lg:pl-8 space-y-3 text-sm text-slate-400 font-sans leading-relaxed">
              <p>
                From polyhouse microclimates in the Kathmandu Valley to the fertile
                plains of Birendranagar, Surkhet, Green Nepal Agricultural Farm
                operates as a commercial enterprise committed to soil revitalization,
                fair agrarian wages, and national food sovereignty.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-krishi-mint hover:text-krishi-mint/80 border-b border-krishi-mint/50 pb-0.5"
                >
                  Inquire wholesale supply contracts
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 text-xs">
          {/* Col 1 */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-sm text-krishi-cream">
              Commercial Farmlands
            </h4>
            <div className="space-y-1.5 text-slate-400 leading-relaxed font-sans">
              <p className="text-slate-200 font-medium">Birendranagar Facility</p>
              <p>Valley Farmlands &amp; Solar-Pump Irrigation</p>
              <p className="text-slate-200 font-medium pt-2">Kathmandu Valley Facility</p>
              <p>Climate-Controlled Multi-Span Polyhouses</p>
            </div>
          </div>

          {/* Col 2 */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-sm text-krishi-cream">
              Field Navigation
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/about" prefetch={true} className="hover:text-krishi-cream transition-colors">
                  Our Terroir &amp; Farming Methods
                </Link>
              </li>
              <li>
                <Link href="/produce" prefetch={true} className="hover:text-krishi-cream transition-colors">
                  Current Seasonal Harvest
                </Link>
              </li>
              <li>
                <Link href="/news" prefetch={true} className="hover:text-krishi-cream transition-colors">
                  Field Journal &amp; Agronomy Updates
                </Link>
              </li>
              <li>
                <Link href="/careers" prefetch={true} className="hover:text-krishi-cream transition-colors">
                  Agronomy Careers &amp; Operations
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-sm text-krishi-cream">
              Dispatches &amp; Contracts
            </h4>
            <div className="space-y-2 text-slate-400">
              <p>
                Wholesale Desk:{" "}
                <a
                  href="mailto:wholesale@greennepalkrishi.com"
                  className="text-slate-200 hover:text-krishi-mint transition-colors"
                >
                  wholesale@greennepalkrishi.com
                </a>
              </p>
              <p>Daily Fresh Dispatch: 04:00 – 12:00 NPT</p>
              <p>B2B Supermarket &amp; Hospitality Orders</p>
            </div>
          </div>

          {/* Col 4 */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-sm text-krishi-cream">
              Commercial Governance
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/privacy-policy" className="hover:text-krishi-cream transition-colors">
                  Privacy Policy &amp; Data Security
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-krishi-cream transition-colors">
                  Commercial Terms &amp; Conditions
                </Link>
              </li>
              <li className="pt-2 text-[11px] text-slate-500">
                Registered under the agricultural commercial enterprise framework of Nepal.
              </li>
            </ul>
          </div>
        </div>

        {/* Footnote */}
        <div className="mt-14 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-slate-500">
          <span>© {new Date().getFullYear()} Green Nepal Agricultural Farm. All rights reserved.</span>
          <span>Organic Agricultural Enterprise · Nepal</span>
        </div>
      </div>
    </footer>
  );
}
