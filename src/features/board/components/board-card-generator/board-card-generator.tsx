import { Checkbox } from "@/components/atoms";
import styles from "./board-card-generator.module.scss";
import { FormComponent } from "@/components/molecules";

export const BoardCardGenerator = () => {
  return (
    <div className={styles.container}>
      <FormComponent />
      <Checkbox color="orange" />
    </div>
  );
};

export default BoardCardGenerator;
