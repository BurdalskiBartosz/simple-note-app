import type { Tables } from "../../types/database.types";

export type Note = Tables<"note">;

export type PartialNote = Partial<Note>;

export type NoteFormProps = {
  onCancel: () => void;

  onSubmit: (note: PartialNote) => void;
  note: PartialNote | null;
};

export type NoteHandlers = {
  onSelectCard: (note: Note) => void;
  onDeleteCard: (id: number) => void;
};

export type NoteListProps = {
  notes: Note[] | null;
  selected: PartialNote | null;
} & NoteHandlers;

export type NoteProps = {
  note: Note;
  selected: PartialNote | null;
} & NoteHandlers;
