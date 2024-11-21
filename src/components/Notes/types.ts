import type { ChangeEvent } from "react";
import type { Tables } from "../../types/database.types";

export type Note = Tables<"note">;

export type PartialNote = Partial<Note>;

export type NoteFormProps = {
  onCancel: () => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => undefined;
  onSubmit: (note: PartialNote) => undefined;
  note: PartialNote | null;
};

export type NoteHandlers = {
  onSelect: (note: Note) => undefined;
  onDelete: (id: number) => undefined;
};

export type NoteListProps = {
  notes: Note[] | null;
  selected: PartialNote | null;
} & NoteHandlers;

export type NoteProps = {
  note: Note;
  selected: PartialNote | null;
} & NoteHandlers;
