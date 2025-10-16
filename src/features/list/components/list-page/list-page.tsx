"use client";

import { BoardCardProvider } from "@/features/board";
import styles from "./list-page.module.scss";
import { Board } from "@/shared";
import ListToggle from "@/features/list/components/list-generator/list-toggle";

type ListPageProps = Board;

export const ListPage = ({ id, title, color }: ListPageProps) => {
  return (
    <div className={`${styles.listPage} ${styles[color]}`}>
      <div className={styles.listPageHeader}>
        <h1>{title}</h1>
      </div>
      <div className={styles.listPageBody}>
        <BoardCardProvider>
          <ListToggle />
        </BoardCardProvider>
      </div>
    </div>
  );
};
