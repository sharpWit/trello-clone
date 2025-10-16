"use client";

import React from "react";
import styles from "./list-generator.module.scss";

interface ListButtonProps {
  onClick?: () => void;
  className?: string;
}

const ListButton = ({ onClick, className }: ListButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Create list"
      className={`${styles.innerBtn} ${className}`}
    >
      + Add another list
    </button>
  );
};

export default ListButton;
