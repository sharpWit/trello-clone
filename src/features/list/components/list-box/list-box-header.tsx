"use client";

import { useRef, useState } from "react";
import styles from "./list-box.module.scss";
import { InputField } from "@/components";
import { useBoardsList } from "@/features/list/hooks";
import { useClickOutside } from "@/shared";
import { ListBoxHeaderActions } from "@/features/list/components/list-box/list-box-header-actions";

interface ListBoxHeaderProps {
  title: string;
  boardId: string;
  listId?: string;
}

const ListBoxHeader = ({ title, boardId, listId }: ListBoxHeaderProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempTitle, setTempTitle] = useState(title);
  const { editList } = useBoardsList(boardId);

  const titleRef = useRef<HTMLHeadingElement>(null!);
  useClickOutside(titleRef, () => {
    if (isEditing && listId) {
      editList(listId, tempTitle);
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
    <>
      <h3
        className={styles.header}
        onClick={handleTitleClick}
        onKeyDown={(e) => e.key === "Enter" && handleTitleClick()}
        role="button"
        tabIndex={0}
        ref={titleRef}
      >
        {isEditing ? (
          <InputField
            name="list-title"
            id="list-title-input"
            value={tempTitle}
            onChange={handleTitleChange}
          />
        ) : (
          tempTitle
        )}
      </h3>
      <ListBoxHeaderActions boardId={boardId} listId={listId} />
    </>
  );
};

export default ListBoxHeader;
