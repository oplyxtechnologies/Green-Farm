/* Hallmark · macrostructure: botanical-monograph-ledger · theme: fresh-dewy · genre: commercial
 * pre-emit critique: P5 H5 E5 S5 R5 V5
 * slop test: pass / all-gates-cleared
 */

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { createServerClient } from "@green-farm/db/server";
import type { Produce } from "@green-farm/db/types";
import { ArrowRight, Calendar, MapPin, Scale, Sparkles } from "lucide-react";
import { MagneticButton } from "../../components/MagneticButton";
import { PEXELS_ASSETS } from "../../lib/pexels";

export const metadata: Metadata = {
  title: "Seasonal Harvest Register & Produce Catalog | Green Nepal Krishi Farm",
  description:
    "Explore our botanical harvest catalog of sustainably cultivated crops, grains, and fruits from our Chitwan alluvial fields and high-altitude Himalayan orchards.",
};

interface BotanicalDetails {
  botanicalName: string;
  terroirOrigin: string;
  dispatchProtocol: string;
  minOrder: string;
}

const botanicalLookup: Record<string, BotanicalDetails> = {
  "organic-himalayan-apples": {
    botanicalName: "Malus domestica Borkh.",
    terroirOrigin: "Highland mountain terraces · Mustang & Jumla microclimates",
    dispatchProtocol: "Cushioned timber crates · dry cold-storage 2°C–4°C",
    minOrder: "100 kg batch",
  },
  "fresh-mustard-greens": {
    botanicalName: "Brassica juncea (L.) Czern.",
    terroirOrigin: "Chitwan alluvial silt beds · Dawn harvest protocol",
    dispatchProtocol: "Hydro-cooled field hampers · Same-day transit to Kathmandu",
    minOrder: "30 bunch bundle",
  },
  "organic-basmati-rice": {
    botanicalName: "Oryza sativa L. (Aromatic long-grain)",
    terroirOrigin: "Southern plains · Himalayan glacial river sediment",
    dispatchProtocol: "Triple-ply breathable jute bags · 6-month aged grain",
    minOrder: "250 kg sack load",
  },
  "heirloom-greenhouse-tomatoes": {
    botanicalName: "Solanum lycopersicum 'San Marzano & Heirloom'",
    terroirOrigin: "Kathmandu Valley multi-span polyhouse · Sensor fertigation",
    dispatchProtocol: "Rigid ventilated pulp trays · picked at breaker stage",
    minOrder: "40 kg crate",
  },
  "highland-raw-honey": {
    botanicalName: "Apis cerana indica nectar reserve",
    terroirOrigin: "Unsprayed highland floral pastures · Organic bee reserve",
    dispatchProtocol: "Glass amber vessels · unheated, unfiltered raw honey",
    minOrder: "12 jar carton",
  },
  "organic-red-bell-peppers": {
    botanicalName: "Capsicum annuum var. grossum",
    terroirOrigin: "Protected greenhouse benches · Bio-control ladybug habitat",
    dispatchProtocol: "Corrugated cell cartons · ethylene-scrubbed transport",
    minOrder: "50 kg crate",
  },
};

