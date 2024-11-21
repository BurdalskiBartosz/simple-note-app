import {
  createFileRoute,
  Outlet,
  redirect,
  useRouter,
} from "@tanstack/react-router";
import SideNav from "../../components/SideNav";
import Button from "../../components/Button/Button";
import { useAuth } from "../../hooks/useAuth";

export const Route = createFileRoute("/app/_protected")({
  component: RouteComponent,
  beforeLoad: ({ location, context }) => {
    if (!context.auth.session) {
      throw redirect({
        to: "/login",
        search: {
          redirect: location.href,
        },
      });
    }
  },
});

function RouteComponent() {
  const router = useRouter();
  const navigate = Route.useNavigate();
  const { signOut } = useAuth();

  const handleLogout = async () => {
    await signOut();
    await router.invalidate().finally(() => {
      navigate({ to: "/" });
    });
  };

  return (
    <section className="flex w-full h-screen flex-col gap-y-1 bg-dark p-1 relative overflow-hidden">
      <div className="flex h-full gap-1">
        <SideNav />
        <main className="grow h-full flex flex-col gap-5 items-start">
          <Button onClick={handleLogout} type="danger">
            Logout
          </Button>
          <Outlet />
        </main>
      </div>
    </section>
  );
}
