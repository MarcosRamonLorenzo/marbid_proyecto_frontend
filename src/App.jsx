import React from "react";
import "./App.css";
import Cabecera from "./Cabecera.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iniciarSesion" element={<Home />} />
        <Route path="/registro" element={<Home />} />
        <Route path="/explora" element={<Home />} />
        <Route path="/anuncio" element={<Home />} />

        <Route path="/panelControl" element={<Home />}>
          <Route path="creacionAnuncio" element={<Home />} />
          <Route path="favoritos" element={<Home />} />
          <Route path="ofertasCreadas" element={<Home />} />
          <Route path="ofertasAplicadas" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
