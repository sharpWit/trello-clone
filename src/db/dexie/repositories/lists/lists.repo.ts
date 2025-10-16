import { db } from "@/db/dexie/database";
import { ListSchema } from "@/db/dexie/schemas";

export const listsRepository = {
  async getAll(id: string): Promise<ListSchema[] | undefined> {
    return await db.lists.where("boardId").equals(id).toArray();
  },

  async getById(id: string): Promise<ListSchema | undefined> {
    return await db.lists.where("id").equals(id).first();
  },

  async add(data: Omit<ListSchema, "createdAt">): Promise<ListSchema> {
    const newList = {
      ...data,
      createdAt: new Date().toISOString(),
    };
    await db.lists.add(newList);
    return newList;
  },

  async update(id: string, data: Partial<ListSchema>): Promise<void> {
    await db.lists.where("id").equals(id).modify(data);
  },

  async remove(id: string): Promise<void> {
    await db.lists.where("id").equals(id).delete();
  },
};
