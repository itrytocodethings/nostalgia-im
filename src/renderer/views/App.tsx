import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
function Hello() {
  const [pingCount, setPingCount] = useState(0);
  window.electron.ipcRenderer.once('ipc-example', (arg) => {
    // eslint-disable-next-line no-console
    console.log(arg);
  });
  return (
    <div className="bg-slate-500">
      <h1>Hello World, Electron!</h1>
      <button onClick={(e) => {
        window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
        setPingCount(count => count++);
      }}>click me!</button>
    </div>
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