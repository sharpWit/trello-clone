"use client";

import { createContext, useContext, useState, useCallback } from "react";

interface ToggleCardContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

const ToggleCardContext = createContext<ToggleCardContextValue | null>(null);

export const ToggleCardProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((v) => !v), []);

  return (
    <ToggleCardContext.Provider value={{ isOpen, open, close, toggle }}>
      {children}
    </ToggleCardContext.Provider>
  );
};

export const useToggleCard = () => {
  const ctx = useContext(ToggleCardContext);
  if (!ctx)
    throw new Error("useToggleCard must be used within ToggleCardProvider");
  return ctx;
};
