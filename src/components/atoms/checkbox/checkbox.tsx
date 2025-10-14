"use client";

import { useState } from "react";
import styles from "./checkbox.module.scss";
import { BoardColors, CheckIcon } from "@/shared";

interface CheckboxProps {
  color: BoardColors;
}

const Checkbox = ({ color }: CheckboxProps) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div
      role="checkbox"
      className={`${styles.checkboxContainer} ${styles[color]}`}
      onClick={handleChange}
    >
      {checked && <CheckIcon title="Selected Color" />}
    </div>
  );
};

export default Checkbox;
