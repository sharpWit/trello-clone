import styles from "./list-box.module.scss";
import ListButton from "@/features/list/components/list-generator/list-button";
import ListBoxHeader from "@/features/list/components/list-box/list-box-header";
import { ListSchema } from "@/db";

interface ListBoxProps {
  lists?: ListSchema[];
}
const ListBox = ({ lists }: ListBoxProps) => {
  return (
    <div className={styles.listBox}>
      <div className={styles.listBoxHeader}>
        <ListBoxHeader />
      </div>
      <div className={styles.listBoxBody}>
        {lists?.map((list) => (
          <div key={list.id} className={styles.listBoxBodyItem}>
            <div className={styles.listBoxBodyItemBox}>{list.title}</div>
          </div>
        ))}
      </div>
      <ListButton className={styles.listBoxFooter} />
    </div>
  );
};

export default ListBox;
