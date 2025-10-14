export interface Board {
  id: number;
  title: string;
  color: BoardColors;
  list?: List[];
}

export interface List {
  id: number;
  title: string;
  cards?: Card[];
}

export interface Card {
  id: number;
  title: string;
  description?: string;
}

export type BoardColors = "blue" | "green" | "orange" | "purple" | "pink";
