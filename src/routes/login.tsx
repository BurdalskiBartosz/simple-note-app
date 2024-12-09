import { createFileRoute, redirect, useRouter } from "@tanstack/react-router";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useCallback, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import supabase from "@/services/supabaseClient";

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
    <div className="mx-auto grid grid-cols-2 h-screen bg-gray-600">
      <div className="bg-green-300 flex items-center justify-center px-4">
        <h3 className="text-gray-600 text-8xl">Take your notes</h3>
      </div>
      <div className="flex items-center justify-center px-4">
        <div className="grow max-w-[420px]">
          <Auth
            supabaseClient={supabase}
            providers={[]}
            appearance={{ theme: ThemeSupa }}
            theme="dark"
          />
        </div>
      </div>
    </div>
  );
}
