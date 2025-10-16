import { useLiveQuery } from "dexie-react-hooks";
import { db, listsRepository } from "@/db";

export function useBoardsList(boardId: string) {
  if (!boardId)
    return {
      boardsLists: [],
      addList: async () => {},
      deleteList: async () => {},
    };
  const boardLists =
    useLiveQuery(
      () => db.lists.where("boardId").equals(boardId).toArray(),
      []
    ) ?? [];

  const addList = async (id: string, title: string) => {
    await listsRepository.add({ id, boardId, title });
  };

  const deleteList = async (id: string) => {
    await listsRepository.remove(id);
  };

  return { boardLists, addList, deleteList };
}
