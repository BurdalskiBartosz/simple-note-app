import { Note, PartialNote } from "../types/Notes";

type NoteListProps = {
  notes: Note[] | null;
  onSelect: (note: Note) => void;
  selected: PartialNote | null;
};
const NoteList = (props: NoteListProps) => {
  const { notes = [], selected, onSelect } = props;
  return (
    <div>
      {notes &&
        notes.map((note) => {
          return (
            <div
              onClick={() => onSelect(note)}
              key={note.id}
              className={"test" + (selected?.id === note.id ? " active" : "")}
            >
              <h3>{note.title}</h3>
            </div>
          );
        })}
    </div>
  );
};

export default NoteList;
