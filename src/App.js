import "./App";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Journal } from "./pages/Journal";
import { Receipt } from "./pages/Receipt";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="Journal" element={<Journal />} />
          <Route path="Receipt" element={<Receipt />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
