"use client";

import { useRef, useState } from "react";
import styles from "./list-page.module.scss";
import ListToggle from "@/features/list/components/list-generator/list-toggle";
import { ListBox } from "@/features/list/components/list-box";
import { useBoardsList } from "@/features/list/hooks";
import { Board, useClickOutside } from "@/shared";
import { useBoards } from "@/features/board";
import { InputField } from "@/components";

type ListPageProps = Board;

export const ListPage = ({ id, title, color }: ListPageProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempTitle, setTempTitle] = useState(title);
  const { editBoard } = useBoards();
  const { boardLists } = useBoardsList(id);

  const titleRef = useRef<HTMLHeadingElement>(null!);
  useClickOutside(titleRef, () => {
    if (isEditing && id) {
      editBoard(id, tempTitle, color);
      setIsEditing(false);
    }
  });

  const handleTitleClick = () => {
    setIsEditing(true);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTempTitle(event.target.value);
  };

  return (
    <div className={`${styles.listPage} ${styles[color]}`}>
      <div className={styles.listPageHeader}>
        <h1
          className={styles.header}
          onClick={handleTitleClick}
          onKeyDown={(e) => e.key === "Enter" && handleTitleClick()}
          role="heading"
          tabIndex={0}
          ref={titleRef}
        >
          {isEditing ? (
            <InputField
              type="text"
              name="list-title"
              id="list-title-input"
              value={tempTitle}
              onChange={handleTitleChange}
            />
          ) : (
            tempTitle
          )}
        </h1>
      </div>
      <div className={styles.listPageBody}>
        {boardLists?.length
          ? boardLists.map((list) => (
              <ListBox
                key={list.id}
                title={list.title}
                boardId={id}
                listId={list.id}
              />
            ))
          : null}

        <ListToggle boardId={id} />
      </div>
    </div>
  );
};
