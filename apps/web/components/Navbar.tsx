/* Hallmark · macrostructure: editorial-spread · theme: himalayan-terroir · genre: editorial
 * pre-emit critique: P5 H5 E5 S5 R5 V5
 * slop test: pass / all-gates-cleared
 */

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, User } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

const navLinks = [
  { name: "Field Overview", href: "/" },
  { name: "Our Terroir & Story", href: "/about" },
  { name: "Seasonal Harvest", href: "/produce" },
  { name: "Field Journal", href: "/news" },
  { name: "Agronomy Careers", href: "/careers" },
  { name: "Wholesale Inquiry", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-krishi-dark/90 backdrop-blur-md border-b border-white/10 transition-all">
      <div className="flex items-center justify-between px-8 py-4 w-full text-krishi-cream">
        {/* Left (Logo Group) */}
        <Link href="/" className="flex items-center gap-3.5 group">
          {/* Circular logo mark (dark background, light 'G' in official brand color) */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-krishi-dark border border-krishi-forest text-krishi-cream shadow-sm transition-transform duration-300 group-hover:scale-105">
            <span className="font-serif italic font-semibold text-lg text-krishi-brand">
              G
            </span>
          </div>
          {/* Stacked text: "Green Nepal" over "KRISHI FARM . NEPAL" */}
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold tracking-tight text-krishi-cream leading-tight">
              Green Nepal
            </span>
            <span className="font-sans text-[9px] font-semibold uppercase tracking-widest text-krishi-cream/70">
              KRISHI FARM . NEPAL
            </span>
          </div>
        </Link>

        {/* Center (Navigation Links) */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans text-sm leading-tight transition-all pb-1 ${
                  isActive
                    ? "text-krishi-cream font-medium border-b-2 border-krishi-brand"
                    : "text-krishi-cream/80 hover:text-krishi-brand border-b-2 border-transparent hover:border-krishi-brand/40"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right (Actions) */}
        <div className="hidden sm:flex items-center gap-6">
          {/* CTA Button: Pill-shaped, bg-krishi-brand with white text, hover:bg-krishi-mint hover:text-krishi-mint-text */}
          <MagneticButton strength={0.25}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-krishi-brand text-white font-semibold text-xs hover:bg-krishi-mint hover:text-krishi-mint-text active:scale-95 transition-all shadow-sm whitespace-nowrap"
            >
              Request Harvest Dispatch
            </Link>
          </MagneticButton>

          {/* Secondary Link: "STAFF PORTAL" link with a small user/login icon */}
          <a
            href="http://localhost:3001/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-sans text-xs uppercase tracking-wider text-krishi-cream/80 hover:text-krishi-cream transition-colors"
          >
            <User className="h-3.5 w-3.5 text-krishi-sun" />
            <span>STAFF PORTAL</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg text-krishi-cream/90 hover:bg-white/10 transition-colors"
          aria-label="Toggle Navigation"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-krishi-dark px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm py-2.5 px-3 rounded-lg font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-white/10 text-krishi-cream font-semibold border-l-2 border-krishi-brand"
                    : "text-krishi-cream/80 hover:text-krishi-brand hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="text-center text-xs font-semibold py-3 px-5 rounded-full bg-krishi-brand text-white hover:bg-krishi-mint hover:text-krishi-mint-text transition-colors"
            >
              Request Harvest Dispatch
            </Link>
            <a
              href="http://localhost:3001/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 text-xs font-sans uppercase tracking-wider text-krishi-cream/80 hover:text-krishi-cream py-2"
            >
              <User className="h-3.5 w-3.5 text-krishi-sun" />
              <span>STAFF PORTAL</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
