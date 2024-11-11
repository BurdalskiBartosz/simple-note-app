import "./index.css";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import supabase from "./services/supabaseClient";
import SideNav from "./components/SideNav";
import { useAuth } from "./hooks/useAuth";
import Notes from "./components/Notes";
import Button from "./components/Button";

export default function App() {
  const { session, signOut } = useAuth();

  if (!session) {
    return (
      <div className="container">
        <Auth
          supabaseClient={supabase}
          providers={[]}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
        />
      </div>
    );
  } else {
    return (
      <section className="flex w-full h-screen flex-col gap-y-1 bg-dark p-1 relative overflow-hidden">
        <div className="flex h-full gap-1">
          <SideNav />
          <main className="grow h-full flex flex-col gap-5 items-start">
            <Button onClick={signOut} type="danger">
              Logout
            </Button>
            <Notes />
          </main>
        </div>
      </section>
    );
  }
}
