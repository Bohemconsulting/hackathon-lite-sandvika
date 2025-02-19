// "use client";

// import { formSchema, FormSchema } from "@/components/sign-up-form/schema";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { toast } from "@/hooks/use-toast";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { useReward } from "react-rewards";
// import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
// import { useEventSignupMutation } from "./query";

// export function SignUpForm() {
//   const { reward } = useReward("påmeldingsknapp", "confetti", {
//     position: "absolute",
//     elementCount: 75,
//     startVelocity: 40,
//   });

//   const { mutateAsync, isPending } = useEventSignupMutation();

//   const form = useForm<FormSchema>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       phoneNumber: "",
//       age: "0",
//       gender: undefined,
//       postalCode: "0",
//       programmingCompetence: undefined,
//       hoodieSize: undefined,
//     },
//   });

//   async function onSubmit(values: FormSchema) {
//     const result = await mutateAsync({
//       name: values.name,
//       email: values.email,
//       phone_number: values.phoneNumber,
//       age: parseInt(values.age),
//       gender: values.gender,
//       postal_code: parseInt(values.postalCode),
//       programming_competence: values.programmingCompetence,
//       hoodie_size: values.hoodieSize,
//     });

//     if (result?.error != null) {
//       toast({
//         title: "Påmeldingen feilet",
//         description: "Noe gikk galt ved påmeldingen",
//         variant: "destructive",
//       });
//     } else {
//       toast({
//         title: "Påmelding registrert",
//         description:
//           "Du er nå meldt på til Hackathon Lite Sandvika. Vennligst sjekk eposten din for å bekrefte deltakelse.",
//       });
//       reward();
//     }

//     form.reset();
//   }

//   return (
//     <section className="flex flex-col items-center p-5" id="påmelding">
//       <h2 className="text-xl font-bold">Påmelding</h2>
//       <Form {...form}>
//         <form
//           onSubmit={form.handleSubmit(onSubmit)}
//           className="flex flex-col gap-4 space-y-4 p-5"
//         >
//           <div className="flex flex-col gap-4 md:flex-row md:gap-28 md:p-5">
//             <div className="flex flex-col gap-4">
//               <FormField
//                 control={form.control}
//                 name="name"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Navn</FormLabel>
//                     <FormControl>
//                       <Input placeholder="Ola Nordmann" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="email"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Email</FormLabel>
//                     <FormControl>
//                       <Input placeholder="ola.nordmann@gmail.com" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="phoneNumber"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Telefonnummer</FormLabel>
//                     <FormControl>
//                       <Input placeholder="XXXXXXXX" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="age"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Alder</FormLabel>
//                     <FormControl>
//                       <Input type="number" min={0} {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="postalCode"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Postnummer</FormLabel>
//                     <FormControl>
//                       <Input type="number" min={0} {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>

//             <div className="flex flex-col gap-4">
//               <FormField
//                 control={form.control}
//                 name="gender"
//                 render={({ field }) => (
//                   <FormItem className="space-y-3">
//                     <FormLabel>Kjønn</FormLabel>
//                     <FormControl>
//                       <RadioGroup
//                         onValueChange={field.onChange}
//                         defaultValue={field.value}
//                         className="flex flex-col space-y-1"
//                       >
//                         <FormItem className="flex items-center space-y-0 space-x-3">
//                           <FormControl>
//                             <RadioGroupItem value="male" />
//                           </FormControl>
//                           <FormLabel className="font-normal">Mann</FormLabel>
//                         </FormItem>
//                         <FormItem className="flex items-center space-y-0 space-x-3">
//                           <FormControl>
//                             <RadioGroupItem value="female" />
//                           </FormControl>
//                           <FormLabel className="font-normal">Kvinne</FormLabel>
//                         </FormItem>
//                         <FormItem className="flex items-center space-y-0 space-x-3">
//                           <FormControl>
//                             <RadioGroupItem value="other" />
//                           </FormControl>
//                           <FormLabel className="font-normal">Annet</FormLabel>
//                         </FormItem>
//                       </RadioGroup>
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="programmingCompetence"
//                 render={({ field }) => (
//                   <FormItem className="space-y-3">
//                     <FormLabel>Programmeringsnivå</FormLabel>
//                     <FormControl>
//                       <RadioGroup
//                         onValueChange={field.onChange}
//                         defaultValue={field.value}
//                         className="flex flex-col space-y-1"
//                       >
//                         <FormItem className="flex items-center space-y-0 space-x-3">
//                           <FormControl>
//                             <RadioGroupItem value="beginner" />
//                           </FormControl>
//                           <FormLabel className="font-normal">
//                             Nybegynner
//                           </FormLabel>
//                         </FormItem>
//                         <FormItem className="flex items-center space-y-0 space-x-3">
//                           <FormControl>
//                             <RadioGroupItem value="experienced" />
//                           </FormControl>
//                           <FormLabel className="font-normal">Erfaren</FormLabel>
//                         </FormItem>
//                       </RadioGroup>
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="hoodieSize"
//                 render={({ field }) => (
//                   <FormItem className="space-y-3">
//                     <FormLabel>Hettegenserstørrelse</FormLabel>
//                     <FormControl>
//                       <RadioGroup
//                         onValueChange={field.onChange}
//                         defaultValue={field.value}
//                         className="flex flex-col space-y-1"
//                       >
//                         <FormItem className="flex items-center space-y-0 space-x-3">
//                           <FormControl>
//                             <RadioGroupItem value="unwanted" />
//                           </FormControl>
//                           <FormLabel className="font-normal">
//                             Ønsker ikke hettegenser
//                           </FormLabel>
//                         </FormItem>
//                         <FormItem className="flex items-center space-y-0 space-x-3">
//                           <FormControl>
//                             <RadioGroupItem value="small" />
//                           </FormControl>
//                           <FormLabel className="font-normal">S</FormLabel>
//                         </FormItem>
//                         <FormItem className="flex items-center space-y-0 space-x-3">
//                           <FormControl>
//                             <RadioGroupItem value="medium" />
//                           </FormControl>
//                           <FormLabel className="font-normal">M</FormLabel>
//                         </FormItem>
//                         <FormItem className="flex items-center space-y-0 space-x-3">
//                           <FormControl>
//                             <RadioGroupItem value="large" />
//                           </FormControl>
//                           <FormLabel className="font-normal">L</FormLabel>
//                         </FormItem>
//                         <FormItem className="flex items-center space-y-0 space-x-3">
//                           <FormControl>
//                             <RadioGroupItem value="extra_large" />
//                           </FormControl>
//                           <FormLabel className="font-normal">XL</FormLabel>
//                         </FormItem>
//                         <FormItem className="flex items-center space-y-0 space-x-3">
//                           <FormControl>
//                             <RadioGroupItem value="extra_extra_large" />
//                           </FormControl>
//                           <FormLabel className="font-normal">XXL</FormLabel>
//                         </FormItem>
//                       </RadioGroup>
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>
//           </div>

//           <Button type="submit" disabled={isPending} id="påmeldingsknapp">
//             Meld deg på
//           </Button>
//         </form>
//       </Form>
//     </section>
//   );
// }
