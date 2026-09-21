"use client";

import React, { useState, useEffect } from "react";
import { DashboardHeader } from "../../../components/DashboardHeader";
import { createBrowserClient } from "@green-farm/db/client";
import type { Produce, ProduceInsert } from "@green-farm/db/types";
import { Button, Input, Textarea, Card, CardContent, Badge } from "@green-farm/ui";
import { Plus, Trash2, Wheat, Loader2, Check, RefreshCw } from "lucide-react";

const initialSampleCrops: Produce[] = [
  {
    id: "prod-1",
    title: "Organic Himalayan Apples",
    slug: "organic-himalayan-apples",
    category: "Fruits",
    description: "Crisp, aromatic apples cultivated sustainably in high-altitude orchards.",
    image_url: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=800&q=80",
    season: "Autumn / Winter",
    is_featured: true,
    price_estimate: "NPR 180 / kg",
    created_at: new Date().toISOString(),
  },
  {
    id: "prod-2",
    title: "Fresh Mustard Greens (Tori ko Saag)",
    slug: "fresh-mustard-greens",
    category: "Vegetables",
    description: "Nutrient-packed traditional Nepalese organic mustard greens.",
    image_url: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    season: "Winter",
    is_featured: true,
    price_estimate: "NPR 60 / bunch",
    created_at: new Date().toISOString(),
  },
  {
    id: "prod-3",
    title: "Organic Basmati Rice (Paddy)",
    slug: "organic-basmati-rice",
    category: "Grains",
    description: "Aromatic long-grain basmati rice cultivated using natural river irrigation.",
    image_url: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
    season: "Year-round",
    is_featured: true,
    price_estimate: "NPR 220 / kg",
    created_at: new Date().toISOString(),
  },
];

export default function AdminProducePage() {
  const [crops, setCrops] = useState<Produce[]>(initialSampleCrops);
  const [loading, setLoading] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  // Form State
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Vegetables");
  const [season, setSeason] = useState("Year-round");
  const [priceEstimate, setPriceEstimate] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [isFeatured, setIsFeatured] = useState(false);
  const [saving, setSaving] = useState(false);

  const fetchCrops = async () => {
    setLoading(true);
    try {
      const supabase = createBrowserClient();
      const { data, error } = await supabase
        .from("produce")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data && data.length > 0) {
        setCrops(data as Produce[]);
      }
    } catch {
      // Keep sample
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCrops();
  }, []);

  const handleAddCrop = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const newCrop: ProduceInsert = {
      title,
      slug: title.toLowerCase().replace(/\s+/g, "-"),
      category,
      season,
      price_estimate: priceEstimate || "Market Rate",
      image_url: imageUrl || "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
      description,
      is_featured: isFeatured,
    };

    try {
      const supabase = createBrowserClient();
      const { data, error } = await supabase
        .from("produce")
        .insert([newCrop])
        .select();

      if (!error && data && data.length > 0) {
        setCrops([data[0] as Produce, ...crops]);
      } else {
        // Local simulation fallback
        const simulated: Produce = {
          ...newCrop,
          id: `local-${Date.now()}`,
          created_at: new Date().toISOString(),
        };
        setCrops([simulated, ...crops]);
      }

      setShowAddModal(false);
      setTitle("");
      setPriceEstimate("");
      setImageUrl("");
      setDescription("");
      setIsFeatured(false);
    } catch {
      // fallback
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const supabase = createBrowserClient();
      await supabase.from("produce").delete().eq("id", id);
    } catch {
      // ignore
    }
    setCrops(crops.filter((c) => c.id !== id));
  };

  return (
    <div>
      <DashboardHeader title="Crop & Produce Catalog Management" />

      <div className="p-8 max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-800">Cultivated Crops</h2>
            <p className="text-xs text-slate-500">
              Manage live produce listings visible on the public website.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={fetchCrops}
              className="gap-2"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </Button>
            <Button
              size="sm"
              onClick={() => setShowAddModal(true)}
              className="gap-2 bg-farm-600 hover:bg-farm-700 text-white"
            >
              <Plus className="h-4 w-4" />
              Add Produce
            </Button>
          </div>
        </div>

        {/* Crops Table */}
        <Card className="border-slate-200 bg-white overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-xs font-semibold text-slate-700 border-b border-slate-200 uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4">Produce</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Season</th>
                  <th className="px-6 py-4">Price Est.</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {crops.map((crop) => (
                  <tr key={crop.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-900 flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg overflow-hidden bg-slate-100 shrink-0 relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={crop.image_url || ""}
                          alt={crop.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <span>{crop.title}</span>
                        <span className="block text-xs font-normal text-slate-500 truncate max-w-xs">
                          {crop.description}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="outline">{crop.category || "Produce"}</Badge>
                    </td>
                    <td className="px-6 py-4 text-xs font-medium text-slate-700">
                      {crop.season}
                    </td>
                    <td className="px-6 py-4 text-xs font-semibold text-forest">
                      {crop.price_estimate || "Market Rate"}
                    </td>
                    <td className="px-6 py-4">
                      {crop.is_featured ? (
                        <Badge variant="harvest">Featured</Badge>
                      ) : (
                        <Badge variant="secondary">Standard</Badge>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => handleDelete(crop.id)}
                        className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                        title="Delete Produce"
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

        {/* Modal: Add Produce */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
            <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl border border-slate-200">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <h3 className="text-lg font-bold text-slate-800">Add New Crop</h3>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="text-slate-400 hover:text-slate-600 text-sm"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleAddCrop} className="mt-4 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Crop Name *
                  </label>
                  <Input
                    required
                    placeholder="e.g. Organic Cauliflower"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Category
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full h-11 rounded-xl border border-farm-200 bg-white px-3 text-sm"
                    >
                      <option value="Vegetables">Vegetables</option>
                      <option value="Fruits">Fruits</option>
                      <option value="Grains">Grains</option>
                      <option value="Herbs">Herbs</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Season
                    </label>
                    <Input
                      placeholder="e.g. Winter / Spring"
                      value={season}
                      onChange={(e) => setSeason(e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Price Estimate
                    </label>
                    <Input
                      placeholder="e.g. NPR 80 / kg"
                      value={priceEstimate}
                      onChange={(e) => setPriceEstimate(e.target.value)}
                    />
                  </div>
                  <div className="flex items-center pt-5">
                    <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={isFeatured}
                        onChange={(e) => setIsFeatured(e.target.checked)}
                        className="rounded text-farm-600"
                      />
                      Feature on Homepage
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Image URL
                  </label>
                  <Input
                    placeholder="https://images.unsplash.com/..."
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Description *
                  </label>
                  <Textarea
                    required
                    placeholder="Describe cultivation methods, varieties, and nutritional highlights..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowAddModal(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={saving} className="gap-2">
                    {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                    Save Produce
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
