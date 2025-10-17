"use client";

import CardGenerator from "@/features/card/components/card-generator/card-generator";
import { CardButton } from "@/features/card/components/card-generator/card-button";
import { useModal } from "@/shared";

const CardFormToggle = ({
  listId,
  boardId,
}: {
  listId?: string;
  boardId: string;
}) => {
  const { isOpen, open } = useModal(`form-modal-${listId}`);

  return isOpen ? (
    <CardGenerator listId={listId} boardId={boardId} />
  ) : (
    <CardButton onClick={open} />
  );
};

export default CardFormToggle;
