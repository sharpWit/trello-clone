import { Checkbox } from "@/components/atoms";
import styles from "./color-group.module.scss";

const ColorGroup = () => {
  return (
    <div className={styles.colorGroup}>
      <Checkbox color="blue" />
      <Checkbox color="green" />
      <Checkbox color="orange" />
      <Checkbox color="purple" />
      <Checkbox color="pink" />
    </div>
  );
};

export default ColorGroup;
