"use client";

import styles from "./card-list.module.scss";
import { CardFormToggle } from "@/features/card/components/card-generator";
import Card from "@/features/card/components/card/card";
import { useBoardsCard } from "@/features/card/hooks";

interface CardListProps {
  listId: string;
  boardId: string;
}
const CardList = ({ listId, boardId }: CardListProps) => {
  const { boardCards } = useBoardsCard(boardId, listId);

  return (
    <>
      <div className={styles.listBoxBody}>
        <div className={styles.listBoxBodyItem}>
          {boardCards?.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              boardId={boardId}
              listId={listId}
              description={card.description}
            />
          ))}
        </div>
      </div>
      <CardFormToggle boardId={boardId} listId={listId} />
    </>
  );
};

export default CardList;
