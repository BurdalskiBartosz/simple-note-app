import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { tAuthContex } from "../providers/contextTypes.tsx";

interface MyRouterContext {
  auth: tAuthContex;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <ReactQueryDevtools />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
