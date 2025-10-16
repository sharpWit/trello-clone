import styles from "./list-box.module.scss";
import { DotsIcon } from "@/shared";

const ListBoxHeader = () => {
  return (
    <>
      <h3 className={styles.header}>List Title</h3>
      <DotsIcon title="dots" />
    </>
  );
};

export default ListBoxHeader;
