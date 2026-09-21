"use client";

import React, { useState, useEffect } from "react";
import { DashboardHeader } from "../../../components/DashboardHeader";
import { createBrowserClient } from "@green-farm/db/client";
import type { Enquiry, EnquiryStatus, EnquiryUpdate } from "@green-farm/db/types";
import { Button, Card, Badge } from "@green-farm/ui";
import { Inbox, Mail, Phone, Clock, CheckCircle2, RefreshCw, MessageSquare } from "lucide-react";

const sampleEnquiries: Enquiry[] = [
  {
    id: "enq-1",
    name: "Ramesh Thapa",
    email: "ramesh@bhatbhateni.com",
    phone: "+977 9851012345",
    subject: "Wholesale Apple Supply Contract",
    message:
      "We are looking to source 5,000 kg of organic apples on a bi-weekly delivery schedule for our Kathmandu supermarket branches.",
    status: "pending",
    created_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "enq-2",
    name: "Sunita Shrestha",
    email: "sunita@himalayanorganics.np",
    phone: "+977 9841987654",
    subject: "Greenhouse Tomato Bulk Procurement",
    message:
      "Requesting quote for 500 kg fresh vine tomatoes delivered to our packaging unit in Lalitpur.",
    status: "contacted",
    created_at: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "enq-3",
    name: "Bikash Adhikari",
    email: "bikash@pokharaecoresort.com",
    phone: "+977 9801234567",
    subject: "Raw Honeycomb & Basmati Rice Supply",
    message:
      "We would like to partner for continuous supply of organic raw honey and basmati rice for our farm-to-table resort dining.",
    status: "completed",
    created_at: new Date(Date.now() - 72 * 60 * 60 * 1000).toISOString(),
  },
];

