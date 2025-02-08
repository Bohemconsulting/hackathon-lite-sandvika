import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1, "Et navn må minst inneholde ett tegn"),
  email: z.string().email("Ugyldig email"),
  phoneNumber: z.string().regex(/^[49][0-9]{7}$/, "Ugyldig telefonnummer"),
});

export type FormSchema = z.infer<typeof formSchema>;
