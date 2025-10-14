import { CloseIcon } from "@/shared";
import styles from "./form.module.scss";
import { Button, InputField } from "@/components/atoms";

const FormComponent = () => {
  return (
    <form action="" method="post" className={styles.formElement}>
      <InputField placeholder="Add board title" id="board" name="board" />
      <div className={styles.actionContainer}>
        <Button>Create board</Button>
        <button className={styles.closeButton}>
          <CloseIcon title="Close" />
        </button>
      </div>
    </form>
  );
};

export default FormComponent;
