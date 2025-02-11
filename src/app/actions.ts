"use server";

import { formSchema as eventSignupSchema } from "@/components/sign-up-form/schema";
import { TablesInsert } from "@/generated/database.types";
import { createClient } from "@/lib/supabase/server";

export async function createEventSignup(
  eventSignup: TablesInsert<"EventSignup">,
) {
  const result = eventSignupSchema.safeParse(eventSignup);
  if (result.error) {
    return;
  }

  const supabase = await createClient();
  return supabase.from("EventSignup").insert(eventSignup);
}
