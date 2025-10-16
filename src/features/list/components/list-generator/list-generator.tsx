import styles from "./list-generator.module.scss";
import { FormComponent } from "@/components/molecules";
import { FormProvider } from "@/shared";

export const ListGenerator = () => {
  return (
    <div className={styles.createCardContainer}>
      <FormProvider>
        <FormComponent
          title="list"
          titlePlaceholder="Enter a list title..."
          submitButtonText="Add list"
        />
      </FormProvider>
    </div>
  );
};

export default ListGenerator;
