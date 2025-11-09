# 🧠 TriCompare — ChatGPT × DeepSeek × Gemini (All-in-One AI Dashboard)

**TriCompare** is a lightweight **Electron app** that lets you open and chat with  
**ChatGPT**, **DeepSeek**, and **Google Gemini** — all on one screen.  
You can send a single prompt to all three at once or message each one individually —  
**no API keys required**.

---

## 🚀 Features

- 🪄 **Three AIs in one window** — ChatGPT, DeepSeek, Gemini  
- 💬 **Broadcast prompts** — Send one message to all simultaneously  
- 🎛️ **Per-AI control** — Send separately to any AI  
- 🔐 **No API keys or accounts needed** — Uses official web chat UIs  
- ⚡ **Runs locally** — No data sent anywhere except to the AIs you use  
- 🧠 **Smart input injection** — Works with modern React inputs  
- 🪟 **One-click launch** — Via included `run-tricompare.bat`

---

## 🧩 Preview

Each AI opens in its own browser pane inside a single app window:

ChatGPT	DeepSeek	Gemini
Compare responses side by side		

yaml
Copy code

---

## 📦 Installation

### 1. Clone the repo
```bash
git clone https://github.com/<yourusername>/tri-compare.git
cd tri-compare
2. Install dependencies
bash
Copy code
npm install
3. Run the app
bash
Copy code
npm start
Windows users: just double-click run-tricompare.bat.

🧰 Project Structure
bash
Copy code
tri-compare/
├── index.html          # Main Electron UI (3 webviews + control bar)
├── main.js             # Electron entry point
├── package.json        # Dependencies and scripts
├── run-tricompare.bat  # One-click launcher
└── README.md           # This file
⚙️ Usage
Start the app with npm start or run-tricompare.bat.

Log in to ChatGPT, DeepSeek, and Gemini inside their panes (first time only).

Type a prompt in the top bar.

Use:

Send to All → sends to every AI

Send OpenAI / DeepSeek / Gemini → sends to that one only

Compare outputs side-by-side instantly.

🧠 Tech Stack
Electron (multi-webview desktop app)

Node.js for launcher logic

HTML + Vanilla JS interface

No backend, no network code beyond the AIs you open

🪄 Troubleshooting
Issue	Fix
ChatGPT needs 2 clicks	Fixed in latest version — waits until Send button is ready
“Input box not found”	Make sure you’re on the chat page and logged in
Gemini blank page	Sign in with Google
Nothing launches	Run npm install first to install Electron

🧾 License
MIT License — free for personal or commercial use.
See LICENSE for details.

💬 Author
Created by Your Name
Built for AI researchers and productivity enthusiasts.

