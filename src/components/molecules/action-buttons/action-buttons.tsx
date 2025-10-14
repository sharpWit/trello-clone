import styles from "./action-buttons.module.scss";

import { Button } from "@/components/atoms";
import { CloseIcon } from "@/shared";

const ActionButtons = () => {
  return (
    <div className={styles.actionContainer}>
      <Button>Create board</Button>
      <button className={styles.closeButton}>
        <CloseIcon title="Close" />
      </button>
    </div>
  );
};

export default ActionButtons;
