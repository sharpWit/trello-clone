import { useLiveQuery } from "dexie-react-hooks";
import { cardsRepository, db } from "@/db";

export function useBoardsCard(listId: string) {
  if (!listId)
    return {
      boardsCards: [],
      addCard: async () => {},
      editCard: async () => {},
      deleteCard: async () => {},
    };
  const boardCards =
    useLiveQuery(() => db.cards.where("listId").equals(listId).toArray(), []) ??
    [];

  const addCard = async (id: string, title: string, description?: string) => {
    await cardsRepository.add({ id, listId, title, description });
  };

  const editCard = async (id: string, title: string, description?: string) => {
    await cardsRepository.update(id, { title, description });
  };

  const deleteCard = async (id: string) => {
    await cardsRepository.remove(id);
  };

  return { boardCards, addCard, editCard, deleteCard };
}
