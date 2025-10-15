"use client";

import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { useLiveQuery } from "dexie-react-hooks";
import { boardRepository } from "@/db";

const ListPage = dynamic(
  () => import("./list-page").then((mod) => mod.ListPage),
  {
    ssr: false,
    loading: () => <div>Loading board...</div>,
  }
);

const ListPageWrapper = ({ boardId }: { boardId: string }) => {
  const board = useLiveQuery(() => boardRepository.getById(boardId), [boardId]);

  if (board === undefined) {
    return <div>Loading board...</div>;
  }

  if (!board) {
    notFound();
  }

  return <ListPage id={board.id} title={board.title} color={board.color} />;
};

export default ListPageWrapper;
