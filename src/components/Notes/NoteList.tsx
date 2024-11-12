import type { NoteListProps } from "./types";
import Note from "./Note";

const NoteList = ({ notes, selected, onDelete, onSelect }: NoteListProps) => {
  return (
    <div>
      <div className="grid grid-cols-5 gap-5">
        {notes &&
          notes.map((note) => {
            return (
              <Note
                key={note.id}
                note={note}
                selected={selected}
                onDelete={onDelete}
                onSelect={onSelect}
              />
            );
          })}
      </div>
    </div>
  );
};

export default NoteList;
