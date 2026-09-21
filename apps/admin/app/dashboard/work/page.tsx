"use client";

import React, { useState } from "react";
import { DashboardHeader } from "../../../components/DashboardHeader";
import { Button, Input, Textarea, Card, Badge } from "@green-farm/ui";
import { Briefcase, Plus, Trash2, MapPin, Clock } from "lucide-react";

interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  status: "active" | "filled";
}

const initialJobs: JobPosting[] = [
  {
    id: "job-1",
    title: "Polyhouse & Greenhouse Agronomist",
    department: "Agronomy & Cultivation",
    location: "Chitwan / Kathmandu, Nepal",
    type: "Full-time",
    status: "active",
  },
  {
    id: "job-2",
    title: "Precision Irrigation & Solar Technician",
    department: "Engineering & Maintenance",
    location: "Chitwan, Nepal",
    type: "Full-time",
    status: "active",
  },
  {
    id: "job-3",
    title: "Wholesale Distribution & Logistics Coordinator",
    department: "Commercial & Sales",
    location: "Kathmandu, Nepal",
    type: "Full-time",
    status: "active",
  },
];

export default function AdminWorkPage() {
  const [jobs, setJobs] = useState<JobPosting[]>(initialJobs);
  const [showModal, setShowModal] = useState(false);

  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState("Agronomy & Cultivation");
  const [location, setLocation] = useState("Chitwan, Nepal");
  const [type, setType] = useState("Full-time");

  const handleAddJob = (e: React.FormEvent) => {
    e.preventDefault();
    const newJob: JobPosting = {
      id: `job-${Date.now()}`,
      title,
      department,
      location,
      type,
      status: "active",
    };
    setJobs([newJob, ...jobs]);
    setShowModal(false);
    setTitle("");
  };

  const handleDelete = (id: string) => {
    setJobs(jobs.filter((j) => j.id !== id));
  };

  return (
    <div>
      <DashboardHeader title="Work, Operations &amp; Careers Manager" />

      <div className="p-8 max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-800">Careers &amp; Job Postings</h2>
            <p className="text-xs text-slate-500">
              Manage employment opportunities listed on the public Careers page.
            </p>
          </div>
          <Button
            size="sm"
            onClick={() => setShowModal(true)}
            className="gap-2 bg-farm-600 hover:bg-farm-700 text-white"
          >
            <Plus className="h-4 w-4" />
            Post New Opening
          </Button>
        </div>

        <Card className="border-slate-200 bg-white overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-xs font-semibold text-slate-700 border-b border-slate-200 uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4">Position Title</th>
                  <th className="px-6 py-4">Department</th>
                  <th className="px-6 py-4">Location</th>
                  <th className="px-6 py-4">Type</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {jobs.map((job) => (
                  <tr key={job.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-900">
                      {job.title}
                    </td>
                    <td className="px-6 py-4 text-xs font-medium text-slate-600">
                      {job.department}
                    </td>
                    <td className="px-6 py-4 text-xs text-slate-500">
                      {job.location}
                    </td>
                    <td className="px-6 py-4 text-xs">
                      <Badge variant="outline">{job.type}</Badge>
                    </td>
                    <td className="px-6 py-4 text-xs">
                      <Badge variant={job.status === "active" ? "success" : "secondary"}>
                        {job.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => handleDelete(job.id)}
                        className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                        title="Remove Posting"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
            <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl border border-slate-200">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <h3 className="text-lg font-bold text-slate-800">New Job Opening</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-slate-400 hover:text-slate-600 text-sm"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleAddJob} className="mt-4 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Job Title *
                  </label>
                  <Input
                    required
                    placeholder="e.g. Senior Agronomist"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Department
                  </label>
                  <Input
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Location
                  </label>
                  <Input
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Employment Type
                  </label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full h-11 rounded-xl border border-farm-200 bg-white px-3 text-sm"
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Seasonal / Contract</option>
                    <option value="Internship">Agro Internship</option>
                  </select>
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit">Save Position</Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
