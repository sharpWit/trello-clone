import { Button, InputField } from "@/components/atoms";
import styles from "./board-card-generator.module.scss";

export const BoardCardGenerator = () => {
  return (
    <div className={styles.container}>
      <InputField placeholder="Add board title" />
      <Button>Create Board</Button>
    </div>
  );
};

export default BoardCardGenerator;
