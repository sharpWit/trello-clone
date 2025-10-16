import { db } from "@/db/dexie/database";
import { CardSchema } from "@/db/dexie/schemas";

export const cardsRepository = {
  async getAll(id: string): Promise<CardSchema[] | undefined> {
    return await db.cards.where("listId").equals(id).toArray();
  },

  async getById(id: string): Promise<CardSchema | undefined> {
    return await db.cards.where("id").equals(id).first();
  },

  async add(data: Omit<CardSchema, "createdAt">): Promise<CardSchema> {
    const newCard = {
      ...data,
      createdAt: new Date().toISOString(),
    };
    await db.cards.add(newCard);
    return newCard;
  },

  async update(id: string, data: Partial<CardSchema>): Promise<void> {
    await db.cards.where("id").equals(id).modify(data);
  },

  async remove(id: string): Promise<void> {
    await db.cards.where("id").equals(id).delete();
  },
  async removeAll(listId: string): Promise<void> {
    await db.cards.where("listId").equals(listId).delete();
  },
};
