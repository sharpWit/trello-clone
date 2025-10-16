"use client";

import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import styles from "./board-card-generator.module.scss";
import { BoardColors, FormProvider, useToggleCard } from "@/shared";
import { FormComponent } from "@/components/molecules";
import { useBoards } from "@/features/board/hooks";

export const BoardCardGenerator = () => {
  const router = useRouter();
  const { addBoard } = useBoards();
  const { close } = useToggleCard();

  type FormData = {
    title: string;
    selectedColor?: BoardColors;
    description?: string;
  };

  const handleSubmit = async (data: FormData) => {
    const id = uuidv4();
    await addBoard(id, data.title, data.selectedColor ?? "blue");
    router.push(`/boards/${id}`);
  };

  return (
    <div className={styles.createCardContainer}>
      <FormProvider>
        <FormComponent
          title="Board"
          titlePlaceholder="Add board title"
          hasColor
          submitButtonText="Create Board"
          onSubmit={handleSubmit}
          onClose={close}
        />
      </FormProvider>
    </div>
  );
};

export default BoardCardGenerator;
