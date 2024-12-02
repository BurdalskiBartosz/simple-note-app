import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/app/_protected/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>DASHBOARD</div>;
}
