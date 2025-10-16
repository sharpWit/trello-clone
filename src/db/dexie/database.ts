import Dexie, { Table } from "dexie";
import { BoardSchema, CardSchema, ListSchema } from "@/db/dexie/schemas";

export class AppDatabase extends Dexie {
  boards!: Table<BoardSchema>;
  lists!: Table<ListSchema>;
  cards!: Table<CardSchema>;

  constructor() {
    super("AppDatabase");

    this.version(1).stores({
      boards: "id, title, color, lists, createdAt",
      lists: "id, boardId, title, cards, createdAt",
      cards: "id, listId, title, description, createdAt",
    });
  }
}

export const db = new AppDatabase();
