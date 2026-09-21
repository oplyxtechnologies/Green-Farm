"use client";

import React, { useState } from "react";
import { DashboardHeader } from "../../../components/DashboardHeader";
import { Button, Input, Textarea, Card, CardContent } from "@green-farm/ui";
import { Save, CheckCircle2 } from "lucide-react";

export default function AdminCmsSettingsPage() {
  const [videoUrl, setVideoUrl] = useState(
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  );
  const [headline, setHeadline] = useState(
    "Nourishing Nepal With Sustainable Agriculture"
  );
  const [subheading, setSubheading] = useState(
    "Green Nepal Krishi Farm unites modern precision farming technologies with nutrient-dense Himalayan soils to deliver organic, high-yield produce."
  );
  const [phone, setPhone] = useState("+977 1-4XXXXXX / +977 98XXXXXXXX");
  const [email, setEmail] = useState("wholesale@greennepalkrishi.com");
  const [address, setAddress] = useState("Chitwan Valley & Kathmandu Valley, Nepal");
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div>
      <DashboardHeader title="Site CMS &amp; Brand Settings" />

      <div className="p-8 max-w-4xl mx-auto space-y-6">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Public Site Content Configuration</h2>
          <p className="text-xs text-slate-500">
            Control key branding elements, hero video media, and contact information.
          </p>
        </div>

        {saved && (
          <div className="flex items-center gap-2 rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-xs font-semibold text-emerald-800">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            CMS settings saved successfully to farm configuration!
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-6">
          {/* Hero Media */}
          <Card className="border-slate-200 bg-white p-6 space-y-4">
            <h3 className="font-bold text-slate-800 text-sm">Homepage Hero Video &amp; Text</h3>
            
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Background Video URL (MP4)
              </label>
              <Input
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                placeholder="https://..."
              />
              <p className="text-[11px] text-slate-500 mt-1">
                Direct URL to optimized MP4 video stream (HTML5 video hero).
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Hero Main Headline
              </label>
              <Input
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Hero Subheading / Tagline
              </label>
              <Textarea
                rows={3}
                value={subheading}
                onChange={(e) => setSubheading(e.target.value)}
              />
            </div>
          </Card>

          {/* Farm Contact & Operational Details */}
          <Card className="border-slate-200 bg-white p-6 space-y-4">
            <h3 className="font-bold text-slate-800 text-sm">Official Contact &amp; Headquarters</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Primary Phone Numbers
                </label>
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Wholesale Email
                </label>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Physical Office &amp; Farm Farmland Address
              </label>
              <Input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </Card>

          <div className="flex justify-end">
            <Button type="submit" className="gap-2 bg-farm-600 hover:bg-farm-700 text-white">
              <Save className="h-4 w-4" />
              Save CMS Changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
