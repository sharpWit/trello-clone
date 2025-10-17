import { create } from "zustand";

interface ModalState {
  modals: Record<string, boolean>;
  openModal: (modalId: string) => void;
  closeModal: (modalId: string) => void;
  closeAllModals: () => void;
  isModalOpen: (modalId: string) => boolean;
  getOpenModals: () => string[];
}

export const useModalStore = create<ModalState>((set, get) => ({
  // Generic modal state
  modals: {},

  openModal: (modalId: string) =>
    set((state) => ({
      modals: {
        ...state.modals,
        [modalId]: true,
      },
    })),

  closeModal: (modalId: string) =>
    set((state) => ({
      modals: {
        ...state.modals,
        [modalId]: false,
      },
    })),

  closeAllModals: () =>
    set({
      modals: {},
    }),

  isModalOpen: (modalId: string) => get().modals[modalId] || false,

  getOpenModals: () => {
    const { modals } = get();
    return Object.keys(modals).filter((modalId) => modals[modalId]);
  },
}));
