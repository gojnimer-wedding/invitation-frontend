import { SUPABASE_URL, SUPABASE_ANON_KEY } from "astro:env/server";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "../types/supabase";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);
