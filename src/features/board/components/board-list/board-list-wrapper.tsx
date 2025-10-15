"use client";

import dynamic from "next/dynamic";
import { useBoards } from "@/features/board/hooks/use-boards";

const BoardsList = dynamic(() => import("./board-list"), {
  ssr: false,
});

const BoardListWrapper = () => {
  const { boards } = useBoards();
  console.log("boards: ", boards);
  return <BoardsList boards={boards} />;
};

export default BoardListWrapper;
