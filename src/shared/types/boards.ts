import {
  BoardColorsSchema,
  BoardSchema,
  CardSchema,
  ListSchema,
} from "@/db/dexie/schema";

export type BoardColors = BoardColorsSchema;

export type Board = Omit<BoardSchema, "createdAt">;

export type List = Omit<ListSchema, "createdAt">;

export type Card = Omit<CardSchema, "createdAt">;
