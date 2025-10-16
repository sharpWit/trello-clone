"use client";

import React from "react";
import styles from "./list-generator.module.scss";

interface ListButtonProps {
  onClick?: () => void;
}

const ListButton = ({ onClick }: ListButtonProps) => {
  return (
    <div className={styles.container}>
      <button
        type="button"
        onClick={onClick}
        aria-label="Create list"
        className={styles.innerBtn}
      >
        + Add another list
      </button>
    </div>
  );
};

export default ListButton;
