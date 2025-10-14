import styles from "./page.module.scss";
import { BoardList } from "@/features";
import { boardsData } from "@/shared";

export default function BoardsPage() {
  return (
    <section className={styles.wrapper}>
      <h1>My Boards</h1>

      <div className={styles.container}>
        {boardsData.length > 0 && <BoardList boards={boardsData} />}
      </div>
    </section>
  );
}
