"use client";

import styles from "./list-page.module.scss";
import { Board } from "@/shared";

type ListPageProps = Board;

export const ListPage = ({ id, title, color }: ListPageProps) => {
  return (
    <div className={`${styles.listPage} ${styles[color]}`}>
      <div className={styles.listPageHeader}>
        <h1>{title}</h1>
      </div>
      <div className={styles.listPageBody}>LISTS</div>
    </div>
  );
};
