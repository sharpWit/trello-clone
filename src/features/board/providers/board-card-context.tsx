"use client";

import { createContext, useContext, useState, useCallback } from "react";

interface BoardCardContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

const BoardCardContext = createContext<BoardCardContextValue | null>(null);

export const BoardCardProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((v) => !v), []);

  return (
    <BoardCardContext.Provider value={{ isOpen, open, close, toggle }}>
      {children}
    </BoardCardContext.Provider>
  );
};

export const useBoardCard = () => {
  const ctx = useContext(BoardCardContext);
  if (!ctx)
    throw new Error("useBoardCard must be used within BoardCardProvider");
  return ctx;
};
