"use client";

import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import styles from "./form.module.scss";
import { InputField } from "@/components/atoms";
import { ColorGroup } from "@/components/molecules/color-group";
import ActionButtons from "@/components/molecules/action-buttons/action-buttons";
import { BoardColors, useClickOutside, useFormContext } from "@/shared";
import { useBoards } from "@/features/board/hooks/use-boards";
import { useBoardCard } from "@/features";

interface FormComponentProps {
  title: string;
  titlePlaceholder?: string;
  hasDescription?: boolean;
  hasColor?: boolean;
  submitButtonText: string;
}
const FormComponent = ({
  title,
  hasDescription = false,
  hasColor = false,
  titlePlaceholder,
  submitButtonText,
}: FormComponentProps) => {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null!);
  const { close } = useBoardCard();
  const { addBoard } = useBoards();
  const { formData, updateField, resetForm } = useFormContext();
  useClickOutside(formRef, () => close());

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateField("title", e.target.value);
  };

  // ! later
  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    updateField("description", e.target.value);
  };

  const handleColorChange = (color: BoardColors) => {
    updateField("selectedColor", color);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ! make it reusable later
    const newBoard = {
      id: uuidv4(),
      title: formData.title,
      // description: formData.description,
      color: formData.selectedColor ?? "blue",
      // createdAt: new Date().toISOString(),
    };
    await addBoard(newBoard.id, newBoard.title, newBoard.color);
    router.push(`/boards/${newBoard.id}`);

    resetForm();
    close();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formElement} ref={formRef}>
      <InputField
        placeholder={titlePlaceholder ?? "Add board title"}
        name={`${title}Title`}
        value={formData.title}
        onChange={handleTitleChange}
      />
      {hasColor && (
        <ColorGroup
          selectedColor={formData.selectedColor ?? "blue"}
          onColorChange={handleColorChange}
        />
      )}

      <ActionButtons>{submitButtonText}</ActionButtons>
    </form>
  );
};

export default FormComponent;
