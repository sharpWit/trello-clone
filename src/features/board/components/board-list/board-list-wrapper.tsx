"use client";

import dynamic from "next/dynamic";
import { useBoards } from "@/features/board/hooks";
import { ToggleCardProvider } from "@/shared";

const BoardsList = dynamic(
  () => import("./board-list").then((mod) => mod.BoardList),
  {
    ssr: false,
  }
);

const BoardListWrapper = () => {
  const { boards } = useBoards();

  return (
    <ToggleCardProvider>
      <BoardsList boards={boards} />
    </ToggleCardProvider>
  );
};

export default BoardListWrapper;
