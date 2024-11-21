import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import type { tAuthContex } from "../providers/contextTypes.tsx";
import type { QueryClient } from "@tanstack/react-query";

interface MyRouterContext {
  auth: tAuthContex;
  queryClient: QueryClient;
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
