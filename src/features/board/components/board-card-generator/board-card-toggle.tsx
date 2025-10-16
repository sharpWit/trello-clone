"use client";

import React from "react";

import BoardCardButton from "./board-card-button";
import BoardCardGenerator from "./board-card-generator";
import { useToggleCard } from "@/shared";

const BoardCardToggle = () => {
  const { isOpen, open } = useToggleCard();

  return isOpen ? <BoardCardGenerator /> : <BoardCardButton onClick={open} />;
};

export default BoardCardToggle;
