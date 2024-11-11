import "./index.css";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import supabase from "./services/supabaseClient";
import SideNav from "./components/SideNav";
import { useAuth } from "./hooks/useAuth";
import Notes from "./components/Notes";

export default function App() {
  const { session, user, signOut } = useAuth();

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
  } else if (user) {
    return (
      <section className="flex h-screen flex-col gap-y-1 bg-dark p-1">
        <div className="flex h-full gap-1">
          <SideNav />
          <main className="grow h-full">
            <button
              onClick={() => signOut()}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
            >
              LOGOUT
            </button>

            <Notes />
          </main>
        </div>
      </section>
    );
  }
}
