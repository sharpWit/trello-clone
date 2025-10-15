import styles from "./page.module.scss";
import { BoardListWrapper } from "@/features";

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
