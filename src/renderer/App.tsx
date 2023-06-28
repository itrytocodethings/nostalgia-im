import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import MainWindow from "./shared/components/MainWindow/MainWindow";
import AppMain from "./views/AppMain/AppMain";
import SignUpForm from "./views/SignUpForm/SignUpForm";

export default function App() {
  return (
    <MainWindow windowTitle="nosIM" maximizeDisabled>
      <Router>
        <Routes>
          <Route path="/" element={<AppMain />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </Router>
    </MainWindow>
  );
}
