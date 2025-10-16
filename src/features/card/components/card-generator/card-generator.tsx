"use client";

import { v4 as uuidv4 } from "uuid";
import styles from "./card-generator.module.scss";
import { FormComponent } from "@/components";
import { FormProvider, useToggleCard } from "@/shared";

const CardGenerator = ({ listId }: { listId?: string }) => {
  // const { addCard } = useCard(listId);
  const { close } = useToggleCard();

  type FormData = {
    title: string;
    description?: string;
  };

  const handleSubmit = async (data: FormData) => {
    // const id = uuidv4();
    // await addCard(id, data.title);
  };

  return (
    <div className={styles.createCardContainer}>
      <FormProvider>
        <FormComponent
          title="card"
          titlePlaceholder="Enter a card title..."
          submitButtonText="Create card"
          onSubmit={handleSubmit}
          onClose={close}
        />
      </FormProvider>
    </div>
  );
};

export default CardGenerator;
