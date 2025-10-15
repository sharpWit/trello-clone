"use client";

import { useRef } from "react";
import styles from "./form.module.scss";
import { InputField } from "@/components/atoms";
import { ColorGroup } from "@/components/molecules/color-group";
import ActionButtons from "@/components/molecules/action-buttons/action-buttons";
import { useBoardCard } from "@/features";
import { BoardColors, useClickOutside, useFormContext } from "@/shared";

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
  const { formData, updateField, resetForm } = useFormContext();
  const { close } = useBoardCard();
  const formRef = useRef<HTMLFormElement>(null!);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //! Handle
    console.log("Form submitted:", { formData });
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
