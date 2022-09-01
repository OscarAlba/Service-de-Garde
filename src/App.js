
import './App.css';
import React from "react";
import { Encabezado } from "./Encabezado";
import { Journal } from "./Journal";

function App() {
  return (
    <div className="form-container">
      <Encabezado />
      <Journal />
    </div>
  );
}

export default App;
