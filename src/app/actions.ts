// "use server";

// import { TablesInsert } from "@/generated/database.types";
// import { createClient } from "@/lib/supabase/server";
// import { v6 as uuidv6 } from "uuid";
// import { z } from "zod";

// // var aws = require("aws-sdk");
// // aws.config.update({
// //   region: "eu-north-1",
// //   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
// //   secretAccessKey: process.env.AWS_SECRET,
// // });

// // var ses = new aws.SES({ region: "eu-north-1" });

// const formSchema = z.object({
//   name: z.string().min(1),
//   email: z.string().email(),
//   phone_number: z.string().regex(/^[49][0-9]{7}$/),
//   age: z.number(),
//   gender: z.enum(["male", "female", "other"]),
//   postal_code: z.number(),
//   programming_competence: z.enum(["beginner", "experienced"]),
//   hoodie_size: z.enum([
//     "unwanted",
//     "small",
//     "medium",
//     "large",
//     "extra_large",
//     "extra_extra_large",
//   ]),
// });

// export async function createEventSignup(
//   eventSignup: TablesInsert<"EventSignup">,
// ) {
//   const result = formSchema.safeParse(eventSignup);

//   if (result.error) {
//     return;
//   }

//   const mailToken = uuidv6();

//   const supabase = await createClient();

//   const supabaseResponse = await supabase.from("EventSignup").insert({
//     ...eventSignup,
//     mail_token: mailToken,
//   });

//   // if (supabaseResponse.error != null) {
//   //   return supabaseResponse;
//   // }

//   // const to = eventSignup.email;
//   // const subject = "Bekreft påmelding til Hackathon Lite Sandvika";
//   // const message = `Hei ${eventSignup.name}! \n\n Takk for at du har meldt deg på Hackathon Lite Sandvika. \n\n For å bekrefte påmeldingen din, vennligst klikk på lenken under: \n\n https://hackathonlite.no/confirm/${mailToken} \n\n Med vennlig hilsen, \n Hackathon Lite Sandvika`;

//   // ses.sendEmail({
//   //   Source: process.env.SES_SENDER_MAIL,
//   //   Destination: { ToAddresses: [to] },
//   //   Message: {
//   //     Subject: { Data: subject },
//   //     Body: { Text: { Data: message } },
//   //   },
//   // });

//   return supabaseResponse;
// }
