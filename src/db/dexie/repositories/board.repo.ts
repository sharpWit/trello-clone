import { db } from "@/db/dexie/database";
import { BoardSchema } from "@/db/dexie/schema";

export const boardRepository = {
  async getAll(): Promise<BoardSchema[]> {
    return await db.boards.toArray();
  },

  async getById(id: string): Promise<BoardSchema | undefined> {
    return await db.boards.get(id);
  },

  async add(
    data: Omit<BoardSchema, "lists" | "createdAt">
  ): Promise<BoardSchema> {
    const newBoard = {
      ...data,
      createdAt: new Date().toISOString(),
    };
    await db.boards.add(newBoard);
    return newBoard;
  },

  async remove(id: string): Promise<void> {
    await db.boards.delete(id);
  },
};
