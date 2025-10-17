import { useLiveQuery } from "dexie-react-hooks";
import { db, listsRepository } from "@/db";

export function useBoardsList(boardId: string) {
  const boardLists =
    useLiveQuery(async () => {
      const lists = await db.lists.where("boardId").equals(boardId).toArray();

      // Attach cards to each list
      const listsWithCards = await Promise.all(
        lists.map(async (list) => {
          const cards = await db.cards
            .where("listId")
            .equals(list.id)
            .toArray();
          return { ...list, cards };
        })
      );

      return listsWithCards;
    }, [boardId]) ?? [];

  const addList = async (id: string, title: string) => {
    await listsRepository.add({ id, boardId, title });
  };

  const editList = async (id: string, title: string) => {
    await listsRepository.update(id, { title });
  };

  const deleteList = async (id: string) => {
    await listsRepository.remove(id);
  };

  return { boardLists, addList, editList, deleteList };
}
