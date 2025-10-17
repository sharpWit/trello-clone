import { useModalStore } from "@/shared/store";

export const useModal = (modalId: string) => {
  const { openModal, closeModal, isModalOpen } = useModalStore();

  return {
    isOpen: isModalOpen(modalId),
    open: () => openModal(modalId),
    close: () => closeModal(modalId),
  };
};
