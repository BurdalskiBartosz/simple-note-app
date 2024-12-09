import { Await, createFileRoute } from "@tanstack/react-router";
import notesService from "@/services/NotesService";
import Notes from "@/components/Notes/Notes";

export const Route = createFileRoute("/app/_protected/notes")({
  component: RouteComponent,
  loader: async ({ context: { queryClient } }) => {
    const data = await queryClient.ensureQueryData({
      queryKey: ["notes"],
      queryFn: async () => {
        const { data } = await notesService.getAll();
        return data;
      },
    });
    const promisedData: Promise<typeof data> = new Promise((resolve) =>
      setTimeout(() => resolve(data), 2000)
    );
    return { data: promisedData };
  },
});

function RouteComponent() {
  const { data } = Route.useLoaderData();

  return (
    <Await promise={data} fallback={<div>Loading...</div>}>
      {(data) => <Notes notes={data} />}
    </Await>
  );
}
