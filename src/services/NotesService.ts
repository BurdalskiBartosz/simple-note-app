import { Tables } from "../types/database.types";
import supabase, { Client } from "./supabaseClient";

class NotesService {
  public client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  async getNotes(user_id: string) {
    const { data, error } = await this.client
      .from("note")
      .select()
      .eq("user_id", user_id);
    return { data, error };
  }

  async updateNote(id: number, data: Partial<Tables<"note">>) {
    await supabase.from("note").update(data).eq("id", id);
  }

  async addNote(data: Partial<Tables<"note">>) {
    if (data.id) {
      await this.updateNote(data.id, data);
      return;
    }
    await supabase.from("note").insert(data);
  }
}

const notesService = new NotesService(supabase);

export default notesService;
