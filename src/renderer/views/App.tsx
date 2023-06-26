import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import MainWindow from "../components/MainWindow/MainWindow";

function Hello() {
  const [pingCount, setPingCount] = useState(0);
  window.electron.ipcRenderer.once("ipc-example", (arg) => {
    // eslint-disable-next-line no-console
    console.log(arg);
  });
  return (
    <MainWindow windowTitle="Nostalgia IM">
      <div className="bg-slate-500">
        <p>hello world</p>
        <button
          onClick={(e) => {
            window.electron.ipcRenderer.sendMessage("ipc-example", ["ping"]);
            setPingCount((count) => count++);
          }}
        >
          click me!
        </button>
      </div>
    </MainWindow>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
