## 🚀 Demo

Live Demo (GitHub Pages):
👉 [https://sharpwit.github.io/trello-clone](https://sharpwit.github.io/trello-clone)

Source Code (develop branch):
👉 [https://github.com/sharpWit/trello-clone/tree/develop](https://github.com/sharpWit/trello-clone)

---

## 🧱 Tech Stack

| Category         | Technology                  |
| ---------------- | --------------------------- |
| Framework        | **Next.js 15 (App Router)** |
| Language         | **TypeScript**              |
| Styling          | **SCSS Modules**            |
| State Management | **Zustand**                 |
| Database         | **IndexedDB via Dexie.js**  |
| Build Tool       | **Turbopack**               |
| Package Manager  | **pnpm**                    |

---

## ✨ Features Implemented

### ✅ Board Management

- Create new boards
- Edit board title inline
- Delete boards
- Store all data locally using IndexedDB

### ✅ List Management

- Add new lists inside boards
- Edit and delete lists
- Data persistence using Dexie
- Clean separation of logic via custom hooks

### ✅ Card Management

- Create, edit, and delete cards within lists
- Edit title and description from modal
- Modal system with full details
- Live reactivity via `dexie-react-hooks`

### ✅ UI / UX

- Responsive design for desktop and mobile
- Clean, accessible UI inspired by Trello
- Inline editing and modals for smooth interaction
- Visual representation of card count on board cards

### 🚧 Not Implemented

- Drag & Drop (Lists and Cards)

---

## 🧩 Architecture

The project follows a **Feature-Driven** and **Atomic Design** structure:

```
src/
├── app/                   # Next.js App Router pages
├── components/            # Reusable UI components (atoms, molecules, organisms)
├── features/              # Feature modules (board, list, card, modal, etc.)
│   ├── board/
│   ├── list/
│   └── card/
├── db/                    # IndexedDB setup and repositories (Dexie)
│   ├── dexie/
│   │   ├── database.ts
│   │   ├── schemas.ts
│   │   └── repositories/
│   └── index.ts
├── shared/                # Shared constants, types, and icons
└── styles/                # Global SCSS (abstracts, mixins, variables)
```

Each feature encapsulates its UI components, logic hooks, and repository access, promoting **Separation of Concerns** and **reusability**.

---

## 🗄️ Data Layer — IndexedDB (Dexie)

All data is managed client-side via IndexedDB.
The schema includes:

```ts
boards: id, title, color, createdAt;
lists: id, boardId, title, createdAt;
cards: id, boardId, listId, title, description, createdAt;
```

Each entity is accessed through its own repository:

- `boardRepository`
- `listsRepository`
- `cardsRepository`

Data updates are automatically reflected in the UI using `useLiveQuery` from **dexie-react-hooks**.

---

## 🧠 State Management

Global state is handled with **Zustand**, while persistent state and reactivity are delegated to **Dexie hooks**.
This separation ensures:

- Fast local updates
- Persistent storage even after refresh
- Clean one-way data flow

---

## 🧰 Installation & Setup

### Prerequisites

Make sure you have **Node.js ≥ 18** and **pnpm ≥ 9** installed.

### Clone & Install

```bash
git clone https://github.com/sharpWit/trello-clone.git
cd trello-clone
pnpm install
```

### Run Development Server

```bash
pnpm dev
```

App runs at: [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
pnpm build
pnpm start
```

---

## 🧪 Scripts

| Command      | Description                        |
| ------------ | ---------------------------------- |
| `pnpm dev`   | Run development server (Turbopack) |
| `pnpm build` | Build app for production           |
| `pnpm start` | Start production server            |
| `pnpm lint`  | Run ESLint checks                  |

---

## 🧑‍💻 Author

**Saeed Khosravi**
📧 [khosravi.webmaster@gmail.com](mailto:khosravi.webmaster@gmail.com)
🔗 [GitHub: sharpWit](https://github.com/sharpWit)

---

## 📜 License

This project is created for interview purposes and not intended for commercial use.

---

## 🧭 Notes

- All features are implemented **on the client-side** only (no backend).
- Data persistence via **IndexedDB** allows all changes to survive reloads.
- Project prioritizes **clean architecture**, **readable code**, and **maintainability**.
- Drag & Drop is intentionally omitted due to time constraints.
