"use client";

import styles from "./card-generator.module.scss";
import CardGenerator from "@/features/card/components/card-generator/card-generator";
import { CardButton } from "@/features/card/components/card-generator/card-button";
import { useToggleCard } from "@/shared";

const CardFormToggle = ({ listId }: { listId?: string }) => {
  const { isOpen, open } = useToggleCard();

  return isOpen ? (
    <CardGenerator listId={listId} />
  ) : (
    <div className={styles.container}>
      <CardButton onClick={open} />
    </div>
  );
};

export default CardFormToggle;
