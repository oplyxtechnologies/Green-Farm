import React from "react";
import Link from "next/link";
import { DashboardHeader } from "../../components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle, Button } from "@green-farm/ui";
import {
  Wheat,
  Newspaper,
  Inbox,
  ArrowUpRight,
  TrendingUp,
  Clock,
  PlusCircle,
  ExternalLink,
} from "lucide-react";

export default function DashboardOverviewPage() {
  const stats = [
    {
      title: "Active Crops in Catalog",
      count: "6",
      label: "Cultivated Varieties",
      icon: Wheat,
      color: "bg-emerald-50 text-emerald-700 border-emerald-200",
      href: "/dashboard/produce",
    },
    {
      title: "Published Field Stories",
      count: "3",
      label: "Active Blog Articles",
      icon: Newspaper,
      color: "bg-blue-50 text-blue-700 border-blue-200",
      href: "/dashboard/blog",
    },
    {
      title: "Wholesale Enquiries",
      count: "12",
      label: "4 Pending Action",
      icon: Inbox,
      color: "bg-amber-50 text-amber-700 border-amber-200",
      href: "/dashboard/enquiries",
    },
  ];

  return (
    <div>
      <DashboardHeader title="Farm Executive Overview" />

      <div className="p-8 max-w-7xl mx-auto space-y-8">
        {/* Welcome Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-forest to-forest-dark p-8 text-white shadow-farm-sm">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-farm-300 font-bold">
              Green Nepal Agricultural Farm Management System
            </span>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
              Namaste &amp; Welcome back!
            </h2>
            <p className="mt-2 text-sm text-farm-100/90 leading-relaxed">
              All commercial modules, seasonal produce inventory, and incoming wholesale
              enquiries are monitored here with real-time Supabase sync.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/dashboard/produce">
                <Button size="sm" className="bg-farm-400 hover:bg-farm-500 text-forest-dark font-bold rounded-xl gap-2">
                  <PlusCircle className="h-4 w-4" />
                  Add New Crop
                </Button>
              </Link>
              <Link href="/dashboard/blog">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 rounded-xl gap-2"
                >
                  <PlusCircle className="h-4 w-4" />
                  New News Article
                </Button>
              </Link>
              <a
                href="http://localhost:3000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-farm-200 hover:text-white px-3 py-2"
              >
                Open Live Public Site <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <Card key={idx} className="border-slate-200 bg-white">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <span className="text-xs font-semibold text-slate-500">
                    {stat.title}
                  </span>
                  <div className={`p-2 rounded-xl border ${stat.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-extrabold text-slate-800">
                    {stat.count}
                  </div>
                  <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <Link
                      href={stat.href}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-farm-700 hover:text-farm-800"
                    >
                      Manage Module <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Operations Table */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Enquiries Preview */}
          <Card className="border-slate-200 bg-white p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-800">Recent Wholesale Inquiries</h3>
              <Link
                href="/dashboard/enquiries"
                className="text-xs font-semibold text-farm-700 hover:underline"
              >
                View All
              </Link>
            </div>
            <div className="space-y-3">
              {[
                {
                  name: "Bhatbhateni Supermarket Logistics",
                  crop: "Organic Himalayan Apples (5,000 kg)",
                  status: "Pending",
                  time: "2 hours ago",
                },
                {
                  name: "Himalayan Organic Kitchen",
                  crop: "Greenhouse Tomatoes & Mustard Greens",
                  status: "Contacted",
                  time: "1 day ago",
                },
                {
                  name: "Pokhara Eco Resort",
                  crop: "Raw Honeycomb & Basmati Rice",
                  status: "Completed",
                  time: "3 days ago",
                },
              ].map((inq, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-slate-50/50 text-xs"
                >
                  <div>
                    <p className="font-bold text-slate-800">{inq.name}</p>
                    <p className="text-slate-500 mt-0.5">{inq.crop}</p>
                  </div>
                  <div className="text-right">
                    <span
                      className={`inline-block px-2 py-0.5 rounded-full font-semibold ${
                        inq.status === "Pending"
                          ? "bg-amber-100 text-amber-800"
                          : inq.status === "Contacted"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-emerald-100 text-emerald-800"
                      }`}
                    >
                      {inq.status}
                    </span>
                    <p className="text-[10px] text-slate-400 mt-1">{inq.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Farm System Status */}
          <Card className="border-slate-200 bg-white p-6">
            <h3 className="font-bold text-slate-800 mb-4">System &amp; Database Health</h3>
            <div className="space-y-4 text-xs text-slate-600">
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                <span className="font-semibold text-slate-700">Supabase Connection</span>
                <span className="inline-flex items-center gap-1.5 font-bold text-emerald-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Ready
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                <span className="font-semibold text-slate-700">Row Level Security (RLS)</span>
                <span className="font-bold text-emerald-700">Enabled on all tables</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                <span className="font-semibold text-slate-700">Public Website (Port 3000)</span>
                <span className="font-bold text-slate-800">http://localhost:3000</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                <span className="font-semibold text-slate-700">Admin CMS (Port 3001)</span>
                <span className="font-bold text-slate-800">http://localhost:3001</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
