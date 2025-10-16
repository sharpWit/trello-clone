"use client";

import BoardCardToggle from "@/features/board/components/board-card-generator/board-card-toggle";
import { BoardCard } from "@/features/board/components/board-card";
import { Board } from "@/shared";

interface BoardListProps {
  boards: Board[];
}

export const BoardList = ({ boards }: BoardListProps) => {
  return (
    <>
      {boards.map((board) => (
        <BoardCard
          id={board.id}
          key={board.id}
          title={board.title}
          color={board.color}
        />
      ))}
      <BoardCardToggle />
    </>
  );
};
