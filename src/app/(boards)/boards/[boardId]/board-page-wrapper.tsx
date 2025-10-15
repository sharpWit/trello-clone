"use client";

import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { useLiveQuery } from "dexie-react-hooks";
import { boardRepository } from "@/db";

const BoardPage = dynamic(
  () => import("../../../../features/board/components/board-card/board-card"),
  {
    ssr: false,
    loading: () => <div>Loading board...</div>,
  }
);

const BoardPageWrapper = ({ boardId }: { boardId: string }) => {
  const board = useLiveQuery(() => boardRepository.getById(boardId), [boardId]);

  if (board === undefined) {
    return <div>Loading board...</div>;
  }

  if (!board) {
    notFound();
  }

  console.log("board: ", board);

  return <BoardPage id={board.id} title={board.title} color={board.color} />;
};

export default BoardPageWrapper;
