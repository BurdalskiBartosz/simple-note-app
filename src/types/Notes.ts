import { Tables } from "./database.types";

export type Note = Tables<"note">;

export type PartialNote = Partial<Note>;
