import { useLiveQuery } from "dexie-react-hooks";
import { boardRepository, db } from "@/db";
import { BoardColors } from "@/shared";

export function useBoardsList() {
  const boardsLists = useLiveQuery(() => db.lists.toArray(), []) ?? [];

  const addList = async (id: string, title: string, color: BoardColors) => {
    await boardRepository.add({ id, title, color });
  };

  const deleteList = async (id: string) => {
    await boardRepository.remove(id);
  };

  return { boardsLists, addList, deleteList };
}
