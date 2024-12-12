import type { NoteListProps } from "./types";
import NewNote from "./NewNote";

const NoteList = ({
  notes,
  selected,
  onDeleteCard,
  onSelectCard,
}: NoteListProps) => {
  return (
    <div>
      <div className="grid grid-cols-5 gap-5">
        {notes &&
          notes.map((note) => {
            return (
              <NewNote
                key={note.id}
                note={note}
                selected={selected}
                onDeleteCard={onDeleteCard}
                onSelectCard={onSelectCard}
              />
            );
          })}
      </div>
    </div>
  );
};

export default NoteList;
