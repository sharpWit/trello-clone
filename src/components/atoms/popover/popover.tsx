"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./popover.module.scss";
import { CloseIcon, LeftChevIcon } from "@/shared";

export interface PopoverOption {
  label: string;
  value: string;
  danger?: boolean;
}

interface ConfirmationContent {
  title: string;
  description: string;
  buttonLabel: string;
}

interface PopoverProps {
  trigger: React.ReactNode;
  title?: string;
  options: PopoverOption[];
  onSelect?: (value: string) => Promise<void> | void;
  align?: "left" | "right";
}

const confirmationTexts: Record<string, ConfirmationContent> = {
  deleteList: {
    title: "Delete List",
    description:
      "All actions will be removed from the activity feed and you won’t be able to re-open the list. There is no undo.",
    buttonLabel: "Delete list",
  },
  deleteAllCards: {
    title: "Delete All Cards",
    description: "This will remove all the cards in this list from the board.",
    buttonLabel: "Delete all cards",
  },
};

const Popover: React.FC<PopoverProps> = ({
  trigger,
  title = "List Actions",
  options,
  onSelect,
  align = "right",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<"main" | "confirm">("main");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  // --- close on outside click ---
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setView("main");
        setSelectedOption(null);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // --- open confirm screen ---
  const handleOptionClick = (value: string) => {
    if (confirmationTexts[value]) {
      setSelectedOption(value);
      setView("confirm");
    } else {
      onSelect?.(value);
      setIsOpen(false);
    }
  };

  // --- confirm action ---
  const handleConfirm = async () => {
    if (selectedOption) await onSelect?.(selectedOption);
    setIsOpen(false);
    setView("main");
    setSelectedOption(null);
  };

  const handleBack = () => {
    setView("main");
    setSelectedOption(null);
  };

  const handleClose = () => {
    setIsOpen(false);
    setView("main");
    setSelectedOption(null);
  };

  const currentConfirm = selectedOption
    ? confirmationTexts[selectedOption]
    : null;

  return (
    <div className={styles.popoverContainer} ref={popoverRef}>
      <button
        className={styles.trigger}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        {trigger}
      </button>

      {isOpen && (
        <div
          className={`${styles.popover} ${
            align === "right" ? styles.alignRight : styles.alignLeft
          }`}
        >
          {/* HEADER */}
          <div className={styles.header}>
            {view === "confirm" && (
              <button
                className={styles.returnBtn}
                onClick={handleBack}
                aria-label="Go back"
              >
                <LeftChevIcon title="go back" />
              </button>
            )}
            <span>{view === "main" ? title : currentConfirm?.title}</span>
            <button
              className={styles.closeBtn}
              onClick={handleClose}
              aria-label="Close popover"
            >
              <CloseIcon title="close" />
            </button>
          </div>

          {/* MAIN MENU */}
          {view === "main" && (
            <div className={styles.optionsContainer}>
              <ul className={styles.options}>
                {options.map((opt) => (
                  <li
                    key={opt.value}
                    className={`${styles.option} ${
                      opt.danger ? styles.danger : ""
                    }`}
                    onClick={() => handleOptionClick(opt.value)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) =>
                      e.key === "Enter" && handleOptionClick(opt.value)
                    }
                  >
                    <div className={styles.list}>{opt.label}</div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CONFIRMATION SCREEN */}
          {view === "confirm" && currentConfirm && (
            <div className={styles.confirmContainer}>
              <p className={styles.confirmText}>{currentConfirm.description}</p>
              <button
                className={styles.confirmButton}
                onClick={handleConfirm}
                aria-label={currentConfirm.buttonLabel}
              >
                {currentConfirm.buttonLabel}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Popover;
