"use client";

import React from "react";

import BoardCardButton from "./board-card-button";
import BoardCardGenerator from "./board-card-generator";
import { useModal } from "@/shared";

const BoardCardToggle = () => {
  const { isOpen, open } = useModal("unique-modal-board");

  return isOpen ? (
    <BoardCardGenerator />
  ) : (
    <BoardCardButton onClick={open} modalId={"unique-modal-board"} />
  );
};

export default BoardCardToggle;
