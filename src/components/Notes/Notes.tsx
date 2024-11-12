import { ChangeEvent, useCallback, useEffect, useState } from "react";
import notesService from "../../services/NotesService";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import Button from "../Button/Button";
import classNames from "classnames";
import { Note, PartialNote } from "./types";

const Notes = () => {
  const [notes, setNotes] = useState<Note[] | null>(null);
  const [selected, setSelected] = useState<PartialNote | null>(null);

  const getNotes = useCallback(async () => {
    const { data } = await notesService.getAll();

    setNotes(data);
  }, []);

  useEffect(() => {
    getNotes();
  }, [getNotes]);

  const onSelect = (note: Note) => {
    setSelected(note);
  };

  const newNote = () => {
    setSelected({ title: "", text: "" });
  };

  const onCancel = () => {
    setSelected(null);
    console.log("onCancel");
  };
  const onDelete = async (id: number) => {
    await notesService.delete(id);
    await getNotes();
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSelected({
      ...selected,
      [name]: value,
    });
  };

  const onSubmit = async (note: PartialNote) => {
    await notesService.add(note);
    await getNotes();
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
      <NoteList
        notes={notes}
        onSelect={onSelect}
        onDelete={onDelete}
        selected={selected}
      />
    </div>
  );
};

export default Notes;
