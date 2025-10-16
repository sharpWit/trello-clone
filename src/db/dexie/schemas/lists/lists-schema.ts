import { CardSchema } from "@/db/dexie/schemas/cards";

export interface ListSchema {
  id: string;
  title: string;
  cards?: CardSchema[];
  createdAt: string;
}
