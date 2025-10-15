import styles from "./page.module.scss";
import BoardListWrapper from "@/features/board/components/board-list/board-list-wrapper";

export default function BoardsPage() {
  return (
    <section className={styles.wrapper}>
      <h1>My Boards</h1>

      <div className={styles.container}>
        <BoardListWrapper />
      </div>
    </section>
  );
}
