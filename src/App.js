import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TablaMedicamentos from "./components/pages/TablaMedicamentos";
import Login from "./components/Login";
import Register from "./components/Registro"; // Asegúrate de tener un componente de registro

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<TablaMedicamentos />} />
      </Routes>
    </Router>
  );
}

export default App;
