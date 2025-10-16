"use client";

import styles from "./card-generator.module.scss";

interface CardButtonProps {
  onClick?: () => void;
  className?: string;
}

export const CardButton = ({ onClick, className }: CardButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Create card"
      className={`${styles.innerBtn} ${className}`}
    >
      + Add another card
    </button>
  );
};
