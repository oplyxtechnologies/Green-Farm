import { createBrowserClient as createSupabaseBrowserClient } from "@supabase/ssr";
import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "./types";

/**
 * Creates a Supabase client for use in Browser / Client Components ("use client").
 * Safe to instantiate multiple times or use as a singleton in the browser.
 */
export function createBrowserClient(): SupabaseClient<Database> {
  const supabaseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL ||
    "https://placeholder-supabase-url.supabase.co";
  const supabaseAnonKey =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key";

  return createSupabaseBrowserClient(
    supabaseUrl,
    supabaseAnonKey
  ) as unknown as SupabaseClient<Database>;
}
