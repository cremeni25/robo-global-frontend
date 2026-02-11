import { supabase } from "./supabase";

export async function fetchNichos() {
  const { data, error } = await supabase
    .from("nichos")
    .select("*")
    .order("title");

  if (error) {
    console.error("[SUPABASE] [ERROR]", error);
    throw error;
  }

  return data;
}
