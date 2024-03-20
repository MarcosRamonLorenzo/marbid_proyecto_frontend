import React from "react";
import Sidebar from "../components/panelControl/Sidebar.jsx";
import SidebarItem from "../components/panelControl/SidebarItem.jsx";
import { ScrollText, BookText, Heart, Settings } from "lucide-react";
import { Outlet } from "react-router-dom";

const PanelControl = () => {
  return (
    <div className="flex gap-20">
      <div className="">
        <Sidebar>
          <SidebarItem
            icon={<BookText />}
            text="Ofertas Creadas"
            path="ofertasCreadas"
          />
          <SidebarItem
            icon={<Heart />}
            text="Ofertas Gustadas"
            path="favoritos"
          />
          <SidebarItem
            icon={<ScrollText />}
            text="Ofertas Aplicadas"
            path="/"
          />
          <SidebarItem icon={<Settings />} text="Ajustes" path="ajustes" />
        </Sidebar>
      </div>
      {/* Pongo padinbg left para que se vea el contenedor de dentro.  */}
      <div className="w-[100%]">
        <Outlet />
      </div>
    </div>
  );
};

export default PanelControl;
