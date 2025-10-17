import { useLiveQuery } from "dexie-react-hooks";
import { cardsRepository, db } from "@/db";

export function useBoardsCard(boardId: string, listId: string) {
  const boardCards =
    useLiveQuery(() => db.cards.where("listId").equals(listId).toArray(), []) ??
    [];

  const addCard = async (id: string, title: string, description?: string) => {
    await cardsRepository.add({ id, boardId, listId, title, description });
  };

  const editCard = async (id: string, title: string, description?: string) => {
    await cardsRepository.update(id, { title, description });
  };

  const deleteCard = async (id: string) => {
    await cardsRepository.remove(id);
  };

  const deleteAllCards = async () => {
    await cardsRepository.removeAll(listId);
  };

  return { boardCards, addCard, editCard, deleteCard, deleteAllCards };
}
