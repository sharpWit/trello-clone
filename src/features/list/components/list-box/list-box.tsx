import styles from "./list-box.module.scss";
import ListButton from "@/features/list/components/list-generator/list-button";
import ListBoxHeader from "@/features/list/components/list-box/list-box-header";
import { CardSchema } from "@/db";
import CardFormToggle from "@/features/card/components/card-generator/card-form-toggle";

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
        {cards?.map((card) => (
          <div key={card.id} className={styles.listBoxBodyItem}>
            <div className={styles.listBoxBodyItemBox}>{card.title}</div>
          </div>
        ))}
      </div>
      {/* <ListButton className={styles.listBoxFooter} /> */}
      <CardFormToggle listId={listId} />
    </div>
  );
};

export default ListBox;
