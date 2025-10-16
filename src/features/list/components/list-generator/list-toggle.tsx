"use client";

import React from "react";

import { useBoardCard } from "@/features/board/providers";
import ListButton from "@/features/list/components/list-generator/list-button";
import ListGenerator from "@/features/list/components/list-generator/list-generator";

const ListToggle = () => {
  const { isOpen, open } = useBoardCard();

  return isOpen ? <ListGenerator /> : <ListButton onClick={open} />;
};

export default ListToggle;
