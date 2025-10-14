import { Board } from "@/shared/types";

export const boardsData: Board[] = [
  {
    id: 1,
    title: "Board 1",
    color: "blue",
    list: [
      {
        id: 1,
        title: "Task 1",
        cards: [{ id: 1, title: "Card 1" }],
      },
      { id: 2, title: "Task 2", cards: [] },
      {
        id: 3,
        title: "Task 3",
        cards: [
          {
            id: 1,
            title: "Card 1",
          },
          {
            id: 2,
            title: "Card 2",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Board 2",
    color: "orange",
    list: [
      {
        id: 1,
        title: "Task 1",
        cards: [
          {
            id: 1,
            title: "Card 1",
          },
          {
            id: 2,
            title: "Card 2",
          },
        ],
      },
      { id: 2, title: "Task 2", cards: [] },
    ],
  },
  {
    id: 3,
    title: "Board 3",
    color: "green",
    list: [
      {
        id: 1,
        title: "Task 1",
        cards: [
          {
            id: 1,
            title: "Card 1",
          },
          {
            id: 2,
            title: "Card 2",
          },
          {
            id: 3,
            title: "Card 3",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Board 4",
    color: "pink",
    list: [
      {
        id: 1,
        title: "Task 1",
        cards: [],
      },
      {
        id: 2,
        title: "Task 2",
        cards: [],
      },
    ],
  },
];
