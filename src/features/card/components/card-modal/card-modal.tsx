"use client";

import { useState } from "react";
import styles from "./card-modal.module.scss";
import ModalCardGenerator from "@/features/card/components/modal-card-generator/modal-card-generator";
import { CloseIcon, DeleteIcon, DescIcon, ModalIcon } from "@/shared";
import { Modal } from "@/components";

interface CardModalProps {
  isOpen: boolean;
  onClose: () => void;
  cardId: string;
  initialTitle?: string;
  listId?: string;
  boardId: string;
  initialDescription?: string;
}

const CardModal = ({
  isOpen,
  onClose,
  cardId,
  initialTitle = "",
  listId,
  boardId,
  initialDescription,
}: CardModalProps) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={initialTitle} size="medium">
      <div className={styles.cardModal}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.innerHeader}>
            <ModalIcon className={styles.innerHeaderIcon} />
            <h2 className={styles.innerHeaderTitle}>{initialTitle}</h2>
            <button
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Close modal"
            >
              <CloseIcon />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className={styles.body}>
          <div className={styles.innerBodyLeft}>
            <div>
              <div className={styles.innerBodyLeftTop}>
                <DescIcon className={styles.innerBodyLeftTopIcon} />
                <h3 className={styles.innerBodyLeftTopTopTitle}>Description</h3>
              </div>
              <div className={styles.innerBodyLeftContent}>
                {isFormOpen ? (
                  <ModalCardGenerator
                    listId={listId}
                    boardId={boardId}
                    onClose={() => setIsFormOpen(false)}
                    cardId={cardId}
                    title={initialTitle}
                  />
                ) : initialDescription ? (
                  <div
                    className={styles.description}
                    onClick={() => setIsFormOpen(true)}
                  >
                    {initialDescription}
                  </div>
                ) : (
                  <div
                    className={styles.description}
                    onClick={() => setIsFormOpen(true)}
                  >
                    Add a more detailed description...
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={styles.innerBodyRight}>
            <h4 className={styles.rightTitle}>ACTIONS</h4>
            <div className={styles.rightContent}>
              <div className={styles.rightContentWrapper}>
                <div className={styles.rightContentBody}>
                  <DeleteIcon className={styles.rightContentBodyIcon} />
                  <p>Delete</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

CardModal.displayName = "CardModal";

export default CardModal;
