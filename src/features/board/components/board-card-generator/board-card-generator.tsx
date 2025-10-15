import styles from "./board-card-generator.module.scss";
import { FormComponent } from "@/components/molecules";
import { FormProvider } from "@/shared";

export const BoardCardGenerator = () => {
  return (
    <div className={styles.container}>
      <FormProvider>
        <FormComponent title="board" hasColor submitButtonText="Create board" />
      </FormProvider>
    </div>
  );
};

export default BoardCardGenerator;
