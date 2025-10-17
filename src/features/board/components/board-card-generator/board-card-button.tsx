"use client";

import React from "react";
import styles from "./board-card-generator.module.scss";

interface BoardCardButtonProps {
  onClick?: (modalId: string) => void;
  modalId: string;
}

const BoardCardButton = ({ onClick, modalId }: BoardCardButtonProps) => {
  return (
    <button
      type="button"
      onClick={() => onClick?.(modalId)}
      aria-label="Create board"
      className={styles.createCard}
    >
      Create new board
    </button>
  );
};

export default BoardCardButton;
