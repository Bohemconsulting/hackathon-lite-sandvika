import { z } from "zod";

export const formSchema = z.object({
  email: z.string().email("Ugyldig email"),
  password: z.string(),
});

export type FormSchema = z.infer<typeof formSchema>;
