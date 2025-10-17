import styles from "./action-buttons.module.scss";
import { CloseIcon, useFormContext, useModal } from "@/shared";
import { Button } from "@/components/atoms";

interface ActionButtonsProps {
  children: React.ReactNode;
  modalId: string;
}

const ActionButtons = ({ children, modalId }: ActionButtonsProps) => {
  const { formData, resetForm } = useFormContext();
  const { close } = useModal(modalId);

  const handleReset = () => {
    resetForm();
    close();
  };

  const isFormValid =
    formData.title.trim() !== "" && formData.selectedColor !== "blue";

  return (
    <div className={styles.actionContainer}>
      <Button type="submit" disabled={!isFormValid}>
        {children}
      </Button>
      <button
        className={styles.closeButton}
        type="button"
        onClick={handleReset}
      >
        <CloseIcon title="Close" onClick={close} />
      </button>
    </div>
  );
};

export default ActionButtons;
