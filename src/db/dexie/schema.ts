export type BoardColorsSchema = "blue" | "green" | "orange" | "purple" | "pink";
export interface BoardSchema {
  id: string;
  title: string;
  color: BoardColorsSchema;
  list?: ListSchema[];
  createdAt: string;
}

export interface ListSchema {
  id: string;
  title: string;
  cards?: CardSchema[];
  createdAt: string;
}

export interface CardSchema {
  id: string;
  title: string;
  description?: string;
  createdAt: string;
}
