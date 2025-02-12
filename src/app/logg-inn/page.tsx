import { LoginForm } from "@/components/login-form";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const supabase = await createClient();
  const user = await supabase.auth.getUser();

  if (user.error == null) {
    return redirect("/dashboard");
  }

  return (
    <div className="mx-auto flex h-screen max-w-4xl items-center justify-center px-2">
      <LoginForm />
    </div>
  );
}
