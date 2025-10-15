"use client";

import styles from "./checkbox.module.scss";
import { BoardColors, CheckIcon } from "@/shared";

interface CheckboxProps {
  color: BoardColors;
  checked: boolean;
  onChange: (color: BoardColors) => void;
}

const Checkbox = ({ color, checked, onChange }: CheckboxProps) => {
  const handleClick = () => {
    onChange(color);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onChange(color);
    }
  };

  return (
    <div
      role="radio"
      aria-checked={checked}
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={`${styles.checkboxContainer} ${styles[color]}`}
    >
      {checked && <CheckIcon title="Selected Color" />}
    </div>
  );
};

export default Checkbox;
