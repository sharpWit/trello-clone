import { BoardCard } from "@/features/board/components/board-card";
import { BoardCardGenerator } from "@/features/board/components/board-card-generator";
import { Board } from "@/shared";

interface BoardListProps {
  boards: Board[];
}

const BoardList = ({ boards }: BoardListProps) => {
  return (
    <>
      {boards.map((board) => (
        <BoardCard
          key={board.id}
          id={board.id}
          title={board.title}
          color={board.color}
          list={board.list}
        />
      ))}
      <BoardCardGenerator />
    </>
  );
};

export default BoardList;
