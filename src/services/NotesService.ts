import { Tables } from "../types/database.types";
import supabase, { Client } from "./supabaseClient";

class NotesService {
  public client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  async getAll() {
    const { data, error } = await this.client.from("note").select();
    return { data, error };
  }

  async update(id: number, data: Partial<Tables<"note">>) {
    await this.client.from("note").update(data).eq("id", id);
  }

  async add(data: Partial<Tables<"note">>) {
    if (data.id) {
      await this.update(data.id, data);
      return;
    }
    await this.client.from("note").insert(data);
  }

  async delete(id: number) {
    console.log("delete", id);
    const r = await this.client.from("note").delete().eq("id", id);
    console.log(r);
  }
}

const notesService = new NotesService(supabase);

export default notesService;
