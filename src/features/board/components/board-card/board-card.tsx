import Link from "next/link";
import styles from "./board-card.module.scss";
import { Board } from "@/shared";
// import { useBoards } from "@/features/board/hooks/use-boards";

type BoardCardProps = Board;

const BoardCard = ({ id, title, color }: BoardCardProps) => {
  // const { list } = useBoards();

  // console.log("list: ", list);

  return (
    <Link
      href={`/boards/${id}`}
      className={`${styles.container} ${styles[color]}`}
    >
      <h2>{title}</h2>
      <div className={styles.listCols}>
        {/* {list?.map((col) => {
          const cardsCount = col.cards?.length || 0;
          const cellsToShow =
            cardsCount === 0 ? 1 : cardsCount === 1 ? 2 : cardsCount;

          return (
            <div className={styles.listCol} key={col.id}>
              {Array.from({ length: cellsToShow }).map((_, i) => (
                <div className={styles.cardCell} key={i}></div>
              ))}
            </div>
          );
        })} */}
      </div>
    </Link>
  );
};

export default BoardCard;
