import { useEffect, useRef, useState } from "react";
import styles from "./card-modal.module.scss";
import { useBoardsCard } from "@/features/card";
import { DeleteIcon } from "@/shared";

interface ListBoxHeaderActionsProps {
  boardId: string;
  listId: string;
  cardId: string;
}

export const ModalCardActions = ({
  boardId,
  listId,
  cardId,
}: ListBoxHeaderActionsProps) => {
  const popoverRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  const { deleteCard } = useBoardsCard(boardId, listId);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleDelete = async () => {
    await deleteCard(cardId);
    setIsOpen(false);
  };

  return (
    <div
      className={styles.modalPopoverContainer}
      ref={popoverRef}
      title="List Actions"
    >
      <button
        className={styles.modalPopoverTrigger}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <DeleteIcon className={styles.rightContentBodyIcon} />
        <p>Delete</p>
      </button>
      {isOpen && (
        <div className={styles.modalPopoverWrapper}>
          <div className={styles.modalPopoverHeader}>
            <h4 className={styles.modalPopoverHeaderTitle}>Delete</h4>
          </div>
          <div className={styles.modalPopoverBody}>
            <p className={styles.modalPopoverBodyContent}>
              All actions will be removed from the activity feed and you won’t
              be able to re-open the card. There is no undo.
            </p>
            <button
              className={styles.modalPopoverDeleteButton}
              onClick={handleDelete}
            >
              Delete card
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
