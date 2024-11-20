import { ChangeEvent, useState } from "react";
import notesService from "../../services/NotesService";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import Button from "../Button/Button";
import classNames from "classnames";
import { Note, PartialNote } from "./types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const Notes = () => {
  const queryClient = useQueryClient();
  const [selected, setSelected] = useState<PartialNote | null>(null);

  const { data } = useQuery({
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

  const onSelect = (note: Note): undefined => {
    setSelected(note);
  };

  const newNote = (): undefined => {
    setSelected({ title: "", text: "" });
  };

  const onCancel = (): undefined => {
    setSelected(null);
  };

  const onDelete = (id: number): undefined => {
    deleteNote(id);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>): undefined => {
    const { name, value } = event.target;
    setSelected({
      ...selected,
      [name]: value,
    });
  };

  const onSubmit = (note: PartialNote): undefined => {
    addNote(note);
    setSelected(null);
  };

  return (
    <div className="w-full h-full flex flex-col gap-5 ">
      <div>{!selected && <Button onClick={newNote}>New Note</Button>}</div>

      <div
        className={classNames(
          "bg-gray-600 rounded-md absolute ease-linear duration-300 right-0 top-0 h-full p-5",
          {
            "translate-x-full": !selected,
          }
        )}
      >
        <NoteForm
          note={selected}
          onChange={onChange}
          onCancel={onCancel}
          onSubmit={onSubmit}
        />
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
