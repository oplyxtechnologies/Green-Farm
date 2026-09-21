"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { createBrowserClient } from "@green-farm/db/client";
import {
  Sprout,
  LayoutDashboard,
  Settings,
  Newspaper,
  Wheat,
  Briefcase,
  Inbox,
  LogOut,
  ExternalLink,
} from "lucide-react";

const sidebarLinks = [
  {
    name: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Crop Catalog",
    href: "/dashboard/produce",
    icon: Wheat,
  },
  {
    name: "News & Blog",
    href: "/dashboard/blog",
    icon: Newspaper,
  },
  {
    name: "Enquiries",
    href: "/dashboard/enquiries",
    icon: Inbox,
  },
  {
    name: "Work & Operations",
    href: "/dashboard/work",
    icon: Briefcase,
  },
  {
    name: "Site CMS Settings",
    href: "/dashboard/cms",
    icon: Settings,
  },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      const supabase = createBrowserClient();
      await supabase.auth.signOut();
    } catch {
      // ignore
    } finally {
      router.push("/login");
      router.refresh();
    }
  };

  return (
    <aside className="w-64 bg-forest-dark text-white shrink-0 flex flex-col border-r border-forest-medium/40 min-h-screen">
      {/* Brand Header */}
      <div className="h-20 flex items-center px-6 border-b border-forest-medium/40">
        <Link href="/dashboard" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-krishi-brand p-1.5 shadow-md">
            <Image
              src="/icon-white.svg"
              alt="Green Nepal Agricultural Farm Logo"
              width={28}
              height={28}
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <span className="block text-sm font-bold tracking-tight text-white leading-tight">
              Green Nepal
            </span>
            <span className="block text-[10px] font-bold uppercase tracking-widest text-krishi-mint">
              Farm CMS Admin
            </span>
          </div>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
        <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-farm-300/70">
          Farm Modules
        </div>
        {sidebarLinks.map((item) => {
          const Icon = item.icon;
          const isActive =
            pathname === item.href ||
            (item.href !== "/dashboard" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isActive
                  ? "bg-farm-600 text-white font-semibold shadow-sm"
                  : "text-farm-100/80 hover:bg-forest hover:text-white"
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer / User / Sign Out */}
      <div className="p-4 border-t border-forest-medium/40 space-y-2">
        <a
          href="http://localhost:3000"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between px-3.5 py-2 rounded-xl text-xs text-farm-200/90 hover:bg-forest hover:text-white transition-colors"
        >
          <span>View Public Site</span>
          <ExternalLink className="h-3.5 w-3.5" />
        </a>

        <button
          onClick={handleSignOut}
          className="w-full flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs font-semibold text-red-300 hover:bg-red-950/40 hover:text-red-200 transition-colors"
        >
          <LogOut className="h-4 w-4 shrink-0" />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
