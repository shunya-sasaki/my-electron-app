import { app, BrowserWindow } from "electron";
import { spawn } from "child_process";
import { config } from "dotenv";

const servers = {
  python: undefined,
};

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    // webPreferences: {
    //   preload: path.join(__dirname, "preload.js"),
    // },
  });

  win.loadFile("./build/index.html");
};

const getPythonExecutablePath = () => {
  if ("REACT_APP_PYTHONEXE" in process.env) {
    return process.env.REACT_APP_PYTHONEXE;
  } else {
    return "python";
  }
};

const runFastApi = () => {
  const pythonExecutablePath = getPythonExecutablePath();
  servers.python = spawn(pythonExecutablePath, [
    "-m",
    "uvicorn",
    "backend:app",
  ]);
  console.log(servers.python.pid);
};

app.whenReady().then(() => {
  config();
  runFastApi();
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      runFastApi();
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  console.log("kill child process");
  servers.python.kill();
  servers.python = undefined
  if (process.platform !== "darwin") {
    app.quit();
  }
});
