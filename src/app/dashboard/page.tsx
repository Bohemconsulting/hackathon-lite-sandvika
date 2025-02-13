import { Navbar } from "@/components/navbar";
import { UsersTable } from "@/components/users-table";
import { createClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
  const supabase = await createClient();
  const eventSignups = await supabase.from("EventSignup").select();

  if (!eventSignups.data) {
    return <div>Noe gikk galt...</div>;
  }

  return (
    <div className="flex h-screen flex-col">
      <Navbar links={[]} />
      <div className="flex flex-1 items-center justify-center px-20">
        <UsersTable data={eventSignups.data} />
      </div>
    </div>
  );
}
