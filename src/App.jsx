import React from "react";
import "./App.css";
import Cabecera from "./Cabecera.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import LogIn from "./pages/LogIn.jsx";
import Explora from "./pages/Explora.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/registro" element={<Home />} />
        <Route path="/explora" element={<Explora />} />
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
