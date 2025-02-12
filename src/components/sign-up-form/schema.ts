import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1, "Et navn må minst inneholde ett tegn"),
  email: z.string().email("Ugyldig email"),
  phoneNumber: z.string().regex(/^[49][0-9]{7}$/, "Ugyldig telefonnummer"),
  age: z.string().regex(/^\d+$/, "Alder må være et tall"),
  gender: z.enum(["male", "female", "other"], {
    required_error: "Du må velge et kjønn",
  }),
  postalCode: z.string().regex(/^\d+$/, "Postnummer må være et tall"),
  programmingCompetence: z.enum(["beginner", "experienced"], {
    required_error: "Du må velge et programmeringsnivå",
  }),
  hoodieSize: z.enum(
    [
      "unwanted",
      "small",
      "medium",
      "large",
      "extra_large",
      "extra_extra_large",
    ],
    { required_error: "Du må velge en hettegenserstørrrelse" },
  ),
});

export type FormSchema = z.infer<typeof formSchema>;
