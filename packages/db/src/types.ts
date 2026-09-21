export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type GenericRelationship = {
  foreignKeyName: string;
  columns: string[];
  isOneToOne?: boolean;
  referencedRelation: string;
  referencedColumns: string[];
};

export type Database = {
  public: {
    Tables: {
      produce: {
        Row: Produce;
        Insert: ProduceInsert;
        Update: ProduceUpdate;
        Relationships: GenericRelationship[];
      };
      news: {
        Row: News;
        Insert: NewsInsert;
        Update: NewsUpdate;
        Relationships: GenericRelationship[];
      };
      enquiries: {
        Row: Enquiry;
        Insert: EnquiryInsert;
        Update: EnquiryUpdate;
        Relationships: GenericRelationship[];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

export type Produce = {
  [key: string]: unknown;
  id: string;
  title: string;
  slug?: string | null;
  category?: string | null;
  description: string;
  image_url?: string | null;
  season: string;
  is_featured?: boolean | null;
  price_estimate?: string | null;
  created_at: string;
  updated_at?: string | null;
};

export type ProduceInsert = {
  [key: string]: unknown;
  id?: string;
  title: string;
  slug?: string | null;
  category?: string | null;
  description: string;
  image_url?: string | null;
  season: string;
  is_featured?: boolean | null;
  price_estimate?: string | null;
  created_at?: string;
  updated_at?: string | null;
};

export type ProduceUpdate = {
  [key: string]: unknown;
  id?: string;
  title?: string;
  slug?: string | null;
  category?: string | null;
  description?: string;
  image_url?: string | null;
  season?: string;
  is_featured?: boolean | null;
  price_estimate?: string | null;
  created_at?: string;
  updated_at?: string | null;
};

export type News = {
  [key: string]: unknown;
  id: string;
  title: string;
  slug?: string | null;
  excerpt?: string | null;
  content: string;
  cover_image?: string | null;
  author?: string | null;
  published_at?: string | null;
  created_at: string;
  updated_at?: string | null;
};

export type NewsInsert = {
  [key: string]: unknown;
  id?: string;
  title: string;
  slug?: string | null;
  excerpt?: string | null;
  content: string;
  cover_image?: string | null;
  author?: string | null;
  published_at?: string | null;
  created_at?: string;
  updated_at?: string | null;
};

export type NewsUpdate = {
  [key: string]: unknown;
  id?: string;
  title?: string;
  slug?: string | null;
  excerpt?: string | null;
  content?: string;
  cover_image?: string | null;
  author?: string | null;
  published_at?: string | null;
  created_at?: string;
  updated_at?: string | null;
};

export type EnquiryStatus = "pending" | "contacted" | "completed" | "archived";

export type Enquiry = {
  [key: string]: unknown;
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  subject?: string | null;
  message: string;
  status: EnquiryStatus;
  notes?: string | null;
  created_at: string;
  updated_at?: string | null;
};

export type EnquiryInsert = {
  [key: string]: unknown;
  id?: string;
  name: string;
  email: string;
  phone?: string | null;
  subject?: string | null;
  message: string;
  status?: EnquiryStatus;
  notes?: string | null;
  created_at?: string;
  updated_at?: string | null;
};

export type EnquiryUpdate = {
  [key: string]: unknown;
  id?: string;
  name?: string;
  email?: string;
  phone?: string | null;
  subject?: string | null;
  message?: string;
  status?: EnquiryStatus;
  notes?: string | null;
  created_at?: string;
  updated_at?: string | null;
};
