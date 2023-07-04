import { app, BrowserWindow, ipcMain } from "electron";
import installExtension, {REACT_DEVELOPER_TOOLS} from "electron-extension-installer";
// This allows TypeScript to pick up the magic constants that's auto-generated by Forge's Webpack
// plugin that tells the Electron app where to look for the Webpack-bundled app code (depending on
// whether you're running in development or production).
declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  app.quit();
}

const createWindow = (): void => {
  const mainWindow = new BrowserWindow({
    transparent: true,
    resizable: false,
    frame: false,
    height: 500,
    width: 220,
    minWidth: 220,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // Open the DevTools.
  if (!app.isPackaged) {
    mainWindow.resizable = true;
    mainWindow.webContents.openDevTools()
  }

};

app.whenReady().then(() => {
  if (!app.isPackaged) {
    installExtension(REACT_DEVELOPER_TOOLS)
    .then((name) => console.log(name))
    .catch((err) => console.log(err))
  }
})

ipcMain.on("ipc-example", async (event, arg) => {
  const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`;
  console.log(msgTemplate(arg));
  event.reply("ipc-example", msgTemplate("pong - reply"));
});

ipcMain.on("main-window-action", async (event, action) => {
  const window = BrowserWindow.getFocusedWindow();
  if (action === "MINIMIZE") window.minimize();
  if (action === "MAXIMIZE" && !window.isMaximized()) {
    window.maximize();
  } else {
    window.unmaximize();
  }
  if (action === "CLOSE") window.close();
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
