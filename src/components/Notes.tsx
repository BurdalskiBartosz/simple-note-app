import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import notesService from "../services/NotesService";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { PartialNote, Note } from "../types/Notes";

export default function Notes() {
  const { user } = useAuth();
  const [notes, setNotes] = useState<Note[] | null>(null);

  const [selected, setSelected] = useState<PartialNote | null>(null);

  const getNotes = useCallback(async () => {
    const { data } = await notesService.getNotes(user?.id as string);

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

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSelected({
      ...selected,
      [name]: value,
    });
  };

  const onSubmit = async (note: PartialNote) => {
    await notesService.addNote(note);
    await getNotes();
    setSelected(null);
  };

  return (
    <div className="  w-full h-full ">
      {selected && (
        <NoteForm
          note={selected}
          onChange={onChange}
          onCancel={onCancel}
          onSubmit={onSubmit}
        />
      )}

      <NoteList notes={notes} onSelect={onSelect} selected={selected} />
      <div>
        {!selected && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
            onClick={newNote}
          >
            New Note
          </button>
        )}
      </div>
    </div>
  );
}
