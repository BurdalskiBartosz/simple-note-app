import { createFileRoute, redirect, useRouter } from "@tanstack/react-router";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import supabase from "../services/supabaseClient";
import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
  beforeLoad: ({ location, context }) => {
    if (context.auth.isAuthenticated) {
      throw redirect({
        to: "/app",
        search: {
          redirect: location.href,
        },
      });
    }
  },
});

function RouteComponent() {
  const { setSession, isAuthenticated } = useAuth();
  const router = useRouter();
  const navigate = Route.useNavigate();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const navigateToApp = async () => {
      await router.invalidate();
      await navigate({ to: "/app" });
    };
    if (isAuthenticated) {
      navigateToApp();
    }
  }, [isAuthenticated]);

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
}
