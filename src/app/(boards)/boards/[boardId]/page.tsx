import { ListPageWrapper } from "@/features";

export default async function BoardPage({
  params,
}: Readonly<{
  params: Promise<{ boardId: string }>;
}>) {
  const { boardId } = await params;

  return <ListPageWrapper boardId={boardId} />;
}
