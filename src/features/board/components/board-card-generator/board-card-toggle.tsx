"use client";

import React from "react";

import BoardCardButton from "./board-card-button";
import BoardCardGenerator from "./board-card-generator";
import { useBoardCard } from "@/features/board/providers";

const BoardCardToggle = () => {
  const { isOpen, open } = useBoardCard();

  return isOpen ? <BoardCardGenerator /> : <BoardCardButton onClick={open} />;
};

export default BoardCardToggle;
