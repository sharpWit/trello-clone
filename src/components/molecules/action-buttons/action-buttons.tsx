import styles from "./action-buttons.module.scss";
import { CloseIcon, useFormContext } from "@/shared";
import { Button } from "@/components/atoms";

interface ActionButtonsProps {
  children: React.ReactNode;
  onClose: () => void;
}

const ActionButtons = ({ children, onClose }: ActionButtonsProps) => {
  const { formData, resetForm } = useFormContext();

  const handleReset = () => {
    resetForm();
    onClose();
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
