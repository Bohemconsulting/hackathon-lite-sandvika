"use server";

import { TablesInsert } from "@/generated/database.types";
import { createClient } from "@/lib/supabase/server";

export async function createEventSignup(
  eventSignup: TablesInsert<"EventSignup">,
) {
  const supabase = await createClient();
  return supabase.from("EventSignup").insert(eventSignup);
}
