"use client";

import React, {
  useEffect,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from "react";
import { createPortal } from "react-dom";
import styles from "./modal.module.scss";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  showCloseButton?: boolean;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
}

export interface ModalRef {
  focus: () => void;
  getContainer: () => HTMLDivElement | null;
}

const Modal = forwardRef<ModalRef, ModalProps>(
  (
    {
      isOpen,
      onClose,
      title,
      children,
      size = "medium",
      showCloseButton = true,
      closeOnBackdropClick = true,
      closeOnEscape = true,
    },
    ref
  ) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    // Expose methods via ref
    useImperativeHandle(ref, () => ({
      focus: () => {
        containerRef.current?.focus();
      },
      getContainer: () => containerRef.current,
    }));

    // Handle escape key press
    const handleEscapeKey = useCallback(
      (event: KeyboardEvent) => {
        if (closeOnEscape && event.key === "Escape") {
          onClose();
        }
      },
      [onClose, closeOnEscape]
    );

    // Handle backdrop click
    const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (closeOnBackdropClick && event.target === event.currentTarget) {
        onClose();
      }
    };

    // Auto-focus when modal opens
    useEffect(() => {
      if (isOpen) {
        containerRef.current?.focus();
      }
    }, [isOpen]);

    // Add event listeners when modal is open
    useEffect(() => {
      if (isOpen && closeOnEscape) {
        document.addEventListener("keydown", handleEscapeKey);
        document.body.style.overflow = "hidden";
      }

      return () => {
        document.removeEventListener("keydown", handleEscapeKey);
        document.body.style.overflow = "unset";
      };
    }, [isOpen, closeOnEscape, handleEscapeKey]);

    // Don't render if not open
    if (!isOpen) return null;

    const modalContent = (
      <div
        className={styles.modalOverlay}
        onClick={handleBackdropClick}
        data-testid="modal-overlay"
      >
        {children}
      </div>
    );

    // Use portal to render modal at body level
    if (typeof window !== "undefined") {
      return createPortal(modalContent, document.body);
    }

    return modalContent;
  }
);

Modal.displayName = "Modal";
export default Modal;
