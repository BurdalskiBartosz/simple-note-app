import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import type { QueryClient } from "@tanstack/react-query";
import { tAuthContex } from "@/providers/contextTypes";

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
