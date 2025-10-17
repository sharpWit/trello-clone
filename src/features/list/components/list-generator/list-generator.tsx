"use client";

import { v4 as uuidv4 } from "uuid";
import styles from "./list-generator.module.scss";
import { useBoardsList } from "@/features/list/hooks";
import { FormComponent } from "@/components";
import { FormProvider, useModal } from "@/shared";

export const ListGenerator = ({ boardId }: { boardId: string }) => {
  const { addList } = useBoardsList(boardId);
  const { close } = useModal(`form-modal-${boardId}`);

  type FormData = {
    title: string;
  };

  const handleSubmit = async (data: FormData) => {
    const id = uuidv4();
    await addList(id, data.title);
  };

  return (
    <div className={styles.createCardContainer}>
      <FormProvider>
        <FormComponent
          modalId={`form-modal-${boardId}`}
          title="list"
          titlePlaceholder="Enter a list title..."
          submitButtonText="Add list"
          onSubmit={handleSubmit}
          onClose={close}
        />
      </FormProvider>
    </div>
  );
};

export default ListGenerator;