export default function AdminEnquiriesPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>(sampleEnquiries);
  const [loading, setLoading] = useState(false);
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const fetchEnquiries = async () => {
    setLoading(true);
    try {
      const supabase = createBrowserClient();
      const { data, error } = await supabase
        .from("enquiries")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data && data.length > 0) {
        setEnquiries(data as Enquiry[]);
      }
    } catch {
      // keep sample
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const handleUpdateStatus = async (id: string, newStatus: EnquiryStatus) => {
    try {
      const supabase = createBrowserClient();
      const updateData: EnquiryUpdate = { status: newStatus };
      await supabase.from("enquiries").update(updateData).eq("id", id);
    } catch {
      // fallback
    }

    setEnquiries(
      enquiries.map((enq) => (enq.id === id ? { ...enq, status: newStatus } : enq))
    );

    if (selectedEnquiry && selectedEnquiry.id === id) {
      setSelectedEnquiry({ ...selectedEnquiry, status: newStatus });
    }
  };

  const filtered = enquiries.filter((item) => {
    if (filter === "all") return true;
    return item.status === filter;
  });

  return (
    <div>
      <DashboardHeader title="Wholesale Contact Enquiries" />

      <div className="p-8 max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-800">Inbound Form Submissions</h2>
            <p className="text-xs text-slate-500">
              Review and update status for buyer requests from the public contact page.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={fetchEnquiries}
              className="gap-2"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </Button>
          </div>
        </div>

        {/* Filter Badges */}
        <div className="flex items-center gap-2">
          {["all", "pending", "contacted", "completed"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
                filter === tab
                  ? "bg-forest text-white shadow-sm"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              {tab} ({tab === "all" ? enquiries.length : enquiries.filter((e) => e.status === tab).length})
            </button>
          ))}
        </div>

        {/* List & Detail Pane Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* List */}
          <div className="lg:col-span-7 space-y-3">
            {filtered.map((item) => (
              <Card
                key={item.id}
                onClick={() => setSelectedEnquiry(item)}
                className={`p-5 cursor-pointer border transition-all ${
                  selectedEnquiry?.id === item.id
                    ? "border-farm-500 ring-2 ring-farm-500/20 bg-farm-50/20"
                    : "border-slate-200 bg-white hover:border-farm-300"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="font-bold text-slate-900 text-sm">{item.name}</span>
                    <span className="text-xs text-slate-500 ml-2">({item.email})</span>
                  </div>
                  <Badge
                    variant={
                      item.status === "pending"
                        ? "warning"
                        : item.status === "contacted"
                        ? "secondary"
                        : "success"
                    }
                  >
                    {item.status}
                  </Badge>
                </div>
                <p className="text-xs font-semibold text-forest mt-1">{item.subject}</p>
                <p className="text-xs text-slate-600 line-clamp-2 mt-1.5">
                  {item.message}
                </p>
                <p className="text-[10px] text-slate-400 mt-3">
                  Received: {new Date(item.created_at).toLocaleString()}
                </p>
              </Card>
            ))}

            {filtered.length === 0 && (
              <div className="p-12 text-center text-slate-400 text-sm bg-white rounded-2xl border border-slate-200">
                No enquiries found in this category.
              </div>
            )}
          </div>

          {/* Details Pane */}
          <div className="lg:col-span-5">
            {selectedEnquiry ? (
              <Card className="p-6 border-slate-200 bg-white sticky top-28 space-y-5">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-slate-800 text-base">
                      {selectedEnquiry.name}
                    </h3>
                    <Badge
                      variant={
                        selectedEnquiry.status === "pending"
                          ? "warning"
                          : selectedEnquiry.status === "contacted"
                          ? "secondary"
                          : "success"
                      }
                    >
                      {selectedEnquiry.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Enquiry ID: {selectedEnquiry.id}
                  </p>
                </div>

                <div className="space-y-2 text-xs border-y border-slate-100 py-3">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Mail className="h-3.5 w-3.5 text-farm-600 shrink-0" />
                    <a
                      href={`mailto:${selectedEnquiry.email}`}
                      className="text-farm-700 hover:underline font-medium"
                    >
                      {selectedEnquiry.email}
                    </a>
                  </div>
                  {selectedEnquiry.phone && (
                    <div className="flex items-center gap-2 text-slate-700">
                      <Phone className="h-3.5 w-3.5 text-farm-600 shrink-0" />
                      <span>{selectedEnquiry.phone}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-slate-500">
                    <Clock className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                    <span>{new Date(selectedEnquiry.created_at).toLocaleString()}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-700 mb-1">Subject</h4>
                  <p className="text-xs font-semibold text-forest">
                    {selectedEnquiry.subject}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-700 mb-1">Message</h4>
                  <div className="p-3.5 rounded-xl bg-slate-50 text-xs text-slate-800 leading-relaxed whitespace-pre-wrap">
                    {selectedEnquiry.message}
                  </div>
                </div>

                <div className="pt-2">
                  <h4 className="text-xs font-bold text-slate-700 mb-2">Update Status</h4>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleUpdateStatus(selectedEnquiry.id, "pending")}
                      className={`text-xs ${
                        selectedEnquiry.status === "pending" ? "border-amber-500 bg-amber-50 font-bold" : ""
                      }`}
                    >
                      Pending
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleUpdateStatus(selectedEnquiry.id, "contacted")}
                      className={`text-xs ${
                        selectedEnquiry.status === "contacted" ? "border-blue-500 bg-blue-50 font-bold" : ""
                      }`}
                    >
                      Mark Contacted
                    </Button>
                    <Button
                      size="sm"
                      variant="default"
                      onClick={() => handleUpdateStatus(selectedEnquiry.id, "completed")}
                      className={`text-xs ${
                        selectedEnquiry.status === "completed" ? "bg-emerald-600 font-bold" : ""
                      }`}
                    >
                      Mark Completed
                    </Button>
                  </div>
                </div>
              </Card>
            ) : (
              <div className="p-12 text-center text-slate-400 text-xs bg-white rounded-2xl border border-slate-200">
                Select an enquiry from the list to view complete details and update action status.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
