import styles from "./board-card-generator.module.scss";
import { ColorGroup, FormComponent } from "@/components/molecules";

export const BoardCardGenerator = () => {
  return (
    <div className={styles.container}>
      <FormComponent />
      <ColorGroup />
    </div>
  );
};

export default BoardCardGenerator;
