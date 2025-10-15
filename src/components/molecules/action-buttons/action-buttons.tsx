import styles from "./action-buttons.module.scss";
import { Button } from "@/components/atoms";
import { useBoardCard } from "@/features";

import { CloseIcon, useFormContext } from "@/shared";

interface ActionButtonsProps {
  children: React.ReactNode;
}

const ActionButtons = ({ children }: ActionButtonsProps) => {
  const { formData, resetForm } = useFormContext();
  const { close } = useBoardCard();

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
