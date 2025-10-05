# 🧩 Dungeon Link – MRU Hacks 2025

**Dungeon Link** is a cooperative, text-based mystery adventure where two players must **link together** to solve puzzles and progress through the story.

Built with a **React frontend** and a **Node.js backend** using **WebSockets** for real-time multiplayer.

---

## 🎯 Inspiration

Given the prompt **“link”**, we set out to build a mystery/puzzle **co-op text adventure** where players quite literally *link* up to communicate and solve challenges. The tone is playful, but the tech is serious: real-time sync, turns, and shared state.

---

## 🕹️ What It Does

- One player **hosts** a session and gets a **connect code**.  
- The second player **joins** using that code.  
- The backend links both clients over **WebSockets** and enforces **turn-taking**.  
- The UI renders synchronized prompts and player responses in real time.

---

## 🧱 Project Structure

```
DungeonLink/
├── frontend/          # React application (game UI & flow)
├── backend/           # Node.js WebSocket server (ws)
└── README.md
```

---

## ⚙️ Tech Stack

| Category   | Technology                      |
|------------|----------------------------------|
| Frontend   | React, HTML, CSS, JavaScript     |
| Backend    | Node.js, `ws` (WebSocket)        |
| Tooling    | npm, Git, VS Code                |
| Runtime    | Local development (localhost)    |

---

## 🚀 Getting Started

> **Prerequisites**
>
> - **Node.js** v14+  
> - **npm** (bundled with Node.js)

### Backend Setup (Node.js)

1. **Go to the backend folder**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the server**
   ```bash
   node Server.js
   ```
   - Default URL: **http://localhost:8000**

---

### Frontend Setup (React)

1. **Go to the frontend folder**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the dev server**
   ```bash
   npm start
   ```
   - App URL: **http://localhost:3000**

---

## ⚡ Quick Start (TL;DR)

```bash
# Backend
cd backend
npm install
node Server.js

# Frontend (in a new terminal)
cd frontend
npm install
npm start
```

- Backend: http://localhost:12000  
- Frontend: http://localhost:3000

---

## 🧠 How It Works

- **Backend:** Lightweight Node.js server using `ws` to manage sessions, turn order, and message passing.  
- **Session Flow:** Host creates a room → gets a **connect code** → second player joins → server keeps both clients in sync.  
- **Frontend:** React renders the text UI and listens to WebSocket events to update the shared game state in real time.

---

## 🏆 Accomplishments

- Shipped a working **real-time co-op** prototype in under 24 hours.  
- First-time use of **React** and **WebSockets** for several teammates.  
- Smooth pair programming, rapid debugging, and iterative story integration.

---

## 📚 What We Learned

- WebSocket patterns for **real-time multiplayer**.  
- Component-driven design and state handling in **React**.  
- Asynchronous client–server flows and synchronization.

---

## 🔮 What’s Next

- Add **3+ new levels** with deeper cooperative mechanics and branching paths.  
- Improve **connection stability**, error handling, and session recovery.  
- Enhance UI/UX with better prompts, animations, and polish.


### 🧩 “Link together to escape the dungeon.”

