"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useLiveQuery } from "dexie-react-hooks";
import styles from "./header.module.scss";
import { boardRepository } from "@/db";
import ListNav from "@/features/list/components/list-nav/list-nav";

const Header = () => {
  const params = useParams();
  const boardId = params.boardId as string;

  const board = useLiveQuery(() => {
    // Add null check for boardId
    if (!boardId) return undefined;
    return boardRepository.getById(boardId);
  }, [boardId]);

  const colorClass = board?.color ? styles[board.color] : "";

  return (
    <header className={styles.header}>
      <div className={`${styles.innerHeader} ${colorClass}`}>
        <div>{board?.id && <ListNav />}</div>
        <div className={styles.logo}>
          <Image src="/images/logo.svg" alt="Logo" width={160} height={50} />
        </div>
        <div></div>
      </div>
    </header>
  );
};

export default Header;
