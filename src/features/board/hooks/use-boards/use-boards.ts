import { useLiveQuery } from "dexie-react-hooks";
import { boardRepository, db } from "@/db";
import { BoardColors } from "@/shared";

export function useBoards() {
  const boards = useLiveQuery(() => db.boards.toArray(), []) ?? [];

  const addBoard = async (id: string, title: string, color: BoardColors) => {
    await boardRepository.add({ id, title, color });
  };

  const deleteBoard = async (id: string) => {
    await boardRepository.remove(id);
  };

  return { boards, addBoard, deleteBoard };
}
