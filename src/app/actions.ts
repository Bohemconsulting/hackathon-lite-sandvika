"use server";

import { TablesInsert } from "@/generated/database.types";
import { createClient } from "@/lib/supabase/server";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone_number: z.string().regex(/^[49][0-9]{7}$/),
  age: z.number(),
  gender: z.enum(["male", "female", "other"]),
  postal_code: z.number(),
  programming_competence: z.enum(["beginner", "experienced"]),
  hoodie_size: z.enum([
    "small",
    "medium",
    "large",
    "extra_large",
    "extra_extra_large",
  ]),
});

export async function createEventSignup(
  eventSignup: TablesInsert<"EventSignup">,
) {
  const result = formSchema.safeParse(eventSignup);

  if (result.error) {
    return;
  }

  const supabase = await createClient();
  return supabase.from("EventSignup").insert(eventSignup);
}
