"use client";

import { formSchema, FormSchema } from "@/components/sign-up-form/schema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEventSignupMutation } from "./query";

export function SignUpForm() {
  const { mutateAsync, isPending } = useEventSignupMutation();

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
    },
  });

  async function onSubmit(values: FormSchema) {
    const result = await mutateAsync({
      name: values.name,
      email: values.email,
      phone_number: values.phoneNumber,
    });

    if (result.error != null) {
      toast({
        title: "Påmeldingen feilet",
        description: "Noe gikk galt ved påmeldingen",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Påmelding registrert",
        description: "Du er nå meldt på til Hackathon Lite Sandvika",
      });
    }

    form.reset();
  }

  return (
    <Form {...form}>
      <form
        id="påmelding"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 p-5"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Navn</FormLabel>
              <FormControl>
                <Input placeholder="Ola Nordmann" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="ola.nordmann@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefonnummer</FormLabel>
              <FormControl>
                <Input placeholder="XXXXXXXX" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isPending}>
          Meld deg på
        </Button>
      </form>
    </Form>
  );
}
