"use client";

import React, { useState, useEffect } from "react";
import { DashboardHeader } from "../../../components/DashboardHeader";
import { createBrowserClient } from "@green-farm/db/client";
import type { News, NewsInsert } from "@green-farm/db/types";
import { Button, Input, Textarea, Card, Badge } from "@green-farm/ui";
import { Plus, Trash2, Newspaper, RefreshCw, Loader2, Calendar } from "lucide-react";

const sampleArticles: News[] = [
  {
    id: "news-1",
    title: "Green Nepal Krishi Farm Expands Sustainable Drip Irrigation Network",
    slug: "expands-sustainable-drip-irrigation",
    excerpt: "Installed smart solar drip irrigation covering 40 additional hectares.",
    content: "Full detailed story regarding water conservation and yield increase.",
    cover_image: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&w=1200&q=80",
    author: "Farm Director",
    published_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    created_at: new Date().toISOString(),
  },
  {
    id: "news-2",
    title: "Annual Harvest Festival 2026: Celebrating Community and Soil Health",
    slug: "annual-harvest-festival-2026",
    excerpt: "Join us next month as Green Nepal opens its gates to local cooperatives.",
    content: "Full story covering farm tours, workshops, and tasting sessions.",
    cover_image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
    author: "Community Liaison",
    published_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    created_at: new Date().toISOString(),
  },
];

export default function AdminBlogPage() {
  const [articles, setArticles] = useState<News[]>(sampleArticles);
  const [loading, setLoading] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  // Form State
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("Green Nepal Team");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [saving, setSaving] = useState(false);

  const fetchArticles = async () => {
    setLoading(true);
    try {
      const supabase = createBrowserClient();
      const { data, error } = await supabase
        .from("news")
        .select("*")
        .order("published_at", { ascending: false });

      if (!error && data && data.length > 0) {
        setArticles(data as News[]);
      }
    } catch {
      // Keep sample
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleAddArticle = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const newArticle: NewsInsert = {
      title,
      slug: title.toLowerCase().replace(/\s+/g, "-"),
      author,
      excerpt,
      content,
      cover_image:
        coverImage ||
        "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
      published_at: new Date().toISOString(),
    };

    try {
      const supabase = createBrowserClient();
      const { data, error } = await supabase
        .from("news")
        .insert([newArticle])
        .select();

      if (!error && data && data.length > 0) {
        setArticles([data[0] as News, ...articles]);
      } else {
        const simulated: News = {
          ...newArticle,
          id: `local-${Date.now()}`,
          created_at: new Date().toISOString(),
        };
        setArticles([simulated, ...articles]);
      }

      setShowAddModal(false);
      setTitle("");
      setExcerpt("");
      setContent("");
      setCoverImage("");
    } catch {
      // fallback
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const supabase = createBrowserClient();
      await supabase.from("news").delete().eq("id", id);
    } catch {
      // ignore
    }
    setArticles(articles.filter((a) => a.id !== id));
  };

  return (
    <div>
      <DashboardHeader title="News &amp; Blog Article Management" />

      <div className="p-8 max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-800">Published News</h2>
            <p className="text-xs text-slate-500">
              Manage stories, harvest announcements, and field insights.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={fetchArticles}
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
              Write Article
            </Button>
          </div>
        </div>

        <Card className="border-slate-200 bg-white overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-xs font-semibold text-slate-700 border-b border-slate-200 uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4">Title</th>
                  <th className="px-6 py-4">Author</th>
                  <th className="px-6 py-4">Published Date</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {articles.map((art) => (
                  <tr key={art.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-900 flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg overflow-hidden bg-slate-100 shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={art.cover_image || ""}
                          alt={art.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <span>{art.title}</span>
                        <span className="block text-xs font-normal text-slate-500 truncate max-w-sm">
                          {art.excerpt}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-xs font-medium text-slate-700">
                      {art.author || "Green Nepal Team"}
                    </td>
                    <td className="px-6 py-4 text-xs text-slate-500">
                      {art.published_at
                        ? new Date(art.published_at).toLocaleDateString()
                        : "Draft"}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => handleDelete(art.id)}
                        className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                        title="Delete Article"
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

        {/* Modal: Write Article */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
            <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl border border-slate-200">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <h3 className="text-lg font-bold text-slate-800">Publish News Story</h3>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="text-slate-400 hover:text-slate-600 text-sm"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleAddArticle} className="mt-4 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Article Title *
                  </label>
                  <Input
                    required
                    placeholder="e.g. 2026 Monsoon Sowing Begins Across Farm Plots"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Author
                  </label>
                  <Input
                    placeholder="e.g. Lead Agronomist"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Cover Image URL
                  </label>
                  <Input
                    placeholder="https://images.unsplash.com/..."
                    value={coverImage}
                    onChange={(e) => setCoverImage(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Short Summary / Excerpt *
                  </label>
                  <Input
                    required
                    placeholder="Brief 1-2 sentence preview..."
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Content *
                  </label>
                  <Textarea
                    required
                    rows={6}
                    placeholder="Write the full news story..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
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
                  <Button type="submit" disabled={saving}>
                    {saving ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
                    Publish Article
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
