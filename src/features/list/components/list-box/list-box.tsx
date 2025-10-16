import styles from "./list-box.module.scss";
import ListBoxHeader from "@/features/list/components/list-box/list-box-header";
import { CardList } from "@/features/card";

interface ListBoxProps {
  title: string;
  boardId: string;
  listId: string;
}
const ListBox = ({ title, boardId, listId }: ListBoxProps) => {
  return (
    <div className={styles.listBox}>
      <div className={styles.listBoxHeader}>
        <ListBoxHeader title={title} boardId={boardId} listId={listId} />
      </div>
      <CardList listId={listId} />
    </div>
  );
};

export default ListBox;
