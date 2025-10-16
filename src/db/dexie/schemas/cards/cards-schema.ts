export interface CardSchema {
  id: string;
  boardId: string;
  listId: string;
  title: string;
  description?: string;
  createdAt: string;
}
