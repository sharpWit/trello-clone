"use client";

import styles from "./card-list.module.scss";
import { CardFormToggle } from "@/features/card/components/card-generator";
import Card from "@/features/card/components/card/card";
import { ToggleCardProvider } from "@/shared";
import { CardSchema } from "@/db";

interface CardListProps {
  cards?: CardSchema[];
  listId?: string;
}
const CardList = ({ cards, listId }: CardListProps) => {
  return (
    <ToggleCardProvider>
      <div className={styles.listBoxBody}>
        <div className={styles.listBoxBodyItem}>
          <div className={styles.listBoxBodyItemBox}>
            {cards?.map((card) => (
              <Card key={card.id} />
            ))}
          </div>
        </div>
      </div>
      <CardFormToggle listId={listId} />
    </ToggleCardProvider>
  );
};

export default CardList;
