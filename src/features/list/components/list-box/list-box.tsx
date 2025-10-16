import styles from "./list-box.module.scss";
import ListBoxHeader from "@/features/list/components/list-box/list-box-header";
import { CardList } from "@/features/card";
import { CardSchema } from "@/db";

interface ListBoxProps {
  cards?: CardSchema[];
  title: string;
  boardId: string;
  listId?: string;
}
const ListBox = ({ cards, title, boardId, listId }: ListBoxProps) => {
  return (
    <div className={styles.listBox}>
      <div className={styles.listBoxHeader}>
        <ListBoxHeader title={title} boardId={boardId} listId={listId} />
      </div>
      <div className={styles.listBoxBody}>
        <CardList cards={cards} listId={listId} />
      </div>
    </div>
  );
};

export default ListBox;
