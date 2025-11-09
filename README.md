TriCompare — ChatGPT × DeepSeek × Gemini (All-in-One AI Dashboard)

TriCompare is a lightweight Electron app that lets you open and chat with
OpenAI ChatGPT, DeepSeek, and Google Gemini — all side by side,
with a single input bar to send one prompt to all, or to any one individually.
No API keys, no backend — it uses the official web apps directly.

🚀 Features

✅ Three AIs in one window — ChatGPT, DeepSeek, Gemini
✅ Broadcast prompts — Send a message to all three simultaneously
✅ Per-AI control — Send separate messages to each model
✅ No API keys required — Uses official web chat interfaces
✅ Offline local Electron app — Runs fully on your computer
✅ Smart input injection — Works around React input issues (ChatGPT, DeepSeek)
✅ One-click startup via included run-tricompare.bat

🧩 Screenshots
Chat view	Description
🖥️ Main window	Three webviews side-by-side: ChatGPT, DeepSeek, Gemini
💬 Toolbar	Type once → send to all or a single AI
⚙️ Independent reload	Each AI panel can be reloaded independently

(You can add your own screenshots here using ![alt](path) if you like.)

📦 Installation
1️⃣ Clone this repo
git clone https://github.com/<yourusername>/tri-compare.git
cd tri-compare

2️⃣ Install dependencies
npm install

3️⃣ Run the app
npm start


Or simply double-click the provided run-tricompare.bat (Windows users).

🧠 Tech Stack
Layer	Technology
UI	HTML, CSS (Tailwind-like minimal styling)
Backend / Shell	Node.js + Electron
Browser panels	<webview> (isolated Chromium instances)
Communication	In-page JavaScript injection with native React input events
⚙️ Project Structure
tri-compare/
├── index.html          # Main Electron UI (three webviews + control bar)
├── main.js             # Electron app bootstrap
├── package.json        # Dependencies + scripts
├── run-tricompare.bat  # One-click startup script for Windows
└── README.md           # This file

🪄 Usage

Launch the app (npm start or run-tricompare.bat)

Log in to ChatGPT, DeepSeek, and Gemini inside each panel
(you only need to do this once)

Type your prompt in the top text bar

Click:

🟢 Send to All — sends to all three AIs

⚪ Send OpenAI / DeepSeek / Gemini — sends to only that AI

🧰 Troubleshooting
Issue	Fix
❌ ChatGPT requires double click	Fixed — the app waits until the Send button is active
⚠️ “Input box not found”	Make sure you’re on the chat page and logged in
🧭 Gemini panel blank	Sign in with your Google account
🪟 Window blank	Run npm install once to install Electron dependencies
🪶 Slow load	First load caches the sites; subsequent loads are faster
🧑‍💻 Developer Notes

No external APIs — this app never sends your prompts anywhere but the official AI sites.

If ChatGPT or DeepSeek update their HTML, you can tweak the input selectors in index.html under:

function scriptForChatGPT() { ... }
function scriptForDeepSeek() { ... }


Tested on Windows 10/11, Node.js ≥ 18, Electron ≥ 32.

🧾 License

This project is open source under the MIT License
.

💬 Credits

Created by No_One

Inspired by multi-AI comparison workflows for research and productivity.
