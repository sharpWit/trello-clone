"use client";

import dynamic from "next/dynamic";
import { useBoards } from "@/features/board/hooks";

const BoardsList = dynamic(
  () => import("./board-list").then((mod) => mod.BoardList),
  {
    ssr: false,
  }
);

const BoardListWrapper = () => {
  const { boards } = useBoards();

  return <BoardsList boards={boards} />;
};

export default BoardListWrapper;
