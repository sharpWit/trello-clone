import styles from "./board-card-generator.module.scss";
import { FormComponent } from "@/components/molecules";

export const BoardCardGenerator = () => {
  return (
    <div className={styles.container}>
      <FormComponent />
    </div>
  );
};

export default BoardCardGenerator;
