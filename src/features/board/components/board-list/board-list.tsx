"use client";

import BoardCardToggle from "@/features/board/components/board-card-generator/board-card-toggle";
import { BoardCard } from "@/features/board/components/board-card";
import { BoardCardProvider } from "@/features/board/providers";
import { Board } from "@/shared";

interface BoardListProps {
  boards: Board[];
}

const BoardList = ({ boards }: BoardListProps) => {
  return (
    <>
      {boards.map((board) => (
        <BoardCard
          id={board.id}
          key={board.id}
          title={board.title}
          color={board.color}
          list={board.list}
        />
      ))}
      <BoardCardProvider>
        <BoardCardToggle />
      </BoardCardProvider>
    </>
  );
};

export default BoardList;
