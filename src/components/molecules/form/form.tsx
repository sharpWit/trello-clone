"use client";

import { useRef } from "react";
import styles from "./form.module.scss";
import { InputField } from "@/components/atoms";
import { ColorGroup } from "@/components/molecules/color-group";
import { ActionButtons } from "@/components/molecules/action-buttons";
import { BoardColors, useClickOutside, useFormContext } from "@/shared";

interface FormComponentProps {
  title: string;
  titlePlaceholder?: string;
  hasDescription?: boolean;
  hasColor?: boolean;
  submitButtonText: string;
  onSubmit: (data: {
    title: string;
    description?: string;
    selectedColor?: BoardColors;
  }) => Promise<void> | void;
  onClose?: () => void;
  className?: string;
  modalId: string;
}
const FormComponent = ({
  title,
  hasDescription = false,
  hasColor = false,
  titlePlaceholder,
  submitButtonText,
  onSubmit,
  onClose,
  className,
  modalId,
}: FormComponentProps) => {
  const formRef = useRef<HTMLFormElement>(null!);
  const { formData, updateField, resetForm } = useFormContext();

  useClickOutside(formRef, () => {
    if (onClose) onClose();
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit({
      title: formData.title,
      description: formData.description,
      selectedColor: formData.selectedColor,
    });
    resetForm();
    onClose?.();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.formElement} ${className}`}
      ref={formRef}
    >
      <InputField
        placeholder={titlePlaceholder ?? "Enter title"}
        name={`${title}Title`}
        value={formData.title}
        onChange={(e) => updateField("title", e.target.value)}
        required
      />

      {hasDescription && (
        <textarea
          placeholder="Add description"
          value={formData.description ?? ""}
          onChange={(e) => updateField("description", e.target.value)}
          className={styles.textarea}
        />
      )}

      {hasColor && (
        <ColorGroup
          selectedColor={formData.selectedColor ?? "blue"}
          onColorChange={(color) => updateField("selectedColor", color)}
        />
      )}

      <ActionButtons modalId={modalId}>{submitButtonText}</ActionButtons>
    </form>
  );
};

export default FormComponent;
