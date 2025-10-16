"use client";

import styles from "./list-page.module.scss";
import ListToggle from "@/features/list/components/list-generator/list-toggle";
import { useBoardsList } from "@/features/list/hooks";
import { BoardCardProvider } from "@/features/board";
import { Board } from "@/shared";

type ListPageProps = Board;

export const ListPage = ({ id, title, color }: ListPageProps) => {
  const { boardLists } = useBoardsList(id);

  return (
    <div className={`${styles.listPage} ${styles[color]}`}>
      <div className={styles.listPageHeader}>
        <h1>{title}</h1>
      </div>
      <div className={styles.listPageBody}>
        <BoardCardProvider>
          <ListToggle boardId={id} />
        </BoardCardProvider>
      </div>
    </div>
  );
};
