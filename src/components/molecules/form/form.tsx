import styles from "./form.module.scss";
import { InputField } from "@/components/atoms";
import { ColorGroup } from "@/components/molecules/color-group";
import ActionButtons from "@/components/molecules/action-buttons/action-buttons";

const FormComponent = () => {
  return (
    <form action="" method="post" className={styles.formElement}>
      <InputField placeholder="Add board title" id="board" name="board" />
      <ColorGroup />
      <ActionButtons />
    </form>
  );
};

export default FormComponent;
