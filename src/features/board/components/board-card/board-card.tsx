import Link from "next/link";
import styles from "./board-card.module.scss";
import { useBoardsList } from "@/features/list";
import { Board } from "@/shared";

type BoardCardProps = Board;

const BoardCard = ({ id, title, color }: BoardCardProps) => {
  const { boardLists } = useBoardsList(id);

  return (
    <Link
      href={`/boards/${id}`}
      className={`${styles.container} ${styles[color]}`}
    >
      <h2>{title}</h2>

      <div className={styles.listCols}>
        {boardLists?.map((col) => {
          const cardsCount = col.cards?.length || 0;

          const bordered = cardsCount <= 0;

          const cellsToShow =
            cardsCount === 0
              ? 1
              : cardsCount === 1
              ? 2
              : Math.min(cardsCount, 5);

          return (
            <div className={styles.listCol} key={col.id}>
              {Array.from({ length: cellsToShow }).map((_, i) => (
                <div
                  key={i}
                  className={`${styles.cardCell} ${
                    bordered ? styles.bordered : ""
                  }`}
                ></div>
              ))}
            </div>
          );
        })}
      </div>
    </Link>
  );
};

export default BoardCard;
