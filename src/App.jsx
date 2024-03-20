import React from "react";
import Cabecera from "./Cabecera.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import LogIn from "./pages/LogIn.jsx";
import Explora from "./pages/Explora.jsx";
import PanelControl from "./pages/PanelControl.jsx";
import Ajustes from "./pages/Ajustes.jsx";
import Anuncio from "./pages/Anuncio.jsx";
import OfertasCreadas from "./pages/OfertasCreadas.jsx";
import OfertasGustadas from "./pages/OfertasGustadas.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/registro" element={<Home />} />
        <Route path="/explora" element={<Explora />} />
        <Route path="/anuncio" element={<Anuncio />} />

        <Route path="/panelControl" element={<PanelControl />}>
          <Route path="creacionAnuncio" element={<Home />} />
          <Route path="favoritos" element={<OfertasGustadas />} />
          <Route path="ofertasCreadas" element={<OfertasCreadas />} />
          <Route path="ofertasAplicadas" element={<Home />} />
          <Route path="ajustes" element={<Ajustes />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
