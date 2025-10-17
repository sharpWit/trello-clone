"use client";

import { useRef, useState } from "react";
import styles from "./card-modal.module.scss";
import { useBoardsCard } from "@/features/card/hooks";
import { useClickOutside } from "@/shared";
import { InputField } from "@/components";

interface ListBoxHeaderProps {
  title: string;
  boardId: string;
  listId: string;
  cardId: string;
  initialDescription?: string;
}

const ModalCardTitle = ({
  title,
  boardId,
  listId,
  cardId,
  initialDescription,
}: ListBoxHeaderProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempTitle, setTempTitle] = useState(title);
  const { editCard } = useBoardsCard(boardId, listId);

  const titleRef = useRef<HTMLHeadingElement>(null!);
  useClickOutside(titleRef, () => {
    if (isEditing && listId) {
      editCard(cardId, tempTitle, initialDescription);
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
    <div className={styles.innerHeaderTitle}>
      <h3
        className={styles.innerHeaderTitle}
        onClick={handleTitleClick}
        onKeyDown={(e) => e.key === "Enter" && handleTitleClick()}
        role="button"
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
      </h3>
    </div>
  );
};

export default ModalCardTitle;
