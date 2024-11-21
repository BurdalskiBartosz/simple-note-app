import { createFileRoute, redirect, useRouter } from "@tanstack/react-router";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import supabase from "../services/supabaseClient";
import { useCallback, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
  beforeLoad: async ({ location, context }) => {
    if (context.auth.session) {
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
  const { session } = useAuth();
  const router = useRouter();
  const navigate = Route.useNavigate();

  const goToApp = useCallback(async () => {
    await router.invalidate();
    await navigate({ to: "/app" });
  }, [router, navigate]);

  useEffect(() => {
    if (session) {
      goToApp();
    }
  }, [session, goToApp]);

  return (
    <div className="px-4 mx-auto max-w-[400px]">
      <Auth
        supabaseClient={supabase}
        providers={[]}
        appearance={{ theme: ThemeSupa }}
        theme="dark"
      />
    </div>
  );
}
