"use client";

import React from "react";
import styles from "./board-card-generator.module.scss";

interface BoardCardButtonProps {
  onClick?: () => void;
}

const BoardCardButton = ({ onClick }: BoardCardButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Create board"
      className={styles.createCard}
    >
      Create new board
    </button>
  );
};

export default BoardCardButton;
