"use client";

import styles from "./card-list.module.scss";
import { CardFormToggle } from "@/features/card/components/card-generator";
import Card from "@/features/card/components/card/card";
import { useBoardsCard } from "@/features/card/hooks";
import { ToggleCardProvider } from "@/shared";

interface CardListProps {
  listId: string;
}
const CardList = ({ listId }: CardListProps) => {
  const { boardCards } = useBoardsCard(listId);

  return (
    <ToggleCardProvider>
      <div className={styles.listBoxBody}>
        <div className={styles.listBoxBodyItem}>
          {boardCards?.map((card) => (
            <Card key={card.id} title={card.title} />
          ))}
        </div>
      </div>
      <CardFormToggle listId={listId} />
    </ToggleCardProvider>
  );
};

export default CardList;
