-- ==============================================================================
-- Green Nepal Krishi Farm - Supabase Database Schema
-- Run this script in your Supabase SQL Editor (Dashboard -> SQL Editor -> New Query)
-- ==============================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ------------------------------------------------------------------------------
-- 1. Table: produce (Farm crops, fruits, vegetables, grains)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.produce (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE,
    category VARCHAR(100) DEFAULT 'Vegetables', -- 'Vegetables', 'Fruits', 'Grains', 'Herbs', 'Dairy'
    description TEXT NOT NULL,
    image_url TEXT,
    season VARCHAR(100) NOT NULL, -- e.g. 'Spring / Summer', 'Year-round', 'Winter / Autumn'
    is_featured BOOLEAN DEFAULT false,
    price_estimate VARCHAR(100), -- e.g. 'NPR 120 / kg'
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for fast querying by season and featured
CREATE INDEX IF NOT EXISTS idx_produce_season ON public.produce (season);
CREATE INDEX IF NOT EXISTS idx_produce_featured ON public.produce (is_featured);

-- ------------------------------------------------------------------------------
-- 2. Table: news (Farming news, harvest milestones, company announcements)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.news (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE,
    excerpt TEXT,
    content TEXT NOT NULL,
    cover_image TEXT,
    author VARCHAR(100) DEFAULT 'Green Nepal Team',
    published_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for querying published news
CREATE INDEX IF NOT EXISTS idx_news_published_at ON public.news (published_at DESC);

-- ------------------------------------------------------------------------------
-- 3. Table: enquiries (B2B wholesale, consumer queries, contact requests)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.enquiries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    subject VARCHAR(255),
    message TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'contacted', 'completed', 'archived'
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for querying pending enquiries
CREATE INDEX IF NOT EXISTS idx_enquiries_status ON public.enquiries (status);
CREATE INDEX IF NOT EXISTS idx_enquiries_created_at ON public.enquiries (created_at DESC);

-- ------------------------------------------------------------------------------
-- Row Level Security (RLS) Configuration
-- ------------------------------------------------------------------------------

-- Enable RLS on all tables
ALTER TABLE public.produce ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.news ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

-- 1. Produce Policies:
-- Public can read all produce
CREATE POLICY "Allow public read access on produce"
    ON public.produce FOR SELECT
    USING (true);

-- Authenticated admins have full CRUD on produce
CREATE POLICY "Allow authenticated full access on produce"
    ON public.produce FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- 2. News Policies:
-- Public can read published news
CREATE POLICY "Allow public read access on news"
    ON public.news FOR SELECT
    USING (published_at IS NOT NULL AND published_at <= NOW());

-- Authenticated admins have full CRUD on news
CREATE POLICY "Allow authenticated full access on news"
    ON public.news FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- 3. Enquiries Policies:
-- Anyone (public anonymous) can insert an enquiry via the contact form
CREATE POLICY "Allow public insert on enquiries"
    ON public.enquiries FOR INSERT
    WITH CHECK (true);

-- Authenticated admins can view, update, delete enquiries
CREATE POLICY "Allow authenticated full access on enquiries"
    ON public.enquiries FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- ------------------------------------------------------------------------------
-- Seed Sample Data for Green Nepal Krishi Farm
-- ------------------------------------------------------------------------------

INSERT INTO public.produce (title, slug, category, description, image_url, season, is_featured, price_estimate)
VALUES
('Organic Himalayan Apples', 'organic-himalayan-apples', 'Fruits', 'Crisp, aromatic apples cultivated sustainably in high-altitude orchards in Nepal.', 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=800&q=80', 'Autumn / Winter', true, 'NPR 180 / kg'),
('Fresh Mustard Greens (Tori ko Saag)', 'fresh-mustard-greens', 'Vegetables', 'Nutrient-packed traditional Nepalese organic mustard greens harvested fresh at dawn.', 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80', 'Winter', true, 'NPR 60 / bunch'),
('Organic Basmati Rice (Paddy)', 'organic-basmati-rice', 'Grains', 'Aromatic long-grain basmati rice cultivated using natural river irrigation and bio-fertilizers.', 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80', 'Year-round', true, 'NPR 220 / kg'),
('Highland Honeycomb & Raw Honey', 'highland-raw-honey', 'Herbs', 'Pure multifloral raw honey harvested responsibly from our farm apiaries.', 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80', 'Spring / Summer', false, 'NPR 950 / 500g'),
('Heirloom Greenhouse Tomatoes', 'heirloom-greenhouse-tomatoes', 'Vegetables', 'Juicy vine-ripened tomatoes grown in climate-controlled polyhouses with zero synthetic pesticides.', 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80', 'Year-round', true, 'NPR 90 / kg')
ON CONFLICT DO NOTHING;

INSERT INTO public.news (title, slug, excerpt, content, cover_image, author, published_at)
VALUES
('Green Nepal Krishi Farm Expands Sustainable Drip Irrigation Network', 'expands-sustainable-drip-irrigation', 'Our farm has installed smart solar drip irrigation covering 40 additional hectares, cutting water usage by 45%.', 'We are proud to announce the successful installation of our expanded smart drip irrigation system powered entirely by photovoltaic solar arrays. This project demonstrates our commitment to water conservation in Nepalese agriculture while increasing yield efficiency for seasonal crops.', 'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&w=1200&q=80', 'Farm Director', NOW() - INTERVAL '2 days'),
('Annual Harvest Festival 2026: Celebrating Community and Soil Health', 'annual-harvest-festival-2026', 'Join us next month as Green Nepal Krishi Farm opens its gates to local cooperatives, students, and agricultural partners.', 'Soil fertility and community empowerment remain the pillars of our success. During our 2026 Harvest Festival, attendees will experience bio-composting workshops, farm tours, and farm-to-table tasting sessions featuring organic local delicacies.', 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80', 'Community Liaison', NOW() - INTERVAL '7 days')
ON CONFLICT DO NOTHING;