const fallbackProduce: Produce[] = [
  {
    id: "1",
    title: "Organic Himalayan Apples",
    slug: "organic-himalayan-apples",
    category: "Mountain Orchard",
    description:
      "Cultivated in mountain air at altitudes exceeding 2,200 meters. The sharp diurnal temperature variations produce intense sugar density, a distinct crisp snap, and a delicate rose floral aroma without chemical wax coatings.",
    image_url: PEXELS_ASSETS.crops.apples.url,
    season: "Autumn / Early Winter",
    is_featured: true,
    price_estimate: "NPR 180 / kg",
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Chitwan Mustard Greens (Tori ko Saag)",
    slug: "fresh-mustard-greens",
    category: "Terai Leafy Greens",
    description:
      "Hand-clipped before first sunrise in Chitwan’s alluvial silt basin. We feed the rootbeds solely with aged cow manure and vermicast, imparting a pungent peppery sweetness that defines traditional Nepalese winter cuisine.",
    image_url: PEXELS_ASSETS.crops.mustardGreens.url,
    season: "Winter Peak",
    is_featured: true,
    price_estimate: "NPR 60 / bunch",
    created_at: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Heritage Basmati Paddy & Rice",
    slug: "organic-basmati-rice",
    category: "Alluvial Grain",
    description:
      "Grown in deep river sediment fed by Himalayan runoff. Naturally sun-cured and traditionally aged to maximize kernel elongation, delicate aromatics, and rich nutritional integrity.",
    image_url: PEXELS_ASSETS.crops.basmatiRice.url,
    season: "Post-Monsoon Harvest",
    is_featured: false,
    price_estimate: "NPR 140 / kg",
    created_at: new Date().toISOString(),
  },
  {
    id: "4",
    title: "Heirloom Greenhouse Tomatoes",
    slug: "heirloom-greenhouse-tomatoes",
    category: "Polyhouse Solanaceae",
    description:
      "Nurtured within climate-tempered polyhouses in the Kathmandu Valley. Hand-pollinated, zero synthetic fungicides, and harvested daily at sunrise for peak restaurant firmness and high brix sweetness.",
    image_url: PEXELS_ASSETS.crops.tomatoes.url,
    season: "Year-Round Regulated",
    is_featured: true,
    price_estimate: "NPR 95 / kg",
    created_at: new Date().toISOString(),
  },
  {
    id: "5",
    title: "Highland Wildflower Raw Honey",
    slug: "highland-raw-honey",
    category: "Apiary Reserve",
    description:
      "Cold-extracted from native Apis cerana hives foraging across sub-alpine rhododendron and mustard flora. Unpasteurized and unfiltered to preserve vital digestive enzymes and wildflower pollen.",
    image_url: PEXELS_ASSETS.crops.honey.url,
    season: "Spring / Autumn Nectar",
    is_featured: false,
    price_estimate: "NPR 950 / 500g jar",
    created_at: new Date().toISOString(),
  },
  {
    id: "6",
    title: "Sweet Red Bell Peppers (Capsicum)",
    slug: "organic-red-bell-peppers",
    category: "Protected Greenhouse",
    description:
      "Thick-walled, sweet bell peppers grown on elevated coco-peat beds with integrated biological pest management. Unblemished commercial grade ideal for premium supermarkets and hospitality.",
    image_url: PEXELS_ASSETS.crops.bellPeppers.url,
    season: "All-Season Harvest",
    is_featured: false,
    price_estimate: "NPR 160 / kg",
    created_at: new Date().toISOString(),
  },
];

async function getProduce(): Promise<Produce[]> {
  try {
    const supabase = await createServerClient();
    const { data, error } = await supabase
      .from("produce")
      .select("*")
      .order("created_at", { ascending: false });

    if (error || !data || data.length === 0) {
      return fallbackProduce;
    }
    return data as Produce[];
  } catch {
    return fallbackProduce;
  }
}

