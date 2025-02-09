import { createEventSignup } from "@/app/actions";
import { TablesInsert } from "@/generated/database.types";
import { useMutation } from "@tanstack/react-query";

async function create(eventSignup: TablesInsert<"EventSignup">) {
  return createEventSignup(eventSignup);
}

export function useEventSignupMutation() {
  return useMutation({
    mutationFn: create,
    mutationKey: ["Create Event Signup"],
  });
}
