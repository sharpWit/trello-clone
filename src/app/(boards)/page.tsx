import styles from "./page.module.scss";

export default function BoardsPage() {
  return (
    <section className={styles.wrapper}>
      <h1>My Boards</h1>

      <div className={styles.container}>
        <div>Board1</div>
        <div>Board2</div>
        <div>Board3</div>
        <div>Board4</div>
        <div>Board5</div>
      </div>
    </section>
  );
}
