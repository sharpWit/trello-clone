"use client";

import styles from "./card-modal.module.scss";
import { CloseIcon, DeleteIcon, DescIcon, ModalIcon } from "@/shared";
import { Modal } from "@/components";

interface CardModalProps {
  isOpen: boolean;
  onClose: () => void;
  cardId?: string;
  initialTitle?: string;
}

const CardModal = ({
  isOpen,
  onClose,
  cardId,
  initialTitle = "",
}: CardModalProps) => {
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
                <div className={styles.description}>desc content</div>
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
