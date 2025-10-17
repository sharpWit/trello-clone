"use client";

import styles from "./modal-card-generator.module.scss";
import { useBoardsCard } from "@/features/card/hooks";
import { FormComponent } from "@/components";
import { FormProvider } from "@/shared";

const ModalCardGenerator = ({
  listId,
  boardId,
  cardId,
  onClose,
  title,
}: {
  listId: string;
  boardId: string;
  cardId: string;
  onClose: () => void;
  title: string;
}) => {
  const { editCard } = useBoardsCard(boardId, listId);

  type FormData = {
    title: string;
    description?: string;
  };

  const handleSubmit = async (data: FormData) => {
    await editCard(cardId, title, data.description);
  };

  return (
    <div className={styles.createCardContainer}>
      <FormProvider>
        <FormComponent
          title="modal-card"
          titlePlaceholder="Edit card description"
          submitButtonText="Save"
          onSubmit={handleSubmit}
          onClose={onClose}
          className={styles.createCardForm}
          hasDescription
        />
      </FormProvider>
    </div>
  );
};

export default ModalCardGenerator;
