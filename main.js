// main.js
import { app, BrowserWindow, session } from "electron";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = "true";

function createWindow() {
  const win = new BrowserWindow({
    width: 1600,
    height: 900,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webviewTag: true,
      spellcheck: false
    },
    title: "TriCompare"
  });

  // Keep UA clean (remove explicit Electron token)
  const ses = session.defaultSession;
  ses.setUserAgent(ses.getUserAgent().replace(/Electron\/[\d.]+\s?/, ""));

  win.loadFile(path.join(__dirname, "index.html"));
}

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
