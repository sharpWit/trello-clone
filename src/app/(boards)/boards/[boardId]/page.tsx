import BoardPageWrapper from "@/app/(boards)/boards/[boardId]/board-page-wrapper";

export default async function BoardPage({
  params,
}: Readonly<{
  params: Promise<{ boardId: string }>;
}>) {
  const { boardId } = await params;

  console.log("boardId-page: ", boardId);

  return <BoardPageWrapper boardId={boardId} />;
}
