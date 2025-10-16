"use client";

import { CardFormToggle } from "@/features/card/components/card-generator";
import Card from "@/features/card/components/card/card";
import { List } from "@/shared";

interface CardListProps {
  cards: List[];
}
const CardList = ({ cards }: CardListProps) => {
  return (
    <div>
      {cards.map((card) => (
        <Card key={card.id} />
      ))}
      <CardFormToggle />
    </div>
  );
};

export default CardList;
