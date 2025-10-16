import { db } from "@/db/dexie/database";
import { ListSchema } from "@/db/dexie/schemas";

export const listsRepository = {
  async getAll(): Promise<ListSchema[]> {
    return await db.lists.toArray();
  },

  async getById(id: string): Promise<ListSchema | undefined> {
    return await db.lists.get(id);
  },

  async add(data: Omit<ListSchema, "createdAt">): Promise<ListSchema> {
    const newList = {
      ...data,
      createdAt: new Date().toISOString(),
    };
    await db.lists.add(newList);
    return newList;
  },

  async remove(id: string): Promise<void> {
    await db.lists.delete(id);
  },
};
