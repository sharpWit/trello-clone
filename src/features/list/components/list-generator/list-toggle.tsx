"use client";

import React from "react";
import styles from "./list-generator.module.scss";
import ListButton from "@/features/list/components/list-generator/list-button";
import ListGenerator from "@/features/list/components/list-generator/list-generator";
import { useToggleCard } from "@/shared";

const ListToggle = ({ boardId }: { boardId: string }) => {
  const { isOpen, open } = useToggleCard();

  return isOpen ? (
    <ListGenerator boardId={boardId} />
  ) : (
    <div className={styles.container}>
      <ListButton onClick={open} />
    </div>
  );
};

export default ListToggle;
