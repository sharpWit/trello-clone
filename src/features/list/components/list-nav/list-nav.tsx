import Link from "next/link";
import styles from "./list-nav.module.scss";
import { BoardIcon } from "@/shared";

const ListNav = () => {
  return (
    <Link href="/boards" className={styles.listNav}>
      <div>
        <div className={styles.innerNav}>
          <div className={styles.boardIcon}>
            <BoardIcon />
          </div>
          <h3>Boards</h3>
        </div>
      </div>
    </Link>
  );
};

export default ListNav;
