# 🧠 TriCompare — ChatGPT × DeepSeek × Gemini (All-in-One AI Dashboard)

**TriCompare** is a lightweight **Electron app** that lets you chat with
**ChatGPT**, **DeepSeek**, and **Google Gemini** — all on one screen.
Send a single prompt to all three at once, or message each one individually —
**no API keys required**.

---

## 🚀 Features

- 🪄 Three AIs in one window — ChatGPT, DeepSeek, Gemini
- 💬 Broadcast prompts — Send one message to all simultaneously
- 🎛️ Per-AI control — Send separately to any AI
- 🔐 No API keys or accounts needed — Uses official web chat UIs
- ⚡ Runs locally — No data sent anywhere except to the AIs you use
- 🧠 Smart input injection — Works with modern React inputs
- 🪟 One-click launch — Via included `run-tricompare.bat`

---

## 🧩 Preview

Each AI opens in its own browser pane inside a single app window:

| ChatGPT | DeepSeek | Gemini |
| ------- | -------- | ------ |
| Compare responses side by side |

---

## 📦 Installation

```bash
# 1. Clone the repo
git clone https://github.com/mdsaimon1232/tri-compare.git
cd tri-compare

# 2. Install dependencies
npm install

# 3. Run the app
npm start
```

**Windows users:** just double-click `run-tricompare.bat`.

---

## 🧠 Project Structure

```
tri-compare/
├── index.html           # Main Electron UI (3 webviews + control bar)
├── main.js              # Electron entry point
├── package.json         # Dependencies and scripts
├── run-tricompare.bat   # One-click launcher
└── README.md            # This file
```

---

## ⚙️ Usage

1. Start the app with `npm start` or `run-tricompare.bat`.
2. Log in to ChatGPT, DeepSeek, and Gemini inside their panes (first time only).
3. Type a prompt in the top bar.
4. Use:
   - **Send to All →** sends prompt to every AI
   - **Send OpenAI / DeepSeek / Gemini →** sends to that one only
5. Compare the outputs side-by-side instantly.

---

## 🧠 Tech Stack

- Electron (multi-webview desktop app)
- Node.js for launcher logic
- HTML + Vanilla JS for interface
- **No backend**, no network code beyond the AIs you open

---

## 🪄 Troubleshooting

| Issue                      | Fix                                                    |
|----------------------------|--------------------------------------------------------|
| ChatGPT needs 2 clicks     | Fixed in latest version — wait until Send button ready |
| "Input box not found"      | Make sure you're on the chat page and logged in        |
| Gemini blank page          | Sign in with Google                                   |
| Nothing launches           | Run `npm install` first to install Electron           |

---

## 🧸 License

MIT License — free for personal or commercial use.
See [LICENSE](./LICENSE) for details.

---

## 💬 Author

Created by **No_One**
Built for AI researchers and productivity enthusiasts.
