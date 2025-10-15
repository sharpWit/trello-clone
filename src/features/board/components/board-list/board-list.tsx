import { BoardCard } from "@/features/board/components/board-card";
import BoardCardToggle from "@/features/board/components/board-card-generator/board-card-toggle";
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
          key={board.id}
          id={board.id}
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
