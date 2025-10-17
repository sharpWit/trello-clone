"use client";

import styles from "./card.module.scss";
import { CardModal } from "@/features/card/components/card-modal";
import { useModal } from "@/shared";

interface CardProps {
  id: string;
  title: string;
  description?: string;
}

const Card = ({ id, title, description }: CardProps) => {
  const modalId = `card-${id}`;
  const { isOpen, open, close } = useModal(modalId);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling
    open();
  };

  return (
    <>
      <div
        className={styles.cardBox}
        onClick={handleClick}
        role="button"
        aria-controls={modalId}
        aria-expanded={isOpen}
        tabIndex={0}
      >
        {title}
        {isOpen && (
          <div
            style={{
              position: "absolute",
              top: -5,
              right: -5,
              background: "orange",
              color: "black",
              borderRadius: "50%",
              width: "20px",
              height: "20px",
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            !
          </div>
        )}
      </div>

      <CardModal
        isOpen={isOpen}
        onClose={close}
        cardId={id}
        initialTitle={title}
      />
    </>
  );
};

export default Card;
