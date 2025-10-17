"use client";

import { v4 as uuidv4 } from "uuid";
import styles from "./card-generator.module.scss";
import { useBoardsCard } from "@/features/card/hooks";
import { FormComponent } from "@/components";
import { FormProvider, useModal } from "@/shared";

const CardGenerator = ({
  listId,
  boardId,
}: {
  listId: string;
  boardId: string;
}) => {
  const { addCard } = useBoardsCard(boardId, listId);

  const { close } = useModal(`form-modal-${listId}`);

  type FormData = {
    title: string;
    description?: string;
  };

  const handleSubmit = async (data: FormData) => {
    const id = uuidv4();
    await addCard(id, data.title, data.description);
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
          className={styles.createCardForm}
        />
      </FormProvider>
    </div>
  );
};

export default CardGenerator;
