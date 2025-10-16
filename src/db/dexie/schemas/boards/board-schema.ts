import { ListSchema } from "@/db/dexie/schemas/lists";

export type BoardColorsSchema = "blue" | "green" | "orange" | "purple" | "pink";
export interface BoardSchema {
  id: string;
  title: string;
  color: BoardColorsSchema;
  list?: ListSchema[];
  createdAt: string;
}
