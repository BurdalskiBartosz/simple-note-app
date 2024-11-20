import { PostgrestError } from "@supabase/supabase-js";
import { Note } from "../components/Notes/types";
import { Tables } from "../types/database.types";
import supabase, { Client } from "./supabaseClient";

class NotesService {
  public client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  async getAll(): Promise<{
    data: Note[] | null;
    error: PostgrestError | null;
  }> {
    const { data, error } = await this.client.from("note").select();
    return { data, error };
  }

  async update(id: number, data: Partial<Tables<"note">>): Promise<undefined> {
    await this.client.from("note").update(data).eq("id", id);
  }

  async add(data: Partial<Tables<"note">>): Promise<undefined> {
    if (data.id) {
      await this.update(data.id, data);
      return;
    }
    await this.client.from("note").insert(data);
  }

  async delete(id: number): Promise<undefined> {
    await this.client.from("note").delete().eq("id", id);
  }
}

const notesService = new NotesService(supabase);

export default notesService;
