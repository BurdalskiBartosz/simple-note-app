import { useState } from "react";
import notesService from "@/services/NotesService";
import NoteList from "./NoteList";
import classNames from "classnames";
import { Note, PartialNote } from "./types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "../ui/button";
import AddNoteForm from "./AddNoteForm";

const Notes = ({ notes }: { notes: Note[] | null }) => {
  const queryClient = useQueryClient();
  const [selected, setSelected] = useState<PartialNote | null>(null);

  const { data } = useQuery({
    initialData: notes,
    queryKey: ["notes"],
    queryFn: async () => {
      const { data } = await notesService.getAll();
      return data;
    },
  });

  const { mutate: addNote } = useMutation({
    mutationFn: (note: PartialNote) => notesService.add(note),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["notes"] }),
  });
  const { mutate: deleteNote } = useMutation({
    mutationFn: (id: number) => notesService.delete(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["notes"] }),
  });

  const onSelect = (note: Note): void => {
    setSelected(note);
  };

  const newNote = (): void => {
    setSelected({ title: "", text: "" });
  };

  const onCancel = (): void => {
    setSelected(null);
  };

  const onDelete = (id: number): void => {
    deleteNote(id);
  };

  const onSubmit = (note: PartialNote): void => {
    addNote(note);
    setSelected(null);
  };

  return (
    <div className="w-full h-full flex flex-col gap-5 ">
      <div>
        <Button disabled={!!selected} variant="secondary" onClick={newNote}>
          New Note
        </Button>
      </div>

      <div
        className={classNames(
          "bg-gray-600 rounded-md absolute ease-linear duration-300 right-0 top-0 h-full p-5",
          {
            "translate-x-full": !selected,
          }
        )}
      >
        <AddNoteForm note={selected} onCancel={onCancel} onSubmit={onSubmit} />
      </div>
      {data && (
        <NoteList
          notes={data}
          onSelect={onSelect}
          onDelete={onDelete}
          selected={selected}
        />
      )}
    </div>
  );
};

export default Notes;
