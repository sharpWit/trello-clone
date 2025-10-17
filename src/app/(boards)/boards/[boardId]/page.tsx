import { ListPageWrapper } from "@/features";

// Return empty array and handle dynamic boards at runtime
export const generateStaticParams = async () => {
  return [];
};

export default async function BoardPage({
  params,
}: Readonly<{
  params: Promise<{ boardId: string }>;
}>) {
  const { boardId } = await params;

  return <ListPageWrapper boardId={boardId} />;
}