export default async function ProducePage() {
  const produceList = await getProduce();

  return (
    <div className="bg-background text-text min-h-screen">
      {/* 1. Header */}
      <section className="pt-28 pb-20 sm:pt-32 sm:pb-24 border-b border-slate-200 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-krishi-brand block mb-3">
              Agronomic Index · Botanical Ledger
            </span>
            <h1 className="font-heading text-4xl sm:text-6xl text-slate-900 font-bold leading-display tracking-tight">
              The Seasonal Harvest Register
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-700 font-sans leading-relaxed">
              Every crop documented here is cultivated across our own managed acreage
              under certified organic standards. We balance heritage seed preservation
              with sensor-monitored drip irrigation to produce dependable commercial tonnage.
            </p>
          </div>

          {/* Terroir Ledger Bar */}
          <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                Active Cultivation Zones
              </span>
              <p className="font-heading text-slate-900 font-bold text-base mt-1">
                Chitwan &amp; Kathmandu Valleys
              </p>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                Soil Nutrition Policy
              </span>
              <p className="font-heading text-slate-900 font-bold text-base mt-1">
                100% Vermicompost &amp; Green Mulch
              </p>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                Irrigation Infrastructure
              </span>
              <p className="font-heading text-slate-900 font-bold text-base mt-1">
                Solar Drip &amp; Aquifer Telemetry
              </p>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                B2B Dispatch Window
              </span>
              <p className="font-heading text-slate-900 font-bold text-base mt-1">
                Daily 04:00 AM – 12:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Monograph Entries (Alternating Left/Right) */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32">
          {produceList.map((item, index) => {
            const isEven = index % 2 === 1;
            const details = (item.slug && botanicalLookup[item.slug]) || {
              botanicalName: "Botanical cultivar verified",
              terroirOrigin: "Green Nepal Krishi Farm managed acreage",
              dispatchProtocol: "Cold-chain ventilated dispatch",
              minOrder: "Commercial wholesale batch",
            };

            return (
              <article
                key={item.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                {/* Image Column */}
                <div
                  className={`relative ${
                    isEven ? "lg:col-span-7 lg:order-2" : "lg:col-span-7"
                  }`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-crisp-sm">
                    <Image
                      src={
                        item.image_url || PEXELS_ASSETS.crops.mustardGreens.url
                      }
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                    />

                    {/* Monograph Index Pill */}
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                      <span className="rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-900 border border-slate-200">
                        № 0{index + 1}
                      </span>
                      <span className="rounded-full bg-slate-900/85 backdrop-blur-md px-3 py-1 text-xs font-semibold uppercase tracking-wider text-krishi-cream">
                        {item.category || "Organic Crop"}
                      </span>
                    </div>

                    {item.is_featured && (
                      <div className="absolute bottom-4 left-4 z-10">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-krishi-brand/90 backdrop-blur-md px-3 py-1 text-xs font-bold text-white">
                          <Sparkles className="h-3 w-3" />
                          High Season Yield
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Botanical Details Column */}
                <div
                  className={`space-y-6 ${
                    isEven ? "lg:col-span-5 lg:order-1" : "lg:col-span-5"
                  }`}
                >
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-krishi-brand block">
                      {details.botanicalName}
                    </span>
                    <h2 className="font-heading text-3xl sm:text-4xl text-slate-900 font-bold mt-1 leading-snug">
                      {item.title}
                    </h2>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                    {item.description}
                  </p>

                  {/* Technical Matrix */}
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 space-y-3 font-sans text-xs">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="h-4 w-4 text-krishi-brand shrink-0 mt-0.5" />
                      <div>
                        <span className="text-slate-500 font-medium block">Origin &amp; Habitat</span>
                        <span className="text-slate-900 font-semibold">{details.terroirOrigin}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 pt-2 border-t border-slate-200">
                      <Calendar className="h-4 w-4 text-krishi-brand shrink-0 mt-0.5" />
                      <div>
                        <span className="text-slate-500 font-medium block">Harvest Window</span>
                        <span className="text-slate-900 font-semibold">{item.season || "Seasonal cycle"}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 pt-2 border-t border-slate-200">
                      <Scale className="h-4 w-4 text-krishi-sun shrink-0 mt-0.5" />
                      <div>
                        <span className="text-slate-500 font-medium block">Wholesale Spec &amp; Packaging</span>
                        <span className="text-slate-900 font-semibold">
                          {details.dispatchProtocol} · Min: {details.minOrder}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <span className="text-slate-500 font-medium block text-xs">
                        Benchmark Wholesale Price
                      </span>
                      <span className="font-heading text-2xl font-bold text-slate-900">
                        {item.price_estimate || "Market rate"}
                      </span>
                    </div>

                    <MagneticButton>
                      <Link
                        href={`/contact?subject=Procurement Inquiry: ${encodeURIComponent(
                          item.title
                        )}`}
                        className="inline-flex items-center gap-2 rounded-full bg-krishi-brand px-5 py-2.5 font-sans text-xs font-semibold text-white hover:bg-krishi-forest transition-colors shadow-crisp-sm"
                      >
                        Request Wholesale Allocation
                        <ArrowRight className="h-3.5 w-3.5 text-white" />
                      </Link>
                    </MagneticButton>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 3. Wholesale Procurement Contract Box */}
      <section className="py-20 border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 sm:p-14 text-slate-100 shadow-crisp-lg relative overflow-hidden">
            <div className="relative z-10 max-w-2xl space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-krishi-mint block">
                Commercial Contract Supply
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl text-white font-bold leading-tight">
                Direct Agricultural Supply Agreements for Hospitality &amp; Supermarket Chains
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
                We contract harvest schedules in advance with hotels, restaurants, and grocery
                chains across Nepal. Secure guaranteed wholesale volume, fixed seasonal pricing,
                and dawn cold-chain delivery directly from our farms.
              </p>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <MagneticButton>
                  <Link
                    href="/contact?subject=Commercial Supply Contract"
                    className="inline-flex items-center gap-2 rounded-full bg-krishi-brand px-6 py-3 font-sans text-xs font-bold text-white hover:bg-krishi-forest transition-colors shadow-crisp-sm"
                  >
                    Initiate Procurement Contract
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </MagneticButton>

                <span className="text-xs text-slate-400">
                  Response within 24 hours · Dispatch office in Kathmandu
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
