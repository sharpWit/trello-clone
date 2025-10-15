import { useLiveQuery } from "dexie-react-hooks";
import { boardRepository } from "@/db/dexie/repositories/board.repo";
import { BoardColors } from "@/shared";
import { db } from "@/db";

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
