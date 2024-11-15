import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <section className="flex w-full h-screen flex-col gap-y-1 bg-dark p-1 relative overflow-hidden">
      <div className="flex h-full gap-1">HOME</div>
    </section>
  );
}
