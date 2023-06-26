import { ipcRenderer } from "electron";

export const windowHandler = {
  close() {
    handleWindow(WindowActions.CLOSE);
  },
  minimize() {
    handleWindow(WindowActions.MINIMIZE);
  },
  maximize() {
    handleWindow(WindowActions.MAXIMIZE);
  },
};

function handleWindow(windowAction: WindowActions) {
  ipcRenderer.send("main-window-action", windowAction);
}

enum WindowActions {
  CLOSE = "CLOSE",
  MINIMIZE = "MINIMIZE",
  MAXIMIZE = "MAXIMIZE",
}
