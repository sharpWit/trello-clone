"use client";

import { v4 as uuidv4 } from "uuid";
import styles from "./list-generator.module.scss";
import { FormComponent } from "@/components/molecules";
import { useBoardsList } from "@/features/list/hooks";
import { useBoardCard } from "@/features/board";
import { FormProvider } from "@/shared";

export const ListGenerator = ({ boardId }: { boardId: string }) => {
  const { addList } = useBoardsList(boardId);
  const { close } = useBoardCard();

  type FormData = {
    title: string;
    description?: string;
  };

  const handleSubmit = async (data: FormData) => {
    const id = uuidv4();
    await addList(id, data.title);
  };

  return (
    <div className={styles.createCardContainer}>
      <FormProvider>
        <FormComponent
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
