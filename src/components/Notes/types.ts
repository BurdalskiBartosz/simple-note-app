import type { ChangeEvent } from "react";
import type { Tables } from "../../types/database.types";

export type Note = Tables<"note">;

export type PartialNote = Partial<Note>;

export type NoteFormProps = {
  onCancel: () => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (note: PartialNote) => void;
  note: PartialNote | null;
};

export type NoteHandlers = {
  onSelect: (note: Note) => void;
  onDelete: (id: number) => void;
  selected: PartialNote | null;
};

export type NoteListProps = {
  notes: Note[] | null;
} & NoteHandlers;

export type NoteProps = {
  note: Note;
} & NoteHandlers;
