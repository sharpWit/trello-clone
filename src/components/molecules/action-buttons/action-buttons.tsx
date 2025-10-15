import styles from "./action-buttons.module.scss";
import { Button } from "@/components/atoms";
import { CloseIcon, useFormContext } from "@/shared";

interface ActionButtonsProps {
  children: React.ReactNode;
}

const ActionButtons = ({ children }: ActionButtonsProps) => {
  const { formData, resetForm } = useFormContext();
  const handleReset = () => {
    resetForm();
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
        <CloseIcon title="Close" />
      </button>
    </div>
  );
};

export default ActionButtons;
