"use client";

import { Checkbox } from "@/components/atoms";
import styles from "./color-group.module.scss";
import { BoardColors, colorsKeys } from "@/shared";

interface ColorGroupProps {
  selectedColor: BoardColors;
  onColorChange: (color: BoardColors) => void;
}

const ColorGroup = ({ selectedColor, onColorChange }: ColorGroupProps) => {
  return (
    <div
      className={styles.colorGroup}
      role="radiogroup"
      aria-label="Select board color"
    >
      {colorsKeys.map((color) => (
        <Checkbox
          key={color}
          color={color}
          checked={selectedColor === color}
          onChange={() => onColorChange(color)}
        />
      ))}
    </div>
  );
};

export default ColorGroup;
