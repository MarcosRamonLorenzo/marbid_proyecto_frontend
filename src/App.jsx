import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import LogIn from "./pages/LogIn.jsx";
import Explore from "./pages/Explore.jsx";
import Service from "./pages/Service.jsx";
import Settings from "./pages/Settings.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import LikedServices from "./pages/LikedServices.jsx";
import CreatedServices from "./pages/CreatedServices.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/sign-up" element={<LogIn />} />
        <Route path="/registro" element={<Home />} />
        <Route path="/explora" element={<Explore />} />
        <Route path="/anuncio/:idAnuncio" element={<Service />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/panelControl" element={<Dashboard />}>
          <Route path="creacionAnuncio" element={<Home />} />
          <Route path="favoritos" element={<LikedServices />} />
          <Route path="ofertasCreadas" element={<CreatedServices />} />
          <Route path="ofertasAplicadas" element={<Home />} />
          <Route path="ajustes" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
