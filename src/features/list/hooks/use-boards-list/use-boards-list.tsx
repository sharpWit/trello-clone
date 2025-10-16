import { useLiveQuery } from "dexie-react-hooks";
import { db, listsRepository } from "@/db";

export function useBoardsList(boardId: string) {
  if (!boardId)
    return {
      boardsLists: [],
      addList: async () => {},
      editList: async () => {},
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

  const editList = async (id: string, title: string) => {
    await listsRepository.update(id, { title });
  };

  const deleteList = async (id: string) => {
    await listsRepository.remove(id);
  };

  return { boardLists, addList, editList, deleteList };
}
