import "./App";
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Journal } from "./pages/Journal";
import { Receipt } from "./pages/Receipt";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" />
        <Route path="/journal" element={<Journal />} />
        <Route path="/receipt" element={<Receipt />} />
      </Routes>
    </HashRouter>
  );
}

export {App};
