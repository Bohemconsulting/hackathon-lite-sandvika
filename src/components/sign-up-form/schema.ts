import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1, "Et navn må minst inneholde ett tegn"),
  email: z.string().email("Ugyldig email"),
  phoneNumber: z.string().regex(/^[49][0-9]{7}$/, "Ugyldig telefonnummer"),
  age: z.number().positive("Alder må være et positivt tall"),
  gender: z.enum(["male", "female", "other"]),
  postalCode: z.number().positive("Postnummer må være positivt"),
  programmingCompetence: z.enum(["beginner", "experienced"]),
  hoodieSize: z.enum([
    "small",
    "medium",
    "large",
    "extra_large",
    "extra_extra_large",
  ]),
});

export type FormSchema = z.infer<typeof formSchema>;
